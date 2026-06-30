'use client';

import React from 'react';
import CityLandingPage from '@/components/CityLandingPage';

export default function JaipurPage() {
  return (
    <CityLandingPage
      city="Jaipur"
      tagline="Premium Drone Shows in Rajasthan"
      h1="Drone Show in Jaipur"
      introText="Breathe life into the Pink City's historical sky. FLYBIT Dynamics brings world-class drone light shows to Jaipur, painting the royal horizon with up to 300+ synchronized drones for destination weddings, luxury corporate events, and cultural heritage festivals."
      landmarkDetails="From the grand backdrops of heritage palaces like Fairmont, Rambagh Palace, and Chomu Palace to modern convention centers, Jaipur is the epitome of royal hospitality. Our drone swarms are customized to perform complex choreographies that showcase rich Rajasthani heritage, traditional motifs, and royal emblems in the sky."
      popularEvents="We collaborate with top-tier event planners, luxury resorts, and cultural organizers in Jaipur to deliver spectacular wedding sangeet sky finales, corporate brand launches, and desert festival openings that leave guests completely spellbound."
      testimonial={{
        quote: "The drone show at our wedding in Jaipur was a complete surprise for our guests. Seeing our story animated across the palace sky was an unforgettable experience. The FLYBIT team managed all approvals and safety coordinates flawlessly.",
        author: "Rohan & Anjali Singhania",
        role: "Destination Wedding at Fairmont Jaipur"
      }}
    />
  );
}
