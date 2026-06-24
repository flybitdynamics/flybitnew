'use client';
import React from 'react';

const STATS_ITEMS = [
  {
    num: '100',
    unit: '+',
    label: 'Min Drones Per Show',
    sub: 'Expandable on request'
  },
  {
    num: '±1',
    unit: '–2cm',
    label: 'Positioning Accuracy',
    sub: 'RTK GPS correction'
  },
  {
    num: '15',
    unit: 'min',
    label: 'Flight Time Per Show',
    sub: 'Hot-swappable battery system'
  },
  {
    num: '500',
    unit: 'm',
    label: 'Communication Range',
    sub: '2.4GHz dual-band mesh network'
  }
];

export default function StatsBand() {
  return (
    <section id="stats-band" className="bg-dark py-0 border-y border-border/40">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border/20">
        {STATS_ITEMS.map((item) => (
          <div 
            key={item.label}
            className="sband bg-dark px-10 py-12 relative overflow-hidden group hover:bg-white/[0.015] transition-all duration-300"
          >
            {/* Border underline slider on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="font-bebas text-[3.5rem] text-gold leading-none tracking-[0.04em]">
              {item.num}
              <span className="text-[1.4rem] text-gold-dim ml-1 uppercase">{item.unit}</span>
            </div>
            
            <div className="text-[0.68rem] tracking-[0.18em] uppercase text-text-muted mt-4 font-sans font-medium">
              {item.label}
            </div>
            
            <div className="text-[0.72rem] text-text-dim mt-1.5 font-sans">
              {item.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
