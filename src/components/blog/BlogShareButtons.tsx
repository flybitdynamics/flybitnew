'use client';

import { useState } from 'react';
import { getBlogCanonicalUrl } from '@/lib/blogs/seo';

interface BlogShareButtonsProps {
  slug: string;
  title: string;
}

export default function BlogShareButtons({ slug, title }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = getBlogCanonicalUrl(slug);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-col gap-4 py-6 border-y border-border/40 my-8">
      <span className="text-[0.62rem] font-sans uppercase tracking-[0.2em] text-text-dim">
        Share this article
      </span>
      <div className="flex flex-wrap items-center gap-3">
        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-2 px-3.5 py-2 border border-border/80 hover:border-gold/60 text-text hover:text-gold rounded-[2px] text-xs font-sans transition-colors cursor-pointer bg-transparent"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          {copied ? 'Link Copied!' : 'Copy Link'}
        </button>

        {/* Twitter/X */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8.5 h-8.5 border border-border/80 hover:border-gold/60 text-text hover:text-gold rounded-[2px] transition-colors"
          title="Share on Twitter"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8.5 h-8.5 border border-border/80 hover:border-gold/60 text-text hover:text-gold rounded-[2px] transition-colors"
          title="Share on LinkedIn"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8.5 h-8.5 border border-border/80 hover:border-gold/60 text-text hover:text-gold rounded-[2px] transition-colors"
          title="Share on WhatsApp"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.86.002-2.634-1.02-5.112-2.882-6.976C16.592 1.907 14.12 .882 11.5 .882 6.066.882 1.645 5.302 1.64 10.74c0 1.705.452 3.37 1.309 4.834L1.93 20.17l4.717-1.237z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
