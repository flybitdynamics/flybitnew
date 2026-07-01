'use client';

import React, { useState, useEffect } from 'react';
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
    question: "What is a drone light show?",
    answer: "A drone light show is an aerial entertainment spectacle where a swarm of synchronized, light-emitting drones fly in coordination to form complex 2D and 3D shapes, logos, words, and animations in the night sky. This high-tech light display is controlled by specialized software and a ground control station."
  },
  {
    question: "What is the average drone show cost in India?",
    answer: "For anyone interested in the drone light show cost in india or the general drone show pricing india rates, the price starts from ₹4 Lakhs onwards. The final drone light show cost or drone show price depends on the show complexity, location, and regulatory permissions."
  },
  {
    question: "Are drone shows cheaper than fireworks?",
    answer: "While the initial cost of a drone light show can be higher than a standard display of traditional fireworks, drone shows offer massive benefits. They are eco-friendly (zero emission and noise pollution), highly customizable (can spell names, show logos, and display specific shapes), safer, and can be repeated or customized for multiple days, making them highly cost-effective for premium branding."
  },
  {
    question: "Where can I find a drone light show near me in India?",
    answer: "FLYBIT Dynamics operates pan-India, delivering custom drone light shows near you across key cities including Ahmedabad, Jaipur, Udaipur, Delhi NCR, and Mumbai. We coordinate all local site planning, logistics, and permissions to bring the show directly to your event venue."
  },
  {
    question: "What permissions are required to host a drone show in India?",
    answer: "Conducting a drone light show in India requires strictly following DGCA guidelines. This includes securing a No Permission, No Takeoff (NPNT) clearance, local police NOC, air traffic control (ATC) approvals, and ensuring the flight is operated by a DGCA-licensed pilot. FLYBIT Dynamics handles all legal and regulatory permissions end-to-end."
  }
];

export default function PricingPage() {
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

  // Inject FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-black text-text selection:bg-gold selection:text-black">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Navigation Header */}
      <Navbar onOpenModal={openModal} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
        {/* Grid and Radial Glow Background */}
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
            Pricing &amp; Packages
            <span className="w-6 h-[1px] bg-gold-dim" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            How Much Does a Drone Show <br className="hidden md:inline" />
            <em className="text-gold italic">Cost in India?</em>
          </h1>
          <p className="text-[0.95rem] text-text-muted max-w-[650px] mx-auto leading-[1.8] font-sans">
            If you are wondering about the drone show cost or the price of drone show services in India, we offer transparent options. From calculating the drone light show price for a private sangeet to determining the total drone show cost in india for large-scale public campaigns, our customized aerial displays are designed to fit your budget.
          </p>
        </div>
      </section>



      {/* Factors Affecting Cost Section */}
      <section className="py-20 bg-dark-2/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Cost Breakdown
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text">
              What Drives Drone Show <em className="text-gold italic">Pricing?</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300">
              <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-4">01. Drone Count</span>
              <p className="text-[0.88rem] text-text-muted leading-relaxed font-sans">
                The primary cost driver. A higher count of drones allows for richer details, high-density 3D models, and larger visual canvas visibility.
              </p>
            </div>

            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300">
              <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-4">02. Animation &amp; Script</span>
              <p className="text-[0.88rem] text-text-muted leading-relaxed font-sans">
                Custom storyboards require extensive design testing. Reusing stock formations is more affordable than developing a completely new 3D narrative.
              </p>
            </div>

            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300">
              <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-4">03. Site &amp; Permissions</span>
              <p className="text-[0.88rem] text-text-muted leading-relaxed font-sans">
                Sourcing local DGCA permissions, local airspace coordination, and flight setup varies by city, with strict requirements in heavy airspace.
              </p>
            </div>

            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300">
              <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-4">04. Logistics &amp; Travel</span>
              <p className="text-[0.88rem] text-text-muted leading-relaxed font-sans">
                Transporting highly sensitive technical hardware, drone swarms, batteries, and the ground crew safely via road/air to the event location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-20 max-w-[900px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
            Got Questions?
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text">
            Frequently Asked <em className="text-gold italic">Questions</em>
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

      {/* Shared Footer */}
      <Footer onOpenModal={openModal} />

      {/* Booking Form Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        description={modalDesc}
      />
    </main>
  );
}
