import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GlobalEducationProviders: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0080FF] block mb-1">
            GLOBAL PARTNERS
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2F85] tracking-tight">
            Trusted by Leading Education Providers
          </h2>
        </div>

        {/* Carousel Slider Row */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            aria-label="Previous partners"
            className="hidden sm:flex absolute -left-4 z-10 w-8 h-8 rounded-full bg-white text-slate-500 hover:text-[#0080FF] shadow-sm border border-slate-200 items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Logos Row */}
          <div className="w-full flex items-center justify-between gap-6 sm:gap-8 overflow-x-auto py-3 px-2 no-scrollbar">
            
            {/* IELTS */}
            <div className="shrink-0 flex items-center justify-center px-4 py-2 hover:opacity-100 opacity-90 transition-opacity">
              <span className="text-2xl sm:text-3xl font-black text-[#E31837] tracking-tight">IELTS</span>
            </div>

            {/* TOEFL */}
            <div className="shrink-0 flex items-center justify-center px-4 py-2 hover:opacity-100 opacity-90 transition-opacity">
              <div className="flex items-center gap-1">
                <span className="text-xl sm:text-2xl font-black text-[#006699] tracking-wider font-mono">TOEFL</span>
              </div>
            </div>

            {/* PTE */}
            <div className="shrink-0 flex items-center justify-center px-4 py-2 hover:opacity-100 opacity-90 transition-opacity">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md bg-[#007A87] text-white text-xs font-bold">PTE</span>
                <span className="text-xs text-slate-500 font-medium">Pearson</span>
              </div>
            </div>

            {/* Duolingo */}
            <div className="shrink-0 flex items-center justify-center px-4 py-2 hover:opacity-100 opacity-90 transition-opacity">
              <div className="flex items-center gap-1">
                <span className="text-xl">🦉</span>
                <span className="text-lg sm:text-xl font-extrabold text-[#58CC02] tracking-tight">duolingo</span>
              </div>
            </div>

            {/* Goethe-Institut */}
            <div className="shrink-0 flex items-center justify-center px-4 py-2 hover:opacity-100 opacity-90 transition-opacity">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full border-2 border-[#82BA00] flex items-center justify-center text-[#82BA00] font-bold text-xs">
                  G
                </div>
                <div className="text-left leading-none">
                  <span className="text-[10px] font-black uppercase text-slate-800 tracking-tight block">GOETHE</span>
                  <span className="text-[9px] font-bold uppercase text-[#82BA00] tracking-tight">INSTITUT</span>
                </div>
              </div>
            </div>

            {/* TestDaF */}
            <div className="shrink-0 flex items-center justify-center px-4 py-2 hover:opacity-100 opacity-90 transition-opacity">
              <div className="flex items-center gap-1">
                <span className="text-sm font-black text-[#003399]">Test</span>
                <span className="text-sm font-black text-[#CC0000]">DaF</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]" />
              </div>
            </div>

            {/* Cambridge Assessment English */}
            <div className="shrink-0 flex items-center justify-center px-4 py-2 hover:opacity-100 opacity-90 transition-opacity">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#A51C30]">🏛️</span>
                <div className="text-left leading-tight">
                  <span className="text-[10px] font-bold text-slate-900 block">Cambridge Assessment</span>
                  <span className="text-[9px] text-slate-500 font-medium">English</span>
                </div>
              </div>
            </div>

            {/* British Council */}
            <div className="shrink-0 flex items-center justify-center px-4 py-2 hover:opacity-100 opacity-90 transition-opacity">
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
            </div>

          </div>

          {/* Right Arrow */}
          <button
            aria-label="Next partners"
            className="hidden sm:flex absolute -right-4 z-10 w-8 h-8 rounded-full bg-white text-slate-500 hover:text-[#0080FF] shadow-sm border border-slate-200 items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
