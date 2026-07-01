'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';

interface FAQCategory {
  id: string;
  name: string;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const CATEGORIES: FAQCategory[] = [
  { id: 'all', name: 'All Questions' },
  { id: 'tech', name: 'Swarm Technology' },
  { id: 'safety', name: 'Safety & Regulations' },
  { id: 'pricing', name: 'Pricing & Bookings' }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'tech',
    question: "What technology powers the drone light shows?",
    answer: "Our shows use specialized lightweight quadcopters with high-precision RTK GPS receivers, securing centimeter-level accuracy in flight. The swarms are controlled by a single ground station laptop communicating over military-grade encrypted radio coordinates."
  },
  {
    category: 'tech',
    question: "How long does a drone light show last?",
    answer: "Active sky flight time is typically 5 to 10 minutes. This limit is primarily dictated by battery life under wind payload conditions. We design storyboards to keep transitions tight and highly impactful."
  },
  {
    category: 'safety',
    question: "What clearances are required in India?",
    answer: "Hosting a drone light show requires a No Permission No Takeoff (NPNT) authorization via the Digital Sky portal, local ATC permission, and a local police NOC. FLYBIT Dynamics handles all legal approvals end-to-end."
  },
  {
    category: 'safety',
    question: "Are drone shows safer than traditional fireworks?",
    answer: "Yes, drone shows are much safer. They present zero explosion risks, leave no chemical debris, produce zero toxic smoke, and are completely fire-safe. We maintain a strict 100-meter safety zone between launch sites and spectators."
  },
  {
    category: 'pricing',
    question: "How much does a drone show cost in India?",
    answer: "Our customized drone show designs start from ₹4 Lakhs onwards. The exact pricing is determined by creative storyboard details, duration, flight coordinates, and regulatory approvals."
  },
  {
    category: 'pricing',
    question: "How far in advance should we book?",
    answer: "We recommend booking 4 to 6 weeks in advance. This ensures sufficient time to obtain local regulatory NOC approvals and design custom 3D animations for weddings or brand launches."
  }
];

export default function FAQsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const openModal = (title: string, description: string) => {
    setModalTitle(title);
    setModalDesc(description);
    setModalOpen(true);
  };

  const filteredItems = selectedCategory === 'all' 
    ? FAQ_ITEMS 
    : FAQ_ITEMS.filter(item => item.category === selectedCategory);

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

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 text-center">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-6 flex items-center justify-center gap-3 font-sans font-medium">
            <span className="w-6 h-[1px] bg-gold-dim" />
            SUPPORT CENTER
            <span className="w-6 h-[1px] bg-gold-dim" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            Frequently Asked <em className="text-gold italic">Questions</em>
          </h1>
          <p className="text-[0.95rem] text-text-muted max-w-[650px] mx-auto leading-[1.8] font-sans">
            Have questions about fleet sizes, safety approvals, or sangeet choreographies? Browse categories or contact our coordinators.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-dark-2/10 font-sans">
        <div className="max-w-[900px] mx-auto px-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setOpenIndex(null);
                }}
                className={`px-6 py-2.5 text-xs uppercase tracking-wider rounded-[2px] border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold border-gold text-black font-semibold'
                    : 'border-border/30 hover:border-gold/30 text-text-muted hover:text-gold'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          <div className="space-y-4">
            {filteredItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-gold/10 rounded overflow-hidden bg-white/[0.005] transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left py-5 px-6 flex justify-between items-center text-text hover:text-gold transition-colors duration-200"
                  >
                    <span className="font-medium text-[0.95rem]">{item.question}</span>
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
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 border-t border-gold/10 bg-dark-3/10 font-sans">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="font-cormorant text-4xl text-text font-light mb-6">
            Still Have Questions?
          </h3>
          <p className="text-[0.88rem] text-text-muted leading-relaxed mb-10">
            Get in touch with our operations coordinators directly. We are happy to help audit airspace feasibility for your venue.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => openModal('Submit Help Query', 'Tell us what questions you have regarding drone light shows.')}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 text-[0.75rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
            >
              Ask a Question
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
