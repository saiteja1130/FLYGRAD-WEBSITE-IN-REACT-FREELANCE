import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Home } from 'lucide-react';
import { easings } from '../../utils/motion';

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
    <section className="relative overflow-hidden bg-[#0A1F5C] text-white py-16 border-b border-slate-800">
      {/* Background with measured contrast scrim */}
      {bgImage ? (
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 1.2, ease: easings.expoOut }}
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity pointer-events-none"
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
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easings.expoOut }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-300 mb-4 sm:mb-6"
        >
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
        </motion.nav>

        {/* Content with Staggered Entrance */}
        <div className="max-w-3xl">
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easings.expoOut, delay: 0.1 }}
              className="inline-block text-xs font-semibold uppercase tracking-wider text-[#33C9FF] mb-2"
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easings.expoOut, delay: 0.18 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easings.expoOut, delay: 0.26 }}
            className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
