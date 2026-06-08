'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import FadeUp from '../FadeUp';
import StoryCard from './StoryCard';
import StoryModal from './StoryModal';
import type { ContentStory } from '@/lib/stories/types';
import { getPublishedStories, getRelatedStories } from '@/lib/stories/queries';

interface StoriesInsightsSectionProps {
  onOpenModal?: (title: string, desc: string) => void;
}

export default function StoriesInsightsSection({ onOpenModal }: StoriesInsightsSectionProps) {
  const [stories, setStories] = useState<ContentStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeStory, setActiveStory] = useState<ContentStory | null>(null);
  const [relatedStories, setRelatedStories] = useState<ContentStory[]>([]);

  useEffect(() => {
    getPublishedStories(6).then((data) => {
      setStories(data);
      setLoading(false);
    });
  }, []);

  const openStory = useCallback(async (story: ContentStory) => {
    setActiveStory(story);
    const related = await getRelatedStories(story.slug, story.showType, 2);
    setRelatedStories(related);
  }, []);

  const closeStory = () => {
    setActiveStory(null);
    setRelatedStories([]);
  };

  return (
    <>
      <section id="stories" className="bg-dark-2 px-6 md:px-20 py-28 select-none">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 font-sans">
            <FadeUp>
              <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
                Stories & Insights
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight">
                Our Work & <em className="text-gold italic">Insights</em>
              </h2>
              <p className="text-[0.88rem] text-text-muted mt-4 max-w-[480px] leading-relaxed">
                Short-form reels and in-depth articles — explore how we light up the sky across India.
              </p>
            </FadeUp>

            <FadeUp delay={80}>
              <Link
                href="/stories"
                className="mt-6 md:mt-0 border border-text/18 hover:border-gold text-text hover:text-gold font-light px-8 py-3 text-[0.72rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 inline-block"
              >
                View All Stories →
              </Link>
            </FadeUp>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-full max-w-[380px] h-[450px] bg-dark border border-border rounded-[3px] animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {stories.map((story, idx) => (
                <FadeUp key={story.id} delay={(idx % 3) * 80}>
                  <StoryCard story={story} onClick={openStory} />
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>

      <StoryModal
        story={activeStory}
        relatedStories={relatedStories}
        onClose={closeStory}
        onRelatedClick={openStory}
      />
    </>
  );
}
