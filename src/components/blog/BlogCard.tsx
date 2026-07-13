'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blogs/types';
import { formatStoryDate } from '@/lib/stories/utils';
import { DEFAULT_BLOG_IMAGE } from '@/lib/public-assets';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group block relative bg-dark-3 border border-border/80 hover:border-gold/40 transition-all duration-300 rounded-[3px] overflow-hidden flex flex-col h-full md:cursor-none"
    >
      {/* Premium visual gradient border on hover */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-gold/0 via-gold/80 to-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10" />

      {/* Card Image Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-dark-2">
        <Image
          src={blog.image || DEFAULT_BLOG_IMAGE}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle dark overlay to match premium aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-80" />
        
        {/* Category tag */}
        <span className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md border border-gold/30 text-gold font-sans font-medium uppercase tracking-[0.15em] text-[0.62rem] px-2.5 py-1 rounded-[1px]">
          {blog.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Meta row */}
        <div className="flex items-center gap-3 text-[0.68rem] font-sans tracking-wide text-white/65 mb-3">
          <span>{formatStoryDate(blog.date)}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
          <span>{blog.readingTime || '3 min read'}</span>
        </div>

        {/* Title */}
        <h3 className="font-cormorant text-xl text-text group-hover:text-gold transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
          {blog.title}
        </h3>

        {/* Description Excerpt */}
        <p className="font-sans text-xs text-text-muted line-clamp-3 leading-relaxed mb-5 flex-grow">
          {blog.description}
        </p>

        {/* Tags Row */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40 mt-auto">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[0.58rem] font-sans text-text-dim bg-dark/40 px-2 py-0.5 border border-border/50 rounded-[1px]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
