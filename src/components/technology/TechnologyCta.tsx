'use client';
import React from 'react';

interface TechnologyCtaProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function TechnologyCta({ onOpenModal }: TechnologyCtaProps) {
  return (
    <section 
      id="cta" 
      className="bg-[#1a1917]/70 text-center relative overflow-hidden py-16 px-6 md:px-20 border-t border-border/40"
    >
      {/* Radiant glow */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)'
        }}
      />
      
      <div className="relative z-10 max-w-[1440px] mx-auto cta-inner">
        <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-6">
          Innovation Beyond the Sky
        </div>
        
        <h2 className="font-bebas text-[clamp(3rem,8vw,6.5rem)] leading-[0.88] tracking-[0.04em] mb-6 text-text uppercase">
          READY TO<br />FLY WITH <span className="text-gold">US?</span>
        </h2>
        
        <div className="w-[70px] h-[1px] bg-gold-dim/40 mx-auto my-8" />
        
        <p className="text-text-muted text-[0.9rem] max-w-[420px] mx-auto leading-[1.9] mb-12 font-sans">
          Our R&D team continuously develops new technologies to create even more spectacular and safe drone light shows. Partner with the best.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          {/* <button
            onClick={() => onOpenModal('Technical Partnership', 'Interested in our technology or a technical partnership? Share your details and our team will connect with you.')}
            className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 text-[0.72rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 block cursor-none border-none text-center"
          >
            Technical Partnership
          </button> */}
          
          <button
            onClick={() => onOpenModal('Book a Show', 'Tell us about your event and we\'ll design the perfect aerial spectacle — anywhere in India.')}
            className="bg-transparent border border-border hover:border-gold hover:text-gold text-text font-light px-8 py-3.5 text-[0.72rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 block cursor-none text-center"
          >
            Book a Show
          </button>
        </div>

        <p className="mt-10 text-[0.68rem] text-text-dim tracking-[0.12em] font-sans">
          Available Pan-India · info@flybitdynamics.com 
        </p>
      </div>
    </section>
  );
}
