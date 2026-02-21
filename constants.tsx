import { Project, Skill } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "CourseCode",
    description:
      "A study tool that teaches coding concepts through interactive exercises and real-time feedback.",
    tech: ["React", "TypeScript", "D3.js", "Firebase", "Node.js"],
    image: "img/course-code.png",
    github: "https://github.com/bblack-jewENT/CourseCode",
    demo: "https://course-code-chi.vercel.app/",
  },
  {
    id: "2",
    title: "Github User Search",
    description:
      "An intuitive interface for searching GitHub users and repositories, with detailed profiles and activity insights.",
    tech: ["React", "Python", "Gemini API", "PostgreSQL", "Docker"],
    image: "img/Github-user-search.png",
    github:
      "https://github.com/bblack-jewENT/alx-fe-reactjs/tree/main/github-user-search",
    demo: "https://alx-fe-reactjs-two-swart-65.vercel.app/",
  },
  {
    id: "3",
    title: "FlowState Editor",
    description:
      "A high-performance markdown editor with collaborative features and real-time canvas visualization.",
    tech: ["React", "WebRTC", "ProseMirror", "Framer Motion"],
    image: "https://picsum.photos/seed/flow/800/600",
    demo: "https://demo.com",
  },
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "D3.js / Recharts", level: 85, category: "Frontend" },
  { name: "Node.js / Express", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "Gemini API", level: 85, category: "AI" },
  { name: "Docker / CI/CD", level: 70, category: "Tools" },
];

export const MOSES_BIO = `
Moses is a world-class senior frontend engineer with a passion for building robust, scalable, and beautifully designed web applications. 
With over 8 years of experience in the industry, Moses specializes in React and TypeScript ecosystems but is equally comfortable architecting full-stack solutions.
He has a deep interest in Generative AI and how it can be integrated into the modern web workflow to create intuitive, "intelligent" user experiences.
When he's not coding, Moses contributes to open-source projects or mentors junior developers.
`;
