import { NextResponse } from 'next/server';
import { requireAdminSession, unauthorizedResponse } from '@/lib/admin/require-session';
import { deleteStoryDb, getStoryByIdAdminDb, updateStoryDb } from '@/lib/stories/admin-db';
import type { ContentStoryInput } from '@/lib/stories/types';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const { id } = await context.params;
  const story = await getStoryByIdAdminDb(id);
  if (!story) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ story });
}

export async function PATCH(request: Request, context: RouteContext) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const { id } = await context.params;
  const body = (await request.json().catch(() => ({}))) as Partial<ContentStoryInput>;

  try {
    await updateStoryDb(id, body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to update story';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const { id } = await context.params;

  try {
    await deleteStoryDb(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to delete story';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
