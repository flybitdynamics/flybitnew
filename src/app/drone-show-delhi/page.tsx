'use client';

import React from 'react';
import CityLandingPage from '@/components/CityLandingPage';

export default function DelhiPage() {
  return (
    <CityLandingPage
      city="Delhi"
      tagline="Premium Drone Shows in Delhi NCR"
      h1="Drone Show in Delhi"
      introText="Illuminate the capital's skies. FLYBIT Dynamics is the top provider of drone light show delhi displays, delivering safe, fully approved aerial entertainment. We tailor every drone show in delhi for national celebrations, massive brand launches, and custom drone show delhi events."
      landmarkDetails="Operating drone shows in the national capital region requires precise coordination. As a certified drone show company in delhi, FLYBIT Dynamics handles all regulatory clearances end-to-end. If you are planning a campaign and need details on drone show ncr cost, we provide flexible planning options to operate legally and safely."
      popularEvents="From corporate product launches in Gurugram and Noida to a grand wedding drone show delhi in Chattarpur and Faridabad, our certified pilots deploy drone swarms to project custom storyboards, 3D products, and brand animations in the sky."
      testimonial={{
        quote: "For our product launch in Delhi NCR, we wanted something that would create a major social buzz. The drone show did exactly that. Sangeet and corporate events are transformed by FLYBIT. They handled all clearances effortlessly.",
        author: "Siddharth Malhotra",
        role: "Director Marketing, NexGen Electronics"
      }}
    />
  );
}
