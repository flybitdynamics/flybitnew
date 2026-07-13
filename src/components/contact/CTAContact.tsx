'use client';
import React from 'react';

export default function CTAContact() {
  return (
    <section 
      id="cta" 
      className="bg-[#1a1917]/70 text-center relative overflow-hidden py-16 px-6 md:px-20 border-t border-border/40"
    >
      {/* Radiant background glow */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)'
        }}
      />
      
      <div className="cta-inner relative z-10 max-w-[1440px] mx-auto fade-up">
        <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-6">
          Ready to Create Magic?
        </div>
        
        <h2 className="font-bebas text-[clamp(3rem,8vw,6.5rem)] leading-[0.88] tracking-[0.04em] mb-6 text-text uppercase">
          LET'S MAKE YOUR<br />EVENT <span className="text-gold">UNFORGETTABLE</span>
        </h2>
        
        <div className="w-[70px] h-[1px] bg-gold-dim/40 mx-auto my-8" />
        
        <p className="cta-sub text-text-muted text-[0.9rem] max-w-[420px] mx-auto leading-[1.9] mb-12 font-sans">
          Join hundreds of satisfied clients who have made their events unforgettable with FLYBIT Dynamics. Every extraordinary show begins with a conversation.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact-main"
            className="btn-g bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2.5 cursor-none text-center"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.8]">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Contact Us
          </a>
          
          {/* <a
            href="https://wa.me/919979850863"
            target="_blank"
            rel="noreferrer"
            className="btn-o bg-transparent border border-border hover:border-gold hover:text-gold text-text font-light px-8 py-3.5 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2.5 cursor-none text-center"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.8]">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            WhatsApp Us
          </a> */}
        </div>

        <p className="cta-note mt-10 text-[0.68rem] text-text-muted tracking-[0.12em] font-sans">
          Available Pan-India · info@flybitdynamics.com · Response within 24 hours
        </p>
      </div>
    </section>
  );
}
