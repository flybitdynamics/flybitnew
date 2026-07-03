'use client';

import React from 'react';
import CategoryLandingPage from '@/components/CategoryLandingPage';

export default function ProductLaunchDroneShowPage() {
  return (
    <CategoryLandingPage
      title="Product Launch Drone Shows"
      keyword="drone show for product launch"
      eyebrow="Product Launches &amp; Activations"
      introText="Generate explosive virality for your new brand release. We engineer high-impact product launch drone shows, modeling custom 3D products, cars, phones, and logos in the sky."
      detailText="Ensure your press release event, corporate launch, or experiential marketing campaign generates massive social media shares. We coordinate regulatory NOCs and airspace safety setups."
      imageKey="launch"
      pills={[
        "3D Product Rendering",
        "Brand Logo Alignments",
        "Media & Press Coverage Sync",
        "Social Media Buzz Boosts",
        "Flexible Fleets & Swarms",
        "Pan-India Launch Sites"
      ]}
      ctaText="Book Product Launch"
    />
  );
}
