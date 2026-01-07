import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <motion.div 
        className="container mx-auto px-6 relative z-10 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div 
          variants={itemVariants} 
          className="mb-12 inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 shadow-lg dark:shadow-slate-950/50 hover:shadow-xl dark:hover:shadow-slate-950/70 transition-shadow duration-300">
            <img
              src="/img.png"
              alt="Adel Rjili"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
          Adel Rjili
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-normal text-slate-600 dark:text-slate-400 mb-8">
          Full-Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Building scalable web applications and robust backend systems with Spring Boot, React, and PostgreSQL. 
          Based in Tunisia 🇹🇳.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20 dark:hover:shadow-white/10 hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-3 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-300/40 dark:hover:shadow-slate-700/40 hover:-translate-y-0.5 flex items-center gap-2 justify-center"
          >
            <Mail size={18} />
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}