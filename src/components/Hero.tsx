import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 dark:opacity-100 opacity-0 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-blue-50 to-purple-100 dark:opacity-0 opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-violet-500 via-blue-500 to-purple-600 p-1 shadow-2xl shadow-violet-500/50 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-slate-900 dark:bg-slate-900 flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-violet-400 to-blue-400 bg-clip-text text-transparent">
                AR
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Adel Rjili
          </h1>

          <div className="text-xl md:text-2xl mb-6 dark:text-gray-300 text-gray-700 font-light">
            <span className="inline-block animate-slide-up">Full-Stack Developer</span>
          </div>

          <p className="text-lg md:text-xl mb-8 dark:text-violet-300 text-violet-600 font-medium max-w-3xl mx-auto">
            Spring Boot · Angular · React · PostgreSQL
          </p>

          <p className="text-base md:text-lg mb-12 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Crafting elegant solutions with modern technologies. Specialized in building scalable web applications with cutting-edge frameworks and tools.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/70 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ArrowDown size={20} className="group-hover:animate-bounce" />
              </span>
            </button>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-xl font-semibold dark:text-violet-400 text-violet-600 border-2 border-violet-500/50 hover:border-violet-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/adel-rjili-342191227/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-lg dark:text-violet-400 text-violet-600 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-lg dark:text-violet-400 text-violet-600 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:adel@example.com"
              className="p-3 dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-lg dark:text-violet-400 text-violet-600 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="dark:text-violet-400 text-violet-600" size={32} />
      </div>
    </section>
  );
}
