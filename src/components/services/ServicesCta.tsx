'use client';
import React from 'react';

interface ServicesCtaProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function ServicesCta({ onOpenModal }: ServicesCtaProps) {
  return (
    <section id="cta" className="relative bg-dark py-16 px-6 md:px-20 text-center overflow-hidden border-t border-border/40">
      
      {/* Dynamic Background Radiance */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)'
        }}
      />

      <div className="relative z-10 cta-inner max-w-[800px] mx-auto">
        <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-6">
          Ready to Book?
        </div>
        
        <h2 className="cta-title font-bebas text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-[0.04em] text-text mb-8">
          LET'S LIGHT UP<br />
          YOUR <span className="text-gold">SKY</span>
        </h2>
        
        <div className="w-[70px] h-[1px] bg-gold-dim mx-auto mb-8" />
        
        <p className="cta-sub text-[0.9rem] text-text-muted leading-[1.9] max-w-[420px] mx-auto mb-12 font-sans">
          Every extraordinary show begins with a conversation. Tell us about your event and we'll craft something the world has never seen.
        </p>
        
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <button
            onClick={() => onOpenModal('Book Your Show', "Tell us about your event and we'll design the perfect aerial spectacle — from 200 to 3,000 drones, anywhere in India.")}
            className="bg-gold hover:bg-gold-light text-black font-semibold px-10 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-300 hover:-translate-y-1 block cursor-none border-none"
          >
            Book a Show
          </button>
          
          <a
            href="tel:+919979850863"
            className="bg-transparent border border-border hover:border-gold hover:text-gold text-text font-light px-10 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-300 hover:-translate-y-1 inline-block cursor-none"
          >
            Call Us Now
          </a>
        </div>
        
        <p className="cta-note mt-10 text-[0.68rem] text-text-dim tracking-[0.12em] font-sans">
          Available Pan-India · info@flybitdynamics.com · +91 99798 50863
        </p>
      </div>

    </section>
  );
}
