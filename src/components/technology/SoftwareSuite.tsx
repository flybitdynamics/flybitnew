'use client';
import React, { useState } from 'react';

const TABS = [
  {
    id: 0,
    num: '01',
    name: '3D Animation Suite',
    hint: 'Formation design & choreography',
    tag: 'Software Module 01',
    title: '3D Animation Suite',
    desc: 'Professional-grade choreography software that lets our animation team design stunning aerial formations in a full 3D environment — then simulate the entire show before a single drone takes flight. Every transition, every color change, every motion is previewed exactly as it will appear in the sky.',
    pills: [
      'Real-time 3D visualization',
      'Physics-based simulation',
      'Timeline-based animation',
      'Custom shape creation',
      'Multi-formation sequencing',
      'Music sync & beat mapping'
    ],
    visual: (
      <svg width="380" height="100" viewBox="0 0 380 100" className="w-full max-w-[420px]">
        <rect x="20" y="40" width="340" height="2" fill="rgba(201,168,76,0.08)" rx="1"/>
        <rect x="20" y="40" width="220" height="2" fill="rgba(201,168,76,0.4)" rx="1">
          <animate attributeName="width" values="0;220;220" dur="2s" fill="freeze"/>
        </rect>
        <circle cx="240" cy="41" r="5" fill="var(--color-gold)"/>
        <g fill="rgba(201,168,76,0.3)" className="font-bebas text-[8px] tracking-[2px]">
          <text x="20" y="30">00:00</text>
          <text x="95" y="30">00:30</text>
          <text x="175" y="30">01:00</text>
          <text x="255" y="30">01:30</text>
          <text x="335" y="30">02:00</text>
        </g>
        <rect x="20" y="58" width="60" height="12" fill="rgba(201,168,76,0.15)" rx="1"/>
        <rect x="85" y="58" width="80" height="12" fill="rgba(201,168,76,0.08)" rx="1"/>
        <rect x="170" y="58" width="50" height="12" fill="rgba(201,168,76,0.2)" rx="1"/>
        <rect x="225" y="58" width="100" height="12" fill="rgba(201,168,76,0.1)" rx="1"/>
        <text 
          x="190" 
          y="90" 
          textAnchor="middle" 
          fill="rgba(201,168,76,0.2)" 
          className="font-bebas text-[7px] tracking-[4px]"
        >
          TIMELINE EDITOR · SEQUENCE VIEW
        </text>
      </svg>
    )
  },
  {
    id: 1,
    num: '02',
    name: 'Safety Management',
    hint: 'Real-time monitoring & failsafes',
    tag: 'Software Module 02',
    title: 'Safety Management System',
    desc: 'Comprehensive safety protocols built into the core of our software — monitoring every drone in real time, anticipating potential failures, and executing failsafe procedures autonomously. Multiple layers of redundancy ensure audience and equipment protection in any scenario.',
    pills: [
      'Collision avoidance algorithms',
      'Emergency landing protocols',
      'Real-time health monitoring',
      'Geofencing protection',
      'Redundant failsafe systems',
      'Automatic return-to-home'
    ],
    visual: (
      <svg width="300" height="80" viewBox="0 0 300 80" className="w-full max-w-[340px]">
        <g fill="rgba(201,168,76,0.6)">
          <circle cx="50" cy="40" r="4">
            <animate attributeName="fill" values="rgba(201,168,76,0.6);rgba(201,168,76,1);rgba(201,168,76,0.6)" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="110" cy="40" r="4">
            <animate attributeName="fill" values="rgba(201,168,76,0.4);rgba(201,168,76,0.9);rgba(201,168,76,0.4)" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="170" cy="40" r="4">
            <animate attributeName="fill" values="rgba(201,168,76,0.8);rgba(201,168,76,0.2);rgba(201,168,76,0.8)" dur="1.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="230" cy="40" r="4">
            <animate attributeName="fill" values="rgba(201,168,76,0.3);rgba(201,168,76,1);rgba(201,168,76,0.3)" dur="1.8s" repeatCount="indefinite"/>
          </circle>
        </g>
        <text 
          x="150" 
          y="70" 
          textAnchor="middle" 
          fill="rgba(201,168,76,0.2)" 
          className="font-bebas text-[7px] tracking-[4px]"
        >
          LIVE DRONE HEALTH MONITOR
        </text>
      </svg>
    )
  },
  {
    id: 2,
    num: '03',
    name: 'Performance Analytics',
    hint: 'Live telemetry & post-show data',
    tag: 'Software Module 03',
    title: 'Performance Analytics',
    desc: 'Advanced analytics dashboards give our operations team a real-time view of every drone during live shows — with error detection, performance metrics, and comprehensive post-show analysis that feeds continuous improvement into every future production.',
    pills: [
      'Live telemetry dashboard',
      'Performance metrics tracking',
      'Error detection & reporting',
      'Post-show analysis reports',
      'Battery usage analytics',
      'Formation accuracy scoring'
    ],
    visual: (
      <svg width="320" height="80" viewBox="0 0 320 80" className="w-full max-w-[360px]">
        <polyline 
          points="20,60 50,45 80,50 110,30 140,35 170,20 200,28 230,15 260,22 290,10" 
          stroke="var(--color-gold)" 
          strokeWidth="1.5" 
          fill="none" 
          strokeDasharray="200" 
          strokeDashoffset="200"
        >
          <animate attributeName="stroke-dashoffset" values="200;0" dur="2s" fill="freeze"/>
        </polyline>
        <text 
          x="160" 
          y="75" 
          textAnchor="middle" 
          fill="rgba(201,168,76,0.2)" 
          className="font-bebas text-[7px] tracking-[4px]"
        >
          SHOW PERFORMANCE INDEX
        </text>
      </svg>
    )
  },
  {
    id: 3,
    num: '04',
    name: 'Cloud Integration',
    hint: 'Remote sync & OTA updates',
    tag: 'Software Module 04',
    title: 'Cloud Integration',
    desc: 'Seamless cloud connectivity allows our team to remotely monitor shows, push real-time updates, and synchronize choreography data across our entire fleet — anywhere in India. OTA firmware updates ensure every drone runs the latest performance and safety software.',
    pills: [
      'Remote monitoring capability',
      'OTA firmware updates',
      'Cloud-based choreography sync',
      'Backup and recovery systems',
      'Multi-site coordination',
      'Encrypted data transmission'
    ],
    visual: (
      <svg width="260" height="80" viewBox="0 0 260 80" className="w-full max-w-[280px]">
        <circle cx="130" cy="35" r="20" stroke="rgba(201,168,76,0.3)" strokeWidth="1" fill="none" strokeDasharray="3 4"/>
        <line x1="50" y1="50" x2="110" y2="38" stroke="rgba(201,168,76,0.2)" strokeWidth="0.7"/>
        <line x1="210" y1="50" x2="150" y2="38" stroke="rgba(201,168,76,0.2)" strokeWidth="0.7"/>
        <line x1="90" y1="20" x2="118" y2="28" stroke="rgba(201,168,76,0.2)" strokeWidth="0.7"/>
        <line x1="170" y1="20" x2="142" y2="28" stroke="rgba(201,168,76,0.2)" strokeWidth="0.7"/>
        <circle cx="50" cy="52" r="5" fill="rgba(201,168,76,0.4)"/>
        <circle cx="210" cy="52" r="5" fill="rgba(201,168,76,0.4)"/>
        <circle cx="90" cy="18" r="5" fill="rgba(201,168,76,0.4)"/>
        <circle cx="170" cy="18" r="5" fill="rgba(201,168,76,0.4)"/>
        <circle cx="130" cy="35" r="6" fill="var(--color-gold)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text 
          x="130" 
          y="72" 
          textAnchor="middle" 
          fill="rgba(201,168,76,0.2)" 
          className="font-bebas text-[7px] tracking-[4px]"
        >
          CLOUD MESH TOPOLOGY
        </text>
      </svg>
    )
  }
];

export default function SoftwareSuite() {
  const [activeTabId, setActiveTabId] = useState(0);

  const activeTab = TABS.find((tab) => tab.id === activeTabId) || TABS[0];

  return (
    <section id="software" className="bg-[#0d0d0d] py-24 px-6 md:px-20 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-4">
            Proprietary Software Suite
          </div>
          <h2 className="sec-title font-cormorant text-[clamp(2.4rem,5vw,4.2rem)] font-light text-text leading-[1.08] mb-6">
            In-House <span className="text-gold italic">Intelligence</span>
          </h2>
          <p className="sec-body text-[0.9rem] text-text-muted leading-[1.95] max-w-[520px] mx-auto font-sans">
            Built from the ground up by our engineering team — software that controls animation, simulation, and real-time management of hundreds of drones in perfect unison.
          </p>
        </div>

        {/* Dashboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-[2px] bg-border/20 rounded-[3px] overflow-hidden fade-up">
          
          {/* Left Tab List */}
          <div className="flex flex-col gap-[2px] bg-[#0d0d0d]">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`sw-tab text-left p-8 bg-dark border-b border-border/20 cursor-none relative transition-all duration-300 hover:bg-white/[0.015] outline-none ${
                  activeTabId === tab.id ? 'bg-[#1a1917]/70' : 'bg-transparent'
                }`}
              >
                {/* Active marker line */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gold transition-transform duration-300 ${
                    activeTabId === tab.id ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />
                
                <div className="text-[0.75rem] text-gold-dim tracking-[0.2em] font-sans font-medium mb-1.5 uppercase">
                  {tab.num}
                </div>
                
                <h4 className={`font-cormorant text-[1.25rem] transition-colors duration-300 ${
                  activeTabId === tab.id ? 'text-gold' : 'text-text'
                }`}>
                  {tab.name}
                </h4>
                
                <p className="text-[0.72rem] text-text-dim mt-1 font-sans">
                  {tab.hint}
                </p>
              </button>
            ))}
          </div>

          {/* Right Main Viewer Panel */}
          <div className="bg-dark p-8 md:p-14 flex flex-col justify-between">
            <div>
              <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2 font-sans font-medium">
                {activeTab.tag}
              </div>
              
              <h3 className="font-cormorant text-[2rem] text-text leading-tight mb-4">
                {activeTab.title}
              </h3>
              
              <p className="text-[0.85rem] text-text-muted leading-[1.95] font-sans mb-8">
                {activeTab.desc}
              </p>

              {/* Grid bullet pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeTab.pills.map((pill) => (
                  <div 
                    key={pill}
                    className="p-3 border border-border/30 rounded-[2px] text-[0.72rem] text-text-muted tracking-wide flex items-center gap-2 hover:border-gold/25 transition-all font-sans"
                  >
                    <span className="text-gold text-[0.65rem]">⚡</span>
                    {pill}
                  </div>
                ))}
              </div>
            </div>

            {/* Micro-Visualization SVG section */}
            <div className="relative h-[160px] bg-[#1a1917]/50 border border-gold/10 rounded-[3px] flex items-center justify-center overflow-hidden mt-10">
              {/* Corner frames */}
              <div className="absolute top-[-1px] left-[-1px] w-3.5 h-3.5 border-t-[1.5px] border-l-[1.5px] border-gold/30" />
              <div className="absolute top-[-1px] right-[-1px] w-3.5 h-3.5 border-t-[1.5px] border-r-[1.5px] border-gold/30" />
              <div className="absolute bottom-[-1px] left-[-1px] w-3.5 h-3.5 border-b-[1.5px] border-l-[1.5px] border-gold/30" />
              <div className="absolute bottom-[-1px] right-[-1px] w-3.5 h-3.5 border-b-[1.5px] border-r-[1.5px] border-gold/30" />
              
              {activeTab.visual}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
