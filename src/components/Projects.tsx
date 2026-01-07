import { ExternalLink, Github, Map, MessageCircleMoreIcon, SparklesIcon, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'ToneMaster AI',
    description: 'A professional text rewriting tool powered by Groq and Llama 3. Instantly rewrite emails, essays, and messages into specific tones and formats.',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Llama 3 70B' , 'Groq-sdk', 'Vercel'],
    icon: SparklesIcon,
    link: 'https://tonemaster-ai.vercel.app/',
    github: 'https://github.com/Useradel07/tonemasterai'
  },
  {
    title: 'Real-Time Chat Messaging Application',
    description: 'Built a secure and high-performance chat application using Spring Boot, Angular, and PostgreSQL, featuring real-time messaging via WebSockets and JWT-based authentication .',
    tags: ['Spring Boot 3.1.5','Angular 17',  'Java 21', 'STOMP over SockJS', 'Tailwind', 'JWT', 'PostgreSQL'],
    icon: MessageCircleMoreIcon,
    link: 'https://github.com/Useradel07/chat',
    github: 'https://github.com/Useradel07/chat'
  },
  {
    title: 'Transport Tracker',
    description: 'Real-time public transport tracking system with live location updates and route optimization.',
    tags: ['Flutter', 'Supabase', 'Maps', 'WebSocket'],
    icon: Map,
    link: '#',
    github: 'https://github.com/Useradel07'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-slate-900 dark:bg-white mb-6" />
          <p className="text-slate-600 dark:text-slate-400 max-w-lg">
            A selection of projects demonstrating full-stack capabilities and problem-solving skills.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="h-full bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 flex flex-col hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/70 transition-colors duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mb-4 transition-all duration-300 group-hover:bg-slate-300 dark:group-hover:bg-slate-700 group-hover:shadow-md">
        <project.icon size={24} />
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow text-sm">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-200 hover:shadow-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <a 
          href={project.github} 
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 text-sm font-medium hover:shadow-sm"
        >
          <Github size={16} /> Code
        </a>
        <a 
          href={project.link} 
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-lg dark:hover:shadow-white/10 transition-all duration-300 text-sm font-medium hover:-translate-y-0.5"
        >
          <ExternalLink size={16} /> Live
        </a>
      </div>
    </motion.div>
  );
}
