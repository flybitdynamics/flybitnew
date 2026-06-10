import { NextResponse } from 'next/server';
import { requireAdminSession, unauthorizedResponse } from '@/lib/admin/require-session';
import { STORY_MEDIA_FIELD, updateStoryDb, uploadStoryFileDb } from '@/lib/stories/admin-db';
import type { StoryMediaFolder } from '@/lib/zata/client';

const FOLDERS = new Set<StoryMediaFolder>(['thumbnails', 'videos', 'cover-images']);

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const form = await request.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });

  const file = form.get('file');
  const folder = String(form.get('folder') || '') as StoryMediaFolder;
  const storyId = String(form.get('storyId') || '').trim();

  if (!(file instanceof File) || !FOLDERS.has(folder) || !storyId || storyId.startsWith('temp_')) {
    return NextResponse.json({ error: 'Missing file, folder, or valid storyId' }, { status: 400 });
  }

  const ext = file.name.split('.').pop()?.toLowerCase() || 'bin';
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const url = await uploadStoryFileDb(
      buffer,
      file.type || 'application/octet-stream',
      folder,
      storyId,
      ext
    );

    const field = STORY_MEDIA_FIELD[folder];
    await updateStoryDb(storyId, { [field]: url });

    return NextResponse.json({ url, field });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Upload failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
