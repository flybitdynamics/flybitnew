'use client';

import type { ContentStory } from '@/lib/stories/types';
import { getCanonicalUrl } from '@/lib/stories/utils';

interface StoryShareButtonsProps {
  story: ContentStory;
}

export default function StoryShareButtons({ story }: StoryShareButtonsProps) {
  const url = typeof window !== 'undefined' ? window.location.href : getCanonicalUrl(story.slug);
  const text = encodeURIComponent(story.title);

  const shareLinks = [
    {
      label: 'Twitter',
      href: `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`,
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${text}%20${encodeURIComponent(url)}`,
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[0.62rem] tracking-[0.2em] uppercase text-text-dim mr-1">Share</span>
      {shareLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.65rem] tracking-[0.1em] uppercase border border-border hover:border-gold text-text-muted hover:text-gold px-3 py-1.5 rounded-[2px] transition-colors"
        >
          {link.label}
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        className="text-[0.65rem] tracking-[0.1em] uppercase border border-border hover:border-gold text-text-muted hover:text-gold px-3 py-1.5 rounded-[2px] transition-colors bg-transparent"
      >
        Copy Link
      </button>
    </div>
  );
}
