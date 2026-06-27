'use client';
import React, { useState, useEffect, useCallback } from 'react';
import StoryFilters from '@/components/stories/StoryFilters';
import StoryCard from '@/components/stories/StoryCard';
import StoryModal from '@/components/stories/StoryModal';
import { getPublishedStories, getRelatedStories } from '@/lib/stories/queries';
import type { ContentStory } from '@/lib/stories/types';

interface PortfolioProps {
  onOpenModal?: (title: string, desc: string) => void;
}

export default function Portfolio({ onOpenModal }: PortfolioProps) {
  const [stories, setStories] = useState<ContentStory[]>([]);
  const [category, setCategory] = useState<string>('All Stories');
  const [activeStory, setActiveStory] = useState<ContentStory | null>(null);
  const [relatedStories, setRelatedStories] = useState<ContentStory[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fu');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    getPublishedStories().then((data) => setStories(data));
  }, []);

  const openStory = useCallback(async (story: ContentStory) => {
    setActiveStory(story);
    const related = await getRelatedStories(story.slug, story.showType, 3);
    setRelatedStories(related);
  }, []);

  const closeStory = () => {
    setActiveStory(null);
    setRelatedStories([]);
  };

  const filtered = category === 'All Stories' ? stories : stories.filter((s) => s.showType === category);

  return (
    <>
      <section id="work">
        <div className="work-head fu">
          <div>
            <div className="eyebrow">Portfolio</div>
            <h2 className="sec-title">Our <em>Work</em></h2>
            <p className="sec-body" style={{maxWidth: '420px'}}>
              Our work transforms the night sky into a canvas of storytelling, where technology meets creativity.
            </p>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto fu mt-8">
          <StoryFilters activeCategory={category} onCategoryChange={setCategory} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {filtered.map((story) => (
              <StoryCard key={story.id} story={story} onClick={openStory} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-16">No stories in this category yet.</p>
          )}
        </div>
      </section>

      <StoryModal
        story={activeStory}
        relatedStories={relatedStories}
        onClose={closeStory}
        onRelatedClick={openStory}
        onOpenModal={onOpenModal}
      />
    </>
  );
}
