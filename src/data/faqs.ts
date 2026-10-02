export interface FAQItem {
  id: string;
  category: "General" | "Admissions & MS" | "MBBS Abroad" | "Test Prep" | "Visa & Finance";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How does Flygrad help me throughout my study abroad journey?",
    answer: "Flygrad provides 360-degree advisory: from personalized profile evaluation, university shortlisting, and scholarship scouting to SOP/LOR mentoring, IELTS/German coaching, visa filing, mock interviews, and pre-departure accommodation and forex assistance."
  },
  {
    id: "faq-2",
    category: "General",
    question: "Are your initial profile evaluation and counselling sessions free?",
    answer: "Yes, 100%! We believe in empowering students and parents with complete transparency. Our initial 45-minute comprehensive profile audit and university compatibility assessment are completely free of charge."
  },
  {
    id: "faq-3",
    category: "Admissions & MS",
    question: "Can I get into a top US or German university with backlogs or a low CGPA?",
    answer: "Absolutely. Many premier universities adopt holistic admissions processes. A strong SOP highlighting relevant industrial projects, high test scores (GRE/IELTS/PTE), research publications, or work experience can effectively offset academic backlogs."
  },
  {
    id: "faq-4",
    category: "Admissions & MS",
    question: "When should I begin applying for Fall (September) intake?",
    answer: "We strongly recommend beginning 10 to 12 months in advance (October–December of the prior year). This gives ample time to prepare test scores, draft distinctive SOPs, secure early application fee waivers, and compete for priority merit scholarships."
  },
  {
    id: "faq-5",
    category: "MBBS Abroad",
    question: "Is MBBS abroad valid in India? Will I be allowed to practice in India?",
    answer: "Yes. All universities recommended by Flygrad are 100% compliant with National Medical Commission (NMC) Foreign Medical Graduate Licentiate (FMGL) Regulations 2021. You will be eligible to write the NEXT / FMGE licensing examination upon graduating."
  },
  {
    id: "faq-6",
    category: "MBBS Abroad",
    question: "Is NEET qualification compulsory for studying MBBS overseas?",
    answer: "Yes, qualifying the National Eligibility cum Entrance Test (NEET-UG) in the current or preceding two academic years is mandatory for Indian students wishing to study medicine abroad and practice in India."
  },
  {
    id: "faq-7",
    category: "Test Prep",
    question: "Which test should I take: IELTS, TOEFL, PTE, or Duolingo?",
    answer: "This depends on your target universities and country. IELTS and PTE are universally accepted across the UK, Australia, Canada, and Ireland. The USA broadly accepts all four. Flygrad evaluates your target university list during shortlisting and recommends the most advantageous exam."
  },
  {
    id: "faq-8",
    category: "Test Prep",
    question: "Is German language proficiency mandatory to study in Germany?",
    answer: "For English-taught Master's programs, German is not strictly mandatory for admission; however, learning A1–B1 German is strongly advised for daily life, part-time jobs, and mandatory internships. For German-taught bachelor's or medical programs, B2/C1 is mandatory."
  },
  {
    id: "faq-9",
    category: "Visa & Finance",
    question: "How do you help with education loans and financial proof?",
    answer: "We have partnerships with leading public banks (SBI, Bank of Baroda) and private NBFCs (HDFC Credila, Prodigy Finance, Avanse) to facilitate both collateralized and non-collateral education loans at competitive interest rates with zero service fees."
  },
  {
    id: "faq-10",
    category: "Visa & Finance",
    question: "What is Flygrad's student visa success rate?",
    answer: "Our visa success rate stands at 98.4%. We conduct deep audits of CA valuation statements, bank funds, and sponsor ties, coupled with 3+ rounds of 1-on-1 mock consular interviews to ensure zero discrepancies on interview day."
  }
];
