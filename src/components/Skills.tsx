import { motion } from 'motion/react';
import { TranslationDict } from '../types';

interface SkillsProps {
  t: TranslationDict;
  language: 'en' | 'ur';
}

const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const BrandIcon = ({ name, src, className = '' }: { name: string; src: string; className?: string }) => (
  <img
    src={src}
    alt={`${name} logo`}
    loading="lazy"
    draggable={false}
    className={`h-9 w-9 object-contain ${className}`}
  />
);

export default function Skills({ t, language }: SkillsProps) {
  const isUrdu = language === 'ur';

  // Symmetrical flat list matching the rows and grid of the reference image exactly
  const skillsList = [
    // Row 1
    { name: 'Flutter', icon: devicon('flutter'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(71,197,251,0.25)] hover:border-sky-500/40' },
    { name: 'Dart', icon: devicon('dart'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(0,196,255,0.25)] hover:border-cyan-400/40' },
    { name: 'Kotlin', icon: devicon('kotlin'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(225,112,0,0.2)] hover:border-purple-500/40' },
    { name: 'Java', icon: devicon('java'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(0,115,183,0.25)] hover:border-blue-500/40' },
    { name: 'Swift', icon: devicon('swift'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(240,81,56,0.25)] hover:border-orange-500/40' },
    { name: 'SwiftUI', icon: devicon('xcode'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(19,185,253,0.25)] hover:border-sky-400/40' },
    
    // Row 2
    { name: 'HTML', icon: devicon('html5'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(227,79,38,0.25)] hover:border-orange-600/40' },
    { name: 'CSS', icon: devicon('css3'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(21,114,182,0.25)] hover:border-sky-500/40' },
    { name: 'JavaScript', icon: devicon('javascript'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(247,223,30,0.15)] hover:border-yellow-400/40' },
    { name: 'Python', icon: devicon('python'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(55,118,171,0.25)] hover:border-indigo-400/40' },
    { name: 'SQL', icon: devicon('postgresql'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(21,114,182,0.25)] hover:border-sky-400/40' },
    { name: 'PHP', icon: devicon('php'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(79,91,147,0.25)] hover:border-indigo-500/40' },
    
    // Row 3
    { name: 'GitHub', icon: devicon('github'), iconClass: 'dark:invert', hoverGlow: 'hover:shadow-[0_0_24px_rgba(241,245,249,0.15)] hover:border-zinc-700/40' },
    { name: 'GitLab', icon: devicon('gitlab'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(226,67,41,0.25)] hover:border-orange-500/40' },
    { name: 'Docker', icon: devicon('docker'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(36,150,237,0.25)] hover:border-sky-400/40' },
    { name: 'Ollama', icon: 'https://cdn.simpleicons.org/ollama/111827', iconClass: 'dark:invert', hoverGlow: 'hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] hover:border-zinc-700/40' },
    { name: 'Figma', icon: devicon('figma'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(242,78,30,0.25)] hover:border-rose-500/40' },
    { name: 'Firebase', icon: devicon('firebase'), hoverGlow: 'hover:shadow-[0_0_24px_rgba(255,145,0,0.25)] hover:border-amber-500/40' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 140,
        damping: 18
      }
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden relative border-t border-slate-200/80 dark:border-zinc-900"
    >
      {/* Background radial gradient subtle dark glow */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-pink-500/10 dark:from-pink-500/5 via-transparent to-indigo-500/10 dark:to-indigo-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header exactly as requested (Sleek Underlined "Skills") */}
        <div className={`text-left mb-16 ${isUrdu ? 'text-right' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isUrdu ? 'مہارتیں' : 'Skills'}
          </h2>
          <div className={`h-1.5 w-14 bg-pink-500 rounded-full mt-3.5 ${isUrdu ? 'ml-auto' : ''}`} />
        </div>

        {/* 6-Column Symmetrical Sized Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5"
        >
          {skillsList.map((skill, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: 'easeOut' }
                }}
                className={`bg-white dark:bg-[#0a0a0c] border border-slate-200/80 dark:border-zinc-900 shadow-sm dark:shadow-none rounded-2xl py-8 px-4 flex flex-col items-center justify-center gap-4 transition-all duration-300 ${skill.hoverGlow} group relative overflow-hidden`}
              >
                {/* Subtle sheen highlight inside card */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-slate-900/[0.01] dark:via-white/[0.01] to-slate-900/[0.02] dark:to-white/[0.02] pointer-events-none" />

                {/* Centered Brand Icon */}
                <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center h-10 w-10">
                  <BrandIcon name={skill.name} src={skill.icon} className={skill.iconClass} />
                </div>

                {/* Bottom label */}
                <span className="font-sans font-semibold text-sm tracking-tight text-slate-600 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-zinc-100 transition-colors duration-200 select-none">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
