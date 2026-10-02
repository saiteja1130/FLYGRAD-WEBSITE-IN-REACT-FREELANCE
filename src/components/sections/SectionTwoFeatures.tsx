import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Globe, Users, Building2 } from 'lucide-react';

export const SectionTwoFeatures: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Heading, description & button */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0080FF] block">
              YOUR GLOBAL EDUCATION PARTNER
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2F85] leading-tight tracking-tight">
              Where Students Learn, Plan &amp; Fly Abroad
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We provide end-to-end guidance and support to help you achieve your global education dreams. From choosing the right course to visa assistance, we are with you at every step.
            </p>
            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all active:scale-95"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Center Column: 3 Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Card 1: Expert Guidance */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-start space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#00D2FF]/20 text-[#0080FF] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Expert Guidance
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Personalized counselling from experienced education consultants.
              </p>
            </div>

            {/* Card 2: End-to-End Support */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-start space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#00D2FF]/20 text-[#0080FF] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                End-to-End Support
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                From university selection to visa assistance, we handle it all.
              </p>
            </div>

            {/* Card 3: Global Opportunities */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-start space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#00D2FF]/20 text-[#0080FF] flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Global Opportunities
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Study at top universities across the world and build your future.
              </p>
            </div>

          </div>

          {/* Right Column: 2 Stat Badges */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-4">
            
            {/* Stat 1 */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0080FF] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-[#0B2F85] leading-tight">10K+</div>
                <div className="text-[11px] text-slate-500 font-medium">Students Counselled</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0080FF] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-[#0B2F85] leading-tight">20+</div>
                <div className="text-[11px] text-slate-500 font-medium">Universities</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
