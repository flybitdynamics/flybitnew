'use client';
import React from 'react';

export default function HeroContact() {
  return (
    <section 
      id="hero" 
      className="relative pt-40 pb-28 px-6 md:px-20 overflow-hidden bg-black min-h-[500px] flex items-center"
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
          
          <p className="hero-sub text-[0.95rem] text-text-muted leading-[1.9] max-w-[480px] font-sans">
            Ready to create an unforgettable experience? Tell us your vision and we'll make it happen in the night sky — from 200 to 1000 drones, anywhere in India.
          </p>
        </div>

        {/* Right Animated SVG Column */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[360px] h-[360px] pointer-events-none">
            <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
              <circle cx="180" cy="180" r="155" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
              <circle cx="180" cy="180" r="115" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5" strokeDasharray="4 6" />
              <circle cx="180" cy="180" r="72" stroke="rgba(201,168,76,0.07)" strokeWidth="0.5" strokeDasharray="2 8" />
              
              {/* Phone icon in drone dots */}
              <g fill="rgba(201,168,76,0.7)">
                <circle cx="148" cy="130" r="2.5">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="160" cy="122" r="2">
                  <animate attributeName="opacity" values="1;0.3;1" dur="3.1s" repeatCount="indefinite" />
                </circle>
                <circle cx="170" cy="118" r="2">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="180" cy="119" r="2.5">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="3.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="152" cy="140" r="2">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="162" cy="148" r="2">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="174" cy="152" r="2.5">
                  <animate attributeName="opacity" values="1;0.4;1" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="184" cy="148" r="2">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="192" cy="140" r="2">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.9s" repeatCount="indefinite" />
                </circle>
                
                {/* Envelope shape */}
                <circle cx="200" cy="195" r="2">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="195" r="2">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="240" cy="195" r="2">
                  <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="215" r="2">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="240" cy="215" r="2">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="3.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="230" r="2">
                  <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="230" r="2">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3.1s" repeatCount="indefinite" />
                </circle>
                <circle cx="240" cy="230" r="2">
                  <animate attributeName="opacity" values="0.1;0.8;0.1" dur="2.8s" repeatCount="indefinite" />
                </circle>
                
                {/* V fold */}
                <circle cx="210" cy="207" r="2.5">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="214" r="2">
                  <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="230" cy="207" r="2.5">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite" />
                </circle>
                
                {/* Location pin */}
                <circle cx="135" cy="215" r="2">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="148" cy="210" r="2.5">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="158" cy="215" r="2">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="148" cy="222" r="2">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.9s" repeatCount="indefinite" />
                </circle>
                <circle cx="148" cy="234" r="1.5">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2.4s" repeatCount="indefinite" />
                </circle>
                
                {/* Center pulse */}
                <circle cx="180" cy="180" r="4">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Orbit pulse */}
              <circle cx="180" cy="180" r="50" stroke="rgba(201,168,76,0.15)" strokeWidth="1" fill="none">
                <animate attributeName="r" values="20;70" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" />
              </circle>
              
              <text 
                x="180" 
                y="340" 
                textAnchor="middle" 
                fill="rgba(201,168,76,0.18)" 
                className="font-bebas text-[8px] tracking-[5px]"
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
