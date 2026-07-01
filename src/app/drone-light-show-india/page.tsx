'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';

export default function DroneLightShowIndiaPage() {
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black border-b border-gold/10">
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
            NATIONWIDE FLEETS
            <span className="w-6 h-[1px] bg-gold-dim" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            Spectacular <em className="text-gold italic">Drone Light Show India</em>
          </h1>
          <p className="text-[0.95rem] text-text-muted max-w-[650px] mx-auto leading-[1.8] font-sans">
            Delivering India's most advanced, eco-friendly light displays. FLYBIT Dynamics coordinates safe, VVIP-approved drone swarms nationwide.
          </p>
        </div>
      </section>

      {/* Regional Operations Cards */}
      <section className="py-20 bg-dark-2/20 font-sans">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Regional Operations
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-8">
              Pioneering Sky Art <em className="text-gold italic">Across India</em>
            </h2>
            <p className="text-[0.92rem] text-text-muted leading-relaxed mb-6">
              With active regional hubs in key locations, we offer rapid deployment capabilities. Our team manages coordinates modeling and secures airspace clearances for high-profile weddings, corporate launches, and heritage festivals.
            </p>
            <p className="text-[0.92rem] text-text-muted leading-relaxed">
              Every flight is directed by licensed flight operators and handles local clearances (DGCA, local police NOCs, Air Traffic Control) seamlessly.
            </p>
          </div>

          <div className="border border-gold/15 p-8 rounded bg-black/40 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <span className="text-gold font-bebas text-2xl tracking-[0.1em] uppercase block mb-4">Operational Setup</span>
            <ul className="space-y-4 text-[0.88rem] text-text-muted">
              <li><strong>Jaipur &amp; Udaipur:</strong> Palace wedding storyboards, cultural emblems, sangeet finales.</li>
              <li><strong>Mumbai &amp; Ahmedabad:</strong> BKC corporate shows, Sabarmati riverfront launches, stadium activations.</li>
              <li><strong>Delhi NCR:</strong> Highly restricted airspace clearances and corporate launches.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 border-t border-gold/10 bg-dark-3/10 font-sans">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="font-cormorant text-4xl text-text font-light mb-6">
            Book a Drone Light Show in India
          </h3>
          <p className="text-[0.88rem] text-text-muted leading-relaxed mb-10">
            Submit your event venue coordinates to receive custom animation storyboards and feasibility assessments.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => openModal('Request Show Proposal', 'Book a drone light show in India.')}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 text-[0.75rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
            >
              Inquire Now
            </button>
            <Link
              href="/pricing"
              className="border border-text/20 hover:border-gold text-text hover:text-gold px-8 py-3.5 text-[0.75rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
            >
              View Pricing Guide
            </Link>
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
