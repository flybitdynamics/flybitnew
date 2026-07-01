'use client';
import React from 'react';

const ADVANTAGES = [
  {
    title: 'Expert Team',
    desc: 'Our experienced pilots, engineers, and creative directors ensure every show is executed flawlessly — from first sketch to final flight.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-gold">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: '100% Customizable',
    desc: 'Every show is tailored to your specific needs, preferences, and creative vision. No two shows are ever the same — no templates, no shortcuts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-gold">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  },
  {
    title: 'Latest Technology',
    desc: 'Cutting-edge drones with RTK GPS precision, RGB LEDs, and encrypted ground-to-drone communication. Millimeter-accurate every time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-gold">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  },
  {
    title: 'DGCA Certified & Legal',
    desc: 'Every show is 100% compliant. We handle all permissions, airspace clearances, and safety protocols — so you focus entirely on your event.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-gold">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    title: 'Eco-Friendly',
    desc: 'Zero smoke, no chemical residue, minimal noise. Drone shows are the sustainable, animal-friendly alternative to traditional fireworks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-gold">
        <path d="M12 22V12m0 0l-3-3m3 3l3-3"/><circle cx="12" cy="5" r="3"/><path d="M5 12a7 7 0 0 0 14 0"/>
      </svg>
    )
  },
  {
    title: 'Pan-India Operations',
    desc: 'Bases in Mumbai, Delhi, Bangalore, and Ahmedabad. From coordinating a drone show gujarat display to executing drone shows in jaipur, drone shows in ahmedabad, or drone shows in gujarat, we operate seamlessly pan-India.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-gold">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  }
];

export default function ServicesWhyChooseUs() {
  return (
    <section id="why" className="bg-black px-6 md:px-20 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-4">
            Why Choose FLYBIT
          </div>
          <h2 className="sec-title font-cormorant text-[clamp(2.4rem,5vw,4.2rem)] font-light text-text leading-[1.08]">
            The <span className="text-gold italic">FLYBIT</span> Advantage
          </h2>
        </div>

        {/* Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border/20 rounded-[3px] overflow-hidden">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.title}
              className="why-item bg-dark p-10 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02]"
            >
              {/* Highlight Slide line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              {/* Icon Container */}
              <div className="why-icon w-11 h-11 border border-gold/20 rounded-[2px] flex items-center justify-center mb-6 group-hover:bg-gold/5 group-hover:border-gold/50 transition-all duration-300">
                {adv.icon}
              </div>
              
              <h3 className="font-cormorant text-[1.4rem] text-text mb-3">
                {adv.title}
              </h3>
              
              <p className="text-[0.8rem] text-text-muted leading-[1.9] font-sans">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
