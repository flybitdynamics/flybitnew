'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function PrivacyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  const openModal = (title: string, description: string) => {
    setModalTitle(title);
    setModalDesc(description);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-black text-text selection:bg-gold selection:text-black">
      <Navbar onOpenModal={openModal} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-black border-b border-gold/10">
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

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 text-left">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-6 flex items-center gap-3 font-sans font-medium">
            <span className="w-10 h-[1px] bg-gold-dim" />
            DATA SAFETY
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            Privacy <em className="text-gold italic">Policy</em>
          </h1>
          <p className="text-[0.95rem] text-text-muted max-w-[650px] leading-[1.8] font-sans">
            FLYBIT Dynamics is committed to protecting your privacy. Review this policy to understand how we secure client coordinates, contact logs, and event information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-dark-2/10 font-sans">
        <div className="max-w-[800px] mx-auto px-6 text-text-muted text-[0.92rem] leading-relaxed space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-gold text-2xl font-cormorant font-light uppercase tracking-wide">1. Information We Collect</h2>
            <p>
              We collect information that you submit voluntarily when filling out our booking query forms, including name, email address, telephone contact numbers, proposed show locations, target dates, and flight size preferences.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-gold text-2xl font-cormorant font-light uppercase tracking-wide">2. How We Utilize Your Data</h2>
            <p>
              We use your submitted event parameters to coordinate airspace feasibility checks, calculate custom pricing configurations, compile logistics, and design storyboard animations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-gold text-2xl font-cormorant font-light uppercase tracking-wide">3. VVIP Confidentiality &amp; Media</h2>
            <p>
              For high-profile, VVIP, or brand-confidential product launches, we sign strict Non-Disclosure Agreements (NDAs). We never publish event media, footage, or brand identities without your explicit, written consent.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-gold text-2xl font-cormorant font-light uppercase tracking-wide">4. Third-Party Analytics &amp; Cookies</h2>
            <p>
              Our website uses basic Google Analytics tracking and cookies to monitor web traffic performance and understand how users interact with our pricing estimators and page sections.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-gold text-2xl font-cormorant font-light uppercase tracking-wide">5. Security Standards</h2>
            <p>
              All contact database nodes are encrypted. We implement strict digital and physical access constraints to prevent unauthorized leaks or data tampering.
            </p>
          </div>

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
