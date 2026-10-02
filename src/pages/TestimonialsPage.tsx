import React, { useState } from 'react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';
import { testimonialsData, Testimonial } from '../data/testimonials.ts';
import { Star, Award, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import campusImg from '../assets/images/study_abroad_campus_1790920604338.jpg';

interface TestimonialsPageProps {
  onOpenCounselling: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenCounselling }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('All');

  const countries = ['All', 'USA', 'Georgia', 'Germany', 'Ireland', 'Australia'];

  const filtered = selectedCountry === 'All'
    ? testimonialsData
    : testimonialsData.filter(t => t.country === selectedCountry);

  return (
    <div>
      <PageHero
        title="Student Success Stories"
        subtitle="Discover how 10,000+ Flygrad alumni secured top admits, millions in scholarships, and permanent international careers."
        badge="Verified Outcomes"
        breadcrumbs={[{ label: 'Testimonials' }]}
        bgImage={campusImg}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Country Filter Chips */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-14 no-scrollbar">
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCountry(c)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCountry === c
                    ? 'bg-[#0B2F85] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {c === 'All' ? 'All Destinations' : `Study in ${c}`}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Star Rating and Score Highlight */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xl" title={item.country}>{item.flag}</span>
                  </div>

                  <div className="text-xs font-semibold text-[#0A5CC4] bg-[#F2F8FF] px-2.5 py-1 rounded-md inline-block">
                    {item.scoreHighlight}
                  </div>

                  <blockquote className="text-sm text-slate-700 leading-relaxed italic">
                    "{item.quote}"
                  </blockquote>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#33C9FF]/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs font-semibold text-[#0B2F85]">{item.degree}</p>
                    <p className="text-[11px] text-slate-500">{item.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand onOpenCounselling={onOpenCounselling} />
    </div>
  );
};
