'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import StoryVideoPlayer from './StoryVideoPlayer';
import StoryContent from './StoryContent';
import StoryCard from './StoryCard';
import StoryModal from './StoryModal';
import type { ContentStory } from '@/lib/stories/types';

interface StoryPageViewProps {
  story: ContentStory;
  relatedStories: ContentStory[];
}

export default function StoryPageView({ story, relatedStories }: StoryPageViewProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [activeStory, setActiveStory] = useState<ContentStory | null>(null);

  const openModal = (title: string, desc: string) => {
    setModalTitle(title);
    setModalDesc(desc);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-text">
      <Navbar onOpenModal={openModal} />

      <div className="pt-28 px-6 md:px-20 pb-16 max-w-[1400px] mx-auto">
        <nav className="text-[0.68rem] text-text-dim mb-8 font-sans tracking-wide">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/stories" className="hover:text-gold">
            Stories
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-muted">{story.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <div className="w-full lg:w-[45%] shrink-0">
            <StoryVideoPlayer story={story} autoPlay className="w-full h-auto lg:max-h-[78vh] sticky top-28" />
          </div>
          <div className="w-full lg:w-[55%]">
            <StoryContent story={story} showCta={false} />
          </div>
        </div>

        {/* {relatedStories.length > 0 && (
          <div className="mt-12 pt-10 border-t border-border">
            <h2 className="font-cormorant text-2xl md:text-3xl text-text mb-8">Related Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {relatedStories.map((s) => (
                <StoryCard key={s.id} story={s} onClick={setActiveStory} />
              ))}
            </div>
          </div>
        )} */}

        <div className="mt-16 p-8 border border-border bg-dark-2 rounded-[3px] text-center">
          <h3 className="font-cormorant text-2xl text-text mb-3">Ready to light up your sky?</h3>
          <p className="text-text-muted text-sm mb-6 max-w-md mx-auto">
            Tell us about your event and we&apos;ll craft a drone show your guests will never forget.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => openModal('Book a Show', 'Tell us about your event for a custom drone light show quote.')}
              className="bg-gold hover:bg-gold-light text-black font-medium px-8 py-3 text-[0.72rem] tracking-[0.16em] uppercase rounded-[2px]"
            >
              Book a Show
            </button>
            <Link
              href="/portfolio"
              className="border border-text/18 hover:border-gold text-text hover:text-gold px-8 py-3 text-[0.72rem] tracking-[0.16em] uppercase rounded-[2px]"
            >
              View Portfolio
            </Link>
            <Link
              href="/services"
              className="border border-text/18 hover:border-gold text-text hover:text-gold px-8 py-3 text-[0.72rem] tracking-[0.16em] uppercase rounded-[2px]"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <Footer onOpenModal={openModal} />
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle} description={modalDesc} />
      <StoryModal story={activeStory} onClose={() => setActiveStory(null)} />
    </div>
  );
}
