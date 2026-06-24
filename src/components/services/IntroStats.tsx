'use client';
import React from 'react';

export default function IntroStats() {
  return (
    <section id="intro" className="bg-dark py-16 px-6 md:px-20 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Column Description */}
        <div className="fade-up">
          <div className="text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
            Our Capabilities
          </div>
          
          <h2 className="font-cormorant text-[clamp(2.4rem,5vw,4.2rem)] font-light leading-[1.1] text-text mb-6">
            Built to Illuminate <span className="text-gold italic">Any Occasion</span>
          </h2>
          
          <p className="text-[0.9rem] text-text-muted leading-[1.95] mb-6 font-sans">
            FLYBIT delivers bespoke aerial experiences across 8 distinct categories — from sacred spiritual gatherings to high-energy sports spectacles. Every show is choreographed in-house, executed with military precision, and designed to leave your audience speechless.
          </p>
          
          <p className="text-[0.9rem] text-text-muted leading-[1.95] font-sans">
            Our fleet of 250+ GPS-synchronized drones can paint any image, tell any story, and celebrate any milestone — 150 metres above the earth.
          </p>
        </div>

        {/* Right Column Stats Grid */}
        <div className="intro-stats grid grid-cols-2 border border-border/80 rounded-[3px] overflow-hidden fade-up">
          
          {/* Stat 1 */}
          <div className="p-8 border-r border-b border-border/30 hover:bg-white/5 transition-colors duration-300">
            <div className="font-bebas text-[2.8rem] text-gold leading-none tracking-[0.04em]">
              250+
            </div>
            <div className="text-[0.68rem] tracking-[0.18em] uppercase text-text-muted mt-2">
              Drones in Fleet
            </div>
          </div>

          {/* Stat 2 */}
          {/* <div className="p-8 border-b border-border/30 hover:bg-white/5 transition-colors duration-300">
            <div className="font-bebas text-[2.8rem] text-gold leading-none tracking-[0.04em]">
              150+
            </div>
            <div className="text-[0.68rem] tracking-[0.18em] uppercase text-text-muted mt-2">
              Shows Delivered
            </div>
          </div> */}

          {/* Stat 3 */}
          <div className="p-8 border-r border-border/30 hover:bg-white/5 transition-colors duration-300">
            <div className="font-bebas text-[2.8rem] text-gold leading-none tracking-[0.04em]">
              8
            </div>
            <div className="text-[0.68rem] tracking-[0.18em] uppercase text-text-muted mt-2">
              Service Categories
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-8 hover:bg-white/5 transition-colors duration-300">
            <div className="font-bebas text-[2.8rem] text-gold leading-none tracking-[0.04em]">
              100%
            </div>
            <div className="text-[0.68rem] tracking-[0.18em] uppercase text-text-muted mt-2">
              DGCA Certified
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
