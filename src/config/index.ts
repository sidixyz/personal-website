import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sidi Mohal",
  author: "Sidi Mohal",
  description:
    "Grade 10 IB student in Caledon, Ontario. Building at the intersection of neurotechnology, entrepreneurship, and leadership.",
  lang: "en",
  siteLogo: "/sidi.jpg",
  navLinks: [
    { text: "Now", href: "/now" },
    { text: "Projects", href: "/projects" },
    { text: "Writing", href: "/writing" },
    { text: "Contact", href: "/contact" },
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
  experience: [],
  projects: [],
  about: {
    description: "",
    image: "/sidi.jpg",
  },
};
