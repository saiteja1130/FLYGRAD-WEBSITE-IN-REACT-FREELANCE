export interface ProgramTab {
  id: string;
  name: string;
  badge: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  checklist: string[];
  metrics: { label: string; value: string }[];
  route: string;
  ctaText: string;
}

export const programTabsData: ProgramTab[] = [
  {
    id: "ms-abroad",
    name: "MS Abroad",
    badge: "Postgraduate & STEM",
    title: "Master of Science & Engineering Abroad",
    tagline: "High-ROI degrees in the USA, UK, Germany, Canada & Ireland.",
    image: "/src/assets/images/study_abroad_campus_1790920604338.jpg",
    description: "Launch your career with tier-1 research degrees. We curate programs offering 3-year STEM OPT work authorizations, extensive research funding, and direct hiring pipelines into top multinational corporations.",
    checklist: [
      "Custom profile evaluation matching your exact GPA & research aspirations",
      "Shortlist of 8–12 ambitious, target & safe universities with high ROI",
      "Full application fee waiver guidance and departmental scholarship scouting",
      "End-to-end SOP, LOR, and DS-160/CAS documentation support"
    ],
    metrics: [
      { label: "Partner Universities", value: "850+" },
      { label: "Avg. Scholarship", value: "$18,500" },
      { label: "STEM Work Rights", value: "Up to 3 Years" }
    ],
    route: "/study-abroad",
    ctaText: "Explore MS Programs"
  },
  {
    id: "mbbs-abroad",
    name: "MBBS Abroad",
    badge: "NMC & WHO Accredited",
    title: "Global Medical Education at Affordable Costs",
    tagline: "Quality clinical education in Georgia, Kazakhstan, Russia & Philippines.",
    image: "/src/assets/images/medical_students_mbbs_1790920629274.jpg",
    description: "Fulfill your dream of becoming a world-class doctor without paying exorbitant private college donations. Complete 100% NMC-compliant English-medium medical degrees with hands-on hospital rotations.",
    checklist: [
      "Strict compliance with National Medical Commission (NMC) FMGL Regulations 2021",
      "Affordable tuition starting from just $3,500/year with transparent fees",
      "1,000+ bed affiliated teaching hospitals with extensive patient exposure",
      "Dedicated Indian student hostels with authentic Indian mess & 24/7 security"
    ],
    metrics: [
      { label: "Tuition / Year", value: "From $3,500" },
      { label: "Language", value: "100% English" },
      { label: "NEXT / FMGE Ready", value: "Top Passing Rate" }
    ],
    route: "/mbbs-abroad",
    ctaText: "Explore MBBS Options"
  },
  {
    id: "english-tests",
    name: "English Tests",
    badge: "Certified Master Trainers",
    title: "Score-Guaranteed IELTS, PTE, TOEFL & Duolingo Coaching",
    tagline: "Target Band 7.5+ in IELTS and 70+ in PTE with tailored test strategies.",
    image: "/src/assets/images/counselling_session_1790920616185.jpg",
    description: "Crack your language proficiency tests on the very first attempt. Benefit from daily 1-on-1 speaking evaluation, unlimited AI essay scoring, and full-length computer-delivered mock tests.",
    checklist: [
      "British Council & IDP certified master faculty with proven test strategies",
      "Daily diagnostic mocks simulating the exact official computer interface",
      "Detailed 1-on-1 speaking feedback and personalized writing score improvement",
      "Flexible morning, evening, and weekend batches with recorded lectures"
    ],
    metrics: [
      { label: "Target Band", value: "7.5+ / 8.0" },
      { label: "PTE Average", value: "72+ Score" },
      { label: "Mock Tests", value: "15+ Included" }
    ],
    route: "/english-tests",
    ctaText: "Join Test Prep Batch"
  },
  {
    id: "german-language",
    name: "German Language",
    badge: "A1 to C1 Excellence",
    title: "German Language Training & Free Public University Admission",
    tagline: "Master Goethe-Institut & TestDaF curriculum with native-level educators.",
    image: "/src/assets/images/hero_students_airport_1790920592244.jpg",
    description: "Unlock tuition-free education at Germany's renowned TU9 technical universities. Master conversational fluency, academic writing, and Goethe certification while our team handles your APS and visa dossier.",
    checklist: [
      "Structured A1, A2, B1, and B2 batches aligned to CEFR & Goethe guidelines",
      "Interactive speaking clubs, German business etiquette, and culture modules",
      "Guaranteed APS certificate clearance guidance and blocked account setup",
      "Direct pathway into English & German-taught public master's programs"
    ],
    metrics: [
      { label: "Tuition in Germany", value: "€0 / Free" },
      { label: "Levels Taught", value: "A1 to C1" },
      { label: "Job Seeker Visa", value: "18 Months" }
    ],
    route: "/german-language",
    ctaText: "Learn German With Us"
  }
];

export const globalPartners = [
  { name: "British Council", type: "IELTS Official Partner" },
  { name: "IDP Education", type: "IELTS Test Center" },
  { name: "Pearson PTE", type: "PTE Academic Center" },
  { name: "ETS TOEFL & GRE", type: "Authorized Testing" },
  { name: "Duolingo English Test", type: "Official Access" },
  { name: "Goethe-Institut", type: "German Language Exam Prep" },
  { name: "TestDaF-Institut", type: "Academic German Assessment" },
  { name: "AIRC Certified", type: "American International Recruitment" },
  { name: "ICEF Screened", type: "Verified Global Agency" }
];
