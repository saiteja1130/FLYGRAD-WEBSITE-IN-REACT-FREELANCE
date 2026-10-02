export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  highlights: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "ms-abroad",
    slug: "ms-abroad",
    title: "MS & Postgraduate Admissions",
    category: "Higher Education",
    shortDesc: "End-to-end guidance for Master of Science, MBA, and PhD admissions in top universities across the USA, UK, Canada, Germany, and Ireland.",
    fullDesc: "Our STEM & business postgraduate advisory helps you evaluate GPA, work experience, research credentials, and career ambitions to pinpoint high-ranking, budget-aligned universities with maximum scholarship potential and post-study work permits.",
    icon: "GraduationCap",
    highlights: [
      "Custom Profile Evaluation & SWOT Analysis",
      "Ambitious, Target & Safe University Shortlisting",
      "Application Fee Waiver Assistance",
      "Assistantship (TA/RA) & Fellowship Strategy"
    ],
    deliverables: [
      "Shortlist of 8–12 verified universities",
      "Application deadlines and portal checklists",
      "Direct communication with university admissions representatives"
    ],
    process: [
      { step: "01", title: "Profile Audit", desc: "Deep dive into your academics, backlogs, research, and career goals." },
      { step: "02", title: "Smart Shortlisting", desc: "Curated tier-1, tier-2 and safe programs with high ROI." },
      { step: "03", title: "Submission & Tracking", desc: "Timely portal filings, transcripts verification, and admit tracking." }
    ]
  },
  {
    id: "mbbs-abroad",
    slug: "mbbs-abroad",
    title: "MBBS in NMC & WHO Recognised Universities",
    category: "Medical Studies",
    shortDesc: "Affordable, English-medium medical degrees in Georgia, Kazakhstan, Russia, Uzbekistan, and Philippines with high NEXT/FMGE passing rates.",
    fullDesc: "Study MBBS overseas with transparent fee structures, direct university admissions, state-of-the-art clinical simulation hospitals, and 100% eligibility compliance under National Medical Commission (NMC) foreign medical graduate guidelines.",
    icon: "Stethoscope",
    highlights: [
      "English-Medium 5 to 6 Year Curriculum",
      "Govt & NMC/WHO/WFME Accredited Medical Colleges",
      "Affordable Tuition: Starting from $3,500/year",
      "Guaranteed Clinical Rotations & Indian Mess Facilities"
    ],
    deliverables: [
      "Official University Admission Letter",
      "Ministry of Foreign Affairs (MFA) & Apostille verification",
      "Hostel allotment, airport pickup, and local guardian support"
    ],
    process: [
      { step: "01", title: "NEET Eligibility Check", desc: "Verification of 50th percentile NEET qualification and PCB criteria." },
      { step: "02", title: "College Selection", desc: "Choose top government medical academies with modern hospital affiliations." },
      { step: "03", title: "Visa & Departure", desc: "Student visa stamping, flight booking with batch companions, and on-ground settlement." }
    ]
  },
  {
    id: "english-tests",
    slug: "english-tests",
    title: "English Proficiency Coaching (IELTS / PTE / TOEFL / DET)",
    category: "Test Prep",
    shortDesc: "Intensive score-guarantee classroom and interactive online coaching led by British Council and IDP certified master trainers.",
    fullDesc: "Master Listening, Reading, Writing, and Speaking with proprietary diagnostic mock tests, band-8 model answers, personalized essay reviews, and real-time audio evaluation.",
    icon: "BookOpenCheck",
    highlights: [
      "Target Band 7.5+ in IELTS / 70+ in PTE",
      "Unlimited AI & Human Essay Evaluations",
      "Daily Speaking Mock Interviews with Audio Feedback",
      "Comprehensive Study Kits & Official Cambridge Material"
    ],
    deliverables: [
      "Full diagnostic assessment report",
      "15+ full-length computer-delivered mock tests",
      "Exam slot booking assistance with test fee vouchers"
    ],
    process: [
      { step: "01", title: "Diagnostic Mock", desc: "Identify your baseline score and core linguistic pain points." },
      { step: "02", title: "Targeted Module Training", desc: "4 to 6 weeks of structured strategy sessions and template mastery." },
      { step: "03", title: "Final Exam Simulation", desc: "Full-length timed mocks under authentic test-day conditions." }
    ]
  },
  {
    id: "german-language",
    slug: "german-language",
    title: "German Language Mastery (A1 – B2)",
    category: "Language Training",
    shortDesc: "Goethe-Institut & TestDaF curriculum tailored for engineers, doctors, and students aspiring to study tuition-free in German public universities.",
    fullDesc: "Learn German rapidly from certified native-level educators. Our communicative teaching approach prepares you for Goethe Zertifikat examinations, Studienkolleg entrance, and APS certificate prerequisites.",
    icon: "Languages",
    highlights: [
      "Goethe & TELC Aligned Curriculum",
      "Interactive Speaking Clubs & German Cultural Modules",
      "APS Verification & Blocked Account Guidance",
      "Direct Pathway to Free Tuition Public Universities"
    ],
    deliverables: [
      "Goethe Zertifikat Exam Preparation Kit",
      "German CV (Lebenslauf) and Motivation Letter review",
      "Blocked account and health insurance setup support"
    ],
    process: [
      { step: "01", title: "A1/A2 Foundations", desc: "Pronunciation, grammar fundamentals, daily conversations, and vocabulary." },
      { step: "02", title: "B1/B2 Advanced Fluency", desc: "Academic texts, complex essays, formal discourse, and exam patterns." },
      { step: "03", title: "Goethe Exam Cracking", desc: "Model test drills, listening tracks, and viva voce practice." }
    ]
  },
  {
    id: "sop-lor-resume",
    slug: "sop-lor-resume",
    title: "SOP, LOR & Academic Resume Polishing",
    category: "Editorial",
    shortDesc: "Compelling narrative development that presents your unique academic and professional journey to selective admissions committees.",
    fullDesc: "Admissions committees read thousands of essays. Our specialized academic editors help you articulate research interests, work accomplishments, and future aspirations into an authentic, plagiarism-free Statement of Purpose and impactful Letters of Recommendation.",
    icon: "FileEdit",
    highlights: [
      "100% Unique, Non-AI Plagiarism-Free Writing",
      "Structured Storyboarding with Domain Mentors",
      "Tailored SOPs for Each University Specialization",
      "Multiple Iterative Proofreading & Feedback Rounds"
    ],
    deliverables: [
      "Final Master Statement of Purpose",
      "3 Customized Letters of Recommendation (Academic & Professional)",
      "ATS-Optimized Academic Curriculum Vitae (CV)"
    ],
    process: [
      { step: "01", title: "Questionnaire & Brainstorm", desc: "Extract key milestones, academic projects, and motivations." },
      { step: "02", title: "Drafting & Story-Crafting", desc: "Transform achievements into a persuasive, memorable narrative." },
      { step: "03", title: "Final Polish", desc: "Rigorous grammar, stylistic cadence, and word-limit optimization." }
    ]
  },
  {
    id: "visa-counselling",
    slug: "visa-counselling",
    title: "Visa Filing & Rigorous Mock Interviews",
    category: "Visa Advisory",
    shortDesc: "98.4% visa success rate through forensic financial vetting, DS-160/VFS filing, and one-on-one simulated consular interviews.",
    fullDesc: "Navigating international student visa guidelines requires precision. We review CA statements, property evaluations, bank loans, and family ties, followed by intensive mock visa interview sessions simulating consular questions.",
    icon: "PlaneTakeoff",
    highlights: [
      "98.4% Documented Visa Approval Track Record",
      "Financial Portfolio Audit (Sponsorship, Liquid Assets, Loans)",
      "Strict DS-160, CAS, and I-20 Compliance Checks",
      "1-on-1 Consular Mock Interviews with Ex-Visa Officers"
    ],
    deliverables: [
      "Complete indexed Visa Dossier ready for submission",
      "Consular interview question bank tailored to your country",
      "Emergency refusal review and expedited re-application strategy"
    ],
    process: [
      { step: "01", title: "Financial Verification", desc: "Audit liquid funds, education loan sanction letters, and affidavits." },
      { step: "02", title: "Portal Lodgement", desc: "Flawless visa application filing and appointment scheduling." },
      { step: "03", title: "Consular Mocks", desc: "Intensive 1-on-1 interview practice to eliminate hesitation and ensure confidence." }
    ]
  }
];

export const addOnsData = [
  {
    step: "01",
    title: "IELTS, TOEFL, PTE & Duolingo Coaching",
    desc: "Achieve top bands with certified British Council & IDP master trainers, diagnostic tests, and unlimited speaking mocks.",
    badge: "Language Prep"
  },
  {
    step: "02",
    title: "SOP & LOR Drafting & Polishing",
    desc: "Craft standout Statements of Purpose and academic recommendation letters customized to your dream universities.",
    badge: "Admissions Edge"
  },
  {
    step: "03",
    title: "University & Scholarship Guidance",
    desc: "Access institutional tie-ups, application fee waivers, and merit-based scholarship pipelines averaging $18,000+ per student.",
    badge: "Funding & ROI"
  },
  {
    step: "04",
    title: "Visa File Preparation & Mock Interviews",
    desc: "Rigorous document indexing, financial paperwork vetting, and 1-on-1 mock interviews to secure a 98.4% visa approval rate.",
    badge: "Compliance"
  },
  {
    step: "05",
    title: "Pre-Departure Briefing & Forex Support",
    desc: "Zero-markup international student cards, safe student accommodation booking, SIM cards, and peer airport pickup networks.",
    badge: "Smooth Landing"
  }
];
