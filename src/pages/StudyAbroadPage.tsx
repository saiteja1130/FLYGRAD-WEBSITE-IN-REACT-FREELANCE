import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Landmark,
  Compass,
  Award,
  TrendingUp,
  Check,
  ArrowRight,
} from 'lucide-react';
import { CountryFlag } from '../components/common/CountryFlag.tsx';
import graduateHeroImg from '../assets/images/services/service_ms_graduate.jpg';
import studentsStudyImg from '../assets/images/services/service_ms_students.jpg';
import { easings, ScrollReveal, StaggerContainer, StaggerItem } from '../utils/motion';

interface StudyAbroadPageProps {
  onOpenCounselling: (programName?: string) => void;
}

export const StudyAbroadPage: React.FC<StudyAbroadPageProps> = ({ onOpenCounselling }) => {
  const featureBadges = [
    {
      title: 'Top Universities',
      subtitle: 'Global rankings',
      icon: Landmark,
    },
    {
      title: 'Expert Guidance',
      subtitle: 'From application to visa',
      icon: Compass,
    },
    {
      title: 'Scholarship Support',
      subtitle: 'Save on your education',
      icon: Award,
    },
    {
      title: 'Career Growth',
      subtitle: 'Global opportunities',
      icon: TrendingUp,
    },
  ];

  const popularDestinations = [
    { name: 'USA', code: 'usa' },
    { name: 'UK', code: 'uk' },
    { name: 'Canada', code: 'canada' },
    { name: 'Australia', code: 'australia' },
    { name: 'Germany', code: 'germany' },
    { name: 'Ireland', code: 'ireland' },
  ];

  const applicationSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      subtitle: 'Understand your goals',
    },
    {
      step: '02',
      title: 'University Shortlist',
      subtitle: 'As per your profile',
    },
    {
      step: '03',
      title: 'Application Submission',
      subtitle: 'With expert support',
    },
    {
      step: '04',
      title: 'Visa Processing',
      subtitle: 'Documentation & interview',
    },
    {
      step: '05',
      title: 'Pre-Departure Briefing',
      subtitle: 'Get ready for your journey',
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
            initial={{ opacity: 0, y: -8 }}
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
            <span className="font-semibold text-slate-700">MS Abroad</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline, Subtitle, Body & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: easings.expoOut }}
              className="lg:col-span-6 space-y-4 sm:space-y-5"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2347] tracking-tight">
                MS Abroad
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#0080FF]">
                Build Your Future with a Global Degree
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Pursue your Master's degree at top universities worldwide and gain the skills, exposure and opportunities to build a successful global career.
              </p>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onOpenCounselling('MS Abroad')}
                  className="rounded-full px-7 py-3 bg-[#0080FF] hover:bg-[#0070E0] text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-200/50 hover:shadow-lg transition-shadow flex items-center gap-2 group cursor-pointer"
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Visual Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: easings.expoOut, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-sky-100 aspect-[4/3] bg-slate-100">
                <img
                  src={graduateHeroImg}
                  alt="Female graduate with graduation cap in front of collegiate building"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. 4 FEATURE BADGES STRIP */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 bg-white border-y border-sky-100/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featureBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-100/80 shadow-xs hover:shadow-md transition-shadow flex items-center gap-3.5 cursor-pointer h-full"
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
      {/* 3. MIDDLE TWO-COLUMN GRID: WHY STUDY MS vs POPULAR DESTINATIONS */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-sky-100/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column */}
            <ScrollReveal direction="left" className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347] tracking-tight">
                Why Study MS Abroad?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A Master's degree from a reputed international university opens doors to better career opportunities, global exposure and a higher earning potential. We help you choose the right university, handle the admission process and guide you through every step.
              </p>

              {/* 4 Bullet Points */}
              <div className="space-y-2.5 pt-1">
                {[
                  'World-class education & research facilities',
                  'Global career opportunities',
                  'Higher salary potential',
                  'Post-study work options',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Inset Photo */}
              <div className="pt-2">
                <img
                  src={studentsStudyImg}
                  alt="Two students studying with laptop"
                  className="rounded-2xl w-full h-auto object-cover border border-sky-100 shadow-sm"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            {/* Right Column: Popular Destinations */}
            <ScrollReveal direction="right" className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347] tracking-tight mb-6">
                Popular Destinations
              </h2>

              <StaggerContainer staggerDelay={0.06} className="grid grid-cols-3 gap-3.5 sm:gap-4">
                {popularDestinations.map((c) => (
                  <StaggerItem key={c.code}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onOpenCounselling(`MS in ${c.name}`)}
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-sky-100/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 cursor-pointer group"
                    >
                      <CountryFlag countryCode={c.code} className="w-9 h-6 sm:w-10 sm:h-7" />
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
      <section className="py-12 sm:py-16 bg-white border-b border-sky-100/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347]">
              Our MS Application Process
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1} className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-2">
            {/* Horizontal connecting line behind the badges on desktop */}
            <div className="hidden md:block absolute top-5.5 left-12 right-12 h-0.5 bg-sky-200 -z-0" />

            {applicationSteps.map((s, idx) => (
              <StaggerItem key={idx} className="flex-1 w-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center relative z-10 px-1 gap-3.5 md:gap-0 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center shadow-md shadow-sky-200 shrink-0 md:mb-3">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0B2347] leading-snug">
                      {s.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{s.subtitle}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BOTTOM CTA RIBBON */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="bg-[#0080FF] rounded-2xl px-6 sm:px-10 py-5 sm:py-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                Ready to Start Your MS Journey?
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                Get expert guidance, university shortlisting and end-to-end support.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenCounselling('MS Abroad')}
              className="rounded-full px-6 py-2.5 bg-white text-[#0080FF] font-bold text-xs sm:text-sm shadow hover:bg-sky-50 transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Book Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
