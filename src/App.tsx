import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { AppRoutes } from './routes/AppRoutes.tsx';
import { ScrollProgress } from './components/common/ScrollProgress.tsx';
import { ScrollToTopOnRoute, ScrollToTopButton } from './components/common/ScrollToTop.tsx';
import { FloatingActions } from './components/common/FloatingActions.tsx';
import { CounsellingModal } from './components/common/CounsellingModal.tsx';

export default function App() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('MS Abroad');

  // Initialize Lenis smooth scroll
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    try {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
      });

      let animationFrameId: number;
      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }
      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
      };
    } catch (e) {
      console.warn('Lenis smooth scrolling initialization note:', e);
    }
  }, []);

  const handleOpenCounselling = (programName?: string) => {
    if (programName) {
      setSelectedProgram(programName);
    }
    setCounsellingModalOpen(true);
  };

  return (
    <BrowserRouter>
      {/* Top Reading / Scroll Progress Bar */}
      <ScrollProgress />

      {/* Auto-scroll restoration to top on route change */}
      <ScrollToTopOnRoute />

      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#33C9FF]/20 selection:text-[#0A1F5C]">
        {/* Sticky Header Navbar */}
        <Navbar onOpenCounselling={() => handleOpenCounselling()} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <AppRoutes onOpenCounselling={handleOpenCounselling} />
        </main>

        {/* Global Dark Navy Footer */}
        <Footer />

        {/* Floating Actions: WhatsApp (bottom-right), Call Now (bottom-left/sticky), and safely stacked Scroll-to-Top */}
        <FloatingActions onOpenCounsellingModal={() => handleOpenCounselling()} />
        <ScrollToTopButton />

        {/* Global Free Counselling Modal */}
        <CounsellingModal
          isOpen={counsellingModalOpen}
          onClose={() => setCounsellingModalOpen(false)}
          defaultProgram={selectedProgram}
        />
      </div>
    </BrowserRouter>
  );
}
