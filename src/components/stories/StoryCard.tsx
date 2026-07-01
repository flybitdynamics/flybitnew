'use client';

import type { ContentStory } from '@/lib/stories/types';
import StoryThumbnail from './StoryThumbnail';

interface StoryCardProps {
  story: ContentStory;
  onClick?: (story: ContentStory) => void;
}

export default function StoryCard({ story, onClick }: StoryCardProps) {
  const handleClick = () => onClick?.(story);

  return (
    <article
      className="story-card group relative flex flex-col bg-dark border border-border rounded-[3px] overflow-hidden cursor-pointer transition-all duration-300 hover:border-gold/25 hover:-translate-y-1 w-full max-w-[380px] h-[450px]"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <StoryThumbnail story={story} className="h-[200px] shrink-0" />

      <div className="flex flex-col flex-1 p-6 font-sans">
        <span className="inline-block self-start text-[0.58rem] tracking-[0.25em] uppercase text-gold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-full mb-3">
          {story.showType}
        </span>

        <h3 className="font-cormorant text-xl text-text leading-snug mb-2 line-clamp-2 group-hover:text-gold transition-colors duration-200">
          {story.title}
        </h3>

        <p className="text-[0.92rem] text-text-muted leading-relaxed line-clamp-3 flex-1">
          {story.shortDescription}
        </p>

        <div className="flex items-center gap-2 mt-4 text-[0.68rem] tracking-[0.15em] uppercase text-gold-dim group-hover:text-gold group-hover:gap-3 transition-all duration-300">
          Read Story →
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </article>
  );
}
