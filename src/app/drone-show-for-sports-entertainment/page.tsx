'use client';

import React from 'react';
import CategoryLandingPage from '@/components/CategoryLandingPage';

export default function SportsEntertainmentDroneShowPage() {
  return (
    <CategoryLandingPage
      title="Sports &amp; Entertainment Shows"
      keyword="drone show for sports-entertainment"
      eyebrow="Sports &amp; Entertainment Events"
      introText="Thrill stadium crowds and concert audiences. We coordinate drone shows for sports &amp; entertainment events, choreographing massive countdown clocks, musical notes, and team mascots."
      detailText="Enhance your halftime show, festival opening, or music concert with dynamic spatial animations. We secure airspace coordination over large venues and guarantee safe crowd separation boundaries."
      imageKey="sports"
      pills={[
        "Stadium Halftime Formations",
        "Interactive Countdown Clocks",
        "Music Concert Visualizers",
        "Heavy Airspace Approvals",
        "Large Crowd Safe Barriers",
        "Mascot & Team Emblem Art"
      ]}
      ctaText="Book Sports Show"
    />
  );
}
