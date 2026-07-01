'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';

export default function DroneShowIndiaPage() {
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
            NATIONWIDE OPERATIONS
            <span className="w-6 h-[1px] bg-gold-dim" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            Premier <em className="text-gold italic">Drone Show India</em> Displays
          </h1>
          <p className="text-[0.95rem] text-text-muted max-w-[650px] mx-auto leading-[1.8] font-sans">
            FLYBIT Dynamics delivers breathtaking drone light show India displays. Operating nationwide with local bases to ensure efficient setup and coordination.
          </p>
        </div>
      </section>

      {/* Map regions summary */}
      <section className="py-20 bg-dark-2/20 font-sans">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Regional Operations
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-8">
              Serving Major Cities <em className="text-gold italic">Nationwide</em>
            </h2>
            <p className="text-[0.92rem] text-text-muted leading-relaxed mb-6">
              Our active regional setup enables rapid deployment for drone shows across all major hubs in India, including Jaipur, Udaipur, Ahmedabad, Delhi, and Mumbai.
            </p>
            <p className="text-[0.92rem] text-text-muted leading-relaxed">
              We manage local airspace regulations and secure flight NOCs end-to-end for every region, ensuring the highest standards of safety compliance under DGCA rules.
            </p>
          </div>

          <div className="border border-gold/15 p-8 rounded bg-black/40 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <span className="text-gold font-bebas text-2xl tracking-[0.1em] uppercase block mb-4">Active Hubs</span>
            <ul className="space-y-4 text-[0.88rem] text-text-muted">
              <li><strong>North India:</strong> Delhi NCR airspace clearances, Gurugram, Noida, and regional hubs.</li>
              <li><strong>West India:</strong> Mumbai metropolitan setups, Ahmedabad, and Gujarat cultural shows.</li>
              <li><strong>Rajasthan:</strong> Royal destination weddings in Fairmont Jaipur, Udaipur lakesides, and Jodhpur.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 border-t border-gold/10 bg-dark-3/10 font-sans">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="font-cormorant text-4xl text-text font-light mb-6">
            Book a Drone Show in India
          </h3>
          <p className="text-[0.88rem] text-text-muted leading-relaxed mb-10">
            Submit details for your event location to receive a custom animation storyboard and feasibility estimate.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => openModal('Request Show Proposal', 'Book a drone show in India.')}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 text-[0.75rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
            >
              Inquire Now
            </button>
            <Link
              href="/pricing"
              className="border border-text/20 hover:border-gold text-text hover:text-gold px-8 py-3.5 text-[0.75rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
            >
              Pricing Guide
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
