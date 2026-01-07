import { Shield, Globe, Code, Cloud, Terminal, Layout, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
      skills: ['Project Management', 'Jira'],
      link: 'https://www.coursera.org/account/accomplishments/verify/Y1WAJLCTSS0V',
    },
    {
      icon: Cloud,
      title: 'Create a Virtual Private Cloud (VPC) Using AWS',
      organization: 'Coursera',
      date: 'Sep 2025',
      skills: ['AWS', 'Cloud Infrastructure'],
      link: 'https://www.coursera.org/account/accomplishments/verify/VS4MCPMBXFZ8',
    },
    {
      icon: Globe,
      title: 'EF SET English Certificate',
      organization: 'EF SET',
      date: 'Aug 2025',
      skills: ['English', 'C1 Advanced'],
      link: 'https://cert.efset.org/fr/tdodY3',
    },
    {
      icon: Code,
      title: 'React.JS for E-commerce',
      organization: 'Udemy',
      date: 'Aug 2025',
      skills: ['React', 'Frontend Development'],
      link: 'https://www.coursera.org/account/accomplishments/verify/Y1WAJLCTSS0V',
    },
    {
      icon: Layout,
      title: 'Build a Website Using Wix ADI',
      organization: 'United Latino Students Association',
      date: 'Sep 2022',
      skills: ['Web Development', 'UI/UX'],
      link: 'https://www.coursera.org/account/accomplishments/verify/XXDT49RV7QZV',
    },
    {
      icon: Terminal,
      title: 'Command Line in Linux',
      organization: 'United Latino Students Association',
      date: 'Sep 2022',
      skills: ['Linux', 'System Administration'],
      link: 'https://www.coursera.org/account/accomplishments/verify/2PXT4GH6SVBT',
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-24 dark:bg-slate-950 bg-white border-t border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-slate-900 dark:bg-white mb-6 mx-auto" />
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
            Professional credentials and continuous learning in cloud, frameworks, and development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                role="group"
                title={cert.title}
                aria-label={`Certificate: ${cert.title}`}
                className="dark:bg-slate-900 bg-slate-50 rounded-lg p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 animate-scale-in cursor-default h-full flex flex-col"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg w-fit text-slate-900 dark:text-white transition-all duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-1">
                      {cert.title}
                    </h3>
                    <p className="dark:text-slate-400 text-slate-600 font-medium text-sm mb-1">
                      {cert.organization}
                    </p>
                    <p className="dark:text-slate-500 text-slate-500 text-sm mb-3">
                      {cert.date}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 dark:bg-slate-800 bg-slate-200 dark:text-slate-300 text-slate-700 rounded-md text-xs font-medium transition-all duration-200 hover:shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium shadow-sm hover:shadow-md transition-all group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View certificate: ${cert.title}`}
                    >
                      View Certificate
                      <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mx-auto mt-16 dark:bg-slate-900 bg-slate-50 rounded-lg p-8 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 max-w-3xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                7+
              </div>
              <div className="dark:text-slate-400 text-slate-600 text-sm">
                Certifications
              </div>
            </div>
            <div className="w-px bg-slate-300 dark:bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                15+
              </div>
              <div className="dark:text-slate-400 text-slate-600 text-sm">
                Skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
