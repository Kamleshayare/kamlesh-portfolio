export const profile = {
  name: "Shreeraj Mane",
  handle: "@theshreeraj",
  role: "AI Product Manager",
  location: "Pune, India",
  email: "work.shreeraj@gmail.com",
  available: true,
  tagline: "I build the interface between humans and intelligence.",
  toolkit: ["Figma", "Spline", "Rive", "Next.js"],
  philosophy:
    "We are moving from a world of clicking buttons to a world of steering systems. I build the interfaces that allow humans to steer AI.",
  bioLines: [
    "a founder & creative technologist 🌐",
    "currently 📍 based in Pune, India",
    "building the interface",
    "between humans and intelligence 🤝",
    "I write, paint, shoot film 🎞️",
    "and love architecture 🏛️",
  ],
  currentlyAt: {
    name: "Uncube Labs",
    href: "https://uncubelabs.com",
    logo: "/project-logos/uncubelogo.png",
  },
  previouslyAt: [
    { name: "Neurealm", logo: "/project-logos/neurealm-logo.png" },
    { name: "Speedup Infotech", logo: "/project-logos/speedup-infotech-logo.jpeg" },
  ],
  socials: [
    { name: "Twitter / X", href: "https://x.com/theshreeraj" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/shreeraj-mane-6a7109168/" },
    { name: "GitHub", href: "https://github.com/theshreeraj" },
    { name: "Pinterest", href: "https://in.pinterest.com/theshreeraj/" },
    { name: "Medium", href: "https://medium.com/@theshreeraj" },
    { name: "Peerlist", href: "https://peerlist.io/theshreeraj" },
    { name: "Instagram", href: "https://www.instagram.com/shreeraj.chronicles/" },
  ],
};

export type Project = {
  slug: string;
  name: string;
  about: string;
  year: string;
  role: string;
  category: string;
  tags: string[];
  status: "Shipped" | "Concept";
  description: string;
  href: string;
  image?: string;
  logo?: string;
};

export const projects: Project[] = [
  {
    slug: "uncube-labs",
    name: "Uncube Labs",
    about: "Designing & Developing Human & AI interfaces",
    year: "2026",
    role: "Founder & Product Manager",
    category: "Product Design & Development",
    tags: ["Case Study", "Product Design", "Shipped"],
    status: "Shipped",
    description:
      "The agency for the agentic era — a design-first development studio building the next generation of AI-native interfaces and agentic workflows.",
    href: "https://uncubelabs.com",
    image: "/uncubelabs.png",
    logo: "/project-logos/uncubelabs-logo.png",
  },
    {
    slug: "photographers4u",
    name: "Photographers4u",
    about: "Photographer hiring platform",
    year: "2026",
    role: "Full Stack Engineer",
    category: "Marketplace",
    tags: ["Product Design", "Shipped", "Mobile"],
    status: "Shipped",
    description:
      "A dual-sided marketplace connecting photographers and clients, handling complex scheduling and payment flows behind a minimalist UI.",
    href: "https://photographers4u.com",
    image: "/photographers4u.png",
    logo: "/project-logos/photographers4u-logo.png",
  },
    {
    slug: "unboxstore",
    name: "Unboxstore",
    about: "D2C Lifestyle Ecommerce Store",
    year: "2025",
    role: "Product Manager",
    category: "E-commerce",
    tags: ["Product Design", "Shipped", "Landing Page"],
    status: "Shipped",
    description:
      "Commerce for the creator economy — a headless Shopify build engineered for high-conversion influencer drops.",
    href: "https://www.unboxstore.co.in/",
    image: "/unboxstore.png",
    logo: "/project-logos/unboxstore-logo.svg",
  },
        {
    slug: "dezine-mafia",
    name: "Dezine Mafia",
    about: "A platform to share & find inspiration for website, portfolio or tools",
    year: "2026",
    role: "Founder",
    category: "Community",
    tags: ["Case Study", "Portfolios", "Web Inspiration"],
    status: "Shipped",
    description:
      "An exclusive hacker house and community platform, designed to be the digital and physical third place for builders.",
    href: "https://decodersclub.com",
    image: "/dezinemafia.png",
    logo: "/project-logos/dezine-mafia-logo.png",
  },
  {
    slug: "decoders-club",
    name: "Decoders Club",
    about: "Created a community of developers where we share ideas & develop the exciting ones",
    year: "2024",
    role: "Co-Founder",
    category: "Community",
    tags: ["Case Study", "Brand Identity", "Shipped"],
    status: "Shipped",
    description:
      "An exclusive hacker house and community platform, designed to be the digital and physical third place for builders.",
    href: "https://decodersclub.com",
    image: "/decodersclub.png",
    logo: "/project-logos/decodersclub-logo.png",
  },
    {
    slug: "thedezineandaiacademy",
    name: "The Dezine & AI Academy",
    about: "Academy to learn design & ai development",
    year: "2026",
    role: "Founder & Educator",
    category: "AI & Design",
    tags: ["Case Study", "Product Design", "Shipped"],
    status: "Shipped",
    description:
      "The agency for the agentic era — a design-first development studio building the next generation of AI-native interfaces and agentic workflows.",
    href: "https://www.thedezineandaiacademy.com/",
    image: "/thedezine&aiacademy.png",
    logo: "/project-logos/dezine&aiacademy-logo.webp",
  },
  // {
  //   slug: "trimos",
  //   name: "Trimos",
  //   about: "Trimos",
  //   year: "2026",
  //   role: "Full Stack Engineer",
  //   category: "Salon Management",
  //   tags: ["Product Design", "Shipped"],
  //   status: "Shipped",
  //   description:
  //     "A salon management system streamlining bookings, staff schedules and billing for salons under one dashboard.",
  //   href: "#",
  //   image: "/trimos.png",
  // },
  // {
  //   slug: "secureone",
  //   name: "SecureOne",
  //   about: "SecureOne",
  //   year: "2026",
  //   role: "Full Stack Engineer",
  //   category: "Society Management",
  //   tags: ["Product Design", "Shipped"],
  //   status: "Shipped",
  //   description:
  //     "A society management system handling visitor security, resident directories, complaints and maintenance billing.",
  //   href: "#",
  // },
  // {
  //   slug: "eatone",
  //   name: "EatOne",
  //   about: "EatOne",
  //   year: "2026",
  //   role: "Full Stack Engineer",
  //   category: "Hotel Management",
  //   tags: ["Product Design", "Shipped"],
  //   status: "Shipped",
  //   description:
  //     "A hotel management system covering room bookings, guest check-in/checkout and order management.",
  //   href: "#",
  // },
];

export const filterTags = [
  "Case Study",
  "Product Design",
  "Shipped",
  "Brand Identity",
  "Mobile",
  "Landing Page",
];

export type TimelineEntry = {
  year: string;
  role: string;
  org: string;
};

export const timeline: TimelineEntry[] = [
  { year: "2026", role: "Product Manager", org: "Uncube Labs" },
  { year: "2026", role: "UX Mentor", org: "The Dezine Academy" },
  { year: "2025", role: "Software Engineer (SDE I)", org: "Neurealm" },
  { year: "2025", role: "Software Engineer (SDE I)", org: "Speedup Infotech" },
  { year: "2021–24", role: "Co-Founder & Tech Lead", org: "Saphite Technologies Pvt. Ltd." },
  { year: "2022", role: "UX/UI Designer", org: "Vyolve" },
  { year: "2022", role: "UX/UI Designer", org: "TechNerds" },
];

export const competencies = [
  {
    title: "Design",
    body: "Warm Modernism — precise, gridded, yet human-centered interfaces, built in Figma, Spline and Rive.",
  },
  {
    title: "Engineering",
    body: "Clean architecture, type safety and 60fps polish with Next.js, TypeScript, Tailwind and PostgreSQL.",
  },
  {
    title: "Founding",
    body: "Strategy, product development, hiring and operations — from zero to shipped.",
  },
];

export const interests = ["Running", "Painting", "Film photography", "Architecture"];

export type InspirationCategory = "Books" | "Designers" | "Companies" | "Portfolios";

export type InspirationItem = {
  name: string;
  meta: string;
  category: InspirationCategory;
};

export const inspiration: InspirationItem[] = [
  { name: "Add a book", meta: "Author · Year", category: "Books" },
  { name: "Add a book", meta: "Author · Year", category: "Books" },
  { name: "Add a book", meta: "Author · Year", category: "Books" },
  { name: "Add a designer", meta: "@handle", category: "Designers" },
  { name: "Add a designer", meta: "@handle", category: "Designers" },
  { name: "Add a designer", meta: "@handle", category: "Designers" },
  { name: "Add a company", meta: "What they build", category: "Companies" },
  { name: "Add a company", meta: "What they build", category: "Companies" },
  { name: "Add a portfolio", meta: "Who it belongs to", category: "Portfolios" },
  { name: "Add a portfolio", meta: "Who it belongs to", category: "Portfolios" },
];
