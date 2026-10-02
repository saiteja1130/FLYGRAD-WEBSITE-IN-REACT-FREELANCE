import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Landmark,
  ShieldCheck,
  Compass,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { CountryFlag } from '../components/common/CountryFlag.tsx';
import landmarksHeroImg from '../assets/images/services/service_countries_traveler.jpg';

interface CountriesPageProps {
  onOpenCounselling: (countryName?: string) => void;
}

export const CountriesPage: React.FC<CountriesPageProps> = ({ onOpenCounselling }) => {
  const featureBadges = [
    {
      title: 'Top Universities',
      subtitle: 'Global rankings',
      icon: Landmark,
    },
    {
      title: 'Visa Support',
      subtitle: 'End-to-end assistance',
      icon: ShieldCheck,
    },
    {
      title: 'Local Guidance',
      subtitle: 'On-arrival support',
      icon: Compass,
    },
    {
      title: 'High Visa Success',
      subtitle: 'Proven track record',
      icon: CheckCircle2,
    },
  ];

  const popularCountries = [
    {
      name: 'USA',
      code: 'usa',
      tagline: "World's top universities",
    },
    {
      name: 'UK',
      code: 'uk',
      tagline: 'High-quality education',
    },
    {
      name: 'Canada',
      code: 'canada',
      tagline: 'Affordable & safe',
    },
    {
      name: 'Australia',
      code: 'australia',
      tagline: 'Great career opportunities',
    },
    {
      name: 'Germany',
      code: 'germany',
      tagline: 'Low tuition fees',
    },
    {
      name: 'Ireland',
      code: 'ireland',
      tagline: 'Post-study work visa',
    },
    {
      name: 'New Zealand',
      code: 'newzealand',
      tagline: 'Safe & student friendly',
    },
    {
      name: 'Singapore',
      code: 'singapore',
      tagline: 'Global career hub',
    },
  ];

  const handleScrollToGrid = () => {
    const el = document.getElementById('destinations-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCounselling('Country Planning');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & BREADCRUMBS */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#EBF5FF] via-[#F4F9FF] to-white pt-5 pb-12 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 sm:mb-8">
            <Link to="/" className="text-[#0080FF] hover:underline">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-700">Countries</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline, Subtitle, Body & CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2347] tracking-tight">
                Study Abroad Countries
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#0080FF]">
                Explore the World, Build Your Future
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Choose from top study destinations like USA, UK, Canada, Australia, Germany, Ireland and more. We help you find the best country, university and program based on your goals.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleScrollToGrid}
                  className="rounded-full px-7 py-3 bg-[#0080FF] hover:bg-[#0070E0] text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-200/50 hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Countries</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Photo: Student traveler viewing European landmarks */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-sky-100 aspect-[4/3] bg-slate-100">
                <img
                  src={landmarksHeroImg}
                  alt="Student traveler looking at world famous landmarks"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. 4 FEATURE BADGES STRIP */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 bg-white border-y border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featureBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-100/80 shadow-xs flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B2347]">{badge.title}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{badge.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. POPULAR STUDY DESTINATIONS GRID (8 CARDS: 4 cols x 2 rows) */}
      {/* ========================================================================= */}
      <section id="destinations-section" className="py-12 sm:py-16 bg-white border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347] tracking-tight mb-8">
            Popular Study Destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {popularCountries.map((c) => (
              <div
                key={c.code}
                onClick={() => onOpenCounselling(c.name)}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-100/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 cursor-pointer group"
              >
                <CountryFlag countryCode={c.code} className="w-9 h-6 sm:w-10 sm:h-7 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#0B2347] group-hover:text-[#0080FF] transition-colors truncate">
                    {c.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 truncate">
                    {c.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM CTA RIBBON */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0080FF] rounded-2xl px-6 sm:px-10 py-5 sm:py-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                Explore Your Dream Destination
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                Get personalized country and university recommendations.
              </p>
            </div>

            <button
              onClick={() => onOpenCounselling('Country Planning')}
              className="rounded-full px-6 py-2.5 bg-white text-[#0080FF] font-bold text-xs sm:text-sm shadow hover:bg-sky-50 transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Book Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
