import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import campusImg from '../../assets/images/historic_redbrick_campus.jpg';
import { easings } from '../../utils/motion';

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
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easings.expoOut }}
          className="mb-8"
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0080FF] block mb-1">
            OUR PROGRAMS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2F85] tracking-tight">
            Work-Ready Certification
          </h2>
        </motion.div>

        {/* Tab Controls Bar with Glowing Sliding Active Pill */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 sm:pb-0 mb-8 no-scrollbar relative p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/60 w-fit">
          {programsData.map((tab) => {
            const isSelected = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`relative px-6 py-3 rounded-xl text-sm font-bold transition-colors whitespace-nowrap cursor-pointer z-10 ${
                  isSelected ? 'text-white' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeProgramTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#0052cc] to-[#0070E0] rounded-xl shadow-[0_4px_16px_rgba(0,82,204,0.35)] -z-10"
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 32,
                    }}
                  />
                )}
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content Box with Silky Blur-Scale Crossfade */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,30,90,0.06)] overflow-hidden min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)', y: 8 }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)', y: -8 }}
              transition={{ duration: 0.35, ease: easings.expoOut }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            >

              {/* Column 1: Campus Photo */}
              <div className="lg:col-span-5">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl overflow-hidden shadow-md aspect-[16/10] bg-slate-100 group relative"
                >
                  <img
                    src={campusImg}
                    alt={activeTab.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              {/* Column 2: Program Title & Description */}
              <div className="lg:col-span-3 space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2F85] tracking-tight">
                  {activeTab.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {activeTab.description}
                </p>
                {onOpenCounselling && (
                  <motion.button
                    whileHover={{ scale: 1.03, x: 2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onOpenCounselling(activeTab.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0080FF] hover:text-[#0052cc] transition-colors cursor-pointer pt-1"
                  >
                    <span>Enquire About {activeTab.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                )}
              </div>

              {/* Column 3: Verified Checklist with Cascading Spring Reveals */}
              <div className="lg:col-span-4 space-y-3.5 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
                {activeTab.checklist.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: easings.expoOut,
                      delay: idx * 0.05,
                    }}
                    className="flex items-start gap-2.5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 22,
                        delay: 0.08 + idx * 0.05,
                      }}
                      className="w-5 h-5 rounded-full bg-blue-50 text-[#0080FF] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs"
                    >
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </motion.div>
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
