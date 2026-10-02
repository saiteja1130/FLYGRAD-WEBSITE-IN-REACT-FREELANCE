export interface GalleryItem {
  id: string;
  title: string;
  category: "Seminars" | "Visa Success" | "Send-Off" | "Campus Visits";
  image: string;
  location: string;
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Annual Global Education Summit 2026",
    category: "Seminars",
    image: "/src/assets/images/counselling_session_1790920616185.jpg",
    location: "ITC Kohenur, Hyderabad",
    caption: "Over 500 aspirants and 40+ foreign university delegates engaged in on-the-spot spot profile evaluations."
  },
  {
    id: "g2",
    title: "Fall Batch Airport Send-Off Celebration",
    category: "Send-Off",
    image: "/src/assets/images/hero_students_airport_1790920592244.jpg",
    location: "Rajiv Gandhi International Airport",
    caption: "A joyful send-off for 65+ Flygrad scholars departing for Northeastern, UT Dallas, and Arizona State University."
  },
  {
    id: "g3",
    title: "European Campus Delegation Tour",
    category: "Campus Visits",
    image: "/src/assets/images/study_abroad_campus_1790920604338.jpg",
    location: "Munich & Aachen, Germany",
    caption: "Flygrad leadership visiting TU Munich and RWTH Aachen laboratories to review new international student support amenities."
  },
  {
    id: "g4",
    title: "Georgia Medical University Convocation",
    category: "Visa Success",
    image: "/src/assets/images/medical_students_mbbs_1790920629274.jpg",
    location: "Tbilisi, Georgia",
    caption: "Celebrating Indian medical students graduating with honors and qualifying for NEXT licensing exams."
  },
  {
    id: "g5",
    title: "Pre-Departure Briefing & Forex Distribution",
    category: "Seminars",
    image: "/src/assets/images/counselling_session_1790920616185.jpg",
    location: "Flygrad HQ Auditorium",
    caption: "Comprehensive orientation on overseas culture, luggage restrictions, student banking, and emergency protocols."
  },
  {
    id: "g6",
    title: "US Visa Approval Day Felicitation",
    category: "Visa Success",
    image: "/src/assets/images/hero_students_airport_1790920592244.jpg",
    location: "Hyderabad Consulate Hub",
    caption: "100% visa approval batch celebrating after successful F-1 and J-1 visa interviews."
  }
];
