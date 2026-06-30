'use client';

import React from 'react';
import CityLandingPage from '@/components/CityLandingPage';

export default function DelhiPage() {
  return (
    <CityLandingPage
      city="Delhi"
      tagline="Premium Drone Shows in Delhi NCR"
      h1="Drone Show in Delhi"
      introText="Illuminate the capital's skies. FLYBIT Dynamics offers high-precision drone light shows in Delhi and NCR, delivering safe, fully approved aerial entertainment for national celebrations, massive brand launches, and premium weddings."
      landmarkDetails="Operating drone shows in Delhi NCR requires precise coordination with local air traffic control (ATC), regional air defense security, and police departments due to strict VIP airspaces. FLYBIT Dynamics handles all regulatory clearances end-to-end to operate legally and safely."
      popularEvents="From corporate product launches in Gurugram and Noida to grand destination weddings in Chattarpur and Faridabad, our certified pilots deploy drone swarms to project custom storyboards, 3D products, and brand animations in the sky."
      testimonial={{
        quote: "For our product launch in Delhi NCR, we wanted something that would create a major social buzz. The drone show did exactly that. Sangeet and corporate events are transformed by FLYBIT. They handled all clearances effortlessly.",
        author: "Siddharth Malhotra",
        role: "Director Marketing, NexGen Electronics"
      }}
    />
  );
}
