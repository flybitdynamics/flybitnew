'use client';

import React from 'react';
import CategoryLandingPage from '@/components/CategoryLandingPage';

export default function SpiritualDroneShowPage() {
  return (
    <CategoryLandingPage
      title="Spiritual Drone Shows"
      keyword="drone show for spiritual"
      eyebrow="Spiritual &amp; Heritage Festivals"
      introText="Animate divine narratives in the heavens. We plan custom drone shows for spiritual gatherings, depicting massive 3D deities, temple structures, diyas, and heritage emblems."
      detailText="Ensure your maha-aarti, temple trust anniversary, or religious festival becomes a majestic, viral landmark. We work with trust committees to secure approvals and configure safe launches."
      imageKey="spiritual"
      pills={[
        "3D Divine Formations",
        "Sacred Mantra Symbols",
        "Maha Aarti Coordination",
        "Temple Heritage Ensembles",
        "Silent, Eco-friendly Fleet",
        "Epic Storyboard Sequences"
      ]}
      ctaText="Book Spiritual Show"
    />
  );
}
