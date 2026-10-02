import React from 'react';
import { PageHero } from '../components/layout/PageHero.tsx';

export const PrivacyPage: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How FLYGRAD collects, uses, and safeguards your student profile and admissions information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm sm:text-base leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-[#0B2F85]">1. Introduction</h2>
          <p className="text-slate-600">
            FLYGRAD ("we", "our", or "us") respects the privacy of every student, parent, and website visitor. This Privacy Policy outlines the types of personal information we receive and collect when you use our educational consulting services.
          </p>

          <h2 className="text-xl font-bold text-[#0B2F85]">2. Information We Collect</h2>
          <p className="text-slate-600">
            We collect personal details including full name, phone number, email address, academic marks (GPA, backlogs, transcripts), standardized test scores (IELTS, TOEFL, PTE, GRE, NEET), and financial records strictly for university shortlisting, application filing, and visa compliance auditing.
          </p>

          <h2 className="text-xl font-bold text-[#0B2F85]">3. Use of Information</h2>
          <p className="text-slate-600">
            Your data is used solely to evaluate admissions eligibility, process university application portals, coordinate with foreign university international admissions desks, and schedule visa mock appointments. We never sell, lease, or rent your personal information to third-party marketing entities.
          </p>

          <h2 className="text-xl font-bold text-[#0B2F85]">4. Security of Data</h2>
          <p className="text-slate-600">
            We implement industry-standard encryption and strict access control mechanisms to protect your sensitive academic documents and identification records from unauthorized access.
          </p>

          <h2 className="text-xl font-bold text-[#0B2F85]">5. Contact Us</h2>
          <p className="text-slate-600">
            For privacy queries or to request deletion of your records, contact our privacy compliance officer at <span className="font-semibold text-[#0A5CC4]">admissions@flygrad.com</span>.
          </p>
        </div>
      </section>
    </div>
  );
};
