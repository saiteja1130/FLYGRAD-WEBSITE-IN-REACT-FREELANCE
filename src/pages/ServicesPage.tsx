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
  Stethoscope,
  BookOpenCheck,
  Languages,
  Send,
  FileCheck,
  Users,
} from 'lucide-react';

import heroStudentImg from '../assets/images/services/services_hero_student.jpg';
import campusImg from '../assets/images/historic_redbrick_campus.jpg';
import mbbsImg from '../assets/images/medical_students_mbbs_1790920629274.jpg';
import englishPrepImg from '../assets/images/services/service_english_prep.jpg';
import germanGateImg from '../assets/images/services/service_german_gate.jpg';
import flagsImg from '../assets/images/services/service_flags_destinations.jpg';
import visaPassportImg from '../assets/images/services/service_visa_passport.jpg';
import ctaStudentImg from '../assets/images/services/services_cta_student.jpg';
import { easings, AnimatedCounter, ScrollReveal, StaggerContainer, StaggerItem } from '../utils/motion';

interface ServicesPageProps {
  onOpenCounselling: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenCounselling }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-r from-[#D2EBFF] via-[#E2F1FF] to-[#D5ECFF] overflow-hidden border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px] lg:min-h-[480px] py-10 lg:py-0">
            {/* Left Headline & Description */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: easings.expoOut }}
              className="lg:col-span-6 xl:col-span-6 space-y-4 py-4 lg:py-16"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#0080FF] mb-4">
                <Link to="/" className="text-[#0080FF] hover:underline font-medium">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold text-[#0B2F85]">Services</span>
              </nav>

              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0080FF] block mb-1">
                  OUR SERVICES
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black text-[#0B2F85] tracking-tight leading-[1.1]">
                  Comprehensive Guidance <br />
                  for Your <span className="text-[#0080FF]">Global Dreams</span>
                </h1>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                From university admissions to visa assistance, we provide end-to-end support for your study abroad journey. Explore our specialized services and take the first step towards a brighter future.
              </p>
            </motion.div>

            {/* Right visual for mobile/tablet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: easings.expoOut, delay: 0.2 }}
              className="lg:hidden rounded-2xl overflow-hidden shadow-md aspect-[16/9] relative"
            >
              <img
                src={heroStudentImg}
                alt="Student at airport with airplane taking off"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 right-4 text-right transform -rotate-6">
                <div className="font-script text-xl font-bold text-[#0B2F85] leading-none drop-shadow-xs">
                  Your Global
                </div>
                <div className="font-script text-xl font-bold text-[#0080FF] leading-none drop-shadow-xs">
                  Future Awaits
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Full-Bleed Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easings.expoOut, delay: 0.1 }}
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[58%] xl:w-[60%] overflow-hidden pointer-events-none"
        >
          <img
            src={heroStudentImg}
            alt="Student at airport terminal with luggage and taking-off airplane"
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.25) 28%, rgba(0, 0, 0, 0.8) 55%, black 75%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.25) 28%, rgba(0, 0, 0, 0.8) 55%, black 75%)'
            }}
          />

          {/* Calligraphic Script: "Your Global Future Awaits" with curved swoosh */}
          <div className="absolute top-16 right-10 sm:right-14 lg:right-16 text-right transform -rotate-6 select-none pointer-events-none">
            <div className="font-script text-3xl xl:text-4xl font-bold text-[#0B2F85] leading-none drop-shadow-xs">
              Your Global
            </div>
            <div className="font-script text-3xl xl:text-4xl font-bold text-[#0080FF] leading-none drop-shadow-xs">
              Future Awaits
            </div>
            <svg className="w-32 xl:w-40 h-3 text-[#0080FF] ml-auto mt-1" viewBox="0 0 140 12" fill="none">
              <path d="M 2 8 C 40 2, 100 2, 138 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. END-TO-END SUPPORT FOR EVERY STEP */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Header */}
            <ScrollReveal direction="left" className="lg:col-span-4 space-y-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0080FF] block">
                OUR SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight leading-tight">
                End-to-End Support for Every Step
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1 font-normal">
                We offer a wide range of services to help you achieve your international education goals. Our expert counsellors provide personalized guidance and support at every stage of your journey.
              </p>
            </ScrollReveal>

            {/* Right 4 Feature Cards with Staggered Scroll Reveal */}
            <div className="lg:col-span-8">
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {/* Feature 1 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 text-left flex flex-col items-start cursor-pointer h-full">
                    <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2F85] leading-snug">Expert Guidance</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">Personalized counselling from experienced education consultants.</p>
                  </motion.div>
                </StaggerItem>

                {/* Feature 2 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 text-left flex flex-col items-start cursor-pointer h-full">
                    <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2F85] leading-snug">Trusted Process</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">Transparent and secure admission and visa process.</p>
                  </motion.div>
                </StaggerItem>

                {/* Feature 3 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 text-left flex flex-col items-start cursor-pointer h-full">
                    <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2F85] leading-snug">Global Network</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">Partnerships with top universities worldwide.</p>
                  </motion.div>
                </StaggerItem>

                {/* Feature 4 */}
                <StaggerItem>
                  <motion.div whileHover={{ y: -6 }} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 text-left flex flex-col items-start cursor-pointer h-full">
                    <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B2F85] leading-snug">Ongoing Support</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">From application to pre-departure, we're with you.</p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE SERVICES 2x3 GRID (6 CARDS) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: MS Abroad */}
            <StaggerItem>
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
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
              </motion.div>
            </StaggerItem>

            {/* Card 2: MBBS Abroad */}
            <StaggerItem>
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
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
              </motion.div>
            </StaggerItem>

            {/* Card 3: English Proficiency Tests */}
            <StaggerItem>
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={englishPrepImg}
                    alt="Student studying with headphones and laptop for English test"
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
                      Score high in IELTS, TOEFL, PTE and Duolingo with our specialized training and comprehensive study materials.
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
              </motion.div>
            </StaggerItem>

            {/* Card 4: German Language Programs */}
            <StaggerItem>
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={germanGateImg}
                    alt="Brandenburg Gate in Berlin, Germany"
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
              </motion.div>
            </StaggerItem>

            {/* Card 5: Study Abroad Countries */}
            <StaggerItem>
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
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
              </motion.div>
            </StaggerItem>

            {/* Card 6: Visa Assistance */}
            <StaggerItem>
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden border border-sky-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
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
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MIDDLE CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0086FF] via-[#0070F0] to-[#0058D4] text-white shadow-xl min-h-[170px] sm:min-h-[190px] flex items-center">
            {/* Left Student Image */}
            <div className="hidden sm:block absolute left-0 bottom-0 top-0 w-48 md:w-56 lg:w-64 xl:w-72 overflow-hidden pointer-events-none z-0">
              <img
                src={ctaStudentImg}
                alt="Student ready for global education"
                className="w-full h-full object-cover object-top"
                style={{
                  maskImage: 'linear-gradient(to right, black 65%, rgba(0, 0, 0, 0.7) 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, black 65%, rgba(0, 0, 0, 0.7) 82%, transparent 100%)'
                }}
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 px-6 sm:px-10 lg:px-12 sm:pl-52 md:pl-60 lg:pl-68">
              {/* Text Block */}
              <div className="space-y-1 sm:space-y-1.5 max-w-xl">
                <span className="hidden sm:block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/80">
                  YOUR SUCCESS IS OUR PRIORITY
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight leading-tight">
                  Ready to Start Your <br className="hidden sm:inline" />
                  Global Education Journey?
                </h2>
                <p className="text-white/90 text-xs sm:text-sm font-normal leading-relaxed pt-0.5">
                  Get expert guidance and personalized support from our team.
                </p>
              </div>

              {/* Right CTA Button */}
              <div className="shrink-0 w-full sm:w-auto text-left md:text-right">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => onOpenCounselling()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-white text-[#006CE5] hover:text-[#0052B8] hover:bg-slate-50 font-bold text-sm shadow-lg transition-shadow cursor-pointer whitespace-nowrap"
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight className="w-4 h-4 text-[#006CE5]" />
                </motion.button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. NUMBERS THAT SPEAK (OUR IMPACT) */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="bg-[#F0F7FE] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-sky-100/60 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Header */}
              <div className="lg:col-span-4 text-center lg:text-left space-y-1">
                <span className="text-xs sm:text-sm font-bold text-[#0080FF] block">
                  Our Impact
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight leading-tight">
                  Numbers That Speak
                </h2>
              </div>

              {/* Right 4 Metrics with Animated Counters */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                  {/* Metric 1 */}
                  <div className="px-3 sm:px-5 py-4 md:py-0 text-center flex flex-col items-center justify-center">
                    <GraduationCap className="w-8 h-8 sm:w-9 sm:h-9 text-[#0080FF] stroke-[2]" />
                    <div className="text-2xl sm:text-3xl font-black text-[#0B2F85] tracking-tight mt-2.5">
                      <AnimatedCounter from={0} to={10} suffix="K+" duration={1.6} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5 whitespace-nowrap">
                      Students Counselled
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="px-3 sm:px-5 py-4 md:py-0 text-center flex flex-col items-center justify-center">
                    <Landmark className="w-8 h-8 sm:w-9 sm:h-9 text-[#0080FF] stroke-[2]" />
                    <div className="text-2xl sm:text-3xl font-black text-[#0B2F85] tracking-tight mt-2.5">
                      <AnimatedCounter from={0} to={20} suffix="+" duration={1.6} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5 whitespace-nowrap">
                      Universities
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="px-3 sm:px-5 py-4 md:py-0 text-center flex flex-col items-center justify-center">
                    <Globe className="w-8 h-8 sm:w-9 sm:h-9 text-[#0080FF] stroke-[2]" />
                    <div className="text-2xl sm:text-3xl font-black text-[#0B2F85] tracking-tight mt-2.5">
                      <AnimatedCounter from={0} to={20} suffix="+" duration={1.6} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5 whitespace-nowrap">
                      Countries
                    </div>
                  </div>

                  {/* Metric 4 */}
                  <div className="px-3 sm:px-5 py-4 md:py-0 text-center flex flex-col items-center justify-center">
                    <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-[#0080FF]" />
                    <div className="text-2xl sm:text-3xl font-black text-[#0B2F85] tracking-tight mt-2.5">
                      <AnimatedCounter from={0} to={95} suffix="%" duration={1.6} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5 whitespace-nowrap">
                      Visa Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HOW IT WORKS (YOUR JOURNEY, SIMPLIFIED) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0080FF]">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2347] tracking-tight">
              Your Journey, Simplified
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We make the process simple, transparent and stress-free.
            </p>
          </ScrollReveal>

          {/* 5 Step Timeline Row with Stagger */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Step 01 */}
            <StaggerItem>
              <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center cursor-pointer h-full">
                <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                  01
                </div>
                <h3 className="text-sm font-bold text-[#0B2347]">Initial Consultation</h3>
                <p className="text-xs text-slate-500 leading-snug mt-1.5">
                  Understand your goals and preferences.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Step 02 */}
            <StaggerItem>
              <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center cursor-pointer h-full">
                <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                  02
                </div>
                <h3 className="text-sm font-bold text-[#0B2347]">Program Selection</h3>
                <p className="text-xs text-slate-500 leading-snug mt-1.5">
                  Find the best options for your profile.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Step 03 */}
            <StaggerItem>
              <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center cursor-pointer h-full">
                <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                  03
                </div>
                <h3 className="text-sm font-bold text-[#0B2347]">Application Support</h3>
                <p className="text-xs text-slate-500 leading-snug mt-1.5">
                  Prepare and submit your applications.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Step 04 */}
            <StaggerItem>
              <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center cursor-pointer h-full">
                <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                  04
                </div>
                <h3 className="text-sm font-bold text-[#0B2347]">Visa Assistance</h3>
                <p className="text-xs text-slate-500 leading-snug mt-1.5">
                  Get complete visa support and guidance.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Step 05 */}
            <StaggerItem>
              <motion.div whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center cursor-pointer h-full">
                <div className="w-11 h-11 rounded-full bg-[#0080FF] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                  05
                </div>
                <h3 className="text-sm font-bold text-[#0B2347]">Pre-Departure Briefing</h3>
                <p className="text-xs text-slate-500 leading-snug mt-1.5">
                  Prepare for your journey with confidence.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOTTOM ACTION RIBBON */}
      {/* ========================================================================= */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="rounded-2xl bg-gradient-to-r from-[#0080FF] via-[#0091FF] to-[#00A8FF] p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => onOpenCounselling()}
              className="shrink-0 px-6 py-2.5 rounded-full bg-white text-[#0080FF] hover:bg-slate-50 font-bold text-xs sm:text-sm shadow-md transition-shadow cursor-pointer whitespace-nowrap"
            >
              <span>Book Free Counselling</span>
              <ArrowRight className="w-3.5 h-3.5 inline ml-1.5" />
            </motion.button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
