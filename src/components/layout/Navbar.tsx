import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../common/Logo.tsx';
import { useScrollPosition } from '../../hooks/useScrollPosition.ts';
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Stethoscope,
  BookOpenCheck,
  Languages,
  Compass,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { contactInfo } from '../../data/contact.ts';

interface NavbarProps {
  onOpenCounselling: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCounselling }) => {
  const { isScrolled } = useScrollPosition();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [studyDropdown, setStudyDropdown] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMobile = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-white border-b border-slate-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Zone 1: Logo Brand Wordmark */}
            <Link to="/" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E90F0] rounded-lg shrink-0">
              <Logo size="md" />
            </Link>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
              <Link
                to="/"
                className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive('/') ? 'text-[#0080FF]' : 'text-slate-700 hover:text-[#0080FF]'
                }`}
              >
                <span>Home</span>
                {isActive('/') && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0080FF] rounded-full" />
                )}
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  type="button"
                  className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/services') || location.pathname.startsWith('/english') || location.pathname.startsWith('/german')
                      ? 'text-[#0080FF]'
                      : 'text-slate-700 hover:text-[#0080FF]'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#0080FF]' : 'text-slate-400'}`} />
                  {location.pathname.startsWith('/services') && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0080FF] rounded-full" />
                  )}
                </button>

                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50">
                    <div className="p-3 bg-white rounded-2xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                      <Link
                        to="/services"
                        onClick={() => setServicesDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F2F8FF] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E90F0] flex items-center justify-center shrink-0">
                          <Compass className="w-4 h-4 text-[#0080FF]" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0080FF]">All Advisory Services</div>
                          <div className="text-[11px] text-slate-500">End-to-end counselling & visa filing</div>
                        </div>
                      </Link>

                      <Link
                        to="/english-tests"
                        onClick={() => setServicesDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F2F8FF] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                          <BookOpenCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0080FF]">English Tests Prep</div>
                          <div className="text-[11px] text-slate-500">IELTS, PTE, TOEFL & Duolingo</div>
                        </div>
                      </Link>

                      <Link
                        to="/german-language"
                        onClick={() => setServicesDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F2F8FF] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                          <Languages className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0080FF]">German Language Classes</div>
                          <div className="text-[11px] text-slate-500">A1 to B2 for tuition-free study</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Study Abroad Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setStudyDropdown(true)}
                onMouseLeave={() => setStudyDropdown(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/study') || location.pathname.startsWith('/mbbs') || location.pathname.startsWith('/countries')
                      ? 'text-[#0080FF]'
                      : 'text-slate-700 hover:text-[#0080FF]'
                  }`}
                >
                  <span>Study Abroad</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${studyDropdown ? 'rotate-180 text-[#0080FF]' : 'text-slate-400'}`} />
                </button>

                {studyDropdown && (
                  <div className="absolute top-full left-0 w-72 pt-2 z-50">
                    <div className="p-3 bg-white rounded-2xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                      <Link
                        to="/study-abroad"
                        onClick={() => setStudyDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F2F8FF] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E90F0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0080FF]">MS & Postgraduate</div>
                          <div className="text-[11px] text-slate-500">STEM, Business & Research admits</div>
                        </div>
                      </Link>

                      <Link
                        to="/mbbs-abroad"
                        onClick={() => setStudyDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F2F8FF] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Stethoscope className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0080FF]">MBBS Abroad</div>
                          <div className="text-[11px] text-slate-500">NMC & WHO recognized universities</div>
                        </div>
                      </Link>

                      <Link
                        to="/countries"
                        onClick={() => setStudyDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F2F8FF] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#33C9FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Compass className="w-4 h-4 text-[#0080FF]" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0080FF]">Explore Countries</div>
                          <div className="text-[11px] text-slate-500">USA, UK, Germany, Canada, Ireland</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-[#0080FF]' : 'text-slate-700 hover:text-[#0080FF]'
                }`}
              >
                <span>About Us</span>
                {isActive('/about') && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0080FF] rounded-full" />
                )}
              </Link>

              <Link
                to="/gallery"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/gallery') ? 'text-[#0080FF]' : 'text-slate-700 hover:text-[#0080FF]'
                }`}
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-[#0080FF]' : 'text-slate-700 hover:text-[#0080FF]'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Zone 3: Primary Action & Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenCounselling}
                className="hidden sm:inline-flex bg-[#0080FF] hover:bg-[#006EDC] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 sm:px-6 rounded-full whitespace-nowrap shadow-sm hover:shadow-md transition-all items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Book Free Counselling</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E90F0] cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={closeMobile}
            aria-hidden="true"
          />

          <div className="relative z-10 ml-auto w-full max-w-xs sm:max-w-sm h-full bg-white p-6 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-250 flex flex-col justify-between">
            <div>
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Logo size="sm" />
                <button
                  onClick={closeMobile}
                  aria-label="Close menu"
                  className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Drawer Navigation Links */}
              <div className="py-6 space-y-1">
                <Link
                  to="/"
                  onClick={closeMobile}
                  className={`block px-3 py-2.5 rounded-xl font-medium text-sm ${isActive('/') ? 'bg-[#F2F8FF] text-[#0A5CC4]' : 'text-slate-800'}`}
                >
                  Home
                </Link>

                <div className="pt-2 pb-1 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Programs & Study Abroad
                </div>

                <Link
                  to="/study-abroad"
                  onClick={closeMobile}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  <GraduationCap className="w-4 h-4 text-[#1E90F0]" />
                  <span>MS & Postgraduate Abroad</span>
                </Link>

                <Link
                  to="/mbbs-abroad"
                  onClick={closeMobile}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  <Stethoscope className="w-4 h-4 text-teal-600" />
                  <span>MBBS Abroad (NMC/WHO)</span>
                </Link>

                <Link
                  to="/english-tests"
                  onClick={closeMobile}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  <BookOpenCheck className="w-4 h-4 text-indigo-600" />
                  <span>English Tests (IELTS / PTE / DET)</span>
                </Link>

                <Link
                  to="/german-language"
                  onClick={closeMobile}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  <Languages className="w-4 h-4 text-amber-600" />
                  <span>German Language (A1 – B2)</span>
                </Link>

                <Link
                  to="/countries"
                  onClick={closeMobile}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  <Compass className="w-4 h-4 text-[#0A5CC4]" />
                  <span>Explore 20+ Destinations</span>
                </Link>

                <div className="pt-3 pb-1 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Company & Resources
                </div>

                <Link
                  to="/services"
                  onClick={closeMobile}
                  className="block px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  Our Services
                </Link>

                <Link
                  to="/about"
                  onClick={closeMobile}
                  className="block px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  About Flygrad
                </Link>

                <Link
                  to="/gallery"
                  onClick={closeMobile}
                  className="block px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  Gallery & Events
                </Link>

                <Link
                  to="/testimonials"
                  onClick={closeMobile}
                  className="block px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  Student Testimonials
                </Link>

                <Link
                  to="/faq"
                  onClick={closeMobile}
                  className="block px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  FAQs
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="block px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50"
                >
                  Contact & Branches
                </Link>
              </div>
            </div>

            {/* Mobile Drawer Bottom Action */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  closeMobile();
                  onOpenCounselling();
                }}
                className="w-full py-3 px-4 rounded-xl gradient-brand-btn text-white font-semibold text-sm shadow-md"
              >
                Book Free Counselling
              </button>
              <div className="text-center text-xs text-slate-500">
                Call: <a href={`tel:${contactInfo.phoneRaw}`} className="text-[#0A5CC4] font-medium">{contactInfo.phone}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
