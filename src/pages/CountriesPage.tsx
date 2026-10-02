import React, { useState } from 'react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';
import { countriesData, CountryData } from '../data/countries.ts';
import { Search, Globe, Check, ArrowRight, DollarSign, Clock, Briefcase } from 'lucide-react';
import campusImg from '../assets/images/study_abroad_campus_1790920604338.jpg';

interface CountriesPageProps {
  onOpenCounselling: (countryName?: string) => void;
}

export const CountriesPage: React.FC<CountriesPageProps> = ({ onOpenCounselling }) => {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'ms' | 'mbbs' | 'europe'>('all');

  const filteredCountries = countriesData.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.popularFor.some(p => p.toLowerCase().includes(search.toLowerCase()));

    if (!matchesSearch) return false;

    if (filterCategory === 'mbbs') return c.id.includes('georgia') || c.id.includes('kazakhstan');
    if (filterCategory === 'ms') return !c.id.includes('georgia') && !c.id.includes('kazakhstan');
    if (filterCategory === 'europe') return ['uk', 'germany', 'ireland', 'georgia'].includes(c.id);

    return true;
  });

  return (
    <div>
      <PageHero
        title="Global Study Destinations"
        subtitle="Explore top university hubs across North America, Europe, Central Asia, and APAC with transparent tuition and work rights data."
        badge="Countries & Campuses"
        breadcrumbs={[{ label: 'Countries' }]}
        bgImage={campusImg}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls: Search and Interactive Filter Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs overflow-x-auto w-full md:w-auto">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filterCategory === 'all' ? 'bg-[#0B2F85] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Countries ({countriesData.length})
              </button>
              <button
                onClick={() => setFilterCategory('ms')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filterCategory === 'ms' ? 'bg-[#0B2F85] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                MS & STEM Hubs
              </button>
              <button
                onClick={() => setFilterCategory('mbbs')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filterCategory === 'mbbs' ? 'bg-[#0B2F85] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                MBBS Overseas
              </button>
              <button
                onClick={() => setFilterCategory('europe')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filterCategory === 'europe' ? 'bg-[#0B2F85] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Europe
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search country or course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
              />
            </div>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCountries.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{c.flag}</span>
                    <span className="text-[11px] font-semibold text-[#0A5CC4] bg-[#F2F8FF] px-2.5 py-1 rounded-md">
                      {c.visaProcessing}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{c.name}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{c.tagline}</p>
                  </div>

                  {/* Financial & Work Metrics */}
                  <div className="bg-slate-50 rounded-2xl p-4 space-y-2 text-xs border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Avg Tuition:</span>
                      <span className="font-bold text-slate-900">{c.avgTuition}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Living Cost:</span>
                      <span className="font-bold text-slate-900">{c.livingCost}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Post-Study Work:</span>
                      <span className="font-bold text-[#0A5CC4]">{c.workPermit}</span>
                    </div>
                  </div>

                  {/* Top Universities */}
                  <div>
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Top Target Universities:
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {c.topUniversities.slice(0, 3).map((uni, uIdx) => (
                        <li key={uIdx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{uni}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onOpenCounselling(c.name)}
                    className="w-full py-3 px-4 rounded-xl gradient-brand-btn text-white font-bold text-xs shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get Free {c.name} Shortlist</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand onOpenCounselling={() => onOpenCounselling('Country Planning')} />
    </div>
  );
};
