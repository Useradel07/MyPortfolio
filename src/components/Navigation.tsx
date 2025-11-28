import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className={`mx-auto max-w-5xl rounded-2xl transition-all duration-300 ${
            isScrolled 
              ? 'glass px-6 py-3 bg-white/70 dark:bg-slate-900/60' 
              : 'px-0 py-0 bg-transparent border-transparent'
          }`}>
            <div className="flex items-center justify-between">
              <a href="#" className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
                AR.
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
                
                <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />
                
                <div className="flex gap-4">
                    <SocialIcon href="https://github.com/Useradel07" icon={<Github size={18} />} />
                    <SocialIcon href="https://linkedin.com" icon={<Linkedin size={18} />} />
                </div>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>

              {/* Mobile Toggle */}
              <button 
                className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-slate-800 dark:text-slate-200"
                >
                  {link.name}
                </a>
              ))}
              <button
                  onClick={() => {
                      setDarkMode(!darkMode);
                      setIsMobileMenuOpen(false);
                  }}
                  className="mt-4 px-6 py-2 rounded-full bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400"
                >
                  {darkMode ? 'Switch to Light' : 'Switch to Dark'}
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-violet-500 transition-colors">
        {icon}
    </a>
);