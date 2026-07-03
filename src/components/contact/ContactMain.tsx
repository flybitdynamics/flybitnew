'use client';
import React, { useState, useRef, useEffect } from 'react';
import DatePicker from './DatePicker';

export default function ContactMain() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    city: '',
    vision: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false
  });

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [toastText, setToastText] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isSubmittingRef = useRef(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const eventTypes = [
    'Social / Wedding',
    'Corporate Event',
    'Government / National',
    'Product Launch',
    'Spiritual Gathering',
    'Sports & Entertainment',
    'Technical Partnership',
    'Other'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingRef.current) return;

    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      phone: !formData.phone
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.phone || !formData.city || !formData.vision) {
      setToastType('error');
      setToastText('Please fill in all required fields marked with *.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4500);
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setToastType('success');
        setToastText('Our team will respond within 24 hours. Thank you for reaching out.');
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 4500);

        // Clear Form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          date: '',
          city: '',
          vision: ''
        });
      } else {
        throw new Error(data.error || 'Failed to submit enquiry.');
      }
    } catch (error: any) {
      setToastType('error');
      setToastText(error.message || 'An error occurred. Please try again.');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Dynamic Overlay Success Toast */}
      <div 
        className={`toast fixed bottom-10 right-10 bg-dark-2 border text-text p-6 rounded-[3px] text-[0.82rem] z-[1000] pointer-events-none max-w-[320px] transition-transform duration-500 cubic-bezier(0.16,1,0.3,1) ${
          toastType === 'error' ? 'border-red-500/50' : 'border-gold'
        } ${
          showToast ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'
        }`}
      >
        <div className={`toast-title font-cormorant text-[1.1rem] mb-1 font-semibold ${
          toastType === 'error' ? 'text-red-500' : 'text-gold'
        }`}>
          {toastType === 'error' ? 'Submission Error ✦' : 'Message Sent ✦'}
        </div>
        <p className="text-text-muted text-[0.78rem] leading-[1.6]">
          {toastText || 'Our team will respond within 24 hours. Thank you for reaching out.'}
        </p>
      </div>

      <section id="contact-main" className="p-0 bg-[#0d0d0d] border-t border-border/40">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[2px] bg-border/20 overflow-hidden">
          
          {/* Left Form Column */}
          <div className="form-side bg-[#131313] p-8 md:p-16 fade-up">
            <div className="form-header mb-12">
              <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-3">
                Send an Enquiry
              </div>
              
              <h2 className="sec-title font-cormorant text-[clamp(2rem,4vw,3.2rem)] font-light text-text mb-4 leading-tight">
                Connect <span className="text-gold italic">With Us</span>
              </h2>
              
              <p className="sec-body text-[0.82rem] text-white/90 leading-[1.8] font-sans">
                Fill in the details below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.18em] uppercase text-text-dim font-sans font-medium">
                    Full Name <span className="text-gold ml-0.5">*</span>
                  </label>
                  
                  <input 
                    type="text" 
                    placeholder="Your full name" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="form-input bg-dark-3 border text-text px-5 py-3.5 font-sans text-[0.85rem] rounded-[2px] outline-none transition-all w-full"
                    style={{
                      borderColor: errors.name ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.1)'
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.18em] uppercase text-text-dim font-sans font-medium">
                    Email Address <span className="text-gold ml-0.5">*</span>
                  </label>
                  
                  <input 
                    type="email" 
                    placeholder="your@gmail.com" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="form-input bg-dark-3 border text-text px-5 py-3.5 font-sans text-[0.85rem] rounded-[2px] outline-none transition-all w-full"
                    style={{
                      borderColor: errors.email ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.1)'
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.18em] uppercase text-text-dim font-sans font-medium">
                    Phone Number <span className="text-gold ml-0.5">*</span>
                  </label>
                  
                  <input 
                    type="tel" 
                    placeholder="+91 92274 28262" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="form-input bg-dark-3 border text-text px-5 py-3.5 font-sans text-[0.85rem] rounded-[2px] outline-none transition-all w-full"
                    style={{
                      borderColor: errors.phone ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.1)'
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.18em] uppercase text-text-dim font-sans font-medium">
                    Event Type <span className="text-gold ml-0.5">*</span>
                  </label>
                  
                  <div className="relative" ref={dropdownRef}>
                    <div
                      onClick={() => !isSubmitting && setDropdownOpen(!dropdownOpen)}
                      className="bg-dark-3 border text-text px-5 py-3.5 font-sans text-[0.85rem] rounded-[2px] outline-none transition-all w-full cursor-pointer flex justify-between items-center select-none"
                      style={{
                        borderColor: 'rgba(201,168,76,0.1)'
                      }}
                    >
                      <span className={formData.eventType ? 'text-text' : 'text-text/40'}>
                        {formData.eventType || 'Select event type'}
                      </span>
                      <svg 
                        className={`fill-current h-4 w-4 text-text-muted transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-gold' : ''}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" fill="#7a6530" />
                      </svg>
                    </div>

                    {dropdownOpen && (
                      <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-[#131313] border border-gold/10 rounded-[2px] shadow-2xl z-[600] overflow-hidden max-h-[220px] overflow-y-auto">
                        {eventTypes.map((type) => (
                          <div
                            key={type}
                            onClick={() => {
                              handleInputChange('eventType', type);
                              setDropdownOpen(false);
                            }}
                            className="px-5 py-3 hover:bg-gold/10 hover:text-gold text-[0.85rem] text-text cursor-pointer transition-colors duration-150 flex items-center justify-between"
                          >
                            <span>{type}</span>
                            {formData.eventType === type && (
                              <span className="text-gold text-[0.7rem]">✦</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    <select 
                      value={formData.eventType}
                      onChange={(e) => handleInputChange('eventType', e.target.value)}
                      className="absolute inset-0 opacity-0 pointer-events-none w-full h-full"
                    >
                      <option value="" disabled>Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.18em] uppercase text-text-dim font-sans font-medium">
                    Preferred Event Date
                  </label>
                  
                  <DatePicker 
                    value={formData.date}
                    onChange={(date) => handleInputChange('date', date)}
                    placeholder="dd/mm/yyyy"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.18em] uppercase text-text-dim font-sans font-medium">
                    City <span className="text-gold ml-0.5">*</span>
                  </label>
                  
                  <input 
                    type="text" 
                    placeholder="Event city" 
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="form-input bg-dark-3 border border-gold/10 text-text px-5 py-3.5 font-sans text-[0.85rem] rounded-[2px] outline-none transition-all w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] tracking-[0.18em] uppercase text-text-dim font-sans font-medium">
                  Tell Us About Your Vision <span className="text-gold ml-0.5">*</span>
                </label>
                
                <textarea 
                  placeholder="Describe your event, audience size, special requirements, budget range, and any specific ideas you have in mind…" 
                  value={formData.vision}
                  onChange={(e) => handleInputChange('vision', e.target.value)}
                  className="form-textarea bg-dark-3 border border-gold/10 text-text px-5 py-3.5 font-sans text-[0.85rem] rounded-[2px] outline-none transition-all w-full resize-y min-h-[130px] leading-relaxed"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="form-submit bg-gold hover:bg-gold-light text-black font-semibold py-4 px-8 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 block cursor-none border-none text-center flex items-center justify-center gap-3 w-full mt-2 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.8]">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
              
              <p className="form-note text-[0.68rem] text-text-dim text-center mt-2 tracking-wide font-sans">
                We respond within 24 hours · info@flybitdynamics.com
              </p>
            </form>
          </div>

          {/* Right Info Column */}
          <div className="info-side bg-[#0d0d0d] flex flex-col justify-between">
            <div className="info-top p-8 md:p-16 flex flex-col gap-0 fade-up">
              <div className="form-header mb-10">
                <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-3">
                  Contact Details
                </div>
                <h2 className="sec-title font-cormorant text-[clamp(2rem,4vw,3.2rem)] font-light text-text leading-tight mb-0">
                  Get in <span className="text-gold italic">Touch</span>
                </h2>
              </div>

              {/* Phone info block */}
              <div className="info-block py-8 border-b border-gold/5 flex gap-6 items-start hover:bg-transparent">
                <div className="info-icon w-11 h-11 border border-gold/20 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 rounded-[2px] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-gold stroke-[1.4]">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label text-[0.6rem] tracking-[0.3em] uppercase text-gold-dim mb-1.5 font-sans">
                    Phone
                  </div>
                  <div className="info-val font-sans text-[0.95rem] text-white/90 leading-normal">
                    +91 92274 28262
                  </div>
                  <div className="info-val font-sans text-[0.95rem] text-white/90 leading-normal mb-1">
                    +91 99798 50863
                  </div>
                  <a href="tel:+919227428262" className="info-link inline-flex items-center gap-1.5 text-[0.66rem] tracking-[0.16em] uppercase text-gold-dim hover:text-gold transition-all duration-300 font-sans mt-2">
                    Call Now →
                  </a>
                </div>
              </div>

              {/* Email info block */}
              <div className="info-block py-8 border-b border-gold/5 flex gap-6 items-start hover:bg-transparent">
                <div className="info-icon w-11 h-11 border border-gold/20 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 rounded-[2px] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-gold stroke-[1.4]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label text-[0.6rem] tracking-[0.3em] uppercase text-gold-dim mb-1.5 font-sans">
                    Email
                  </div>
                  <div className="info-val font-sans text-[0.95rem] text-white/90 leading-normal mb-1">
                    info@flybitdynamics.com
                  </div>
                  <a href="mailto:info@flybitdynamics.com" className="info-link inline-flex items-center gap-1.5 text-[0.66rem] tracking-[0.16em] uppercase text-gold-dim hover:text-gold transition-all duration-300 font-sans mt-2">
                    Send Email →
                  </a>
                </div>
              </div>

              {/* Head office block */}
              <div className="info-block py-8 border-b border-gold/5 last:border-b-0 flex gap-6 items-start hover:bg-transparent">
                <div className="info-icon w-11 h-11 border border-gold/20 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 rounded-[2px] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-gold stroke-[1.4]">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label text-[0.6rem] tracking-[0.3em] uppercase text-gold-dim mb-1.5 font-sans">
                    Address
                  </div>
                  <p className="info-sub text-[0.78rem] text-white/90 leading-[1.7] max-w-[280px] font-sans">
                    511, Satyamev Eminence, Science City Road, Sola, Ahmedabad 380060
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Satyamev+Eminence+Science+City+Road+Ahmedabad" 
                    target="_blank" 
                    rel="noreferrer"
                    className="info-link inline-flex items-center gap-1.5 text-[0.66rem] tracking-[0.16em] uppercase text-gold-dim hover:text-gold transition-all duration-300 font-sans mt-2"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Social Link block */}
              <div className="pt-7 border-t border-gold/5">
                <div className="info-label text-[0.6rem] tracking-[0.3em] uppercase text-gold-dim mb-4 font-sans">
                  Follow Us
                </div>
                
                <div className="flex gap-3 flex-wrap">
                  <a 
                    href="https://www.instagram.com/flybitdynamics" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="soc-btn flex items-center gap-2.5 px-5 py-2.5 border border-gold/12 hover:border-gold/40 text-white/90 hover:text-gold text-[0.72rem] tracking-[0.1em] rounded-[2px] transition-all duration-300 font-sans"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.5]">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    Instagram
                  </a>

                  <a 
                    href="https://www.youtube.com/@FlybitDynamics" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="soc-btn flex items-center gap-2.5 px-5 py-2.5 border border-gold/12 hover:border-gold/40 text-white/90 hover:text-gold text-[0.72rem] tracking-[0.1em] rounded-[2px] transition-all duration-300 font-sans"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.5]">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                    </svg>
                    YouTube
                  </a>

                  <a 
                    href="https://www.linkedin.com/company/flybitdynamics/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="soc-btn flex items-center gap-2.5 px-5 py-2.5 border border-gold/12 hover:border-gold/40 text-white/90 hover:text-gold text-[0.72rem] tracking-[0.1em] rounded-[2px] transition-all duration-300 font-sans"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.5]">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            {/* Bottom animated telemetry coordinates indicator removed */}
          </div>

        </div>
      </section>
    </>
  );
}
