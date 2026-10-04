import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/contact.ts';

interface FloatingActionsProps {
  onOpenCounsellingModal?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = () => {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactInfo.whatsappText)}`;
  const phoneUrl = `tel:${contactInfo.phoneRaw}`;

  return (
    <>
      {/* Floating "Call Now" (Bottom-Left) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-40 flex items-center"
      >
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={phoneUrl}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0080FF] hover:bg-[#006EDC] text-white font-semibold text-xs sm:text-sm shadow-xl transition-colors group"
        >
          <Phone className="w-4 h-4 fill-white stroke-none" />
          <span>Call Now</span>
        </motion.a>
      </motion.div>

      {/* Floating WhatsApp Button (Bottom-Right, circular green) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.a
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl focus:outline-none"
        >
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        </motion.a>
      </motion.div>
    </>
  );
};
