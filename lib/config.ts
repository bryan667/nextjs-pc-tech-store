function getEnvOrWarn(name: string): string {
  const value = process.env[name];
  if (!value) {
    console.warn(`Missing environment variable: ${name}`);
    return '';
  }
  return value;
}

const googlePrivateKeyBase64 = getEnvOrWarn('GOOGLE_PRIVATE_KEY_BASE64');
const googleClientEmail = getEnvOrWarn('GOOGLE_CLIENT_EMAIL');
const googleSheetId = getEnvOrWarn('GOOGLE_SHEET_ID');

export const config = {
  gpKey: Buffer.from(googlePrivateKeyBase64, 'base64').toString('utf-8'),
  gClientEmail: googleClientEmail,
  gSpreadsheetId: googleSheetId,
  rateLimit: Number(process.env.RATE_LIMIT) || 10,
  rateWindowMs: Number(process.env.RATE_WINDOW_MS) || 60 * 1000,
};
