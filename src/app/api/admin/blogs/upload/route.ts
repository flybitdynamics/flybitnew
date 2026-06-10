import { NextResponse } from 'next/server';
import { requireAdminSession, unauthorizedResponse } from '@/lib/admin/require-session';
import { BLOG_MEDIA_FIELD, updateBlogDb, uploadBlogFileDb } from '@/lib/blogs/admin-db';
import type { BlogMediaField } from '@/lib/zata/client';

const FIELDS = new Set<BlogMediaField>(['image', 'authorImage']);

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const form = await request.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });

  const file = form.get('file');
  const field = String(form.get('field') || '') as BlogMediaField;
  const blogId = String(form.get('blogId') || '').trim();

  if (!(file instanceof File) || !FIELDS.has(field) || !blogId || blogId.startsWith('temp_')) {
    return NextResponse.json({ error: 'Missing file, field, or valid blogId' }, { status: 400 });
  }

  const ext = file.name.split('.').pop()?.toLowerCase() || 'bin';
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const url = await uploadBlogFileDb(
      buffer,
      file.type || 'application/octet-stream',
      field,
      blogId,
      ext
    );

    const firestoreField = BLOG_MEDIA_FIELD[field];
    await updateBlogDb(blogId, { [firestoreField]: url });

    return NextResponse.json({ url, field: firestoreField });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Upload failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
