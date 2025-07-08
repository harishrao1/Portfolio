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
    duration: "Aug 2023 - Present",
    location: "Pune, India",
    products: [
      "Admission CRM",
      "Application Form Management System",
      "Widget Integration",
    ],
    responsibilities: [
      "Engineered the Application Form Management System using React, Redux, Bootstrap, LESS, and JavaScript.",
      "Optimized performance by 40% through custom Webpack configurations and dynamic code splitting.",
      "Developed configurable JSON-based reporting dashboards using Nivo Charts (StackedBar, GroupedBar) for visual data insights.",
      "Pioneered implementation of dynamic, JSON-configurable UI components to meet diverse business requirements.",
      "Built Proof of Concepts (POCs) for key modules in Customer Relationship and Application Management Systems.",
      "Streamlined CI/CD workflows — reducing deployment time from 30 minutes with 3 manual steps to 5 minutes with 1-click automation.",
    ],
    techStack: ["React", "JavaScript", "Redux", "Bootstrap", "NodeJs"],
  },
  {
    company: "Crio.Do",
    position: "Web Development Intern",
    duration: "Dec 2022 - Jul 2023",
    location: "Remote",
    responsibilities: [
      "Collaborated with a team of engineers to build and deliver 5+ production-grade frontend projects.",
      "Built an e-commerce platform integrated with MongoDB supporting order flow, billing, and reports.",
      "Actively solved Data Structures and Algorithms challenges as part of hands-on learning and implementation.",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "ReactJs",
      "NodeJs",
      "MongoDB",
      "Bootstrap",
      "Ajax",
      "ExpressJs",
    ],
  },
];
export const experiences = [
  {
    company: "ExtraaEdge Technology Solutions",
    position: "Frontend Developer",
    duration: "08/23 - Present",
    location: "Current",
    products: [
      "Admission CRM",
      "Application Form Management System",
      "Widget Integration",
    ],
    responsibilities: [
      "Contributed to the development of Application Form Management System using React, Redux, Bootstrap, Less and JavaScript",
      "Participated in code optimization efforts, achieving 40% increase in website speed through custom webpack optimization and code splitting",
      "Developed JSON-configurable reports using Nivo Charts library with StackedBar and GroupedBar charts",
      "Implemented configurable features using JSON to meet business requirements",
      "Collaborated in implementing Automated CI/CD pipelines, reducing deployment time from 30 minutes to 5 minutes",
    ],
    techStack: ["React", "JavaScript", "Redux", "Bootstrap", "NodeJs"],
  },
  {
    company: "Crio.Do",
    position: "Web Development Intern",
    duration: "12/22 - 07/23",
    location: "Internship",
    responsibilities: [
      "Collaborated with team of software engineers to develop 5+ web applications",
      "Worked on an e-commerce website connecting MongoDB with features for orders, reports and billing",
      "Solved Data Structures and Algorithms Problems on platform",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "ReactJs",
      "NodeJs",
      "MongoDB",
      "Bootstrap",
      "Ajax",
      "ExpressJs",
    ],
  },
];
export const PROJECTS = [
  {
    name: "QKart Ecommerce Website",
    description:
      "A comprehensive shopping platform similar to Flipkart with full e-commerce functionality",
    techStack: [
      "ReactJs",
      "Material UI",
      "Redux",
      "JavaScript",
      "NodeJs",
      "MongoDB",
    ],
    category: "Full Stack",
  },
  {
    name: "XFLIX Video Streaming Platform",
    description:
      "A modern video streaming platform with responsive design and smooth user experience",
    techStack: ["HTML", "CSS", "Material UI", "React"],
    tools: ["VSCode", "Netlify", "PostMan"],
    category: "Frontend",
  },
  {
    name: "Food Ordering Website",
    description:
      "A fully functional website for online food ordering with database integration",
    techStack: ["Bootstrap", "JavaScript", "Node", "MySQL"],
    category: "Full Stack",
  },
  {
    name: "Frontend Mini Projects",
    description:
      "Collection of interactive web applications including Admin UI, News App, Hangman Game, Dynamic Tic-Tac-Toe, Quiz App, and Student Details App",
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "NodeJs"],
    category: "Frontend",
  },
];
export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home", icon: User },
  { id: "about", label: "About", icon: Target },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];
export const SKILLS = {
  Languages: ["JavaScript", "HTML", "CSS", "GoLang"],
  Frameworks: ["React", "Redux", "Bootstrap", "Express", "Axios"],
  Tools: ["Microsoft SQL Server", "GIT", "MySQL", "Jira", "Figma"],
  Other: ["Data Structure", "OOPs", "MongoDB"],
};
export const CERTIFICATIONS = [
  {
    name: "Geektrust Coding Challenge",
    description: "Scored 85/100 with 8 badges in Frontend React Challenge",
    icon: Trophy,
  },
  {
    name: "HarvardX Introduction to Computer Science (CS50)",
    description:
      "Gained knowledge in programming languages (C, Python), data structures and algorithms",
    icon: GraduationCap,
  },
  {
    name: "JavaScript Algorithms & Data Structure",
    description:
      "Developer certification by FreeCodeCamp - 300 hours completion",
    icon: Award,
  },
];

export const PORTFOLIO_INFO = {
  name: `HarishRao`,
  fullName: `Harishrao Rangineni`,
  currentRole: `Frontend Developer & React Specialist`,
  avatarIconName: `HR`,
  content: `Passionate about creating exceptional user experiences with modern
              web technologies. Specialized in React, Redux, and performance
              optimization.`,

  getInTouch: `Get In Touch`,
};

export const SOCIAL_PROFILE_URLS = {
  githubProfile: `https://github.com/harishrao1`,
  linkdlnProfile: `https://linkedin.com/in/harishrao-rangineni-669b99233/`,
};
