import React, { useState } from 'react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';
import { faqsData, FAQItem } from '../data/faqs.ts';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import counsellingImg from '../assets/images/counselling_session_1790920616185.jpg';

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
          <div className="relative mb-8">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword (e.g. visa, scholarship, MBBS, German, backlogs)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 text-sm bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === c
                    ? 'bg-[#0B2F85] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
                <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h4 className="text-base font-bold text-slate-800">No results found</h4>
                <p className="text-xs text-slate-500 mt-1">Try a different search term or connect directly with our advisory desk.</p>
              </div>
            ) : (
              filtered.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-[#0A5CC4] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A5CC4] bg-[#F2F8FF] px-2 py-0.5 rounded">
                          {faq.category}
                        </span>
                        <span className="text-sm sm:text-base">{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#0A5CC4]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Prompt card */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E90F0] flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Have a question not listed here?</h4>
                <p className="text-xs text-slate-500">Our study abroad counsellors provide 1-on-1 personalized answers.</p>
              </div>
            </div>

            <button
              onClick={onOpenCounselling}
              className="gradient-brand-btn text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-xl shadow-xs shrink-0 cursor-pointer"
            >
              Ask an Expert Now
            </button>
          </div>
        </div>
      </section>

      <CTABand onOpenCounselling={onOpenCounselling} />
    </div>
  );
};
