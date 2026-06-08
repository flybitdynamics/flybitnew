import { NextResponse } from 'next/server';
import { requireAdminSession, unauthorizedResponse } from '@/lib/admin/require-session';
import { duplicateStoryDb, getStoryByIdAdminDb } from '@/lib/stories/admin-db';

type RouteContext = { params: Promise<{ id: string }> };

export async function POST(_request: Request, context: RouteContext) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const { id } = await context.params;
  const story = await getStoryByIdAdminDb(id);
  if (!story) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  try {
    const newId = await duplicateStoryDb(story);
    return NextResponse.json({ id: newId });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to duplicate story';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
