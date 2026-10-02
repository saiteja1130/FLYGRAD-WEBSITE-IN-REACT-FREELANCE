import React from 'react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';
import { BookOpenCheck, CheckCircle2, Award, ArrowRight, Laptop, Headphones, Mic, FileText } from 'lucide-react';
import counsellingImg from '../assets/images/counselling_session_1790920616185.jpg';

interface EnglishTestsPageProps {
  onOpenCounselling: (programName?: string) => void;
}

export const EnglishTestsPage: React.FC<EnglishTestsPageProps> = ({ onOpenCounselling }) => {
  const testComparison = [
    {
      test: "IELTS Academic",
      body: "IDP & British Council",
      format: "Paper / Computer-Delivered",
      duration: "2 Hrs 45 Mins",
      scoring: "Band 0 – 9.0 (Target: 7.0+)",
      acceptance: "Globally Universal (UK, US, Canada, Aus)",
      bestFor: "Universities, Visa, Immigration"
    },
    {
      test: "PTE Academic",
      body: "Pearson VUE",
      format: "100% Computer-Delivered with AI",
      duration: "2 Hours",
      scoring: "Score 10 – 90 (Target: 68+)",
      acceptance: "Australia, UK, New Zealand, 1,000+ US Unis",
      bestFor: "Fast results (48 hrs), automated scoring"
    },
    {
      test: "TOEFL iBT",
      body: "ETS Global",
      format: "Internet-Based Test",
      duration: "Under 2 Hours (New format)",
      scoring: "Score 0 – 120 (Target: 95+)",
      acceptance: "100% of US Universities, Worldwide",
      bestFor: "US Research & Ivy League Universities"
    },
    {
      test: "Duolingo (DET)",
      body: "Duolingo",
      format: "Online At-Home Adaptive",
      duration: "1 Hour",
      scoring: "Score 10 – 160 (Target: 125+)",
      acceptance: "4,500+ Institutions Worldwide",
      bestFor: "Affordable fee ($59), rapid at-home testing"
    }
  ];

  return (
    <div>
      <PageHero
        title="English Proficiency Test Coaching"
        subtitle="Crack IELTS, PTE, TOEFL & Duolingo on your first attempt with British Council certified faculty and diagnostic mock simulations."
        badge="Test Preparation"
        breadcrumbs={[{ label: 'English Tests' }]}
        bgImage={counsellingImg}
      />

      {/* 4 Pillars of Our Test Prep */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
              High-Band Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F85]">
              Master All 4 Testing Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Headphones className="w-8 h-8 text-[#1E90F0]" />
              <h3 className="text-lg font-bold text-slate-900">Listening</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accent familiarization (British, North American, Australian), speed tracking, and note-taking strategies.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <BookOpenCheck className="w-8 h-8 text-teal-600" />
              <h3 className="text-lg font-bold text-slate-900">Reading</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Skimming, scanning, keyword locating, and eliminating distractors in complex academic passages.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <FileText className="w-8 h-8 text-indigo-600" />
              <h3 className="text-lg font-bold text-slate-900">Writing (Task 1 & 2)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cohesive paragraph frameworks, advanced vocabulary, diagram interpretations, and daily essay reviews.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Mic className="w-8 h-8 text-amber-600" />
              <h3 className="text-lg font-bold text-slate-900">Speaking Mocks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Daily 1-on-1 viva interviews with certified evaluators to eliminate hesitation and build fluent speech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
              Side-by-Side Comparison
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B2F85]">
              Which English Exam is Right For You?
            </h2>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0B2F85] text-white text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold">Test Name</th>
                  <th className="p-4 font-semibold">Conducting Body</th>
                  <th className="p-4 font-semibold">Duration</th>
                  <th className="p-4 font-semibold">Scoring Target</th>
                  <th className="p-4 font-semibold">Global Acceptance</th>
                  <th className="p-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {testComparison.map((t, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{t.test}</td>
                    <td className="p-4 text-slate-600">{t.body}</td>
                    <td className="p-4 text-slate-600">{t.duration}</td>
                    <td className="p-4 font-semibold text-[#0A5CC4]">{t.scoring}</td>
                    <td className="p-4 text-slate-600">{t.acceptance}</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => onOpenCounselling(`${t.test} Prep`)}
                        className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#0A5CC4] font-semibold text-xs hover:bg-[#0A5CC4] hover:text-white transition-colors"
                      >
                        Join Batch
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABand onOpenCounselling={() => onOpenCounselling('English Tests')} />
    </div>
  );
};
