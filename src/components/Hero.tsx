import { motion } from 'motion/react';
import { ArrowDown, Code, Sparkles, Terminal } from 'lucide-react';
import { TranslationDict } from '../types';

interface HeroProps {
  t: TranslationDict;
  language: 'en' | 'ur';
}

const RED_RIBBON_ITEMS = [
  'OPTIMIZER',
  'FULL-STACK DEVELOPER',
  'FLUTTER SPECIALIST',
  'CREATIVE DEVELOPER',
  'PROBLEM SOLVER',
  'PRODUCT BUILDER',
  'SAAS ARCHITECT',
  'UI/UX ENTHUSIAST',
  'CROSS-PLATFORM'
];

const WHITE_RIBBON_ITEMS = [
  'UI/UX ENTHUSIAST',
  'PRODUCT BUILDER',
  'SAAS ARCHITECT',
  'CREATIVE DEVELOPER',
  'INTEGRATION',
  'CROSS-PLATFORM',
  'OPTIMIZER',
  'FULL-STACK DEVELOPER',
  'PROBLEM SOLVER'
];

export default function Hero({ t, language }: HeroProps) {
  const isUrdu = language === 'ur';

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper to render a doubled array for seamless horizontal infinite looping
  const doubleList = (arr: string[]) => [...arr, ...arr, ...arr, ...arr];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-36 pb-20 overflow-hidden bg-[#fbfcff] dark:bg-slate-950 transition-colors duration-300"
    >
      {/* 1. Interactive Vector and Grid Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle radial dot grids */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
        
        {/* Curved hand-crafted vector background lines */}
        <svg className="absolute inset-0 w-full h-full stroke-slate-200/50 dark:stroke-slate-900/60" xmlns="http://www.w3.org/2000/svg">
          <path d="M -100 120 Q 200 180 500 120 T 1100 140" strokeWidth="1" fill="none" strokeDasharray="6 6" />
          <path d="M 150 450 Q 550 250 950 480" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M -50 250 C 350 150, 450 550, 1250 350" strokeWidth="0.8" fill="none" strokeDasharray="3 3" opacity="0.8" />
        </svg>

        {/* Ambient pinkish-purple soft glows */}
        <motion.div
          animate={{
            scale: [1, 1.08, 0.95, 1],
            opacity: [0.3, 0.45, 0.3, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-pink-100/45 dark:bg-pink-950/5 blur-[120px]"
        />
      </div>

      {/* 2. Main Center Content Box */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center z-10 flex-grow flex flex-col items-center justify-center">
        {/* Sparkle Badge / Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-sm text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 mb-8 cursor-pointer hover:border-pink-500/40 transition-colors"
          onClick={() => handleScrollTo('contact')}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{isUrdu ? " دستیاب برائے پروجیکٹس" : "AVAILABLE FOR PROJECTS"}</span>
        </motion.div>

        {/* Header Greeting with Pink Underline */}
        <div className="flex flex-col items-center mb-1">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase"
          >
            {isUrdu ? "سلام، میں ہوں" : "HI, I'M"}
          </motion.span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-0.5 bg-pink-500 rounded-full mt-2"
          />
        </div>

        {/* Big Name Title with Pink Gradient (Same to Same as awrs.me) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ba375d] via-[#d04f77] to-[#e87799] select-none leading-[1.05] pb-2 mb-4 ${
            isUrdu ? 'font-sans leading-normal py-2 text-5xl md:text-7xl lg:text-8xl' : 'font-sans'
          }`}
        >
          {isUrdu ? t.heroTitle : 'Awais Ahmad'}
        </motion.h1>

        {/* Subtitle / Role Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-base md:text-lg font-medium text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 ${
            isUrdu ? 'font-sans text-lg leading-loose' : 'font-sans'
          }`}
        >
          {isUrdu ? t.heroSubtitle : "Software Engineer & Full-Stack Mobile Developer"}
        </motion.p>

        {/* Interactive CTA Controls */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-cta-work"
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto px-7 py-3 rounded-xl font-sans text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 shadow-md shadow-slate-200/20 dark:shadow-none transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            {t.heroCtaWork}
          </button>
          <button
            id="hero-cta-contact"
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto px-7 py-3 rounded-xl font-sans text-sm font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            {t.heroCtaContact}
          </button>
        </motion.div>
      </div>

      {/* 3. Double Overlapping Tilted Marquee Ribbons */}
      <div className="relative w-full overflow-hidden mt-12 py-16 pointer-events-none z-10 flex flex-col justify-center gap-4">
        {/* Ribbon 1: Cherry Red Ribbon tilted at -3.5deg, scrolling Left */}
        <div className="absolute w-[120%] -left-[10%] rotate-[-3.5deg] skew-x-[-1deg] bg-gradient-to-r from-[#a21b44] to-[#b52854] dark:from-[#7c1434] dark:to-[#8c1b3f] shadow-lg border-y border-[#bd2d5b]/40 py-3.5 flex items-center overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-left hover-pause">
            {doubleList(RED_RIBBON_ITEMS).map((item, index) => (
              <span key={`red-${index}`} className="flex items-center gap-6 text-[11px] sm:text-[13px] font-sans font-black tracking-[0.18em] text-white">
                <span>{item}</span>
                <span className="text-pink-300 font-mono text-xs opacity-60">♦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Pure White/Glass Ribbon tilted at 2.5deg, scrolling Right */}
        <div className="absolute w-[120%] -left-[10%] rotate-[2.5deg] skew-x-[1deg] bg-white/95 dark:bg-slate-900/90 backdrop-blur-md shadow-xl border-y border-slate-100 dark:border-slate-800/80 py-4 flex items-center overflow-hidden z-10">
          <div className="flex whitespace-nowrap animate-marquee-right hover-pause">
            {doubleList(WHITE_RIBBON_ITEMS).map((item, index) => (
              <span key={`white-${index}`} className="flex items-center gap-6 text-[11px] sm:text-[13px] font-sans font-black tracking-[0.18em] text-slate-900 dark:text-slate-100">
                <span>{item}</span>
                <span className="text-pink-500 font-mono text-xs opacity-80">♦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
