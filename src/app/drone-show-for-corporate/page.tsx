'use client';

import React from 'react';
import CategoryLandingPage from '@/components/CategoryLandingPage';

export default function CorporateDroneShowPage() {
  return (
    <CategoryLandingPage
      title="Corporate Drone Shows"
      keyword="drone show for corporate"
      eyebrow="Corporate Events & Summits"
      introText="Elevate your corporate events and summits. We design custom-designed branding displays, choreographing VVIP logos, brand mottos, 3D products, and milestone timelines across the night sky."
      detailText="Ensure your business conference, anniversary gala, or national summit leaves an unforgettable impression. We coordinate regional ATC clearances, municipal NOCs, and safety compliance end-to-end."
      imageKey="corporate"
      pills={[
        "Brand Logo Formations",
        "Interactive Product Models",
        "Airspace Coordination NOCs",
        "Milestone Timeline Displays",
        "VVIP Event Safety Compliance",
        "Bespoke 3D Sky Animations"
      ]}
      ctaText="Book Corporate Show"
    />
  );
}
