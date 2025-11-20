import { Award, BookOpen, Code2, GraduationCap } from 'lucide-react';
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
      className="relative py-32 dark:bg-slate-950 bg-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="dark:bg-slate-900/50 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border dark:border-violet-500/20 border-violet-200 shadow-xl">
              <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer with expertise in building modern, scalable web applications.
                With a strong foundation in both backend and frontend technologies, I specialize in creating
                seamless user experiences backed by robust server architecture.
              </p>
              <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-6">
                My journey in software development has equipped me with comprehensive skills in Spring Boot,
                Angular, React, and PostgreSQL, allowing me to deliver end-to-end solutions that meet business objectives.
              </p>
              <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed">
                I'm constantly learning and staying updated with the latest technologies, as evidenced by my
                collection of professional certifications in cloud computing, modern frameworks, and development tools.
              </p>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="space-y-6">
              <div className="group dark:bg-slate-900/50 bg-white/80 backdrop-blur-sm rounded-xl p-6 border dark:border-violet-500/20 border-violet-200 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">Education</h3>
                    <p className="dark:text-violet-300 text-violet-600 font-medium">
                      Institut Supérieur d'Informatique et Multimédia de Gabès (ISIMG)
                    </p>
                    <p className="dark:text-gray-400 text-gray-600 text-sm mt-1">Computer Science</p>
                  </div>
                </div>
              </div>

              <div className="group dark:bg-slate-900/50 bg-white/80 backdrop-blur-sm rounded-xl p-6 border dark:border-violet-500/20 border-violet-200 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">Experience</h3>
                    <p className="dark:text-gray-300 text-gray-700">
                      Building full-stack applications with modern frameworks and best practices
                    </p>
                  </div>
                </div>
              </div>

              <div className="group dark:bg-slate-900/50 bg-white/80 backdrop-blur-sm rounded-xl p-6 border dark:border-violet-500/20 border-violet-200 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">Certifications</h3>
                    <p className="dark:text-gray-300 text-gray-700">
                      7+ professional certifications in cloud, frameworks, and development tools
                    </p>
                  </div>
                </div>
              </div>

              <div className="group dark:bg-slate-900/50 bg-white/80 backdrop-blur-sm rounded-xl p-6 border dark:border-violet-500/20 border-violet-200 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">Languages</h3>
                    <p className="dark:text-gray-300 text-gray-700">
                      English (C1 Advanced) - EF SET Certified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
