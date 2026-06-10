import { NextResponse } from 'next/server';
import { requireAdminSession, unauthorizedResponse } from '@/lib/admin/require-session';
import { duplicateBlogDb, getBlogByIdAdminDb } from '@/lib/blogs/admin-db';

type RouteContext = { params: Promise<{ id: string }> };

export async function POST(_request: Request, context: RouteContext) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const { id } = await context.params;
  const blog = await getBlogByIdAdminDb(id);
  if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  try {
    const newId = await duplicateBlogDb(blog);
    return NextResponse.json({ id: newId });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to duplicate blog';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
