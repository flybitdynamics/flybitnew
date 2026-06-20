import { existsSync, readFileSync } from 'fs';
import path from 'path';
import { cert, getApps, initializeApp, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import { getStorage, type Storage } from 'firebase-admin/storage';

export function isAdminSdkConfigured(): boolean {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    try {
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
      return true;
    } catch {
      return false;
    }
  }

  const credPath =
    process.env.FIREBASE_SERVICE_ACCOUNT_PATH || process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!credPath) return false;

  try {
    const resolved = path.isAbsolute(credPath) ? credPath : path.join(process.cwd(), credPath);
    return existsSync(resolved);
  } catch {
    return false;
  }
}

function loadServiceAccount(): Record<string, unknown> | null {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    try {
      return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON) as Record<string, unknown>;
    } catch {
      return null;
    }
  }

  const credPath =
    process.env.FIREBASE_SERVICE_ACCOUNT_PATH || process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!credPath) return null;

  const resolved = path.isAbsolute(credPath) ? credPath : path.join(process.cwd(), credPath);
  if (!existsSync(resolved)) return null;

  try {
    return JSON.parse(readFileSync(resolved, 'utf8')) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function getAdminApp(): App {
  if (getApps().length > 0) return getApps()[0]!;

  const serviceAccount = loadServiceAccount();
  if (!serviceAccount) {
    throw new Error(
      'Firebase Admin SDK is not configured. Set FIREBASE_SERVICE_ACCOUNT_PATH in .env.local'
    );
  }

  return initializeApp({
    credential: cert(serviceAccount as Parameters<typeof cert>[0]),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export function getAdminFirestore(): Firestore {
  return getFirestore(getAdminApp());
}

export function getAdminStorage(): Storage {
  return getStorage(getAdminApp());
}
