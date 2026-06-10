'use client';

import type { ContentStory } from '@/lib/stories/types';
import { formatStoryDate } from '@/lib/stories/utils';
import StoryShareButtons from './StoryShareButtons';
import Link from 'next/link';

interface StoryContentProps {
  story: ContentStory;
  showCta?: boolean;
  compact?: boolean;
}

export default function StoryContent({ story, showCta = true, compact = false }: StoryContentProps) {
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
        dangerouslySetInnerHTML={{ __html: story.content }}
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
        <StoryShareButtons story={story} />

        {showCta && (
          <div className="flex flex-wrap gap-3">
            {/* <Link
              href={`/stories/${story.slug}`}
              className=""
            >
              Full Story Page →
            </Link> */}
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-black font-medium px-6 py-3 text-[0.7rem] tracking-[0.16em] uppercase rounded-[2px] transition-all hover:-translate-y-0.5"
            >
              Book a Show →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
