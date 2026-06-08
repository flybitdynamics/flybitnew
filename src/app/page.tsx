'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// import SpecsBar from '../components/SpecsBar';
import About from '../components/About';
import Services from '../components/Services';
import Showcase from '../components/Showcase';
import StoriesInsightsSection from '../components/stories/StoriesInsightsSection';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  const openModal = (title: string, desc: string) => {
    setModalTitle(title);
    setModalDesc(desc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-text selection:bg-gold selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenModal={openModal} />

      {/* Main Page Content */}
      <main>
        {/* Hero Banner Section */}
        <Hero onOpenModal={openModal} />



        {/* CyberDrone Technical Specs Bar */}
        {/* <SpecsBar onOpenModal={openModal} /> */}

        {/* Narrative Context Section */}
        <About onOpenModal={openModal} />

        {/* Core Event Services Grid */}
        <Services onOpenModal={openModal} />

        {/* Portfolio Showcase Section */}
        <Showcase onOpenModal={openModal} />

        {/* Stories & Insights — reels + long-form content */}
        <StoriesInsightsSection onOpenModal={openModal} />

        {/* Timeline Process Steps Section */}
        <Process onOpenModal={openModal} />

        {/* Testimonials Block */}
        <Testimonials onOpenModal={openModal} />

        {/* The FLYBIT Advantage Grid */}
        <WhyChooseUs onOpenModal={openModal} />

        {/* Interactive Pricing Estimator & Canvas Preview */}
        <Pricing onOpenModal={openModal} />

        {/* CTA Banner Section */}
        <CTA onOpenModal={openModal} />
      </main>

      {/* Global Page Footer */}
      <Footer onOpenModal={openModal} />

      {/* Booking Form and Info Detail Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalTitle}
        description={modalDesc}
      />
    </div>
  );
}
