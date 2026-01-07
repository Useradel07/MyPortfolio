import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Full-Stack Developer',
    org: 'Freelance & Open Source',
    date: '2023 - Present',
    desc: 'Developing scalable web applications using Spring Boot Angular and React for various clients and open-source projects. Proficient in Spring Boot, Angular, and React. Focus on clean architecture and performance optimization.',
    icon: Briefcase
  },
  {
    type: 'edu',
    title: 'Computer Science',
    org: 'ISIMG - Gabès',
    date: '2022 - Present',
    desc: 'Specializing in software engineering, algorithms, and distributed systems with a focus on practical problem-solving.',
    icon: GraduationCap
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-slate-900 dark:bg-white" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-800 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-2 text-slate-700 dark:text-slate-300 font-semibold">
                      <exp.icon size={18} />
                      <span>{exp.type === 'work' ? 'Work' : 'Education'}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.org}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{exp.desc}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-slate-900 dark:bg-white rounded-full border-4 border-slate-50 dark:border-slate-900 md:-translate-x-1/2 mt-8 z-10 shadow-md" />

                {/* Date Side */}
                <div
                  className={`flex-1 md:w-1/2 md:flex items-center ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 pl-8 md:pl-0 text-sm font-medium">
                    <Calendar size={14} />
                    {exp.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}