'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import ReadingProgressBar from './ReadingProgressBar';
import TableOfContents from './TableOfContents';
import BlogShareButtons from './BlogShareButtons';
import AuthorBox from './AuthorBox';
import FaqSection from './FaqSection';
import BlogCard from './BlogCard';
import type { BlogPost } from '@/lib/blogs/types';
import { formatStoryDate } from '@/lib/stories/utils';
import { DEFAULT_BLOG_IMAGE } from '@/lib/public-assets';

function formatBlogContent(content: string): string {
  let formatted = content;
  
  // Replace HTML entities like &amp; with & in headers/text
  formatted = formatted.replace(/&amp;/g, '&');
  
  // Format numbered paragraphs (like "1 Concept & Story Development") into beautiful subheadings
  formatted = formatted.replace(
    /<p>(\d+)\s+([^<]+)<\/p>/g,
    (_, num, text) => {
      if (text.length > 80) return `<p>${num} ${text}</p>`;
      return `<h3 class="text-gold font-sans font-semibold text-[1.15rem] tracking-wide mt-8 mb-3">${num}. ${text}</h3>`;
    }
  );
  
  return formatted;
}

interface BlogPageViewProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export default function BlogPageView({ blog, relatedBlogs }: BlogPageViewProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  const openModal = (title: string, desc: string) => {
    setModalTitle(title);
    setModalDesc(desc);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-text">
      {/* Visual top indicator bar */}
      <ReadingProgressBar />

      <Navbar onOpenModal={openModal} />

      <div className="pt-24 px-6 md:px-20 pb-12 max-w-[1400px] mx-auto">
        {/* Breadcrumb path */}
        <nav className="text-[0.68rem] text-text-dim mb-8 font-sans tracking-wide">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-gold transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-muted">{blog.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10 max-w-4xl">
          <span className="text-[0.62rem] font-sans uppercase tracking-[0.25em] text-gold font-semibold mb-3.5 block">
            {blog.category}
          </span>
          <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text leading-[1.1] mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-text-dim pb-6 border-b border-border/40">
            <span>By {blog.author}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span>{formatStoryDate(blog.date)}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span>{blog.readingTime || '3 min read'}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[21/9] w-full bg-dark-2 border border-border/60 rounded-[3px] overflow-hidden mb-12">
          <Image
            src={blog.image || DEFAULT_BLOG_IMAGE}
            alt={blog.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Content Layout */}
        <div className="w-full">
          {/* Inline Table of Contents if present */}
          <div className="max-w-md mb-8">
            <TableOfContents />
          </div>

          <article className="w-full">
            <style jsx global>{`
              .prose-story, .prose-story p, .prose-story h2, .prose-story h3, .prose-story ul, .prose-story ol {
                max-width: 100% !important;
                width: 100% !important;
              }
            `}</style>
            {/* The core compiled HTML content inside our styling prose */}
            <div
              className="prose-story font-sans text-[0.92rem] leading-relaxed text-white w-full max-w-none"
              dangerouslySetInnerHTML={{ __html: formatBlogContent(blog.content) }}
            />

            {/* Tags badges at bottom */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-6 border-t border-border/40 mt-10">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.62rem] font-sans text-gold bg-gold/5 px-3 py-1 border border-gold/20 rounded-[1px]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share buttons added here after tags */}
            <BlogShareButtons slug={blog.slug} title={blog.title} />

            {/* Author box */}
            <AuthorBox
              author={blog.author}
              authorImage={blog.authorImage}
              authorBio={blog.authorBio}
            />

            {/* Dynamic FAQs */}
            {blog.faqs && blog.faqs.length > 0 && <FaqSection faqs={blog.faqs} />}
          </article>
        </div>

        {/* Related Blogs section */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16 pt-10 border-t border-border/40">
            <h2 className="font-cormorant text-2xl md:text-3xl text-text mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((b) => (
                <div key={b.id}>
                  <BlogCard blog={b} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA section */}
        <div className="mt-12 p-8 border border-border bg-dark-2 rounded-[3px] text-center">
          <h3 className="font-cormorant text-2xl text-text mb-3">Ready to light up your sky?</h3>
          <p className="text-text-muted text-sm mb-6 max-w-md mx-auto">
            Tell us about your event and we&apos;ll craft a drone show your guests will never forget.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                openModal(
                  'Book a Show',
                  'Tell us about your event for a custom drone light show quote.'
                )
              }
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 text-[0.72rem] tracking-[0.16em] uppercase rounded-[2px] cursor-pointer border-none"
            >
              Book a Show
            </button>
            <Link
              href="/portfolio"
              className="border border-text/18 hover:border-gold text-text hover:text-gold px-8 py-3 text-[0.72rem] tracking-[0.16em] uppercase rounded-[2px] transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              href="/services"
              className="border border-text/18 hover:border-gold text-text hover:text-gold px-8 py-3 text-[0.72rem] tracking-[0.16em] uppercase rounded-[2px] transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <Footer onOpenModal={openModal} />
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        description={modalDesc}
      />
    </div>
  );
}
