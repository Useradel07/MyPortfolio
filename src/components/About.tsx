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
      className="relative py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-slate-900 dark:bg-white mx-auto mt-4 rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
            Passionate about building modern, scalable web applications with clean code,
            intuitive user experiences, and reliable backend solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Content */}
          <div
            className={`space-y-6 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              I'm a <strong>Web Developer</strong> focused on creating fast,
              responsive, and scalable web applications. I enjoy turning ideas
              into polished digital products that combine clean architecture,
              modern technologies, and exceptional user experiences.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              My primary stack includes <strong>React</strong>,{' '}
              <strong>TypeScript</strong>, <strong>Spring Boot</strong>, and{' '}
              <strong>PostgreSQL</strong>, enabling me to build secure,
              maintainable, and high-performance applications from frontend to
              backend.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Currently pursuing a <strong>Computer Science</strong> degree while
              continuously expanding my knowledge in software architecture,
              performance optimization, cloud technologies, and modern web
              development practices.
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {/* Education */}
            <div
              className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-400 dark:hover:border-slate-600 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-200 dark:bg-slate-800 p-3 text-slate-900 dark:text-white">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Education
                  </h3>

                  <p className="mt-1 font-medium text-slate-700 dark:text-slate-300">
                    Higher Institute of Computer Science and Multimedia of Gabès
                    (ISIMG)
                  </p>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Bachelor's Degree in Computer Science • 2022 – Present
                  </p>
                </div>
              </div>
            </div>

            {/* Development */}
            <div
              className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-400 dark:hover:border-slate-600 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-200 dark:bg-slate-800 p-3 text-slate-900 dark:text-white">
                  <Code2 size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Development
                  </h3>

                  <p className="mt-1 text-slate-700 dark:text-slate-300">
                    Building modern web applications using React, TypeScript,
                    Spring Boot, PostgreSQL, REST APIs, and industry-standard
                    development practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Learning */}
            <div
              className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-400 dark:hover:border-slate-600 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-200 dark:bg-slate-800 p-3 text-slate-900 dark:text-white">
                  <BookOpen size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Continuous Learning
                  </h3>

                  <p className="mt-1 text-slate-700 dark:text-slate-300">
                    Continuously improving my expertise in software architecture,
                    cloud technologies, performance optimization, accessibility,
                    and modern frontend development.
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