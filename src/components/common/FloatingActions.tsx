import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/contact.ts';

interface FloatingActionsProps {
  onOpenCounsellingModal?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenCounsellingModal }) => {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactInfo.whatsappText)}`;
  const phoneUrl = `tel:${contactInfo.phoneRaw}`;

  return (
    <>
      {/* Floating "Call Now" (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center">
        <a
          href={phoneUrl}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white font-semibold text-xs sm:text-sm shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95 group"
        >
          <Phone className="w-4 h-4 fill-white stroke-none" />
          <span>Call Now</span>
        </a>
      </div>

      {/* Floating WhatsApp Button (Bottom-Right, circular green) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none"
        >
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        </a>
      </div>
    </>
  );
};
