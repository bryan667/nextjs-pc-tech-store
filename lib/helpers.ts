import { config } from './config';
const RATE_LIMIT = Number(config.rateLimit) || 10;
const RATE_WINDOW_MS = Number(config.rateWindowMs) || 60 * 1000;

const rateMap = new Map();
export function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateMap.get(ip) || { count: 0, start: now };

  if (now - entry.start > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, start: now });
    return false;
  }

  entry.count += 1;
  rateMap.set(ip, entry);
  return entry.count > RATE_LIMIT;
}
