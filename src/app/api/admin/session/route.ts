import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_VALUE } from '@/lib/admin/session';

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_SESSION_COOKIE);

  if (session?.value === ADMIN_SESSION_VALUE) {
    return NextResponse.json({
      authenticated: true,
      email: process.env.ADMIN_EMAIL || 'admin@flybit.in',
    });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
