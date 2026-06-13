import {
  Award,
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  Target,
  Trophy,
  User,
  Zap,
} from "lucide-react";

export const SECTIONS = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
];

export const EXPERIENCES = [
  {
    company: "ExtraaEdge Technology Solutions",
    position: "Frontend Developer",
    duration: "Aug 2023 – Present",
    location: "Pune, India",
    products: [
      "Admission CRM",
      "Application Form Management",
      "AI Voice Agent",
      "Widget Integration",
    ],
    responsibilities: [
      "Architected a JSON-driven UI configuration system to decouple business logic from presentation, enabling dynamic component behavior and reducing client-specific customization effort by ~40%.",
      "Designed and optimized a data-intensive reporting dashboard using React, Nivo, and Ag-Grid, supporting large datasets with interactive drill-down and tab-based rendering.",
      "Improved application load performance through code splitting, lazy loading, and bundle size reduction — decreasing initial render time across high-traffic CRM modules.",
      "Built dual-mode voice calling (LiveKit WebRTC + carrier outbound) with config-driven routing, timezone-aware counselor scheduling, and edge case guards across mic, network, and multi-tab scenarios.",
      "Enhanced Webpack configuration by implementing chunk management strategies and resolving production ChunkLoadErrors, improving application stability and load reliability.",
      "Led debugging and resolution of critical production issues across CRM modules, performing root cause analysis to ensure high reliability in high-traffic environments.",
      "Contributed to multi-environment release cycles (alpha, beta, pilot, UAT, production), ensuring stable and reliable deployments.",
      "Refactored legacy components and improved frontend architecture to enhance maintainability, scalability, and developer productivity.",
    ],
    techStack: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "Ag-Grid",
      "Nivo Charts",
      "Webpack",
      "Node.js",
    ],
  },
];

export const PROJECTS = [
  {
    name: "AI Mock Interviewer",
    year: "2025",
    description:
      "AI-powered mock interview web app — paste a job description and receive tailored interview questions generated via the Claude API with real-time streamed responses.",
    highlights: [
      "Implemented batch answer evaluation sending all Q&A pairs in a single API call, returning structured per-question feedback with scores, strengths, and improvement areas.",
      "Designed multi-step interview flow with Zustand state management, localStorage session persistence, and PDF export of feedback reports.",
    ],
    techStack: ["React.js", "TypeScript", "Zustand", "Claude API"],
    category: "AI / Full Stack",
  },
  {
    name: "Config-Driven Reporting Dashboard",
    year: "2024",
    description:
      "Dynamic reporting dashboard with JSON-driven UI configuration for flexible and scalable component rendering at enterprise scale.",
    highlights: [
      "Implemented interactive charts and tables with filtering, grouping, and drill-down capabilities for large datasets.",
      "Optimized performance using lazy loading, memoization, and efficient state management for data-intensive views.",
    ],
    techStack: ["React.js", "Ag-Grid", "Nivo Charts"],
    category: "Frontend",
  },
];

export const NAVIGATION_ITEMS = [
  { id: "home",       label: "Home",       icon: User           },
  { id: "about",      label: "About",      icon: Target         },
  { id: "experience", label: "Experience", icon: Briefcase      },
  { id: "projects",   label: "Projects",   icon: Code           },
  { id: "skills",     label: "Skills",     icon: Zap            },
  { id: "education",  label: "Education",  icon: GraduationCap  },
  { id: "contact",    label: "Contact",    icon: Mail           },
];

export const SKILLS = {
  Frontend: [
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Redux",
    "Context API",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
  ],
  "Data & APIs": [
    "Ag-Grid",
    "Nivo Charts",
    "Node.js",
    "Express.js",
    "Golang",
    "REST APIs",
    "MySQL",
    "MongoDB",
  ],
  "Build & Tools": [
    "Webpack",
    "Babel",
    "Git",
    "GitHub Actions",
    "Postman",
  ],
  "Core Concepts": [
    "Config-driven UI",
    "Performance Optimization",
    "Code Splitting",
    "Lazy Loading",
    "State Management",
    "Responsive Design",
  ],
};

export const CERTIFICATIONS = [
  {
    name: "Geektrust Coding Challenge",
    description: "Scored 85/100 with 8 badges in the Frontend React Challenge",
    icon: Trophy,
  },
  {
    name: "HarvardX CS50",
    description:
      "Introduction to Computer Science — C, Python, data structures and algorithms",
    icon: GraduationCap,
  },
  {
    name: "JavaScript Algorithms & Data Structures",
    description: "Developer certification by FreeCodeCamp — 300 hours",
    icon: Award,
  },
];

export const PORTFOLIO_INFO = {
  name: "Harish Rao",
  fullName: "Harish Rao Rangineni",
  currentRole: "Frontend Developer & React Specialist",
  avatarIconName: "HR",
  content:
    "Frontend Engineer with 3 years of experience building scalable React.js applications at a B2B SaaS company. Specializes in config-driven UI architecture, performance optimization, and data-intensive dashboards.",
  getInTouch: "Get In Touch",
};

export const SOCIAL_PROFILE_URLS = {
  githubProfile: "https://github.com/harishrao1",
  linkdlnProfile: "https://linkedin.com/in/harishrao-rangineni-669b99233/",
};
