
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CloudScale Dashboard',
    description: 'A real-time monitoring dashboard for distributed systems with live telemetry and predictive alerts.',
    tech: ['React', 'TypeScript', 'D3.js', 'Tailwind', 'Node.js'],
    image: 'https://picsum.photos/seed/cloud/800/600',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: '2',
    title: 'Gemini-Powered Knowledge Graph',
    description: 'An AI-driven application that builds semantic links between documents using LLMs and vector databases.',
    tech: ['Next.js', 'Python', 'Gemini API', 'PostgreSQL', 'Docker'],
    image: 'https://picsum.photos/seed/ai/800/600',
    github: 'https://github.com'
  },
  {
    id: '3',
    title: 'FlowState Editor',
    description: 'A high-performance markdown editor with collaborative features and real-time canvas visualization.',
    tech: ['React', 'WebRTC', 'ProseMirror', 'Framer Motion'],
    image: 'https://picsum.photos/seed/flow/800/600',
    demo: 'https://demo.com'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'D3.js / Recharts', level: 85, category: 'Frontend' },
  { name: 'Node.js / Express', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', level: 75, category: 'Backend' },
  { name: 'Gemini API', level: 85, category: 'AI' },
  { name: 'Docker / CI/CD', level: 70, category: 'Tools' }
];

export const MOSES_BIO = `
Moses is a world-class senior frontend engineer with a passion for building robust, scalable, and beautifully designed web applications. 
With over 8 years of experience in the industry, Moses specializes in React and TypeScript ecosystems but is equally comfortable architecting full-stack solutions.
He has a deep interest in Generative AI and how it can be integrated into the modern web workflow to create intuitive, "intelligent" user experiences.
When he's not coding, Moses contributes to open-source projects or mentors junior developers.
`;
