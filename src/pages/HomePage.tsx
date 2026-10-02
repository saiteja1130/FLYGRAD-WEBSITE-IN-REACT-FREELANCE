import React from 'react';
import { Hero } from '../components/sections/Hero.tsx';
import { StatsMarquee } from '../components/sections/StatsMarquee.tsx';
import { SectionTwoFeatures } from '../components/sections/SectionTwoFeatures.tsx';
import { AddOnsAndTestimonials } from '../components/sections/AddOnsAndTestimonials.tsx';
import { CredentialsAndPartners } from '../components/sections/CredentialsAndPartners.tsx';
import { BlueCounterStrip } from '../components/sections/BlueCounterStrip.tsx';
import { ProgramTabs } from '../components/sections/ProgramTabs.tsx';
import { GlobalEducationProviders } from '../components/sections/GlobalEducationProviders.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';

interface HomePageProps {
  onOpenCounselling: (programName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCounselling }) => {
  return (
    <div className="space-y-0 selection:bg-[#0080FF]/20 selection:text-[#0B2F85]">
      {/* 1. Full Hero Section with Airport Backdrop, Headline & Fast Booking Card */}
      <Hero onOpenCounselling={() => onOpenCounselling()} />

      {/* 2. Stats Marquee Blue Ribbon Strip */}
      <StatsMarquee />

      {/* 3. Section 2: "Where Students Learn, Plan & Fly Abroad" + 3 Feature Cards & Stat Badges */}
      <SectionTwoFeatures />

      {/* 4. Two-Column Row: Add-Ons Along the Way (with cutout) + Real Stories Testimonial Card */}
      <AddOnsAndTestimonials />

      {/* 5. Two-Column Row: Recognised & Certified + Top Universities & Test Bodies */}
      <CredentialsAndPartners />

      {/* 6. Blue Impact Metric Counter Strip */}
      <BlueCounterStrip />

      {/* 7. Work-Ready Certification Program Tabs with Historic Campus Architecture & Checklist */}
      <ProgramTabs onOpenCounselling={onOpenCounselling} />

      {/* 8. Global Partners - Trusted by Leading Education Providers */}
      <GlobalEducationProviders />

      {/* 9. Take the First Step CTA Banner */}
      <CTABand onOpenCounselling={() => onOpenCounselling()} />
    </div>
  );
};
