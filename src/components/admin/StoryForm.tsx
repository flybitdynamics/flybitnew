'use client';

import { useState } from 'react';
import TiptapEditor from './TiptapEditor';
import { SHOW_TYPES, type ContentStory, type ContentStoryInput, type ShowType } from '@/lib/stories/types';
import { slugify, calculateReadingTime } from '@/lib/stories/utils';
import { createStory, updateStory, uploadStoryFile } from '@/lib/firebase/stories-admin';

interface StoryFormProps {
  initial?: ContentStory;
  onSaved: (id: string) => void;
}

const emptyForm = (): ContentStoryInput => ({
  title: '',
  slug: '',
  showType: 'Wedding',
  shortDescription: '',
  content: '<p></p>',
  thumbnailUrl: '',
  coverImageUrl: '',
  videoUrl: '',
  instagramUrl: '',
  metaTitle: '',
  metaDescription: '',
  seoKeywords: [],
  tags: [],
  author: 'Admin',
  readingTime: '3 min',
  featured: false,
  status: 'draft',
});

export default function StoryForm({ initial, onSaved }: StoryFormProps) {
  const [form, setForm] = useState<ContentStoryInput>(
    initial
      ? {
          title: initial.title,
          slug: initial.slug,
          showType: initial.showType,
          shortDescription: initial.shortDescription,
          content: initial.content,
          thumbnailUrl: initial.thumbnailUrl,
          coverImageUrl: initial.coverImageUrl,
          videoUrl: initial.videoUrl,
          instagramUrl: initial.instagramUrl,
          metaTitle: initial.metaTitle,
          metaDescription: initial.metaDescription,
          seoKeywords: initial.seoKeywords,
          tags: initial.tags,
          author: initial.author,
          readingTime: initial.readingTime,
          featured: initial.featured,
          status: initial.status,
        }
      : emptyForm()
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const set = <K extends keyof ContentStoryInput>(key: K, value: ContentStoryInput[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleTitleChange = (title: string) => {
    set('title', title);
    if (!initial) set('slug', slugify(title));
  };

  const handleFileUpload = async (
    file: File,
    field: 'thumbnailUrl' | 'coverImageUrl' | 'videoUrl',
    folder: 'thumbnails' | 'cover-images' | 'videos'
  ) => {
    const id = initial?.id || `temp_${Date.now()}`;
    const url = await uploadStoryFile(file, folder, id);
    set(field, url);
  };

  const save = async (status: 'draft' | 'published') => {
    setSaving(true);
    setError('');
    try {
      const payload: ContentStoryInput = {
        ...form,
        status,
        readingTime: calculateReadingTime(form.content),
      };
      if (initial) {
        await updateStory(initial.id, payload);
        onSaved(initial.id);
      } else {
        const id = await createStory(payload);
        onSaved(id);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const inputClass =
    'w-full bg-dark-3 border border-border text-text p-3 text-[0.85rem] rounded-[2px] outline-none focus:border-gold/40';

  return (
    <div className="space-y-6 font-sans max-w-4xl">
      {error && (
        <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-300 text-sm rounded-[2px]">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Title *</label>
          <input className={inputClass} value={form.title} onChange={(e) => handleTitleChange(e.target.value)} required />
        </div>
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Slug *</label>
          <input className={inputClass} value={form.slug} onChange={(e) => set('slug', slugify(e.target.value))} required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Show Type *</label>
          <select
            className={inputClass}
            value={form.showType}
            onChange={(e) => set('showType', e.target.value as ShowType)}
            required
          >
            {SHOW_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Author</label>
          <input className={inputClass} value={form.author} onChange={(e) => set('author', e.target.value)} />
        </div>
      </div>

      <div>
        <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Short Description *</label>
        <textarea
          className={`${inputClass} min-h-[80px] resize-y`}
          value={form.shortDescription}
          onChange={(e) => set('shortDescription', e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Article Content *</label>
        <TiptapEditor content={form.content} onChange={(html) => set('content', html)} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            className="text-sm text-text-muted"
            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'thumbnailUrl', 'thumbnails')}
          />
          {form.thumbnailUrl && <p className="text-xs text-gold mt-1 truncate">Uploaded ✓</p>}
        </div>
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Cover Image (OG)</label>
          <input
            type="file"
            accept="image/*"
            className="text-sm text-text-muted"
            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'coverImageUrl', 'cover-images')}
          />
          {form.coverImageUrl && <p className="text-xs text-gold mt-1 truncate">Uploaded ✓</p>}
        </div>
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Video (MP4)</label>
          <input
            type="file"
            accept="video/mp4,video/*"
            className="text-sm text-text-muted"
            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'videoUrl', 'videos')}
          />
          {form.videoUrl && <p className="text-xs text-gold mt-1 truncate">Uploaded ✓</p>}
        </div>
      </div>

      <div>
        <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Instagram URL</label>
        <input className={inputClass} value={form.instagramUrl} onChange={(e) => set('instagramUrl', e.target.value)} placeholder="https://instagram.com/reel/..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Meta Title (max 60)</label>
          <input className={inputClass} value={form.metaTitle} onChange={(e) => set('metaTitle', e.target.value)} maxLength={60} />
        </div>
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Meta Description (max 155)</label>
          <input className={inputClass} value={form.metaDescription} onChange={(e) => set('metaDescription', e.target.value)} maxLength={155} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">SEO Keywords (comma-separated)</label>
          <input
            className={inputClass}
            value={form.seoKeywords.join(', ')}
            onChange={(e) => set('seoKeywords', e.target.value.split(',').map((k) => k.trim()).filter(Boolean))}
          />
        </div>
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">Tags (comma-separated)</label>
          <input
            className={inputClass}
            value={form.tags.join(', ')}
            onChange={(e) => set('tags', e.target.value.split(',').map((k) => k.trim()).filter(Boolean))}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-text-muted cursor-pointer">
          <input type="checkbox" checked={form.featured} onChange={(e) => set('featured', e.target.checked)} />
          Featured
        </label>
      </div>

      <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
        <button
          type="button"
          disabled={saving}
          onClick={() => save('draft')}
          className="border border-border hover:border-gold text-text px-6 py-3 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px] disabled:opacity-50"
        >
          Save Draft
        </button>
        <button
          type="button"
          disabled={saving}
          onClick={() => save('published')}
          className="bg-gold hover:bg-gold-light text-black font-medium px-6 py-3 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px] disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Publish'}
        </button>
      </div>
    </div>
  );
}
