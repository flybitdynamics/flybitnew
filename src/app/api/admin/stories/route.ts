import { NextResponse } from 'next/server';
import { requireAdminSession, unauthorizedResponse } from '@/lib/admin/require-session';
import { createStoryDb, listAllStoriesAdminDb } from '@/lib/stories/admin-db';
import type { ContentStoryInput } from '@/lib/stories/types';

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const stories = await listAllStoriesAdminDb();
  return NextResponse.json({ stories });
}

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const body = (await request.json().catch(() => ({}))) as ContentStoryInput;

  try {
    const id = await createStoryDb(body);
    return NextResponse.json({ id });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create story';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
