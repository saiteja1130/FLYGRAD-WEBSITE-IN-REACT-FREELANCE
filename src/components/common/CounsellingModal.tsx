import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, User, Phone, Mail, Globe, GraduationCap } from 'lucide-react';

interface CounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
  defaultCountry?: string;
}

export const CounsellingModal: React.FC<CounsellingModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = 'MS Abroad',
  defaultCountry = 'USA'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: defaultProgram,
    country: defaultCountry,
    intakeYear: '2027',
    preferredMode: 'In-Office (Hyderabad)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Lock background body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit mobile number required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate real submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with brand accent */}
        <div className="relative p-4 sm:p-6 lg:p-7 bg-[#0B2F85] text-white shrink-0">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#33C9FF]/20 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />
          <button
            onClick={handleResetAndClose}
            aria-label="Close dialog"
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#33C9FF] mb-0.5 sm:mb-1">
            Free 1-on-1 Consultation
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white pr-8">
            Schedule Your Free Counselling
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-md line-clamp-2 sm:line-clamp-none">
            Meet our certified international education directors to audit your profile, scholarships, and visa strategy.
          </p>
        </div>

        {/* Content body - scrollable on mobile */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1 overscroll-contain">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Application Confirmed!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our Senior Admissions Counsellor for <span className="font-semibold text-[#0A5CC4]">{formData.country}</span> will reach out within 2 working hours at <span className="font-semibold text-slate-900">{formData.phone}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-[#0B2F85] text-white font-medium text-sm hover:bg-[#0A1F5C] transition-colors"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sai Teja"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E90F0] ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E90F0] ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E90F0] ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Program
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
                    >
                      <option value="MS Abroad">MS / Master's Abroad</option>
                      <option value="MBBS Abroad">MBBS Overseas (NMC/WHO)</option>
                      <option value="IELTS / PTE / TOEFL">English Proficiency (IELTS/PTE)</option>
                      <option value="German Language">German Language (A1–B2)</option>
                      <option value="Undergraduate">Bachelor's / B.Tech Abroad</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Country
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Intake
                  </label>
                  <select
                    value={formData.intakeYear}
                    onChange={(e) => setFormData({ ...formData, intakeYear: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
                  >
                    <option value="2027">Fall 2027 (Immediate)</option>
                    <option value="2028-Spring">Spring 2028</option>
                    <option value="2028-Fall">Fall 2028</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Counselling Mode
                  </label>
                  <select
                    value={formData.preferredMode}
                    onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90F0]"
                  >
                    <option value="In-Office (Hyderabad)">In-Office (Jubilee Hills, Hyderabad)</option>
                    <option value="Virtual Video Call (Google Meet)">Virtual Video Call (Google Meet)</option>
                    <option value="Phone Call Consultation">Phone Call Consultation</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 sm:pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl gradient-brand-btn text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{loading ? 'Confirming Appointment...' : 'Confirm Free 45-Min Counselling'}</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  🔒 We protect your data. Zero spam. 100% free personalized consultation.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
