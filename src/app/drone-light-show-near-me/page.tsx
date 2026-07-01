'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';

interface RegionItem {
  city: string;
  state: string;
  tagline: string;
  description: string;
  link: string;
  pills: string[];
}

const REGION_ITEMS: RegionItem[] = [
  {
    city: "Delhi NCR",
    state: "Delhi, Gurugram, Noida",
    tagline: "VVIP Airspace Specialists",
    description: "Operating drone shows in the national capital region under strict permissions. Custom drone choreographies for corporate hubs and grand weddings in Chattarpur, Gurugram, and Noida.",
    link: "/drone-show-delhi",
    pills: ["DGCA Clearances", "Corporate Launches", "Grand Weddings"]
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
    tagline: "Entertainment Capital Spectacles",
    description: "Stunning coastal and urban drone light shows. Engineered to perform safely under Arabian Sea wind conditions for stadium openings, BKC corporate milestones, and luxury receptions.",
    link: "/drone-show-mumbai",
    pills: ["Coastal Calibration", "Stadium Shows", "Marine Drive Landmarks"]
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    tagline: "Vibrant Cultural Celebrations",
    description: "High-density drone animations for cultural festivals, corporate milestones, and public riverfront events. Fully compliant with Gujarat regional aviation controls.",
    link: "/drone-show-ahmedabad",
    pills: ["Sabarmati Riverfront", "Navratri Swarms", "Corporate Galas"]
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
    tagline: "Royal Heritage Finales",
    description: "Weaving royal traditional emblems, rich storyboards, and wedding portraits across heritage resort skies. Tailored specifically for palace venues and luxury wedding planners.",
    link: "/drone-show-jaipur",
    pills: ["Heritage Resorts", "Sangeet Finales", "Cultural Motifs"]
  },
  {
    city: "Udaipur",
    state: "Rajasthan",
    tagline: "Breathtaking Lakeside Magic",
    description: "Custom drone shows optimized for lakeside operations. Reflected 3D patterns floating over Lake Pichola and Fateh Sagar for luxury destination weddings and premium events.",
    link: "/drone-light-show-udaipur",
    pills: ["Lake Projections", "Romantic Proposals", "Destination Receptions"]
  }
];

export default function DroneShowNearMePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  const openModal = (title: string, description: string) => {
    setModalTitle(title);
    setModalDesc(description);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-black text-text selection:bg-gold selection:text-black">
      <Navbar onOpenModal={openModal} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black border-b border-gold/10">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 70% 60% at 50% 15%, rgba(201, 168, 76, 0.08) 0%, transparent 60%),
              linear-gradient(rgba(201, 168, 76, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 168, 76, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 text-center">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-6 flex items-center justify-center gap-3 font-sans">
            <span className="w-6 h-[1px] bg-gold-dim" />
            Regional Coverage
            <span className="w-6 h-[1px] bg-gold-dim" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            Drone Light Show <em className="text-gold italic">Near Me</em>
          </h1>
          <p className="text-[0.95rem] text-text-muted max-w-[650px] mx-auto leading-[1.8] font-sans">
            FLYBIT Dynamics delivers world-class drone swarm light displays across India. Discover our local bases, custom local flight clearance capability, and book a show in your area.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-dark-2/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Where We Fly
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text">
              Active Regional Operations in <em className="text-gold italic">India</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REGION_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300 flex flex-col justify-between min-h-[400px] font-sans"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-bebas text-gold text-3xl tracking-[0.05em] block">{item.city}</span>
                    <span className="text-[0.65rem] tracking-[0.05em] text-text-dim border border-border/30 px-2 py-0.5 rounded bg-dark">{item.state}</span>
                  </div>
                  <span className="text-[0.72rem] tracking-[0.1em] text-gold/80 uppercase block mb-6 font-semibold">{item.tagline}</span>
                  <p className="text-[0.88rem] text-text-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.pills.map((pill, pIdx) => (
                      <span key={pIdx} className="text-[0.68rem] bg-gold/5 border border-gold/10 px-2.5 py-1 text-gold-dim rounded-[2px]">{pill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <Link 
                    href={item.link}
                    className="inline-block text-gold text-xs tracking-wider uppercase border-b border-gold/45 pb-1 hover:text-gold-light hover:border-gold transition-colors"
                  >
                    View Local Show Packages ➔
                  </Link>
                </div>
              </div>
            ))}

            {/* Other Regions Box */}
            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] flex flex-col justify-between min-h-[400px] font-sans">
              <div>
                <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-4">Other Locations</span>
                <span className="text-[0.72rem] tracking-[0.1em] text-gold/80 uppercase block mb-6 font-semibold">Pan-India Deployment Capabilities</span>
                <p className="text-[0.88rem] text-text-muted leading-relaxed mb-6">
                  Do not see your city? We regularly transport our swarm hardware and setup teams to deliver spectacles across <strong>Goa, Bangalore, Hyderabad, Pune, Chennai</strong>, and remote destinations nationwide.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[0.68rem] bg-gold/5 border border-gold/10 px-2.5 py-1 text-gold-dim rounded-[2px]">Rapid Travel Logistics</span>
                  <span className="text-[0.68rem] bg-gold/5 border border-gold/10 px-2.5 py-1 text-gold-dim rounded-[2px]">Any Terrain Setup</span>
                </div>
              </div>
              <div>
                <button 
                  onClick={() => openModal("Inquire for Other Locations", "Let us know your destination and we will check airspace logistics.")}
                  className="inline-block text-gold text-xs tracking-wider uppercase border-b border-gold/45 pb-1 hover:text-gold-light hover:border-gold transition-colors text-left"
                >
                  Request Regional Feasibility Check ➔
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clearances and Setup */}
      <section className="py-20 border-t border-gold/10 bg-dark-3/10 font-sans">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Legal Compliance
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-8">
              How We Coordinate <em className="text-gold italic">Local Clearances</em>
            </h2>
            <p className="text-[0.92rem] text-text-muted leading-relaxed mb-6">
              Regardless of your location, hosting a drone swarm requires legal airspace approvals. As the premier drone show company in India, FLYBIT Dynamics handles all regulatory clearances end-to-end:
            </p>
            <ul className="space-y-4 text-[0.88rem] text-text-muted">
              <li className="flex items-start gap-2.5">
                <span className="text-gold">✔</span>
                <strong>DGCA Registration:</strong> All our show quadcopters have verified UINs and fly under strict safety buffers.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gold">✔</span>
                <strong>ATC Coordination:</strong> We establish direct communication coordinates with regional airports for flight scheduling.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gold">✔</span>
                <strong>Local Police NOC:</strong> We secure flight permits from municipal police authorities to ensure public safety.
              </li>
            </ul>
          </div>

          <div className="border border-gold/15 p-10 rounded bg-black relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <h3 className="font-cormorant text-3xl font-light text-text mb-6">
              Book a Show Near You
            </h3>
            <p className="text-[0.88rem] text-text-muted leading-relaxed mb-8">
              Want to see your brand animated, your initials glowing, or a custom 3D story in the night sky? Contact us to discuss your event location.
            </p>
            <button
              onClick={() => openModal('Book a Show Near Me', 'Specify your location and target dates, and we will initiate airspace checks.')}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 text-[0.75rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
            >
              Inquire About My Location
            </button>
          </div>
        </div>
      </section>

      <Footer onOpenModal={openModal} />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        description={modalDesc}
      />
    </main>
  );
}
