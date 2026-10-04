import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, User, Phone, GraduationCap, ChevronDown, CheckCircle2, Users, Globe, ShieldCheck } from 'lucide-react';
import heroAirportCleanImg from '../../assets/images/hero_airport_clean.jpg';
import graduationCapImg from '../../assets/images/graduation_cap_3d.png';
import { easings } from '../../utils/motion';

interface HeroProps {
  onOpenCounselling: () => void;
}

// Crisp Circular Country Flags (USA, UK, Canada, Australia, Germany, Ireland)
const CircularFlags: React.FC = () => (
  <div className="flex items-center justify-center gap-2.5 sm:gap-3">
    {/* USA */}
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shadow-xs border border-slate-100 flex-shrink-0" title="United States">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <rect width="32" height="32" fill="#B22234" />
        <rect y="2.5" width="32" height="2.5" fill="#fff" />
        <rect y="7.5" width="32" height="2.5" fill="#fff" />
        <rect y="12.5" width="32" height="2.5" fill="#fff" />
        <rect y="17.5" width="32" height="2.5" fill="#fff" />
        <rect y="22.5" width="32" height="2.5" fill="#fff" />
        <rect y="27.5" width="32" height="2.5" fill="#fff" />
        <rect width="14" height="15" fill="#3C3B6E" />
        <circle cx="3.5" cy="3.5" r="0.9" fill="#fff" />
        <circle cx="7" cy="3.5" r="0.9" fill="#fff" />
        <circle cx="10.5" cy="3.5" r="0.9" fill="#fff" />
        <circle cx="5.25" cy="7.5" r="0.9" fill="#fff" />
        <circle cx="8.75" cy="7.5" r="0.9" fill="#fff" />
        <circle cx="3.5" cy="11.5" r="0.9" fill="#fff" />
        <circle cx="7" cy="11.5" r="0.9" fill="#fff" />
        <circle cx="10.5" cy="11.5" r="0.9" fill="#fff" />
      </svg>
    </div>

    {/* UK */}
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shadow-xs border border-slate-100 flex-shrink-0" title="United Kingdom">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <rect width="32" height="32" fill="#012169" />
        <path d="M0,0 L32,32 M32,0 L0,32" stroke="#fff" strokeWidth="5" />
        <path d="M0,0 L32,32 M32,0 L0,32" stroke="#C8102E" strokeWidth="2.5" />
        <path d="M16,0 V32 M0,16 H32" stroke="#fff" strokeWidth="8" />
        <path d="M16,0 V32 M0,16 H32" stroke="#C8102E" strokeWidth="4.8" />
      </svg>
    </div>

    {/* Canada */}
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shadow-xs border border-slate-100 flex-shrink-0" title="Canada">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <rect width="32" height="32" fill="#D80027" />
        <rect x="8" width="16" height="32" fill="#fff" />
        <path d="M16,7 L17.5,12 L21,11 L19,14.5 L22.5,16.5 L19,18 L18.5,21.5 L16.5,20 L16.5,24 L15.5,24 L15.5,20 L13.5,21.5 L13,18 L9.5,16.5 L13,14.5 L11,11 L14.5,12 Z" fill="#D80027" />
      </svg>
    </div>

    {/* Australia */}
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shadow-xs border border-slate-100 flex-shrink-0" title="Australia">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <rect width="32" height="32" fill="#00008B" />
        <g transform="scale(0.5)">
          <rect width="32" height="32" fill="#012169" />
          <path d="M0,0 L32,32 M32,0 L0,32" stroke="#fff" strokeWidth="5" />
          <path d="M0,0 L32,32 M32,0 L0,32" stroke="#C8102E" strokeWidth="2.5" />
          <path d="M16,0 V32 M0,16 H32" stroke="#fff" strokeWidth="8" />
          <path d="M16,0 V32 M0,16 H32" stroke="#C8102E" strokeWidth="4.8" />
        </g>
        <circle cx="8" cy="24" r="2.2" fill="#fff" />
        <circle cx="24" cy="7" r="1.1" fill="#fff" />
        <circle cx="28" cy="13" r="1.1" fill="#fff" />
        <circle cx="24" cy="20" r="1.1" fill="#fff" />
        <circle cx="20" cy="14" r="1.1" fill="#fff" />
        <circle cx="26" cy="16" r="0.8" fill="#fff" />
      </svg>
    </div>

    {/* Germany */}
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shadow-xs border border-slate-100 flex-shrink-0" title="Germany">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <rect width="32" height="10.66" fill="#212121" />
        <rect y="10.66" width="32" height="10.66" fill="#D32F2F" />
        <rect y="21.32" width="32" height="10.68" fill="#FFC107" />
      </svg>
    </div>

    {/* Ireland */}
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shadow-xs border border-slate-100 flex-shrink-0" title="Ireland">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <rect width="10.66" height="32" fill="#169B62" />
        <rect x="10.66" width="10.66" height="32" fill="#fff" />
        <rect x="21.32" width="10.68" height="32" fill="#FF883E" />
      </svg>
    </div>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onOpenCounselling }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [interest, setInterest] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[730px] flex items-center bg-[#021844] overflow-hidden text-white">
      {/* Background Image: Airport Terminal with Girl, Suitcase, Sunlight and Plane */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroAirportCleanImg}
          alt="Student at airport terminal ready for global education journey"
          className="w-full h-full object-cover object-center lg:object-[68%_center]"
          loading="eager"
        />

        {/* Navy Gradient Scrim - Exact left deep royal blue transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021844] via-[#021844]/95 via-35% md:via-45% to-transparent" />

        {/* Soft bottom vignette to blend seamlessly into marquee bar */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#021844]/60 to-transparent" />
      </div>

      {/* Atmospheric Breathing Aurora Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00D4FF]/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-20 w-[450px] h-[450px] bg-[#0A5CC4]/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Dotted Flight Trajectory Arc with Animated Airplane */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 740"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gentle curved dotted path from near student girl swooping up towards the plane */}
          <path
            d="M 760 520 C 720 440, 750 320, 890 220 C 905 208, 920 198, 935 190"
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
            className="animate-flight-path"
          />
          {/* White Airplane with gentle floating / pitching micro-animation */}
          <motion.g
            animate={{
              y: [-3, 3, -3],
              rotate: [-34, -36, -34],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '935px 185px' }}
            transform="translate(935, 185)"
          >
            <path
              d="M0 -14 L4 -3 L16 3 L16 6 L4 4 L4 12 L8 15 L8 18 L0 16 L-8 18 L-8 15 L-4 12 L-4 4 L-16 6 L-16 3 L-4 -3 Z"
              fill="white"
              className="drop-shadow-md"
            />
          </motion.g>
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Stacked 3-Line Headline, Subtitle, Buttons, and 3 Stats */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">

            {/* 3-Line Headline with Masked Word Slide-Up Entrance */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-white leading-[1.08] [text-wrap:balance]"
            >
              <div className="overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '100%', opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: easings.expoOut } },
                  }}
                  className="block"
                >
                  YOUR JOURNEY TO
                </motion.span>
              </div>

              <div className="overflow-hidden py-1">
                <motion.span
                  variants={{
                    hidden: { y: '100%', opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: easings.expoOut } },
                  }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#00B4D8] via-[#33C9FF] to-[#0096C7] drop-shadow-[0_2px_20px_rgba(0,212,255,0.45)] animate-gradient-text"
                >
                  GLOBAL EDUCATION
                </motion.span>
              </div>

              <div className="overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '100%', opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: easings.expoOut } },
                  }}
                  className="block"
                >
                  STARTS HERE
                </motion.span>
              </div>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easings.expoOut, delay: 0.35 }}
              className="text-sm sm:text-base md:text-lg text-slate-200/95 font-normal leading-relaxed max-w-xl"
            >
              Expert guidance for MS, MBBS, English Proficiency Tests and German Language Programs.
            </motion.p>

            {/* Action Buttons with Shimmer Sheen & Spring Gestures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easings.expoOut, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1 sm:pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18 }}
                onClick={onOpenCounselling}
                className="relative overflow-hidden bg-gradient-to-r from-[#0084FF] via-[#0092FF] to-[#0070E0] text-white text-sm sm:text-base font-bold py-3.5 px-7 rounded-full shadow-[0_4px_22px_rgba(0,132,255,0.45)] hover:shadow-[0_8px_30px_rgba(0,132,255,0.65)] transition-shadow flex items-center gap-2 cursor-pointer group"
              >
                {/* Shimmer sweep light beam passing across button */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-shimmer-sweep" />
                <span className="relative z-10">Book Free Counselling</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                <Link
                  to="/study-abroad"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white transition-colors backdrop-blur-xs text-center"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Bottom 3 Stat Badges with harmonic subtle floating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easings.expoOut, delay: 0.55 }}
              className="pt-4 sm:pt-6"
            >
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-7">

                {/* Stat 1: 10K+ Students Counselled */}
                <motion.div
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md shadow-blue-900/40 flex-shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-white leading-tight">10K+</div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-normal">Students Counselled</div>
                  </div>
                </motion.div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-7 sm:h-8 bg-white/20" />

                {/* Stat 2: 20+ Countries */}
                <motion.div
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md shadow-blue-900/40 flex-shrink-0">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-white leading-tight">20+</div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-normal">Countries</div>
                  </div>
                </motion.div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-7 sm:h-8 bg-white/20" />

                {/* Stat 3: 95% Visa Success */}
                <motion.div
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md shadow-blue-900/40 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-white leading-tight">95%</div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-normal">Visa Success</div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>

          {/* Right Column: "Free Counselling" Card with 3D Cap Guaranteed In Front */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easings.expoOut, delay: 0.25 }}
              className="relative w-full max-w-[360px] sm:max-w-[400px]"
            >
              {/* White Card Box */}
              <div className="relative z-10 w-full bg-white rounded-3xl p-6 sm:p-7 text-slate-900 shadow-[0_25px_60px_rgba(0,18,60,0.35)] border border-white/90">
                {/* Country Flags Row */}
                <div className="pt-1 pb-3">
                  <CircularFlags />
                </div>

                {/* Title */}
                <div className="text-center pb-4">
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#0D2137]">
                    Free Counselling
                  </h3>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="hero-submitted"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: easings.expoOut }}
                      className="py-8 text-center space-y-3"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
                        className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-slate-900">Thank You!</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Our lead counsellor will connect with <span className="font-semibold text-slate-900">{fullName}</span> at <span className="font-semibold text-[#0080FF]">{phoneNumber}</span> shortly.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs text-[#0080FF] font-semibold underline pt-2 cursor-pointer hover:text-[#0060C0] transition-colors"
                      >
                        Submit another request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="hero-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-3"
                    >
                      {/* Full Name Input */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF] focus:border-transparent bg-slate-50/50 transition-all"
                        />
                      </div>

                      {/* Phone Number Input */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF] focus:border-transparent bg-slate-50/50 transition-all"
                        />
                      </div>

                      {/* Interest Dropdown */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <select
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className="w-full pl-10 pr-9 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0080FF] focus:border-transparent bg-slate-50/50 appearance-none cursor-pointer transition-all"
                        >
                          <option value="" disabled hidden>Interest</option>
                          <option value="MS Abroad">MS / Postgraduate</option>
                          <option value="MBBS Abroad">MBBS Abroad</option>
                          <option value="English Proficiency">English Proficiency (IELTS / PTE / TOEFL)</option>
                          <option value="German Language">German Language (A1–B2)</option>
                          <option value="Visa & Admissions">Visa & Admission Assistance</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Submit Button with tactile bounce */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-[#0080FF] hover:bg-[#006EDC] text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:shadow-lg transition-shadow flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Submit</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* 3D Graduation Cap on Top-Right Corner - Guaranteed in front with z-50 */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2.5, -1, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-10 -right-6 sm:-top-12 sm:-right-8 w-24 h-24 sm:w-28 sm:h-28 z-50 pointer-events-none drop-shadow-2xl"
              >
                <img
                  src={graduationCapImg}
                  alt="Graduation Cap"
                  className="w-full h-full object-contain filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.45)]"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
