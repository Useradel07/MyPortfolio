import { useEffect, useRef, useState } from 'react';
import { Award, Shield, Globe, Code, Cloud, Terminal, Layout } from 'lucide-react';

export default function Achievements() {
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

  const certifications = [
    {
      icon: Shield,
      title: 'Get Started with Jira',
      organization: 'United Latino Students Association',
      date: 'Nov 2025',
      credentialId: 'Y1WAJLCTSS0V',
      skills: ['Software Project Management', 'Jira'],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Cloud,
      title: 'Create a Virtual Private Cloud (VPC) Using AWS',
      organization: 'Coursera',
      date: 'Sep 2025',
      credentialId: 'VS4MCPMBXFZ8',
      skills: ['AWS', 'Amazon VPC', 'Cloud Infrastructure'],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Globe,
      title: 'EF SET English Certificate',
      organization: 'EF SET',
      date: 'Aug 2025',
      credentialId: 'C1 Advanced - 65/100',
      skills: ['English (Advanced)', 'Communication'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Code,
      title: 'React.JS for Ecommerce',
      organization: 'Udemy',
      date: 'Aug 2025',
      credentialId: 'Completed',
      skills: ['React', 'E-commerce', 'Front-End Development'],
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Layout,
      title: 'Build a Website Using Wix ADI',
      organization: 'United Latino Students Association',
      date: 'Sep 2022',
      credentialId: 'XXDT49RV7QZV',
      skills: ['Web Development', 'UI/UX'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Terminal,
      title: 'Command Line in Linux',
      organization: 'United Latino Students Association',
      date: 'Sep 2022',
      credentialId: '2PXT4GH6SVBT',
      skills: ['Linux', 'Command Line', 'System Administration'],
      color: 'from-slate-500 to-gray-600',
    },
    {
      icon: Code,
      title: 'TypeScript Variables and Data Types',
      organization: 'United Latino Students Association',
      date: 'Sep 2022',
      credentialId: 'AHK3AJ622JE9',
      skills: ['TypeScript', 'Programming Fundamentals'],
      color: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-32 dark:bg-slate-950 bg-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block p-4 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full mb-6 shadow-xl shadow-violet-500/50">
            <Award size={40} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
          <p className="mt-6 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Continuously expanding expertise through professional certifications and hands-on learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className={`group transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative dark:bg-slate-900/50 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border dark:border-violet-500/20 border-violet-200 hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-500 h-full hover:scale-105 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className={`inline-block p-3 bg-gradient-to-br ${cert.color} rounded-xl mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2 leading-snug">
                      {cert.title}
                    </h3>

                    <p className="dark:text-violet-300 text-violet-600 font-medium text-sm mb-2">
                      {cert.organization}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <p className="dark:text-gray-500 text-gray-500 text-sm">
                        {cert.date}
                      </p>
                      <div className="px-2 py-1 dark:bg-violet-500/10 bg-violet-100 rounded text-xs dark:text-violet-300 text-violet-700 font-medium">
                        Verified
                      </div>
                    </div>

                    <div className="dark:bg-slate-800/50 bg-violet-50/50 rounded-lg p-3 mb-4 border dark:border-violet-500/20 border-violet-200">
                      <p className="text-xs dark:text-gray-400 text-gray-500 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 dark:bg-slate-700/50 bg-violet-50 dark:text-violet-300 text-violet-700 rounded text-xs font-medium border dark:border-violet-500/30 border-violet-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block dark:bg-slate-900/50 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border dark:border-violet-500/20 border-violet-200 shadow-xl">
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  7+
                </div>
                <div className="dark:text-gray-400 text-gray-600 text-sm">
                  Certifications
                </div>
              </div>
              <div className="w-px h-12 dark:bg-violet-500/20 bg-violet-200" />
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="dark:text-gray-400 text-gray-600 text-sm">
                  Skills Verified
                </div>
              </div>
              <div className="w-px h-12 dark:bg-violet-500/20 bg-violet-200" />
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  C1
                </div>
                <div className="dark:text-gray-400 text-gray-600 text-sm">
                  English Level
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
