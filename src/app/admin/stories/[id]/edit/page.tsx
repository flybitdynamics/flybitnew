'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import StoryForm from '@/components/admin/StoryForm';
import { getStoryByIdAdmin } from '@/lib/stories/queries';
import type { ContentStory } from '@/lib/stories/types';

export default function EditStoryPage() {
  const params = useParams();
  const id = params.id as string;
  const [story, setStory] = useState<ContentStory | null>(null);

  useEffect(() => {
    getStoryByIdAdmin(id).then(setStory);
  }, [id]);

  if (!story) {
    return <div className="text-text-muted">Loading story...</div>;
  }

  return (
    <div>
      <h1 className="font-cormorant text-3xl text-text mb-8">Edit Story</h1>
      <StoryForm initial={story} onSaved={() => {}} />
    </div>
  );
}
