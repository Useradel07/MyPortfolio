import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Full-Stack Developer',
    org: 'Freelance & Projects',
    date: '2023 - Present',
    desc: 'Developing scalable web apps using Spring Boot and React. Implemented JWT auth, WebSocket notifications, and optimized PostgreSQL queries.',
    icon: Briefcase
  },
  {
    type: 'edu',
    title: 'Computer Science',
    org: 'ISIMG - Gabès',
    date: '2022 - Present',
    desc: 'Specializing in software engineering, algorithms, and distributed systems. Active member of tech clubs.',
    icon: GraduationCap
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience & <span className="text-violet-500">Education</span></h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2">
                    <div className="glass p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2 text-violet-500 font-semibold">
                            <exp.icon size={20} />
                            <span>{exp.type === 'work' ? 'Experience' : 'Education'}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">{exp.org}</p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{exp.desc}</p>
                    </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-slate-100 dark:border-slate-950 md:-translate-x-1/2 mt-8 z-10 shadow-[0_0_20px_rgba(139,92,246,0.5)]" />

                {/* Date Side */}
                <div className={`flex-1 md:w-1/2 md:flex items-center ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 pl-8 md:pl-0">
                        <Calendar size={16} />
                        {exp.date}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}