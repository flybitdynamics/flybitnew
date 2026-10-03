import { NextResponse } from 'next/server';
import { createSessionToken, credentialsMatch, SESSION_SECONDS, STUDIO_COOKIE, STUDIO_PATH, studioConfig } from '@/lib/formation-studio/auth';

// POST /formation-studio/login — sign-in form target.
export async function POST(request: Request) {
  const cfg = studioConfig();
  const back = new URL(STUDIO_PATH, request.url);

  const form = await request.formData().catch(() => null);
  const user = String(form?.get('user') ?? '');
  const password = String(form?.get('password') ?? '');

  if (!credentialsMatch(cfg, user, password)) {
    await new Promise(r => setTimeout(r, 700)); // slow down password guessing
    return NextResponse.redirect(new URL(`${STUDIO_PATH}?error=1`, request.url), 303);
  }

  const res = NextResponse.redirect(back, 303);
  res.cookies.set(STUDIO_COOKIE, createSessionToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: STUDIO_PATH,
    maxAge: SESSION_SECONDS,
  });
  return res;
}
