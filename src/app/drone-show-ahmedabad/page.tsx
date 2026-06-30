'use client';

import React from 'react';
import CityLandingPage from '@/components/CityLandingPage';

export default function AhmedabadPage() {
  return (
    <CityLandingPage
      city="Ahmedabad"
      tagline="Gujarat's Leading Drone Swarm Experts"
      h1="Drone Show in Ahmedabad"
      introText="Bring cutting-edge innovation to Gujarat's cultural heart. FLYBIT Dynamics delivers spectacular drone light shows in Ahmedabad, providing premium entertainment for Navratri festivals, corporate milestones, and grand private functions."
      landmarkDetails="From the technology hubs and Sabarmati Riverfront to major sports stadiums, Ahmedabad is a center of rapid growth and vibrant culture. Our drone shows comply perfectly with Gujarat's local flight permissions, delivering high-density drone animations for thousands of spectators."
      popularEvents="We specialize in national holiday celebrations (Independence Day, Republic Day), major corporate inaugurations, and massive cultural gatherings, lighting up the Gujarat sky with custom choreographies."
      testimonial={{
        quote: "We booked FLYBIT for our corporate anniversary event at the Sabarmati Riverfront. The precision of the 3D shapes representing our brand timeline was incredible. Truly a world-class technology and drone company!",
        author: "Amit Patel",
        role: "VP Operations, Gujarat Tech Conclave"
      }}
    />
  );
}
