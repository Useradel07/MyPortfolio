import { BookOpen, Code2, GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 dark:bg-slate-950 bg-white border-t border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-6 relative z-10 mx-auto">
        <div className="mb-16 animate-fade-in-down text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            About
          </h2>
          <div className="w-16 h-1 bg-slate-900 dark:bg-white mb-6 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto text-center md:text-left">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed">
              I'm a Full-Stack Developer with expertise in building scalable web applications. 
              I work across the entire stack—backend systems, frontend interfaces, and databases—to deliver complete solutions.
            </p>
            <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed">
              My focus is on writing clean, maintainable code using Spring Boot, React, TypeScript, and PostgreSQL. 
              I approach each project with an emphasis on performance, user experience, and long-term maintainability.
            </p>
            <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed">
              Currently studying Computer Science while building real-world applications. 
              I'm always learning new technologies and improving my craft.
            </p>
          </div>

          <div className="space-y-6">
            <div className={`dark:bg-slate-900 bg-slate-50 rounded-lg p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white flex-shrink-0 transition-all duration-300 group-hover:shadow-md">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-2">Education</h3>
                  <p className="dark:text-slate-300 text-slate-700 font-medium mb-1">
                    ISIMG - Gabès
                  </p>
                  <p className="dark:text-slate-400 text-slate-600 text-sm">
                    Computer Science Degree (2022–Present)
                  </p>
                </div>
              </div>
            </div>

            <div className={`dark:bg-slate-900 bg-slate-50 rounded-lg p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white flex-shrink-0 transition-all duration-300 group-hover:shadow-md">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-2">Development</h3>
                  <p className="dark:text-slate-300 text-slate-700">
                    Full-stack applications with Spring Boot, React, and modern tooling
                  </p>
                </div>
              </div>
            </div>

            <div className={`dark:bg-slate-900 bg-slate-50 rounded-lg p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white flex-shrink-0 transition-all duration-300 group-hover:shadow-md">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-2">Always Learning</h3>
                  <p className="dark:text-slate-300 text-slate-700">
                    Cloud infrastructure, system design, and software engineering best practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

  
