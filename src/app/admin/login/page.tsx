'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminSignIn } from '@/lib/firebase/auth-admin';

const DEFAULT_EMAIL = 'admin@flybit.in';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await adminSignIn(email, password);
      router.push('/admin');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border border-border bg-dark-2 p-10 rounded-[3px]"
      >
        <h1 className="font-cormorant text-3xl text-text mb-2">Admin Login</h1>
        <p className="text-text-muted text-sm mb-8">FLYBIT Dynamics content management</p>

        {error && (
          <div className="mb-4 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-sm rounded-[2px]">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
            className="w-full bg-dark-3 border border-border text-text p-3 rounded-[2px] outline-none focus:border-gold/40"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full bg-dark-3 border border-border text-text p-3 rounded-[2px] outline-none focus:border-gold/40"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold hover:bg-gold-light text-black font-medium py-3 text-[0.75rem] tracking-[0.16em] uppercase rounded-[2px] disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>

        <p className="text-[0.68rem] text-text-dim mt-6 text-center">
          Default: <span className="text-text-muted">admin@flybit.in</span>
        </p>
      </form>
    </div>
  );
}
