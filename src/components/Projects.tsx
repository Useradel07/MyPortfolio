import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Layers, Zap } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Enterprise Resource Planning System',
      description: 'Full-stack ERP solution built with Spring Boot and Angular, featuring real-time updates, role-based access control, and comprehensive business management modules.',
      tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'WebSocket'],
      icon: Layers,
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce application with React frontend, featuring shopping cart, payment integration, product catalog, and admin dashboard with analytics.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
      icon: Code,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Real-Time Tracking Dashboard',
      description: 'Interactive dashboard with Leaflet.js integration for real-time location tracking, featuring live updates via WebSocket and comprehensive data visualization.',
      tags: ['Angular', 'Leaflet.js', 'WebSocket', 'Bootstrap'],
      icon: Zap,
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 dark:bg-slate-950 bg-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`group transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative dark:bg-slate-900/50 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border dark:border-violet-500/20 border-violet-200 hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-500 h-full hover:scale-105">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={48} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="dark:text-gray-400 text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 dark:bg-violet-500/10 bg-violet-100 dark:text-violet-300 text-violet-700 rounded-full text-xs font-medium border dark:border-violet-500/30 border-violet-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105">
                        <ExternalLink size={16} />
                        Demo
                      </button>
                      <button className="flex items-center justify-center gap-2 px-4 py-2 dark:bg-slate-800 bg-violet-50 dark:text-violet-300 text-violet-700 rounded-lg font-medium border dark:border-violet-500/30 border-violet-200 hover:scale-105 transition-all duration-300">
                        <Github size={16} />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
