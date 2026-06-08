'use client';

import React from 'react';
import FadeUp from './FadeUp';

interface SpecsBarProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function SpecsBar({ onOpenModal }: SpecsBarProps) {
  const specs = [
    {
      num: '1000+',
      label: 'Drones in Fleet',
      sub: 'Up to 3,000 on request',
      modalTitle: 'Our Fleet',
      modalDesc: 'FLYBIT operates 1000+ precision drones with RGB LEDs, GPS syncing and real-time collision avoidance — all DGCA certified.',
    },
    {
      num: '20',
      label: 'Min. Flight Time',
      sub: 'Synced to your music',
      modalTitle: 'Flight Duration',
      modalDesc: 'Our shows run up to 20 minutes of continuous aerial choreography — synced to music, perfectly timed.',
    },
    {
      num: 'DGCA',
      label: '100% Certified',
      sub: 'Safe & legal operations',
      modalTitle: 'DGCA Approval',
      modalDesc: 'We hold complete DGCA approvals and clearances for legal, safe, and insured operations pan-India.',
    },
    {
      num: '2.5H',
      label: 'Turnaround Setup',
      sub: 'Fastest field deployment',
      modalTitle: 'Setup Speed',
      modalDesc: 'Our advanced ground stations enable deployment and show execution with rapid turnaround.',
    },
  ];

  // return (
  //   <div className="specs-bar grid grid-cols-2 lg:grid-cols-4 bg-dark-2 border-t border-b border-border select-none">
  //     {specs.map((spec, idx) => (
  //       <FadeUp
  //         key={idx}
  //         delay={idx * 80}
  //         onClick={() => onOpenModal(spec.modalTitle, spec.modalDesc)}
  //         className="spec-item p-6 md:p-9 text-center border-r border-border last:border-r-0 relative overflow-hidden cursor-pointer md:cursor-none hover:bg-dark-3 transition-colors duration-300 group"
  //       >
  //         <span className="spec-num font-bebas text-5xl md:text-[3.5rem] color-gold text-gold leading-none tracking-[0.04em] block">
  //           {spec.num}
  //         </span>
  //         <span className="spec-label text-[0.65rem] tracking-[0.25em] uppercase text-text-muted mt-2 block font-sans">
  //           {spec.label}
  //         </span>
  //         <span className="spec-sub text-[0.7rem] text-text-dim mt-1 block font-sans">
  //           {spec.sub}
  //         </span>
  //         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 scale-x-0 w-3/5 h-[2px] bg-gold transition-transform duration-400 group-hover:scale-x-100" />
  //       </FadeUp>
  //     ))}
  //   </div>
  // );
  return null;
}
