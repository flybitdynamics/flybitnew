'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { subscribeAdminAuth, adminSignOut } from '@/lib/firebase/auth-admin';

const NAV = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/stories', label: 'Stories' },
  { href: '/admin/stories/create', label: 'Create Story' },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const isLogin = pathname === '/admin/login';

  useEffect(() => {
    const unsub = subscribeAdminAuth((user) => {
      setAuthed(!!user);
      setReady(true);
      if (!user && !isLogin) router.replace('/admin/login');
      if (user && isLogin) router.replace('/admin');
    });
    return unsub;
  }, [isLogin, router]);

  if (!ready) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-text-muted">
        Loading...
      </div>
    );
  }

  if (isLogin) return <>{children}</>;

  if (!authed) return null;

  return (
    <div className="min-h-screen bg-black text-text flex font-sans">
      <aside className="w-56 shrink-0 border-r border-border bg-dark p-6 flex flex-col">
        <Link href="/admin" className="font-bebas text-2xl text-gold tracking-wider mb-8">
          FLYBIT Admin
        </Link>
        <nav className="flex flex-col gap-1 flex-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2.5 text-[0.78rem] rounded-[2px] transition-colors ${
                pathname === item.href
                  ? 'bg-gold/15 text-gold'
                  : 'text-text-muted hover:text-text hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => adminSignOut().then(() => router.push('/admin/login'))}
          className="text-left text-[0.72rem] text-text-dim hover:text-gold uppercase tracking-wider mt-4"
        >
          Logout
        </button>
        <Link href="/" className="text-[0.68rem] text-text-dim hover:text-gold mt-2">
          ← Back to site
        </Link>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
