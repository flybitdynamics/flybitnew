'use client';

import type { ContentStory, ContentStoryInput } from '../stories/types';

async function adminFetch(path: string, init?: RequestInit) {
  const res = await fetch(path, init);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export async function uploadStoryFile(
  file: File,
  folder: 'thumbnails' | 'videos' | 'cover-images',
  storyId: string
): Promise<string> {
  const form = new FormData();
  form.append('file', file);
  form.append('folder', folder);
  form.append('storyId', storyId);

  const data = await adminFetch('/api/admin/stories/upload', { method: 'POST', body: form });
  return data.url as string;
}

export async function createStory(input: ContentStoryInput): Promise<string> {
  const data = await adminFetch('/api/admin/stories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  return data.id as string;
}

export async function updateStory(id: string, input: Partial<ContentStoryInput>): Promise<void> {
  await adminFetch(`/api/admin/stories/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
}

export async function deleteStory(id: string): Promise<void> {
  await adminFetch(`/api/admin/stories/${id}`, { method: 'DELETE' });
}

export async function duplicateStory(story: ContentStory): Promise<string> {
  const data = await adminFetch(`/api/admin/stories/${story.id}/duplicate`, { method: 'POST' });
  return data.id as string;
}
