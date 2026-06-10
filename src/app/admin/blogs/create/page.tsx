'use client';

import { useRouter } from 'next/navigation';
import BlogForm from '@/components/admin/BlogForm';

export default function CreateBlogPage() {
  const router = useRouter();

  return (
    <div>
      <h1 className="font-cormorant text-3xl text-text mb-8">Create Blog</h1>
      <BlogForm
        onSaved={(id, status) => {
          if (status === 'published') router.push(`/admin/blogs/${id}/edit`);
        }}
      />
    </div>
  );
}
