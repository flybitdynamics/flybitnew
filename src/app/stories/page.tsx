'use client';

import { useEffect, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import StoryHero from '@/components/stories/StoryHero';
import StoryCard from '@/components/stories/StoryCard';
import StoryModal from '@/components/stories/StoryModal';
import StoryFilters from '@/components/stories/StoryFilters';
import { getPublishedStories, getRelatedStories } from '@/lib/stories/queries';
import type { ContentStory } from '@/lib/stories/types';

export default function StoriesPage() {
  const [stories, setStories] = useState<ContentStory[]>([]);
  const [category, setCategory] = useState<string>('All Stories');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [activeStory, setActiveStory] = useState<ContentStory | null>(null);
  const [related, setRelated] = useState<ContentStory[]>([]);

  useEffect(() => {
    getPublishedStories().then(setStories);
  }, []);

  const openModal = (title: string, desc: string) => {
    setModalTitle(title);
    setModalDesc(desc);
    setModalOpen(true);
  };

  const openStory = useCallback(async (story: ContentStory) => {
    setActiveStory(story);
    const rel = await getRelatedStories(story.slug, story.showType, 3);
    setRelated(rel);
  }, []);

  const filtered = category === 'All Stories' ? stories : stories.filter((s) => s.showType === category);

  return (
    <div className="min-h-screen bg-black text-text">
      <Navbar onOpenModal={openModal} />
      <StoryHero />
      <section className="px-6 md:px-20 pb-28 max-w-[1440px] mx-auto">
        <StoryFilters activeCategory={category} onCategoryChange={setCategory} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filtered.map((story) => (
            <StoryCard key={story.id} story={story} onClick={openStory} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-16">No stories in this category yet.</p>
        )}
      </section>
      <Footer onOpenModal={openModal} />
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle} description={modalDesc} />
      <StoryModal
        story={activeStory}
        relatedStories={related}
        onClose={() => setActiveStory(null)}
        onRelatedClick={openStory}
        onOpenModal={openModal}
      />
    </div>
  );
}
