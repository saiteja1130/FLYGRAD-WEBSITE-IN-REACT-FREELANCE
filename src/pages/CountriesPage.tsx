import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Landmark,
  ShieldCheck,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { CountryFlag } from '../components/common/CountryFlag.tsx';
import landmarksHeroImg from '../assets/images/services/service_countries_traveler.jpg';
import { easings, ScrollReveal, StaggerContainer, StaggerItem } from '../utils/motion.tsx';

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
      tagline: "World's top universities & STEM OPT extension",
    },
    {
      name: 'UK',
      code: 'uk',
      tagline: '1-Year Masters & 2-Year Graduate Route Visa',
    },
    {
      name: 'Canada',
      code: 'canada',
      tagline: 'Affordable tuition, co-ops & PGWP work permits',
    },
    {
      name: 'Australia',
      code: 'australia',
      tagline: 'Group of Eight universities & high standard of living',
    },
    {
      name: 'Germany',
      code: 'germany',
      tagline: 'Zero/low tuition fees & European tech powerhouse',
    },
    {
      name: 'Ireland',
      code: 'ireland',
      tagline: 'European Silicon Valley & 2-year stay back option',
    },
    {
      name: 'New Zealand',
      code: 'newzealand',
      tagline: 'Safe, student-friendly & pristine academic campuses',
    },
    {
      name: 'Singapore',
      code: 'singapore',
      tagline: 'Asia’s premier financial hub & global career launchpad',
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
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easings.expoOut }}
            className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 sm:mb-8"
          >
            <Link to="/" className="text-[#0080FF] hover:underline">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="text-[#0080FF] hover:underline">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-700">Countries</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline, Subtitle, Body & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: easings.expoOut }}
              className="lg:col-span-6 space-y-4 sm:space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-[#0080FF] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>20+ International Study Destinations</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2347] tracking-tight leading-tight">
                Top Study Abroad Destinations
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#0080FF]">
                Find the Perfect Country for Your Career Aspirations
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Explore popular study destinations, discover admission requirements, post-study work permits, tuition costs, and career prospects for each country.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleScrollToGrid}
                  className="rounded-full px-7 py-3 bg-[#0080FF] hover:bg-[#0070E0] text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-200/50 hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Countries</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onOpenCounselling('Destination Consultation')}
                  className="rounded-full px-6 py-3 bg-white text-slate-700 hover:text-[#0080FF] border border-slate-200 hover:border-blue-300 font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
                >
                  Free Destination Counselling
                </motion.button>
              </div>
            </motion.div>

            {/* Right Visual Photo: World landmarks traveler */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easings.expoOut, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-100 aspect-[4/3] bg-slate-100 group">
                <img
                  src={landmarksHeroImg}
                  alt="Student with backpack and map exploring iconic world universities"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. 4 FEATURE BADGES STRIP */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white border-y border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featureBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-100/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex items-center gap-3.5"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#0B2347]">{badge.title}</h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{badge.subtitle}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. POPULAR COUNTRIES DESTINATION GRID */}
      {/* ========================================================================= */}
      <section id="destinations-section" className="py-14 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-12 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF] block mb-2">
              GLOBAL GATEWAYS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347]">
              Choose Your Dream Destination
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              Click any country to consult with our country specialists regarding intake deadlines, living costs, and scholarships.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCountries.map((c) => (
              <StaggerItem key={c.code}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenCounselling(`Study in ${c.name}`)}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-10 rounded-lg overflow-hidden shadow-xs flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-300 origin-left">
                      <CountryFlag countryCode={c.code} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0B2347] group-hover:text-[#0080FF] transition-colors">
                        Study in {c.name}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1.5 font-normal">
                        {c.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0080FF] group-hover:text-[#0060C0]">
                    <span>View Intakes &amp; Fees</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM CTA RIBBON */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="bg-gradient-to-r from-[#0080FF] to-[#0055B3] rounded-3xl px-6 sm:px-10 py-6 sm:py-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="text-center sm:text-left relative z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">
                  Unsure Which Country Suits Your Profile?
                </h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1">
                  Schedule a complimentary one-on-one country comparative analysis.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenCounselling('Country Planning')}
                className="relative z-10 rounded-full px-7 py-3 bg-white text-[#0080FF] font-bold text-xs sm:text-sm shadow-lg hover:bg-sky-50 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
