'use client';

import { useState } from 'react';
import TiptapEditor from './TiptapEditor';
import type { BlogPost, BlogPostInput, BlogPostFaq } from '@/lib/blogs/types';
import { slugify, calculateReadingTime } from '@/lib/stories/utils';
import { createBlog, updateBlog, uploadBlogFile } from '@/lib/firebase/blogs-admin';
import UploadField from './UploadField';
import { DEFAULT_LOGO } from '@/lib/public-assets';

interface BlogFormProps {
  initial?: BlogPost;
  onSaved: (id: string, status: 'draft' | 'published') => void;
}

const emptyForm = (): BlogPostInput => ({
  title: '',
  slug: '',
  description: '',
  content: '<p></p>',
  date: new Date().toISOString().split('T')[0],
  author: 'FLYBIT Team',
  authorImage: DEFAULT_LOGO,
  authorBio: 'FLYBIT Dynamics team of drone show pilots, engineers, and creators.',
  category: 'Drone Shows',
  tags: [],
  image: '',
  featured: false,
  published: false,
  status: 'draft',
  readingTime: '3 min',
  faqs: [],
});

export default function BlogForm({ initial, onSaved }: BlogFormProps) {
  const [form, setForm] = useState<BlogPostInput>(
    initial
      ? {
          title: initial.title,
          slug: initial.slug,
          description: initial.description,
          content: initial.content,
          date: initial.date,
          author: initial.author,
          authorImage: initial.authorImage || DEFAULT_LOGO,
          authorBio: initial.authorBio || '',
          category: initial.category,
          tags: initial.tags,
          image: initial.image,
          featured: initial.featured,
          published: initial.published,
          status: initial.status,
          readingTime: initial.readingTime,
          faqs: initial.faqs || [],
        }
      : emptyForm()
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [blogId, setBlogId] = useState<string | null>(initial?.id ?? null);
  const [saveMode, setSaveMode] = useState<'draft' | 'published' | null>(null);
  const [pendingFiles, setPendingFiles] = useState<Partial<Record<'image' | 'authorImage', File>>>({});

  const set = <K extends keyof BlogPostInput>(key: K, value: BlogPostInput[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleTitleChange = (title: string) => {
    set('title', title);
    if (!initial) set('slug', slugify(title));
  };

  const handleFileSelect = (file: File, field: 'image' | 'authorImage') => {
    setPendingFiles((prev) => ({ ...prev, [field]: file }));
  };

  const uploadPendingMedia = async (id: string) => {
    const urls: Partial<Pick<BlogPostInput, 'image' | 'authorImage'>> = {};

    for (const field of Object.keys(pendingFiles) as Array<keyof typeof pendingFiles>) {
      const file = pendingFiles[field];
      if (!file) continue;
      urls[field] = await uploadBlogFile(file, field, id);
    }

    return urls;
  };

  const addFaq = () => {
    const newFaqs = [...(form.faqs || []), { question: '', answer: '' }];
    set('faqs', newFaqs);
  };

  const removeFaq = (index: number) => {
    const newFaqs = (form.faqs || []).filter((_, i) => i !== index);
    set('faqs', newFaqs);
  };

  const updateFaq = (index: number, key: keyof BlogPostFaq, val: string) => {
    const newFaqs = (form.faqs || []).map((faq, i) => {
      if (i === index) {
        return { ...faq, [key]: val };
      }
      return faq;
    });
    set('faqs', newFaqs);
  };

  const save = async (status: 'draft' | 'published') => {
    setSaving(true);
    setSaveMode(status);
    setError('');

    try {
      let id = blogId;
      let mediaUrls: Partial<Pick<BlogPostInput, 'image' | 'authorImage'>> = {};

      if (status === 'published' && Object.keys(pendingFiles).length > 0) {
        if (!id) {
          const draftSlug = form.slug || slugify(form.title) || `draft-${Date.now()}`;
          id = await createBlog({
            ...form,
            title: form.title || 'Untitled Blog',
            slug: draftSlug,
            status: 'draft',
            published: false,
            readingTime: calculateReadingTime(form.content),
          });
          setBlogId(id);
        }
        mediaUrls = await uploadPendingMedia(id);
        setPendingFiles({});
        if (Object.keys(mediaUrls).length > 0) {
          setForm((prev) => ({ ...prev, ...mediaUrls }));
        }
      }

      const payload: BlogPostInput = {
        ...form,
        ...mediaUrls,
        status,
        published: status === 'published',
        readingTime: calculateReadingTime(form.content),
      };

      if (id) {
        await updateBlog(id, payload);
        onSaved(id, status);
      } else {
        const newId = await createBlog(payload);
        setBlogId(newId);
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
        <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-300 text-sm rounded-[2px]">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">
            Blog Title *
          </label>
          <input
            className={inputClass}
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
            placeholder="e.g. Insights into Swarm Robotics"
          />
        </div>
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">
            Slug *
          </label>
          <input
            className={inputClass}
            value={form.slug}
            onChange={(e) => set('slug', slugify(e.target.value))}
            required
            placeholder="e.g. insights-into-swarm-robotics"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">
            Category *
          </label>
          <input
            className={inputClass}
            value={form.category}
            onChange={(e) => set('category', e.target.value)}
            required
            placeholder="e.g. Technology, Weddings"
          />
        </div>
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">
            Published Date *
          </label>
          <input
            type="date"
            className={inputClass}
            value={form.date}
            onChange={(e) => set('date', e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">
            Author *
          </label>
          <input
            className={inputClass}
            value={form.author}
            onChange={(e) => set('author', e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">
          Author Bio
        </label>
        <input
          className={inputClass}
          value={form.authorBio || ''}
          onChange={(e) => set('authorBio', e.target.value)}
          placeholder="Short bio about the author..."
        />
      </div>

      <div>
        <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">
          Short Description (Excerpt) *
        </label>
        <textarea
          className={`${inputClass} min-h-[80px] resize-y`}
          value={form.description}
          onChange={(e) => set('description', e.target.value)}
          required
          placeholder="Write a brief, catchy summary of the article..."
        />
      </div>

      <div>
        <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">
          Blog Content (Markdown / MDX / Rich Text) *
        </label>
        <TiptapEditor
          content={form.content}
          onChange={(html) => set('content', html)}
          placeholder="Start writing your blog post..."
        />
      </div>

      <div className="p-4 border border-border/60 rounded-[3px] bg-dark/30 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UploadField
            label="Author Image"
            accept="image/*"
            field="authorImage"
            selectedFileName={pendingFiles.authorImage?.name}
            disabled={saving}
            onSelect={handleFileSelect}
          />
          <UploadField
            label="Featured Image *"
            accept="image/*"
            field="image"
            selectedFileName={pendingFiles.image?.name}
            disabled={saving}
            onSelect={handleFileSelect}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">
            Tags (comma-separated)
          </label>
          <input
            className={inputClass}
            value={form.tags.join(', ')}
            onChange={(e) =>
              set(
                'tags',
                e.target.value
                  .split(',')
                  .map((t) => t.trim())
                  .filter(Boolean)
              )
            }
            placeholder="e.g. engineering, gps, weddings"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 bg-dark/30 p-4 border border-border rounded-[3px]">
        <label className="flex items-center gap-2.5 text-sm text-text-muted cursor-pointer">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => set('featured', e.target.checked)}
            className="rounded-[2px] border-border text-gold bg-dark focus:ring-0 w-4 h-4 cursor-pointer"
          />
          <span className="select-none text-[0.8rem] uppercase tracking-wider">Featured Post (Hero Grid Display)</span>
        </label>
      </div>

      {/* FAQ Section */}
      <div className="border border-border rounded-[3px] bg-dark p-5 space-y-4">
        <div className="flex justify-between items-center border-b border-border/60 pb-3">
          <h3 className="font-cormorant text-xl text-text">FAQ Accordions (SEO Schema Supported)</h3>
          <button
            type="button"
            onClick={addFaq}
            className="border border-gold text-gold hover:bg-gold hover:text-black transition-colors px-3 py-1.5 text-[0.68rem] tracking-wider uppercase rounded-[2px] cursor-pointer"
          >
            + Add FAQ
          </button>
        </div>

        {(!form.faqs || form.faqs.length === 0) ? (
          <p className="text-xs text-text-dim italic">No FAQs added yet. Click "+ Add FAQ" to add accordion questions.</p>
        ) : (
          <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
            {form.faqs.map((faq, index) => (
              <div key={index} className="p-4 bg-dark-3 border border-border/80 rounded-[2px] relative space-y-3">
                <button
                  type="button"
                  onClick={() => removeFaq(index)}
                  className="absolute top-2 right-2 text-xs text-red-400 hover:text-red-300 uppercase tracking-widest cursor-pointer bg-transparent border-none"
                >
                  Delete
                </button>
                <div className="space-y-1">
                  <label className="block text-[0.58rem] uppercase tracking-wider text-text-dim">Question</label>
                  <input
                    className={inputClass}
                    value={faq.question}
                    onChange={(e) => updateFaq(index, 'question', e.target.value)}
                    placeholder="e.g. How safe are drone shows?"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[0.58rem] uppercase tracking-wider text-text-dim">Answer</label>
                  <textarea
                    className={`${inputClass} min-h-[60px] resize-y`}
                    value={faq.answer}
                    onChange={(e) => updateFaq(index, 'answer', e.target.value)}
                    placeholder="e.g. Our shows are fully geofenced and verified by civil aviation authorities."
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
        <button
          type="button"
          disabled={saving}
          onClick={() => save('draft')}
          className="border border-border hover:border-gold text-text px-6 py-3 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px] disabled:opacity-50 transition-colors cursor-pointer bg-transparent"
        >
          {saving && saveMode === 'draft' ? 'Saving...' : 'Save Draft'}
        </button>
        <button
          type="button"
          disabled={saving}
          onClick={() => save('published')}
          className="bg-gold hover:bg-gold-light text-black font-semibold px-6 py-3 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px] disabled:opacity-50 transition-colors cursor-pointer border-none"
        >
          {saving && saveMode === 'published' ? 'Publishing...' : 'Publish'}
        </button>
      </div>
    </div>
  );
}
