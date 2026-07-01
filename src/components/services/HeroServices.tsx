'use client';
import React from 'react';
import Link from 'next/link';

export default function HeroServices() {
  return (
    <section id="hero" className="relative pt-28 pb-16 px-6 md:px-20 overflow-hidden bg-black">
      {/* Background Radiance */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(201,168,76,0.06) 0%, transparent 65%)'
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

      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Info Column */}
        <div className="fade-up hero-inner max-w-[700px]">
          <div className="text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-6 flex items-center gap-4 font-sans">
            <span className="w-10 h-[1px] bg-gold-dim" />
            What We Do
          </div>
          
          <h1 className="font-bebas text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.88] tracking-[0.03em] mb-8 text-text">
            ONE TECHNOLOGY.<br />
            <span className="text-gold">INFINITE</span><br />
            POSSIBILITIES.
          </h1>
          
          <p className="text-[0.95rem] text-text-muted leading-[1.9] max-w-[480px] font-sans">
            As the Best drone show company in India, FLYBIT Dynamics transforms your vision into breathtaking aerial experiences. From corporate drone shows to cultural spectacles, our teams deliver certified operations nationwide—from a drone show delhi to a drone show rajasthan.
          </p>
        </div>

        {/* Right Animated Drone SVG Column */}
        <div className="flex justify-center md:justify-end">
          <div className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] pointer-events-none relative">
            <svg viewBox="0 0 340 340" fill="none" className="w-full h-full">
              {/* External orbits */}
              <circle cx="170" cy="170" r="130" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
              <circle cx="170" cy="170" r="90" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" strokeDasharray="3 5" />
              
              {/* Pulsing Nodes */}
              <g fill="rgba(201,168,76,0.7)">
                {/* Outer Ring Drones */}
                <circle cx="170" cy="80" r="2.5">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="100" r="2">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="145" r="2.5">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="248" cy="200" r="2">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="2.9s" repeatCount="indefinite" />
                </circle>
                <circle cx="215" cy="245" r="2.5">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.1s" repeatCount="indefinite" />
                </circle>
                <circle cx="170" cy="260" r="2">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="125" cy="245" r="2.5">
                  <animate attributeName="opacity" values="1;0.4;1" dur="3.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="92" cy="200" r="2">
                  <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="90" cy="145" r="2.5">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="120" cy="100" r="2">
                  <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Inner Ring Drones */}
                <circle cx="170" cy="115" r="2">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="205" cy="135" r="1.5">
                  <animate attributeName="opacity" values="1;0.4;1" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="170" r="2">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="205" cy="205" r="1.5">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="170" cy="225" r="2">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="135" cy="205" r="1.5">
                  <animate attributeName="opacity" values="1;0.3;1" dur="3.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="120" cy="170" r="2">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="2.9s" repeatCount="indefinite" />
                </circle>
                <circle cx="135" cy="135" r="1.5">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.1s" repeatCount="indefinite" />
                </circle>

                {/* Center Core */}
                <circle cx="170" cy="170" r="3">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Status details */}
              <text 
                x="170" 
                y="305" 
                textAnchor="middle" 
                fill="rgba(201,168,76,0.18)" 
                className="font-bebas text-[9px] tracking-[4px]"
              >
                GPS SYNCED · RTK PRECISION
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
