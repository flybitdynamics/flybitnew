'use client';

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

import HeroAbout from "@/components/about/HeroAbout";
import AboutIntro from "@/components/about/AboutIntro";
import ServicesDetailed from "@/components/about/ServicesDetailed";
import Clients from "@/components/about/Clients";
import Portfolio from "@/components/about/Portfolio";
import Fleet from "@/components/about/Fleet";
import Process from "@/components/about/Process";
import Faq from "@/components/about/Faq";
import Addons from "@/components/about/Addons";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Mission from "@/components/about/Mission";
import Contact from "@/components/about/Contact";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('on');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    // Initial query and observe
    const elements = document.querySelectorAll('.fu, .fl, .fr, .fade-up, .fade-left, .fade-right');
    elements.forEach((el) => observer.observe(el));

    // Dynamic element detection
    const mutationObserver = new MutationObserver(() => {
      const freshElements = document.querySelectorAll('.fu, .fl, .fr, .fade-up, .fade-left, .fade-right');
      freshElements.forEach((el) => {
        observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const openModal = (title: string, desc: string) => {
    setModalTitle(title);
    setModalDesc(desc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-text selection:bg-gold selection:text-black overflow-x-hidden w-full">
      {/* Navigation Header */}
      <Navbar onOpenModal={openModal} />

      {/* Main About Us Content */}
      <main>
        <HeroAbout />
        <AboutIntro />
        <ServicesDetailed onOpenModal={openModal} />
        <Clients onOpenModal={openModal} />
        <Portfolio onOpenModal={openModal} />
        <Fleet />
        <Process />
        <Faq />
        <Addons />
        <WhyChooseUs onOpenModal={openModal} />
        <Mission />
        <Contact />
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
