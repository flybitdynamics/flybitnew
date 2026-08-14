'use client';

import { useEffect, useRef } from 'react';
import type { ContentStory } from '@/lib/stories/types';
import { publicAsset } from '@/lib/public-assets';
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

  const videoSrc = story.videoUrl ? publicAsset(story.videoUrl) : '';
  const posterSrc = publicAsset(story.thumbnailUrl || story.coverImageUrl);

  useEffect(() => {
    if (!autoPlay || !videoSrc) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        /* Autoplay fallback */
      });
    }
  }, [autoPlay, story.id, videoSrc]);

  if (videoSrc) {
    return (
      <div className={`relative bg-black rounded-[4px] overflow-hidden flex items-center justify-center group ${className}`}>
        <video
          ref={videoRef}
          key={story.id}
          src={videoSrc}
          controls
          autoPlay={autoPlay}
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc || undefined}
          className="w-full h-auto max-h-full object-contain mx-auto"
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
          <div className="relative w-full max-w-[385px] h-full max-h-[695px] aspect-[9/16] bg-black rounded-[12px] border border-border/20 overflow-hidden shadow-2xl flex items-center justify-center">
            <iframe
              key={story.id}
              src={src}
              title={`${story.title} — Video`}
              className="w-full h-full border-0"
              scrolling="no"
              style={{ overflow: 'hidden' }}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              loading="eager"
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
