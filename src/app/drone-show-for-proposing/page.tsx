'use client';

import React from 'react';
import CategoryLandingPage from '@/components/CategoryLandingPage';

export default function ProposingDroneShowPage() {
  return (
    <CategoryLandingPage
      title="Proposal Drone Shows"
      keyword="drone show for proposing"
      eyebrow="Surprise Proposals &amp; Engagements"
      introText="Say 'Will You Marry Me' in the grandest way imaginable. We design spectacular surprise proposal drone shows, mapping custom initials, sparkling diamond rings, and double hearts in the stars."
      detailText="Create a moment she will cherish forever. Whether on a private beach, a lakeside resort, or a palace rooftop, we handle VVIP safety parameters and coordinate flight approvals discreetly."
      imageKey="social"
      pills={[
        "Will You Marry Me? Text",
        "Blinking 3D Diamond Rings",
        "Couple Initials & Monograms",
        "Rooftop & Beach Setup Feasibility",
        "Discreet Coordination Team",
        "Custom Soundtrack Playback"
      ]}
      ctaText="Book Proposal Show"
    />
  );
}
