import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What is a Drone Light Show? Swarm Tech & Guide | FLYBIT",
  description: "What is a drone light show and how does swarm drone technology work? Learn about 3D animation, RTK GPS precision, safety controls, and why drone shows are replacing fireworks.",
  keywords: [
    "what is a drone light show",
    "drone light show",
    "drone show",
    "drone light show company",
    "drone show company",
    "drone show technology",
    "how do drone shows work"
  ],
  alternates: {
    canonical: '/what-is-a-drone-light-show',
  }
};

export default function WhatIsDroneShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
