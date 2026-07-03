'use client';

import React from 'react';
import CategoryLandingPage from '@/components/CategoryLandingPage';

export default function GovernmentDroneShowPage() {
  return (
    <CategoryLandingPage
      title="Government &amp; National Drone Shows"
      keyword="drone show for government"
      eyebrow="Government &amp; National Events"
      introText="Honor national heritage and public milestones in light. We design fully-compliant drone shows for government events, tourism campaigns, and state celebrations."
      detailText="Ensure your public celebration, heritage site opening, or international summit maintains the highest parameters of safety clearance. We secure ATC approvals and DGCA permissions seamlessly."
      imageKey="government"
      pills={[
        "National Flag & Emblems",
        "Indian Heritage Visuals",
        "DGCA Airspace Permits",
        "Massive Public Crowd Control",
        "High-security Safe Coordinates",
        "Patriotic Symphony Sync"
      ]}
      ctaText="Book Government Show"
    />
  );
}
