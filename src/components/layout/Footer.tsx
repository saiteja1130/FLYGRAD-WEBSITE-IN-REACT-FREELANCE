import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo.tsx';
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';
import { contactInfo } from '../../data/contact.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#061434] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <Logo variant="dark" size="md" />
            </Link>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Your Journey to Global Education Starts Here
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://instagram.com/flygrad"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/flygrad"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@flygrad"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/flygrad"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/study-abroad" className="hover:text-white transition-colors">Study Abroad</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link to="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider mb-4">
              Contact Us
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${contactInfo.phoneRaw}`} className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:info@flygrad.com" className="hover:text-white transition-colors">
                  info@flygrad.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>123 Education Street, Bangalore, Karnataka 560001</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 Flygrad. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
