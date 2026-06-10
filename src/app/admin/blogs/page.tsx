'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAllBlogsAdmin } from '@/lib/blogs/queries';
import { deleteBlog, duplicateBlog, updateBlog } from '@/lib/firebase/blogs-admin';
import { formatStoryDate } from '@/lib/stories/utils';
import type { BlogPost } from '@/lib/blogs/types';

export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');

  const load = () => getAllBlogsAdmin().then(setBlogs);
  useEffect(() => {
    load();
  }, []);

  const filtered = blogs.filter((b) => {
    if (filter === 'published' && b.status !== 'published') return false;
    if (filter === 'draft' && b.status !== 'draft') return false;
    if (search && !b.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this blog post?')) return;
    await deleteBlog(id);
    load();
  };

  const handleDuplicate = async (blog: BlogPost) => {
    await duplicateBlog(blog);
    load();
  };

  const togglePublish = async (blog: BlogPost) => {
    const nextStatus = blog.status === 'published' ? 'draft' : 'published';
    const nextPublished = nextStatus === 'published';
    await updateBlog(blog.id, { status: nextStatus, published: nextPublished });
    load();
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <h1 className="font-cormorant text-3xl text-text">Blogs</h1>
        <Link
          href="/admin/blogs/create"
          className="bg-gold hover:bg-gold-light text-black font-semibold px-5 py-2.5 text-[0.7rem] tracking-[0.14em] uppercase rounded-[2px]"
        >
          + Create Blog
        </Link>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <input
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-dark-3 border border-border text-text px-4 py-2 rounded-[2px] text-sm min-w-[250px] outline-none focus:border-gold/40"
        />
        {(['all', 'published', 'draft'] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-[0.68rem] uppercase tracking-wider border rounded-[2px] cursor-pointer ${
              filter === f ? 'bg-gold border-gold text-black font-semibold' : 'border-border text-text-muted hover:border-gold/40'
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
              <th className="p-4">Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-dim italic">
                  No blogs found.
                </td>
              </tr>
            ) : (
              filtered.map((blog) => (
                <tr key={blog.id} className="border-t border-border hover:bg-white/[0.02]">
                  <td className="p-4 text-text font-medium max-w-xs truncate">{blog.title}</td>
                  <td className="p-4 text-text-muted">{blog.category}</td>
                  <td className="p-4">
                    <span
                      className={`text-[0.62rem] uppercase px-2.5 py-1 rounded-full font-medium ${
                        blog.status === 'published'
                          ? 'bg-green-500/15 text-green-400'
                          : 'bg-yellow-500/15 text-yellow-400'
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="p-4 text-text-muted">{blog.views}</td>
                  <td className="p-4 text-text-dim text-xs">{formatStoryDate(blog.date)}</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={() => router.push(`/admin/blogs/${blog.id}/edit`)}
                        className="text-xs text-gold hover:underline cursor-pointer bg-transparent border-none"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => togglePublish(blog)}
                        className="text-xs text-text-muted hover:text-text cursor-pointer bg-transparent border-none"
                      >
                        {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDuplicate(blog)}
                        className="text-xs text-text-muted hover:text-text cursor-pointer bg-transparent border-none"
                      >
                        Duplicate
                      </button>
                      <Link
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        className="text-xs text-text-muted hover:text-text hover:underline"
                      >
                        View
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(blog.id)}
                        className="text-xs text-red-400 hover:underline cursor-pointer bg-transparent border-none"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
