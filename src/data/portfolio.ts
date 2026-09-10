export const profile = {
  name: "Gautami",
  role: "UI/UX Designer · Product Designer",
  // Dummy domain — replace with the real deployed URL before launch.
  siteUrl: "https://example.com",
  tagline: "I turn ideas into simple, useful products.",
  bio: "8+ years designing digital products across e-commerce, SaaS, and hospitality. I focus on making complex things simple and creating experiences that work for both people and businesses.",
  location: "Remote",
  email: "hello@example.com",
  resumeUrl: "/resume.docx",
  social: [
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { label: "Twitter", href: "https://twitter.com/yourusername" },
  ],
};

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
    role: "Software Developer",
    company: "Company Name",
    period: "2023 — Present",
    description:
      "Building and maintaining web applications, collaborating with design and product to ship features end to end.",
    highlights: [
      "Led development of a key customer-facing feature from design to launch",
      "Improved page load performance by optimizing rendering and data fetching",
      "Mentored junior developers and led code reviews",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Previous Company",
    period: "2022 — 2023",
    description:
      "Worked on the frontend team building reusable UI components and improving accessibility across the product.",
    highlights: [
      "Built a component library used across three internal products",
      "Fixed accessibility issues to meet WCAG AA standards",
    ],
  },
  {
    role: "B.Tech, Computer Science",
    company: "University Name",
    period: "2019 — 2023",
    description:
      "Graduated with a focus on web development and software engineering.",
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
