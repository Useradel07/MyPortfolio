import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, ShoppingBag, Map } from 'lucide-react';

const projects = [
  {
    title: 'ToneMaster AI',
    description: `A professional text rewriting tool powered by Groq and the Llama 3 model.
It helps users instantly rewrite emails, essays, and messages into specific tones
(Corporate, Empathetic, Legal, Gen-Z, etc.) and formats (Email, LinkedIn, Slack, etc.)
with an ultra-fast streaming experience.`,

    
    tags: ['React', 'groq-sdk', 'Tailwind CSS', 'Vercel Serverless Functions (Node.js)','Framer Motion','Lucide React (Icons)'],
    icon: Layers,
    color: 'from-violet-500 to-purple-500',
    link: 'https://tonemaster-ai.vercel.app/',
    github: 'https://github.com/Useradel07/tonemasterai'
  },
  {
    title: 'Modern E-Commerce',
    description: 'Full-featured shopping platform with cart management, payment processing, and admin dashboard.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
    icon: ShoppingBag,
    color: 'from-blue-500 to-cyan-500',
    link: '#',
    github: 'https://github.com/Useradel07'
  },
  {
    title: 'Transport Tracker',
    description: 'Real-time public transport tracking system using Leaflet maps and live socket updates.',
    tags: ['Flutter', 'Supabase', 'Leaflet', 'Dart'],
    icon: Map,
    color: 'from-emerald-500 to-green-500',
    link: '#',
    github: 'https://github.com/Useradel07'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
            >
              Featured <span className="text-violet-500">Work</span>
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg">
              A selection of projects demonstrating full-stack capabilities and problem-solving skills.
            </p>
          </div>
          <a href="https://github.com/Useradel07" target="_blank" className="flex items-center gap-2 text-violet-500 font-semibold hover:gap-3 transition-all">
            View Github <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-full rounded-3xl bg-slate-200 dark:bg-slate-800 p-[1px]"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full bg-slate-50 dark:bg-slate-950 rounded-[23px] p-8 overflow-hidden flex flex-col">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium transition-colors">
                        <Github size={18} /> Code
                    </a>
                    <a href={project.link} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-medium transition-colors shadow-lg shadow-violet-500/25">
                        <ExternalLink size={18} /> Demo
                    </a>
                </div>
            </div>
        </motion.div>
    )
}
