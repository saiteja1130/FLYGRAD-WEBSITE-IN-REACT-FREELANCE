import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Trophy } from 'lucide-react';
import { easings } from '../../utils/motion';

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
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: OUR CREDENTIALS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easings.expoOut }}
          className="max-w-2xl mb-10 sm:mb-12"
        >
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0080FF] block mb-1">
            OUR CREDENTIALS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2F85] tracking-tight">
            Recognised &amp; Certified
          </h2>
        </motion.div>

        {/* 4 Cards Grid with Staggered Scroll Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {credentialsList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.expoOut } },
                }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center space-y-3.5 cursor-pointer"
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
