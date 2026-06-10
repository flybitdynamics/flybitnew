'use client';

import { useState, useRef, useEffect } from 'react';
import TiptapEditor from './TiptapEditor';
import { SHOW_TYPES, type ContentStory, type ContentStoryInput, type ShowType } from '@/lib/stories/types';
import { slugify, calculateReadingTime } from '@/lib/stories/utils';
import { createStory, updateStory, uploadStoryFile } from '@/lib/firebase/stories-admin';
import UploadField from './UploadField';

interface StoryFormProps {
  initial?: ContentStory;
  onSaved: (id: string, status: 'draft' | 'published') => void;
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

function ShowTypeSelect({
  value,
  onChange,
}: {
  value: ShowType;
  onChange: (val: ShowType) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-dark-3 border border-border text-text p-3 text-[0.85rem] rounded-[2px] outline-none focus:border-gold/40 flex justify-between items-center cursor-pointer text-left"
      >
        <span>{value}</span>
        <svg
          className={`w-4 h-4 text-text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-[300] left-0 right-0 mt-1 bg-[#0b0b0c] border border-border rounded-[2px] shadow-2xl max-h-[300px] overflow-y-auto">
          {SHOW_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                onChange(t);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-[0.85rem] transition-colors duration-150 cursor-pointer ${
                value === t
                  ? 'bg-gold text-black font-semibold'
                  : 'text-text hover:bg-gold/10 hover:text-gold'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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
  const [storyId, setStoryId] = useState<string | null>(initial?.id ?? null);
  const [saveMode, setSaveMode] = useState<'draft' | 'published' | null>(null);
  const [pendingFiles, setPendingFiles] = useState<
    Partial<Record<'thumbnailUrl' | 'coverImageUrl' | 'videoUrl', File>>
  >({});

  const MEDIA_FOLDERS = {
    thumbnailUrl: 'thumbnails',
    coverImageUrl: 'cover-images',
    videoUrl: 'videos',
  } as const;

  const set = <K extends keyof ContentStoryInput>(key: K, value: ContentStoryInput[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleTitleChange = (title: string) => {
    set('title', title);
    if (!initial) set('slug', slugify(title));
  };

  const handleFileSelect = (
    file: File,
    field: 'thumbnailUrl' | 'coverImageUrl' | 'videoUrl'
  ) => {
    setPendingFiles((prev) => ({ ...prev, [field]: file }));
  };

  const uploadPendingMedia = async (id: string) => {
    const urls: Partial<Pick<ContentStoryInput, 'thumbnailUrl' | 'coverImageUrl' | 'videoUrl'>> = {};

    for (const field of Object.keys(pendingFiles) as Array<keyof typeof pendingFiles>) {
      const file = pendingFiles[field];
      if (!file) continue;
      urls[field] = await uploadStoryFile(file, MEDIA_FOLDERS[field], id);
    }

    return urls;
  };

  const save = async (status: 'draft' | 'published') => {
    setSaving(true);
    setSaveMode(status);
    setError('');

    try {
      let id = storyId;
      let mediaUrls: Partial<Pick<ContentStoryInput, 'thumbnailUrl' | 'coverImageUrl' | 'videoUrl'>> = {};

      if (status === 'published' && Object.keys(pendingFiles).length > 0) {
        if (!id) {
          const draftSlug = form.slug || slugify(form.title) || `draft-${Date.now()}`;
          id = await createStory({
            ...form,
            title: form.title || 'Untitled Story',
            slug: draftSlug,
            status: 'draft',
            readingTime: calculateReadingTime(form.content),
          });
          setStoryId(id);
        }
        mediaUrls = await uploadPendingMedia(id);
        setPendingFiles({});
        if (Object.keys(mediaUrls).length > 0) {
          setForm((prev) => ({ ...prev, ...mediaUrls }));
        }
      }

      const payload: ContentStoryInput = {
        ...form,
        ...mediaUrls,
        status,
        readingTime: calculateReadingTime(form.content),
      };

      if (id) {
        await updateStory(id, payload);
        onSaved(id, status);
      } else {
        const newId = await createStory(payload);
        setStoryId(newId);
        onSaved(newId, status);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to save');
    } finally {
      setSaving(false);
      setSaveMode(null);
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
          <ShowTypeSelect
            value={form.showType}
            onChange={(val) => set('showType', val)}
          />
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

      <div className="p-4 border border-border/60 rounded-[3px] bg-dark/30 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <UploadField
            label="Thumbnail"
            accept="image/*"
            field="thumbnailUrl"
            selectedFileName={pendingFiles.thumbnailUrl?.name}
            disabled={saving}
            onSelect={handleFileSelect}
          />
          <UploadField
            label="Cover Image (OG)"
            accept="image/*"
            field="coverImageUrl"
            selectedFileName={pendingFiles.coverImageUrl?.name}
            disabled={saving}
            onSelect={handleFileSelect}
          />
          <UploadField
            label="Video (MP4)"
            accept="video/mp4,video/*"
            field="videoUrl"
            selectedFileName={pendingFiles.videoUrl?.name}
            disabled={saving}
            onSelect={handleFileSelect}
          />
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
          {saving && saveMode === 'draft' ? 'Saving...' : 'Save Draft'}
        </button>
        <button
          type="button"
          disabled={saving}
          onClick={() => save('published')}
          className="bg-gold hover:bg-gold-light text-black font-medium px-6 py-3 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px] disabled:opacity-50"
        >
          {saving && saveMode === 'published' ? 'Publishing...' : 'Publish'}
        </button>
      </div>
    </div>
  );
}
