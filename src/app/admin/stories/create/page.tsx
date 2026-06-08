'use client';

import { useRouter } from 'next/navigation';
import StoryForm from '@/components/admin/StoryForm';

export default function CreateStoryPage() {
  const router = useRouter();

  return (
    <div>
      <h1 className="font-cormorant text-3xl text-text mb-8">Create Story</h1>
      <StoryForm onSaved={(id) => router.push(`/admin/stories/${id}/edit`)} />
    </div>
  );
}
