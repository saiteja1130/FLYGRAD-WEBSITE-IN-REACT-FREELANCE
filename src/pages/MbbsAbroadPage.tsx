import React from 'react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';
import { Stethoscope, CheckCircle2, ShieldAlert, Award, ArrowRight, Bed, Utensils, Building2 } from 'lucide-react';
import mbbsImg from '../assets/images/medical_students_mbbs_1790920629274.jpg';

interface MbbsAbroadPageProps {
  onOpenCounselling: (programName?: string) => void;
}

export const MbbsAbroadPage: React.FC<MbbsAbroadPageProps> = ({ onOpenCounselling }) => {
  const mbbsCountries = [
    {
      country: "Georgia",
      flag: "🇬🇪",
      tuition: "$4,500 – $7,500 / year",
      duration: "6 Years (English Medium)",
      universities: ["Tbilisi State Medical University", "Batumi Shota Rustaveli State", "New Vision University", "European University"],
      highlights: "European standard simulation labs, safe environment, direct visa processing, Indian mess available."
    },
    {
      country: "Kazakhstan",
      flag: "🇰🇿",
      tuition: "$3,600 – $5,000 / year",
      duration: "5 Years + 1 Year Internship",
      universities: ["Asfendiyarov Kazakh National", "Semey State Medical University", "South Kazakhstan Medical Academy"],
      highlights: "Lowest tuition in Eurasia, 1,000+ bed affiliated hospitals, Indian food & dedicated hostels."
    },
    {
      country: "Russia",
      flag: "🇷🇺",
      tuition: "$3,800 – $6,500 / year",
      duration: "6 Years (English Medium)",
      universities: ["Kazan Federal University", "First Moscow State Medical", "Crimea Federal University"],
      highlights: "Historic medical academies, high student volume, clinical dissection cadavers, WHO recognized."
    },
    {
      country: "Uzbekistan",
      flag: "🇺🇿",
      tuition: "$3,200 – $4,200 / year",
      duration: "5 to 6 Years",
      universities: ["Tashkent Medical Academy", "Samarkand State Medical University"],
      highlights: "Culturally close, short flight duration from India, modern hospitals, highly affordable living costs."
    }
  ];

  return (
    <div>
      <PageHero
        title="MBBS in NMC & WHO Recognised Universities"
        subtitle="Pursue high-quality English-medium medical degrees abroad at 1/5th the cost of Indian private colleges."
        badge="Medical Studies"
        breadcrumbs={[{ label: 'MBBS Abroad' }]}
        bgImage={mbbsImg}
      />

      {/* NMC Compliance Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
                Strict Regulatory Adherence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F85] tracking-tight">
                100% Compliant with NMC FMGL Guidelines
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                National Medical Commission (NMC) regulations require foreign medical graduates to study in English, complete at least 54 months of curriculum plus 12 months of clinical internship at the same institution, and register with the local medical council.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                FLYGRAD exclusively partners with government and globally accredited medical academies meeting every mandate so your eligibility to sit for the NEXT / FMGE licensing exam in India is guaranteed.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">100% English medium instruction throughout entire tenure</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Full clinical rotation in multi-specialty teaching hospitals</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Direct admissions without donation or capitation fees</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenCounselling('MBBS Abroad')}
                  className="gradient-brand-btn text-white text-sm font-semibold py-3.5 px-7 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Check Your NEET Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F2F8FF] rounded-3xl p-8 border border-slate-200 space-y-6">
                <h3 className="text-lg font-bold text-[#0B2F85] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#1E90F0]" />
                  <span>Why Choose MBBS Overseas with Flygrad?</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <Utensils className="w-5 h-5 text-amber-600 mb-2" />
                    <div className="text-sm font-bold text-slate-900">Indian Food & Cooks</div>
                    <p className="text-xs text-slate-500 mt-1">Hostels equipped with dedicated Indian mess serving veg and non-veg food daily.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <Bed className="w-5 h-5 text-blue-600 mb-2" />
                    <div className="text-sm font-bold text-slate-900">Safe Campus Hostels</div>
                    <p className="text-xs text-slate-500 mt-1">24/7 CCTV surveillance, Wi-Fi, central heating, and on-ground Indian coordinators.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <Building2 className="w-5 h-5 text-teal-600 mb-2" />
                    <div className="text-sm font-bold text-slate-900">Bedside Clinical Training</div>
                    <p className="text-xs text-slate-500 mt-1">Early patient interaction in state-run trauma and maternity wards from 3rd year.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <Stethoscope className="w-5 h-5 text-indigo-600 mb-2" />
                    <div className="text-sm font-bold text-slate-900">NEXT / USMLE Prep</div>
                    <p className="text-xs text-slate-500 mt-1">Integrated online medical coaching classes for Indian licensing during the course.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Breakdown Cards */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
              Top Medical Hubs
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B2F85]">
              Compare Popular MBBS Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mbbsCountries.map((c, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{c.flag}</span>
                    <h3 className="text-xl font-bold text-slate-900">{c.country}</h3>
                  </div>
                  <span className="text-xs font-bold text-[#0A5CC4] bg-[#F2F8FF] px-3 py-1 rounded-md">
                    {c.duration}
                  </span>
                </div>

                <div className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Tuition Range:</span> {c.tuition}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {c.highlights}
                </p>

                <div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Top Recognized Medical Colleges:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.universities.map((uni, uIdx) => (
                      <span
                        key={uIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                      >
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onOpenCounselling(`MBBS in ${c.country}`)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#0B2F85] text-white hover:bg-[#0A1F5C] transition-colors"
                  >
                    Apply for {c.country} MBBS Seat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand onOpenCounselling={() => onOpenCounselling('MBBS Abroad')} />
    </div>
  );
};
