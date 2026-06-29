'use client';

import React, { useState, useEffect, useRef } from 'react';

interface DatePickerProps {
  value: string; // YYYY-MM-DD
  onChange: (date: string) => void;
  placeholder?: string;
  error?: boolean;
}

export default function DatePicker({ value, onChange, placeholder = 'Select date', error }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState<Date>(value ? new Date(value) : new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Generate calendar days
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const prevMonthTotalDays = new Date(year, month, 0).getDate();

  const days: { day: number; isCurrentMonth: boolean; dateString: string }[] = [];

  // Previous month padding days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const d = prevMonthTotalDays - i;
    const prevMonthDate = new Date(year, month - 1, d);
    days.push({
      day: d,
      isCurrentMonth: false,
      dateString: formatDate(prevMonthDate),
    });
  }

  // Current month days
  for (let i = 1; i <= totalDays; i++) {
    const currDate = new Date(year, month, i);
    days.push({
      day: i,
      isCurrentMonth: true,
      dateString: formatDate(currDate),
    });
  }

  // Next month padding days
  const remainingCells = 42 - days.length; // standard 6 rows * 7 days
  for (let i = 1; i <= remainingCells; i++) {
    const nextMonthDate = new Date(year, month + 1, i);
    days.push({
      day: i,
      isCurrentMonth: false,
      dateString: formatDate(nextMonthDate),
    });
  }

  function formatDate(d: Date) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  const handleDayClick = (dateString: string) => {
    onChange(dateString);
    setIsOpen(false);
  };

  // Human readable display date
  const getDisplayDate = () => {
    if (!value) return '';
    const dateObj = new Date(value);
    if (isNaN(dateObj.getTime())) return '';
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const todayStr = formatDate(new Date());

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Trigger Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-dark-3 border text-text px-5 py-3.5 font-sans text-[0.85rem] rounded-[2px] outline-none transition-all w-full cursor-pointer flex justify-between items-center select-none"
        style={{
          borderColor: error ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.1)'
        }}
      >
        <span className={value ? 'text-text' : 'text-text/40'}>
          {getDisplayDate() || placeholder}
        </span>
        <svg 
          className={`h-4.5 w-4.5 text-text-muted transition-transform duration-300 ${isOpen ? 'text-gold' : ''}`}
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 md:right-auto md:w-[320px] bg-[#131313] border border-gold/10 rounded-[2px] shadow-2xl z-[600] p-4 select-none animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1.5 hover:bg-gold/10 rounded-[2px] text-gold transition-colors duration-150 cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <span className="font-cormorant text-[1.1rem] text-text font-semibold tracking-wider">
              {monthNames[month]} {year}
            </span>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1.5 hover:bg-gold/10 rounded-[2px] text-gold transition-colors duration-150 cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {weekdays.map((day, idx) => (
              <span key={idx} className="text-[0.7rem] text-text-dim/60 font-semibold tracking-widest">
                {day}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((item, idx) => {
              const isSelected = value === item.dateString;
              const isToday = todayStr === item.dateString;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDayClick(item.dateString)}
                  className={`
                    h-8 w-full text-[0.8rem] rounded-[2px] transition-all duration-150 flex items-center justify-center font-sans cursor-pointer
                    ${!item.isCurrentMonth ? 'text-text/20 hover:text-text/40' : 'text-text'}
                    ${isSelected ? 'bg-gold text-dark font-semibold' : 'hover:bg-gold/15 hover:text-gold'}
                    ${isToday && !isSelected ? 'border border-gold/45 text-gold' : ''}
                  `}
                >
                  {item.day}
                </button>
              );
            })}
          </div>

          {/* Footer Actions */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gold/5 text-[0.75rem]">
            <button
              type="button"
              onClick={() => {
                onChange('');
                setIsOpen(false);
              }}
              className="text-text-dim hover:text-text transition-colors duration-150 cursor-pointer"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => {
                handleDayClick(todayStr);
              }}
              className="text-gold hover:underline transition-colors duration-150 cursor-pointer"
            >
              Today
            </button>
          </div>
        </div>
      )}

      {/* Hidden input for native compatibility if needed */}
      <input
        type="hidden"
        value={value}
        readOnly
      />
    </div>
  );
}
