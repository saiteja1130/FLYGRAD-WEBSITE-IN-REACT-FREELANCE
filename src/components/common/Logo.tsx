import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  showTagline = true,
  className = '',
  size = 'md'
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      {/* Soaring Flight Wings & Paper Plane Gradient Mark */}
      <div className={`relative shrink-0 ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="flygradWingCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="flygradWingBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0B3C95" />
            </linearGradient>
          </defs>

          {/* Top Soaring Wing */}
          <path
            d="M6 34C14 34 26 26 42 8C33 16 22 22 12 24L6 34Z"
            fill="url(#flygradWingCyan)"
          />
          {/* Main Swift Body */}
          <path
            d="M12 24C22 22 34 16 42 8C36 22 28 32 18 36L12 24Z"
            fill="url(#flygradWingBlue)"
          />
          {/* Accent Swoop */}
          <path
            d="M10 28C15 28 20 25 28 17C22 22 16 24 10 28Z"
            fill="#38BDF8"
            opacity="0.9"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center tracking-tight leading-none">
          <span className={`font-black uppercase tracking-tight ${textSizes[size]} ${isDark ? 'text-white' : 'text-[#0B3C95]'}`}>
            FLY
          </span>
          <span className={`font-black uppercase tracking-tight ${textSizes[size]} text-[#0080FF]`}>
            GRAD
          </span>
        </div>
        {showTagline && (
          <span className={`text-[9px] sm:text-[10px] tracking-normal font-medium mt-0.5 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
            Your Global Education Partner
          </span>
        )}
      </div>
    </div>
  );
};

