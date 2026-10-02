import React from 'react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';
import { Languages, CheckCircle2, ArrowRight, ShieldCheck, GraduationCap, DollarSign, BookOpen } from 'lucide-react';
import heroAirportImg from '../assets/images/hero_students_airport_1790920592244.jpg';

interface GermanLanguagePageProps {
  onOpenCounselling: (programName?: string) => void;
}

export const GermanLanguagePage: React.FC<GermanLanguagePageProps> = ({ onOpenCounselling }) => {
  const levels = [
    {
      level: "A1 (Beginner)",
      duration: "6–8 Weeks",
      focus: "Basic daily greetings, alphabet, numbers, simple sentences, family, shopping, and everyday vocabulary.",
      outcome: "Goethe-Zertifikat A1 clearance; sufficient for family reunion visa and initial arrival navigation."
    },
    {
      level: "A2 (Elementary)",
      duration: "6–8 Weeks",
      focus: "Routine social situations, employment communication, past tense grammar, and writing short notes.",
      outcome: "Goethe-Zertifikat A2 clearance; required by select English-taught master's programs in Germany."
    },
    {
      level: "B1 (Intermediate)",
      duration: "8–10 Weeks",
      focus: "Complex discussions on academic interests, writing detailed personal letters, and understanding work discourse.",
      outcome: "Essential for German permanent residency pathways and Studienkolleg foundation entrance."
    },
    {
      level: "B2 (Vantage)",
      duration: "8–10 Weeks",
      focus: "Technical articles, abstract discussions in your field of study, spontaneous fluency, and argumentative essays.",
      outcome: "Direct admission prerequisite for German-taught Bachelor's, Master's, and medical residency programs."
    }
  ];

  return (
    <div>
      <PageHero
        title="German Language Training (A1 – B2)"
        subtitle="Learn German from certified educators and unlock 100% tuition-free education at Germany's world-renowned public universities."
        badge="Language Excellence"
        breadcrumbs={[{ label: 'German Language' }]}
        bgImage={heroAirportImg}
      />

      {/* Free German Education Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
                The German Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F85] tracking-tight">
                Study in Germany with Zero Tuition Fees
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Public universities in 15 out of 16 German states charge zero tuition fees for both European and international students. You only pay a nominal semester contribution of €250–€350, which includes public transit.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                However, gaining admission requires careful preparation: clearing Goethe certification, obtaining your mandatory APS verification, and setting up an official Blocked Account. FLYGRAD manages this entire pipeline for you.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Goethe-Institut & CEFR aligned communicative curriculum</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Full assistance with APS certificate verification & document authentication</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">18-Month post-study job seeker visa in Europe's strongest economy</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenCounselling('German Language')}
                  className="gradient-brand-btn text-white text-sm font-semibold py-3.5 px-7 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Enrol in Next German Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F2F8FF] rounded-3xl p-8 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-[#0B2F85]">
                    Step-by-Step Pathway to Germany
                  </h3>
                  <Languages className="w-6 h-6 text-[#1E90F0]" />
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex gap-3">
                    <span className="font-bold text-[#0A5CC4]">1.</span>
                    <span>Complete A1–B2 German courses with Flygrad certified trainers.</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex gap-3">
                    <span className="font-bold text-[#0A5CC4]">2.</span>
                    <span>Clear APS certificate verification with our document audit team.</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex gap-3">
                    <span className="font-bold text-[#0A5CC4]">3.</span>
                    <span>Apply via Uni-Assist / direct portals to TU9 and public universities.</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex gap-3">
                    <span className="font-bold text-[#0A5CC4]">4.</span>
                    <span>Setup Expatrio / Coracle Blocked Account and file German National Visa.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEFR Level Breakdown */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
              Structured Modules
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B2F85]">
              CEFR German Language Levels We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {levels.map((lvl, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{lvl.level}</h3>
                  <span className="text-xs font-bold text-[#0A5CC4] bg-[#F2F8FF] px-3 py-1 rounded-md">
                    {lvl.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lvl.focus}
                </p>
                <div className="pt-3 border-t border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Target: {lvl.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand onOpenCounselling={() => onOpenCounselling('German Language')} />
    </div>
  );
};
