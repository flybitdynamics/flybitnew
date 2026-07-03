'use client';

import React from 'react';
import CategoryLandingPage from '@/components/CategoryLandingPage';

export default function WeddingDroneShowPage() {
  return (
    <CategoryLandingPage
      title="Wedding Drone Shows"
      keyword="drone show for wedding"
      eyebrow="Weddings & Celebrations"
      introText="Your love story, written in starlight. We specialize in custom-designed wedding drone shows, choreographing couple initials, floating hearts, 3D rings, and cinematic timelines over your venue sky."
      detailText="Celebrate your sangeet night, reception dinner, or varmala ceremony with a breathtaking swarm display. We manage airspace coordination, DGCA clearance, and safety runs so you can create magic for your guests."
      imageKey="weddings"
      pills={[
        "Couple Initials & Monograms",
        "Animated Love Timelines",
        "Airspace & Safety Approvals",
        "Custom Music Synchronization",
        "Varmala & Sangeet Finales",
        "Bespoke 3D Sky Portraits"
      ]}
      ctaText="Book Wedding Show"
    />
  );
}
