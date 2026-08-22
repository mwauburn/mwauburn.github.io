import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github, Sparkles, Check, X, ArrowUpRight, Award, Flame, Star, Search, MapPin, Compass, AlertCircle, ShoppingBag, CloudRain, Shield, PhoneCall, BarChart2, Plus, Calendar, Moon, Heart, Share2, BookOpen, Bell } from 'lucide-react';
import { Project, TranslationDict } from '../types';
import { projectsData } from '../data/portfolioData';

interface ProjectsProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage?: (page: any) => void;
}

const APP_SCREENSHOTS: Record<string, string[]> = {
  'shukar-daily': [
    '/screens/shukar_01.png',
    '/screens/shukar_02.png',
    '/screens/shukar_03.png'
  ],
  lumina: [
    '/screens/lumina_01.png',
    '/screens/lumina_02.png',
    '/screens/lumina_03.png'
  ],
  packsavvy: [
    '/screens/packsavvy_02.png',
    '/screens/packsavvy_03.png',
    '/screens/packsavvy_06.png',
    '/screens/packsavvy_01.png',
    '/screens/packsavvy_04.png',
    '/screens/packsavvy_05.png',
    '/screens/packsavvy_07.png'
  ]
};

const SCREEN_THEME: Record<string, string> = {
  'shukar-daily': 'from-[#041a14] to-[#010a08] border-emerald-500/30 shadow-[0_20px_50px_rgba(4,47,46,0.4)]',
  lumina: 'from-[#1c1303] to-[#080501] border-amber-500/30 shadow-[0_20px_50px_rgba(245,158,11,0.25)]',
  packsavvy: 'from-[#18112e] to-[#080512] border-indigo-500/30 shadow-[0_20px_50px_rgba(99,102,241,0.25)]'
};

export default function Projects({ t, language, setCurrentPage }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isUrdu = language === 'ur';

  const openProject = (project: Project) => {
    if ((project.id === 'shukar-daily' || project.id === 'lumina' || project.id === 'packsavvy') && setCurrentPage) {
      setCurrentPage(project.id);
      window.history.pushState(null, '', `/apps/${project.id}`);
      window.scrollTo(0, 0);
      return;
    }

    setSelectedProject(project);
  };

  // State to track window width for responsive horizontal translation
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Framer Motion scroll hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Calculate horizontal translation range based on window size
  const getXRange = () => {
    if (windowWidth < 640) return ["0vw", "-175vw"]; // Mobile (wider scroll range)
    if (windowWidth < 768) return ["0vw", "-155vw"];
    if (windowWidth < 1024) return ["0vw", "-110vw"];
    return ["0px", "-1050px"]; // Desktop
  };

  const x = useTransform(scrollYProgress, [0, 1], getXRange());

  // Helper to map project id to visual decoration icon
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'shukar-daily':
        return <Heart className="h-5 w-5 text-emerald-500 animate-pulse" />;
      case 'lumina':
        return <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />;
      case 'packsavvy':
        return <ShoppingBag className="h-5 w-5 text-indigo-500" />;
      default:
        return <Star className="h-5 w-5 text-indigo-500" />;
    }
  };

  // Render highly-styled interactive vector mobile mockups inside the cards
  const renderMockup = (projectId: string) => {
    const screenshots = APP_SCREENSHOTS[projectId]?.slice(0, 3);
    if (screenshots) {
      return (
        <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-b ${SCREEN_THEME[projectId]} opacity-90 rounded-2xl`} />
          <div className="relative w-full h-full flex items-center justify-center overflow-visible p-6">
            {screenshots.map((src, index) => {
              const isCenter = index === 0;
              const x = index === 1 ? '-42%' : index === 2 ? '42%' : '0%';
              const rotate = index === 1 ? -10 : index === 2 ? 10 : 0;
              return (
                <motion.div
                  key={src}
                  variants={{
                    initial: { x: isCenter ? '0%' : index === 1 ? '-18%' : '18%', rotate: isCenter ? 0 : rotate * 0.8, scale: isCenter ? 1 : 0.85, opacity: isCenter ? 1 : 0.55, zIndex: isCenter ? 20 : 10 },
                    hover: { x, rotate, scale: isCenter ? 1.05 : 0.95, opacity: 1, zIndex: isCenter ? 20 : 10 }
                  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  className={`absolute w-[140px] md:w-[170px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden border-2 ${SCREEN_THEME[projectId]} bg-black z-10 select-none origin-bottom`}
                >
                  <img src={src} alt={`${projectId} screenshot ${index + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              );
            })}
          </div>
        </div>
      );
    }

    switch (projectId) {
      case 'shukar-daily':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
            {/* Background glowing gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#041a14] to-[#010a08] opacity-90 rounded-2xl" />
            
            <div className="relative w-full h-full flex items-center justify-center overflow-visible p-6">
              {/* Left Poster (Settings Screen) */}
              <motion.div
                variants={{
                  initial: { x: "-18%", rotate: -8, scale: 0.85, opacity: 0.5, zIndex: 10 },
                  hover: { x: "-48%", rotate: -12, scale: 0.95, opacity: 0.95, zIndex: 10 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute w-[130px] md:w-[160px] h-[230px] md:h-[280px] rounded-2xl overflow-hidden border border-emerald-950/50 shadow-2xl bg-[#020d0a] select-none origin-bottom"
              >
                <img
                  src="/src/assets/images/shukar_poster_settings_1783556690789.jpg"
                  alt="Shukar Daily Settings"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Right Poster (Duas Screen) */}
              <motion.div
                variants={{
                  initial: { x: "18%", rotate: 8, scale: 0.85, opacity: 0.5, zIndex: 10 },
                  hover: { x: "48%", rotate: 12, scale: 0.95, opacity: 0.95, zIndex: 10 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute w-[130px] md:w-[160px] h-[230px] md:h-[280px] rounded-2xl overflow-hidden border border-emerald-950/50 shadow-2xl bg-[#020d0a] select-none origin-bottom"
              >
                <img
                  src="/src/assets/images/shukar_poster_duas_1783556712488.jpg"
                  alt="Shukar Daily Duas"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Center Poster (Home Screen) */}
              <motion.div
                variants={{
                  initial: { scale: 1, y: "0%", filter: "brightness(1)", zIndex: 20 },
                  hover: { scale: 1.05, y: "-2%", filter: "brightness(1.05)", zIndex: 20 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute w-[140px] md:w-[170px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-[0_20px_50px_rgba(4,47,46,0.4)] bg-[#010806] z-10 select-none origin-bottom"
              >
                <img
                  src="/src/assets/images/shukar_poster_home_1783556671293.jpg"
                  alt="Shukar Daily Home"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        );
      case 'lumina':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
            {/* Background glowing gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1c1303] to-[#080501] opacity-90 rounded-2xl" />
            
            <div className="relative w-full h-full flex items-center justify-center overflow-visible p-6">
              {/* Left Poster (Scan Camera Screen) */}
              <motion.div
                variants={{
                  initial: { x: "-18%", rotate: -8, scale: 0.85, opacity: 0.5, zIndex: 10 },
                  hover: { x: "-48%", rotate: -12, scale: 0.95, opacity: 0.95, zIndex: 10 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute w-[130px] md:w-[160px] h-[230px] md:h-[280px] rounded-2xl overflow-hidden border border-amber-950/50 shadow-2xl bg-[#0a0803] select-none origin-bottom"
              >
                <img
                  src="/src/assets/images/lumina_poster_scan_1784673703339.jpg"
                  alt="Lumina Camera Scan"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Right Poster (Insight Detail Screen) */}
              <motion.div
                variants={{
                  initial: { x: "18%", rotate: 8, scale: 0.85, opacity: 0.5, zIndex: 10 },
                  hover: { x: "48%", rotate: 12, scale: 0.95, opacity: 0.95, zIndex: 10 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute w-[130px] md:w-[160px] h-[230px] md:h-[280px] rounded-2xl overflow-hidden border border-amber-950/50 shadow-2xl bg-[#0a0803] select-none origin-bottom"
              >
                <img
                  src="/src/assets/images/lumina_poster_insight_1784673721315.jpg"
                  alt="Lumina Ingredient Insight"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Center Poster (Home Dashboard Screen) */}
              <motion.div
                variants={{
                  initial: { scale: 1, y: "0%", filter: "brightness(1)", zIndex: 20 },
                  hover: { scale: 1.05, y: "-2%", filter: "brightness(1.05)", zIndex: 20 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute w-[140px] md:w-[170px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-[0_20px_50px_rgba(245,158,11,0.25)] bg-[#050401] z-10 select-none origin-bottom"
              >
                <img
                  src="/src/assets/images/lumina_poster_home_1784673688183.jpg"
                  alt="Lumina Home Dashboard"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        );
      case 'packsavvy':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Background glowing gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#18112e] to-[#080512] opacity-90 rounded-2xl" />
            
            {/* Left Phone Back perspective */}
            <div className="absolute left-[12%] bottom-[-5%] w-[130px] h-[240px] md:w-[150px] md:h-[270px] rounded-[1.8rem] border border-indigo-950 bg-zinc-950 opacity-20 -rotate-[12deg] z-0 hidden sm:block overflow-hidden shadow-xl select-none">
              <div className="p-2 pt-4 flex flex-col justify-between h-full bg-[#0a0614]">
                <div className="flex justify-between items-center border-b border-indigo-950/40 pb-1">
                  <span className="text-[7px] text-indigo-600 font-mono">WEATHER</span>
                  <span className="text-[7px] text-amber-500">Rain Alert</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-1.5">
                  <CloudRain className="h-6 w-6 text-indigo-400" />
                  <span className="text-[6px] text-indigo-400 font-mono text-center">Packing list modified for wet weather</span>
                </div>
              </div>
            </div>

            {/* Right Phone Back perspective */}
            <div className="absolute right-[12%] bottom-[-5%] w-[130px] h-[240px] md:w-[150px] md:h-[270px] rounded-[1.8rem] border border-indigo-950 bg-zinc-950 opacity-20 rotate-[12deg] z-0 hidden sm:block overflow-hidden shadow-xl select-none">
              <div className="p-2 pt-4 flex flex-col justify-between h-full bg-[#0a0614]">
                <div className="flex justify-between items-center border-b border-indigo-950/40 pb-1">
                  <span className="text-[7px] text-indigo-600 font-mono">BAGGAGE</span>
                  <span className="text-[7px] text-emerald-500">Compliant</span>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1 px-1">
                  <span className="text-[6px] text-indigo-400 font-mono uppercase">LUGGAGE LIMIT</span>
                  <div className="h-1.5 bg-indigo-950 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[72%]" />
                  </div>
                  <span className="text-[6px] text-zinc-400 text-center">7.2 kg of 10.0 kg limit</span>
                </div>
              </div>
            </div>

            {/* Center Phone (Primary) */}
            <div className="relative mx-auto w-[150px] h-[250px] md:w-[180px] md:h-[300px] rounded-[2rem] border-[3px] border-indigo-900 bg-[#06040d] shadow-[0_20px_50px_rgba(99,102,241,0.2)] z-10 overflow-hidden flex flex-col justify-between p-1.5 select-none transition-transform hover:scale-105 duration-300">
              {/* Dynamic Island */}
              <div className="w-12 h-3.5 bg-black rounded-full mx-auto mb-1 z-20 shrink-0" />

              <div className="flex-1 flex flex-col justify-between overflow-hidden">
                {/* Simulated Header */}
                <div className="flex items-center justify-between border-b border-indigo-950 pb-1 px-1 mt-0.5">
                  <div className="flex items-center gap-0.5">
                    <ShoppingBag className="h-2 w-2 text-indigo-400" />
                    <span className="text-[8px] font-sans font-extrabold text-indigo-100">Packsavvy</span>
                  </div>
                  <span className="text-[6px] font-mono text-indigo-500 font-bold uppercase tracking-wider">{isUrdu ? "لندن" : "London"}</span>
                </div>

                {/* Progress bar widget */}
                <div className="bg-indigo-950/30 border border-indigo-900/30 p-1.5 rounded-lg mt-1.5 flex items-center justify-between shrink-0">
                  <div>
                    <div className="text-[5.5px] font-sans text-indigo-400 leading-none">{isUrdu ? "سامان کی پیکنگ" : "London Checklist"}</div>
                    <div className="text-[8px] font-sans font-black text-indigo-100 leading-none mt-1">75% Packed</div>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-indigo-500 flex items-center justify-center font-mono text-[6px] font-bold text-indigo-300">
                    75%
                  </div>
                </div>

                {/* Simulated checklist */}
                <div className="space-y-1 mt-2 flex-1 overflow-hidden flex flex-col justify-start">
                  {[
                    { name: isUrdu ? "پاسپورٹ اور ٹکٹ" : "Passport & Visas", checked: true, alert: false },
                    { name: isUrdu ? "موبائل چارجرز" : "Phone Charger", checked: true, alert: false },
                    { name: isUrdu ? "ٹوائلٹ کٹ" : "Toiletries Bag", checked: true, alert: false },
                    { name: isUrdu ? "برساتی جیکٹ" : "Rain Coat", checked: false, alert: true }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-indigo-950/20 border border-indigo-950/30 p-1 rounded-md flex items-center justify-between text-[6.5px]">
                      <div className="flex items-center gap-1">
                        <div className={`w-2.5 h-2.5 rounded flex items-center justify-center border ${item.checked ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-indigo-800'}`}>
                          {item.checked && <Check className="h-1.5 w-1.5" />}
                        </div>
                        <span className={`font-sans font-medium ${item.checked ? 'text-indigo-400 line-through' : 'text-indigo-100'}`}>
                          {item.name}
                        </span>
                      </div>
                      {item.alert && (
                        <div className="flex items-center gap-0.5 text-amber-400 bg-amber-500/15 px-1 py-0.5 rounded text-[5px] font-extrabold scale-90 origin-right shrink-0">
                          <CloudRain className="h-1.5 w-1.5 shrink-0" />
                          <span>{isUrdu ? "بارش کا الرٹ" : "Rain Alert"}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative h-[300vh] bg-slate-100 dark:bg-zinc-950 text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Sticky pinning container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white select-none">
        
        {/* Glow ambient effects background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Header (Section Title + Subtitle) stays locked in sticky screen */}
        <div className={`max-w-6xl mx-auto px-6 md:px-12 w-full mb-6 z-10 ${isUrdu ? 'rtl' : 'ltr'}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200/80 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 tracking-wider uppercase">
              {isUrdu ? "پروجیکٹس" : "Featured Portfolio"}
            </span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white ${isUrdu ? 'font-sans' : ''}`}>
            {t.projectsTitle}
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-emerald-500 mb-2 rounded-full" />
          <p className={`text-slate-600 dark:text-zinc-400 max-w-xl text-xs md:text-sm leading-relaxed ${isUrdu ? 'font-sans' : ''}`}>
            {t.projectsSubtitle}
          </p>
        </div>

        {/* Horizontal scroll track */}
        <div className="overflow-hidden w-full relative z-10">
          <motion.div
            style={{ x }}
            className="flex gap-8 px-6 md:px-16 lg:px-24 w-max items-center py-4"
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                whileHover="hover"
                initial="initial"
                onClick={() => openProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                className="w-[85vw] sm:w-[75vw] md:w-[680px] shrink-0 bg-white dark:bg-[#0c0c0e] rounded-[1.8rem] border border-slate-200/90 dark:border-zinc-900/90 shadow-xl dark:shadow-2xl p-5 md:p-6 flex flex-col justify-between h-[65vh] md:h-[550px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              >
                {/* Meta details header connected by dashed line */}
                <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono tracking-wider text-slate-500 dark:text-zinc-500 uppercase shrink-0">
                  <span className="font-bold text-slate-600 dark:text-zinc-400">{project.index || "01"}</span>
                  <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800" />
                  <span className="text-slate-600 dark:text-zinc-400 font-semibold">{project.category}</span>
                  <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800" />
                  <span className="font-bold text-slate-600 dark:text-zinc-400">{project.quarter || "2025"}</span>
                </div>

                {/* App Brand Header: logo icon + title + description */}
                <div className="mt-4 flex flex-col shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center shadow-inner">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="font-sans text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400 line-clamp-2 md:line-clamp-3 leading-relaxed font-sans">
                    {project.tagline}
                  </p>
                </div>

                {/* Phone mockup visual wrapper */}
                <div className="flex-1 min-h-0 bg-slate-900 dark:bg-zinc-950/60 border border-slate-200/50 dark:border-zinc-900/40 rounded-2xl overflow-hidden mt-4 relative">
                  {renderMockup(project.id)}
                </div>

                {/* Footer specs / call-to-action button */}
                <div className="mt-4 flex items-center justify-between shrink-0">
                  <div className="flex flex-wrap gap-1.5 max-w-[50%]">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 text-[9px] font-mono rounded bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/60 text-slate-600 dark:text-zinc-400 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`view-details-${project.id}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      openProject(project);
                    }}
                    className="py-1.5 px-4 rounded-xl text-[10px] md:text-xs font-sans font-semibold bg-slate-900 dark:bg-zinc-900 border border-slate-800 dark:border-zinc-800 hover:bg-slate-800 dark:hover:bg-zinc-800 text-white dark:text-zinc-200 transition-colors cursor-pointer flex items-center gap-1.5 hover:border-slate-700 dark:hover:border-zinc-700 shadow-sm"
                  >
                    <span>{isUrdu ? "تفصیلات دیکھیں" : "Explore Details"}</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator slider bar at the bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10 bg-white/80 dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800/30 py-1.5 px-4 rounded-full backdrop-blur-md select-none shadow-md">
          <span className="font-mono text-[9px] text-slate-500 dark:text-zinc-500 font-bold tracking-wider">01</span>
          <div className="w-24 md:w-40 h-1 bg-slate-200 dark:bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500"
              style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>
          <span className="font-mono text-[9px] text-slate-500 dark:text-zinc-500 font-bold tracking-wider">03</span>
        </div>
      </div>

      {/* Detailed Slide-Over or Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay Backdrop */}
            <motion.div
              id="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              id="project-detail-modal"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 z-10 flex flex-col max-h-[85vh] text-slate-800 dark:text-white"
            >
              {/* Header Banner */}
              <div className={`p-6 bg-gradient-to-br ${selectedProject.image} text-white relative`}>
                <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay" />
                <button
                  id="close-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>

                <span className="px-2.5 py-0.5 text-[9px] font-mono tracking-wider text-white bg-white/10 rounded uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="font-sans text-2xl font-black mt-2">
                  {selectedProject.name}
                </h3>
                <p className="font-mono text-xs text-white/80 mt-1 font-medium">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Body Content */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
                {/* Descriptions */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-500 dark:text-zinc-500 uppercase">
                    {isUrdu ? "جائزہ" : "Overview"}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                {APP_SCREENSHOTS[selectedProject.id] && (
                  <div className="grid grid-cols-3 gap-3">
                    {APP_SCREENSHOTS[selectedProject.id].map((src, idx) => (
                      <div key={src} className="aspect-[9/16] overflow-hidden rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-950">
                        <img
                          src={src}
                          alt={`${selectedProject.name} screenshot ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="bg-slate-50 dark:bg-zinc-950 p-3 rounded-xl border border-slate-200/80 dark:border-zinc-800/60 text-center">
                      <span className="block text-[10px] font-mono text-slate-500 dark:text-zinc-500 font-semibold mb-1 uppercase">
                        {metric.label}
                      </span>
                      <span className="block text-xs font-sans font-bold text-slate-800 dark:text-zinc-200">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Features Checkbox */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-500 dark:text-zinc-500 uppercase">
                    {isUrdu ? "بنیادی خصوصیات" : "Core Features"}
                  </h4>
                  <ul className="space-y-2 font-sans">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-zinc-300">
                        <span className="p-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Used */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-500 dark:text-zinc-500 uppercase">
                    {isUrdu ? "تکنیکی اسٹیک" : "Technology Stack"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="p-6 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between bg-slate-50/50 dark:bg-zinc-950/50">
                <div className="flex items-center gap-3">
                  {selectedProject.links.github && (
                    <a
                      id="github-code-link"
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-colors cursor-pointer"
                      title="View Source on GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <a
                  id="live-demo-link"
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-5 py-2 rounded-xl text-xs font-sans font-bold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 shadow transition-transform hover:-translate-y-0.5 cursor-pointer`}
                >
                  <span>{isUrdu ? " لائیو ڈیمو دیکھیں" : "Launch Live Demo"}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
