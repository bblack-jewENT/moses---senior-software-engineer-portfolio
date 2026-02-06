
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase mb-4 animate-pulse">
            Available for New Challenges
          </p>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            I build <span className="gradient-text">impactful</span> digital experiences<span className="text-indigo-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
            Hi, I'm <span className="text-white font-bold">Moses</span>. A Senior Software Engineer specializing in frontend but capable of delivering full-stack excellence. I turn complex problems into elegant software solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 text-center">
              View My Work
            </a>
            <a href="#contact" className="glass-effect text-white border border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all transform hover:-translate-y-1 text-center">
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-indigo-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
