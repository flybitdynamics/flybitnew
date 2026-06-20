'use client';

import React, { useState, useEffect } from 'react';
import { encodeServiceImagePath } from '@/lib/services/serviceImages';

const SLIDE_INTERVAL_MS = 3500;
const SLIDE_DURATION_MS = 1000;

interface ServiceImageSliderProps {
  images: readonly string[];
  alt: string;
}

export default function ServiceImageSlider({ images, alt }: ServiceImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slideCount = images.length;
  const extendedImages = slideCount > 1 ? [...images, images[0]] : images;

  useEffect(() => {
    setCurrentIndex(0);
    setIsTransitioning(true);
  }, [images]);

  useEffect(() => {
    if (slideCount <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [slideCount, images]);

  useEffect(() => {
    if (slideCount <= 1) return;

    if (currentIndex === slideCount) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, SLIDE_DURATION_MS);
      return () => clearTimeout(timeout);
    }

    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTransitioning, slideCount]);

  if (slideCount === 0) return null;

  if (slideCount === 1) {
    return (
      <img
        src={encodeServiceImagePath(images[0])}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
      />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`flex w-full h-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedImages.map((src, idx) => (
          <div key={`${src}-${idx}`} className="relative flex-shrink-0 w-full h-full">
            <img
              src={encodeServiceImagePath(src)}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover object-center"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}
