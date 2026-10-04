import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ChevronRight,
  GraduationCap,
  Users,
  Plane,
  Stethoscope,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { CountryFlag } from '../components/common/CountryFlag.tsx';
import doctorsHeroImg from '../assets/images/services/service_mbbs_doctors.jpg';
import { easings, ScrollReveal, StaggerContainer, StaggerItem } from '../utils/motion.tsx';

interface MbbsAbroadPageProps {
  onOpenCounselling: (programName?: string) => void;
}

export const MbbsAbroadPage: React.FC<MbbsAbroadPageProps> = ({ onOpenCounselling }) => {
  const featureBadges = [
    {
      title: 'Top Medical Universities',
      subtitle: 'Globally recognized',
      icon: GraduationCap,
    },
    {
      title: 'Experienced Counsellors',
      subtitle: 'Personalized guidance',
      icon: Users,
    },
    {
      title: 'Visa & Travel Support',
      subtitle: 'End-to-end assistance',
      icon: Plane,
    },
    {
      title: 'Post-Study Career',
      subtitle: 'Work & practice opportunities',
      icon: Stethoscope,
    },
  ];

  const popularDestinations = [
    { name: 'Russia', code: 'russia' },
    { name: 'Ukraine', code: 'ukraine' },
    { name: 'Georgia', code: 'georgia' },
    { name: 'China', code: 'china' },
    { name: 'Philippines', code: 'philippines' },
    { name: 'Kazakhstan', code: 'kazakhstan' },
  ];

  const applicationSteps = [
    {
      step: '01',
      title: 'Counselling & Guidance',
      subtitle: 'Choose the right country',
    },
    {
      step: '02',
      title: 'University Selection',
      subtitle: 'As per your profile',
    },
    {
      step: '03',
      title: 'Application Submission',
      subtitle: 'With document support',
    },
    {
      step: '04',
      title: 'Visa Processing',
      subtitle: 'Interview & documentation',
    },
    {
      step: '05',
      title: 'Pre-Departure Briefing',
      subtitle: 'Travel & accommodation',
    },
  ];

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
            <span className="font-semibold text-slate-700">MBBS Abroad</span>
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
                <span>NMC / WHO Recognized Universities</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2347] tracking-tight leading-tight">
                MBBS Abroad
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#0080FF]">
                Become a Doctor. Make a Global Impact.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Study MBBS at top medical universities around the world with expert guidance, hassle-free admission and complete support from application to graduation.
              </p>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onOpenCounselling('MBBS Abroad')}
                  className="rounded-full px-7 py-3 bg-[#0080FF] hover:bg-[#0070E0] text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-200/50 hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Visual Photo: Medical students in white coats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easings.expoOut, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-100 aspect-[4/3] bg-slate-100 group">
                <img
                  src={doctorsHeroImg}
                  alt="Medical students in white coats with stethoscopes"
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
      {/* 3. MIDDLE TWO-COLUMN GRID: WHY STUDY MBBS vs POPULAR DESTINATIONS */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Why Study MBBS Abroad? */}
            <ScrollReveal direction="left" className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347] tracking-tight">
                Why Study MBBS Abroad?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Studying MBBS abroad is a great option for students who want quality education, affordable fees and global exposure. We help you choose the right country and university, handle the admission process and provide complete support.
              </p>

              {/* 4 Bullet Points */}
              <div className="space-y-3 pt-2">
                {[
                  'Globally recognized degrees (WHO, NMC, ECFMG)',
                  'Affordable tuition fees with no donation or capitation fees',
                  'Modern infrastructure & clinical exposure at university hospitals',
                  'International career opportunities across UK, USA, Europe & India',
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5, ease: easings.expoOut }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right Column: Popular Destinations (6 Country Cards: 3 cols x 2 rows) */}
            <ScrollReveal direction="right" className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347] tracking-tight mb-6">
                Popular Destinations
              </h2>

              <StaggerContainer className="grid grid-cols-3 gap-3.5 sm:gap-4">
                {popularDestinations.map((c) => (
                  <StaggerItem key={c.code}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onOpenCounselling(`MBBS in ${c.name}`)}
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-100/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 cursor-pointer group"
                    >
                      <CountryFlag countryCode={c.code} className="w-9 h-6 sm:w-10 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs sm:text-sm font-bold text-[#0B2347] group-hover:text-[#0080FF] transition-colors">
                        {c.name}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. 5-STEP APPLICATION PROCESS */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-12 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF] block mb-2">
              ROADMAP TO SUCCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347]">
              Our MBBS Application Process
            </h2>
          </ScrollReveal>

          <StaggerContainer className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-2">
            <div className="hidden md:block absolute top-5.5 left-12 right-12 h-0.5 bg-gradient-to-r from-sky-200 via-[#0080FF]/40 to-sky-200 -z-0" />

            {applicationSteps.map((s, idx) => (
              <StaggerItem
                key={idx}
                className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center relative z-10 flex-1 px-1 gap-3.5 md:gap-0 group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center shadow-lg shadow-sky-200 shrink-0 md:mb-3 group-hover:bg-[#0060C0] transition-colors"
                >
                  {s.step}
                </motion.div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B2347] leading-snug group-hover:text-[#0080FF] transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{s.subtitle}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BOTTOM CTA RIBBON */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="bg-gradient-to-r from-[#0080FF] to-[#0055B3] rounded-3xl px-6 sm:px-10 py-6 sm:py-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="text-center sm:text-left relative z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">
                  Start Your MBBS Journey Today!
                </h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1">
                  Expert guidance and 100% verified university admissions abroad.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenCounselling('MBBS Abroad')}
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
