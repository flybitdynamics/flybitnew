import { NextResponse } from 'next/server';
import { requireAdminSession, unauthorizedResponse } from '@/lib/admin/require-session';
import { createBlogDb, listAllBlogsAdminDb } from '@/lib/blogs/admin-db';
import type { BlogPostInput } from '@/lib/blogs/types';

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const blogs = await listAllBlogsAdminDb();
  return NextResponse.json({ blogs });
}

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const body = (await request.json().catch(() => ({}))) as BlogPostInput;

  try {
    const id = await createBlogDb(body);
    return NextResponse.json({ id });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create blog';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
