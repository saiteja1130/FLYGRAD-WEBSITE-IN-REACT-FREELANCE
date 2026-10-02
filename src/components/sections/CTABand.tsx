import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

interface CTABandProps {
  onOpenCounselling: () => void;
}

export const CTABand: React.FC<CTABandProps> = ({ onOpenCounselling }) => {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0099FF] via-[#0080FF] to-[#0055D4] p-6 sm:p-8 lg:p-10 shadow-lg text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left & Middle: Paper Airplane Icon + Heading/Subheading */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0 shadow-inner">
                <Send className="w-7 h-7 transform -rotate-12 translate-x-0.5" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  Take the First Step Towards Your Global Education
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                  Get expert guidance, personalized counselling and unlock a world of opportunities.
                </p>
              </div>
            </div>

            {/* Right: Book Free Counselling Button */}
            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenCounselling}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#0066FF] hover:bg-blue-50 font-bold text-sm shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="w-4 h-4 text-[#0066FF]" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
