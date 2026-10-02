import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Landmark,
  Globe,
  ShieldCheck,
  Stethoscope,
  BookOpenCheck,
  Languages,
  Headphones,
  Send,
  Plane,
  FileCheck,
} from 'lucide-react';

import heroStudentImg from '../assets/images/services/services_hero_student.jpg';
import campusImg from '../assets/images/historic_redbrick_campus.jpg';
import mbbsImg from '../assets/images/medical_students_mbbs_1790920629274.jpg';
import englishPrepImg from '../assets/images/services/service_english_prep.jpg';
import germanGateImg from '../assets/images/services/service_german_gate.jpg';
import flagsImg from '../assets/images/services/service_flags_destinations.jpg';
import visaPassportImg from '../assets/images/services/service_visa_passport.jpg';
import ctaStudentImg from '../assets/images/services/services_cta_student.jpg';

interface ServicesPageProps {
  onOpenCounselling: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenCounselling }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#EBF5FF] via-[#F4F9FF] to-white pt-6 pb-16 lg:pb-20 overflow-hidden border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8 sm:mb-12">
            <Link to="/" className="hover:text-[#0080FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-700">Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Headline & Description */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF]">
                  OUR SERVICES
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B2347] tracking-tight leading-[1.1] mt-2">
                  Comprehensive Guidance <br />
                  for Your <span className="text-[#0080FF]">Global Dreams</span>
                </h1>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                From university admissions to visa assistance, we provide end-to-end support for your study abroad journey. Explore our specialized services and take the first step towards a brighter future.
              </p>
            </div>

            {/* Right Hero Graphic: Indian Student at Airport with Jet Takeoff */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-100 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] bg-slate-100 group">
                <img
                  src={heroStudentImg}
                  alt="Student at airport with airplane taking off"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Stylized Badge: "Your Global Future Awaits" */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-sky-100 flex items-center gap-2 transform rotate-2 hover:rotate-0 transition-transform">
                  <span className="font-serif italic font-extrabold text-sm sm:text-base text-[#0080FF] tracking-tight">
                    Your Global Future Awaits
                  </span>
                  <Plane className="w-4 h-4 text-[#0080FF] transform -rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. END-TO-END SUPPORT FOR EVERY STEP */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF]">
                OUR SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B2347] tracking-tight leading-tight">
                End-to-End Support for Every Step
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                We offer a wide range of services to help you achieve your international education goals. Our expert counsellors provide personalized guidance and support at every stage of your journey.
              </p>
            </div>

            {/* Right 4 Feature Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Feature 1 */}
                <div className="bg-white rounded-2xl p-5 border border-sky-100/90 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2347]">Expert Guidance</h3>
                    <p className="text-xs text-slate-500 leading-snug mt-1">
                      Personalized counselling from experienced education consultants.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-2xl p-5 border border-sky-100/90 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2347]">Trusted Process</h3>
                    <p className="text-xs text-slate-500 leading-snug mt-1">
                      Transparent and secure admission and visa process.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-2xl p-5 border border-sky-100/90 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2347]">Global Network</h3>
                    <p className="text-xs text-slate-500 leading-snug mt-1">
                      Partnerships with top universities worldwide.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-2xl p-5 border border-sky-100/90 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2347]">Ongoing Support</h3>
                    <p className="text-xs text-slate-500 leading-snug mt-1">
                      From application to pre-departure, we're with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE SERVICES 2x3 GRID (6 CARDS) */}
      {/* ========================================================================= */}
      <section className="py-16  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: MS Abroad */}
            <div className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={campusImg}
                  alt="Historic university campus for MS Abroad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-lg border-2 border-white z-10">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#0B2347] tracking-tight">MS Abroad</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Pursue your master's degree at top universities and build a successful global career with our expert guidance and support.
                  </p>
                </div>
                <Link
                  to="/study-abroad"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0080FF] hover:text-[#006EDC] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: MBBS Abroad */}
            <div className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={mbbsImg}
                  alt="Medical students studying MBBS abroad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-lg border-2 border-white z-10">
                  <Stethoscope className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#0B2347] tracking-tight">MBBS Abroad</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Get expert guidance for your MBBS journey and study at renowned medical universities around the world.
                  </p>
                </div>
                <Link
                  to="/mbbs-abroad"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0080FF] hover:text-[#006EDC] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: English Proficiency Tests */}
            <div className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={englishPrepImg}
                  alt="Student preparing for IELTS and English proficiency exams"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-lg border-2 border-white z-10">
                  <BookOpenCheck className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#0B2347] tracking-tight">English Proficiency Tests</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Prepare for IELTS, TOEFL, PTE and more with our personalized coaching and proven strategies.
                  </p>
                </div>
                <Link
                  to="/english-tests"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0080FF] hover:text-[#006EDC] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: German Language Programs */}
            <div className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={germanGateImg}
                  alt="Brandenburg Gate in Berlin Germany with German flag"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-lg border-2 border-white z-10">
                  <Languages className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#0B2347] tracking-tight">German Language Programs</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Learn German with structured programs and gain access to world-class education and career opportunities in Germany.
                  </p>
                </div>
                <Link
                  to="/german-language"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0080FF] hover:text-[#006EDC] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 5: Study Abroad Countries */}
            <div className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={flagsImg}
                  alt="International flags of top study destinations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-lg border-2 border-white z-10">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#0B2347] tracking-tight">Study Abroad Countries</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Explore top study destinations including USA, UK, Canada, Australia, Germany, Ireland and more.
                  </p>
                </div>
                <Link
                  to="/countries"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0080FF] hover:text-[#006EDC] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 6: Visa Assistance */}
            <div className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={visaPassportImg}
                  alt="Passport and boarding pass for study abroad visa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-lg border-2 border-white z-10">
                  <FileCheck className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#0B2347] tracking-tight">Visa Assistance</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Get end-to-end visa support with document preparation, interview guidance and application tracking.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenCounselling('Visa Assistance')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0080FF] hover:text-[#006EDC] transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MIDDLE CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#006AE0] via-[#0080FF] to-[#0094FF] text-white shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-10 lg:p-12">
              {/* Left Student Image in rounded circle/card */}
              <div className="flex items-center gap-5 sm:gap-8 flex-1">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-white/40 shadow-lg">
                  <img
                    src={ctaStudentImg}
                    alt="Confident student ready for study abroad"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-sky-200">
                    YOUR SUCCESS IS OUR PRIORITY
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                    Ready to Start Your <br className="hidden sm:block" />
                    Global Education Journey?
                  </h2>
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-md">
                    Get expert guidance and personalized support from our team.
                  </p>
                </div>
              </div>

              {/* Right CTA Button */}
              <div className="shrink-0 w-full sm:w-auto text-center">
                <button
                  type="button"
                  onClick={() => onOpenCounselling()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0080FF] hover:bg-slate-50 font-bold text-sm shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. NUMBERS THAT SPEAK (OUR IMPACT) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#F4F9FD] border-y border-sky-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-1 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF]">
                Our Impact
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B2347] tracking-tight leading-tight">
                Numbers That Speak
              </h2>
            </div>

            {/* Right 4 Stat Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                {/* Stat 1 */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#EBF5FF] text-[#0080FF] flex items-center justify-center mb-3">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0B2347] tracking-tight">
                    10K+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Students Counselled
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#EBF5FF] text-[#0080FF] flex items-center justify-center mb-3">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0B2347] tracking-tight">
                    20+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Universities
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#EBF5FF] text-[#0080FF] flex items-center justify-center mb-3">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0B2347] tracking-tight">
                    20+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Countries
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#EBF5FF] text-[#0080FF] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0B2347] tracking-tight">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Visa Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HOW IT WORKS (YOUR JOURNEY, SIMPLIFIED) */}
      {/* ========================================================================= */}
      <section className="py-16  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF]">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2347] tracking-tight">
              Your Journey, Simplified
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We make the process simple, transparent and stress-free.
            </p>
          </div>

          {/* 5 Step Timeline Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Step 01 */}
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center relative">
              <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                01
              </div>
              <h3 className="text-sm font-bold text-[#0B2347]">Initial Consultation</h3>
              <p className="text-xs text-slate-500 leading-snug mt-1.5">
                Understand your goals and preferences.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center relative">
              <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                02
              </div>
              <h3 className="text-sm font-bold text-[#0B2347]">Program Selection</h3>
              <p className="text-xs text-slate-500 leading-snug mt-1.5">
                Find the best options for your profile.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center relative">
              <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                03
              </div>
              <h3 className="text-sm font-bold text-[#0B2347]">Application Support</h3>
              <p className="text-xs text-slate-500 leading-snug mt-1.5">
                Prepare and submit your applications.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center relative">
              <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                04
              </div>
              <h3 className="text-sm font-bold text-[#0B2347]">Visa Assistance</h3>
              <p className="text-xs text-slate-500 leading-snug mt-1.5">
                Get complete visa support and guidance.
              </p>
            </div>

            {/* Step 05 */}
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center relative">
              <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                05
              </div>
              <h3 className="text-sm font-bold text-[#0B2347]">Pre-Departure Briefing</h3>
              <p className="text-xs text-slate-500 leading-snug mt-1.5">
                Prepare for your journey with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOTTOM ACTION RIBBON */}
      {/* ========================================================================= */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#0080FF] via-[#0091FF] to-[#00A8FF] p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center shrink-0">
                <Send className="w-5 h-5 transform -rotate-12" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">
                  Take the First Step Towards Your Global Education
                </h3>
                <p className="text-white/90 text-xs sm:text-sm">
                  Get expert guidance, personalized counselling and unlock a world of opportunities.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenCounselling()}
              className="shrink-0 px-6 py-2.5 rounded-full bg-white text-[#0080FF] hover:bg-slate-50 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Book Free Counselling</span>
              <ArrowRight className="w-3.5 h-3.5 inline ml-1.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
