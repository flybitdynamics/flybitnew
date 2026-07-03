'use client';
import React from 'react';

export default function HeroContact() {
  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 px-6 md:px-20 overflow-hidden bg-black min-h-[420px] flex items-center"
    >
      {/* Background glow and coordinate grids */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 55% 50%, rgba(201,168,76,0.055) 0%, transparent 65%)'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-40" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
          maskImage: 'radial-gradient(ellipse at 70% 50%, black 10%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, black 10%, transparent 60%)'
        }}
      />

      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">
        
        {/* Left Info Column */}
        <div className="hero-inner fade-up max-w-[680px]">
          <div className="hero-eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-6 flex items-center gap-5">
            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-gold-dim" />
            Get In Touch
          </div>
          
          <h1 className="hero-title font-bebas text-[clamp(3.5rem,8vw,6.8rem)] leading-[0.88] tracking-[0.03em] mb-8 uppercase text-text">
            LET'S LIGHT<br />UP YOUR <span className="text-gold">SKY</span><br />TOGETHER.
          </h1>
          
          <p className="hero-sub text-[0.95rem] text-white/90 leading-[1.9] max-w-[480px] font-sans">
            Ready to create an unforgettable experience? Tell us your vision and we'll make it happen in the night sky. As the premier drone show company in India, we design custom drone shows in Jaipur, Udaipur, Delhi, Ahmedabad, Gujarat, Rajasthan, and nationwide.
          </p>
        </div>

        {/* Right Animated SVG Column */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[360px] h-[360px] pointer-events-none">
            <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
              {/* Outer glowing grid circles */}
              <circle cx="180" cy="180" r="160" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
              <circle cx="180" cy="180" r="120" stroke="rgba(201,168,76,0.14)" strokeWidth="0.5" strokeDasharray="6 8" />
              <circle cx="180" cy="180" r="80" stroke="rgba(201,168,76,0.18)" strokeWidth="0.5" strokeDasharray="3 9" />

              {/* Glowing radar scan line (rotating) */}
              <line x1="180" y1="180" x2="280" y2="100" stroke="rgba(201,168,76,0.4)" strokeWidth="1">
                <animateTransform attributeName="transform" type="rotate" from="0 180 180" to="360 180 180" dur="8s" repeatCount="indefinite" />
              </line>

              {/* Swarm lines forming a glowing 3D envelope */}
              <path d="M70 120h220v120H70z" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" />
              <path d="M70 120l110 75 110-75" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5" />
              <path d="M70 240l80-60M290 240l-80-60" stroke="rgba(201,168,76,0.35)" strokeWidth="1.2" />

              {/* Drone swarm coordinates highlighting the envelope shape */}
              <g fill="rgba(201,168,76,0.95)">
                {/* Main corners */}
                <circle cx="70" cy="120" r="4.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="290" cy="120" r="4.5">
                  <animate attributeName="opacity" values="1;0.4;1" dur="2.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="70" cy="240" r="4.5">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="290" cy="240" r="4.5">
                  <animate attributeName="opacity" values="1;0.5;1" dur="2.1s" repeatCount="indefinite" />
                </circle>
                
                {/* Envelope fold center */}
                <circle cx="180" cy="195" r="5">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                </circle>
                
                {/* Intermediate grid points */}
                <circle cx="125" cy="120" r="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" /></circle>
                <circle cx="235" cy="120" r="2.8"><animate attributeName="opacity" values="1;0.3;1" dur="2.4s" repeatCount="indefinite" /></circle>
                <circle cx="70" cy="180" r="3"><animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.1s" repeatCount="indefinite" /></circle>
                <circle cx="290" cy="180" r="2.8"><animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" /></circle>
                <circle cx="125" cy="240" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="1.9s" repeatCount="indefinite" /></circle>
                <circle cx="235" cy="240" r="2.8"><animate attributeName="opacity" values="1;0.4;1" dur="2.3s" repeatCount="indefinite" /></circle>
                
                <circle cx="125" cy="157" r="3.2"><animate attributeName="opacity" values="0.6;1;0.6" dur="1.7s" repeatCount="indefinite" /></circle>
                <circle cx="235" cy="157" r="3.2"><animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" /></circle>
                
                {/* Rising signal/transmission coordinates */}
                <circle cx="180" cy="85" r="2.8">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="180" cy="55" r="2.2">
                  <animate attributeName="opacity" values="0.1;0.8;0.1" dur="2.6s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Pulsing signal wave */}
              <circle cx="180" cy="195" r="40" stroke="rgba(201,168,76,0.35)" strokeWidth="1" fill="none">
                <animate attributeName="r" values="15;70" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0" dur="2.5s" repeatCount="indefinite" />
              </circle>
              
              <text 
                x="180" 
                y="340" 
                textAnchor="middle" 
                fill="rgba(201,168,76,0.6)" 
                className="font-bebas text-[12px] tracking-[6px]"
              >
                CONNECT · COLLABORATE · CREATE
              </text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
