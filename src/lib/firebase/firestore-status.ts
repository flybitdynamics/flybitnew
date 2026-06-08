/** Skip client Firestore calls after we detect the database is not provisioned. */
let firestoreUnavailable = false;

export function isFirestoreReachable(): boolean {
  return !firestoreUnavailable;
}

export function markFirestoreUnavailable(error?: unknown): void {
  if (isFirestoreNotProvisioned(error)) {
    firestoreUnavailable = true;
  }
}

function isFirestoreNotProvisioned(error: unknown): boolean {
  if (!error) return true;
  const code = (error as { code?: string })?.code ?? '';
  const message = error instanceof Error ? error.message : String(error);
  return (
    code === 'not-found' ||
    message.includes("Database '(default)' not found") ||
    message.includes('CONFIGURATION_NOT_FOUND')
  );
}
