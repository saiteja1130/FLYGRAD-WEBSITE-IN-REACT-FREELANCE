import React, { useState } from 'react';
import { Award, ShieldCheck, Users, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const credentialsList = [
  {
    icon: Award,
    title: "Trusted Counsellors",
    desc: "Certified and experienced education experts."
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine Guidance",
    desc: "Transparent and ethical process."
  },
  {
    icon: Users,
    title: "Global Network",
    desc: "Partnerships with top universities worldwide."
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    desc: "Thousands of successful student journeys."
  }
];

export const CredentialsAndPartners: React.FC = () => {
  const [partnerPage, setPartnerPage] = useState(0);

  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: OUR CREDENTIALS */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                OUR CREDENTIALS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight">
                Recognised &amp; Certified
              </h2>
            </div>

            {/* 4 Cards in 2x2 or 4-row grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
              {credentialsList.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#00D2FF]/20 text-[#0080FF] flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-normal leading-tight">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: OUR PARTNERS */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                OUR PARTNERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight">
                Top Universities &amp; Test Bodies
              </h2>
            </div>

            {/* Partner Logos Card with arrows */}
            <div className="relative flex items-center">
              {/* Left Arrow Button */}
              <button
                onClick={() => setPartnerPage((p) => (p === 0 ? 1 : 0))}
                aria-label="Previous partners"
                className="absolute -left-3 sm:-left-5 z-10 w-9 h-9 rounded-full bg-white text-slate-600 hover:text-[#0080FF] shadow-md border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm min-h-[190px] flex flex-col justify-center">
                {/* 2 Rows of Logos */}
                <div className="space-y-6">
                  {/* Row 1: Test Bodies */}
                  <div className="grid grid-cols-5 gap-3 sm:gap-4 items-center justify-items-center">
                    {/* IELTS */}
                    <div className="flex items-center justify-center h-10 hover:opacity-100 opacity-90 transition-opacity">
                      <span className="text-xl sm:text-2xl font-black text-[#E31837] tracking-tight">IELTS</span>
                    </div>

                    {/* TOEFL */}
                    <div className="flex items-center justify-center h-10 hover:opacity-100 opacity-90 transition-opacity">
                      <span className="text-lg sm:text-xl font-black text-[#006699] tracking-wider font-mono">TOEFL</span>
                    </div>

                    {/* Pearson PTE */}
                    <div className="flex items-center justify-center h-10 hover:opacity-100 opacity-90 transition-opacity">
                      <div className="flex items-center gap-1">
                        <span className="w-5 h-5 rounded-full bg-[#007A87] text-white text-[10px] font-bold flex items-center justify-center">P</span>
                        <span className="text-xs sm:text-sm font-bold text-[#007A87]">PTE</span>
                      </div>
                    </div>

                    {/* Duolingo */}
                    <div className="flex items-center justify-center h-10 hover:opacity-100 opacity-90 transition-opacity">
                      <div className="flex items-center gap-1">
                        <span className="text-base">🦉</span>
                        <span className="text-xs sm:text-sm font-extrabold text-[#58CC02] tracking-tight">duolingo</span>
                      </div>
                    </div>

                    {/* British Council */}
                    <div className="flex items-center justify-center h-10 hover:opacity-100 opacity-90 transition-opacity">
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

                  {/* Row 2: Prestigious Universities */}
                  <div className="grid grid-cols-5 gap-3 sm:gap-4 items-center justify-items-center pt-2 border-t border-slate-100">
                    {/* Harvard */}
                    <div className="flex items-center justify-center h-10 text-center hover:opacity-100 opacity-90 transition-opacity">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-[#A51C30]">🛡️</span>
                        <span className="text-[10px] sm:text-xs font-serif font-black text-[#A51C30] uppercase tracking-wider">
                          HARVARD
                        </span>
                      </div>
                    </div>

                    {/* MIT */}
                    <div className="flex items-center justify-center h-10 text-center hover:opacity-100 opacity-90 transition-opacity">
                      <div className="flex items-center gap-1">
                        <span className="text-base sm:text-lg font-black text-[#8B0000] tracking-tight font-mono">MIT</span>
                      </div>
                    </div>

                    {/* Stanford */}
                    <div className="flex items-center justify-center h-10 text-center hover:opacity-100 opacity-90 transition-opacity">
                      <span className="text-xs sm:text-sm font-serif font-bold text-[#8C1515] tracking-tight">
                        Stanford
                      </span>
                    </div>

                    {/* Oxford */}
                    <div className="flex items-center justify-center h-10 text-center hover:opacity-100 opacity-90 transition-opacity">
                      <div className="flex items-center gap-1">
                        <span className="text-xs">🏛️</span>
                        <span className="text-[9px] sm:text-[10px] font-serif font-bold text-[#002147] uppercase leading-tight">
                          OXFORD
                        </span>
                      </div>
                    </div>

                    {/* UC San Diego */}
                    <div className="flex items-center justify-center h-10 text-center hover:opacity-100 opacity-90 transition-opacity">
                      <span className="text-[10px] sm:text-xs font-sans font-bold text-[#182B49] tracking-tight">
                        UC San Diego
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={() => setPartnerPage((p) => (p === 0 ? 1 : 0))}
                aria-label="Next partners"
                className="absolute -right-3 sm:-right-5 z-10 w-9 h-9 rounded-full bg-white text-slate-600 hover:text-[#0080FF] shadow-md border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-1">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setPartnerPage(idx % 2)}
                  aria-label={`Page ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    partnerPage === idx % 2
                      ? 'bg-[#0080FF] scale-125'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
