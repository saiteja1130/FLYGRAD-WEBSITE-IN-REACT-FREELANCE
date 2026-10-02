export interface CountryData {
  id: string;
  name: string;
  flag: string;
  code: string;
  tagline: string;
  popularFor: string[];
  avgTuition: string;
  livingCost: string;
  workPermit: string;
  intakes: string[];
  topUniversities: string[];
  visaProcessing: string;
  description: string;
}

export const countriesData: CountryData[] = [
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    code: "US",
    tagline: "The global hub for STEM innovation, research funding, and Silicon Valley career opportunities.",
    popularFor: ["MS Computer Science", "Data Science", "Mechanical & Robotics", "MBA & Finance", "Biotechnology"],
    avgTuition: "$20,000 – $48,000 / year",
    livingCost: "$10,000 – $18,000 / year",
    workPermit: "Up to 3 Years (OPT with 24-month STEM extension)",
    intakes: ["Fall (August/September)", "Spring (January)", "Summer (May)"],
    topUniversities: [
      "Northeastern University",
      "University of Texas at Dallas",
      "Arizona State University",
      "Purdue University",
      "University of Southern California"
    ],
    visaProcessing: "F-1 Student Visa (15–30 Days)",
    description: "The USA hosts the largest number of tier-1 research institutions worldwide. With 3-year STEM OPT work authorizations, flexible curricular practical training (CPT), and extensive research assistantships, it remains the top choice for ambitious graduate scholars."
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    code: "GB",
    tagline: "1-year intensive Master's degrees from world-renowned historic Russell Group universities.",
    popularFor: ["1-Year MS Programs", "Data & AI", "Management & Finance", "Public Health", "Law"],
    avgTuition: "£14,000 – £28,000 / year",
    livingCost: "£9,000 – £14,000 / year",
    workPermit: "2 Years Graduate Route (Post-Study Work Permit)",
    intakes: ["September / October", "January / February"],
    topUniversities: [
      "University of Manchester",
      "University of Birmingham",
      "King's College London",
      "University of Leeds",
      "Queen Mary University of London"
    ],
    visaProcessing: "Student Route Visa (3–4 Weeks)",
    description: "The UK's acclaimed 1-year Master's programs offer significant tuition and living expense savings, allowing graduates to enter the high-wage job market a full year earlier backed by a 2-year post-study work visa."
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    code: "DE",
    tagline: "Zero or nominal tuition fees in world-class public technical universities (TU9).",
    popularFor: ["Automotive & Mechanical", "Renewable Energy", "Computer Engineering", "Biomedical", "MBA"],
    avgTuition: "€0 – €3,000 / year (Nominal Semester Contribution)",
    livingCost: "€934 / month (Blocked Account)",
    workPermit: "18 Months Post-Study Job Seeker Visa",
    intakes: ["Winter (October)", "Summer (April)"],
    topUniversities: [
      "Technical University of Munich (TUM)",
      "RWTH Aachen University",
      "University of Stuttgart",
      "TU Berlin",
      "Karlsruhe Institute of Technology (KIT)"
    ],
    visaProcessing: "German National Student Visa via APS (6–12 Weeks)",
    description: "Germany stands as Europe's industrial powerhouse. State-funded public universities offer English-taught Master's degrees with virtually no tuition fees, combined with exceptional post-graduation employment in automotive and engineering sectors."
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    code: "CA",
    tagline: "Welcoming multicultural environment with direct post-graduation work permits and PR pathways.",
    popularFor: ["Postgraduate Diplomas", "MS Software Engineering", "Supply Chain", "Environmental Studies"],
    avgTuition: "CAD $18,000 – $36,000 / year",
    livingCost: "CAD $12,000 – $20,000 / year",
    workPermit: "Up to 3 Years Post-Graduation Work Permit (PGWP)",
    intakes: ["September (Fall)", "January (Winter)", "May (Spring)"],
    topUniversities: [
      "University of Waterloo",
      "University of Windsor",
      "Concordia University",
      "Dalhousie University",
      "University of Ottawa"
    ],
    visaProcessing: "SDS & Non-SDS Study Permit (4–8 Weeks)",
    description: "Canada combines academic prestige with outstanding post-study work stability. Its progressive immigration pathways make it ideal for students seeking long-term global careers."
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    code: "AU",
    tagline: "High standard of living, Group of Eight universities, and extended post-study work rights.",
    popularFor: ["MS Information Technology", "Professional Accounting", "Healthcare & Nursing", "Civil Eng."],
    avgTuition: "AUD $28,000 – $45,000 / year",
    livingCost: "AUD $20,000 – $25,000 / year",
    workPermit: "2 to 4 Years Temporary Graduate Visa (Subclass 485)",
    intakes: ["February (Semester 1)", "July (Semester 2)", "November (Summer)"],
    topUniversities: [
      "University of Melbourne",
      "University of Sydney",
      "Monash University",
      "University of Queensland",
      "UNSW Sydney"
    ],
    visaProcessing: "Subclass 500 Student Visa (4–6 Weeks)",
    description: "Australia is celebrated for cutting-edge scientific research facilities and dynamic metropolitan cities with part-time work rights and regional visa extensions."
  },
  {
    id: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    code: "IE",
    tagline: "The Silicon Valley of Europe with European headquarters of Google, Apple, Meta, and Pfizer.",
    popularFor: ["MSc Cloud Computing", "Fintech & Data Analytics", "Pharmaceutical Science", "Cybersecurity"],
    avgTuition: "€12,000 – €24,000 / year",
    livingCost: "€10,000 – €14,000 / year",
    workPermit: "2 Years Third Level Graduate Scheme (Stamp 1G)",
    intakes: ["September (Autumn)", "January (Spring)"],
    topUniversities: [
      "Trinity College Dublin",
      "University College Dublin (UCD)",
      "National University of Ireland Galway",
      "University College Cork",
      "Dublin City University"
    ],
    visaProcessing: "Irish Study Visa (4–6 Weeks)",
    description: "As the only native English-speaking country in the Eurozone, Ireland offers unmatched proximity to global tech and pharma conglomerates, leading to phenomenal campus placement rates."
  },
  {
    id: "georgia",
    name: "Georgia (MBBS)",
    flag: "🇬🇪",
    code: "GE",
    tagline: "Top destination for affordable European MBBS degrees fully recognized by NMC & WHO.",
    popularFor: ["MBBS / MD (6 Years)", "Dentistry", "Clinical Medicine"],
    avgTuition: "$4,500 – $8,000 / year",
    livingCost: "$2,500 – $3,500 / year",
    workPermit: "Eligible for NEXT/FMGE & USMLE/PLAB",
    intakes: ["September / October", "February / March"],
    topUniversities: [
      "Tbilisi State Medical University",
      "Batumi Shota Rustaveli State University",
      "New Vision University",
      "European University Tbilisi"
    ],
    visaProcessing: "Georgian Student Visa (2–3 Weeks)",
    description: "Georgia has emerged as the premier destination for Indian medical aspirants, offering 100% English medium instruction, European clinical infrastructure, and high passing percentages in licensing examinations."
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan (MBBS)",
    flag: "🇰🇿",
    code: "KZ",
    tagline: "Low tuition fees, 5-year NMC compliant medical programs, and Indian mess facilities.",
    popularFor: ["General Medicine (MBBS)", "Pediatrics", "Postgraduate Residency"],
    avgTuition: "$3,600 – $5,200 / year",
    livingCost: "$1,800 – $2,400 / year",
    workPermit: "Global Licensing Eligibility",
    intakes: ["September / October"],
    topUniversities: [
      "Asfendiyarov Kazakh National Medical University",
      "Semey State Medical University",
      "South Kazakhstan Medical Academy",
      "West Kazakhstan Marat Ospanov Medical University"
    ],
    visaProcessing: "Kazakhstan Study Visa (15 Days)",
    description: "Kazakhstan provides top-tier government medical universities with 5-year English medium curriculums, guaranteed clinical rotations in 1,000+ bed teaching hospitals, and comfortable hostels with Indian cuisine."
  }
];
