'use client';

import React from 'react';
import CityLandingPage from '@/components/CityLandingPage';

export default function MumbaiPage() {
  return (
    <CityLandingPage
      city="Mumbai"
      tagline="Premium Drone Shows in Maharashtra"
      h1="Drone Show in Mumbai"
      introText="Animate the horizon of India's entertainment capital. FLYBIT Dynamics brings high-density drone light shows to Mumbai, illuminating the Arabian Sea and city skies with precise, synchronized 3D drone choreographies."
      landmarkDetails="From the iconic Gateway of India backdrops and Marine Drive skylines to corporate headquarters in Bandra Kurla Complex (BKC), Mumbai is the stage for India's grandest events. Our drone swarms are specifically engineered and tested to fly safely in coastal winds and high-density urban environments."
      popularEvents="We collaborate with top-tier production agencies, wedding planners, corporate brands, and sports teams to deliver landmark drone show spectacles for award nights, stadium openings, and luxury weddings."
      testimonial={{
        quote: "We had FLYBIT execute a 200-drone show for our corporate milestone event in BKC, Mumbai. The crowd loved the animations and the precision of the transitions. High quality, completely safe, and professional.",
        author: "Karan Johar",
        role: "Event Director, Eventus Horizon Mumbai"
      }}
    />
  );
}
