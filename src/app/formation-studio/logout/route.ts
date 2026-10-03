import { NextResponse } from 'next/server';
import { STUDIO_COOKIE, STUDIO_PATH } from '@/lib/formation-studio/auth';

// POST /formation-studio/logout — clears the studio session.
export async function POST(request: Request) {
  const res = NextResponse.redirect(new URL(STUDIO_PATH, request.url), 303);
  res.cookies.set(STUDIO_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: STUDIO_PATH,
    maxAge: 0,
  });
  return res;
}
