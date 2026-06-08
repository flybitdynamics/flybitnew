'use client';

import React from 'react';

const ITEMS = [
  'Drone Light Shows',
  'DGCA Certified',
  'Pan-India Operations',
  '1000+ Drones',
  'Bespoke Formations',
  'Wedding Specialists',
  'Corporate Events',
  'Festival Shows',
  'Zero Carbon Shows',
  'Ahmedabad',
  'Mumbai',
  'Delhi',
  'Jaipur',
];

export default function Ticker() {
  // Repeat items to ensure seamless loop
  const repeatedItems = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="ticker-wrap overflow-hidden bg-gold py-3 select-none">
      <div className="ticker flex ticker-animate w-max">
        {repeatedItems.map((item, idx) => (
          <span
            key={idx}
            className="ticker-item whitespace-nowrap font-bebas text-[0.9rem] tracking-[0.2em] text-black px-8"
          >
            {item}
            <span className="ticker-dot text-black ml-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
