import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? darkMode
              ? 'bg-slate-900/80 backdrop-blur-xl border-b border-violet-500/20 shadow-lg shadow-violet-500/10'
              : 'bg-white/80 backdrop-blur-xl border-b border-violet-200/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
              AR
            </div>

            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? 'text-gray-300 hover:text-violet-400'
                      : 'text-gray-700 hover:text-violet-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'bg-violet-500/10 text-violet-400 hover:bg-violet-500/20'
                    : 'bg-violet-100 text-violet-600 hover:bg-violet-200'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                darkMode ? 'text-violet-400' : 'text-violet-600'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
            darkMode ? 'bg-slate-950/95' : 'bg-white/95'
          } backdrop-blur-xl`}
          style={{ top: '72px' }}
        >
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-left text-lg font-medium transition-all duration-300 hover:translate-x-2 ${
                  darkMode ? 'text-gray-300 hover:text-violet-400' : 'text-gray-700 hover:text-violet-600'
                }`}
                style={{
                  animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                }}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex items-center gap-3 text-lg font-medium transition-all duration-300 ${
                darkMode ? 'text-violet-400' : 'text-violet-600'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
