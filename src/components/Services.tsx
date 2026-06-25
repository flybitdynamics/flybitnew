'use client';

import React from 'react';
import FadeUp from './FadeUp';

interface ServicesProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
  const services = [
    {
      num: '01',
      name: 'Wedding & Celebration Shows',
      desc: 'Make your wedding night unforgettable. Personalized formations, initials in the sky, rose shapes — designed entirely around your love story.',
      modalTitle: 'Wedding Drone Shows',
      modalDesc: 'Create an unforgettable grand finale for your wedding night. Personalized formations — your names, rings, hearts — written in the sky above your guests. Packages from 200–1000+ drones.',
      icon: (
        <svg className="srv-icon w-11 h-11 mb-8 text-gold" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M22 12c-3-6-12-6-12 3 0 6 12 14 12 14s12-8 12-14c0-9-9-9-12-3z" />
        </svg>
      ),
    },
    {
      num: '02',
      name: 'Corporate & Brand Events',
      desc: 'Logo animations, product reveals, branded sky narratives. Turn your next corporate event into a viral moment that defines your brand.',
      modalTitle: 'Corporate & Brand Events',
      modalDesc: 'Launch products, reward teams, and create brand moments that go viral. Our corporate shows are precision-branded aerial experiences for Fortune 500s to startups.',
      icon: (
        <svg className="srv-icon w-11 h-11 mb-8 text-gold" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="8" y="18" width="28" height="18" rx="2" />
          <path d="M16 18V14a6 6 0 0 1 12 0v4" />
          <line x1="22" y1="26" x2="22" y2="30" />
        </svg>
      ),
    },
    {
      num: '03',
      name: 'Festivals & Concerts',
      desc: 'Music-synchronized drone choreography for Diwali, New Year, music festivals, and sport events, designed for massive crowd experiences.',
      modalTitle: 'Festival & Concert Shows',
      modalDesc: 'Add a mind-blowing aerial dimension to any festival. Synced to live music with massive 1000+ drone deployments for crowd-scale spectacles.',
      icon: (
        <svg className="srv-icon w-11 h-11 mb-8 text-gold" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="22" cy="22" r="12" />
          <path d="M22 10V8M22 36v-2M10 22H8M36 22h-2" />
          <path d="M14 14l-1.5-1.5M31.5 31.5L30 30M30 14l1.5-1.5M14 30l-1.5 1.5" />
        </svg>
      ),
    },
    {
      num: '04',
      name: 'Government & National Events',
      desc: 'Trusted by state governments for Republic Day, Independence Day, and summit events. Full regulatory compliance with the highest security protocols.',
      modalTitle: 'Government & National Events',
      modalDesc: 'FLYBIT has delivered Republic Day celebrations, state government shows, and international summits with full VVIP-grade security clearances and flawless execution.',
      icon: (
        <svg className="srv-icon w-11 h-11 mb-8 text-gold" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M22 8L6 20h4v16h24V20h4L22 8z" />
          <rect x="18" y="28" width="8" height="8" />
        </svg>
      ),
    },
    {
      num: '05',
      name: 'Product Launch Spectacles',
      desc: 'Reveal your product under 100s of drones lights in the sky. A show that generates press coverage, social media virality, and audience awe — all in one night.',
      modalTitle: 'Product Launch Spectacles',
      modalDesc: "Your product launch is your brand's first impression. An aerial reveal with 500+ drones creates press-worthy moments that generate media coverage worth 10x your investment.",
      icon: (
        <svg className="srv-icon w-11 h-11 mb-8 text-gold" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M22 8l3 9h9l-7.5 5.5 3 9L22 27l-7.5 4.5 3-9L10 17h9z" />
        </svg>
      ),
    },
    {
      num: '06',
      name: 'Bespoke Custom Formations',
      desc: 'Portraits, brand mascots, animated narratives, 3D spatial formations — our in-house design team brings any idea to life 150 metres above the ground.',
      modalTitle: 'Custom Formations',
      modalDesc: 'Anything you can imagine, we can build in the sky. Custom logos, portraits, animated sequences, brand mascots — our design team turns your vision into a 3D aerial animation.',
      icon: (
        <svg className="srv-icon w-11 h-11 mb-8 text-gold" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M10 34L8 36l2-8 6 6-8 2z" />
          <path d="M12 28l20-20a4 4 0 0 1 5.66 5.66L18 34" />
          <line x1="28" y1="12" x2="32" y2="16" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="bg-black px-3 sm:px-6 md:px-20 select-none"
    >
      <div className="srv-header text-center mb-12 font-sans">
        <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
          What We Do
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-6">
          Aerial Experiences <em className="text-gold italic">Crafted</em> For Every Occasion
        </h2>
        <p className="text-[0.9rem] text-text-muted leading-relaxed max-w-[500px] mx-auto text-center">
          From intimate celebrations to massive national spectacles, every show is a unique expression of your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 font-sans max-w-[1440px] mx-auto">
        {services.map((srv, idx) => (
          <FadeUp
            key={idx}
            delay={(idx % 3) * 80}
            onClick={() => onOpenModal(srv.modalTitle, srv.modalDesc)}
            className="srv-card bg-dark p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 cursor-pointer md:cursor-none hover:bg-dark-3 group border border-border/50 rounded-2xl hover:border-gold/30 hover:-translate-y-1 shadow-2xl"
          >
            {/* Massive backdrop number */}
            <div className="srv-num absolute top-6 right-8 font-bebas text-8xl text-gold/[0.05] leading-none pointer-events-none select-none">
              {srv.num}
            </div>

            {srv.icon}

            <div className="srv-name font-cormorant text-2xl text-text mb-4 leading-tight">
              {srv.name}
            </div>
            <p className="srv-desc text-[0.82rem] text-text-muted leading-relaxed mb-6">
              {srv.desc}
            </p>

            <div className="srv-arrow flex items-center gap-2 mt-8 text-[0.7rem] tracking-[0.15em] uppercase text-gold-dim transition-all duration-300 group-hover:gap-[0.9rem] group-hover:text-gold">
              Explore Service →
            </div>

            {/* Bottom highlight animation */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 transition-transform duration-[450ms] ease-in-out group-hover:scale-x-100" />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
