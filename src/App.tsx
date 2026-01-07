import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="relative overflow-hidden">
        <div className="relative z-10">
          <Hero />
          <div className="space-y-0">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;