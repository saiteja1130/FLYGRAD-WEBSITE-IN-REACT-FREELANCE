import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData, Testimonial } from '../../data/testimonials.ts';
import { ChevronLeft, ChevronRight, Star, Quote, Award } from 'lucide-react';
import { easings } from '../../utils/motion';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current: Testimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easings.expoOut }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
            Real Journeys, Verified Admits
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2F85] tracking-tight [text-wrap:balance]">
            Trusted by Students Worldwide
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Read authentic experiences from scholars who turned their global education ambitions into successful admits and international careers.
          </p>
        </motion.div>

        {/* Large Quote Card (Adyapan style) */}
        <div className="relative max-w-5xl mx-auto bg-[#F2F8FF] rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-md overflow-hidden">
          {/* Ambient Quote watermark */}
          <Quote className="absolute top-6 right-8 w-24 h-24 text-[#1E90F0]/10 pointer-events-none stroke-[1]" />

          <div className="min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 24 }}
                transition={{ duration: 0.35, ease: easings.expoOut }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Student Portrait & Profile Badge */}
                <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-200">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 text-xl" title={current.country}>
                      {current.flag}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                      {current.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#0A5CC4] mt-0.5">
                      {current.degree}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {current.university}
                    </p>
                  </div>

                  {current.scholarship && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-blue-200 text-xs font-semibold text-[#0B2F85] shadow-xs">
                      <Award className="w-3.5 h-3.5 text-[#1E90F0]" />
                      <span>{current.scholarship}</span>
                    </div>
                  )}
                </div>

                {/* Testimonial Quote & Star Rating */}
                <div className="md:col-span-8 space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-slate-500">
                      {current.scoreHighlight}
                    </span>
                  </div>

                  <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-800 font-medium leading-relaxed italic">
                    "{current.quote}"
                  </blockquote>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      Admit Verified by Flygrad Admissions Desk · {current.country}
                    </div>

                    {/* Slider Navigation Buttons */}
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={prev}
                        aria-label="Previous testimonial"
                        className="p-2.5 rounded-full bg-white text-slate-700 hover:text-[#0A5CC4] hover:bg-slate-50 border border-slate-200 transition-colors shadow-xs cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={next}
                        aria-label="Next testimonial"
                        className="p-2.5 rounded-full bg-white text-slate-700 hover:text-[#0A5CC4] hover:bg-slate-50 border border-slate-200 transition-colors shadow-xs cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#0B2F85]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
