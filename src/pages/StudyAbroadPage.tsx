import React from 'react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';
import { countriesData } from '../data/countries.ts';
import { GraduationCap, DollarSign, Briefcase, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import campusImg from '../assets/images/study_abroad_campus_1790920604338.jpg';

interface StudyAbroadPageProps {
  onOpenCounselling: (programName?: string) => void;
}

export const StudyAbroadPage: React.FC<StudyAbroadPageProps> = ({ onOpenCounselling }) => {
  const msDestinations = countriesData.filter(c => !c.id.includes('georgia') && !c.id.includes('kazakhstan'));

  return (
    <div>
      <PageHero
        title="MS & Postgraduate Study Abroad"
        subtitle="Secure high-ranking admissions in top STEM and Management institutions across the USA, UK, Germany, Canada, and Ireland."
        badge="Master of Science & MBA"
        breadcrumbs={[{ label: 'Study Abroad (MS)' }]}
        bgImage={campusImg}
      />

      {/* Overview & STEM OPT Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
                Global Degree Advantages
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F85] tracking-tight">
                Unlock 3-Year Post-Study Work Rights and Silicon Valley Tech Careers
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                A global Master of Science degree is more than a diploma—it is your entry ticket to international industry leadership. At FLYGRAD, our specialized STEM consultants guide you through course selection, university shortlisting, and departmental research grants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xl font-bold text-[#0B2F85]">3-Year STEM OPT</div>
                  <p className="text-xs text-slate-500 mt-1">Work full-time in the USA on F-1 student visa status before H-1B sponsorship.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xl font-bold text-[#0B2F85]">$18,500 Avg. Aid</div>
                  <p className="text-xs text-slate-500 mt-1">Tuition discounts through Graduate Assistantships (TA/RA) and merit awards.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenCounselling('MS Abroad')}
                  className="gradient-brand-btn text-white text-sm font-semibold py-3.5 px-7 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free MS Profile Evaluation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F2F8FF] rounded-3xl p-8 border border-slate-200 space-y-5">
                <h3 className="text-lg font-bold text-[#0B2F85]">
                  Our 4-Tier Shortlisting Framework
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-purple-700 uppercase">Ambitious (Dream)</span>
                    <p className="text-xs text-slate-600 mt-0.5">Top 20–50 world ranked programs with selective acceptance rates.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-blue-700 uppercase">Target (Match)</span>
                    <p className="text-xs text-slate-600 mt-0.5">High probability programs where your GPA and GRE strongly align.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-emerald-700 uppercase">Safe (High ROI)</span>
                    <p className="text-xs text-slate-600 mt-0.5">Institutions offering guaranteed admits and immediate fee discounts.</p>
                  </div>
                </div>
                <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                  ✓ Comprehensive evaluation including backlogs, internships, and capstone projects.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top MS Countries Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
              Top Study Destinations
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B2F85]">
              Compare Popular MS Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {msDestinations.map((country) => (
              <div
                key={country.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{country.flag}</span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {country.visaProcessing}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{country.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{country.tagline}</p>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div><span className="font-semibold text-slate-800">Avg. Tuition:</span> {country.avgTuition}</div>
                    <div><span className="font-semibold text-slate-800">Work Permit:</span> {country.workPermit}</div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <button
                    onClick={() => onOpenCounselling(`MS in ${country.name}`)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#F2F8FF] text-[#0A5CC4] hover:bg-[#0A5CC4] hover:text-white transition-colors text-center"
                  >
                    Shortlist {country.name} Universities
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand onOpenCounselling={() => onOpenCounselling('MS Abroad')} />
    </div>
  );
};
