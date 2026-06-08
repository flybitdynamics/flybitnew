'use client';

import React from 'react';
import FadeUp from './FadeUp';

interface InsightsProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function Insights({ onOpenModal }: InsightsProps) {
  const articles = [
    {
      featured: true,
      tag: 'Deep Dive · 12 min read',
      title: 'How Drone Shows Are Redefining the Indian Wedding Industry',
      meta: 'March 15, 2025',
      modalTitle: 'How Drone Shows Are Redefining Indian Weddings',
      modalDesc: 'The Indian wedding industry is seeing a revolution in entertainment. Drone light shows have replaced fireworks as the most sought-after grand finale — with zero pollution and ten times the impact. Read the full analysis.',
      arrowText: 'Read Article →',
    },
    {
      featured: false,
      tag: 'Guide · 6 min read',
      title: '5 Things Every Event Planner Should Know Before Booking a Drone Show',
      meta: 'February 3, 2025',
      modalTitle: '5 Things to Know Before Booking a Drone Show',
      modalDesc: "Venue requirements, DGCA timelines, drone count minimums, and weather contingency — here's what every event planner should know before signing a drone show contract.",
      arrowText: 'Read →',
    },
    {
      featured: false,
      tag: 'Comparison · 8 min read',
      title: 'Drone Shows vs Fireworks: The Cost and Impact Breakdown',
      meta: 'January 19, 2025',
      modalTitle: 'Drone Shows vs Fireworks: The Numbers',
      modalDesc: 'We break down the cost, environmental impact, safety record, and audience experience of drone shows vs traditional fireworks — and the results may surprise you.',
      arrowText: 'Read →',
    },
  ];

  return (
    <section
      id="blog"
      className="bg-dark-2 px-6 md:px-20 py-28 select-none"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 font-sans">
        <div>
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
            Insights
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-4 md:mb-0">
            We Write About <em className="text-gold italic">What We Love</em>
          </h2>
        </div>
        <button
          onClick={() =>
            onOpenModal(
              'All Articles',
              'Browse our full library of guides, case studies, and insights about drone light shows in India.'
            )
          }
          className="border border-text/18 hover:border-gold text-text hover:text-gold font-light px-8 py-3 text-[0.72rem] tracking-[0.18em] uppercase rounded-[2px] cursor-pointer md:cursor-none transition-all duration-200"
        >
          All Articles →
        </button>
      </div>

      <div className="blog-grid grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-[2px] bg-border mt-16 font-sans">
        {articles.map((art, idx) => (
          <FadeUp
            key={idx}
            delay={idx * 80}
            onClick={() => onOpenModal(art.modalTitle, art.modalDesc)}
            className={`blog-card bg-dark p-10 cursor-pointer md:cursor-none relative overflow-hidden transition-colors duration-300 hover:bg-dark-3 group border-none ${
              art.featured ? 'lg:row-span-2 flex flex-col justify-end min-h-[300px]' : ''
            }`}
          >
            {/* Top-right decorative background gradient glow */}
            <div className="blog-deco absolute top-0 right-0 w-[80px] h-[80px] bg-radial-top-rightpointer-events-none select-none" />

            <div className={`${art.featured ? 'mt-auto' : ''}`}>
              <div className="blog-tag text-[0.58rem] tracking-[0.3em] uppercase text-gold mb-3">
                {art.tag}
              </div>
              <div
                className={`blog-title font-cormorant text-text mb-4 leading-tight ${
                  art.featured ? 'text-3xl md:text-[1.9rem] font-light mb-6' : 'text-[1.3rem]'
                }`}
              >
                {art.title}
              </div>
              <div className="blog-meta text-[0.68rem] text-text-dim tracking-[0.08em]">
                {art.meta}
              </div>
              <div className="blog-arrow inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.15em] uppercase text-gold-dim mt-5 transition-all duration-300 group-hover:gap-3 group-hover:text-gold">
                {art.arrowText}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
