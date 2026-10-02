import React from 'react';
import { addOnsData } from '../../data/services.ts';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AddOns: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F2F8FF]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
              Essential Pillars of Success
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2F85] tracking-tight [text-wrap:balance]">
              Add-Ons Along the Way
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Beyond university applications, our comprehensive ecosystem provides full support at every pivotal milestone so you never face paperwork ambiguity alone.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A5CC4] hover:text-[#0B2F85] shrink-0"
          >
            <span>View All Advisory Deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 01–05 Numbered List / Grid (Adyapan style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOnsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200/80 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-black text-[#1E90F0] tabular-nums tracking-tighter">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold text-[#0A5CC4] bg-[#F2F8FF] px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0A5CC4] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Included in Full Consultancy Package</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Callout to Book Counselling */}
          <div className="bg-gradient-to-br from-[#0B2F85] to-[#0A1F5C] text-white rounded-2xl p-7 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#33C9FF]">
                Start Today
              </span>
              <h3 className="text-xl font-bold text-white">
                Ready to Map Your Overseas Plan?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Connect with our senior education directors for an initial 45-minute profile assessment and university eligibility report.
              </p>
            </div>

            <div className="pt-6">
              <Link
                to="/contact"
                className="w-full py-3 px-4 rounded-xl bg-white text-[#0B2F85] font-bold text-xs hover:bg-[#F2F8FF] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Schedule In-Office Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
