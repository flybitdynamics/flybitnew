'use client';
import React from 'react';

export default function HeroTechnology() {
  return (
    <section id="hero" className="relative pt-28 pb-16 px-6 md:px-20 overflow-hidden bg-black min-h-[75vh] flex items-center">
      {/* Background Radiance */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 55% 45%, rgba(201,168,76,0.055) 0%, transparent 65%)'
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
          maskImage: 'radial-gradient(ellipse at 70% 50%, black 10%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, black 10%, transparent 60%)'
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Column Text Info */}
        <div className="fade-up hero-inner max-w-[640px]">
          <div className="text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-6 flex items-center gap-4 font-sans">
            <span className="w-10 h-[1px] bg-gold-dim" />
            Our Technology
          </div>
          
          <h1 className="font-bebas text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.88] tracking-[0.03em] mb-8 text-text">
            THE <span className="text-gold">BRAINS</span><br />
            BEHIND<br />
            THE BEAUTY.
          </h1>
          
          <p className="text-[0.95rem] text-text-muted leading-[1.9] max-w-[480px] font-sans mb-10">
            At the heart of every FLYBIT show lies military-grade hardware, proprietary software, and synchronized choreography that pushes the boundaries of what's possible in the sky.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a 
              href="#hardware" 
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 text-[0.72rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 inline-block cursor-none border-none text-center"
            >
              Explore Hardware
            </a>
            <a 
              href="#software" 
              className="bg-transparent border border-border hover:border-gold hover:text-gold text-text font-light px-8 py-3.5 text-[0.72rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 inline-block cursor-none text-center"
            >
              View Software Suite
            </a>
          </div>
        </div>

        {/* Right Column Drone SVG Animation */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] pointer-events-none relative">
            <svg viewBox="0 0 420 420" fill="none" className="w-full h-full">
              {/* Outer orbits */}
              <circle cx="210" cy="210" r="180" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
              <circle cx="210" cy="210" r="140" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5" strokeDasharray="4 6" />
              <circle cx="210" cy="210" r="95" stroke="rgba(201,168,76,0.07)" strokeWidth="0.5" strokeDasharray="2 8" />
              
              {/* Swarm particles */}
              <g fill="rgba(201,168,76,0.75)">
                {/* Center node */}
                <circle cx="210" cy="210" r="4">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="200" r="2.5">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="200" r="2.5">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="220" r="2.5">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.1s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="220" r="2.5">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.3s" repeatCount="indefinite" />
                </circle>

                {/* Vector Arms nodes */}
                <circle cx="170" cy="170" r="2">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="160" cy="160" r="2.5">
                  <animate attributeName="opacity" values="1;0.4;1" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="170" r="2">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="260" cy="160" r="2.5">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="3.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="170" cy="250" r="2">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.9s" repeatCount="indefinite" />
                </circle>
                <circle cx="160" cy="260" r="2.5">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="250" r="2">
                  <animate attributeName="opacity" values="1;0.4;1" dur="3.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="260" cy="260" r="2.5">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite" />
                </circle>

                {/* Rotors TL */}
                <circle cx="142" cy="142" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" /></circle>
                <circle cx="130" cy="130" r="2"><animate attributeName="opacity" values="1;0.2;1" dur="2.2s" repeatCount="indefinite" /></circle>
                <circle cx="155" cy="130" r="2"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.9s" repeatCount="indefinite" /></circle>
                <circle cx="130" cy="155" r="2"><animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" /></circle>
                <circle cx="125" cy="142" r="1.5"><animate attributeName="opacity" values="0.5;1;0.5" dur="1.6s" repeatCount="indefinite" /></circle>
                <circle cx="142" cy="125" r="1.5"><animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" /></circle>

                {/* Rotors TR */}
                <circle cx="278" cy="142" r="3"><animate attributeName="opacity" values="1;0.4;1" dur="2.1s" repeatCount="indefinite" /></circle>
                <circle cx="290" cy="130" r="2"><animate attributeName="opacity" values="0.3;1;0.3" dur="1.7s" repeatCount="indefinite" /></circle>
                <circle cx="265" cy="130" r="2"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.4s" repeatCount="indefinite" /></circle>
                <circle cx="290" cy="155" r="2"><animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.9s" repeatCount="indefinite" /></circle>
                <circle cx="295" cy="142" r="1.5"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite" /></circle>
                <circle cx="278" cy="125" r="1.5"><animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" /></circle>

                {/* Rotors BL */}
                <circle cx="142" cy="278" r="3"><animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" /></circle>
                <circle cx="130" cy="290" r="2"><animate attributeName="opacity" values="0.2;0.9;0.2" dur="2s" repeatCount="indefinite" /></circle>
                <circle cx="155" cy="290" r="2"><animate attributeName="opacity" values="1;0.3;1" dur="2.8s" repeatCount="indefinite" /></circle>
                <circle cx="130" cy="265" r="2"><animate attributeName="opacity" values="0.4;1;0.4" dur="1.7s" repeatCount="indefinite" /></circle>
                <circle cx="125" cy="278" r="1.5"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" repeatCount="indefinite" /></circle>
                <circle cx="142" cy="295" r="1.5"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" /></circle>

                {/* Rotors BR */}
                <circle cx="278" cy="278" r="3"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.9s" repeatCount="indefinite" /></circle>
                <circle cx="290" cy="290" r="2"><animate attributeName="opacity" values="0.3;1;0.3" dur="2.7s" repeatCount="indefinite" /></circle>
                <circle cx="265" cy="290" r="2"><animate attributeName="opacity" values="1;0.4;1" dur="2.1s" repeatCount="indefinite" /></circle>
                <circle cx="290" cy="265" r="2"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.4s" repeatCount="indefinite" /></circle>
                <circle cx="295" cy="278" r="1.5"><animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" repeatCount="indefinite" /></circle>
                <circle cx="278" cy="295" r="1.5"><animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.9s" repeatCount="indefinite" /></circle>

                {/* Orbital drones */}
                <circle cx="210" cy="30" r="2"><animate attributeName="opacity" values="0.3;1;0.3" dur="3.5s" repeatCount="indefinite" /></circle>
                <circle cx="330" cy="90" r="1.5"><animate attributeName="opacity" values="1;0.2;1" dur="4s" repeatCount="indefinite" /></circle>
                <circle cx="380" cy="210" r="2"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.2s" repeatCount="indefinite" /></circle>
                <circle cx="330" cy="330" r="1.5"><animate attributeName="opacity" values="0.7;0.1;0.7" dur="3.8s" repeatCount="indefinite" /></circle>
                <circle cx="210" cy="390" r="2"><animate attributeName="opacity" values="0.2;1;0.2" dur="4.2s" repeatCount="indefinite" /></circle>
                <circle cx="90" cy="330" r="1.5"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="3.6s" repeatCount="indefinite" /></circle>
                <circle cx="40" cy="210" r="2"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.3s" repeatCount="indefinite" /></circle>
                <circle cx="90" cy="90" r="1.5"><animate attributeName="opacity" values="1;0.3;1" dur="4.1s" repeatCount="indefinite" /></circle>
              </g>

              {/* Crosshair grids */}
              <line x1="210" y1="60" x2="210" y2="100" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" />
              <line x1="210" y1="320" x2="210" y2="360" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" />
              <line x1="60" y1="210" x2="100" y2="210" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" />
              <line x1="320" y1="210" x2="360" y2="210" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" />
              
              <text 
                x="210" 
                y="410" 
                textAnchor="middle" 
                fill="rgba(201,168,76,0.75)" 
                className="font-bebas text-[8px] tracking-[5px]"
              >
                RTK · GPS · MESH COMM
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
