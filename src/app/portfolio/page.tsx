'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Showcase from '@/components/Showcase';
import Portfolio from '@/components/about/Portfolio';

export default function PortfolioPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  const openModal = (title: string, desc: string) => {
    setModalTitle(title);
    setModalDesc(desc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-text selection:bg-gold selection:text-black">
      <Navbar onOpenModal={openModal} />

      <main className="pt-24">
        {/* Header Hero Banner */}
        <section className="px-6 md:px-20 py-12 max-w-[1440px] mx-auto text-center border-b border-border/10">
          <div className="eyebrow text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-3">
            Drone Show Gallery
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-text leading-tight mb-4">
            Our Drone Show <em className="text-gold italic">Portfolio</em>
          </h1>
          <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Explore our photos, video show reels, and behind-the-scenes stories painting the night sky across India with precision drones.
          </p>
        </section>

        {/* Video & Photo Showcase Section */}
        <Showcase onOpenModal={openModal} />

        {/* Story Portfolio Grid Section */}
        <div className="px-6 md:px-20 py-12 border-t border-border/10">
          <Portfolio onOpenModal={openModal} />
        </div>
      </main>

      <Footer onOpenModal={openModal} />

      <BookingModal
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalTitle}
        description={modalDesc}
      />
    </div>
  );
}
