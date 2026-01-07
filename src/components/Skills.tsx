import { Database, Globe, Server, Terminal, Layout, Cpu, Layers, AtomIcon } from 'lucide-react';

const skills = [
  { name: 'Spring Boot', icon: Server },
  { name: 'React.js', icon: AtomIcon },
  { name: 'Angular', icon: Globe },
  { name: 'PostgreSQL', icon: Database },
  { name: 'TypeScript', icon: Terminal },
  { name: 'Tailwind CSS', icon: Layout },
  { name: 'Microservices', icon: Cpu },
  { name: 'AWS', icon: Layers },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="mb-16 animate-fade-in-down text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-slate-900 dark:bg-white mb-6 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all duration-300 group cursor-default hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="mb-4 text-slate-900 dark:text-white transition-transform duration-300 group-hover:-translate-y-2">
                <skill.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}