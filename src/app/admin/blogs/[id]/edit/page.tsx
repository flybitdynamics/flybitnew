'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogForm from '@/components/admin/BlogForm';
import { getBlogByIdAdmin } from '@/lib/blogs/queries';
import type { BlogPost } from '@/lib/blogs/types';

export default function EditBlogPage() {
  const params = useParams();
  const id = params.id as string;
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    getBlogByIdAdmin(id).then(setBlog);
  }, [id]);

  if (!blog) {
    return <div className="text-text-muted">Loading blog post...</div>;
  }

  return (
    <div>
      <h1 className="font-cormorant text-3xl text-text mb-8">Edit Blog</h1>
      <BlogForm initial={blog} onSaved={() => undefined} />
    </div>
  );
}
