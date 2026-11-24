export interface SocialLinks {
  email: string;
  github?: string;
  linkedin?: string;
  resumeUrl?: string;
}

export interface Profile {
  fullName: string;
  displayName: string;
  roleHeadline: string;
  availability: string;
  location: string;
  timezone: string;
  portraitYear: string;
  siteUrl: string;
  heroSummary: string;
  aboutLead: string;
  aboutParagraphs: string[];
  stats: { value: string; lines: [string, string] }[];
  recognitions: { title: string; detail: string }[];
  links: SocialLinks;
}

export interface TimelineItem {
  period: string;
  category: "Education" | "Leadership" | "Experience";
  title: string;
  organization: string;
  location?: string;
  highlights: string[];
  isPlaceholder?: boolean;
}

export interface SkillGroup {
  label: string;
  technical: boolean;
  items: string[];
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
  simulationType: 0 | 1 | 2;
}

export interface ProjectItem {
  index: string;
  slug: string;
  title: string;
  type: string;
  text: string;
  tags: string[];
  year: string;
  role: string;
  /** Optional website logo displayed on the front project card (e.g. "/projects/recipebook-logo.png"). */
  logo?: string;
  /** Optional full screenshot displayed on the project detail page (e.g. "/projects/recipebook-preview.png"). */
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    headline: string;
    challenge: string;
    solution: string;
    highlights: string[];
    outcome: string;
  };
}

export interface CertificateItem {
  year: string;
  title: string;
  issuer: string;
  summary: string;
  credentialUrl?: string;
  image?: string;
}

export interface TrainingPhoto {
  src: string;
  /** CSS object-position for thumbnail framing (e.g. "center 55%") */
  position?: string;
}

export interface TrainingItem {
  title: string;
  organizer: string;
  year: string;
  description: string;
  images: TrainingPhoto[];
}

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "Get to know me" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "What I do" },
  { id: "projects", label: "Projects" },
  { id: "trainings", label: "Trainings" },
] as const;

export const profile: Profile = {
  fullName: "Conie Besinan Lariego",
  displayName: "Conie Lariego",
  roleHeadline:
    "BS Computer Engineering Senior · Full-Stack Developer · QA & Data Analytics",
  availability: "Open to Full-Time & Internship Roles · Remote / Cebu",
  location: "Cebu, Philippines",
  timezone: "GMT+8",
  portraitYear: "2026",
  // TODO: Replace with your final deployed domain once live
  siteUrl: "https://conielariego.com",
  heroSummary:
    "I build clean, responsive web applications where thoughtful design meets dependable engineering—focused on usability, quality assurance, and data-informed decisions.",
  aboutLead:
    "I’m Conie Besinan Lariego, a Computer Engineering student and full-stack developer who cares deeply about craft and reliability.",
  aboutParagraphs: [
    "I’m pursuing a Bachelor of Science in Computer Engineering at Cebu Technological University–Danao Campus, where I’ve built a strong foundation in full-stack web development, quality assurance, and data analytics.",
    "I enjoy turning complex requirements into interfaces that feel effortless. Whether working independently or collaborating across a team, I bring curiosity, structured problem-solving, and high attention to detail.",
  ],
  stats: [
    { value: "10+", lines: ["Projects", "completed"] },
    { value: "4", lines: ["Professional", "certifications"] },
    { value: "4th", lines: ["Year level", "BS CpE"] },
  ],
  recognitions: [
    {
      title: "Consistent Dean’s Lister",
      detail: "Academic excellence in BS Computer Engineering",
    },
    {
      title: "DOST Scholar",
      detail: "National STEM merit scholarship recipient",
    },
    {
      title: "Student Leader",
      // TODO: Replace with specific student organization name
      detail: "Collaborative campus & tech leadership",
    },
  ],
  links: {
    email: "conie0517@gmail.com",
    github: "https://github.com/Coniebl",
    linkedin: "https://www.linkedin.com/in/conie-lariego-326594414/",
    // Resume PDF stored in public/Conie-Lariego-Resume.pdf
    resumeUrl: "/Conie-Lariego-Resume.pdf",
  },
};

export const timelineItems: TimelineItem[] = [
  {
    period: "2022 – Present",
    category: "Education",
    title: "B.S. in Computer Engineering",
    organization: "Cebu Technological University – Danao Campus",
    location: "Danao City, Cebu",
    highlights: [
      "Consistent Dean’s Lister and DOST-SEI Undergraduate Merit Scholar.",
      "Relevant coursework: Software Engineering, Web Development, Database Management Systems, Data Analytics, and Computer Systems.",
    ],
  },
  {
    period: "2024 – Present",
    category: "Leadership",
    // TODO: Update with exact student organization title & role
    title: "Student Organization Leader",
    organization: "CTU–Danao Student Leadership & Tech Initiatives",
    location: "Cebu, Philippines",
    highlights: [
      "Coordinated student events, technical workshops, and collaborative project planning across engineering cohorts.",
      "Mentored peers on web fundamentals, presentation workflows, and team delivery.",
    ],
    isPlaceholder: true,
  },
  {
    period: "2025 – 2026",
    category: "Experience",
    // TODO: Update with OJT / Internship, Capstone, or Freelance role details
    title: "Full-Stack Developer & QA Contributor (Projects / Capstone)",
    organization: "Independent & Academic Engineering Projects",
    location: "Cebu, Philippines",
    highlights: [
      "Designed and shipped responsive React, Next.js, and Node.js applications backed by MySQL and Supabase.",
      "Applied structured QA testing (cross-browser, responsive, keyboard accessibility) and Power BI reporting workflows.",
    ],
    isPlaceholder: true,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Core strengths",
    technical: false,
    items: [
      "Problem solving",
      "Critical thinking",
      "Collaboration",
      "Detail-oriented",
      "Adaptability",
      "Time management",
    ],
  },
  {
    label: "Languages",
    technical: true,
    items: ["JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    label: "Frontend & UI",
    technical: true,
    items: ["React", "Next.js", "Vite", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Backend & Databases",
    technical: true,
    items: ["Node.js", "REST APIs", "MySQL", "Supabase"],
  },
  {
    label: "QA, Data & Workflow",
    technical: true,
    items: [
      "Manual & UI QA",
      "Power BI",
      "Git / GitHub",
      "Figma",
      "Microsoft Office",
      "AI-Assisted Dev Tools",
    ],
  },
];

export const services: ServiceItem[] = [
  {
    index: "01",
    title: "Full-Stack Web Engineering",
    description:
      "Responsive, accessible web applications built with React, Next.js, and Node.js—balancing editorial polish with reliable architecture.",
    simulationType: 0,
  },
  {
    index: "02",
    title: "Quality Assurance & Accessibility",
    description:
      "Methodical functional, cross-browser, and keyboard accessibility testing that catches edge cases early and keeps releases dependable.",
    simulationType: 1,
  },
  {
    index: "03",
    title: "Data Analytics & Reporting",
    description:
      "Cleaning, structuring, and visualizing raw datasets in Power BI and SQL to surface clear, actionable insights for stakeholders.",
    simulationType: 2,
  },
];

export const projectData: ProjectItem[] = [
  {
    index: "01",
    slug: "metube",
    title: "MeTube",
    type: "Full-stack platform",
    text: "A responsive video sharing experience with structured content discovery, account flows, and a distraction-free viewing interface.",
    tags: ["React", "Node.js", "MySQL", "REST API"],
    year: "2025",
    role: "Full-stack developer",
    // TODO: Add screenshot at public/projects/metube.png and set image: "/projects/metube.png"
    image: undefined,
    // TODO: Add liveUrl and githubUrl when ready
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      headline: "Streamlining video discovery and creator account workflows.",
      challenge:
        "Video platforms often overwhelm viewers with cluttered layouts and sluggish navigation across mobile and desktop viewports.",
      solution:
        "Built a full-stack video sharing web application with modular React components, Node.js API endpoints, and a relational database schema for users, videos, and discovery feeds.",
      highlights: [
        "Implemented user authentication, profile views, and structured content browsing.",
        "Designed a responsive media player layout with clean visual hierarchy across screen sizes.",
        "Structured RESTful endpoints and database queries for predictable state updates.",
      ],
      outcome:
        "Delivered a cohesive end-to-end full-stack platform demonstrating clean API integration, state management, and responsive UI craft.",
    },
  },
  {
    index: "02",
    slug: "bookease",
    title: "BookEase",
    type: "Hotel booking system",
    text: "An intuitive reservation platform that simplifies room discovery, availability checks, and end-to-end booking management.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    year: "2024",
    role: "Product designer & full-stack developer",
    // TODO: Add screenshot at public/projects/bookease.png
    image: undefined,
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      headline: "Making hotel room search and booking management effortless.",
      challenge:
        "Traditional booking forms create friction with multi-step guesswork around room availability, pricing clarity, and booking confirmations.",
      solution:
        "Designed and engineered an intuitive reservation workflow featuring clear room comparisons, date-based availability filtering, and streamlined reservation tracking.",
      highlights: [
        "Mapped user journeys in Figma before translating them into reusable UI components.",
        "Built availability filtering and reservation state handling to prevent double-booking edge cases.",
        "Verified responsive layouts and form validation across mobile and desktop viewports.",
      ],
      outcome:
        "Reduced booking flow complexity into a clear, guided experience suitable for both guests and property managers.",
    },
  },
  {
    index: "03",
    slug: "recipebook",
    title: "RecipeBook",
    type: "Web application",
    text: "A warm, accessible recipe collection built for effortless browsing, ingredient filtering, and saving favorites in the kitchen.",
    tags: ["React", "Vite", "REST API", "CSS"],
    year: "2024",
    role: "Frontend developer",
    logo: "/projects/recipebook-logo.svg",
    image: "/projects/recipebook-preview.png",
    liveUrl: "https://recipe-book-eight-roan.vercel.app/",
    githubUrl: "https://github.com/Coniebl/RecipeBook",
    caseStudy: {
      headline: "Readable, kitchen-friendly recipe discovery on any device.",
      challenge:
        "Many recipe websites bury ingredients and steps under heavy layouts that are difficult to read quickly on a phone while cooking.",
      solution:
        "Created a lightweight, mobile-first recipe web application with fast search, clear typography, and one-tap saving for favorite dishes.",
      highlights: [
        "Integrated external recipe API data with clean loading, empty, and error states.",
        "Prioritized scannable typography, clear ingredient checklists, and keyboard accessibility.",
        "Optimized layout spacing for single-handed mobile browsing.",
      ],
      outcome:
        "Produced a fast, accessible frontend experience focused on readability, visual warmth, and clean component architecture.",
    },
  },
];

export const certificates: CertificateItem[] = [
  {
    year: "2025",
    title: "Full-Stack Web Development",
    // TODO: Replace with exact issuing organization (e.g., freeCodeCamp, Meta / Coursera, DICT, Zuitt)
    issuer: "Issuing organization · Update in data/portfolio.ts",
    summary: "End-to-end web application development & practical projects",
    credentialUrl: "",
    image: undefined,
  },
  {
    year: "2024",
    title: "Data Analytics Fundamentals",
    // TODO: Replace with exact issuing organization
    issuer: "Issuing organization · Update in data/portfolio.ts",
    summary: "Data processing, Power BI visualization & analytical insights",
    credentialUrl: "",
    image: undefined,
  },
  {
    year: "2024",
    title: "Quality Assurance Essentials",
    // TODO: Replace with exact issuing organization
    issuer: "Issuing organization · Update in data/portfolio.ts",
    summary: "Software testing principles, bug reporting & quality workflows",
    credentialUrl: "",
    image: undefined,
  },
  {
    year: "2024",
    title: "Responsive Web Development",
    // TODO: Replace with exact issuing organization
    issuer: "Issuing organization · Update in data/portfolio.ts",
    summary: "Mobile-first layout engineering & accessible interface design",
    credentialUrl: "",
    image: undefined,
  },
];

export const trainingSlides: TrainingItem[] = [
  {
    title: "Fabsiklaban 2026",
    organizer: "Capstone Innovation Showcase",
    year: "2026",
    description:
      "Showcased Semilator, our Computer Engineering capstone project—demonstrating end-to-end hardware-software integration and live system presentation.",
    images: [
      { src: "/trainings/fabsiklaban-1.jpg", position: "center 35%" },
      { src: "/trainings/fabsiklaban-2.jpg", position: "center 48%" },
      { src: "/trainings/fabsiklaban-3.jpg", position: "center 78%" },
      { src: "/trainings/fabsiklaban-4.jpg", position: "center 42%" },
    ],
  },
  {
    title: "TechSTART CyberSafe",
    organizer: "DOST START · Cybersecurity Session",
    year: "2025",
    description:
      "Participated in “Don’t Get Fooled! Cybersecurity in the Age of Digital Deception,” focusing on digital safety, threat awareness, and secure online practices.",
    images: [{ src: "/trainings/techstart-1.jpg", position: "center" }],
  },
  {
    title: "Ideathon",
    organizer: "Innovation & Pitching Event",
    year: "2025",
    description:
      "Collaborated on rapid problem discovery, solution framing, and team pitching under time constraints.",
    images: [
      { src: "/trainings/ideathon-1.jpg", position: "center 42%" },
      { src: "/trainings/ideathon-2.jpg", position: "center 40%" },
      { src: "/trainings/ideathon-3.jpg", position: "center 35%" },
    ],
  },
  {
    title: "DOST Scholar Leadership Training",
    organizer: "DOST Scholars Leadership Program",
    year: "2025",
    description:
      "Strengthened collaborative leadership, community impact planning, and communication alongside fellow DOST scholars.",
    images: [
      { src: "/trainings/dost-leadership-1.jpg", position: "center 45%" },
      { src: "/trainings/dost-leadership-2.jpg", position: "center 50%" },
      { src: "/trainings/dost-leadership-3.jpg", position: "center 76%" },
    ],
  },
  {
    title: "AMBIT",
    organizer: "Tech & Engineering Event",
    year: "2025",
    description:
      "Engaged in hands-on learning, technical discussions, and peer collaboration across emerging engineering and technology topics.",
    images: [
      { src: "/trainings/ambit-1.jpg", position: "center 42%" },
      { src: "/trainings/ambit-2.jpg", position: "center 38%" },
      { src: "/trainings/ambit-3.jpg", position: "center 52%" },
    ],
  },
];
