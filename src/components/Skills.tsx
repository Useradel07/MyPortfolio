import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Terminal, Layout, Cpu, Layers } from 'lucide-react';

const skills = [
  { name: 'Spring Boot', icon: Server, color: 'text-green-500', bg: 'bg-green-500/10' },
  { name: 'React.js', icon: Code, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { name: 'Angular', icon: Globe, color: 'text-red-500', bg: 'bg-red-500/10' },
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-300', bg: 'bg-blue-300/10' },
  { name: 'TypeScript', icon: Terminal, color: 'text-blue-600', bg: 'bg-blue-600/10' },
  { name: 'Tailwind', icon: Layout, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
  { name: 'Microservices', icon: Cpu, color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { name: 'AWS', icon: Layers, color: 'text-orange-500', bg: 'bg-orange-500/10' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Technical <span className="text-violet-500">Arsenal</span>
          </motion.h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full" />
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 transition-colors group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl ${skill.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon size={24} className={skill.color} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-violet-500 transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}