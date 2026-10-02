import React from 'react';
import { globalPartners } from '../../data/programs.ts';
import { ShieldCheck, Award, CheckCircle, Globe } from 'lucide-react';

const universityPartners = [
  "Northeastern University",
  "RWTH Aachen",
  "UT Dallas",
  "Arizona State University",
  "University of Manchester",
  "Trinity College Dublin",
  "University of Melbourne",
  "TUM Munich",
  "Batumi Shota Rustaveli",
  "Purdue University",
  "University of Windsor",
  "University of Leeds"
];

export const PartnersMarquee: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recognised & Certified Cards Row */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
            Official Accreditation & Testing Bodies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85]">
            Recognised & Certified Worldwide
          </h2>
        </div>

        {/* 4 Trust & Accreditation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E90F0] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">AIRC Certified</div>
              <div className="text-[11px] text-slate-500">American Recruitment</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">British Council</div>
              <div className="text-[11px] text-slate-500">Official IELTS Partner</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">NMC & WHO</div>
              <div className="text-[11px] text-slate-500">Medical University Ties</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0A5CC4] flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">ICEF Screened</div>
              <div className="text-[11px] text-slate-500">Verified Global Agency</div>
            </div>
          </div>
        </div>

        {/* Global Testing Bodies Pill Grid */}
        <div className="text-center mb-6">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Official Testing & Exam Partners
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-14">
          {globalPartners.map((p, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:border-[#1E90F0] hover:text-[#0A5CC4] transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#1E90F0]" />
              <span>{p.name}</span>
              <span className="text-slate-400 font-normal">({p.type})</span>
            </div>
          ))}
        </div>

        {/* Infinite University Marquee (Grayscale, color on hover) */}
        <div className="relative pt-6 border-t border-slate-200">
          <div className="text-center mb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Selected Institutional Partners & University Destinations
          </div>

          <div className="flex animate-marquee-fast items-center gap-8 whitespace-nowrap">
            {[...universityPartners, ...universityPartners].map((uni, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#0A5CC4] hover:border-[#33C9FF] hover:shadow-xs transition-all duration-200 cursor-default"
              >
                {uni}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
