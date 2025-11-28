import { ArrowDown, Download, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      {/* Animated Blobs */}
      <motion.div 
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-slate-950 bg-slate-950">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHH3G7gtM4ZSg/profile-displayphoto-scale_200_200/B4DZqmHimqIgAY-/0/1763723589029?e=1766016000&v=beta&t=LYibhU1byHh3VJtkgEEvdSsvYkpH3D49HQ1Hgn23Dfc"
              alt="Adel Rjili"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-violet-400 mb-4 tracking-wide">
            Hello, I'm Adel Rjili
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
            <span className="block mb-2">Building Scalable</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 text-glow">
              <TypeAnimation
                sequence={[
                  'Web Applications',
                  2000,
                  'Backend Systems',
                  2000,
                  'User Experiences',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full-Stack Developer specializing in Spring Boot, Angular, React, and PostgreSQL. 
          Crafting robust backends and seamless frontends from Tunisia 🇹🇳.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white dark:bg-white text-slate-900 rounded-full font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-2"
          >
            <MousePointer2 size={20} />
            View Projects
          </button>
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-4 glass text-slate-900 dark:text-white rounded-full font-medium transition-all hover:bg-white/20 hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </button>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
        >
            <ArrowDown className="text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
}