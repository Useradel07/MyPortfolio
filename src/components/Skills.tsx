import { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Wrench, Layout, Server } from 'lucide-react';

export default function Skills() {
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

  const skillCategories = [
    {
      icon: Server,
      title: 'Backend',
      color: 'from-violet-500 to-purple-600',
      skills: ['Spring Boot', 'Java', 'REST APIs', 'SQL'],
    },
    {
      icon: Layout,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-600',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    },
    {
      icon: Code,
      title: 'Styling',
      color: 'from-purple-500 to-pink-600',
      skills: ['Tailwind CSS', 'Bootstrap', 'SCSS', 'SweetAlert.js'],
    },
    {
      icon: Database,
      title: 'Database',
      color: 'from-cyan-500 to-blue-600',
      skills: ['PostgreSQL', 'SQL'],
    },
    {
      icon: Cloud,
      title: 'Cloud & Tools',
      color: 'from-orange-500 to-red-600',
      skills: ['AWS', 'Amazon VPC', 'WebSocket', 'Leaflet.js'],
    },
    {
      icon: Wrench,
      title: 'Development Tools',
      color: 'from-green-500 to-emerald-600',
      skills: ['Postman', 'VSCode', 'IntelliJ', 'Jira', 'Linux', 'Git'],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 dark:bg-slate-900 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`group transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border dark:border-violet-500/20 border-violet-200 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 h-full hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className={`inline-block p-4 bg-gradient-to-br ${category.color} rounded-xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} />
                    </div>

                    <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-4 py-2 dark:bg-slate-700/50 bg-violet-50 dark:text-violet-300 text-violet-700 rounded-lg text-sm font-medium border dark:border-violet-500/30 border-violet-200 hover:scale-105 transition-transform duration-300 cursor-default"
                          style={{
                            animation: isVisible
                              ? `fadeIn 0.5s ease-out ${(index * 100 + skillIndex * 50)}ms both`
                              : 'none',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
