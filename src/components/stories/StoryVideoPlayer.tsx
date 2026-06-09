'use client';

import { useEffect, useRef } from 'react';
import type { ContentStory } from '@/lib/stories/types';
import { getInstagramEmbedUrl } from '@/lib/stories/utils';

interface StoryVideoPlayerProps {
  story: ContentStory;
  className?: string;
  /** Start playback when the player mounts (e.g. story modal opened). */
  autoPlay?: boolean;
}

export default function StoryVideoPlayer({
  story,
  className = '',
  autoPlay = false,
}: StoryVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!autoPlay || !story.videoUrl) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        /* Browser may block autoplay with sound; controls remain available */
      });
    }
  }, [autoPlay, story.id, story.videoUrl]);

  if (story.videoUrl) {
    return (
      <div className={`relative bg-black rounded-[3px] overflow-hidden ${className}`}>
        <video
          ref={videoRef}
          key={story.id}
          src={story.videoUrl}
          controls
          autoPlay={autoPlay}
          muted
          loop
          playsInline
          preload="auto"
          poster={story.thumbnailUrl || story.coverImageUrl || undefined}
          className="w-full h-full object-cover"
        >
          <track kind="captions" />
        </video>
      </div>
    );
  }

  if (story.instagramUrl) {
    const embedUrl = getInstagramEmbedUrl(story.instagramUrl);

    if (embedUrl) {
      const src = autoPlay ? `${embedUrl}?autoplay=1` : embedUrl;
      return (
        <div className={`w-full h-full flex items-center justify-center bg-black/40 rounded-[3px] ${className}`}>
          <div className="relative w-full max-w-[385px] h-full max-h-[695px] aspect-[9/16] bg-black rounded-[12px] border border-border/20 overflow-hidden shadow-2xl">
            <iframe
              key={story.id}
              src={src}
              title={`${story.title} — Instagram`}
              className="absolute inset-0 w-full h-full border-0"
              scrolling="no"
              style={{ overflow: 'hidden' }}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      );
    }
  }

  return (
    <div
      className={`relative bg-dark-3 border border-border rounded-[3px] flex flex-col items-center justify-center gap-3 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #110826 0%, #081120 50%, #060607 100%)',
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" className="w-12 h-12 opacity-50">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10,8 16,12 10,16" fill="var(--color-gold)" stroke="none" />
      </svg>
      <span className="text-text-muted text-xs tracking-wider uppercase">Video coming soon</span>
    </div>
  );
}
