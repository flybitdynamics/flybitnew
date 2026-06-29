'use client';

import React from 'react';
import FadeUp from './FadeUp';

interface WhyChooseUsProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function WhyChooseUs({ onOpenModal }: WhyChooseUsProps) {
  const advantages = [
    {
      title: 'Made-in-India Fleet',
      desc: 'Own drones, faster support, centimetre-level GPS precision. 100% in-house show design',
      modalTitle: 'Made-in-India Fleet',
      modalDesc: 'We design, build, and maintain our own drone fleet inside India. This translates to absolute supply chain independence, instant tech support, and proprietary centimetre-level RTK GPS precision for hyper-accurate formations.',
      icon: (
        <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: 'DGCA Compliant',
      desc: 'All permits handled by us. Client never deals with govt paperwork.',
      modalTitle: 'DGCA Compliant & Insured',
      modalDesc: 'Safety and legality are absolute values. We secure all necessary airspace permissions, police NOCs, local government approvals, and full aviation insurance so you have complete peace of mind.',
      icon: (
        <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      ),
    },
    {
      title: 'End-to-End Managed',
      desc: 'Concept → design → permissions → live show. Client does nothing.',
      modalTitle: 'End-to-End Managed Experience',
      modalDesc: 'From the initial consultation, storyboard conceptualization, script creation, regulatory clearances, setup, rehearsal, to the actual live performance, FLYBIT handles it all. You just sit back and enjoy.',
      icon: (
        <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l-1.5-1.5M19.5 12l1.5-1.5M4 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4 12l-1.5 1.5M4 12l1.5 1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Multi-Day Event Integration',
      desc: 'Cover Mehndi, Sangeet, Baraat, and Reception in one booking.',
      modalTitle: 'Multi-Day Event Integration',
      modalDesc: 'We specialize in grand multiday celebrations. Cover your Sangeet, Baraat entrance, Mehndi, and grand Reception with a single continuous booking and unique choreographies per night.',
      icon: (
        <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.98 14.98 0 00-2.12 6.16m12.12-12.12L9.63 8.41m12.12-12.12l-6.16 6.16M9.63 8.41A14.98 14.98 0 003.47 20.53a14.98 14.98 0 006.16-2.12M18.75 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: '100 to 250+ Drones',
      desc: '100 to 250+ drones per show, 10–12 min duration.',
      modalTitle: '100 to 500+ Drones Scale',
      modalDesc: 'From intimate premium private events to grand regional celebrations, we deploy fleets ranging from 100 up to 500+ highly precise storytelling drones, operating a spectacular 10 to 12 minutes of active animation.',
      icon: (
        <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Eco-Friendly Alternative',
      desc: 'Eco-friendly, zero noise, zero pollution — the green alternative to fireworks.',
      modalTitle: 'Eco-Friendly Spectacles',
      modalDesc: 'Our high-performance drone light shows are completely pollution-free, emission-free, and noiseless, offering a premium green alternative to traditional pyrotechnics that respects the environment and neighborhood alike.',
      icon: (
        <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
      ),
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mx', `${x}px`);
    e.currentTarget.style.setProperty('--my', `${y}px`);
  };

  return (
    <section
      id="why"
      className="bg-black px-6 md:px-20 select-none"
    >
      <div className="font-sans text-center mb-10">
        <div className="eyebrow">
          Why Choose Us
        </div>
        <h2 className="sec-title">
          The FLYBIT <em>Advantage</em>
        </h2>
      </div>

      <div className="why-grid grid grid-cols-1 md:grid-cols-3 border border-border mt-16 font-sans">
        {advantages.map((adv, idx) => (
          <FadeUp
            key={idx}
            delay={idx * 80}
            onClick={() => onOpenModal(adv.modalTitle, adv.modalDesc)}
            className={`why-item p-6 sm:p-10 md:p-14 hover:bg-dark-2 transition-colors duration-300 cursor-pointer md:cursor-none relative overflow-hidden group select-none
              ${idx % 3 !== 2 ? 'md:border-r border-border' : 'md:border-r-0'}
              ${idx < 3 ? 'md:border-b border-border' : 'md:border-b-0'}
              ${idx < 5 ? 'border-b border-border' : 'border-b-0 md:border-b-0'}
            `}
          >
            {/* Styled dynamic mouse follow circle glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(ellipse 60% 60% at var(--mx, 50%) var(--my, 50%), rgba(201, 168, 76, 0.04) 0%, transparent 65%)',
              }}
              onMouseMove={handleMouseMove}
            />

            <div className="why-icon mb-6" onMouseMove={handleMouseMove}>
              {adv.icon}
            </div>

            <div className="why-title font-cormorant text-2xl text-text mb-4" onMouseMove={handleMouseMove}>
              {adv.title}
            </div>

            <p className="why-desc text-[0.82rem] text-text-muted leading-relaxed" onMouseMove={handleMouseMove}>
              {adv.desc}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
