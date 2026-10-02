import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Landmark,
  Globe,
  ShieldCheck,
  Users,
  Briefcase,
  Send,
  Headphones,
  Award,
  HeartHandshake,
  Compass,
  Plane,
} from 'lucide-react';

import heroStudentsImg from '../assets/images/about/about_hero_students.jpg';
import storyCounsellingImg from '../assets/images/about/about_story_counselling.jpg';
import ctaGraduateImg from '../assets/images/about/about_cta_graduate.jpg';

interface AboutPageProps {
  onOpenCounselling: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenCounselling }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#EBF5FF] via-[#F4F9FF] to-white pt-6 pb-16 lg:pb-24 overflow-hidden border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8 sm:mb-12">
            <Link to="/" className="hover:text-[#0080FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-700">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B2347] tracking-tight leading-[1.1]">
                About <span className="text-[#0080FF]">FLYGRAD</span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-[#0B2347] tracking-tight leading-snug">
                Your Journey to Global Education Starts Here
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                We are a team of dedicated education consultants, committed to helping students achieve their dreams of studying abroad. With expert guidance, personalized support and a global network of university partners, we make your international education journey simple, smooth and successful.
              </p>
            </div>

            {/* Right Visual: 3 Students + Skyline + Flying Airplane */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-100/80 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] bg-slate-100 group">
                <img
                  src={heroStudentsImg}
                  alt="FLYGRAD students viewing global city skyline"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2347]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR STORY SECTION */}
      {/* ========================================================================= */}
      <section className="py-16  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Consultation Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] bg-slate-50 group">
                <img
                  src={storyCounsellingImg}
                  alt="FLYGRAD counselling session with student and advisor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right Story Details */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF]">
                  OUR STORY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B2347] tracking-tight leading-tight mt-2">
                  Turning Dreams Into Global Opportunities
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                FLYGRAD was founded with a simple mission — to make global education accessible to every deserving student. We understand that choosing to study abroad is a life-changing decision, and we are here to guide you at every step, from selecting the right program to settling in your new destination.
              </p>

              {/* 3 Core Highlights with circular blue badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {/* Highlight 1 */}
                <div className="flex sm:flex-col items-center sm:items-start text-left gap-3.5 sm:gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2347]">Expert Guidance</h3>
                    <p className="text-xs text-slate-500 leading-snug mt-1">
                      From course selection to visa assistance, we are with you always.
                    </p>
                  </div>
                </div>

                {/* Highlight 2 */}
                <div className="flex sm:flex-col items-center sm:items-start text-left gap-3.5 sm:gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2347]">Global Network</h3>
                    <p className="text-xs text-slate-500 leading-snug mt-1">
                      Partnerships with top universities worldwide.
                    </p>
                  </div>
                </div>

                {/* Highlight 3 */}
                <div className="flex sm:flex-col items-center sm:items-start text-left gap-3.5 sm:gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2347]">Student-First Approach</h3>
                    <p className="text-xs text-slate-500 leading-snug mt-1">
                      Your success is our priority.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenCounselling}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white font-semibold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
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
      {/* 3. OUR IMPACT / NUMBERS THAT TELL OUR STORY */}
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
                Numbers That Tell Our Story
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
      {/* 4. WHY CHOOSE US / MORE THAN JUST EDUCATIONAL CONSULTANTS */}
      {/* ========================================================================= */}
      <section className="py-16  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF]">
                  WHY CHOOSE US
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B2347] tracking-tight leading-tight mt-2">
                  More Than Just Educational Consultants
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At FLYGRAD, we go beyond counselling. We provide end-to-end support, personalized guidance, and genuine care to ensure you achieve your global education goals.
              </p>

              <div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white font-semibold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right 2x3 Grid of 6 Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Feature 1 */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#0080FF] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B2347]">Personalized Guidance</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-snug mt-1">
                      Tailored to your goals and aspirations.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#0080FF] flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B2347]">University Partnerships</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-snug mt-1">
                      Access to top global universities.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#0080FF] flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B2347]">End-to-End Support</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-snug mt-1">
                      From application to pre-departure.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#0080FF] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B2347]">Visa Assistance</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-snug mt-1">
                      Higher chances of success with expert help.
                    </p>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#0080FF] flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B2347]">Pre-Departure Briefing</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-snug mt-1">
                      Get ready for a smooth journey abroad.
                    </p>
                  </div>
                </div>

                {/* Feature 6 */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF5FF] text-[#0080FF] flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B2347]">Ongoing Support</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-snug mt-1">
                      We are with you, even after you reach your destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR VALUES / WHAT DRIVES US */}
      {/* ========================================================================= */}
      <section className="py-16  bg-[#F4F9FD]/60 border-t border-sky-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF]">
                OUR VALUES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B2347] tracking-tight leading-tight">
                What Drives Us
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our core values shape everything we do, from the way we work with students to the partnerships we build.
              </p>
            </div>

            {/* Right 4 Values Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {/* Value 1 */}
                <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B2347]">Integrity</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We believe in honest and transparent guidance.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-xs">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B2347]">Excellence</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We strive for the best in everything we do.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-xs">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B2347]">Empathy</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We understand your dreams and challenges.
                  </p>
                </div>

                {/* Value 4 */}
                <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-xs">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B2347]">Global Mindset</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We believe in a borderless world of opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CTA PRE-FOOTER BANNER */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0080FF] via-[#0091FF] to-[#0070E0] shadow-xl">
            {/* Dotted Airplane Flight Path SVG background */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              <path
                d="M 50,250 Q 300,50 650,150 T 950,50"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Flight plane icon on trajectory */}
            <div className="absolute top-12 left-1/2 -translate-x-12 hidden md:block text-white/40 pointer-events-none transform -rotate-12">
              <Plane className="w-6 h-6" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
              {/* Text & Button Area */}
              <div className="p-8 sm:p-12 lg:p-16 max-w-2xl space-y-4 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Ready to Start Your Global Education Journey?
                </h2>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  Get expert guidance and personalized support from our team.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenCounselling}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0080FF] hover:bg-slate-50 font-bold text-sm shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    <span>Book Free Counselling</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Graduate Student Graphic */}
              <div className="w-full lg:w-96 h-64 lg:h-80 relative overflow-hidden self-end shrink-0">
                <img
                  src={ctaGraduateImg}
                  alt="Graduate student looking towards city skyline"
                  className="w-full h-full object-cover object-top"
                />
                {/* Smooth gradient blend into the banner blue on the left and bottom */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0080FF] lg:via-[#0080FF]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0070E0] via-transparent to-transparent pointer-events-none lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
