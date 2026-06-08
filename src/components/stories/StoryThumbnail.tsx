'use client';

import type { ContentStory } from '@/lib/stories/types';

interface StoryThumbnailProps {
  story: ContentStory;
  className?: string;
  showPlay?: boolean;
}

export default function StoryThumbnail({ story, className = '', showPlay = true }: StoryThumbnailProps) {
  const hasImage = Boolean(story.thumbnailUrl || story.coverImageUrl);
  const src = story.thumbnailUrl || story.coverImageUrl;

  return (
    <div className={`relative overflow-hidden bg-dark-3 ${className}`}>
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={story.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #110826 0%, #081120 50%, #060607 100%)',
          }}
        >
          <svg viewBox="0 0 120 120" className="w-24 h-24 opacity-40">
            <g fill="none" stroke="#C9A84C" strokeWidth="1">
              <circle cx="60" cy="60" r="40" opacity="0.5" />
              <circle cx="60" cy="40" r="2" fill="#C9A84C" />
              <circle cx="80" cy="55" r="2" fill="#C9A84C" />
              <circle cx="70" cy="75" r="2" fill="#C9A84C" />
              <circle cx="50" cy="75" r="2" fill="#C9A84C" />
              <circle cx="40" cy="55" r="2" fill="#C9A84C" />
            </g>
          </svg>
        </div>
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

      {showPlay && (story.videoUrl || story.instagramUrl) && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-5 h-5 ml-1 fill-black">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
