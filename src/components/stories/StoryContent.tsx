'use client';

import type { ContentStory } from '@/lib/stories/types';
import { formatStoryDate } from '@/lib/stories/utils';
import Link from 'next/link';

function formatStoryContent(content: string): string {
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

interface StoryContentProps {
  story: ContentStory;
  showCta?: boolean;
  compact?: boolean;
  onOpenModal?: (title: string, description: string) => void;
}

export default function StoryContent({ story, showCta = true, compact = false, onOpenModal }: StoryContentProps) {
  return (
    <div className={`font-sans ${compact ? '' : 'h-full flex flex-col'}`}>
      <span className="inline-block self-start text-[0.58rem] tracking-[0.25em] uppercase text-gold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-full mb-4">
        {story.showType}
      </span>

      <h2 className={`font-cormorant text-text leading-tight mb-3 ${compact ? 'text-2xl' : 'text-3xl md:text-4xl font-light'}`}>
        {story.title}
      </h2>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.72rem] text-text-dim tracking-[0.06em] mb-5">
        <span>{formatStoryDate(story.createdAt)}</span>
        <span>·</span>
        <span>{story.readingTime} read</span>
        <span>·</span>
        <span>{story.author}</span>
      </div>

      {story.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.62rem] tracking-[0.12em] uppercase text-gold-light bg-gold/8 border border-gold/15 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div
        className="story-article prose-story text-[0.88rem] text-text-muted leading-[1.95] pr-1"
        dangerouslySetInnerHTML={{ __html: formatStoryContent(story.content) }}
      />

      {(story.tags.length > 0 || story.seoKeywords.length > 0) && (
        <div className="flex flex-wrap gap-2 mt-6">
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.62rem] tracking-[0.12em] uppercase text-gold bg-gold/8 border border-gold/15 px-2.5 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
          {story.seoKeywords.map((kw) => (
            <span
              key={kw}
              className="text-[0.62rem] tracking-[0.12em] uppercase text-text-muted bg-white/4 border border-white/8 px-2.5 py-1 rounded-full"
            >
              {kw}
            </span>
          ))}
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-border space-y-5 shrink-0">
        {(story.instagramUrl || story.xUrl || story.facebookUrl || story.linkedinUrl) && (
          <div className="flex flex-wrap gap-3">
            {story.instagramUrl && (
              <a
                href={story.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border hover:border-gold text-text hover:text-gold font-medium px-5 py-3 text-[0.7rem] tracking-[0.16em] uppercase rounded-[2px] transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
            )}
            {story.xUrl && (
              <a
                href={story.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border hover:border-gold text-text hover:text-gold font-medium px-5 py-3 text-[0.7rem] tracking-[0.16em] uppercase rounded-[2px] transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X
              </a>
            )}
            {story.facebookUrl && (
              <a
                href={story.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border hover:border-gold text-text hover:text-gold font-medium px-5 py-3 text-[0.7rem] tracking-[0.16em] uppercase rounded-[2px] transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
                Facebook
              </a>
            )}
            {story.linkedinUrl && (
              <a
                href={story.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border hover:border-gold text-text hover:text-gold font-medium px-5 py-3 text-[0.7rem] tracking-[0.16em] uppercase rounded-[2px] transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            )}
          </div>
        )}

        {showCta && (
          <div className="flex flex-wrap gap-3">
            {/* <Link
              href={`/stories/${story.slug}`}
              className=""
            >
              Full Story Page →
            </Link> */}
            <button
              onClick={() => onOpenModal?.('Book Your Show', "Tell us about your event and we'll design the perfect aerial spectacle — from 200 to 3,000 drones, anywhere in India.")}
              className="bg-gold hover:bg-gold-light text-black font-medium px-6 py-3 text-[0.7rem] tracking-[0.16em] uppercase rounded-[2px] transition-all hover:-translate-y-0.5 cursor-pointer border-none"
            >
              Book a Show →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
