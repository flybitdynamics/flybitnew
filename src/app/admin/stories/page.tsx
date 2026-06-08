'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAllStoriesAdmin } from '@/lib/stories/queries';
import { deleteStory, duplicateStory, updateStory } from '@/lib/firebase/stories-admin';
import { formatStoryDate } from '@/lib/stories/utils';
import type { ContentStory } from '@/lib/stories/types';

export default function AdminStoriesPage() {
  const router = useRouter();
  const [stories, setStories] = useState<ContentStory[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');

  const load = () => getAllStoriesAdmin().then(setStories);
  useEffect(() => {
    load();
  }, []);

  const filtered = stories.filter((s) => {
    if (filter !== 'all' && s.status !== filter) return false;
    if (search && !s.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this story?')) return;
    await deleteStory(id);
    load();
  };

  const handleDuplicate = async (story: ContentStory) => {
    await duplicateStory(story);
    load();
  };

  const togglePublish = async (story: ContentStory) => {
    const next = story.status === 'published' ? 'draft' : 'published';
    await updateStory(story.id, { status: next });
    load();
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <h1 className="font-cormorant text-3xl text-text">Stories</h1>
        <Link
          href="/admin/stories/create"
          className="bg-gold hover:bg-gold-light text-black font-medium px-5 py-2.5 text-[0.7rem] tracking-[0.14em] uppercase rounded-[2px]"
        >
          + Create
        </Link>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <input
          placeholder="Search stories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-dark-3 border border-border text-text px-4 py-2 rounded-[2px] text-sm min-w-[200px]"
        />
        {(['all', 'published', 'draft'] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-[0.68rem] uppercase tracking-wider border rounded-[2px] ${
              filter === f ? 'bg-gold border-gold text-black' : 'border-border text-text-muted'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="border border-border rounded-[3px] overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-dark-2 text-[0.65rem] uppercase tracking-wider text-text-dim">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Status</th>
              <th className="p-4">Views</th>
              <th className="p-4">Created</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((story) => (
              <tr key={story.id} className="border-t border-border hover:bg-white/[0.02]">
                <td className="p-4 text-text font-medium">{story.title}</td>
                <td className="p-4 text-text-muted">{story.showType}</td>
                <td className="p-4">
                  <span
                    className={`text-[0.62rem] uppercase px-2 py-1 rounded-full ${
                      story.status === 'published'
                        ? 'bg-green-500/15 text-green-400'
                        : 'bg-yellow-500/15 text-yellow-400'
                    }`}
                  >
                    {story.status}
                  </span>
                </td>
                <td className="p-4 text-text-muted">{story.views}</td>
                <td className="p-4 text-text-dim text-xs">{formatStoryDate(story.createdAt)}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => router.push(`/admin/stories/${story.id}/edit`)}
                      className="text-xs text-gold hover:underline"
                    >
                      Edit
                    </button>
                    <button type="button" onClick={() => togglePublish(story)} className="text-xs text-text-muted hover:text-text">
                      {story.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    <button type="button" onClick={() => handleDuplicate(story)} className="text-xs text-text-muted hover:text-text">
                      Duplicate
                    </button>
                    <Link href={`/stories/${story.slug}`} target="_blank" className="text-xs text-text-muted hover:text-text">
                      View
                    </Link>
                    <button type="button" onClick={() => handleDelete(story.id)} className="text-xs text-red-400 hover:underline">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
