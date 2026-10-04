import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage.tsx';
import { AboutPage } from '../pages/AboutPage.tsx';
import { ServicesPage } from '../pages/ServicesPage.tsx';
import { StudyAbroadPage } from '../pages/StudyAbroadPage.tsx';
import { MbbsAbroadPage } from '../pages/MbbsAbroadPage.tsx';
import { EnglishTestsPage } from '../pages/EnglishTestsPage.tsx';
import { GermanLanguagePage } from '../pages/GermanLanguagePage.tsx';
import { CountriesPage } from '../pages/CountriesPage.tsx';
import { GalleryPage } from '../pages/GalleryPage.tsx';
import { TestimonialsPage } from '../pages/TestimonialsPage.tsx';
import { FaqPage } from '../pages/FaqPage.tsx';
import { ContactPage } from '../pages/ContactPage.tsx';
import { PrivacyPage } from '../pages/PrivacyPage.tsx';
import { TermsPage } from '../pages/TermsPage.tsx';
import { NotFoundPage } from '../pages/NotFoundPage.tsx';

interface AppRoutesProps {
  onOpenCounselling: (programName?: string) => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({ onOpenCounselling }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage onOpenCounselling={onOpenCounselling} />} />
      <Route path="/about" element={<AboutPage onOpenCounselling={() => onOpenCounselling()} />} />
      <Route path="/services" element={<ServicesPage onOpenCounselling={onOpenCounselling} />} />
      <Route path="/study-abroad" element={<StudyAbroadPage onOpenCounselling={onOpenCounselling} />} />
      <Route path="/mbbs-abroad" element={<MbbsAbroadPage onOpenCounselling={onOpenCounselling} />} />
      <Route path="/english-tests" element={<EnglishTestsPage onOpenCounselling={onOpenCounselling} />} />
      <Route path="/german-language" element={<GermanLanguagePage onOpenCounselling={onOpenCounselling} />} />
      <Route path="/countries" element={<CountriesPage onOpenCounselling={onOpenCounselling} />} />
      <Route path="/gallery" element={<GalleryPage onOpenCounselling={() => onOpenCounselling()} />} />
      <Route path="/testimonials" element={<TestimonialsPage onOpenCounselling={() => onOpenCounselling()} />} />
      <Route path="/faq" element={<FaqPage onOpenCounselling={() => onOpenCounselling()} />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* <Route path="/privacy" element={<PrivacyPage />} /> */}
      {/* <Route path="/terms" element={<TermsPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
