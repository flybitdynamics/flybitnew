import { cookies } from 'next/headers';
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_VALUE } from './session';

export async function requireAdminSession(): Promise<{ email: string } | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_SESSION_COOKIE);
  if (session?.value !== ADMIN_SESSION_VALUE) return null;
  return { email: (process.env.ADMIN_EMAIL || 'admin@flybit.in').trim() };
}

export function unauthorizedResponse() {
  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
