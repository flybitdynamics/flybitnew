import { NextResponse } from 'next/server';
import { requireAdminSession, unauthorizedResponse } from '@/lib/admin/require-session';
import { uploadStoryFileDb } from '@/lib/stories/admin-db';

const FOLDERS = new Set(['thumbnails', 'videos', 'cover-images']);

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const form = await request.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });

  const file = form.get('file');
  const folder = String(form.get('folder') || '');
  const storyId = String(form.get('storyId') || '');

  if (!(file instanceof File) || !FOLDERS.has(folder) || !storyId) {
    return NextResponse.json({ error: 'Missing file, folder, or storyId' }, { status: 400 });
  }

  const ext = file.name.split('.').pop() || 'bin';
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const url = await uploadStoryFileDb(buffer, file.type || 'application/octet-stream', folder as 'thumbnails' | 'videos' | 'cover-images', storyId, ext);
    return NextResponse.json({ url });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Upload failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
