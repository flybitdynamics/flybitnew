'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is a drone light show and how does it function?",
    answer: "A drone light show is a synchronized swarm of light-emitting drones flying in complex, predefined 3D formations to create logos, symbols, text, and narrative animations in the sky. Controlled by a single computer ground station, each drone receives individual coordinate commands via high-speed encrypted radio systems, executing precise flights with centimeter-level accuracy using RTK GPS."
  },
  {
    question: "How long does a drone light show last?",
    answer: "Most drone light shows last between 5 to 10 minutes of active sky performance. This duration is primarily determined by drone battery limitations under high-performance payloads. Our certified drone show company custom-designs flight choreographies to maximize the visual impact within this window."
  },
  {
    question: "What safety clearances are required in India?",
    answer: "Under DGCA regulations in India, drone shows require a local airspace clearance, No Permission No Takeoff (NPNT) compliance, a local police NOC, and coordination with the nearest Air Traffic Control (ATC). As a premium drone light show company, FLYBIT Dynamics handles all regulatory clearances end-to-end."
  },
  {
    question: "Can drone shows fly in wind or rain?",
    answer: "Our drones are built to withstand winds up to 8 m/s (approx. 28 km/h). However, shows cannot fly in moderate to heavy rain, strong gusts, or severe thunderstorms. We monitor wind and weather coordinates in real-time to ensure absolute safety."
  }
];

export default function WhatIsDroneShowPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const openModal = (title: string, description: string) => {
    setModalTitle(title);
    setModalDesc(description);
    setModalOpen(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
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
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-6 flex items-center justify-center gap-3 font-sans">
            <span className="w-6 h-[1px] bg-gold-dim" />
            Educational Guide
            <span className="w-6 h-[1px] bg-gold-dim" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            What is a <em className="text-gold italic">Drone Light Show?</em>
          </h1>
          <p className="text-[0.95rem] text-text-muted max-w-[650px] mx-auto leading-[1.8] font-sans">
            Step into the future of sky-high entertainment. Discover how swarm drone technology, precision RTK GPS, and artistic choreography merge to replace traditional fireworks.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-dark-2/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="font-sans">
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              The Technology
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-8">
              How Swarm Drone <em className="text-gold italic">Technology Functions</em>
            </h2>
            <p className="text-[0.92rem] text-text-muted leading-relaxed mb-6">
              A drone light show is not controlled by individual pilots flying separate aircraft. Instead, it utilizes a sophisticated <strong>ground control station (GCS)</strong> computer that communicates with a centralized swarm of custom-built drones.
            </p>
            <p className="text-[0.92rem] text-text-muted leading-relaxed mb-6">
              Each drone has built-in RTK (Real-Time Kinematics) GPS systems, allowing for centimeter-level accuracy in the air. Highly bright RGB LEDs project millions of colors, transforming the sky into a massive 3D digital display canvas.
            </p>
            <div className="flex gap-4 flex-wrap mt-8">
              <span className="text-xs bg-gold/10 border border-gold/25 px-4 py-2 text-gold rounded-[2px]">Centimeter RTK Accuracy</span>
              <span className="text-xs bg-gold/10 border border-gold/25 px-4 py-2 text-gold rounded-[2px]">Centralized Swarm Control</span>
              <span className="text-xs bg-gold/10 border border-gold/25 px-4 py-2 text-gold rounded-[2px]">Mil-Grade Radio Encryption</span>
            </div>
          </div>

          <div className="border border-gold/15 p-8 rounded bg-black/40 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <span className="text-gold font-bebas text-2xl tracking-[0.1em] uppercase block mb-4">Core Components</span>
            <ul className="space-y-4 font-sans text-[0.88rem] text-text-muted">
              <li>
                <strong className="text-gold block mb-1">01. The Drone Swarm Hardware</strong>
                Custom carbon-fiber quadcopters lightweight enough to maximize flight time and equipped with ultra-bright LEDs.
              </li>
              <li>
                <strong className="text-gold block mb-1">02. Ground Control Software</strong>
                Central control software calculating trajectories, coordinate streams, and battery safety return limits.
              </li>
              <li>
                <strong className="text-gold block mb-1">03. 3D Flight Choreography</strong>
                Artistic design mapped out in 3D animation suites (like Blender or Maya) and translated into exact flight paths.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Drones vs Fireworks */}
      <section className="py-20 border-t border-gold/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Sustainability &amp; Safety
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text">
              Drones vs. Traditional <em className="text-gold italic">Fireworks</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300 font-sans">
              <span className="font-bebas text-gold text-2xl tracking-[0.05em] block mb-4">100% Eco-Friendly</span>
              <p className="text-[0.88rem] text-text-muted leading-relaxed">
                No chemical smoke, no carbon emissions, and zero hazardous fallout debris. A perfect, modern alternative for environmental compliance.
              </p>
            </div>

            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300 font-sans">
              <span className="font-bebas text-gold text-2xl tracking-[0.05em] block mb-4">Custom Branding &amp; Shapes</span>
              <p className="text-[0.88rem] text-text-muted leading-relaxed">
                Unlike fireworks, drone swarms can form precise logos, couple initials, VVIP brand portraits, and storytelling animations in the sky.
              </p>
            </div>

            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300 font-sans">
              <span className="font-bebas text-gold text-2xl tracking-[0.05em] block mb-4">Quiet &amp; Animal-Safe</span>
              <p className="text-[0.88rem] text-text-muted leading-relaxed">
                Ideal for pet-friendly venues, premium residential resorts, wildlife sanctuaries, and historical structures prone to sound damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-20 max-w-[900px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
            Guide FAQs
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text">
            Drone Show Technology <em className="text-gold italic">FAQs</em>
          </h2>
        </div>

        <div className="space-y-4 font-sans">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-gold/10 rounded overflow-hidden bg-white/[0.005] transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-5 px-6 flex justify-between items-center text-text hover:text-gold transition-colors duration-200"
                >
                  <span className="font-medium text-[0.95rem]">{faq.question}</span>
                  <span className="text-gold text-xl font-light">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[250px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[0.88rem] text-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-dark-2/20 border-t border-gold/10 font-sans">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="font-cormorant text-4xl text-text font-light mb-6">
            Ready to Plan Your Sky Canvas?
          </h3>
          <p className="text-[0.88rem] text-text-muted leading-relaxed mb-10">
            Let FLYBIT Dynamics design an unforgettable drone show experience. Request a free estimate and custom animation storyboard.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => openModal('Request Show Proposal', 'Submit details for a custom drone show choreography.')}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 text-[0.75rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
            >
              Get Free Estimate
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
