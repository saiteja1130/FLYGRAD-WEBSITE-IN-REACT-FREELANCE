import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck, Globe } from 'lucide-react';
import { easings, SpotlightCard } from '../../utils/motion';

export const SectionTwoFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Heading, description & button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easings.expoOut }}
            className="lg:col-span-6 space-y-6 pr-0 lg:pr-4"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0080FF] block">
              YOUR GLOBAL EDUCATION PARTNER
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2F85] leading-tight tracking-tight">
              Where Students Learn, Plan &amp; Fly Abroad
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We provide end-to-end guidance and support to help you achieve your global education dreams. From choosing the right course to visa assistance, we are with you at every step.
            </p>
            <div className="pt-2">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-shadow"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Center Column: 3 Feature Cards with Spotlight Mouse Tracking */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            
            {/* Card 1: Expert Guidance */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.expoOut } },
              }}
            >
              <SpotlightCard
                spotlightColor="rgba(0, 132, 255, 0.16)"
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-shadow duration-300 flex flex-col items-start space-y-3 group cursor-pointer h-full"
              >
                <div className="w-11 h-11 rounded-full bg-[#00D2FF]/20 text-[#0080FF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#0080FF] group-hover:text-white transition-all duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0080FF] transition-colors">
                  Expert Guidance
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Personalized counselling from experienced education consultants.
                </p>
              </SpotlightCard>
            </motion.div>

            {/* Card 2: End-to-End Support */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.expoOut } },
              }}
            >
              <SpotlightCard
                spotlightColor="rgba(0, 132, 255, 0.16)"
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-shadow duration-300 flex flex-col items-start space-y-3 group cursor-pointer h-full"
              >
                <div className="w-11 h-11 rounded-full bg-[#00D2FF]/20 text-[#0080FF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#0080FF] group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0080FF] transition-colors">
                  End-to-End Support
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  From university selection to visa assistance, we handle it all.
                </p>
              </SpotlightCard>
            </motion.div>

            {/* Card 3: Global Opportunities */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.expoOut } },
              }}
            >
              <SpotlightCard
                spotlightColor="rgba(0, 132, 255, 0.16)"
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-shadow duration-300 flex flex-col items-start space-y-3 group cursor-pointer h-full"
              >
                <div className="w-11 h-11 rounded-full bg-[#00D2FF]/20 text-[#0080FF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#0080FF] group-hover:text-white transition-all duration-300">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0080FF] transition-colors">
                  Global Opportunities
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Study at top universities across the world and build your future.
                </p>
              </SpotlightCard>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
