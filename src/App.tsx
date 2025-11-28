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
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="relative overflow-hidden">
        {/* Global decorative gradients */}
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
             <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-violet-500/10 rounded-full blur-[100px]" />
             <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          <Hero />
          <div className="space-y-12 md:space-y-32">
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