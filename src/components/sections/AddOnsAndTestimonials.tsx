import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import studentCutoutImg from '../../assets/images/addons_student_girl.jpg';
import priyaSharmaImg from '../../assets/images/priya_sharma_avatar.jpg';
import { easings } from '../../utils/motion';

const addOnsList = [
  {
    num: "01",
    title: "IELTS / PTE Support",
    desc: "Prepare for your English proficiency tests."
  },
  {
    num: "02",
    title: "SOP and LOR Help",
    desc: "Craft compelling statements for your success."
  },
  {
    num: "03",
    title: "Scholarship Guidance",
    desc: "Get the best financial support options."
  },
  {
    num: "04",
    title: "Visa Mock Interviews",
    desc: "Build confidence for your visa interview."
  },
  {
    num: "05",
    title: "Pre-Departure Briefing",
    desc: "Get ready for a smooth journey abroad."
  }
];

const testimonialsList = [
  {
    id: 1,
    quote: "Flygrad made my dream of studying in the USA a reality. Their guidance, support and constant motivation were exceptional. I highly recommend them to anyone who wants to study abroad.",
    name: "Priya Sharma",
    degree: "MS Computer Science",
    university: "University of Texas at Austin, USA",
    avatar: priyaSharmaImg
  },
  {
    id: 2,
    quote: "Securing an admit in Germany without tuition fees seemed daunting until I met the Flygrad counsellors. They guided me through APS certification and visa filing with zero flaws.",
    name: "Rahul Nair",
    degree: "MS Automotive Engineering",
    university: "RWTH Aachen, Germany",
    avatar: priyaSharmaImg
  },
  {
    id: 3,
    quote: "The personalized SOP editing and mock visa interview sessions gave me tremendous confidence. I received admits from 4 prestigious universities with scholarships!",
    name: "Sneha Patel",
    degree: "MS Data Science",
    university: "Northeastern University, USA",
    avatar: priyaSharmaImg
  },
  {
    id: 4,
    quote: "Transparent guidance for medical admissions abroad. They helped me get into a top NMC recognized medical university in Georgia with complete hostel and visa support.",
    name: "Dr. Ananya Reddy",
    degree: "MBBS Program",
    university: "Batumi Shota Rustaveli State University",
    avatar: priyaSharmaImg
  }
];

export const AddOnsAndTestimonials: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonialIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonialsList[currentTestimonialIndex];

  return (
    <section className="py-16 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Left Column: Add-Ons Along the Way */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easings.expoOut }}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                ADDITIONAL SUPPORT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight">
                Add-Ons Along the Way
              </h2>
            </motion.div>

            <div className="relative grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Numbered List with Cascading Scroll Reveal */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="sm:col-span-7 space-y-4"
              >
                {addOnsList.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easings.expoOut } },
                    }}
                    className="flex items-start gap-3.5 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0080FF] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs shadow-blue-500/20 group-hover:scale-110 group-hover:bg-[#006EDC] transition-all">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0080FF] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Student Graphic with Floating Micro-Animation */}
              <div className="sm:col-span-5 flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: easings.expoOut }}
                  className="relative"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-xl border-4 border-white bg-[#E0F2FE]"
                  >
                    <img
                      src={studentCutoutImg}
                      alt="Student holding study materials for study abroad"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    {/* Floating Plane Accent */}
                    <motion.div
                      animate={{ x: [-2, 2, -2], y: [-2, 2, -2] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-4 right-4 pointer-events-none opacity-90"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="#0080FF" fillOpacity="0.4" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Stories, Global Dreams */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easings.expoOut }}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                STUDENT TESTIMONIALS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight">
                Real Stories, Global Dreams
              </h2>
            </motion.div>

            {/* Testimonial Box with Animated Slider */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: easings.expoOut }}
              className="relative flex items-center"
            >
              {/* Left Arrow Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="absolute -left-3 sm:-left-5 z-10 w-9 h-9 rounded-full bg-white text-slate-600 hover:text-[#0080FF] shadow-md border border-slate-200/80 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* White Testimonial Card with Crossfade */}
              <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative min-h-[260px] flex flex-col justify-between overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0, x: direction * 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 16 }}
                    transition={{ duration: 0.35, ease: easings.expoOut }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Cyan Quote Mark */}
                      <div className="text-4xl sm:text-5xl font-serif text-[#00D2FF] font-black leading-none mb-3">
                        “
                      </div>
                      
                      {/* Quote Text */}
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {activeTestimonial.quote}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100">
                      <img
                        src={activeTestimonial.avatar}
                        alt={activeTestimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#0080FF]/30 shadow-xs"
                        loading="lazy"
                      />
                      <div>
                        <div className="text-sm font-bold text-slate-900 leading-tight">
                          {activeTestimonial.name}
                        </div>
                        <div className="text-xs text-[#0080FF] font-semibold mt-0.5">
                          {activeTestimonial.degree}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {activeTestimonial.university}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="absolute -right-3 sm:-right-5 z-10 w-9 h-9 rounded-full bg-white text-slate-600 hover:text-[#0080FF] shadow-md border border-slate-200/80 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
