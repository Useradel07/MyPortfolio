import { Heart, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative dark:bg-slate-950 bg-gray-900 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Adel Rjili
          </div>

          <p className="text-gray-400 text-center mb-8 max-w-md">
            Full-Stack Developer specializing in Spring Boot, Angular, React, and modern web technologies
          </p>

          <div className="flex gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/adel-rjili-342191227/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg text-violet-400 hover:text-violet-300 hover:bg-slate-700/50 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Useradel07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg text-violet-400 hover:text-violet-300 hover:bg-slate-700/50 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:adel.rjili@isimg.tn"
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg text-violet-400 hover:text-violet-300 hover:bg-slate-700/50 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent mb-8" />

          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-gray-400">
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-violet-400 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-violet-400 transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-violet-400 transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-violet-400 transition-colors duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => document.querySelector('#achievements')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-violet-400 transition-colors duration-300"
            >
              Achievements
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-violet-400 transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          <p className="text-gray-500 text-sm text-center flex items-center gap-2">
            © {currentYear} Adel Rjili. Made with{' '}
            <Heart size={14} className="text-violet-400 animate-pulse" fill="currentColor" /> All
            Rights Reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
    </footer>
  );
}
