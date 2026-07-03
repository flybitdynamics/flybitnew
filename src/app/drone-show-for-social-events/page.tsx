'use client';

import React from 'react';
import CategoryLandingPage from '@/components/CategoryLandingPage';

export default function SocialEventsDroneShowPage() {
  return (
    <CategoryLandingPage
      title="Social Event Drone Shows"
      keyword="drone show for social events"
      eyebrow="Social &amp; Community Events"
      introText="Make every community milestone, family reunion, and private gala landmark historic. We coordinate custom drone shows for social events, displaying personalized messages and 3D icons."
      detailText="Enhance your club celebrations, housing community openings, or high-profile reunions. We manage municipal permissions, police NOCs, and flight safety coordinates seamlessly."
      imageKey="social"
      pills={[
        "Family Reunion Tributes",
        "Anniversaries & Anniversaries",
        "Airspace Feasibility Audits",
        "Custom Music Audio Feeds",
        "Private Estate Setups",
        "Bespoke 3D Sky Animations"
      ]}
      ctaText="Book Social Show"
    />
  );
}
