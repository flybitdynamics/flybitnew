'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllStoriesAdmin } from '@/lib/stories/queries';
import type { ContentStory } from '@/lib/stories/types';

export default function AdminDashboardPage() {
  const [stories, setStories] = useState<ContentStory[]>([]);

  useEffect(() => {
    getAllStoriesAdmin().then(setStories);
  }, []);

  const published = stories.filter((s) => s.status === 'published').length;
  const drafts = stories.filter((s) => s.status === 'draft').length;
  const featured = stories.filter((s) => s.featured).length;
  const views = stories.reduce((sum, s) => sum + s.views, 0);

  const cards = [
    { label: 'Total Stories', value: stories.length },
    { label: 'Published', value: published },
    { label: 'Drafts', value: drafts },
    { label: 'Featured', value: featured },
    { label: 'Total Views', value: views.toLocaleString() },
  ];

  return (
    <div>
      <h1 className="font-cormorant text-3xl text-text mb-8">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {cards.map((c) => (
          <div key={c.label} className="bg-dark border border-border p-5 rounded-[3px]">
            <div className="text-[0.62rem] uppercase tracking-wider text-text-dim mb-2">{c.label}</div>
            <div className="font-bebas text-3xl text-gold">{c.value}</div>
          </div>
        ))}
      </div>
      <Link
        href="/admin/stories/create"
        className="inline-block bg-gold hover:bg-gold-light text-black font-medium px-6 py-3 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px]"
      >
        + Create Story
      </Link>
    </div>
  );
}
