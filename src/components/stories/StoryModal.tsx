'use client';

import { useEffect } from 'react';
import type { ContentStory } from '@/lib/stories/types';
import StoryVideoPlayer from './StoryVideoPlayer';
import StoryContent from './StoryContent';
import RelatedStories from './RelatedStories';

interface StoryModalProps {
  story: ContentStory | null;
  relatedStories?: ContentStory[];
  onClose: () => void;
  onRelatedClick?: (story: ContentStory) => void;
}

export default function StoryModal({
  story,
  relatedStories = [],
  onClose,
  onRelatedClick,
}: StoryModalProps) {
  useEffect(() => {
    if (!story) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [story, onClose]);

  if (!story) return null;

  return (
    <div
      className="fixed inset-0 z-[600] flex items-center justify-center p-4 md:p-6 bg-black/88 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
    >
      <div
        className="relative bg-dark-2 border border-border rounded-[3px] w-[90vw] max-w-[1400px] h-[85vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 border border-border text-text-muted hover:text-gold hover:border-gold transition-colors text-xl"
          aria-label="Close"
        >
          ×
        </button>

        {/* Mobile: video first, content second */}
        <div className="flex flex-col md:flex-row h-full overflow-hidden">
          <div className="w-full md:w-[45%] shrink-0 p-4 md:p-6 md:pr-3 h-[40vh] md:h-full">
            <StoryVideoPlayer story={story} autoPlay className="w-full h-full min-h-[200px]" />
          </div>

          <div className="w-full md:w-[55%] flex-1 overflow-y-auto p-4 md:p-6 md:pl-3 md:pr-8">
            <StoryContent story={story} showCta />

            {relatedStories.length > 0 && (
              <div className="hidden md:block">
                <RelatedStories
                  stories={relatedStories.slice(0, 2)}
                  onStoryClick={onRelatedClick}
                  title="Related Stories"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
