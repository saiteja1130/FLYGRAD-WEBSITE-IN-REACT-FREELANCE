export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  degree: string;
  university: string;
  country: string;
  flag: string;
  quote: string;
  rating: number;
  scoreHighlight: string;
  scholarship?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Aravind Reddy",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    degree: "MS in Computer Science",
    university: "Northeastern University, Boston",
    country: "USA",
    flag: "🇺🇸",
    quote: "Flygrad turned my dream of studying in the US into reality. Despite having 2 backlogs from my undergraduate degree, their team crafted an exceptional SOP that highlighted my capstone robotics project. I received admits from 4 universities with a $12,000 scholarship!",
    rating: 5,
    scoreHighlight: "IELTS 7.5 | GRE 318",
    scholarship: "$12,000 Dean's Scholarship"
  },
  {
    id: "t2",
    name: "Dr. Sneha Pillai",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    degree: "MD / MBBS in General Medicine",
    university: "Tbilisi State Medical University",
    country: "Georgia",
    flag: "🇬🇪",
    quote: "Choosing Georgia for my MBBS was the best decision of my medical career. Flygrad handled everything transparently—from apostille and visa to airport pickup and Indian hostel allotment. The clinical rotations here in Tbilisi are world-class.",
    rating: 5,
    scoreHighlight: "NEET Qualified (410 Marks)",
    scholarship: "Direct Govt Admission"
  },
  {
    id: "t3",
    name: "Karthik Subramanian",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    degree: "M.Sc. Automotive Engineering",
    university: "RWTH Aachen University",
    country: "Germany",
    flag: "🇩🇪",
    quote: "Studying tuition-free in Germany required clearing the Goethe B2 exam and APS certificate verification. Flygrad's German language coaching and document filing were flawless. Their mock visa interview prepared me for every single question.",
    rating: 5,
    scoreHighlight: "Goethe B2 Certified | APS Cleared",
    scholarship: "100% Tuition-Free Public Uni"
  },
  {
    id: "t4",
    name: "Pooja Venkatesh",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    degree: "MSc Data Analytics",
    university: "University College Dublin (UCD)",
    country: "Ireland",
    flag: "🇮🇪",
    quote: "Flygrad helped me evaluate post-study work visas between the UK and Ireland. We chose Ireland for its booming tech ecosystem. Today, within 6 months of graduation, I am working as a Junior Data Scientist in Dublin!",
    rating: 5,
    scoreHighlight: "PTE Academic 78",
    scholarship: "€4,000 Global Excellence"
  },
  {
    id: "t5",
    name: "Rohan Varma",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    degree: "Master of Engineering (Software)",
    university: "University of Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    quote: "The visa filing team at Flygrad is phenomenal. Australia had tightened GTE norms, but their meticulous financial portfolio review ensured my visa arrived in just 14 days without any queries.",
    rating: 5,
    scoreHighlight: "IELTS 8.0 Overall",
    scholarship: "25% International Fee Remission"
  }
];
