import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';
import { faqsData } from '../data/faqs.ts';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import counsellingImg from '../assets/images/counselling_session_1790920616185.jpg';
import { easings, ScrollReveal, StaggerContainer, StaggerItem } from '../utils/motion.tsx';

interface FaqPageProps {
  onOpenCounselling: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenCounselling }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'faq-1': true });

  const categories = ['All', 'General', 'Admissions & MS', 'MBBS Abroad', 'Test Prep', 'Visa & Finance'];

  const toggle = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = faqsData.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    if (!matchesSearch) return false;

    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Clear answers on abroad university admissions, scholarships, IELTS/PTE preparation, NMC regulations, and student visa processing."
        badge="Knowledge Base"
        breadcrumbs={[{ label: 'FAQ' }]}
        bgImage={counsellingImg}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Box */}
          <ScrollReveal direction="up" className="relative mb-8">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword (e.g. visa, scholarship, MBBS, German, backlogs)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 text-sm bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1E90F0] transition-all"
            />
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal direction="up" className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categories.map((c) => {
              const isSelected = selectedCategory === c;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected ? 'text-white' : 'text-slate-700 bg-white hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="faqFilterPill"
                      className="absolute inset-0 bg-[#0B2F85] rounded-xl shadow-xs -z-0"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{c}</span>
                </button>
              );
            })}
          </ScrollReveal>

          {/* Accordion List with AnimatePresence */}
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 text-center border border-slate-200"
              >
                <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h4 className="text-base font-bold text-slate-800">No results found</h4>
                <p className="text-xs text-slate-500 mt-1">Try a different search term or connect directly with our advisory desk.</p>
              </motion.div>
            ) : (
              <StaggerContainer className="space-y-4">
                {filtered.map((faq) => {
                  const isOpen = !!openIds[faq.id];
                  return (
                    <StaggerItem key={faq.id}>
                      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-blue-300">
                        <button
                          onClick={() => toggle(faq.id)}
                          className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-[#0A5CC4] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A5CC4] bg-[#F2F8FF] px-2 py-0.5 rounded shrink-0">
                              {faq.category}
                            </span>
                            <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: easings.expoOut }}
                            className="shrink-0 text-slate-400"
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: easings.expoOut }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            )}
          </div>
        </div>
      </section>

      <CTABand onOpenCounselling={onOpenCounselling} />
    </div>
  );
};
