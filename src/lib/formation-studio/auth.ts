import { createHash, scryptSync, timingSafeEqual } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { cookies } from 'next/headers';

// Drone Formation Studio is an internal tool behind one ID + password.
// This repo is public, so the password is never stored in plain text — only two
// one-way scrypt hashes:
//   - LOGIN hash:   checks the password typed on the sign-in form
//   - SESSION check: the session cookie is scrypt(password, session salt), which can
//     only be produced by someone who knows the password; we store sha256 of it.
// Reading this file is not enough to sign in or to forge a cookie.
// To change the login without editing code, set FORMATION_STUDIO_USER and
// FORMATION_STUDIO_PASSWORD in the hosting environment (they take priority).

export const STUDIO_COOKIE = 'flybit_formation_studio';
export const STUDIO_PATH = '/formation-studio';
export const SESSION_SECONDS = 60 * 60 * 24 * 7; // 7 days

const LOGIN_SALT = 'flybit-formation-studio/login';
const SESSION_SALT = 'flybit-formation-studio/session';
const SCRYPT = { N: 16384, r: 8, p: 1 } as const;

const BUILT_IN = {
  user: 'flybitadmin',
  loginHash: '0564cad547708b173448b021bd05c0247be8b72b931dafec690b9fa272ca3fdf',
  sessionCheck: '704b4b2a28267ccf2d3c43a3635b9001e484fca993a5a469f3374ea82cd0b696',
};

const FILES_DIR = path.join(process.cwd(), 'private', 'formation-studio');

const loginHashOf = (password: string) => scryptSync(password, LOGIN_SALT, 32, SCRYPT).toString('hex');
const sessionTokenOf = (password: string) => scryptSync(password, SESSION_SALT, 32, SCRYPT).toString('base64url');
const sha256 = (v: string) => createHash('sha256').update(v).digest('hex');

interface StudioConfig {
  user: string;
  loginHash: string;
  sessionCheck: string;
}

let envCache: { key: string; cfg: StudioConfig } | null = null;

export function studioConfig(): StudioConfig {
  const user = process.env.FORMATION_STUDIO_USER?.trim();
  const password = process.env.FORMATION_STUDIO_PASSWORD;
  if (!user || !password) return BUILT_IN;
  const key = `${user}\n${password}`;
  if (envCache?.key !== key) {
    envCache = { key, cfg: { user, loginHash: loginHashOf(password), sessionCheck: sha256(sessionTokenOf(password)) } };
  }
  return envCache.cfg;
}

function safeEqual(a: string, b: string) {
  const ba = Buffer.from(a), bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

export function credentialsMatch(cfg: StudioConfig, user: string, password: string) {
  // check both fields every time so the response time doesn't reveal which one was wrong
  const okUser = safeEqual(user.trim().toLowerCase(), cfg.user.toLowerCase());
  const okPass = safeEqual(loginHashOf(password), cfg.loginHash);
  return okUser && okPass;
}

// Only called after credentialsMatch succeeded, with the password just typed.
export function createSessionToken(password: string) {
  return sessionTokenOf(password);
}

export async function hasStudioSession(): Promise<boolean> {
  const token = (await cookies()).get(STUDIO_COOKIE)?.value;
  if (!token || token.length > 100) return false;
  return safeEqual(sha256(token), studioConfig().sessionCheck);
}

export function studioFile(name: 'index.html' | 'sample.png') {
  return readFile(path.join(FILES_DIR, name));
}

export const privateHeaders = {
  'Cache-Control': 'private, no-store',
  'X-Robots-Tag': 'noindex, nofollow',
};
