import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  Rocket,
  Sparkles,
  Mail,
} from 'lucide-react';
import {
  SiFlutter,
  SiDart,
  SiKotlin,
  SiSwift,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPython,
  SiPhp,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiOllama,
} from 'react-icons/si';
import { FaDatabase, FaUsers, FaBook, FaStar, FaJava, FaLinkedin } from 'react-icons/fa';
import appsData from '../data/apps.json';

// Infinite Ribbon Component
const Ribbon = ({ text, direction = 'left', speed = 20 }) => (
  <div className="flex whitespace-nowrap overflow-hidden py-2 border-y border-white/5">
    <motion.div
      animate={{ x: direction === 'left' ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      className="flex shrink-0"
    >
      {[...Array(4)].map((_, i) => (
        <span key={i} className="font-display text-5xl md:text-7xl text-textPrimary/10 mx-8">
          {text} ✦
        </span>
      ))}
    </motion.div>
  </div>
);

const experiences = [
  {
    period: 'FEB 2025 - OCT 2025',
    role: 'Software Engineering Intern',
    org: 'Code Buddy Oman',
    summary: 'Led Back-End and Mobile App teams. Built Manssat Sanad, a bilingual business management platform with PHP & MySQL.',
    tags: 'PHP · MySQL · Flutter · Leadership',
    side: 'left',
    color: 'text-pink-400',
    dot: 'bg-pink-500',
    ring: 'shadow-[0_0_0_10px_rgba(244,114,182,0.12)]',
    icon: Code2,
  },
  {
    period: 'JAN 2025 - APR 2026',
    role: 'Peer Tutor',
    org: 'Sohar University',
    summary: 'Tutored Operating Systems, Algorithms, and Data Structures while mentoring junior students in practical coding strategies.',
    tags: 'Algorithms · Data Structures · Mentorship',
    side: 'right',
    color: 'text-blue-400',
    dot: 'bg-blue-500',
    ring: 'shadow-[0_0_0_10px_rgba(96,165,250,0.12)]',
    icon: FaBook,
  },
  {
    period: '2026 - PRESENT',
    role: 'Full-Stack Mobile Developer',
    org: 'Independent',
    summary: 'Designing and shipping polished, offline-first mobile experiences with scalable architecture and smooth interactions.',
    tags: 'Flutter · Firebase · Product Design',
    side: 'left',
    color: 'text-amber-300',
    dot: 'bg-amber-400',
    ring: 'shadow-[0_0_0_10px_rgba(251,191,36,0.12)]',
    icon: Rocket,
  },
];

const skills = [
  { name: 'Flutter', Icon: SiFlutter, color: 'text-sky-500' },
  { name: 'Dart', Icon: SiDart, color: 'text-sky-600' },
  { name: 'Kotlin', Icon: SiKotlin, color: 'text-violet-500' },
  { name: 'Java', Icon: FaJava, color: 'text-amber-500' },
  { name: 'Swift', Icon: SiSwift, color: 'text-orange-500' },
  { name: 'SwiftUI', Icon: SiSwift, color: 'text-blue-500' },
  { name: 'HTML', Icon: SiHtml5, color: 'text-orange-600' },
  { name: 'CSS', Icon: SiCss, color: 'text-blue-500' },
  { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Python', Icon: SiPython, color: 'text-blue-400' },
  { name: 'SQL', Icon: FaDatabase, color: 'text-sky-700' },
  { name: 'PHP', Icon: SiPhp, color: 'text-indigo-400' },
  { name: 'GitHub', Icon: SiGithub, color: 'text-slate-400' },
  { name: 'GitLab', Icon: SiGitlab, color: 'text-orange-500' },
  { name: 'Docker', Icon: SiDocker, color: 'text-sky-500' },
  { name: 'Ollama', Icon: SiOllama, color: 'text-zinc-400' },
  { name: 'Figma', Icon: SiFigma, color: 'text-orange-500' },
  { name: 'Firebase', Icon: SiFirebase, color: 'text-amber-500' },
];

const socialLinks = [
  { href: 'https://github.com/iawaisahmd', Icon: SiGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/iawaisahmd', Icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:iawaisahmd@gmail.com', Icon: Mail, label: 'Email' },
];

const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const heatColor = (i) => {
  const mod = i % 17;
  if (mod < 2) return 'bg-zinc-300/70';
  if (mod < 7) return 'bg-pink-200';
  if (mod < 12) return 'bg-pink-300';
  if (mod < 15) return 'bg-pink-400';
  return 'bg-pink-500';
};

const SectionTitle = ({ title }) => (
  <div className="mb-12">
    <h2 className="font-display text-5xl md:text-6xl text-textPrimary mb-4">{title}</h2>
    <div className="h-1 w-24 rounded-full bg-gradient-to-r from-pink-500/90 to-pink-400/70" />
  </div>
);

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, ['0', '1'], ['5%', '-75%']);

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. EXACT HERO SECTION FROM IMAGE */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-amber text-sm mb-4 tracking-widest"
        >
          HI, I'M
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-7xl md:text-[10rem] leading-[0.85] text-textPrimary mb-6"
        >
          Awais Ahmad
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-textSecondary text-xl md:text-2xl mb-12 max-w-3xl"
        >
          Software Engineer & Full-Stack Mobile Developer
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest text-textSecondary mb-16"
        >
          <span className="border border-white/10 rounded-full px-4 py-2">Full-Stack Developer</span>
          <span className="border border-white/10 rounded-full px-4 py-2">Creative Developer</span>
          <span className="border border-white/10 rounded-full px-4 py-2">UI/UX Design</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center text-amber font-mono text-sm"
        >
          Scroll to Explore <ArrowDown size={16} className="ml-2" />
        </motion.div>
      </section>

      {/* 2. RIBBONS */}
      <div className="my-16 space-y-2">
        <Ribbon text="FLUTTER DEVELOPER" direction="left" speed={25} />
        <Ribbon text="UI / UX DESIGN" direction="right" speed={30} />
      </div>

      {/* 3. ABOUT ME SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="font-mono text-amber text-sm mb-2">About Me</p>
            <h2 className="font-display text-4xl text-textPrimary">My Background</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-textSecondary text-lg leading-relaxed">
              I'm a Full-Stack Mobile Developer based in Pakistan, available globally. I specialize in building seamless, offline-first mobile experiences using Flutter. 
            </p>
            <p className="text-textSecondary text-lg leading-relaxed">
              My focus is on creating highly performant applications with clean architecture and intuitive UI/UX. From concept to deployment, I handle the entire mobile development lifecycle.
            </p>
            <div className="pt-4">
              <p className="font-mono text-xs text-textSecondary mb-4 uppercase tracking-widest">Core Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {["Flutter", "Dart", "Firebase", "Local Storage", "REST APIs", "UI/UX"].map(tech => (
                  <span key={tech} className="text-sm font-mono bg-surface text-textPrimary px-4 py-2 rounded-full border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PINNED HORIZONTAL PROJECTS */}
      <section ref={targetRef} className="relative h-[300vh] bg-obsidian">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute top-1/4 left-6 max-w-6xl mx-auto z-10">
            <p className="font-mono text-amber text-sm mb-2">Featured Work</p>
            <h2 className="font-display text-4xl md:text-5xl text-textPrimary">Projects</h2>
          </div>

          <motion.div style={{ x }} className="flex gap-8 pl-[60vw] mt-32">
            {appsData.map((app, index) => (
              <Link 
                key={app.slug} 
                to={`/apps/${app.slug}`}
                className="group relative w-[80vw] md:w-[40vw] lg:w-[35vw] h-[60vh] bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-amber/30 transition-all duration-500 shrink-0"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent z-10" />
                <div className="h-full w-full flex items-center justify-center text-textSecondary/20 font-display text-9xl group-hover:scale-105 transition-transform duration-700">
                  {app.name.charAt(0)}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="font-display text-4xl text-textPrimary">{app.name}</h3>
                    <span className="text-xs font-mono text-amber bg-obsidian/50 px-3 py-1 rounded-full">0{index + 1}</span>
                  </div>
                  <p className="text-textSecondary mb-6 max-w-sm">{app.tagline}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {app.tech.map(t => (
                      <span key={t} className="text-xs font-mono bg-obsidian text-textSecondary px-3 py-1 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. EXPERIENCE TIMELINE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <SectionTitle title="Experience" />
        </motion.div>

        <div className="relative">
          <div className="absolute hidden md:block left-1/2 top-6 bottom-6 w-px bg-pink-200/30 -translate-x-1/2" />
          <div className="space-y-14 md:space-y-20">
            {experiences.map((item, idx) => {
              const ItemIcon = item.icon;
              const isLeft = item.side === 'left';
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  <div className={isLeft ? '' : 'md:col-start-2'}>
                    <div className="bg-surface/40 border border-white/10 rounded-2xl p-6 md:p-8">
                      <p className={`font-mono text-sm mb-3 ${item.color}`}>{item.period}</p>
                      <h3 className="font-display text-4xl md:text-5xl text-textPrimary mb-2">{item.role}</h3>
                      <p className={`text-2xl mb-4 ${item.color}`}>{item.org}</p>
                      <p className="text-textSecondary text-xl leading-relaxed mb-5">{item.summary}</p>
                      <p className="text-textSecondary text-lg">{item.tags}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 flex-col items-center">
                    <div className={`w-14 h-14 rounded-full ${item.dot} ${item.ring} flex items-center justify-center text-white`}>
                      <ItemIcon size={24} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SKILLS GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <SectionTitle title="Skills" />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="bg-surface/40 border border-white/10 rounded-3xl px-4 py-8 flex flex-col items-center justify-center gap-4 hover:border-pink-300/30 transition-colors"
            >
              <skill.Icon className={`text-4xl ${skill.color}`} />
              <span className="font-mono text-base text-textPrimary">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. CODE & CONTRIBUTIONS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <SectionTitle title="Code & Contributions" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-surface/40 border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-8 gap-6 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/15 flex items-center justify-center text-pink-400">
                  <SiGithub className="text-3xl" />
                </div>
                <div>
                  <p className="text-3xl font-semibold text-textPrimary">@iawaisahmd</p>
                  <p className="text-textSecondary text-2xl">Contribution activity on GitHub</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-display text-6xl text-pink-400 leading-none">3,299</p>
                <p className="text-textSecondary text-2xl">contributions in the last year</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6 text-3xl text-textPrimary/80 mb-3 px-2">
              {months.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>

            <div className="grid grid-cols-53 gap-1.5">
              {Array.from({ length: 371 }).map((_, i) => (
                <div key={i} className={`h-5 rounded-sm ${heatColor(i)}`} />
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-textSecondary text-2xl">
              <p>3299 contributions in the last year</p>
              <div className="flex items-center gap-2">
                <span>Less</span>
                <span className="w-6 h-6 rounded-sm bg-zinc-300/70" />
                <span className="w-6 h-6 rounded-sm bg-pink-200" />
                <span className="w-6 h-6 rounded-sm bg-pink-300" />
                <span className="w-6 h-6 rounded-sm bg-pink-400" />
                <span className="w-6 h-6 rounded-sm bg-pink-500" />
                <span>More</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            {[
              { Icon: FaUsers, value: '5', label: 'Followers', color: 'text-pink-400' },
              { Icon: FaBook, value: '28', label: 'Repositories', color: 'text-teal-400' },
              { Icon: FaStar, value: '7', label: 'GitHub Stars', color: 'text-amber-400' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-surface/40 border border-white/10 rounded-3xl p-6"
              >
                <stat.Icon className={`${stat.color} text-3xl mb-3`} />
                <p className={`font-display text-6xl leading-none ${stat.color} mb-2`}>{stat.value}</p>
                <p className="text-textSecondary text-2xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FOOTER */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="border-t border-white/10 pt-12 text-center bg-surface/50 rounded-3xl p-10 md:p-16">
          <div className="flex items-center justify-center gap-2 mb-3 text-amber">
            <Rocket size={16} />
            <Sparkles size={16} />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-textPrimary mb-8">FROM IDEA TO IMPACT</h2>
          <Link to="/contact" className="group inline-flex items-center text-2xl font-display text-amber hover:text-amber-hover transition-colors">
            Ready to Connect? 
            <ArrowUpRight size={24} className="ml-2 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 9. FOOTER */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-16 pb-10 px-6 max-w-7xl mx-auto border-t border-pink-300/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <p className="text-textSecondary text-3xl leading-relaxed">
            {'{ Work, for Allah will observe your deeds, and so will His Messenger and the believers. }'}
          </p>

          <div>
            <h4 className="font-mono text-sm tracking-widest text-textPrimary mb-5">LINKS</h4>
            <div className="space-y-3 text-3xl text-textSecondary">
              <Link to="/" className="block hover:text-textPrimary">Home</Link>
              <Link to="/apps" className="block hover:text-textPrimary">Projects</Link>
              <a href="#" className="block hover:text-textPrimary">Blog</a>
              <a href="#" className="block hover:text-textPrimary">The Wall</a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest text-textPrimary mb-5">LEGAL</h4>
            <div className="space-y-3 text-3xl text-textSecondary">
              <a href="#" className="block hover:text-textPrimary">Privacy Policy</a>
              <a href="#" className="block hover:text-textPrimary">Terms of Use</a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest text-textPrimary mb-5">SOCIAL</h4>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-textSecondary hover:text-amber hover:border-pink-300/30 transition-colors"
                  aria-label={item.label}
                >
                  <item.Icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-textSecondary text-2xl pt-8">© 2026 Awais Ahmad. All rights reserved.</p>
      </motion.footer>

    </div>
  );
}