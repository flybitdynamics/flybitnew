'use client';
import React from 'react';

interface SafetyFirstProps {
  onOpenModal: (title: string, description: string) => void;
}

const SAFETY_ITEMS = [
  { label: 'Redundant flight systems', badge: 'Hardware' },
  { label: 'Real-time weather monitoring', badge: 'Environmental' },
  { label: 'Pilot override controls', badge: 'Operational' },
  { label: 'Automatic return-to-home', badge: 'Software' },
  { label: 'Emergency landing zones', badge: 'Protocol' },
  { label: 'Software-based hard geofencing', badge: 'Software' }
];

export default function SafetyFirst({ onOpenModal }: SafetyFirstProps) {
  return (
    <section id="safety" className="bg-black py-16 px-6 md:px-20 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column Information & List */}
        <div className="fade-up">
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-4">
            Safety First
          </div>
          
          <h2 className="sec-title font-cormorant text-[clamp(2.4rem,5vw,4.2rem)] font-light text-text leading-[1.08] mb-6">
            Built for <span className="text-gold italic">Zero Compromise</span>
          </h2>
          
          <p className="sec-body text-[0.9rem] text-text-muted leading-[1.95] mb-6 font-sans">
            Our comprehensive safety systems ensure every show is executed with the highest standards of security and reliability. Multiple redundancies and fail-safes protect both audience and equipment — always.
          </p>

          {/* List Wrapper */}
          <div className="safety-grid-list flex flex-col border border-border/60 rounded-[3px] overflow-hidden">
            {SAFETY_ITEMS.map((item, idx) => (
              <div 
                key={idx}
                className="safety-item p-5 border-b border-border/20 last:border-b-0 flex items-center gap-4 hover:bg-white/[0.015] transition-colors duration-300 bg-dark"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                <span className="text-[0.8rem] text-text-muted font-sans font-medium">{item.label}</span>
                <span className="ml-auto text-[0.58rem] tracking-[0.18em] uppercase text-gold-dim border border-gold/15 px-2.5 py-1 rounded-[2px] font-sans">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => onOpenModal('Safety Consultation', 'Learn more about our safety protocols and how we ensure every show is executed without incident.')}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 text-[0.72rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 block cursor-none border-none"
            >
              Learn More About Safety
            </button>
          </div>
        </div>

        {/* Right Column SVG Drone Rotor Animation */}
        <div className="flex justify-center">
          <div className="relative w-[340px] h-[380px] bg-[#0d0d0d] border border-border rounded-[3px] flex items-center justify-center overflow-hidden w-full max-w-[420px]">
            {/* Corners */}
            <div className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t-[1.5px] border-l-[1.5px] border-gold/30" />
            <div className="absolute top-[-1px] right-[-1px] w-4 h-4 border-t-[1.5px] border-r-[1.5px] border-gold/30" />
            <div className="absolute bottom-[-1px] left-[-1px] w-4 h-4 border-b-[1.5px] border-l-[1.5px] border-gold/30" />
            <div className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b-[1.5px] border-r-[1.5px] border-gold/30" />
            
            <svg width="340" height="380" viewBox="0 0 340 380">
              <g fill="none">
                {/* Safety Orbits */}
                <circle cx="170" cy="190" r="150" stroke="rgba(201,168,76,0.05)" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="170" cy="190" r="110" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5" />
                <circle cx="170" cy="190" r="70" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" strokeDasharray="2 6" />
                
                {/* Swarm hub */}
                <rect x="150" y="170" width="40" height="40" rx="4" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.25)" strokeWidth="1" />
                <circle cx="170" cy="190" r="8" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8" />
                <circle cx="170" cy="190" r="3" fill="var(--color-gold)">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
                
                {/* Structural Arms */}
                <line x1="150" y1="170" x2="110" y2="130" stroke="rgba(201,168,76,0.2)" strokeWidth="1.5" />
                <line x1="190" y1="170" x2="230" y2="130" stroke="rgba(201,168,76,0.2)" strokeWidth="1.5" />
                <line x1="150" y1="210" x2="110" y2="250" stroke="rgba(201,168,76,0.2)" strokeWidth="1.5" />
                <line x1="190" y1="210" x2="230" y2="250" stroke="rgba(201,168,76,0.2)" strokeWidth="1.5" />
                
                {/* Rotor cages */}
                <circle cx="100" cy="120" r="28" stroke="rgba(201,168,76,0.15)" strokeWidth="1" fill="rgba(201,168,76,0.02)" />
                <circle cx="240" cy="120" r="28" stroke="rgba(201,168,76,0.15)" strokeWidth="1" fill="rgba(201,168,76,0.02)" />
                <circle cx="100" cy="260" r="28" stroke="rgba(201,168,76,0.15)" strokeWidth="1" fill="rgba(201,168,76,0.02)" />
                <circle cx="240" cy="260" r="28" stroke="rgba(201,168,76,0.15)" strokeWidth="1" fill="rgba(201,168,76,0.02)" />
                
                {/* Continuous ROTATING spins utilizing SVG transformations */}
                <line x1="78" y1="120" x2="122" y2="120" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 120" to="360 100 120" dur="0.4s" repeatCount="indefinite" />
                </line>
                <line x1="218" y1="120" x2="262" y2="120" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5">
                  <animateTransform attributeName="transform" type="rotate" from="360 240 120" to="0 240 120" dur="0.35s" repeatCount="indefinite" />
                </line>
                <line x1="78" y1="260" x2="122" y2="260" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5">
                  <animateTransform attributeName="transform" type="rotate" from="360 100 260" to="0 100 260" dur="0.45s" repeatCount="indefinite" />
                </line>
                <line x1="218" y1="260" x2="262" y2="260" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 240 260" to="360 240 260" dur="0.38s" repeatCount="indefinite" />
                </line>
                
                {/* Signal telemetry waves */}
                <circle cx="170" cy="190" r="80" stroke="rgba(201,168,76,0.12)" strokeWidth="1" fill="none">
                  <animate attributeName="r" values="20;90" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0" dur="2.5s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              <text 
                x="170" 
                y="360" 
                textAnchor="middle" 
                fill="rgba(201,168,76,0.2)" 
                className="font-bebas text-[8px] tracking-[4px]"
              >
                MULTI-LAYER SAFETY PROTOCOLS
              </text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
