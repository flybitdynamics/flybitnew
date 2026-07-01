'use client';

import React, { useState, useEffect, useRef } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onMouseEnterLink?: () => void;
  onMouseLeaveLink?: () => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  title,
  description,
  onMouseEnterLink,
  onMouseLeaveLink,
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');
  
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
    phone: false,
    city: false,
    vision: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const isSubmittingRef = useRef(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Synchronize dropdown selection with eventType field in state
  useEffect(() => {
    setFormData((prev) => ({ ...prev, eventType: selectedEvent }));
  }, [selectedEvent]);

  // Reset form states when the modal is closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setSelectedEvent('');
        setDropdownOpen(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          date: '',
          city: '',
          vision: ''
        });
        setErrors({
          name: false,
          email: false,
          phone: false,
          city: false,
          vision: false
        });
        setSubmitError('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingRef.current) return;
    setSubmitError('');

    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      phone: !formData.phone,
      city: !formData.city,
      vision: !formData.vision
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.phone || newErrors.city || newErrors.vision) {
      setSubmitError('Please fill in all required fields.');
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
        setSubmitted(true);
      } else {
        throw new Error(data.error || 'Failed to submit enquiry.');
      }
    } catch (error: any) {
      setSubmitError(error.message || 'An error occurred. Please try again.');
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Festival / Concert',
    'Product Launch',
    'Government / National',
    'Other'
  ];

  return (
    <div
      id="modal"
      className="fixed inset-0 bg-black/85 z-[500] flex items-center justify-center backdrop-blur-md transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#0c0c0d] border border-border max-w-[560px] w-[90%] p-8 md:p-14 relative rounded-[3px] shadow-2xl">
        <button
          className="absolute top-6 right-6 bg-transparent border-none text-text-muted hover:text-gold text-2xl cursor-pointer md:cursor-none leading-none transition-colors duration-200"
          onClick={onClose}
          onMouseEnter={onMouseEnterLink}
          onMouseLeave={onMouseLeaveLink}
        >
          &times;
        </button>
        <div className="text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-3 font-sans">
          Start Your Journey
        </div>
        <h3 className="font-cormorant text-3xl md:text-[2rem] text-text mb-2 leading-tight">
          {submitted ? 'Enquiry Received!' : title}
        </h3>
        <p className="text-[0.92rem] text-text-muted mb-8 leading-relaxed">
          {submitted
            ? "Thank you for reaching out. Our team will contact you within 24 hours to discuss your event."
            : description}
        </p>

        {!submitted && (title.toLowerCase().includes('book') || title.toLowerCase().includes('quote') || title.toLowerCase().includes('enquiry') || title.toLowerCase().includes('show')) ? (
          <form className="flex flex-col gap-4 font-sans" onSubmit={handleSubmit}>
            {submitError && (
              <div className="text-red-500 text-[0.78rem] bg-red-950/20 border border-red-900/30 p-3 rounded-[2px] leading-relaxed">
                ✦ {submitError}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                disabled={isSubmitting}
                className="bg-dark-3 border text-text p-[0.9rem_1.2rem] text-[0.85rem] rounded-[2px] outline-none hover:border-gold/30 focus:border-gold/40 transition-colors duration-200 cursor-text md:cursor-none w-full"
                style={{
                  borderColor: errors.name ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.12)'
                }}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                disabled={isSubmitting}
                className="bg-dark-3 border text-text p-[0.9rem_1.2rem] text-[0.85rem] rounded-[2px] outline-none hover:border-gold/30 focus:border-gold/40 transition-colors duration-200 cursor-text md:cursor-none w-full"
                style={{
                  borderColor: errors.phone ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.12)'
                }}
              />
            </div>
            <input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={isSubmitting}
              className="bg-dark-3 border text-text p-[0.9rem_1.2rem] text-[0.85rem] rounded-[2px] outline-none hover:border-gold/30 focus:border-gold/40 transition-colors duration-200 cursor-text md:cursor-none w-full"
              style={{
                borderColor: errors.email ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.12)'
              }}
            />
            
            {/* Custom Theme Dropdown Select */}
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => !isSubmitting && setDropdownOpen(!dropdownOpen)}
                className="bg-dark-3 border border-border text-text p-[0.9rem_1.2rem] text-[0.85rem] rounded-[2px] hover:border-gold/30 transition-colors duration-200 cursor-pointer flex justify-between items-center select-none"
              >
                <span className={selectedEvent ? 'text-text' : 'text-text-muted/60'}>
                  {selectedEvent || 'Event Type *'}
                </span>
                <svg 
                  className={`fill-current h-4 w-4 text-text-muted transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-gold' : ''}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>

              {dropdownOpen && (
                <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-[#0d0d0e] border border-border/80 rounded-[2px] shadow-2xl z-[600] overflow-hidden max-h-[220px] overflow-y-auto">
                  {eventTypes.map((type) => (
                    <div
                      key={type}
                      onClick={() => {
                        setSelectedEvent(type);
                        setDropdownOpen(false);
                      }}
                      className="px-5 py-3 hover:bg-gold/10 hover:text-gold text-[0.85rem] text-text-muted/90 cursor-pointer transition-colors duration-150 flex items-center justify-between"
                    >
                      <span>{type}</span>
                      {selectedEvent === type && (
                        <span className="text-gold text-[0.7rem]">✦</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Hidden Select input for standard HTML5 validation support */}
              <select
                required
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                disabled={isSubmitting}
                className="absolute inset-0 opacity-0 pointer-events-none w-full h-full"
              >
                <option value="" disabled>Event Type *</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Event Location (City) *"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                disabled={isSubmitting}
                className="bg-dark-3 border text-text p-[0.9rem_1.2rem] text-[0.85rem] rounded-[2px] outline-none hover:border-gold/30 focus:border-gold/40 transition-colors duration-200 cursor-text md:cursor-none w-full"
                style={{
                  borderColor: errors.city ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.12)'
                }}
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                disabled={isSubmitting}
                style={{ colorScheme: 'dark' }}
                className="bg-dark-3 border border-border text-text p-[0.9rem_1.2rem] text-[0.85rem] rounded-[2px] outline-none hover:border-gold/30 focus:border-gold/40 transition-colors duration-200 cursor-text md:cursor-none w-full"
              />
            </div>
            <textarea
              placeholder="Tell us more — drone count, duration, special formations… *"
              value={formData.vision}
              onChange={(e) => handleInputChange('vision', e.target.value)}
              disabled={isSubmitting}
              className="bg-dark-3 border text-text p-[0.9rem_1.2rem] text-[0.85rem] rounded-[2px] outline-none hover:border-gold/30 focus:border-gold/40 transition-colors duration-200 cursor-text md:cursor-none resize-y min-h-[90px] w-full"
              style={{
                borderColor: errors.vision ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.12)'
              }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-g bg-gold hover:bg-gold-light text-black font-medium p-[1rem_2.8rem] text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer md:cursor-none w-full text-center hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
              onMouseEnter={onMouseEnterLink}
              onMouseLeave={onMouseLeaveLink}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>Send Enquiry →</>
              )}
            </button>
          </form>
        ) : (
          (submitted || !(title.toLowerCase().includes('book') || title.toLowerCase().includes('quote') || title.toLowerCase().includes('enquiry') || title.toLowerCase().includes('show'))) && (
            <button
              onClick={onClose}
              className="border border-text/18 hover:border-gold text-text hover:text-gold font-light px-8 py-3.5 text-[0.72rem] tracking-[0.18em] uppercase rounded-[2px] cursor-pointer md:cursor-none transition-all duration-200 w-full text-center"
              onMouseEnter={onMouseEnterLink}
              onMouseLeave={onMouseLeaveLink}
            >
              Close
            </button>
          )
        )}
      </div>
    </div>
  );
}
