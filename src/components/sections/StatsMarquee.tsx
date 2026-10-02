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
    <div className="relative bg-[#0066CC] text-white py-3 overflow-hidden select-none">
      <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
        {repeatedStats.map((item, idx) => {
          const [highlight, ...rest] = item.split(' ');
          const restText = rest.join(' ');
          return (
            <div key={idx} className="flex items-center gap-8 text-xs sm:text-sm font-semibold tracking-wide">
              <span>
                <span className="font-extrabold text-white mr-1.5">{highlight}</span>
                <span className="text-white/90 font-medium">{restText}</span>
              </span>
              <span className="text-white/50 text-sm font-light">|</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
