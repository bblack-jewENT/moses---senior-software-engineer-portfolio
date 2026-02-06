import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../constants";

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const scrollPercent =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      // Subtle parallax range: -20px to 20px
      setOffset((scrollPercent - 0.5) * 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTechClick = (tech: string) => {
    console.log(`Searching for projects with tech: ${tech}`);
    // Future implementation: Filter projects by tag
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl glass-effect border border-gray-800 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          style={{ transform: `scale(1.2) translateY(${offset}px)` }}
          className="w-full h-full object-cover transition-transform duration-100 ease-out"
        />
        {/* Overlay for better text legibility if needed, keeping it clean for now */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>

        {/* Clickable Tech Tags Below Title */}
        <div className="flex flex-wrap gap-2 mt-3 mb-6">
          {project.tech.map((t: string) => (
            <button
              key={t}
              onClick={(e) => {
                e.preventDefault();
                handleTechClick(t);
              }}
              className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-indigo-500/5 text-indigo-400 border border-indigo-500/10 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300"
            >
              {t}
            </button>
          ))}
        </div>

        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center space-x-4">
          {project.github && (
            <a
              href={project.github}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="flex items-center space-x-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <span>View Demo</span>
              <i className="fas fa-external-link-alt text-xs"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Selected Projects
            </h2>
            <div className="h-2 w-20 bg-indigo-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-md">
            A showcase of my recent work spanning cloud dashboards, AI
            integrations, and creative tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
