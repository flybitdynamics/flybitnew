'use client';

export interface AdminUser {
  email: string;
}

export async function localAdminSignIn(email: string, password: string): Promise<AdminUser> {
  const res = await fetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || 'Login failed');
  }

  return { email: data.email || email };
}

export async function localAdminSignOut(): Promise<void> {
  await fetch('/api/admin/logout', { method: 'POST' });
}

export async function checkAdminSession(): Promise<AdminUser | null> {
  try {
    const res = await fetch('/api/admin/session', { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.authenticated) return { email: data.email };
    return null;
  } catch {
    return null;
  }
}
