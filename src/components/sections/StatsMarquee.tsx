import React from 'react';

const marqueeItems = [
  "10K+ Students Counselled",
  "20+ Universities",
  "20+ Countries",
  "95% Visa Success",
  "200+ Expert Counsellors"
];

export const StatsMarquee: React.FC = () => {
  // Duplicate for seamless infinite loop
  const repeatedStats = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative bg-[#054397] text-white py-3 sm:py-3.5 overflow-hidden select-none border-t border-blue-400/20 shadow-inner">
      <div className="flex animate-marquee items-center gap-8 sm:gap-10 whitespace-nowrap">
        {repeatedStats.map((item, idx) => {
          const [highlight, ...rest] = item.split(' ');
          const restText = rest.join(' ');
          return (
            <div key={idx} className="flex items-center gap-8 sm:gap-10 text-xs sm:text-sm tracking-wide">
              <span>
                <span className="font-bold text-white mr-1.5">{highlight}</span>
                <span className="text-white/90 font-normal">{restText}</span>
              </span>
              <span className="text-white/40 text-sm font-light select-none">|</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
