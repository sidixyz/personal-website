import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sidi Mohal — Student & Builder",
  author: "Sidi Mohal",
  description:
    "Grade 10 IB student in Caledon, Ontario. Building at the intersection of neurotechnology, entrepreneurship, and leadership.",
  lang: "en",
  siteLogo: "/sidi-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/sidimohal" },
    { text: "Email", href: "mailto:sidharth.mohal@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://sidi.one",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sidi Mohal",
    specialty: "Student & Builder",
    summary:
      "Grade 10 IB student in Caledon, Ontario. Building at the intersection of neurotechnology, entrepreneurship, and leadership.",
    email: "sidharth.mohal@gmail.com",
  },
  experience: [
    {
      company: "The Knowledge Society (TKS)",
      position: "Velocity Member — Top 7% Globally",
      startDate: "Sept 2024",
      endDate: "Present",
      summary: [
        "Held Velocity status — awarded to the top 7% of TKS members globally across cohorts in San Francisco, New York, Dubai, and Toronto.",
        "Placed Top 5 in Toronto and Top 19 globally in the TKS × Lovable Consulting Challenge, competing against hundreds of teams worldwide.",
      ],
    },
    {
      company: "Mayfield Secondary School — DECA",
      position: "VP of Training",
      startDate: "Sept 2024",
      endDate: "Present",
      summary: [
        "Youngest person ever appointed VP of Training in Mayfield DECA's history.",
        "Competed at DECA Provincials 2026 in Hotel & Lodging Management, placing Top 20 in all of Ontario.",
      ],
    },
    {
      company: "Canadian National Leadership Conference",
      position: "Organizer",
      startDate: "Jan 2025",
      endDate: "Mar 2025",
      summary:
        "Organized Canada's largest student-led business conference, bringing together 2,400 high school students in downtown Toronto.",
    },
    {
      company: "TEDx Peel District School Board",
      position: "Speaker",
      startDate: "Apr 2026",
      endDate: "Apr 2026",
      summary: [
        "Selected as one of 12 speakers from 250+ applicants across the Peel Region — the second largest school board in Canada.",
        "Cold-messaged the organizer on LinkedIn two months after the application deadline. She said yes to a last-minute audition. I got selected.",
      ],
    },
  ],
  projects: [
    {
      name: "Zenn — Stress-Detection Bracelet",
      summary:
        "Smart wearable using haptic vibrations and transcutaneous median nerve stimulation at acupressure points PC5/PC6 to automatically activate the parasympathetic nervous system. Built at TKS Hackathon.",
      linkPreview: "https://sidi.one",
      linkSource: "https://github.com/sidixyz",
      image: "/zenn.png",
    },
    {
      name: "TKS × Lovable Consulting Challenge",
      summary:
        "Top 5 in Toronto, Top 19 globally. Built a 25-slide consulting deck on organic customer acquisition via Generative Engine Optimization — reviewed directly by Lovable executives.",
      linkPreview: "https://sidi.one",
      linkSource: "https://github.com/sidixyz",
      image: "/lovable.png",
    },
    {
      name: "inSIDIous Newsletter",
      summary:
        "A monthly newsletter where I slow down to reflect on what I'm building, learning, and experiencing. Writing is how I process growth.",
      linkPreview: "mailto:sidharth.mohal@gmail.com",
      linkSource: "https://sidi.one",
      image: "/newsletter.png",
    },
  ],
  about: {
    description: `
      I'm a 16-year-old student in Caledon, Ontario — IB Diploma, Grade 10, maintaining a 97.75% average while doing way too many things at once.

      I got obsessed with neurotechnology and brain-computer interfaces after realizing how little we understand about the brain and how much is possible. I hold Velocity status at TKS (top 7% globally), competed at DECA Provincials placing Top 20 in Ontario, organized a 2,400-student national conference, and got selected for a TEDx Talk after cold-messaging the organizer two months after the deadline.

      I'm a first-degree taekwondo black belt, up at 5 AM every day, and I write a monthly newsletter called inSIDIous. I'm building toward something big — still figuring out exactly what that is.
    `,
    image: "/sidi-big.jpg",
  },
};
