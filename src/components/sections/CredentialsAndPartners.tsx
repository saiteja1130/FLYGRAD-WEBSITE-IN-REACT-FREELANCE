import React from 'react';
import { Award, ShieldCheck, Users, Trophy } from 'lucide-react';

const credentialsList = [
  {
    icon: Award,
    title: "Trusted Counsellors",
    desc: "Certified and experienced education experts."
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine Guidance",
    desc: "Transparent and ethical process."
  },
  {
    icon: Users,
    title: "Global Network",
    desc: "Partnerships with top universities worldwide."
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    desc: "Thousands of successful student journeys."
  }
];

export const CredentialsAndPartners: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: OUR CREDENTIALS */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0080FF] block mb-1">
            OUR CREDENTIALS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2F85] tracking-tight">
            Recognised &amp; Certified
          </h2>
        </div>

        {/* 4 Cards Grid - Adjusted to full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentialsList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-3.5"
              >
                <div className="w-14 h-14 rounded-full bg-[#00D2FF]/20 text-[#0080FF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#0080FF] group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0B2F85] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
