import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Landmark,
  Globe,
  ShieldCheck,
  Users,
  Briefcase,
  Headphones,
  Award,
  HeartHandshake,
  Compass,
  Plane,
} from 'lucide-react';

import heroStudentsImg from '../assets/images/about/about_hero_students.jpg';
import storyCounsellingImg from '../assets/images/about/about_story_counselling.jpg';
import ctaGraduateImg from '../assets/images/about/about_cta_graduate.jpg';
import { easings, AnimatedCounter, ScrollReveal, StaggerContainer, StaggerItem } from '../utils/motion';

interface AboutPageProps {
  onOpenCounselling: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenCounselling }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-r from-[#D2EBFF] via-[#E2F1FF] to-[#D5ECFF] overflow-hidden border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px] lg:min-h-[480px] py-10 lg:py-0">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: easings.expoOut }}
              className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5 py-4 lg:py-16"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#0080FF] mb-4">
                <Link to="/" className="text-[#0080FF] hover:underline font-medium">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold text-[#0B2F85]">About Us</span>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#0B2F85] tracking-tight leading-[1.1]">
                About <span className="text-[#0080FF]">FLYGRAD</span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-[#0B2F85] tracking-tight leading-snug">
                Your Journey to Global Education Starts Here
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                We are a team of dedicated education consultants, committed to helping students achieve their dreams of studying abroad. With expert guidance, personalized support and a global network of university partners, we make your international education journey simple, smooth and successful.
              </p>
            </motion.div>

            {/* Right visual for mobile/tablet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: easings.expoOut, delay: 0.2 }}
              className="lg:hidden rounded-2xl overflow-hidden shadow-md aspect-[16/9]"
            >
              <img
                src={heroStudentsImg}
                alt="FLYGRAD students viewing global city skyline"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

        {/* Desktop Full-Bleed Right Visual matching Picture 1 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easings.expoOut, delay: 0.1 }}
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[58%] xl:w-[60%] overflow-hidden pointer-events-none"
        >
          <img
            src={heroStudentsImg}
            alt="FLYGRAD students viewing global city skyline with airplane"
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.25) 28%, rgba(0, 0, 0, 0.8) 55%, black 75%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.25) 28%, rgba(0, 0, 0, 0.8) 55%, black 75%)'
            }}
          />
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR STORY SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Consultation Image */}
            <ScrollReveal direction="left" distance={30} className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/3] bg-slate-50 group">
                <img
                  src={storyCounsellingImg}
                  alt="FLYGRAD counselling session with student and advisor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </ScrollReveal>

            {/* Right Story Details */}
            <ScrollReveal direction="right" distance={30} className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF] block mb-1">
                  OUR STORY
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2F85] tracking-tight leading-tight">
                  Turning Dreams Into Global Opportunities
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                FLYGRAD was founded with a simple mission — to make global education accessible to every deserving student. We understand that choosing to study abroad is a life-changing decision, and we are here to guide you at every step, from selecting the right program to settling in your new destination.
              </p>

              {/* 3 Core Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
                {/* Highlight 1 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B2F85] leading-snug">
                      Expert Guidance
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      From course selection to visa assistance, we are with you always.
                    </p>
                  </div>
                </div>

                {/* Highlight 2 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B2F85] leading-snug">
                      Global Network
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      Partnerships with top universities worldwide.
                    </p>
                  </div>
                </div>

                {/* Highlight 3 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B2F85] leading-snug">
                      Student-First Approach
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      Your success is our priority.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={onOpenCounselling}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white font-semibold text-xs sm:text-sm shadow-md transition-shadow cursor-pointer"
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR IMPACT / NUMBERS THAT TELL OUR STORY */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="bg-[#F0F7FE] border border-sky-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Title */}
              <div className="md:col-span-4 lg:col-span-3">
                <span className="text-xs sm:text-sm font-semibold text-[#0080FF] block mb-1">
                  Our Impact
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B2F85] tracking-tight leading-tight">
                  Numbers That<br className="hidden sm:inline" /> Tell Our Story
                </h2>
              </div>

              {/* 4 Stats with Animated Counters */}
              <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-slate-200/80 md:border-l md:border-slate-200/80">
                {/* Stat 1 */}
                <div className="text-center px-3 py-2 flex flex-col items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#0080FF] mb-2" />
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight">
                    <AnimatedCounter from={0} to={10} suffix="K+" duration={1.6} />
                  </div>
                  <div className="text-xs text-slate-500 font-normal mt-1 whitespace-nowrap">
                    Students Counselled
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="text-center px-3 py-2 flex flex-col items-center justify-center">
                  <Landmark className="w-8 h-8 text-[#0080FF] mb-2" />
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight">
                    <AnimatedCounter from={0} to={20} suffix="+" duration={1.6} />
                  </div>
                  <div className="text-xs text-slate-500 font-normal mt-1 whitespace-nowrap">
                    Universities
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center px-3 py-2 flex flex-col items-center justify-center">
                  <Globe className="w-8 h-8 text-[#0080FF] mb-2" />
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight">
                    <AnimatedCounter from={0} to={20} suffix="+" duration={1.6} />
                  </div>
                  <div className="text-xs text-slate-500 font-normal mt-1 whitespace-nowrap">
                    Countries
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="text-center px-3 py-2 flex flex-col items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-[#0080FF] mb-2" />
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight">
                    <AnimatedCounter from={0} to={95} suffix="%" duration={1.6} />
                  </div>
                  <div className="text-xs text-slate-500 font-normal mt-1 whitespace-nowrap">
                    Visa Success Rate
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE US / MORE THAN JUST EDUCATIONAL CONSULTANTS */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Content */}
            <ScrollReveal direction="left" className="lg:col-span-4 space-y-4 pt-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0080FF] block">
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-[#0B2F85] tracking-tight leading-tight">
                More Than Just<br />Educational Consultants
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                At FLYGRAD, we go beyond counselling. We provide end-to-end support, personalized guidance, and genuine care to ensure you achieve your global education goals.
              </p>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right 3x2 Grid of 6 Cards with Staggered Scroll Reveal */}
            <div className="lg:col-span-8">
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Card 1 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-start cursor-pointer h-full">
                    <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center mb-3.5 shadow-xs">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2F85] leading-snug">Personalized Guidance</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">Tailored to your goals and aspirations.</p>
                  </motion.div>
                </StaggerItem>

                {/* Card 2 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-start cursor-pointer h-full">
                    <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center mb-3.5 shadow-xs">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2F85] leading-snug">University Partnerships</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">Access to top global universities.</p>
                  </motion.div>
                </StaggerItem>

                {/* Card 3 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-start cursor-pointer h-full">
                    <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center mb-3.5 shadow-xs">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2F85] leading-snug">End-to-End Support</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">From application to pre-departure.</p>
                  </motion.div>
                </StaggerItem>

                {/* Card 4 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-start cursor-pointer h-full">
                    <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center mb-3.5 shadow-xs">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2F85] leading-snug">Visa Assistance</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">Higher chances of success with expert help.</p>
                  </motion.div>
                </StaggerItem>

                {/* Card 5 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-start cursor-pointer h-full">
                    <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center mb-3.5 shadow-xs">
                      <Plane className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2F85] leading-snug">Pre-Departure Briefing</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">Get ready for a smooth journey abroad.</p>
                  </motion.div>
                </StaggerItem>

                {/* Card 6 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-start cursor-pointer h-full">
                    <div className="w-10 h-10 rounded-full bg-[#0080FF] text-white flex items-center justify-center mb-3.5 shadow-xs">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2F85] leading-snug">Ongoing Support</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">We are with you, even after you reach your destination.</p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR VALUES / WHAT DRIVES US */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#F4F9FD]/60 border-t border-sky-100/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header */}
            <ScrollReveal direction="left" className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF]">
                OUR VALUES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B2347] tracking-tight leading-tight">
                What Drives Us
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our core values shape everything we do, from the way we work with students to the partnerships we build.
              </p>
            </ScrollReveal>

            {/* Right 4 Values Cards */}
            <div className="lg:col-span-8">
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {/* Value 1 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center gap-3 cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-xs">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B2347]">Integrity</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">We believe in honest and transparent guidance.</p>
                  </motion.div>
                </StaggerItem>

                {/* Value 2 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center gap-3 cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-xs">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B2347]">Excellence</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">We strive for the best in everything we do.</p>
                  </motion.div>
                </StaggerItem>

                {/* Value 3 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center gap-3 cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-xs">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B2347]">Empathy</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">We understand your dreams and challenges.</p>
                  </motion.div>
                </StaggerItem>

                {/* Value 4 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-xs hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center gap-3 cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-full bg-[#0080FF] text-white flex items-center justify-center shadow-xs">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B2347]">Global Mindset</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">We believe in a borderless world of opportunities.</p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CTA PRE-FOOTER BANNER */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0080FF] via-[#0091FF] to-[#0070E0] shadow-xl">
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

            {/* Flight plane icon on trajectory with gentle animation */}
            <motion.div
              animate={{ y: [-3, 3, -3], rotate: [-12, -8, -12] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-12 left-1/2 -translate-x-12 hidden md:block text-white/40 pointer-events-none"
            >
              <Plane className="w-6 h-6" />
            </motion.div>

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
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={onOpenCounselling}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0080FF] hover:bg-slate-50 font-bold text-sm shadow-lg transition-shadow cursor-pointer whitespace-nowrap"
                  >
                    <span>Book Free Counselling</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Mobile Graduate Image with smooth top mask */}
              <div className="lg:hidden w-full h-60 relative overflow-hidden">
                <img
                  src={ctaGraduateImg}
                  alt="Graduate student looking towards city skyline"
                  className="w-full h-full object-cover object-top"
                  style={{
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)'
                  }}
                />
              </div>
            </div>

            {/* Desktop Full-Height Right Visual */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] xl:w-[42%] overflow-hidden pointer-events-none">
              <img
                src={ctaGraduateImg}
                alt="Graduate student looking towards city skyline"
                className="w-full h-full object-cover object-center"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, transparent 10%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.85) 60%, black 85%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 10%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.85) 60%, black 85%)'
                }}
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0080FF] to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
