import React from "react";
import { PROJECTS } from "../constants";

const AllProjects: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-8">All Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl glass-effect border border-gray-800 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-100 ease-out"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3 mb-6">
                  {project.tech.map((t: string) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-indigo-500/5 text-indigo-400 border border-indigo-500/10"
                    >
                      {t}
                    </span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
