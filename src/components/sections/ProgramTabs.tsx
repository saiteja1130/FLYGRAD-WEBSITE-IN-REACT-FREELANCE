import React, { useState } from 'react';
import { Check } from 'lucide-react';
import campusImg from '../../assets/images/historic_redbrick_campus.jpg';

interface ProgramTabsProps {
  onOpenCounselling?: (programName?: string) => void;
}

const programsData = [
  {
    id: "ms-abroad",
    name: "MS Abroad",
    title: "MS Abroad",
    description: "Pursue your master's degree at top universities and build a successful global career with our expert guidance and support.",
    checklist: [
      "University selection & application",
      "SOP, LOR & document guidance",
      "Scholarship assistance",
      "Visa support & mock interviews",
      "Pre-departure briefing"
    ]
  },
  {
    id: "mbbs-abroad",
    name: "MBBS Abroad",
    title: "MBBS Abroad",
    description: "Study medicine at WHO & NMC-recognized government universities abroad with affordable tuition fees and global clinical exposure.",
    checklist: [
      "NMC compliant 5.5+ year dual clinical curriculums",
      "100% English medium instruction & clinical rotations",
      "Direct university admission with zero donation fees",
      "FMGE & NExT screening exam coaching support",
      "Guaranteed on-campus hostel & Indian mess facilities"
    ]
  },
  {
    id: "english-tests",
    name: "English Tests",
    title: "English Tests",
    description: "Achieve top band scores with specialized coaching for IELTS, TOEFL, PTE, and Duolingo from British Council certified trainers.",
    checklist: [
      "Full-length diagnostic tests & personalized score strategy",
      "Daily 1-on-1 speaking practice & essay review sessions",
      "Flexible morning, evening & weekend online batches",
      "Proven high-band score guarantee methodologies",
      "Official exam date booking & partner test fee vouchers"
    ]
  },
  {
    id: "german-language",
    name: "German Language",
    title: "German Language",
    description: "Master German language from A1 to B2 levels for tuition-free public university admissions and post-study work rights in Germany.",
    checklist: [
      "Goethe-Institut & Telc standardized exam curriculum",
      "Live interactive conversation practice with experts",
      "Intensive 8-week level completion fast-track batches",
      "End-to-end APS certification & blocked account advisory",
      "Direct university admissions to tuition-free German universities"
    ]
  }
];

export const ProgramTabs: React.FC<ProgramTabsProps> = ({ onOpenCounselling }) => {
  const [activeTabId, setActiveTabId] = useState<string>("ms-abroad");

  const activeTab = programsData.find((p) => p.id === activeTabId) || programsData[0];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0080FF] block mb-1">
            OUR PROGRAMS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2F85] tracking-tight">
            Work-Ready Certification
          </h2>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 sm:pb-0 mb-8 no-scrollbar">
          {programsData.map((tab) => {
            const isSelected = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex-1 sm:flex-initial text-center px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#0052cc] text-white shadow-md'
                    : 'bg-[#F1F5F9] text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Column 1: Campus Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[16/10] bg-slate-100">
                <img
                  src={campusImg}
                  alt={activeTab.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Column 2: Program Title & Description */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2F85] tracking-tight">
                {activeTab.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {activeTab.description}
              </p>
            </div>

            {/* Column 3: Verified Checklist */}
            <div className="lg:col-span-4 space-y-3 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
              {activeTab.checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0080FF] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
