import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Award,
  Users,
  BookOpen,
  MessageSquare,
  Check,
  ArrowRight,
  Bookmark,
} from 'lucide-react';
import germanHeroImg from '../assets/images/services/service_german_class.jpg';

interface GermanLanguagePageProps {
  onOpenCounselling: (programName?: string) => void;
}

export const GermanLanguagePage: React.FC<GermanLanguagePageProps> = ({ onOpenCounselling }) => {
  const featureBadges = [
    {
      title: 'Expert Trainers',
      subtitle: 'Native & certified',
      icon: Award,
    },
    {
      title: 'Flexible Batches',
      subtitle: 'Online & offline',
      icon: Users,
    },
    {
      title: 'Study Material',
      subtitle: 'Updated & comprehensive',
      icon: BookOpen,
    },
    {
      title: 'Practice Sessions',
      subtitle: 'Real-life conversation',
      icon: MessageSquare,
    },
  ];

  const popularPrograms = [
    {
      level: 'A1 – A2',
      subtitle: 'Beginner to Elementary',
    },
    {
      level: 'B1 – B2',
      subtitle: 'Intermediate',
    },
    {
      level: 'C1 – C2',
      subtitle: 'Advanced',
    },
    {
      level: 'TestDaF',
      subtitle: 'For university admission',
    },
  ];

  const learningSteps = [
    {
      step: '01',
      title: 'Level Assessment',
      subtitle: 'Find your level',
    },
    {
      step: '02',
      title: 'Customized Plan',
      subtitle: 'Tailored to goals',
    },
    {
      step: '03',
      title: 'Interactive Classes',
      subtitle: 'Expert trainers',
    },
    {
      step: '04',
      title: 'Practice & Feedback',
      subtitle: 'Regular evaluation',
    },
    {
      step: '05',
      title: 'Certification',
      subtitle: 'Get recognized',
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
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 sm:mb-8">
            <Link to="/" className="text-[#0080FF] hover:underline">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="text-[#0080FF] hover:underline">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-700">German Language</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline, Subtitle, Body & CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2347] tracking-tight">
                German Language Programs
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#0080FF]">
                Learn German. Build Your Future.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Master the German language with expert training and get ready for higher education, better career opportunities and a brighter future in Germany.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenCounselling('German Language')}
                  className="rounded-full px-7 py-3 bg-[#0080FF] hover:bg-[#0070E0] text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-200/50 hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Photo: German classroom with teacher and Deutsch lernen whiteboard */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-sky-100 aspect-[4/3] bg-slate-100">
                <img
                  src={germanHeroImg}
                  alt="German language classroom with teacher and students"
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
      {/* 3. MIDDLE TWO-COLUMN GRID: WHY LEARN GERMAN vs POPULAR PROGRAMS */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Why Learn German? */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347] tracking-tight">
                Why Learn German?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                German is one of the most in-demand languages in the world. It opens doors to top universities, job opportunities and a high quality of life in Germany.
              </p>

              {/* 4 Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {[
                  'Access to top German universities',
                  'Better career opportunities',
                  'High demand in global job market',
                  'Enhanced cultural experience',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Popular Programs (4 Cards in 2x2 grid) */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347] tracking-tight mb-6">
                Popular Programs
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {popularPrograms.map((p) => (
                  <div
                    key={p.level}
                    onClick={() => onOpenCounselling(`German ${p.level}`)}
                    className="bg-white rounded-2xl p-5 border border-sky-100/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-100/80 text-[#0080FF] flex items-center justify-center shrink-0 group-hover:bg-[#0080FF] group-hover:text-white transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0B2347] group-hover:text-[#0080FF] transition-colors">
                        {p.level}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{p.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. 5-STEP LEARNING PROCESS */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2347]">
              Our German Learning Process
            </h2>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-2">
            <div className="hidden md:block absolute top-5.5 left-12 right-12 h-0.5 bg-sky-200 -z-0" />

            {learningSteps.map((s, idx) => (
              <div
                key={idx}
                className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center relative z-10 flex-1 px-1 gap-3.5 md:gap-0"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BOTTOM CTA RIBBON */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0080FF] rounded-2xl px-6 sm:px-10 py-5 sm:py-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                Start Your German Journey Today!
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                Expert guidance for your German language training.
              </p>
            </div>

            <button
              onClick={() => onOpenCounselling('German Language')}
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
