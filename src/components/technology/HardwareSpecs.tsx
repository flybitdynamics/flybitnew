'use client';
import React from 'react';

export default function HardwareSpecs() {
  return (
    <section id="hardware" className="bg-black py-16 px-6 md:px-20 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-10">
          <div className="fade-up">
            <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-4">
              Hardware Specifications
            </div>
            <h2 className="sec-title font-cormorant text-[clamp(2.4rem,5vw,4.2rem)] font-light text-text leading-[1.08]">
              Military-Grade <span className="text-gold italic">Components</span>
            </h2>
          </div>
          <p className="sec-body text-[0.9rem] text-text-muted leading-[1.95] pb-2 fade-up font-sans">
            Every drone in our fleet is built with components engineered for precision, reliability, and spectacular performance — tested to survive thousands of show cycles without compromise.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] bg-border/20 rounded-[3px] overflow-hidden">
          
          {/* Card 1: Flight Controller (Featured) */}
          <div className="hw-card bg-gold/[0.03] p-10 relative group overflow-hidden transition-all duration-300 hover:bg-gold/[0.05] border border-gold/15 rounded-[2px] fade-up">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-bebas text-[5.5rem] text-gold/5 leading-none absolute top-4 right-8 select-none">
              01
            </div>
            
            <div className="hw-icon w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-gold fill-none stroke-[1.4]">
                <rect x="5" y="5" width="14" height="14" rx="2" />
                <path d="M9 9h6v6H9z" />
                <path d="M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2" />
              </svg>
            </div>
            
            <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2 font-sans font-medium">Component 01</div>
            <h3 className="font-cormorant text-[1.7rem] text-text mb-4">Advanced Flight Controller</h3>
            <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans">
              Custom-built flight controllers with real-time processing capabilities, giving each drone independent decision-making power while remaining synchronized to the swarm.
            </p>
            
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> 32-bit ARM processor</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> IMU stabilization — 6-axis</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Sub-millisecond response time</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Redundant failsafe circuits</div>
            </div>
          </div>

          {/* Card 2: GPS & RTK */}
          <div className="hw-card bg-dark p-10 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.015] fade-up">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-bebas text-[5.5rem] text-gold/5 leading-none absolute top-4 right-8 select-none">
              02
            </div>
            
            <div className="hw-icon w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-gold fill-none stroke-[1.4]">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
              </svg>
            </div>
            
            <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2 font-sans font-medium">Component 02</div>
            <h3 className="font-cormorant text-[1.7rem] text-text mb-4">GPS & RTK Precision</h3>
            <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans">
              Centimeter-level accuracy ensures every drone holds its exact position in any formation — regardless of weather, wind, or interference. Perfect aerial choreography, every time.
            </p>
            
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> RTK GPS correction system</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> ±1–2cm positioning accuracy</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Real-time tracking & correction</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Multi-constellation support</div>
            </div>
          </div>

          {/* Card 3: Mesh Communication */}
          <div className="hw-card bg-dark p-10 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.015] fade-up">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-bebas text-[5.5rem] text-gold/5 leading-none absolute top-4 right-8 select-none">
              03
            </div>
            
            <div className="hw-icon w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-gold fill-none stroke-[1.4]">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                <circle cx="12" cy="20" r="1"/>
              </svg>
            </div>
            
            <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2 font-sans font-medium">Component 03</div>
            <h3 className="font-cormorant text-[1.7rem] text-text mb-4">Mesh Communication</h3>
            <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans">
              A robust peer-to-peer communication network ensures every drone receives its commands — even if ground-to-drone signals are temporarily disrupted by interference or terrain.
            </p>
            
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> 2.4GHz dual-band radio</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Redundant communication paths</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Up to 500m range</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Encrypted swarm protocol</div>
            </div>
          </div>

          {/* Card 4: High-Capacity Batteries */}
          <div className="hw-card bg-dark p-10 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.015] fade-up">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-bebas text-[5.5rem] text-gold/5 leading-none absolute top-4 right-8 select-none">
              04
            </div>
            
            <div className="hw-icon w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-gold fill-none stroke-[1.4]">
                <rect x="2" y="7" width="20" height="15" rx="2" />
                <polyline points="17 2 12 7 7 2" />
                <line x1="12" y1="12" x2="12" y2="17" />
                <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />
              </svg>
            </div>
            
            <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2 font-sans font-medium">Component 04</div>
            <h3 className="font-cormorant text-[1.7rem] text-text mb-4">High-Capacity Batteries</h3>
            <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans">
              Extended flight time with intelligent power management ensures shows run to completion — with enough reserve for safe emergency landing if conditions demand it.
            </p>
            
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> 15 minutes flight time</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Smart battery monitoring</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Hot-swappable modular design</div>
              <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Low-voltage auto-return</div>
            </div>
          </div>

          {/* Card 5: 16M RGB LED System (Full Width Row) */}
          <div className="hw-card bg-dark p-10 lg:p-14 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.015] lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-up">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-bebas text-[5.5rem] text-gold/5 leading-none absolute top-4 right-8 select-none">
              05
            </div>
            
            <div>
              <div className="hw-icon w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-gold fill-none stroke-[1.4]">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
              </div>
              
              <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2 font-sans font-medium">Component 05</div>
              <h3 className="font-cormorant text-[1.7rem] text-text mb-4">RGB Color LED System</h3>
              <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans max-w-[420px]">
                Each drone carries a high-intensity LED system capable of rendering distinct colors with sub-frame precision — enabling smooth color transitions, complex gradients, and lifelike imagery at altitude.
              </p>
              
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Visible from 2km distance</div>
                <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Frame-synchronised color switching</div>
                <div className="flex items-center gap-3 text-[0.76rem] text-text-muted font-sans"><span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" /> Weather-rated housing</div>
              </div>
            </div>

            {/* Glowing SVG LED Visualizer Panel */}
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[260px] bg-[#1a1917]/50 border border-gold/10 rounded-[3px] flex items-center justify-center overflow-hidden w-full max-w-[340px]">
                {/* Corner details */}
                <div className="absolute top-[-1px] left-[-1px] w-3.5 h-3.5 border-t-[1.5px] border-l-[1.5px] border-gold/30" />
                <div className="absolute top-[-1px] right-[-1px] w-3.5 h-3.5 border-t-[1.5px] border-r-[1.5px] border-gold/30" />
                <div className="absolute bottom-[-1px] left-[-1px] w-3.5 h-3.5 border-b-[1.5px] border-l-[1.5px] border-gold/30" />
                <div className="absolute bottom-[-1px] right-[-1px] w-3.5 h-3.5 border-b-[1.5px] border-r-[1.5px] border-gold/30" />
                
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <defs>
                    <radialGradient id="ledGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#F0D080" stopOpacity="0.9"/>
                      <stop offset="40%" stopColor="#C9A84C" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Glowing halo */}
                  <circle cx="100" cy="100" r="80" fill="url(#ledGrad)"/>
                  
                  <g fill="#C9A84C">
                    <circle cx="100" cy="100" r="5" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/></circle>
                    <circle cx="100" cy="50" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/></circle>
                    <circle cx="140" cy="70" r="2.5"><animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite"/></circle>
                    <circle cx="150" cy="100" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.2s" repeatCount="indefinite"/></circle>
                    <circle cx="140" cy="130" r="2.5"><animate attributeName="opacity" values="0.7;0.1;0.7" dur="1.6s" repeatCount="indefinite"/></circle>
                    <circle cx="100" cy="150" r="3"><animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.4s" repeatCount="indefinite"/></circle>
                    <circle cx="60" cy="130" r="2.5"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.9s" repeatCount="indefinite"/></circle>
                    <circle cx="50" cy="100" r="3"><animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite"/></circle>
                    <circle cx="60" cy="70" r="2.5"><animate attributeName="opacity" values="0.1;0.8;0.1" dur="1.7s" repeatCount="indefinite"/></circle>
                  </g>
                  
                  <circle cx="100" cy="100" r="70" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" fill="none" strokeDasharray="3 5"/>
                  
                  <text 
                    x="100" 
                    y="185" 
                    textAnchor="middle" 
                    fill="rgba(201,168,76,0.25)" 
                    className="font-bebas text-[7px] tracking-[3px]"
                  >
                    16M COLOR SYSTEM
                  </text>
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
