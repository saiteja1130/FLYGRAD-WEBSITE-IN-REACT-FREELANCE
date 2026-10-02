import React from 'react';

interface CountryFlagProps {
  countryCode: string;
  className?: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ countryCode, className = 'w-7 h-5' }) => {
  const code = countryCode.toLowerCase();

  switch (code) {
    case 'usa':
    case 'us':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#bd3d44" d="M0 0h640v480H0" />
          <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640" />
          <path fill="#192f5d" d="M0 0h256v258.5H0z" />
          {/* Small 50 star pattern simplified for crisp rendering */}
          <circle cx="40" cy="40" r="8" fill="#fff" />
          <circle cx="80" cy="40" r="8" fill="#fff" />
          <circle cx="120" cy="40" r="8" fill="#fff" />
          <circle cx="160" cy="40" r="8" fill="#fff" />
          <circle cx="200" cy="40" r="8" fill="#fff" />
          <circle cx="60" cy="80" r="8" fill="#fff" />
          <circle cx="100" cy="80" r="8" fill="#fff" />
          <circle cx="140" cy="80" r="8" fill="#fff" />
          <circle cx="180" cy="80" r="8" fill="#fff" />
          <circle cx="40" cy="120" r="8" fill="#fff" />
          <circle cx="80" cy="120" r="8" fill="#fff" />
          <circle cx="120" cy="120" r="8" fill="#fff" />
          <circle cx="160" cy="120" r="8" fill="#fff" />
          <circle cx="200" cy="120" r="8" fill="#fff" />
          <circle cx="60" cy="160" r="8" fill="#fff" />
          <circle cx="100" cy="160" r="8" fill="#fff" />
          <circle cx="140" cy="160" r="8" fill="#fff" />
          <circle cx="180" cy="160" r="8" fill="#fff" />
          <circle cx="40" cy="200" r="8" fill="#fff" />
          <circle cx="80" cy="200" r="8" fill="#fff" />
          <circle cx="120" cy="200" r="8" fill="#fff" />
          <circle cx="160" cy="200" r="8" fill="#fff" />
          <circle cx="200" cy="200" r="8" fill="#fff" />
        </svg>
      );

    case 'uk':
    case 'gb':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-179L0 64V0z" />
          <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-207-82L0 40V0l270 199zM640 0v3L391 191l2-77 172-114zm-640 480v-3l249-188-2 77L77 480z" />
          <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
          <path fill="#C8102E" d="M272 0v480h96V0zM0 192v96h640V192z" />
        </svg>
      );

    case 'canada':
    case 'ca':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#d52b1e" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M160 0h320v480H160z" />
          {/* Maple leaf */}
          <path
            fill="#d52b1e"
            d="m320 80 18 48 36-18-8 44 48 6-32 34 32 30-48 10 14 42-42-12-18 66-18-66-42 12 14-42-48-10 32-30-32-34 48-6-8-44 36 18z"
          />
        </svg>
      );

    case 'australia':
    case 'au':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00008b" d="M0 0h640v480H0z" />
          {/* Union Jack in canton */}
          <g transform="scale(0.5)">
            <path fill="#012169" d="M0 0h640v480H0z" />
            <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-179L0 64V0z" />
            <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-207-82L0 40V0l270 199zM640 0v3L391 191l2-77 172-114zm-640 480v-3l249-188-2 77L77 480z" />
            <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
            <path fill="#C8102E" d="M272 0v480h96V0zM0 192v96h640V192z" />
          </g>
          {/* Southern cross stars */}
          <circle cx="160" cy="360" r="26" fill="#fff" />
          <circle cx="480" cy="120" r="14" fill="#fff" />
          <circle cx="560" cy="200" r="14" fill="#fff" />
          <circle cx="480" cy="380" r="14" fill="#fff" />
          <circle cx="420" cy="240" r="14" fill="#fff" />
          <circle cx="520" cy="280" r="10" fill="#fff" />
        </svg>
      );

    case 'germany':
    case 'de':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000" d="M0 0h640v160H0z" />
          <path fill="#d00" d="M0 160h640v160H0z" />
          <path fill="#ffce00" d="M0 320h640v160H0z" />
        </svg>
      );

    case 'ireland':
    case 'ie':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#169b62" d="M0 0h213.3v480H0z" />
          <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
          <path fill="#ff883e" d="M426.7 0H640v480H426.7z" />
        </svg>
      );

    case 'russia':
    case 'ru':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" d="M0 0h640v160H0z" />
          <path fill="#0039a6" d="M0 160h640v160H0z" />
          <path fill="#d52b1e" d="M0 320h640v160H0z" />
        </svg>
      );

    case 'ukraine':
    case 'ua':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0057b7" d="M0 0h640v240H0z" />
          <path fill="#ffd700" d="M0 240h640v240H0z" />
        </svg>
      );

    case 'georgia':
    case 'ge':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" d="M0 0h640v480H0z" />
          <path fill="#f00" d="M272 0v480h96V0zM0 192v96h640V192z" />
          {/* 4 small crosses in each canton */}
          <path fill="#f00" d="M120 70h32v64h-32zM104 86h64v32h-64z" />
          <path fill="#f00" d="M480 70h32v64h-32zM464 86h64v32h-64z" />
          <path fill="#f00" d="M120 340h32v64h-32zM104 356h64v32h-64z" />
          <path fill="#f00" d="M480 340h32v64h-32zM464 356h64v32h-64z" />
        </svg>
      );

    case 'china':
    case 'cn':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#de2910" d="M0 0h640v480H0z" />
          <circle cx="120" cy="120" r="36" fill="#ffde00" />
          <circle cx="210" cy="60" r="12" fill="#ffde00" />
          <circle cx="240" cy="100" r="12" fill="#ffde00" />
          <circle cx="240" cy="160" r="12" fill="#ffde00" />
          <circle cx="210" cy="200" r="12" fill="#ffde00" />
        </svg>
      );

    case 'philippines':
    case 'ph':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0038a8" d="M0 0h640v240H0z" />
          <path fill="#ce1126" d="M0 240h640v240H0z" />
          <path fill="#fff" d="M0 0l280 240L0 480z" />
          <circle cx="90" cy="240" r="30" fill="#fcd116" />
        </svg>
      );

    case 'kazakhstan':
    case 'kz':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00afca" d="M0 0h640v480H0z" />
          <circle cx="320" cy="220" r="50" fill="#fec50c" />
          <path fill="#fec50c" d="M240 280 Q320 320 400 280 Q320 300 240 280z" />
        </svg>
      );

    case 'newzealand':
    case 'new zealand':
    case 'nz':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00247d" d="M0 0h640v480H0z" />
          <g transform="scale(0.5)">
            <path fill="#012169" d="M0 0h640v480H0z" />
            <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-179L0 64V0z" />
            <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-207-82L0 40V0l270 199zM640 0v3L391 191l2-77 172-114zm-640 480v-3l249-188-2 77L77 480z" />
            <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
            <path fill="#C8102E" d="M272 0v480h96V0zM0 192v96h640V192z" />
          </g>
          {/* Red stars with white border */}
          <circle cx="480" cy="120" r="14" fill="#cc142b" stroke="#fff" strokeWidth="4" />
          <circle cx="560" cy="200" r="14" fill="#cc142b" stroke="#fff" strokeWidth="4" />
          <circle cx="480" cy="380" r="14" fill="#cc142b" stroke="#fff" strokeWidth="4" />
          <circle cx="420" cy="240" r="14" fill="#cc142b" stroke="#fff" strokeWidth="4" />
        </svg>
      );

    case 'singapore':
    case 'sg':
      return (
        <svg className={`${className} rounded shadow-xs overflow-hidden shrink-0`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ed2939" d="M0 0h640v240H0z" />
          <path fill="#fff" d="M0 240h640v240H0z" />
          <circle cx="120" cy="120" r="50" fill="#fff" />
          <circle cx="140" cy="120" r="45" fill="#ed2939" />
          <circle cx="150" cy="90" r="8" fill="#fff" />
          <circle cx="180" cy="100" r="8" fill="#fff" />
          <circle cx="180" cy="140" r="8" fill="#fff" />
          <circle cx="150" cy="150" r="8" fill="#fff" />
          <circle cx="130" cy="120" r="8" fill="#fff" />
        </svg>
      );

    default:
      return (
        <div className={`${className} rounded bg-sky-100 border border-sky-200 flex items-center justify-center text-[10px] font-bold text-[#0080FF]`}>
          {countryCode.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
