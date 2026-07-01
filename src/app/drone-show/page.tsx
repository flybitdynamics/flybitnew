'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';

export default function DroneShowPage() {
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
            FLYBIT DYNAMICS
            <span className="w-6 h-[1px] bg-gold-dim" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            Spectacular <em className="text-gold italic">Drone Shows</em> in India
          </h1>
          <p className="text-[0.95rem] text-text-muted max-w-[650px] mx-auto leading-[1.8] font-sans">
            Transforming local skies into massive digital canvas. We coordinate safe, fully-compliant drone swarm displays featuring up to 500+ synchronized aircraft.
          </p>
        </div>
      </section>

      {/* Fleet Capabilities Grid */}
      <section className="py-20 bg-dark-2/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Swarm Scale
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text">
              Flexible Fleet <em className="text-gold italic">Choreography</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300 font-sans">
              <span className="font-bebas text-gold text-2xl tracking-[0.05em] block mb-4">100-Drone Swarms</span>
              <p className="text-[0.88rem] text-text-muted leading-relaxed">
                Ideal for intimate weddings, proposal sequences, and high-visibility corporate logos in the sky.
              </p>
            </div>

            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300 font-sans">
              <span className="font-bebas text-gold text-2xl tracking-[0.05em] block mb-4">200-Drone Formations</span>
              <p className="text-[0.88rem] text-text-muted leading-relaxed">
                Perfect for multi-sequence 3D transitions, rich color animations, sangeet finales, and medium brand reveals.
              </p>
            </div>

            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300 font-sans">
              <span className="font-bebas text-gold text-2xl tracking-[0.05em] block mb-4">300+ Drone Spectacles</span>
              <p className="text-[0.88rem] text-text-muted leading-relaxed">
                Cinematic sky storytelling, complex shapes, high-density layouts, stadium openers, and large cultural festival landmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 border-t border-gold/10 bg-dark-3/10 font-sans">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="font-cormorant text-4xl text-text font-light mb-6">
            Plan a Drone Show
          </h3>
          <p className="text-[0.88rem] text-text-muted leading-relaxed mb-10">
            Enquire today to receive a customized estimate, safety assessment, and custom storyboard options.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => openModal('Request Drone Show Info', 'Enquire for details on hosting a drone show in India.')}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 text-[0.75rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
            >
              Get Free Quote
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
