import { isRateLimited } from '@/lib/helpers';
import { google } from 'googleapis';
import { POST } from './route';

const appendMock = jest.fn();

jest.mock('@/lib/helpers', () => ({
  isRateLimited: jest.fn(),
}));

jest.mock('@/lib/config', () => ({
  config: {
    gpKey: 'private-key',
    gClientEmail: 'bot@example.com',
    gSpreadsheetId: 'sheet-id',
    rateLimit: 10,
    rateWindowMs: 60000,
  },
}));

jest.mock('next/server', () => ({
  NextResponse: {
    json: (body: unknown, init?: { status?: number }) => ({
      status: init?.status ?? 200,
      json: async () => body,
    }),
  },
}));

jest.mock('googleapis', () => ({
  google: {
    auth: {
      JWT: jest.fn(),
    },
    sheets: jest.fn(() => ({
      spreadsheets: {
        values: {
          append: appendMock,
        },
      },
    })),
  },
}));

const mockedIsRateLimited = isRateLimited as jest.MockedFunction<
  typeof isRateLimited
>;
const mockedGoogle = google as unknown as {
  auth: { JWT: jest.Mock };
  sheets: jest.Mock;
};

describe('POST /api/subscribe-email', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    mockedIsRateLimited.mockReturnValue(false);
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  function makeRequest(body: { email?: string; url?: string }) {
    return {
      headers: new Headers({ 'x-forwarded-for': '1.2.3.4' }),
      json: jest.fn().mockResolvedValue(body),
    } as any;
  }

  it('returns 429 when the IP is rate limited', async () => {
    mockedIsRateLimited.mockReturnValue(true);

    const response = await POST(makeRequest({ email: 'a@b.com', url: '/' }));
    const payload = await response.json();

    expect(response.status).toBe(429);
    expect(payload).toEqual({ error: 'Too many requests' });
    expect(appendMock).not.toHaveBeenCalled();
  });

  it('returns 400 for an invalid email', async () => {
    const response = await POST(makeRequest({ email: 'invalid', url: '/' }));
    const payload = await response.json();

    expect(response.status).toBe(400);
    expect(payload).toEqual({ error: 'Invalid email' });
    expect(appendMock).not.toHaveBeenCalled();
  });

  it('appends to Google Sheets and returns 200 on success', async () => {
    appendMock.mockResolvedValueOnce({});

    const response = await POST(
      makeRequest({ email: 'valid@example.com', url: '/landing' }),
    );
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload).toEqual({ ok: true });
    expect(mockedGoogle.auth.JWT).toHaveBeenCalledWith({
      email: 'bot@example.com',
      key: 'private-key',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    expect(mockedGoogle.sheets).toHaveBeenCalled();
    expect(appendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        spreadsheetId: 'sheet-id',
        range: 'Sheet1!A:D',
        valueInputOption: 'RAW',
        requestBody: {
          values: [
            ['valid@example.com', expect.any(String), '1.2.3.4', '/landing'],
          ],
        },
      }),
    );
  });

  it('returns 500 when Google Sheets append fails', async () => {
    appendMock.mockRejectedValueOnce(new Error('append failed'));

    const response = await POST(
      makeRequest({ email: 'valid@example.com', url: '/' }),
    );
    const payload = await response.json();

    expect(response.status).toBe(500);
    expect(payload).toEqual({ error: 'Failed to save email' });
  });
});
