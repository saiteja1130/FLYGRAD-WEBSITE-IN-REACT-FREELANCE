import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs,
  bgImage
}) => {
  return (
    <section className="relative overflow-hidden bg-[#0A1F5C] text-white py-16  border-b border-slate-800">
      {/* Background with measured contrast scrim */}
      {bgImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      ) : null}

      {/* Brand gradient glow overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#33C9FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1E90F0]/15 rounded-full blur-3xl pointer-events-none" />

      {/* SVG flight line accent */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-100,120 Q300,50 800,160 T1800,80"
          fill="none"
          stroke="url(#pageHeroGrad)"
          strokeWidth="2"
          className="animate-flight-path"
        />
        <defs>
          <linearGradient id="pageHeroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#33C9FF" />
            <stop offset="100%" stopColor="#1E90F0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 mb-4 sm:mb-6">
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#33C9FF] font-medium" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#33C9FF] mb-2">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
