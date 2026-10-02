import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Phone, BookOpen, ChevronDown, CheckCircle2, Users, Globe, ShieldCheck } from 'lucide-react';
import heroAirportImg from '../../assets/images/hero_airport_student.jpg';

interface HeroProps {
  onOpenCounselling: () => void;
}

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
    <section className="relative min-h-[620px] lg:min-h-[720px] xl:min-h-[760px] flex items-center bg-[#071B4E] overflow-hidden text-white">
      {/* Background Image: Airport Terminal with Student & Plane */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroAirportImg}
          alt="International student at airport terminal looking at airplane on runway"
          className="w-full h-full object-cover object-center lg:object-[center_right] opacity-75 lg:opacity-85"
          loading="eager"
        />
        {/* Navy Scrim Overlay - Deeper on left to give contrast to text, clear on right to show airport scene */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06153B] via-[#07205A]/90 to-[#0A266E]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06153B]/70 via-transparent to-transparent" />
      </div>

      {/* Floating 3D Graduation Cap in Upper Right Sky */}
      <div className="absolute top-6 lg:top-10 right-16 lg:right-32 z-10 pointer-events-none drop-shadow-2xl hidden sm:block animate-pulse duration-1000">
        <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[-12deg] drop-shadow-xl">
          {/* Cap diamond */}
          <polygon points="50,15 92,34 50,53 8,34" fill="#0E387A" stroke="#38BDF8" strokeWidth="2" />
          <polygon points="50,20 86,34 50,48 14,34" fill="#144A99" />
          {/* Cap base skull */}
          <path d="M26,42 L26,62 C26,73 74,73 74,62 L74,42" fill="#0A2C63" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Button on top */}
          <circle cx="50" cy="34" r="3.5" fill="#38BDF8" />
          {/* Tassel cord and tassel */}
          <path d="M50,34 Q70,42 78,56" stroke="#38BDF8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <polygon points="75,56 82,56 80,72 77,72" fill="#38BDF8" />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Stacked 3-Line Headline & CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              <span>YOUR JOURNEY TO</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#38BDF8]">
                GLOBAL EDUCATION
              </span>
              <br />
              <span>STARTS HERE</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
              Expert guidance for MS, MBBS, English Proficiency Tests and German Language Programs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenCounselling}
                className="bg-[#0080FF] hover:bg-[#006EDC] text-white text-sm sm:text-base font-semibold py-3.5 px-7 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/study-abroad"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white transition-all backdrop-blur-xs text-center"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bottom 3 Stat Badges in frosted pill container */}
            <div className="pt-6">
              <div className="inline-flex flex-wrap items-center gap-4 sm:gap-6 px-5 py-3 rounded-2xl sm:rounded-full bg-[#06153B]/70 border border-white/15 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0080FF]/30 flex items-center justify-center text-[#38BDF8]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white leading-none">10K+</div>
                    <div className="text-[11px] text-slate-300 font-medium">Students Counselled</div>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-6 bg-white/20" />

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0080FF]/30 flex items-center justify-center text-[#38BDF8]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white leading-none">20+</div>
                    <div className="text-[11px] text-slate-300 font-medium">Countries</div>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-6 bg-white/20" />

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0080FF]/30 flex items-center justify-center text-[#38BDF8]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white leading-none">95%</div>
                    <div className="text-[11px] text-slate-300 font-medium">Visa Success</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: "Free Counselling" Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-6 sm:p-7 text-slate-900 shadow-2xl border border-white/90">
              
              {/* Country Flags Row */}
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 pb-3">
                {/* 6 Country Flags: USA, UK, Canada, Australia, Germany, Ireland */}
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-xs border border-slate-100 flex items-center justify-center text-base sm:text-lg bg-slate-50" title="USA">🇺🇸</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-xs border border-slate-100 flex items-center justify-center text-base sm:text-lg bg-slate-50" title="United Kingdom">🇬🇧</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-xs border border-slate-100 flex items-center justify-center text-base sm:text-lg bg-slate-50" title="Canada">🇨🇦</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-xs border border-slate-100 flex items-center justify-center text-base sm:text-lg bg-slate-50" title="Australia">🇦🇺</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-xs border border-slate-100 flex items-center justify-center text-base sm:text-lg bg-slate-50" title="Germany">🇩🇪</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-xs border border-slate-100 flex items-center justify-center text-base sm:text-lg bg-slate-50" title="Ireland">🇮🇪</span>
              </div>

              {/* Title */}
              <div className="text-center pb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Free Counselling
                </h3>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Thank You!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our lead counsellor will connect with <span className="font-semibold text-slate-900">{fullName}</span> at <span className="font-semibold text-[#0080FF]">{phoneNumber}</span> shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#0080FF] font-semibold underline pt-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
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
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF] focus:border-transparent bg-slate-50/50"
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
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF] focus:border-transparent bg-slate-50/50"
                    />
                  </div>

                  {/* Interest Dropdown */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full pl-10 pr-9 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0080FF] focus:border-transparent bg-slate-50/50 appearance-none cursor-pointer"
                    >
                      <option value="" disabled hidden>Interest</option>
                      <option value="MS Abroad">MS / Postgraduate</option>
                      <option value="MBBS Abroad">MBBS Abroad</option>
                      <option value="English Proficiency">English Proficiency (IELTS / PTE / TOEFL)</option>
                      <option value="German Language">German Language (A1–B2)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0080FF] hover:bg-[#006EDC] text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Submit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
