import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import studentCutoutImg from '../../assets/images/addons_student_girl.jpg';
import priyaSharmaImg from '../../assets/images/priya_sharma_avatar.jpg';

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

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonialsList[currentTestimonialIndex];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Left Column: Add-Ons Along the Way */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                ADDITIONAL SUPPORT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight">
                Add-Ons Along the Way
              </h2>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Numbered List */}
              <div className="sm:col-span-7 space-y-4">
                {addOnsList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-8 h-8 rounded-full bg-[#0080FF] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs shadow-blue-500/20 group-hover:scale-105 transition-transform">
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
                  </div>
                ))}
              </div>

              {/* Student Graphic with Circular Backdrop */}
              <div className="sm:col-span-5 flex justify-center items-center">
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#E0F2FE]">
                  <img
                    src={studentCutoutImg}
                    alt="Student holding study materials for study abroad"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  {/* Subtle Flying Plane Overlay */}
                  <div className="absolute top-4 right-4 pointer-events-none opacity-80">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="#0080FF" fillOpacity="0.3" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Stories, Global Dreams */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                STUDENT TESTIMONIALS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] tracking-tight">
                Real Stories, Global Dreams
              </h2>
            </div>

            {/* Testimonial Box with Arrows */}
            <div className="relative flex items-center">
              {/* Left Arrow Button */}
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="absolute -left-3 sm:-left-5 z-10 w-9 h-9 rounded-full bg-white text-slate-600 hover:text-[#0080FF] shadow-md border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* White Testimonial Card */}
              <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative min-h-[260px] flex flex-col justify-between">
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
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {activeTestimonial.degree}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {activeTestimonial.university}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="absolute -right-3 sm:-right-5 z-10 w-9 h-9 rounded-full bg-white text-slate-600 hover:text-[#0080FF] shadow-md border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentTestimonialIndex === idx
                      ? 'bg-[#0080FF] scale-125'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
