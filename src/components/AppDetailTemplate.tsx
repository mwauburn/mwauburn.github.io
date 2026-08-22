import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Shield,
  Smartphone,
  Star
} from 'lucide-react';

interface DetailAction {
  label: string;
  href: string;
  icon: 'github' | 'external' | 'privacy';
}

interface DetailScreenshot {
  src: string;
  title: string;
}

interface DetailStat {
  value: string;
  label: string;
}

interface AppDetailTemplateProps {
  name: string;
  description: string;
  overview: string;
  appIcon: ReactNode;
  theme: 'emerald' | 'amber' | 'indigo';
  actions: DetailAction[];
  specs: Array<[string, string]>;
  features: string[];
  tech: Array<{ name: string; icon: ReactNode }>;
  stats: DetailStat[];
  screenshots: DetailScreenshot[];
  privacyHref: string;
  privacyText: string;
  setCurrentPage: (page: any) => void;
  setActiveSection: (sec: string) => void;
}

const themeClass = {
  emerald: {
    bg: 'dark:bg-[#020705]',
    glowA: 'bg-emerald-950/30',
    glowB: 'bg-teal-950/20',
    icon: 'from-emerald-500/20 to-teal-900/30 border-emerald-500/30 shadow-[0_0_24px_rgba(16,185,129,0.16)]',
    text: 'text-emerald-500 dark:text-emerald-400',
    hover: 'hover:text-emerald-600 dark:hover:text-emerald-400',
    soft: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
    ring: 'border-emerald-500/30',
    dot: 'bg-emerald-500',
    gradient: 'from-emerald-500/5 to-emerald-950/10',
    metric: 'bg-emerald-500/5 border-emerald-200 dark:border-emerald-950/30 text-emerald-600 dark:text-emerald-400'
  },
  amber: {
    bg: 'dark:bg-[#070603]',
    glowA: 'bg-amber-950/30',
    glowB: 'bg-orange-950/20',
    icon: 'from-amber-500/20 to-stone-900/30 border-amber-500/30 shadow-[0_0_24px_rgba(245,158,11,0.16)]',
    text: 'text-amber-500 dark:text-amber-400',
    hover: 'hover:text-amber-600 dark:hover:text-amber-400',
    soft: 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300',
    ring: 'border-amber-500/30',
    dot: 'bg-amber-500',
    gradient: 'from-amber-500/5 to-amber-950/10',
    metric: 'bg-amber-500/5 border-amber-200 dark:border-amber-950/30 text-amber-600 dark:text-amber-400'
  },
  indigo: {
    bg: 'dark:bg-[#030313]',
    glowA: 'bg-indigo-950/30',
    glowB: 'bg-violet-950/20',
    icon: 'from-indigo-500/20 to-violet-900/30 border-indigo-500/30 shadow-[0_0_24px_rgba(99,102,241,0.16)]',
    text: 'text-indigo-500 dark:text-indigo-400',
    hover: 'hover:text-indigo-600 dark:hover:text-indigo-400',
    soft: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300',
    ring: 'border-indigo-500/30',
    dot: 'bg-indigo-500',
    gradient: 'from-indigo-500/5 to-indigo-950/10',
    metric: 'bg-indigo-500/5 border-indigo-200 dark:border-indigo-950/30 text-indigo-600 dark:text-indigo-400'
  }
};

const actionIcon = {
  github: Github,
  external: ExternalLink,
  privacy: Shield
};

export default function AppDetailTemplate({
  name,
  description,
  overview,
  appIcon,
  theme,
  actions,
  specs,
  features,
  tech,
  stats,
  screenshots,
  privacyHref,
  privacyText,
  setCurrentPage,
  setActiveSection
}: AppDetailTemplateProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const colors = themeClass[theme];
  const previousScreenshot = (activeScreenshot - 1 + screenshots.length) % screenshots.length;
  const nextScreenshot = (activeScreenshot + 1) % screenshots.length;

  const handleBack = () => {
    setCurrentPage('projects');
    setActiveSection('projects');
    window.scrollTo(0, 0);
  };

  return (
    <div className={`relative min-h-screen bg-slate-50 ${colors.bg} text-slate-800 dark:text-zinc-100 overflow-hidden font-sans`}>
      <div className={`absolute top-0 left-1/4 h-[520px] w-[520px] ${colors.glowA} rounded-full blur-[150px] pointer-events-none`} />
      <div className={`absolute right-0 top-0 h-[680px] w-[420px] ${colors.glowB} blur-[140px] pointer-events-none`} />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 relative z-10">
        <button
          onClick={handleBack}
          className={`group inline-flex items-center gap-2 text-slate-600 dark:text-zinc-400 ${colors.hover} text-xs md:text-sm font-mono transition-colors mb-12 cursor-pointer`}
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects</span>
        </button>

        <section className="border-b border-slate-200/80 dark:border-zinc-900/80 pb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.icon} border flex items-center justify-center shrink-0`}>
                {appIcon}
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
                  {name}
                </h1>
                <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 mt-3 max-w-2xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {actions.map((action) => {
                const Icon = actionIcon[action.icon];
                const privacy = action.icon === 'privacy';
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-mono transition-all shadow-lg ${
                      privacy
                        ? `bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 ${colors.hover}`
                        : action.icon === 'github'
                          ? 'bg-slate-900 dark:bg-zinc-900 border-slate-800 dark:border-zinc-800 hover:bg-slate-800 dark:hover:bg-zinc-800 text-white dark:text-zinc-300'
                          : colors.soft
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{action.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {specs.map(([label, value]) => (
              <div key={label} className="bg-white/80 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-900/80 p-4 rounded-2xl shadow-xs">
                <span className="text-[10px] font-mono tracking-wider text-slate-500 dark:text-zinc-500 uppercase block mb-1">
                  {label}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-zinc-100">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-b border-slate-200/80 dark:border-zinc-900/80">
          <div className="max-w-4xl mx-auto bg-white/80 dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-900/70 rounded-3xl p-6 md:p-8 shadow-xs">
            <p className="text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
              {overview}
            </p>
          </div>
        </section>

        <section className="py-12 border-b border-slate-200/80 dark:border-zinc-900/80">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-8">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 bg-white/80 dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-900/70 rounded-2xl p-4">
                <span className={`h-4 w-4 rounded-full border ${colors.ring} flex items-center justify-center shrink-0`}>
                  <span className={`h-2 w-2 rounded-full ${colors.dot}`} />
                </span>
                <span className="text-sm text-slate-700 dark:text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-b border-slate-200/80 dark:border-zinc-900/80">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-8">Built With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tech.map((item) => (
              <div key={item.name} className="min-w-24 bg-white/80 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-900/80 rounded-2xl p-5 flex flex-col items-center gap-3 shadow-xs">
                <div className={colors.text}>{item.icon}</div>
                <span className="text-sm font-bold text-slate-800 dark:text-zinc-200">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-b border-slate-200/80 dark:border-zinc-900/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className={`${colors.metric} bg-white/70 dark:bg-zinc-950/50 border p-6 rounded-2xl text-center shadow-xs`}>
                <div className="text-2xl md:text-3xl font-black tracking-tight font-mono mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-b border-slate-200/80 dark:border-zinc-900/80">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-8">Screenshots</h2>
          <div className="relative rounded-3xl bg-white/80 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-900/80 p-6 md:p-10 overflow-hidden shadow-lg">
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} pointer-events-none`} />
            <div className="relative min-h-[500px] flex items-center justify-center">
              <img
                src={screenshots[previousScreenshot].src}
                alt=""
                className="hidden md:block absolute left-[12%] w-[150px] h-[310px] object-cover rounded-[2rem] opacity-25 blur-[2px] scale-90 border border-white/10"
              />
              <img
                src={screenshots[nextScreenshot].src}
                alt=""
                className="hidden md:block absolute right-[12%] w-[150px] h-[310px] object-cover rounded-[2rem] opacity-25 blur-[2px] scale-90 border border-white/10"
              />

              <button
                onClick={() => setActiveScreenshot(previousScreenshot)}
                className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActiveScreenshot(nextScreenshot)}
                className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreenshot}
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10 flex flex-col items-center gap-5"
                >
                  <div className="w-[220px] sm:w-[260px] aspect-[9/19] bg-black rounded-[2.4rem] border-[5px] border-zinc-800 shadow-2xl overflow-hidden">
                    <div className="h-full w-full relative">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-20 rounded-full bg-black z-10" />
                      <img
                        src={screenshots[activeScreenshot].src}
                        alt={screenshots[activeScreenshot].title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-700 dark:text-zinc-300">
                    {screenshots[activeScreenshot].title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative flex justify-center gap-2 mt-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreenshot(index)}
                  className={`h-1.5 rounded-full transition-all ${index === activeScreenshot ? `w-7 ${colors.dot}` : 'w-1.5 bg-slate-300 dark:bg-zinc-800'}`}
                />
              ))}
            </div>
          </div>
        </section>

        <a
          href={privacyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-between gap-4 bg-white/80 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-900/80 rounded-2xl p-5 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900/70 transition-colors"
        >
          <span className="flex items-center gap-3">
            <Shield className={`h-5 w-5 ${colors.text}`} />
            <span>
              <span className="block text-sm font-bold text-slate-900 dark:text-white">Privacy Policy</span>
              <span className="block text-xs text-slate-500 dark:text-zinc-500">{privacyText}</span>
            </span>
          </span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
