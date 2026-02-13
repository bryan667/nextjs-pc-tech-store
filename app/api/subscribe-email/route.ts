import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import { isRateLimited } from '@/lib/helpers';
import { config } from '@/lib/config';

export async function POST(req: NextRequest) {
  const ip: string =
    req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const { email, url } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

  try {
    const gpkey = config.gpKey;

    if (!gpkey) {
      throw new Error('GP_KEY is not set');
    }

    const auth = new google.auth.JWT({
      email: config.gClientEmail,
      key: gpkey,
      scopes,
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: config.gSpreadsheetId,
      range: 'Sheet1!A:D',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email, new Date().toISOString(), ip, url]],
      },
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Failed to save email' },
      { status: 500 },
    );
  }
}
