'use client';

import React, { useState, useEffect, useRef } from 'react';
import FadeUp from './FadeUp';

interface PricingProps {
  onOpenModal: (title: string, description: string) => void;
}

const DRONE_STEPS = [100, 200, 300];
const STEP_PCTS = [0, 50, 100];

type PicType = 'logo' | 'numbers' | 'design';

interface PriceMap {
  [key: number]: number;
}

const PRICES: Record<PicType, PriceMap> = {
  logo: { 100: 250000, 200: 400000, 300: 520000 },
  numbers: { 100: 180000, 200: 280000, 300: 400000 },
  design: { 100: 350000, 200: 550000, 300: 700000 },
};

const NOTES: Record<PicType, string[]> = {
  logo: [
    '100 drones · Logo formation · Up to 4 min',
    '200 drones · Logo formation · Up to 5 min',
    '300 drones · Logo formation · Up to 6 min',
  ],
  numbers: [
    '100 drones · Numbers formation · Up to 4 min',
    '200 drones · Numbers formation · Up to 5 min',
    '300 drones · Numbers formation · Up to 6 min',
  ],
  design: [
    '100 drones · Design formation · Up to 4 min',
    '200 drones · Design formation · Up to 5 min',
    '300 drones · Design formation · Up to 6 min',
  ],
};

const LOGO_IMAGES: Record<number, string> = {
  100: '/Transperent_pricing/logo/100.png',
  200: '/Transperent_pricing/logo/200.png',
  300: '/Transperent_pricing/logo/300.png',
};

const DESIGN_IMAGES: Record<number, string> = {
  100: '/Transperent_pricing/Design/flybit_100.png',
  200: '/Transperent_pricing/Design/flybit_200.png',
  300: '/Transperent_pricing/Design/flybit_300.png',
};

const NUMBERS_IMAGES: Record<number, string> = {
  100: '/Transperent_pricing/number/100.png',
  200: '/Transperent_pricing/number/200.png',
  300: '/Transperent_pricing/number/300.png',
};

const PRICING_IMAGES: Partial<Record<PicType, Record<number, string>>> = {
  logo: LOGO_IMAGES,
  numbers: NUMBERS_IMAGES,
  design: DESIGN_IMAGES,
};



// Pure functions for generating coordinate dots
function getDigitPoints(digit: string, cx: number, cy: number, scale: number, density: number) {
  const segs: Record<string, number[][]> = {
    '0': [[1,0],[2,0],[1,6],[2,6],[0,1],[0,2],[0,3],[0,4],[0,5],[3,1],[3,2],[3,3],[3,4],[3,5]],
    '1': [[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[1,1]],
    '2': [[0,0],[1,0],[2,0],[3,0],[3,1],[3,2],[2,3],[1,3],[0,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6]],
    '3': [[0,0],[1,0],[2,0],[3,0],[3,1],[3,2],[3,3],[2,3],[3,4],[3,5],[3,6],[2,6],[1,6],[0,6]],
    '4': [[0,0],[0,1],[0,2],[0,3],[1,3],[2,3],[3,3],[3,0],[3,1],[3,2],[3,4],[3,5],[3,6]],
    '5': [[0,0],[1,0],[2,0],[3,0],[0,1],[0,2],[0,3],[1,3],[2,3],[3,4],[3,5],[0,6],[1,6],[2,6],[3,6]],
    '6': [[0,0],[1,0],[2,0],[0,1],[0,2],[0,3],[1,3],[2,3],[0,4],[0,5],[3,4],[3,5],[0,6],[1,6],[2,6]],
    '7': [[0,0],[1,0],[2,0],[3,0],[3,1],[3,2],[2,3],[2,4],[1,5],[1,6]],
    '8': [[1,0],[2,0],[0,1],[3,1],[0,2],[3,2],[1,3],[2,3],[0,4],[3,4],[0,5],[3,5],[1,6],[2,6]],
    '9': [[1,0],[2,0],[0,1],[3,1],[0,2],[3,2],[1,3],[2,3],[3,4],[3,5],[1,6],[2,6]],
  };
  const grid = segs[digit] || segs['0'];
  const pts: { x: number; y: number }[] = [];
  const cellW = scale / 3;
  const cellH = scale / 6;
  const offX = cx - scale / 2;
  const offY = cy - scale / 2;
  grid.forEach(([gx, gy]) => {
    for (let d = 0; d < density; d++) {
      const jx = (Math.random() - 0.5) * cellW * 0.9;
      const jy = (Math.random() - 0.5) * cellH * 0.9;
      pts.push({ x: offX + gx * cellW + cellW / 2 + jx, y: offY + gy * cellH + cellH / 2 + jy });
    }
  });
  return pts;
}

interface ConstellationPoint {
  x: number;
  y: number;
  r: number;
  rgb: string;
}

function getFormationPoints(type: PicType, count: number, W: number, H: number): ConstellationPoint[] {
  const cx = W / 2, cy = H / 2;
  const pts: ConstellationPoint[] = [];

  if (type === 'numbers') {
    const labels = ['1', '0', '0'];
    if (count >= 200) labels[0] = '2';
    if (count >= 300) labels[0] = '3';

    const numDigs = labels.length;
    const spacing = Math.min(W / (numDigs + 1) * 0.9, 120);
    const startX = cx - (numDigs - 1) * spacing / 2;
    const density = Math.max(6, Math.min(22, Math.floor(count / numDigs / 18)));

    labels.forEach((digit, di) => {
      const ox = startX + di * spacing;
      const digitPts = getDigitPoints(digit, ox, cy, spacing * 0.38, density);
      const rgb = di % 2 === 0 ? '201,168,76' : '240,208,128';
      digitPts.forEach((p) => pts.push({ ...p, rgb, r: 2.5 }));
    });
  } else if (type === 'logo') {
    const R = Math.min(W, H) * 0.32, r2 = R * 0.55;
    const outerN = Math.floor(count * 0.55);
    const innerN = count - outerN;
    for (let i = 0; i < outerN; i++) {
      const a = (i / outerN) * Math.PI * 2;
      const jx = (Math.random() - 0.5) * 8, jy = (Math.random() - 0.5) * 8;
      pts.push({ x: cx + Math.cos(a) * R + jx, y: cy + Math.sin(a) * R + jy, r: 2.8, rgb: '201,168,76' });
    }
    for (let i = 0; i < innerN; i++) {
      const a = (i / innerN) * Math.PI * 2;
      pts.push({ x: cx + Math.cos(a) * r2, y: cy + Math.sin(a) * r2, r: 2.2, rgb: '240,208,128' });
    }
    pts.push({ x: cx, y: cy, r: 4, rgb: '255,230,150' });
  } else if (type === 'design') {
    const spikes = 8, outerR = Math.min(W, H) * 0.3, innerR = outerR * 0.45;
    const starN = Math.floor(count * 0.6);
    for (let i = 0; i < starN; i++) {
      const a = (i / starN) * Math.PI * 2;
      const isOuter = Math.sin(a * spikes) > 0;
      const rad = isOuter ? outerR : innerR;
      const jx = (Math.random() - 0.5) * 6, jy = (Math.random() - 0.5) * 6;
      pts.push({ x: cx + Math.cos(a) * rad + jx, y: cy + Math.sin(a) * rad + jy, r: 2.5, rgb: '201,168,76' });
    }
    const orbitN = count - starN;
    for (let i = 0; i < orbitN; i++) {
      const a = (i / orbitN) * Math.PI * 2;
      pts.push({ x: cx + Math.cos(a) * outerR * 1.35, y: cy + Math.sin(a) * outerR * 1.35, r: 1.8, rgb: '120,90,30' });
    }
  }
  return pts;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  const [picType, setPicType] = useState<PicType>('numbers');
  const [stepIdx, setStepIdx] = useState(1); // 200 default
  const [isDragging, setIsDragging] = useState(false);


  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const currentDrones = DRONE_STEPS[stepIdx];
  const currentPct = STEP_PCTS[stepIdx];

  const formatPrice = (price: number) => {
    return '₹' + price.toLocaleString('en-IN');
  };

  const handleTrackClickOrDrag = (clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    let closest = 0;
    let minD = 999;
    STEP_PCTS.forEach((p, i) => {
      const d = Math.abs(pct - p);
      if (d < minD) {
        minD = d;
        closest = i;
      }
    });
    setStepIdx(closest);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleTrackClickOrDrag(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleTrackClickOrDrag(e.touches[0].clientX);
  };

  // Window drag listeners
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      handleTrackClickOrDrag(e.clientX);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Touch drag listeners
  useEffect(() => {
    if (!isDragging) return;

    const handleTouchMove = (e: TouchEvent) => {
      handleTrackClickOrDrag(e.touches[0].clientX);
    };
    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  // Canvas drawing loop (unused — all picture types use static images)
  useEffect(() => {
    if (PRICING_IMAGES[picType]) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pts = getFormationPoints(picType, currentDrones, W, H);
    let animFrame: number;
    let tick = 0;

    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      tick++;
      pts.forEach((p, i) => {
        const pulse = 0.5 + 0.5 * Math.sin(tick * 0.04 + i * 0.3);
        const size = p.r * (0.85 + 0.15 * pulse);
        const alpha = 0.5 + 0.5 * pulse;

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
        grd.addColorStop(0, `rgba(${p.rgb}, ${(alpha * 0.6).toFixed(2)})`);
        grd.addColorStop(1, `rgba(${p.rgb}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.rgb}, ${alpha.toFixed(2)})`;
        ctx.fill();
      });
      animFrame = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [picType, stepIdx]);

  return (
    <section
      id="pricing"
      className="bg-black px-6 md:px-20  overflow-hidden select-none"
    >
      <div className="pricing-wrap grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[480px]">
        {/* Left Side Controls */}
        <FadeUp className="pricing-left font-sans">
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
            Transparent Pricing
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-4">
            We Tailor Every Show to Your <em className="text-gold italic">Budget</em>
          </h2>
          <p className="text-[0.9rem] text-text-muted leading-relaxed mb-12 max-w-[500px]">
            We tailor our show to your budget and imagination. Wanna see how the price changes? Play with the options below — or{' '}
            <button
              onClick={() =>
                onOpenModal(
                  'Full Pricing',
                  'Get a detailed custom quote for your event. Every show is priced by drone count, duration, formation complexity, and location. Contact us for an exact proposal.'
                )
              }
              className="text-gold border-b border-gold/30 hover:border-gold cursor-pointer md:cursor-none transition-colors duration-200 bg-transparent py-0"
            >
              get a full quote
            </button>
            .
          </p>

          {/* Picture Type selector */}
          <div className="ctrl-label text-[0.6rem] tracking-[0.35em] uppercase text-text-dim mb-5">
            Picture Type
          </div>
          <div className="pic-tabs flex gap-8 mb-10 border-b border-border/10 pb-2">
            {(['logo', 'numbers', 'design'] as PicType[]).map((type) => (
              <button
                key={type}
                onClick={() => setPicType(type)}
                className={`pic-tab relative font-sans text-[1.05rem] bg-transparent border-none p-0 pb-2 hover:text-text cursor-pointer md:cursor-none transition-all duration-200 capitalize ${
                  picType === type ? 'text-text font-medium' : 'text-text-muted'
                }`}
              >
                {type}
                <div
                  className={`absolute bottom-[-2.5px] left-0 right-0 h-[2px] transition-all duration-300 ${
                    picType === type ? 'bg-gold' : 'bg-transparent'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Drone Count Markers */}
          <div className="ctrl-label text-[0.6rem] tracking-[0.35em] uppercase text-text-dim mb-5">
            Count of Drones
          </div>
          <div className="count-markers flex justify-between mb-3 text-[0.78rem]">
            {DRONE_STEPS.map((step, idx) => (
              <span
                key={step}
                className={`transition-colors duration-200 ${
                  stepIdx === idx ? 'text-gold font-medium' : 'text-text-dim'
                }`}
              >
                {step}
              </span>
            ))}
          </div>

          {/* Slider track */}
          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="slider-track relative h-1 bg-white/8 rounded-[2px] mb-10 cursor-pointer md:cursor-none select-none"
          >
            <div
              className="slider-fill absolute left-0 top-0 h-1 bg-gradient-to-r from-gold-dim to-gold rounded-[2px] pointer-events-none"
              style={{ width: `${currentPct}%` }}
            />
            <div
              className="slider-thumb absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full pointer-events-none select-none"
              style={{
                left: `${currentPct}%`,
                boxShadow: '0 0 0 4px rgba(201, 168, 76, 0.15)',
              }}
            />
          </div>

          {/* Price display panel */}
          {/* <div className="price-display flex items-baseline gap-2.5 mb-2">
            <span className="price-from text-[0.7rem] tracking-[0.15em] uppercase text-text-dim">
              Starting from
            </span>
            <span className="price-val font-bebas text-5xl md:text-[3.8rem] text-gold leading-none tracking-[0.04em]">
              {formatPrice(PRICES[picType][currentDrones])}
            </span>
          </div> */}

          {/* <div className="price-note text-[0.72rem] text-text-dim tracking-[0.05em] mb-10">
            {NOTES[picType][stepIdx]} · Pan-India
          </div> */}

          <div className="pricing-cta-row flex gap-4 items-center flex-wrap">
            <button
              onClick={() =>
                onOpenModal(
                  'Get Your Quote',
                  'Share your event details below and our pricing team will send you a custom proposal within 24 hours.'
                )
              }
              className="bg-gold hover:bg-gold-light text-black font-medium px-11 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer md:cursor-none hover:-translate-y-1 font-sans"
            >
              Get Custom Quote
            </button>
          </div>
        </FadeUp>

        {/* Right Side Canvas Preview */}
        <FadeUp delay={100} className="pricing-right relative flex items-center justify-center font-sans">
          <div className="formation-stage relative w-full max-w-[520px] aspect-[1.15] bg-white/[0.015] border border-gold/[0.06] rounded-lg overflow-hidden flex items-center justify-center">
            {/* Soft inner glow behind canvas */}
            <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

            {PRICING_IMAGES[picType] ? (
              <img
                src={PRICING_IMAGES[picType]![currentDrones]}
                alt={`${picType} formation with ${currentDrones} drones`}
                className="w-full h-full object-cover block z-10 pointer-events-none"
              />
            ) : (
              <canvas
                ref={canvasRef}
                className="w-full h-full block z-10 pointer-events-none"
              />
            )}

            <div className="formation-label absolute bottom-5 left-1/2 -translate-x-1/2 font-bebas text-[0.7rem] tracking-[0.3em] text-gold/25 pointer-events-none select-none uppercase">
              {picType} · {currentDrones} Drones · Flybit Dynamics
            </div>

            <div className="formation-count-badge absolute top-5 right-5 font-bebas text-[0.8rem] tracking-[0.2em] text-gold/50 border border-gold/12 px-3 py-1 rounded-[2px] pointer-events-none select-none">
              {currentDrones.toLocaleString()} Drones
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
