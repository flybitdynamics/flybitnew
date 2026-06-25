'use client';
import React, { useEffect } from 'react';

interface ClientsProps {
  onOpenModal?: (title: string, desc: string) => void;
}

export default function Clients({ onOpenModal }: ClientsProps) {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fu');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openModal = (title: string, desc: string) => {
     if (onOpenModal) onOpenModal(title, desc);
     else console.log("Open modal:", title, desc);
  };

  return (
    <section id="clients">
  <div className="clients-head">
    <div className="fl">
      <div className="eyebrow">Our Clientele</div>
      <h2 className="sec-title">Visionaries Who <em>Trust</em> the Sky</h2>
    </div>
    <div className="fr">
      <p className="sec-body">Our clientele reflects a diverse spectrum of visionaries who believe in creating unforgettable experiences — from government institutions to healthcare brands, spiritual trusts to engineering firms.</p>
    </div>
  </div>
  <div className="clients-grid fu">
    <div className="client-card" onClick={() => openModal(`Wedding Clients — JR & JP`, `FLYBIT has worked with prominent families and wedding planners across India for bespoke wedding drone grand finales.`)}><div className="client-name">Het &amp; Rucha</div><div className="client-type">Social · Wedding</div></div>
    <div className="client-card" onClick={() => openModal(`Science City Ahmedabad`, `FLYBIT delivered the ISRO drone show for Science City Ahmedabad — one of our most technically demanding and proudly national shows.`)}><div className="client-name">Science City<br />Ahmedabad</div><div className="client-type">Government · Education</div></div>
    <div className="client-card" onClick={() => openModal(`SciKnowTech`, `Brand launch drone show for SciKnowTech — an education technology company that wanted a high-impact sky debut.`)}><div className="client-name">SciKnowTech</div><div className="client-type">Ed-Tech-Science Fest</div></div>
    <div className="client-card" onClick={() => openModal(`Gujarat Police`, `FLYBIT displayed the Gujarat Police emblem in the sky — a landmark government show requiring special airspace clearances and precision execution.`)}><div className="client-name">DGP Cup-Gujarat Police</div><div className="client-type">Government · Sports Tournament</div></div>
    <div className="client-card" onClick={() => openModal(`Namotsav`, `Cultural festival drone show for Namotsav — a large-scale Gujarati cultural celebration with spiritual and patriotic formations.`)}><div className="client-name">Namotsav</div><div className="client-type">Cultural Festival</div></div>
    <div className="client-card" onClick={() => openModal(`ADK Engineering`, `FLYBIT partnered with ADK Engineering & Solutions for a corporate brand event drone show with custom logo animations.`)}><div className="client-name">ADK Engineering<br />& Solutions</div><div className="client-type">Engineering · Corporate</div></div>
    <div className="client-card" onClick={() => openModal(`Flocare`, `One of FLYBIT's most recognisable corporate shows — the Flocare logo animated in green drones above the Mumbai skyline.`)}><div className="client-name">Flocare</div><div className="client-type">Healthcare · Brand Event</div></div>
    <div className="client-card" onClick={() => openModal(`Acticon Life Sciences`, `Acticon Life Sciences brand event — a science and pharma company that chose a drone show to mark their milestone.`)}><div className="client-name">Acticon Life Sciences</div><div className="client-type">Pharma · Corporate</div></div>
    <div className="client-card" onClick={() => openModal(`Amrutvandna`, `Spiritual gathering drone show for Amrutvandna — one of our most moving shows, featuring deity formations for a spiritual trust.`)}><div className="client-name">Amrutvandna</div><div className="client-type">Spiritual · Trust</div></div>
    <div className="client-card" onClick={() => openModal(`Wedding Clients — JR & JP`, `FLYBIT has worked with prominent families and wedding planners across India for bespoke wedding drone grand finales.`)}><div className="client-name">Prateek &amp; Jenny</div><div className="client-type">Social · Wedding</div></div>
    <div className="client-card" onClick={() => openModal(`Government Events`, `Republic Day, Independence Day and cultural tourism shows for state government clients across Rajasthan and Gujarat.`)}><div className="client-name">Satdham Vidyamandir</div><div className="client-type">School Event</div></div>
    <div className="client-card" onClick={() => openModal(`DGP Cup`, `FLYBIT executed a spectacular drone light show for the DGP Cup, featuring athletic formations, sports animations, and tournament logo reveals in the sky.`)}><div className="client-name">Govindpur</div><div className="client-type">Gramjan Mandal</div></div>
    <div className="client-card" onClick={() => openModal(`DGP Cup`, `FLYBIT executed a spectacular drone light show for the DGP Cup, featuring athletic formations, sports animations, and tournament logo reveals in the sky.`)}><div className="client-name">KKV-Khodaldham</div><div className="client-type">Spiritual Event</div></div>


  </div>
</section>

  );
}
