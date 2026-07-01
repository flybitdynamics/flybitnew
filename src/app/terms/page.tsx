'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function TermsPage() {
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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-black border-b border-gold/10">
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

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 text-left">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-6 flex items-center gap-3 font-sans font-medium">
            <span className="w-10 h-[1px] bg-gold-dim" />
            LEGAL COMPLIANCE
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-text leading-tight mb-8">
            Terms of <em className="text-gold italic">Service</em>
          </h1>
          <p className="text-[0.95rem] text-text-muted max-w-[650px] leading-[1.8] font-sans">
            Please read these terms and conditions carefully. They govern all drone flight bookings, coordinate planning, clearances, and weather-related cancellations with FLYBIT Dynamics.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-dark-2/10 font-sans">
        <div className="max-w-[800px] mx-auto px-6 text-text-muted text-[0.92rem] leading-relaxed space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-gold text-2xl font-cormorant font-light uppercase tracking-wide">1. Event Bookings &amp; Deposits</h2>
            <p>
              To secure flight dates for a custom swarm show, a 50% booking deposit is required at sangeet, wedding, or corporate contract sign-off. The remaining balance must be settled at least 7 business days prior to the planned event date.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-gold text-2xl font-cormorant font-light uppercase tracking-wide">2. Airspace Clearances &amp; Approvals</h2>
            <p>
              FLYBIT Dynamics handles all regulatory clearances end-to-end, including DGCA registrations, Air Traffic Control (ATC) coordination, and municipal police NOCs. Clients are responsible for coordinating and providing safe physical takeoff/landing coordinates with the venue management.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-gold text-2xl font-cormorant font-light uppercase tracking-wide">3. Weather &amp; Force Majeure Cancellation</h2>
            <p>
              Drone light shows are highly sensitive to weather coordinates. Shows cannot take off in active rainfall, thunderstorms, or wind speeds exceeding 8 m/s. In case of forced cancellation due to adverse weather, the scheduling deposit is non-refundable, but we offer alternate dates or slot credits subject to regional airspace availability.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-gold text-2xl font-cormorant font-light uppercase tracking-wide">4. Flight Safety Zones</h2>
            <p>
              A designated safety buffer zone of at least 100 meters must be maintained between the drone launch site/flight canvas and the general audience. Guests are strictly prohibited from entering this zone during flight operations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-gold text-2xl font-cormorant font-light uppercase tracking-wide">5. Changes &amp; Choreography Timelines</h2>
            <p>
              Any changes to 3D choreographies, initials, logo models, or sangeet soundtracks must be submitted at least 14 days before the event to allow physics engine rendering and coordinate safety runs.
            </p>
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
