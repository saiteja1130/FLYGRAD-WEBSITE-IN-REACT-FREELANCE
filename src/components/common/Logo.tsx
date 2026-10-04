import React from 'react';
import logoImg from '../../assets/images/logo/Logo.png';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  className = '',
  size = 'md',
}) => {
  const isDark = variant === 'dark';

  const heightClasses = {
    sm: 'h-8 sm:h-8.5',
    md: 'h-9 sm:h-10.5',
    lg: 'h-11 sm:h-13',
  };

  if (isDark) {
    return (
      <div className={`inline-flex items-center bg-white rounded-xl px-3 py-1.5 shadow-sm transition-transform duration-200 hover:scale-[1.02] ${className}`}>
        <img
          src={logoImg}
          alt="FlyyGrad"
          className={`${heightClasses[size]} w-auto object-contain select-none`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center transition-transform duration-200 hover:scale-[1.02] ${className}`}>
      <img
        src={logoImg}
        alt="FlyyGrad"
        className={`${heightClasses[size]} w-auto object-contain select-none`}
      />
    </div>
  );
};
