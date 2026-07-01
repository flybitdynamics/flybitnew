'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';

export default function DroneShowCostPage() {
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
            PRICING GUIDE
            <span className="w-6 h-[1px] bg-gold-dim" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            How Much Does a <em className="text-gold italic">Drone Show Cost?</em>
          </h1>
          <p className="text-[0.95rem] text-text-muted max-w-[650px] mx-auto leading-[1.8] font-sans">
            Transparent breakdown of drone show cost in India. View our standard swarm packages and get a customized quote for your upcoming event.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-dark-2/20 font-sans">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] flex flex-col justify-between min-h-[360px]">
              <div>
                <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-2">Logo &amp; Brand Displays</span>
                <span className="text-xs text-text-dim tracking-[0.1em] uppercase block mb-6">Logo reveals &amp; Names</span>
                <p className="text-[0.88rem] text-text-muted leading-relaxed mb-6">
                  Perfect for brand logos, names, and linear geometric designs. Custom animations for launches.
                </p>
              </div>
              <div className="border-t border-gold/10 pt-6">
                <span className="text-xs text-text-dim block mb-1">Starting from</span>
                <span className="text-gold font-bebas text-2xl tracking-[0.05em] block">₹4.0 Lakhs onwards</span>
              </div>
            </div>

            <div className="p-8 border border-gold/25 rounded bg-gold/[0.01] flex flex-col justify-between min-h-[360px] relative">
              <span className="absolute top-4 right-4 bg-gold text-black text-[0.58rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded">Popular</span>
              <div>
                <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-2">Dynamic 3D Animations</span>
                <span className="text-xs text-text-dim tracking-[0.1em] uppercase block mb-6">High Fidelity Transitions</span>
                <p className="text-[0.88rem] text-text-muted leading-relaxed mb-6">
                  Stunning 3D dynamic transitions, multi-colored drone choreography, and tailored shape design.
                </p>
              </div>
              <div className="border-t border-gold/10 pt-6">
                <span className="text-xs text-text-dim block mb-1">Starting from</span>
                <span className="text-gold font-bebas text-2xl tracking-[0.05em] block">₹4.0 Lakhs onwards</span>
              </div>
            </div>

            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] flex flex-col justify-between min-h-[360px]">
              <div>
                <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-2">Grand Cinematic Spectacles</span>
                <span className="text-xs text-text-dim tracking-[0.1em] uppercase block mb-6">Large Scale Formations</span>
                <p className="text-[0.88rem] text-text-muted leading-relaxed mb-6">
                  Unlimited animation shapes, heavy spatial layouts, and precise storytelling for grand landmarks.
                </p>
              </div>
              <div className="border-t border-gold/10 pt-6">
                <span className="text-xs text-text-dim block mb-1">Starting from</span>
                <span className="text-gold font-bebas text-2xl tracking-[0.05em] block">₹4.0 Lakhs onwards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors breakdown */}
      <section className="py-20 border-t border-gold/10 font-sans">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Cost Drivers
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-8">
              What Influences the <em className="text-gold italic">Overall Cost?</em>
            </h2>
            <p className="text-[0.92rem] text-text-muted leading-relaxed mb-6">
              Apart from the swarm count, several technical parameters determine drone show pricing in India:
            </p>
            <ul className="space-y-4 text-[0.88rem] text-text-muted">
              <li><strong>Airspace Clearances:</strong> Sourcing permits from DGCA and ATC varies based on local VVIP airspace coordinates.</li>
              <li><strong>Choreography Complexity:</strong> Building complex 3D animations from scratch requires comprehensive physics testing.</li>
              <li><strong>Logistics:</strong> Safe transportation of sensitive battery payloads, hardware, and crew to the venue location.</li>
            </ul>
          </div>

          <div className="border border-gold/15 p-10 rounded bg-black relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <h3 className="font-cormorant text-3xl font-light text-text mb-6">
              Get an Estimate
            </h3>
            <p className="text-[0.88rem] text-text-muted leading-relaxed mb-8">
              Enquire today to receive a complete cost breakdown, local feasibility assessment, and design portfolio.
            </p>
            <button
              onClick={() => openModal('Request Price Quote', 'Submit details to calculate the drone show cost.')}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 text-[0.75rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
            >
              Get Custom Quote
            </button>
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
