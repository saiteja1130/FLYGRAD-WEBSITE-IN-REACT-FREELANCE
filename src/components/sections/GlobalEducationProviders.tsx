import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PARTNERS = [
  {
    id: 'ielts',
    render: () => (
      <span className="text-2xl sm:text-3xl font-black text-[#E31837] tracking-tight">IELTS</span>
    )
  },
  {
    id: 'toefl',
    render: () => (
      <span className="text-xl sm:text-2xl font-black text-[#006699] tracking-wider font-mono">TOEFL</span>
    )
  },
  {
    id: 'pte',
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="px-2 py-0.5 rounded-md bg-[#007A87] text-white text-xs font-bold">PTE</span>
        <span className="text-xs text-slate-500 font-medium">Pearson</span>
      </div>
    )
  },
  {
    id: 'duolingo',
    render: () => (
      <div className="flex items-center gap-1">
        <span className="text-xl">🦉</span>
        <span className="text-lg sm:text-xl font-extrabold text-[#58CC02] tracking-tight">duolingo</span>
      </div>
    )
  },
  {
    id: 'goethe',
    render: () => (
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-full border-2 border-[#82BA00] flex items-center justify-center text-[#82BA00] font-bold text-xs">
          G
        </div>
        <div className="text-left leading-none">
          <span className="text-[10px] font-black uppercase text-slate-800 tracking-tight block">GOETHE</span>
          <span className="text-[9px] font-bold uppercase text-[#82BA00] tracking-tight">INSTITUT</span>
        </div>
      </div>
    )
  },
  {
    id: 'testdaf',
    render: () => (
      <div className="flex items-center gap-1">
        <span className="text-sm font-black text-[#003399]">Test</span>
        <span className="text-sm font-black text-[#CC0000]">DaF</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]" />
      </div>
    )
  },
  {
    id: 'cambridge',
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-bold text-[#A51C30]">🏛️</span>
        <div className="text-left leading-tight">
          <span className="text-[10px] font-bold text-slate-900 block">Cambridge Assessment</span>
          <span className="text-[9px] text-slate-500 font-medium">English</span>
        </div>
      </div>
    )
  },
  {
    id: 'british-council',
    render: () => (
      <div className="text-center">
        <div className="flex items-center justify-center gap-0.5 mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
        </div>
        <span className="text-[9px] sm:text-[10px] font-black uppercase text-[#002B49] tracking-tighter block leading-tight">
          BRITISH COUNCIL
        </span>
      </div>
    )
  },
];

export const GlobalEducationProviders: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.8; // Smooth 60fps auto-scroll speed

    const step = () => {
      if (container && !isHoveredRef.current) {
        container.scrollLeft += speed;

        // Loop seamlessly once scrolled past 1 full set of logos
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 260;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // 3 identical sets to ensure infinite seamless loop
  const loopPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0080FF] block mb-1">
            GLOBAL PARTNERS
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2F85] tracking-tight">
            Trusted by Leading Education Providers
          </h2>
        </motion.div>

        {/* Carousel Slider Row */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          onTouchStart={() => { isHoveredRef.current = true; }}
          onTouchEnd={() => { isHoveredRef.current = false; }}
        >
          {/* Subtle Left & Right Edge Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

          {/* Left Arrow */}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Previous partners"
            className="hidden sm:flex absolute -left-3 lg:-left-4 z-20 w-8 h-8 rounded-full bg-white text-slate-500 hover:text-[#0080FF] shadow-sm border border-slate-200 items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Logos Row */}
          <div
            ref={scrollRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="w-full flex items-center gap-8 sm:gap-12 overflow-x-auto py-3 px-2 no-scrollbar scroll-smooth"
          >
            {loopPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="shrink-0 flex items-center justify-center px-4 py-2 hover:opacity-100 opacity-85 transition-opacity"
              >
                {partner.render()}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll('right')}
            aria-label="Next partners"
            className="hidden sm:flex absolute -right-3 lg:-right-4 z-20 w-8 h-8 rounded-full bg-white text-slate-500 hover:text-[#0080FF] shadow-sm border border-slate-200 items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
