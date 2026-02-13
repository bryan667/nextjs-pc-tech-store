const ORIGINAL_ENV = process.env;

describe('config', () => {
  let consoleWarnSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
    process.env.GOOGLE_PRIVATE_KEY_BASE64 =
      Buffer.from('private-key').toString('base64');
    process.env.GOOGLE_CLIENT_EMAIL = 'bot@example.com';
    process.env.GOOGLE_SHEET_ID = 'sheet-id';
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it('loads when all required Google env vars are present', () => {
    const { config } = require('./config');

    expect(config.gpKey).toBe('private-key');
    expect(config.gClientEmail).toBe('bot@example.com');
    expect(config.gSpreadsheetId).toBe('sheet-id');
  });

  it.each([
    'GOOGLE_PRIVATE_KEY_BASE64',
    'GOOGLE_CLIENT_EMAIL',
    'GOOGLE_SHEET_ID',
  ])('warns when %s is missing', (envName) => {
    delete process.env[envName];

    const { config } = require('./config');
    expect(config).toBeDefined();
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      `Missing environment variable: ${envName}`,
    );
  });
});
