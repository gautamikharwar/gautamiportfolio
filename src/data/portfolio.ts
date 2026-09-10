export const profile = {
  name: "Gautami",
  role: "UI/UX Designer · Product Designer",
  // Dummy domain — replace with the real deployed URL before launch.
  siteUrl: "https://example.com",
  tagline: "I turn ideas into simple, useful products.",
  bio: "8+ years designing digital products across e-commerce, SaaS, and hospitality. I focus on making complex things simple and creating experiences that work for both people and businesses.",
  location: "Surat, Gujarat, India",
  email: "gautamikharwar2813@gmail.com",
  phone: "+91 74879-67832",
  resumeUrl: "/resume.docx",
  // TODO: replace with your real profile URLs — not present in the resume file.
  social: [{ label: "LinkedIn", href: "https://linkedin.com/in/yourusername" }],
};

export const aboutHeadline =
  "I help teams turn complex problems into simple, intuitive product experiences that work for people and businesses.";

export const aboutStats = [
  { value: "8+", label: "Years of design experience" },
  { value: "35+", label: "Responsive designs delivered" },
  { value: "5", label: "Companies collaborated with" },
];

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "Vercel"],
  },
];

export const experience = [
  {
    role: "Product Design Engineer",
    company: "Apycue",
    period: "Aug 2025 — Present",
    description:
      "Sole designer for an AI-agent platform that helps hotels grow direct bookings and reduce OTA dependency, owning the product end-to-end as a team of one.",
    highlights: [
      "Led design from the ground up: participated in product/feature discussions, defined the visual language (color theme, typography), and built every product screen from scratch",
      "Introduced an AI-assisted design-to-code workflow, prompting Claude Code to generate production UI directly, speeding up the path from concept to working screens",
      "Partner closely with developers throughout implementation, providing UI specs, reviewing built screens against design intent, and flagging UI and product-flow issues before release",
    ],
  },
  {
    role: "Senior UI/UX Designer",
    company: "Ayu Developers",
    period: "Aug 2023 — Aug 2025",
    description:
      "Delivered 35+ responsive web and app designs across multiple sectors, including B2C e-commerce websites.",
    highlights: [
      "Built wireframes, interactive prototypes, and scalable design systems in Figma and Adobe XD to maintain consistency across products",
      "Mentored junior designers and helped shape internal design standards and best practices",
      "Owned full-cycle UI/UX design from brief to delivery, ensuring responsive and accessible experiences across devices",
    ],
  },
  {
    role: "Senior UI/UX Designer",
    company: "Aureate Labs",
    period: "Aug 2020 — Aug 2023",
    description:
      "Designed UI for B2C e-commerce platforms, working cross-functionally with developers, product owners, and stakeholders.",
    highlights: [
      "Built design systems and reusable components in Figma; supported front-end developers with asset handoff, specs, and QA review",
      "Conducted user testing and iterated designs based on feedback",
    ],
  },
  {
    role: "Junior UI/UX Designer",
    company: "3WP Infosystem",
    period: "Aug 2018 — Aug 2020",
    description:
      "Supported senior designers with research and UI development; designed components and icons for internal web tools.",
    highlights: [
      "Built wireframes and mockups in Figma, iterating designs based on user testing feedback",
    ],
  },
  {
    role: "Junior UI/UX Designer",
    company: "Aspirebit Technolab",
    period: "Jan 2018 — Aug 2018",
    description:
      "Gained hands-on experience with Adobe XD and Photoshop, creating wireframes, mood boards, and early-stage prototypes for client projects.",
    highlights: [
      "Assisted in designing web and mobile interfaces under senior designer guidance",
    ],
  },
  {
    role: "Bachelor of Engineering (B.E.), Computer Engineering",
    company: "Gujarat Technological University",
    period: "2014 — 2018",
    description: "Gujarat, India.",
    highlights: [],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "A short, punchy description of what this project does and the problem it solves for its users.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "A short, punchy description of what this project does and the problem it solves for its users.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "A short, punchy description of what this project does and the problem it solves for its users.",
    tags: ["Python", "API"],
    githubUrl: "#",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "getting-started",
    title: "Getting started with this blog",
    excerpt:
      "A quick placeholder post explaining what this blog will be about once real content is added.",
    date: "2026-01-01",
    content: [
      "This is a placeholder post. Replace this content in src/data/portfolio.ts with your own writing.",
      "Each post lives in the `posts` array as a list of paragraphs, so it's easy to edit without adding a CMS.",
    ],
  },
  {
    slug: "second-post",
    title: "A second placeholder post",
    excerpt:
      "Another example post to show how the blog listing and detail pages look with more than one entry.",
    date: "2026-01-15",
    content: [
      "Swap this out for real writing whenever you're ready — notes on a project, something you learned, or anything else worth sharing.",
    ],
  },
];
