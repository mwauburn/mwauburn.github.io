import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, Star, Cpu, ArrowUpRight } from 'lucide-react';
import { TranslationDict } from '../types';

interface ExperienceProps {
  t: TranslationDict;
  language: 'en' | 'ur';
}

interface ExpItem {
  id: string;
  role: { en: string; ur: string };
  company: { en: string; ur: string };
  location: { en: string; ur: string };
  period: { en: string; ur: string };
  color: string;
  details: {
    en: string[];
    ur: string[];
  };
  skills: string[];
  highlightMetric: {
    label: { en: string; ur: string };
    value: string;
  };
}

export default function Experience({ t, language }: ExperienceProps) {
  const isUrdu = language === 'ur';
  const [activeTab, setActiveTab] = useState<string>('exp-0');

  const experienceData: ExpItem[] = [
    {
      id: 'exp-0',
      role: {
        en: 'Lead Full-Stack App Engineer',
        ur: 'لیڈ فل اسٹیک ایپ انجینئر'
      },
      company: {
        en: 'Freelance & Contract Projects',
        ur: 'فری لانس اور کنٹریکٹ پروجیکٹس'
      },
      location: {
        en: 'Remote / Pakistan',
        ur: 'ریموٹ / پاکستان'
      },
      period: {
        en: 'Jan 2024 – Present',
        ur: 'جنوری ۲۰۲۴ – موجودہ'
      },
      color: 'from-pink-500 to-indigo-500',
      details: {
        en: [
          'Architected and published major client-facing applications including PackPrep (Offline-First Travel Planner), Lumina (ML Skincare OCR scanner), and Shukar Daily (Gratitude Journal).',
          'Configured full-stack deployment services utilizing Express servers, Firestore, and Supabase PostgreSQL with near-instant query resolution.',
          'Maintained high client satisfaction ratings through robust architectures, performance tuning, and elegant responsive interfaces.'
        ],
        ur: [
          'بڑے کلائنٹ ایپلی کیشنز جیسے پیک سیوی (آف لائن ٹریول پلانر)، لومینا (ایم ایل اسکن کیئر او سی آر اسکینر)، اور شکر ڈیلی (شکر گزاری جرنل) کو ڈیزائن اور شائع کیا۔',
          'ایکسپریس سرورز، فائر اسٹور، اور سوپا بیس پوسٹگری ایس کیو ایل کا استعمال کرتے ہوئے فل اسٹیک کلاؤڈ سروسز کو مربوط کیا۔',
          'مضبوط فن تعمیر، کارکردگی کو بہتر بنا کر اور خوبصورت انٹرفیس کے ذریعے گاہکوں کے بہترین تاثرات حاصل کیے۔'
        ]
      },
      skills: ['React Native', 'Expo', 'Flutter', 'Next.js', 'PostgreSQL', 'Zustand', 'Firebase'],
      highlightMetric: {
        label: { en: 'Apps Delivered', ur: 'ڈیلیور کردہ ایپس' },
        value: '10+'
      }
    },
    {
      id: 'exp-1',
      role: {
        en: 'Software Engineering Intern',
        ur: 'سافٹ ویئر انجینئرنگ انٹرن'
      },
      company: {
        en: 'TechVantage Systems',
        ur: 'ٹیک وینٹیج سسٹمز'
      },
      location: {
        en: 'Pakistan',
        ur: 'پاکستان'
      },
      period: {
        en: 'May 2024 – Oct 2024',
        ur: 'مئی ۲۰۲۴ – اکتوبر ۲۰۲۴'
      },
      color: 'from-indigo-500 to-sky-500',
      details: {
        en: [
          'Optimized screen rendering and memory allocations in core React Native and Flutter projects, boosting FPS on low-end test devices from 45 to a stable 60.',
          'Authored extensive automated unit and integration tests using Jest and Flutter Test, increasing overall package coverage by 24%.',
          'Assisted the core engineering team in modularizing REST API services to optimize data throughput by 15%.'
        ],
        ur: [
          'بنیادی ری ایکٹ نیٹیو اور فلٹر پروجیکٹس میں اسکرین رینڈرنگ اور میموری کے اخراج کو بہتر بنایا، جس سے کم ترین موبائل آلات پر رینڈرنگ رفتار کو مستحکم کیا گیا۔',
          'جیسٹ اور فلٹر ٹیسٹ کا استعمال کرتے ہوئے یونٹ اور انٹیگریشن ٹیسٹ لکھے، جس سے کوڈ کوریج میں ۲۴ فیصد اضافہ ہوا۔',
          'ڈیٹا کی منتقلی کی رفتار کو ۱۵ فیصد تک بڑھانے کے لیے ریموٹ اے پی آئی سروسز کو جدید بنانے میں مدد کی۔'
        ]
      },
      skills: ['React Native', 'TypeScript', 'Jest', 'Flutter', 'REST APIs', 'Git'],
      highlightMetric: {
        label: { en: 'Render Boost', ur: 'رینڈرنگ میں بہتری' },
        value: '33%'
      }
    },
    {
      id: 'exp-2',
      role: {
        en: 'Open-Source Contributor',
        ur: 'اوپن سورس مہم جو'
      },
      company: {
        en: 'Dart & Flutter Ecosystem',
        ur: 'ڈارٹ اور فلٹر ایکو سسٹم'
      },
      location: {
        en: 'Global Dev Community',
        ur: 'عالمی ڈویلپر کمیونٹی'
      },
      period: {
        en: 'June 2023 – Present',
        ur: 'جون ۲۰۲۳ – موجودہ'
      },
      color: 'from-emerald-500 to-teal-500',
      details: {
        en: [
          'Created and shared highly performant UI custom packages, customized painters, and complex state adapters via pub.dev and GitHub repositories.',
          'Reviewed community pull requests, refactored obsolete packages to support null-safety declarations, and optimized visual animations.',
          'Gained deep familiarity with low-level canvas painting, custom layout rules, and standard responsive widget architectures.'
        ],
        ur: [
          'انتہائی کارآمد یو آئی پیکجز اور پیچیدہ اسٹیٹ ایڈاپٹرز تیار کیے اور انہیں اوپن سورس کمیونٹی (GitHub اور pub.dev) پر شیئر کیا۔',
          'نئی پل ریکویسٹ کا جائزہ لیا، کوڈ کو جدید بنایا اور اینیمیشنز کی کارکردگی کو بہتر کیا۔',
          'لو لیول کینوس پینٹنگ اور ریسپونسیو ویجیٹ کے اصولوں پر گہری مہارت حاصل کی۔'
        ]
      },
      skills: ['Dart', 'Flutter SDK', 'Canvas API', 'GitHub Action', 'CI/CD'],
      highlightMetric: {
        label: { en: 'Dev Reach', ur: 'ڈویلپر رسائی' },
        value: '2k+'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-900"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-slate-100/40 dark:bg-slate-900/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className={`text-left mb-16 ${isUrdu ? 'text-right' : ''}`}>
          <span className="text-[10px] font-mono font-black tracking-[0.25em] text-pink-500 dark:text-pink-400 uppercase block mb-2">
            {isUrdu ? "میرا سفر" : "WORK HISTORY"}
          </span>
          <h2 className={`text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2 ${isUrdu ? 'font-sans' : ''}`}>
            {t.experienceTitle}
          </h2>
          <p className="text-sm font-sans text-slate-500 dark:text-slate-400 max-w-2xl">
            {t.experienceSubtitle}
          </p>
          <div className={`h-1.5 w-16 bg-pink-500 rounded-full mt-4 ${isUrdu ? 'ml-auto' : ''}`} />
        </div>

        {/* Dynamic Responsive Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* TAB BUTTONS (col-span-4 on lg) */}
          <div className="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x">
            {experienceData.map((exp, index) => {
              const isActive = activeTab === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`snap-center shrink-0 lg:shrink text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 w-64 lg:w-full select-none ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 border-pink-500/30 shadow-md translate-x-1'
                      : 'bg-transparent border-slate-200/50 dark:border-slate-800/40 hover:bg-slate-100/50 dark:hover:bg-slate-900/30 text-slate-600 dark:text-slate-400'
                  } ${isUrdu ? 'text-right flex-row-reverse' : ''}`}
                >
                  {/* Indicator Icon */}
                  <div
                    className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 border ${
                      isActive
                        ? 'bg-pink-50 dark:bg-pink-950/30 text-pink-500 border-pink-200/30'
                        : 'bg-slate-100 dark:bg-slate-850 text-slate-400 border-transparent'
                    }`}
                  >
                    <Briefcase className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className={`font-sans font-extrabold text-sm truncate ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                      {isUrdu ? exp.company.ur : exp.company.en}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-400 mt-1">
                      {isUrdu ? exp.period.ur : exp.period.en}
                    </p>
                  </div>

                  <ChevronRight
                    className={`h-4 w-4 text-slate-400 transition-transform hidden lg:block shrink-0 ${
                      isActive ? 'translate-x-1 text-pink-500' : ''
                    } ${isUrdu ? 'rotate-180' : ''}`}
                  />
                </button>
              );
            })}
          </div>

          {/* ACTIVE CONTENT DETAIL PANEL (col-span-8 on lg) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {experienceData.map((exp) => {
                if (activeTab !== exp.id) return null;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: isUrdu ? -15 : 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isUrdu ? 15 : -15 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden"
                  >
                    {/* Corner gradient glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-[0.03] rounded-full blur-xl`} />

                    {/* Header */}
                    <div className={`flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 border-b border-slate-100 dark:border-slate-850/60 pb-6 ${isUrdu ? 'md:flex-row-reverse text-right' : ''}`}>
                      <div>
                        <h3 className={`text-2xl font-sans font-black text-slate-900 dark:text-white tracking-tight ${isUrdu ? 'leading-relaxed' : ''}`}>
                          {isUrdu ? exp.role.ur : exp.role.en}
                        </h3>
                        
                        <div className={`flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mt-2 ${isUrdu ? 'justify-end' : ''}`}>
                          <span className="font-sans font-semibold text-pink-600 dark:text-pink-400">
                            {isUrdu ? exp.company.ur : exp.company.en}
                          </span>
                          <span className="text-slate-300 dark:text-slate-700 select-none">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {isUrdu ? exp.location.ur : exp.location.en}
                          </span>
                          <span className="text-slate-300 dark:text-slate-700 select-none">•</span>
                          <span className="flex items-center gap-1 font-mono text-xs">
                            <Calendar className="h-3.5 w-3.5" />
                            {isUrdu ? exp.period.ur : exp.period.en}
                          </span>
                        </div>
                      </div>

                      {/* Highlight Metric Badge */}
                      <div className="shrink-0 flex items-center gap-3 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 border border-pink-500/20 dark:border-pink-500/10 rounded-2xl px-4 py-3 text-center self-start md:self-auto">
                        <div>
                          <p className="font-mono text-2xl font-black text-pink-600 dark:text-pink-400">
                            {exp.highlightMetric.value}
                          </p>
                          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            {isUrdu ? exp.highlightMetric.label.ur : exp.highlightMetric.label.en}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-4 mb-8">
                      {(isUrdu ? exp.details.ur : exp.details.en).map((point, pIndex) => (
                        <div
                          key={pIndex}
                          className={`flex items-start gap-3.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed ${isUrdu ? 'flex-row-reverse text-right' : ''}`}
                        >
                          <CheckCircle className="h-4.5 w-4.5 text-pink-500 mt-1 shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Pills */}
                    <div className={`border-t border-slate-100 dark:border-slate-850/60 pt-6 ${isUrdu ? 'text-right' : ''}`}>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-3">
                        {isUrdu ? "استعمال شدہ ٹیکنالوجیز" : "TECHNOLOGY STACK"}
                      </span>
                      <div className={`flex flex-wrap gap-2 ${isUrdu ? 'justify-end' : ''}`}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-850 border border-slate-200/50 dark:border-slate-800/60 text-slate-700 dark:text-slate-300 font-sans font-medium text-xs shadow-sm hover:border-pink-500/30 hover:bg-white dark:hover:bg-slate-900 transition-colors"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
