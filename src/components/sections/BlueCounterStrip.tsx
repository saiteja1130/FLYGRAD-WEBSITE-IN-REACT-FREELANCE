import React from 'react';
import { GraduationCap, Building2, BookOpen, ShieldCheck } from 'lucide-react';

export const BlueCounterStrip: React.FC = () => {
  return (
    <section className="bg-[#0066CC] text-white py-6 sm:py-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center text-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-white leading-tight">10K+</div>
              <div className="text-xs text-white/90 font-medium">Students Placed</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-white leading-tight">100+</div>
              <div className="text-xs text-white/90 font-medium">Partner Universities</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-white leading-tight">50+</div>
              <div className="text-xs text-white/90 font-medium">Programs</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-white leading-tight">95%</div>
              <div className="text-xs text-white/90 font-medium">Visa Success Rate</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
