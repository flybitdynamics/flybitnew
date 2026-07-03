'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import ServiceImageSlider from '@/components/services/ServiceImageSlider';
import { SERVICE_IMAGES, type ServiceImageCategory } from '@/lib/services/serviceImages';

interface CategoryLandingPageProps {
  title: string;
  keyword: string;
  eyebrow: string;
  introText: string;
  detailText: string;
  imageKey: ServiceImageCategory;
  pills: string[];
  ctaText: string;
}

export default function CategoryLandingPage({
  title,
  keyword,
  eyebrow,
  introText,
  detailText,
  imageKey,
  pills,
  ctaText,
}: CategoryLandingPageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  const openModal = (mTitle: string, mDesc: string) => {
    setModalTitle(mTitle);
    setModalDesc(mDesc);
    setModalOpen(true);
  };

  const images = SERVICE_IMAGES[imageKey] || [];

  return (
    <main className="min-h-screen bg-black text-text selection:bg-gold selection:text-black">
      <Navbar onOpenModal={openModal} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-black border-b border-gold/10">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 70% 60% at 50% 15%, rgba(201, 168, 76, 0.08) 0%, transparent 60%),
              linear-gradient(rgba(201, 168, 76, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 168, 76, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 text-center">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-6 flex items-center justify-center gap-3 font-sans font-medium">
            <span className="w-6 h-[1px] bg-gold-dim" />
            {eyebrow}
            <span className="w-6 h-[1px] bg-gold-dim" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            Bespoke <em className="text-gold italic">{title}</em>
          </h1>
          <p className="text-[0.98rem] text-text-muted max-w-[700px] mx-auto leading-[1.8] font-sans">
            {introText}
          </p>
        </div>
      </section>

      {/* Detailed Focus Grid */}
      <section className="py-20 bg-dark-2/10 font-sans">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column content */}
          <div>
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Premium Sky Art
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-8">
              Write Your Story <em className="text-gold italic">in Light</em>
            </h2>
            <p className="text-[0.92rem] text-text-muted leading-relaxed mb-8">
              {detailText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {pills.map((pill) => (
                <div
                  key={pill}
                  className="p-3 border border-border/30 rounded-[2px] text-[0.78rem] text-text-muted tracking-wide flex items-center gap-2 hover:border-gold/25 transition-all"
                >
                  <span className="text-gold text-[0.65rem]">⚡</span>
                  {pill}
                </div>
              ))}
            </div>

            <button
              onClick={() => openModal(ctaText, `Enquire for a customized ${keyword} display proposal.`)}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-10 py-4 text-[0.75rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
            >
              {ctaText}
            </button>
          </div>

          {/* Right Column: Visual Frame Slider */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[460px] aspect-[4/3] md:aspect-square bg-black border border-gold/10 rounded-[3px] overflow-hidden isolate">
              <div className="absolute top-[-1px] left-[-1px] w-3.5 h-3.5 border-t-[1.5px] border-l-[1.5px] border-gold/40 z-10 pointer-events-none" />
              <div className="absolute top-[-1px] right-[-1px] w-3.5 h-3.5 border-t-[1.5px] border-r-[1.5px] border-gold/40 z-10 pointer-events-none" />
              <div className="absolute bottom-[-1px] left-[-1px] w-3.5 h-3.5 border-b-[1.5px] border-l-[1.5px] border-gold/40 z-10 pointer-events-none" />
              <div className="absolute bottom-[-1px] right-[-1px] w-3.5 h-3.5 border-b-[1.5px] border-r-[1.5px] border-gold/40 z-10 pointer-events-none" />
              <ServiceImageSlider images={images} alt={title} />
            </div>
          </div>

        </div>
      </section>

      {/* Booking CTA section */}
      <section className="py-20 border-t border-gold/10 bg-dark-3/10 font-sans">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="font-cormorant text-4xl text-text font-light mb-6">
            Plan a Custom Swarm Performance
          </h3>
          <p className="text-[0.92rem] text-text-muted leading-relaxed mb-10">
            Submit your target venue coordinates today to receive tailored proposals, sitemaps, and custom safety audits.
          </p>
          <button
            onClick={() => openModal('Request Custom Quote', `Book a premium ${keyword} design.`)}
            className="bg-transparent border border-gold/30 hover:border-gold text-gold hover:text-gold-light font-semibold px-8 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
          >
            Get Feasibility Assessment
          </button>
        </div>
      </section>

      <Footer onOpenModal={openModal} />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        description={modalDesc}
      />
    </main>
  );
}
