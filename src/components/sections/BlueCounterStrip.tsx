import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Building2, BookOpen, ShieldCheck } from 'lucide-react';
import { AnimatedCounter, easings } from '../../utils/motion';

export const BlueCounterStrip: React.FC = () => {
  return (
    <section className="bg-[#0066CC] text-white py-6 sm:py-8 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center text-center"
        >
          
          {/* Stat 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.expoOut } },
            }}
            whileHover={{ y: -2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-white leading-tight">
                <AnimatedCounter from={0} to={10} suffix="K+" duration={1.6} />
              </div>
              <div className="text-xs text-white/90 font-medium">Students Placed</div>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.expoOut } },
            }}
            whileHover={{ y: -2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-white leading-tight">
                <AnimatedCounter from={0} to={100} suffix="+" duration={1.8} />
              </div>
              <div className="text-xs text-white/90 font-medium">Partner Universities</div>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.expoOut } },
            }}
            whileHover={{ y: -2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-white leading-tight">
                <AnimatedCounter from={0} to={50} suffix="+" duration={1.5} />
              </div>
              <div className="text-xs text-white/90 font-medium">Programs</div>
            </div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.expoOut } },
            }}
            whileHover={{ y: -2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-white leading-tight">
                <AnimatedCounter from={0} to={95} suffix="%" duration={1.7} />
              </div>
              <div className="text-xs text-white/90 font-medium">Visa Success Rate</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
