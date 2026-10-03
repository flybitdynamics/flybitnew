import { createHmac, timingSafeEqual } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { cookies } from 'next/headers';

// Drone Formation Studio is an internal tool: one ID + password from env vars,
// session in a signed httpOnly cookie. The cookie value is `<expiry>.<hmac>`, so it
// cannot be forged without FORMATION_STUDIO_SECRET (unlike a fixed cookie value).

export const STUDIO_COOKIE = 'flybit_formation_studio';
export const STUDIO_PATH = '/formation-studio';
export const SESSION_SECONDS = 60 * 60 * 24 * 7; // 7 days

const FILES_DIR = path.join(process.cwd(), 'private', 'formation-studio');

interface StudioConfig {
  user: string;
  password: string;
  secret: string;
}

export function studioConfig(): StudioConfig | null {
  const user = process.env.FORMATION_STUDIO_USER?.trim();
  const password = process.env.FORMATION_STUDIO_PASSWORD;
  const secret = process.env.FORMATION_STUDIO_SECRET;
  if (!user || !password || !secret || secret.length < 32) return null;
  return { user, password, secret };
}

function sign(payload: string, secret: string) {
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

function safeEqual(a: string, b: string) {
  const ba = Buffer.from(a), bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

export function credentialsMatch(cfg: StudioConfig, user: string, password: string) {
  // compare both fields every time so the response time doesn't reveal which one was wrong
  const okUser = safeEqual(user.trim().toLowerCase(), cfg.user.toLowerCase());
  const okPass = safeEqual(password, cfg.password);
  return okUser && okPass;
}

export function createSessionToken(cfg: StudioConfig) {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  return `${expires}.${sign(`${cfg.user}:${expires}`, cfg.secret)}`;
}

export async function hasStudioSession(): Promise<boolean> {
  const cfg = studioConfig();
  if (!cfg) return false;
  const token = (await cookies()).get(STUDIO_COOKIE)?.value;
  if (!token) return false;
  const [expires, sig] = token.split('.');
  if (!expires || !sig || !/^\d+$/.test(expires)) return false;
  if (Number(expires) < Date.now() / 1000) return false;
  // signing includes the user, so changing FORMATION_STUDIO_USER or the secret signs everyone out
  return safeEqual(sig, sign(`${cfg.user}:${expires}`, cfg.secret));
}

export function studioFile(name: 'index.html' | 'sample.png') {
  return readFile(path.join(FILES_DIR, name));
}

export const privateHeaders = {
  'Cache-Control': 'private, no-store',
  'X-Robots-Tag': 'noindex, nofollow',
};
