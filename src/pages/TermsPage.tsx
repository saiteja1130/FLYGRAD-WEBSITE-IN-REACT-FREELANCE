import React from 'react';
import { PageHero } from '../components/layout/PageHero.tsx';

export const TermsPage: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Terms of Service"
        subtitle="The terms governing the use of FLYGRAD educational advisory and consulting services."
        breadcrumbs={[{ label: 'Terms of Service' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm sm:text-base leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-[#0B2F85]">1. Acceptance of Terms</h2>
          <p className="text-slate-600">
            By engaging FLYGRAD for educational counselling, university application assistance, language test training, or visa filing, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-[#0B2F85]">2. Scope of Educational Advisory</h2>
          <p className="text-slate-600">
            FLYGRAD provides professional consulting, document evaluation, and application coordination. University admissions decisions, scholarship awards, and visa issuance remain at the sole discretion of respective universities, embassies, and consular authorities.
          </p>

          <h2 className="text-xl font-bold text-[#0B2F85]">3. Student Responsibilities</h2>
          <p className="text-slate-600">
            Students are responsible for providing genuine, truthful, and unaltered academic transcripts, test certificates, and financial statements. Any fraudulent documentation results in immediate termination of advisory services.
          </p>

          <h2 className="text-xl font-bold text-[#0B2F85]">4. Intellectual Property</h2>
          <p className="text-slate-600">
            All proprietary curriculum materials, SOP storyboards, and mock test question banks provided by FLYGRAD remain intellectual property of FLYGRAD and may not be distributed without written consent.
          </p>
        </div>
      </section>
    </div>
  );
};
