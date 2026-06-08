'use client';

import React from 'react';
import FadeUp from './FadeUp';

interface CTAProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section
      id="cta"
      className="bg-dark-3 text-center py-28 px-6 md:px-20 relative overflow-hidden select-none"
    >
      {/* Background radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201, 168, 76, 0.07) 0%, transparent 65%)',
        }}
      />

      <div className="cta-inner relative z-10 font-sans">
        <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
          Ready to Book?
        </div>
        <h2 className="font-bebas text-5xl md:text-7xl lg:text-[7rem] leading-[0.88] tracking-[0.04em] mb-6">
          LET'S LIGHT UP
          <br />
          YOUR <span className="text-gold">SKY</span>
        </h2>

        {/* Small gold divider */}
        <div className="w-[70px] h-[1px] bg-gold-dim mx-auto my-8" />

        <p className="text-[0.9rem] text-text-muted leading-relaxed max-w-[400px] mx-auto mb-12">
          Every great show begins with a conversation. Tell us about your event and we'll craft something extraordinary.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() =>
              onOpenModal(
                'Book Your Show',
                "Tell us about your event and we'll design the perfect aerial spectacle — from 200 to 3,000 drones, anywhere in India."
              )
            }
            className="bg-gold hover:bg-gold-light text-black font-medium px-11 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer md:cursor-none hover:-translate-y-1 font-sans"
          >
            Book a Show
          </button>
          <a
            href="tel:+919999999999"
            className="border border-text/18 hover:border-gold text-text hover:text-gold font-light px-11 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 md:cursor-none hover:-translate-y-1 inline-block"
          >
            Call Us Now
          </a>
        </div>

        <p className="text-[0.68rem] text-text-dim tracking-[0.12em] mt-10">
          Available Pan-India · info@flybitdynamics.com · +91 99999 99999
        </p>
      </div>
    </section>
  );
}
