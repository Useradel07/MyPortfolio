import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';

export default function Experience() {
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

  const timeline = [
    {
      icon: GraduationCap,
      title: 'Computer Science Education',
      organization: 'ISIMG - Gabès',
      period: 'Present',
      description: 'Pursuing comprehensive computer science education with focus on software engineering, web development, and modern programming paradigms.',
      color: 'from-violet-500 to-purple-600',
      skills: ['Software Engineering', 'Algorithms', 'Database Design', 'Web Development'],
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      organization: 'Personal & Academic Projects',
      period: '2023 - Present',
      description: 'Building modern web applications using Spring Boot, Angular, React, and PostgreSQL. Specialized in creating scalable, maintainable solutions.',
      color: 'from-blue-500 to-cyan-600',
      skills: ['Spring Boot', 'Angular', 'React', 'PostgreSQL'],
    },
    {
      icon: Briefcase,
      title: 'Continuous Learning',
      organization: 'Professional Certifications',
      period: '2022 - Present',
      description: 'Actively pursuing professional certifications in cloud computing (AWS), modern frameworks (React), and development tools (Jira, Linux).',
      color: 'from-purple-500 to-pink-600',
      skills: ['AWS', 'React', 'Jira', 'TypeScript', 'Linux'],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 dark:bg-slate-900 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-blue-500/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 to-purple-500">
            <div
              className={`absolute inset-0 bg-gradient-to-b from-violet-400 to-blue-400 transition-all duration-1000 ${
                isVisible ? 'scale-y-100' : 'scale-y-0'
              } origin-top`}
            />
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  <div
                    className={`w-full md:w-5/12 transform transition-all duration-700 ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : isEven
                        ? '-translate-x-10 opacity-0'
                        : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="group dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border dark:border-violet-500/20 border-violet-200 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 ml-20 md:ml-0 hover:scale-105">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-br ${item.color} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="dark:text-violet-300 text-violet-600 font-medium mb-1">
                            {item.organization}
                          </p>
                          <p className="dark:text-gray-500 text-gray-500 text-sm">
                            {item.period}
                          </p>
                        </div>
                      </div>

                      <p className="dark:text-gray-400 text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 dark:bg-violet-500/10 bg-violet-100 dark:text-violet-300 text-violet-700 rounded-full text-xs font-medium border dark:border-violet-500/30 border-violet-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 border-4 dark:border-slate-900 border-white shadow-lg z-10 group-hover:scale-150 transition-transform duration-300">
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 animate-ping ${
                        isVisible ? 'opacity-75' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    />
                  </div>

                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
