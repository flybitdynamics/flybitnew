'use client';

import type { BlogPost, BlogPostInput } from '../blogs/types';

async function adminFetch(path: string, init?: RequestInit) {
  const res = await fetch(path, init);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export async function uploadBlogFile(
  file: File,
  folder: 'blog-thumbnails' | 'blog-contents',
  blogId: string
): Promise<string> {
  const form = new FormData();
  form.append('file', file);
  form.append('folder', folder);
  form.append('blogId', blogId);

  const data = await adminFetch('/api/admin/blogs/upload', { method: 'POST', body: form });
  return data.url as string;
}

export async function createBlog(input: BlogPostInput): Promise<string> {
  const data = await adminFetch('/api/admin/blogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  return data.id as string;
}

export async function updateBlog(id: string, input: Partial<BlogPostInput>): Promise<void> {
  await adminFetch(`/api/admin/blogs/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
}

export async function deleteBlog(id: string): Promise<void> {
  await adminFetch(`/api/admin/blogs/${id}`, { method: 'DELETE' });
}

export async function duplicateBlog(blog: BlogPost): Promise<string> {
  const data = await adminFetch(`/api/admin/blogs/${blog.id}/duplicate`, { method: 'POST' });
  return data.id as string;
}
