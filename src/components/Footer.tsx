import {  Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative dark:bg-slate-950 bg-white text-slate-900 dark:text-white py-12 overflow-hidden border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Adel Rjili
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-md">
            Full-Stack Developer specializing in Spring Boot, React, and modern web technologies
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/adel-rjili-342191227/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 hover:shadow-lg dark:hover:shadow-slate-800/50 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Useradel07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 hover:shadow-lg dark:hover:shadow-slate-800/50 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:adel.rjili@isimg.tn"
              className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 hover:shadow-lg dark:hover:shadow-slate-800/50 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="w-full max-w-4xl h-px bg-slate-300 dark:bg-slate-800 mb-8" />

          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-slate-600 dark:text-slate-400">
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => document.querySelector('#achievements')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Achievements
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm text-center flex items-center gap-2">
            © {currentYear} Adel Rjili.   All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
