'use client';

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import { getFirebaseAuth } from './client';
import {
  localAdminSignIn,
  localAdminSignOut,
  checkAdminSession,
  type AdminUser,
} from '../admin/auth';

const ADMIN_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  if (ADMIN_EMAILS.length === 0) return true;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

/** Primary login — predefined credentials via secure API route */
export async function adminSignIn(email: string, password: string): Promise<AdminUser> {
  return localAdminSignIn(email, password);
}

export async function adminSignOut(): Promise<void> {
  await localAdminSignOut();
  const auth = getFirebaseAuth();
  if (auth) {
    try {
      await signOut(auth);
    } catch {
      /* ignore */
    }
  }
}

export function subscribeAdminAuth(callback: (user: AdminUser | null) => void): () => void {
  let active = true;

  const check = async () => {
    const session = await checkAdminSession();
    if (active) callback(session);
  };

  check();
  const interval = setInterval(check, 30000);

  const auth = getFirebaseAuth();
  let unsubFirebase = () => {};

  if (auth) {
    unsubFirebase = onAuthStateChanged(auth, async (user) => {
      if (user && isAdminEmail(user.email)) {
        if (active) callback({ email: user.email || '' });
      } else {
        const session = await checkAdminSession();
        if (active) callback(session);
      }
    });
  }

  return () => {
    active = false;
    clearInterval(interval);
    unsubFirebase();
  };
}

/** Optional: Firebase Auth login (requires Email/Password enabled in console) */
export async function firebaseAdminSignIn(email: string, password: string): Promise<User> {
  const auth = getFirebaseAuth();
  if (!auth) throw new Error('Firebase Auth is not configured');
  const cred = await signInWithEmailAndPassword(auth, email, password);
  if (!isAdminEmail(cred.user.email)) {
    await signOut(auth);
    throw new Error('You do not have admin access.');
  }
  return cred.user;
}
