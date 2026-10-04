import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { contactInfo } from '../data/contact.ts';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import counsellingImg from '../assets/images/counselling_session_1790920616185.jpg';
import { easings, ScrollReveal, StaggerContainer, StaggerItem } from '../utils/motion.tsx';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'MS Abroad',
    country: 'USA',
    branch: 'Hyderabad (HQ)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactInfo.whatsappText)}`;

  return (
    <div>
      <PageHero
        title="Get in Touch with FLYGRAD"
        subtitle="Visit our corporate headquarters in Jubilee Hills, Hyderabad, or schedule a free phone consultation with our admissions directors."
        badge="Contact Us"
        breadcrumbs={[{ label: 'Contact' }]}
        bgImage={counsellingImg}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Office Info */}
            <ScrollReveal direction="left" className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
                  Headquarters &amp; Consultation
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F85] mt-1">
                  Visit or Call Our Advisory Team
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Our counsellors are available six days a week for in-person profile assessments, mock interviews, and document reviews.
                </p>
              </div>

              {/* Contact Cards Stagger */}
              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 transition-colors hover:border-blue-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E90F0] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Corporate Headquarters</h4>
                      <p className="text-sm font-semibold text-slate-900 mt-1">{contactInfo.officeAddress}</p>
                    </div>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 transition-colors hover:border-blue-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Consultation</h4>
                      <a href={`tel:${contactInfo.phoneRaw}`} className="text-sm font-bold text-[#0A5CC4] hover:underline mt-1 block">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 transition-colors hover:border-blue-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#0B2F85] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Admissions Email</h4>
                      <a href={`mailto:${contactInfo.email}`} className="text-sm font-bold text-[#0A5CC4] hover:underline mt-1 block">
                        {contactInfo.email}
                      </a>
                    </div>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 transition-colors hover:border-blue-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Consultation Hours</h4>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1">{contactInfo.workingHours}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Directly</span>
                </motion.a>
              </div>
            </ScrollReveal>

            {/* Interactive Form */}
            <ScrollReveal direction="right" className="lg:col-span-7">
              <div className="bg-[#F2F8FF] rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
                    Book An Appointment
                  </span>
                  <h3 className="text-2xl font-bold text-[#0B2F85] mt-1">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out this form and our senior counsellor will respond with an admissions audit within 2 business hours.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: easings.expoOut }}
                      className="py-12 text-center space-y-4 bg-white rounded-2xl p-8 border border-slate-200"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
                        className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
                      </motion.div>
                      <h4 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully!</h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <span className="font-semibold">{formData.name}</span>. An admissions counselor from our <span className="font-semibold text-[#0A5CC4]">{formData.branch}</span> desk has been assigned to your query and will contact you via WhatsApp / phone shortly.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl bg-[#0B2F85] text-white font-medium text-xs hover:bg-[#0A1F5C] transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sai Teja"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Phone Number (with WhatsApp) *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="student@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Program Interest
                          </label>
                          <select
                            value={formData.program}
                            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
                          >
                            <option value="MS Abroad">MS / Master's Abroad</option>
                            <option value="MBBS Abroad">MBBS Overseas (NMC/WHO)</option>
                            <option value="IELTS / PTE">English Test Prep (IELTS/PTE)</option>
                            <option value="German Language">German Language (A1–B2)</option>
                            <option value="General Counselling">General Profile Audit</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Preferred Country
                          </label>
                          <select
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
                          >
                            <option value="USA">United States (USA)</option>
                            <option value="UK">United Kingdom (UK)</option>
                            <option value="Germany">Germany (Tuition-Free)</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Georgia (MBBS)">Georgia (MBBS)</option>
                            <option value="Kazakhstan (MBBS)">Kazakhstan (MBBS)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Nearest Branch Office
                        </label>
                        <select
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
                        >
                          <option value="Hyderabad (HQ)">Hyderabad (Jubilee Hills HQ)</option>
                          <option value="Bengaluru">Bengaluru Branch</option>
                          <option value="Vijayawada">Vijayawada Branch</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Your Query or Academic Profile Summary
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Mention your current CGPA, degree, target intake, and specific questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-6 rounded-xl gradient-brand-btn text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{loading ? 'Submitting...' : 'Submit Inquiry'}</span>
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5CC4]">
              Location &amp; Map
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B2F85]">
              Locate Our Hyderabad Corporate Office
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Pinnacle Global Towers, Road No. 36, Jubilee Hills, Hyderabad
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-[16/6] bg-slate-200 w-full min-h-[350px]">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Flygrad Corporate Headquarters Map"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
