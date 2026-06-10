'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllStoriesAdmin } from '@/lib/stories/queries';
import { getAllBlogsAdmin } from '@/lib/blogs/queries';
import type { ContentStory } from '@/lib/stories/types';
import type { BlogPost } from '@/lib/blogs/types';

export default function AdminDashboardPage() {
  const [stories, setStories] = useState<ContentStory[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllStoriesAdmin().then(setStories);
    getAllBlogsAdmin().then(setBlogs);
  }, []);

  const publishedStories = stories.filter((s) => s.status === 'published').length;
  const draftStories = stories.filter((s) => s.status === 'draft').length;
  const storyViews = stories.reduce((sum, s) => sum + s.views, 0);

  const publishedBlogs = blogs.filter((b) => b.status === 'published').length;
  const draftBlogs = blogs.filter((b) => b.status === 'draft').length;
  const blogViews = blogs.reduce((sum, b) => sum + b.views, 0);

  const storyCards = [
    { label: 'Total Stories', value: stories.length },
    { label: 'Published', value: publishedStories },
    { label: 'Drafts', value: draftStories },
    { label: 'Total Views', value: storyViews.toLocaleString() },
  ];

  const blogCards = [
    { label: 'Total Blogs', value: blogs.length },
    { label: 'Published', value: publishedBlogs },
    { label: 'Drafts', value: draftBlogs },
    { label: 'Total Views', value: blogViews.toLocaleString() },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-cormorant text-3xl text-gold mb-8">Dashboard</h1>
        
        <h2 className="font-cormorant text-xl text-text mb-4 uppercase tracking-wider">Story Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {storyCards.map((c) => (
            <div key={c.label} className="bg-dark border border-border p-5 rounded-[3px]">
              <div className="text-[0.62rem] uppercase tracking-wider text-text-dim mb-2">{c.label}</div>
              <div className="font-bebas text-3xl text-gold">{c.value}</div>
            </div>
          ))}
        </div>
        <Link
          href="/admin/stories/create"
          className="inline-block bg-gold hover:bg-gold-light text-black font-semibold px-6 py-3 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px] mr-4 transition-colors"
        >
          + Create Story
        </Link>
        <Link
          href="/admin/stories"
          className="inline-block border border-border hover:border-gold text-text px-6 py-3 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px] transition-colors"
        >
          Manage Stories
        </Link>
      </div>

      <div className="pt-8 border-t border-border/40">
        <h2 className="font-cormorant text-xl text-text mb-4 uppercase tracking-wider">Blog Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {blogCards.map((c) => (
            <div key={c.label} className="bg-dark border border-border p-5 rounded-[3px]">
              <div className="text-[0.62rem] uppercase tracking-wider text-text-dim mb-2">{c.label}</div>
              <div className="font-bebas text-3xl text-gold">{c.value}</div>
            </div>
          ))}
        </div>
        <Link
          href="/admin/blogs/create"
          className="inline-block bg-gold hover:bg-gold-light text-black font-semibold px-6 py-3 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px] mr-4 transition-colors"
        >
          + Create Blog
        </Link>
        <Link
          href="/admin/blogs"
          className="inline-block border border-border hover:border-gold text-text px-6 py-3 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px] transition-colors"
        >
          Manage Blogs
        </Link>
      </div>
    </div>
  );
}
