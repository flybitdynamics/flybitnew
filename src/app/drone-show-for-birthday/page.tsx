'use client';

import React from 'react';
import CategoryLandingPage from '@/components/CategoryLandingPage';

export default function BirthdayDroneShowPage() {
  return (
    <CategoryLandingPage
      title="Birthday Drone Shows"
      keyword="drone show for birthday"
      eyebrow="Birthdays &amp; Milestones"
      introText="Make your milestone celebration historic. We animate custom birthday drone shows, painting names, ages, floating presents, and glowing birthday candles across the evening horizon."
      detailText="Perfect for VVIP private receptions, kids' spectaculars, and grand family milestones. Our flight operations team secures coordinates safety audits and local police approvals seamlessly."
      imageKey="social"
      pills={[
        "Name & Age Formations",
        "Animated Birthday Cakes",
        "Private Estate Airspace Audits",
        "Custom Music Playlists",
        "Surprise Sky Reveals",
        "Glow-in-the-dark Gift Boxes"
      ]}
      ctaText="Book Birthday Show"
    />
  );
}
