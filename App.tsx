import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillVisualizer from "./components/SkillVisualizer";
import Contact from "./components/Contact";
import AIChatAssistant from "./components/AIChatAssistant";
import { MOSES_BIO } from "./constants";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Navigation />

      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-8">
                <span className="h-px w-12 bg-indigo-500"></span>
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-400">
                  Professional Background
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-12">
                The intersection of{" "}
                <span className="text-indigo-500 italic">logic</span> and{" "}
                <span className="text-indigo-500 italic">creativity</span>.
              </h2>
              <div className="grid md:grid-cols-5 gap-12 items-start">
                <div className="md:col-span-3 text-lg text-gray-400 leading-relaxed space-y-6">
                  {MOSES_BIO.split("\n")
                    .filter((p) => p.trim())
                    .map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                </div>
                <div className="md:col-span-2 space-y-8">
                  <div className="glass-effect p-8 rounded-3xl border border-gray-800">
                    <h4 className="text-indigo-400 font-bold mb-4 uppercase tracking-widest text-xs">
                      Primary Stack
                    </h4>
                    <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Node.js",
                        "PostgreSQL",
                        "Docker",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center space-x-2 text-sm font-medium"
                        >
                          <i className="fas fa-check text-indigo-500 text-[10px]"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-indigo-600/10 p-8 rounded-3xl border border-indigo-500/20">
                    <h4 className="text-indigo-400 font-bold mb-2 uppercase tracking-widest text-xs">
                      Years of Experience
                    </h4>
                    <p className="text-4xl font-black text-white">8+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        {/* Skills Section */}
        <section id="skills" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Technical Arsenal
              </h2>
              <p className="text-gray-400">
                Visualizing my core technical skills and areas of expertise
                built over years of shipping products.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <SkillVisualizer />
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="py-12 border-t border-gray-900 bg-gray-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Moses. Built by bblack-jew ENTj .
          </p>
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/bblack-jewENT"
              aria-label="GitHub"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bblack-jewent/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>

      <AIChatAssistant />
    </div>
  );
};

export default App;
