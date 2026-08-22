import { SVGProps } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Compass, 
  Moon, 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Activity, 
  Search, 
  Layout, 
  Tv, 
  MessageSquare, 
  BookOpen, 
  Wallet, 
  Grid, 
  MessageCircle, 
  Share2, 
  Gamepad2, 
  Check, 
  ChevronRight, 
  Globe, 
  Eye, 
  Clock, 
  Filter,
  Plus,
  Bell
} from 'lucide-react';
import { TranslationDict } from '../types';

interface ProjectsGalleryProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage: (page: any) => void;
  setActiveSection: (sec: string) => void;
}

interface GalleryProject {
  id: string;
  index: string;
  category: 'MOBILE APP' | 'MULTIPLATFORM APP' | 'WEB APP';
  quarter: string;
  name: string;
  tagline: string;
  taglineUr: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  github?: string;
  demo?: string;
}

const VISIBLE_PROJECT_IDS = ['shukar-daily', 'lumina', 'packsavvy'];

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
    '/screens/packsavvy_06.png'
  ]
};

const SCREEN_THEME: Record<string, string> = {
  'shukar-daily': 'from-[#041a14] to-[#010a08] border-emerald-500/30 shadow-[0_20px_50px_rgba(4,47,46,0.4)]',
  lumina: 'from-[#1c1303] to-[#080501] border-amber-500/30 shadow-[0_20px_50px_rgba(245,158,11,0.25)]',
  packsavvy: 'from-[#18112e] to-[#080512] border-indigo-500/30 shadow-[0_20px_50px_rgba(99,102,241,0.25)]'
};

const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'shukar-daily',
    index: '01',
    category: 'MOBILE APP',
    quarter: 'Q1 2025',
    name: 'Shukar Daily',
    tagline: 'A peaceful, ad-free Islamic gratitude journal and counters app to notice and build daily reflection streaks',
    taglineUr: 'روزمرہ کے شکر، دعاؤں اور عکاسی کے لیے ایک خوبصورت اور پرسکون اسلامی شکریہ جرنل ایپ۔',
    tags: ['Flutter', 'Dart', 'Hive DB', 'Gratitude', 'Mobile'],
    gradient: 'from-[#05231c] to-[#020b08]',
    accentColor: 'emerald-500',
    github: 'https://github.com/iawaisahmd/shukar_daily',
    demo: 'https://shukardaily.awrs.me'
  },
  {
    id: 'lumina',
    index: '02',
    category: 'MOBILE APP',
    quarter: 'Q2 2025',
    name: 'Lumina',
    tagline: 'Know what touches your skin — Smart cosmetic ingredient scanner & allergen analyzer',
    taglineUr: 'جلد کے لیے اسمارٹ کاسمیٹک انگریڈینٹ اسکینر اور الرجی اینالائزر',
    tags: ['Flutter', 'Dart', 'Google ML Kit', 'Gemini AI', 'Hive DB'],
    gradient: 'from-[#1c1303] to-[#080501]',
    accentColor: 'amber-500',
    github: 'https://github.com/iawaisahmd/lumina_skincare',
    demo: 'https://lumina.awrs.me'
  },
  {
    id: 'packsavvy',
    index: '03',
    category: 'MOBILE APP',
    quarter: 'Q4 2024',
    name: 'Packsavvy',
    tagline: 'Smart packing list companion with trip planning, activity templates, and travel checklist workflows',
    taglineUr: 'Ø³ÙØ± Ú©ÛŒ Ù¾ÛŒÚ©Ù†Ú¯ØŒ Ú†ÛŒÚ© Ù„Ø³Ù¹Ø³ Ø§ÙˆØ± Ø³Ù…Ø§Ø±Ù¹ Ù¹Ø±Ù¾ Ù¾Ù„Ø§Ù†Ù†Ú¯ Ú©ÛŒ Ø§ÛŒÙ¾',
    tags: ['Flutter', 'Dart', 'Travel', 'Checklist', 'Offline'],
    gradient: 'from-[#18112e] to-[#080512]',
    accentColor: 'indigo-500',
    github: 'https://github.com/iawaisahmd/packsavvy',
    demo: 'https://packsavvy.awrs.me'
  },
  {
    id: 'navix',
    index: '03',
    category: 'MOBILE APP',
    quarter: 'Q2 2026',
    name: 'Navix',
    tagline: 'An AI-powered project management platform that turns your skills and goals into complete projects — idea generation, PRDs, roadmaps, and risk analysis ...',
    taglineUr: 'ایک مصنوعی ذہانت پر مبنی پروجیکٹ مینجمنٹ پلیٹ فارم جو آپ کی مہارتوں اور اہداف کو مکمل منصوبوں میں بدل دیتا ہے۔',
    tags: ['Flutter', 'Dart', 'Firebase', 'AI', 'LLM'],
    gradient: 'from-[#2e0b1c] to-[#0e0308]',
    accentColor: 'pink-500',
    github: 'https://github.com/iawaisahmd/navix',
    demo: 'https://navix.awrs.me'
  },
  {
    id: 'healog',
    index: '04',
    category: 'MOBILE APP',
    quarter: 'Q2 2026',
    name: 'Healog',
    tagline: 'An AI-powered record digitizer that extracts medical metrics from lab reports using AI, tracks health trends with charts, and manages medication reminders',
    taglineUr: 'لیب رپورٹس سے طبی پیمائش نکالنے، چارٹس کے ذریعے رجحانات کو ٹریک کرنے اور یاد دہانیاں منظم کرنے والی ایپ۔',
    tags: ['Flutter', 'Dart', 'Firebase', 'Gemini AI', 'Health'],
    gradient: 'from-[#22072e] to-[#0a020e]',
    accentColor: 'purple-500',
    github: 'https://github.com/iawaisahmd/healog',
    demo: 'https://healog.awrs.me'
  },
  {
    id: 'sire',
    index: '05',
    category: 'MULTIPLATFORM APP',
    quarter: 'Q2 2025',
    name: 'Sire',
    tagline: 'A modern, full-stack, multi-role e-commerce platform built with Flutter and PHP',
    taglineUr: 'فلٹر اور پی ایچ پی کے ساتھ بنائی گئی ایک جدید، فل اسٹیک، کثیر کردار ای کامرس کارپوریشنز اور سٹورز ایپ۔',
    tags: ['Flutter', 'Dart', 'PHP', 'MySQL', 'Firebase'],
    gradient: 'from-[#2e0c15] to-[#0e0306]',
    accentColor: 'rose-500',
    github: 'https://github.com/iawaisahmd/sire',
    demo: 'https://sire.awrs.me'
  },
  {
    id: 'sano',
    index: '06',
    category: 'MOBILE APP',
    quarter: 'Q2 2026',
    name: 'Sano',
    tagline: 'A comprehensive health and calorie tracking app with AI-powered meal logging, recipe generation, exercise tracking, and health data sync',
    taglineUr: 'مصنوعی ذہانت سے لیس کیلوری ٹریکر، کھانے کی لاگنگ، ورزش ٹریکنگ اور صحت کی ڈیٹا سنکرونائزیشن ایپ۔',
    tags: ['Flutter', 'Dart', 'Firebase', 'Gemini AI', 'Health'],
    gradient: 'from-[#0b0f2e] to-[#03040e]',
    accentColor: 'indigo-500',
    github: 'https://github.com/iawaisahmd/sano',
    demo: 'https://sano.awrs.me'
  },
  {
    id: 'manssat-sanad',
    index: '07',
    category: 'WEB APP',
    quarter: 'Q4 2024',
    name: 'Manssat Sanad',
    tagline: 'A comprehensive multi-tenant SaaS platform for business management — queue systems, transactions, expense tracking, and analytics in one place',
    taglineUr: 'کاروباری انتظام، کیو سسٹمز، لین دین اور اخراجات کو ٹریک کرنے کے لیے ایک مکمل ملٹی ٹیننٹ کلاؤڈ ساس پلیٹ فارم۔',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'SaaS'],
    gradient: 'from-[#2e2305] to-[#0f0b01]',
    accentColor: 'amber-500',
    github: 'https://github.com/iawaisahmd/sanad',
    demo: 'https://sanad.awrs.me'
  },
  {
    id: 'preview',
    index: '08',
    category: 'MOBILE APP',
    quarter: 'Q2 2026',
    name: 'PreView',
    tagline: 'A language learning app that builds custom vocabulary lists from movies and TV shows using AI',
    taglineUr: 'ایک منفرد زبان سیکھنے کی ایپ جو فلموں اور ٹی وی شوز سے آپ کی پسند کے الفاظ کی ذخیرہ اندوزی اور لغت بناتی ہے۔',
    tags: ['Flutter', 'Dart', 'Gemini AI', 'TMDb', 'Language Learning'],
    gradient: 'from-[#2a1a0c] to-[#0e0804]',
    accentColor: 'orange-500',
    github: 'https://github.com/iawaisahmd/preview',
    demo: 'https://preview.awrs.me'
  },
  {
    id: 'ping',
    index: '09',
    category: 'MOBILE APP',
    quarter: 'Q2 2026',
    name: 'Ping',
    tagline: 'An intelligent auto-reply system for messaging apps, powered by AI',
    taglineUr: 'مختلف میسجنگ ایپس کے لیے ایک ہوشیار اور خودکار جواب دینے والا نظام، جو آرٹیفیشل انٹیلیجنس پر کام کرتا ہے۔',
    tags: ['Kotlin', 'Jetpack Compose', 'Gemini AI', 'Room', 'Hilt'],
    gradient: 'from-[#11192e] to-[#05080e]',
    accentColor: 'blue-500',
    github: 'https://github.com/iawaisahmd/ping',
    demo: 'https://ping.awrs.me'
  },
  {
    id: 'aivio',
    index: '10',
    category: 'MULTIPLATFORM APP',
    quarter: 'Q2 2025',
    name: 'Aivio',
    tagline: 'An AI-powered learning companion that transforms your documents into summaries, quizzes, and instant answers',
    taglineUr: 'ایک تعلیمی معاون جو آپ کے پی ڈی ایف اور دستاویزات کو خلاصوں، کوئزز اور فوری جوابات میں تبدیل کرتا ہے۔',
    tags: ['Flutter', 'Dart', 'Firebase', 'Gemini AI', 'Education'],
    gradient: 'from-[#081f2d] to-[#02090e]',
    accentColor: 'sky-400',
    github: 'https://github.com/iawaisahmd/aivio',
    demo: 'https://aivio.awrs.me'
  },
  {
    id: 'moma',
    index: '11',
    category: 'MULTIPLATFORM APP',
    quarter: 'Q2 2025',
    name: 'Moma',
    tagline: 'A comprehensive expense management app that helps you track spending, organize budgets, and gain clear financial insights',
    taglineUr: 'اخراجات کو ٹریک کرنے، بجٹ بنانے اور مالیاتی امور کو آسانی سے سمجھنے کے لیے ایک جدید منیجر ایپ۔',
    tags: ['Flutter', 'Dart', 'Firebase', 'Expense Tracker', 'Finance'],
    gradient: 'from-[#1e072a] to-[#0a020e]',
    accentColor: 'violet-500',
    github: 'https://github.com/iawaisahmd/moma',
    demo: 'https://moma.awrs.me'
  },
  {
    id: 'wordle98',
    index: '12',
    category: 'MULTIPLATFORM APP',
    quarter: 'Q2 2026',
    name: 'Wordle 98',
    tagline: 'A daily Wordle game with authentic Windows 98 retro UI, statistics tracking, and helpful hints',
    taglineUr: 'ونڈوز 98 کے کلاسک ڈیزائن میں روزانہ کھیلے جانے والا لفظی کھیل جس میں شماریات اور ہنٹ لاگز شامل ہیں۔',
    tags: ['Flutter', 'Dart', 'Game', 'Wordle', 'Retro'],
    gradient: 'from-[#091f1c] to-[#020b0a]',
    accentColor: 'teal-500',
    github: 'https://github.com/iawaisahmd/wordle98',
    demo: 'https://wordle98.awrs.me'
  },
  {
    id: 'convo',
    index: '13',
    category: 'MOBILE APP',
    quarter: 'Q2 2026',
    name: 'Convo',
    tagline: 'A native Android real-time chat application providing secure messaging with a clean Material Design interface',
    taglineUr: 'ایک محفوظ اور تیز رفتار اینڈرائیڈ لائیو چیٹ ایپلی کیشن جس کو خوبصورت مٹیریل ڈیزائن میں بنایا گیا ہے۔',
    tags: ['Kotlin', 'Android', 'Firebase', 'Real-time Chat', 'Material Design'],
    gradient: 'from-[#0c1e2a] to-[#04090e]',
    accentColor: 'cyan-500',
    github: 'https://github.com/iawaisahmd/convo',
    demo: 'https://convo.awrs.me'
  },
  {
    id: 'paloma',
    index: '14',
    category: 'MULTIPLATFORM APP',
    quarter: 'Q4 2025',
    name: 'Paloma',
    tagline: 'A modern, beautiful social media application built with Flutter and Firebase to connect and express yourself through posts, likes, and replies',
    taglineUr: 'ایک جدید اور خوبصورت سوشل میڈیا نیٹ ورک جس کے ذریعے آپ پوسٹس، لائکس اور ریپلائز کے ساتھ خود کو ظاہر کر سکتے ہیں۔',
    tags: ['Flutter', 'Dart', 'Firebase', 'BLoC', 'GetX'],
    gradient: 'from-[#2e130f] to-[#0e0604]',
    accentColor: 'tomato-500',
    github: 'https://github.com/iawaisahmd/paloma',
    demo: 'https://paloma.awrs.me'
  },
  {
    id: 'flappy-danganronpa',
    index: '15',
    category: 'MULTIPLATFORM APP',
    quarter: 'Q4 2023',
    name: 'Flappy Danganronpa',
    tagline: 'A Flappy Bird-inspired arcade game with a Danganronpa theme, built in Unity for Android',
    taglineUr: 'ایک کلاسک فلپی برڈ گیم جو ڈینگن رونپا تھیم میں ڈھالی گئی ہے، جسے یونٹی انجن پر اینڈرائیڈ کے لیے بنایا گیا ہے۔',
    tags: ['Unity', 'C#', 'Android', 'Game', 'Danganronpa'],
    gradient: 'from-[#2a070f] to-[#0e0204]',
    accentColor: 'pink-600',
    github: 'https://github.com/iawaisahmd/flappy',
    demo: 'https://flappy.awrs.me'
  }
];

export default function ProjectsGallery({ t, language, setCurrentPage, setActiveSection }: ProjectsGalleryProps) {
  const isUrdu = language === 'ur';

  const openProject = (projectId: string) => {
    if (projectId === 'shukar-daily' || projectId === 'lumina' || projectId === 'packsavvy') {
      setCurrentPage(projectId);
      window.history.pushState(null, '', `/apps/${projectId}`);
      window.scrollTo(0, 0);
    }
  };

  // Categories list
  const categories: { id: 'ALL'; labelEn: string; labelUr: string }[] = [
    { id: 'ALL', labelEn: 'My Apps', labelUr: 'میری ایپس' }
  ];

  // Filter projects based on state
  const filteredProjects = GALLERY_PROJECTS.filter(project => {
    return VISIBLE_PROJECT_IDS.includes(project.id);
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'shukar-daily': return <Heart className="h-5 w-5 text-emerald-500 animate-pulse" />;
      case 'lumina': return <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />;
      case 'packsavvy': return <ShoppingBag className="h-5 w-5 text-indigo-500" />;
      case 'navix': return <Sparkles className="h-5 w-5 text-pink-500" />;
      case 'healog': return <Activity className="h-5 w-5 text-purple-500" />;
      case 'sire': return <ShoppingBag className="h-5 w-5 text-rose-500" />;
      case 'sano': return <Heart className="h-5 w-5 text-indigo-500" />;
      case 'manssat-sanad': return <Layout className="h-5 w-5 text-amber-500" />;
      case 'preview': return <Tv className="h-5 w-5 text-orange-500" />;
      case 'ping': return <MessageSquare className="h-5 w-5 text-blue-500" />;
      case 'aivio': return <BookOpen className="h-5 w-5 text-sky-400" />;
      case 'moma': return <Wallet className="h-5 w-5 text-violet-500" />;
      case 'wordle98': return <Grid className="h-5 w-5 text-teal-500" />;
      case 'convo': return <MessageCircle className="h-5 w-5 text-cyan-500" />;
      case 'paloma': return <Share2 className="h-5 w-5 text-rose-400" />;
      case 'flappy-danganronpa': return <Gamepad2 className="h-5 w-5 text-pink-500" />;
      default: return <Sparkles className="h-5 w-5 text-zinc-500" />;
    }
  };

  // Renders premium interactive visual mocks resembling the reference image screens
  const renderVisualMockup = (id: string) => {
    const screenshots = APP_SCREENSHOTS[id];
    if (screenshots) {
      return (
        <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-b ${SCREEN_THEME[id]} opacity-90 rounded-2xl`} />
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
                  className={`absolute w-[140px] md:w-[170px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden border-2 ${SCREEN_THEME[id]} bg-black z-10 select-none origin-bottom`}
                >
                  <img src={src} alt={`${id} screenshot ${index + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              );
            })}
          </div>
        </div>
      );
    }

    switch (id) {
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

      case 'navix':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-pink-900 bg-[#080205] shadow-[0_15px_30px_rgba(236,72,153,0.2)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-pink-400 overflow-hidden justify-between">
                <div className="flex justify-between items-center border-b border-pink-900/40 pb-1 font-bold">
                  <span>Create Project</span>
                  <span className="text-pink-500">AI Prompt</span>
                </div>
                <div className="bg-pink-950/20 border border-pink-900/30 p-1.5 rounded space-y-1.5 my-1.5">
                  <div className="text-[6px] text-zinc-400 uppercase">How would you like to start?</div>
                  <div className="bg-pink-950/50 p-1 rounded border border-pink-900/40 text-pink-100 text-[5.5px]">
                    "Build an offline-first task application using Flutter..."
                  </div>
                  <div className="flex justify-between items-center bg-zinc-950 border border-pink-950 rounded p-1 text-[5px]">
                    <span>Team Size</span>
                    <span className="bg-pink-500 text-white font-bold px-1 rounded-sm">3 members</span>
                  </div>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/30 p-1 rounded text-center text-[5.5px] text-pink-100 font-bold uppercase mt-auto">
                  Generate Roadmap
                </div>
              </div>
            </div>
          </div>
        );

      case 'healog':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-purple-900 bg-[#060209] shadow-[0_15px_30px_rgba(168,85,247,0.2)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-purple-400 overflow-hidden justify-between">
                <div className="flex justify-between items-center border-b border-purple-900/40 pb-1 font-bold">
                  <span>Healog</span>
                  <span className="text-emerald-400 font-mono text-[5px]">SYNCED</span>
                </div>
                <div className="bg-purple-950/15 border border-purple-900/30 p-1.5 rounded space-y-1 my-1.5">
                  <div className="text-[5.5px] text-purple-300">Today's medications:</div>
                  <div className="bg-purple-900/20 border border-purple-900/40 p-1 rounded flex justify-between items-center">
                    <span>Paracetamol 500mg</span>
                    <span className="text-emerald-400 font-bold">✔ TAKEN</span>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-900/40 p-1 rounded flex justify-between items-center text-purple-200">
                    <span>Multivitamin</span>
                    <span className="text-purple-400">8:00 PM</span>
                  </div>
                </div>
                <div className="bg-purple-950/20 p-1 rounded border border-purple-950">
                  <div className="text-[5px] text-zinc-500">Comprehensive Blood Panel</div>
                  <div className="flex gap-0.5 items-end h-7 pt-1 border-b border-purple-950">
                    {[15, 30, 22, 45, 60, 40, 52].map((v, i) => (
                      <div key={i} style={{ height: `${v}%` }} className="flex-1 bg-purple-500/45 rounded-t-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sire':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-rose-900 bg-[#080203] shadow-[0_15px_30px_rgba(244,63,94,0.2)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-rose-400 overflow-hidden justify-between">
                <div className="flex justify-between items-center border-b border-rose-900/40 pb-1 font-bold">
                  <span>Welcome Back</span>
                  <span className="text-zinc-500">Sire Store</span>
                </div>
                <div className="space-y-1.5 my-auto px-1">
                  <div className="text-center font-bold text-white text-[8px] mb-1">Login</div>
                  <div className="bg-zinc-950 border border-rose-950/80 rounded p-1 text-rose-300/60 flex items-center justify-between">
                    <span>username or email</span>
                  </div>
                  <div className="bg-zinc-950 border border-rose-950/80 rounded p-1 text-rose-300/60 flex items-center justify-between">
                    <span>••••••••••</span>
                  </div>
                  <button className="w-full py-1 bg-rose-600 rounded text-white font-bold text-center mt-1 scale-95 hover:bg-rose-700">
                    Submit
                  </button>
                </div>
                <div className="text-[5px] text-zinc-500 text-center pb-0.5">Don't have an account? Sign up</div>
              </div>
            </div>
          </div>
        );

      case 'sano':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-indigo-900 bg-[#020309] shadow-[0_15px_30px_rgba(99,102,241,0.2)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-indigo-400 overflow-hidden justify-between">
                <div className="flex justify-between items-center border-b border-indigo-900/40 pb-1 font-bold">
                  <span>Sano Dashboard</span>
                  <span className="text-indigo-400 text-[6px]">CALORIES</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-1.5">
                  {/* Calorie Ring */}
                  <div className="w-14 h-14 rounded-full border-[3px] border-indigo-950 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-[3px] border-t-indigo-500 border-r-indigo-500 border-b-transparent border-l-transparent" />
                    <div className="text-center text-[5.5px]">
                      <div className="font-extrabold text-indigo-100">643</div>
                      <div className="text-zinc-500 scale-90">KCAL REM</div>
                    </div>
                  </div>
                  <div className="text-[5.5px] text-indigo-200">Daily goal: 2000 kcal</div>
                </div>
                <div className="grid grid-cols-4 gap-0.5 border-t border-indigo-950 pt-1 text-center text-[4.5px] text-indigo-400">
                  <div><span>Carbs</span><span className="block font-bold text-white">45%</span></div>
                  <div><span>Protein</span><span className="block font-bold text-white">30%</span></div>
                  <div><span>Fat</span><span className="block font-bold text-white">25%</span></div>
                  <div><span>Water</span><span className="block font-bold text-indigo-300">1.8L</span></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'manssat-sanad':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-3">
            {/* Desktop Mockup */}
            <div className="w-full h-[180px] rounded-lg border border-amber-900/40 bg-[#0d0a03] shadow-[0_15px_30px_rgba(245,158,11,0.15)] flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-102">
              <div className="bg-[#1c1404] px-3 py-1 border-b border-amber-950/60 flex items-center gap-1.5 shrink-0">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                </div>
                <div className="bg-zinc-950/80 text-[5px] text-amber-500/80 px-2 py-0.5 rounded flex-grow max-w-[100px] font-mono leading-none">
                  https://sanad.awrs.me/admin/dashboard
                </div>
              </div>
              
              {/* Inner SaaS tables layout */}
              <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-[30px] border-r border-amber-950/40 bg-[#070501] p-1 flex flex-col gap-1 shrink-0">
                  <div className="h-1.5 w-full bg-amber-500/10 rounded-sm" />
                  <div className="h-1.5 w-full bg-amber-500/20 rounded-sm" />
                  <div className="h-1.5 w-full bg-amber-500/10 rounded-sm" />
                  <div className="h-1.5 w-full bg-amber-500/10 rounded-sm" />
                </div>
                
                {/* Main panel showing business queues / data */}
                <div className="flex-grow p-2 flex flex-col gap-1.5 overflow-hidden">
                  <div className="flex justify-between items-center text-[6px] text-amber-400 font-bold shrink-0">
                    <span>SaaS Client Grid</span>
                    <span className="text-zinc-500">Active Tenant</span>
                  </div>
                  <div className="flex-1 border border-amber-950/40 rounded overflow-hidden">
                    <table className="w-full text-left border-collapse text-[5px] text-zinc-400">
                      <thead>
                        <tr className="bg-amber-950/20 border-b border-amber-950/40 text-[4.5px] text-amber-500">
                          <th className="p-1">Client ID</th>
                          <th className="p-1">Status</th>
                          <th className="p-1">Transactions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-amber-950/10">
                          <td className="p-1 font-mono">0917</td>
                          <td className="p-1 text-emerald-400">Paid</td>
                          <td className="p-1">$1,240.00</td>
                        </tr>
                        <tr className="border-b border-amber-950/10">
                          <td className="p-1 font-mono">0822</td>
                          <td className="p-1 text-emerald-400">Paid</td>
                          <td className="p-1">$850.50</td>
                        </tr>
                        <tr>
                          <td className="p-1 font-mono">1104</td>
                          <td className="p-1 text-amber-400">Pending</td>
                          <td className="p-1">$320.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'preview':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-orange-900 bg-[#090603] shadow-[0_15px_30px_rgba(249,115,22,0.2)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-orange-400 overflow-hidden justify-between">
                <div className="flex justify-between items-center border-b border-orange-900/40 pb-1 font-bold">
                  <span>PreView Language</span>
                  <span className="text-orange-500">Vocabulary</span>
                </div>
                
                {/* Movie cards list */}
                <div className="space-y-1 my-1 flex-1 overflow-y-auto pr-0.5">
                  <div className="text-[5.5px] text-zinc-500 font-mono">EXTRACTING FROM MEDIA:</div>
                  <div className="bg-orange-950/25 border border-orange-900/40 p-1 rounded flex gap-1 items-center">
                    <div className="w-5 h-7 bg-orange-900/40 rounded flex items-center justify-center text-[5px] text-orange-200">Star Wars</div>
                    <div className="flex-grow">
                      <div className="font-bold text-white text-[6px]">"May the force..."</div>
                      <div className="text-orange-400 text-[5px]">May: <span>مئی (سکت)</span></div>
                    </div>
                  </div>
                  <div className="bg-orange-950/25 border border-orange-900/40 p-1 rounded flex gap-1 items-center">
                    <div className="w-5 h-7 bg-orange-900/40 rounded flex items-center justify-center text-[5px] text-orange-200">Sci-Fi</div>
                    <div className="flex-grow">
                      <div className="font-bold text-white text-[6px]">"Interstellar orbit"</div>
                      <div className="text-orange-400 text-[5px]">Orbit: <span>مدار</span></div>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 p-1 rounded text-center text-[5px] text-orange-100 font-semibold">
                  Generate Flashcards
                </div>
              </div>
            </div>
          </div>
        );

      case 'ping':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-blue-900 bg-[#02050d] shadow-[0_15px_30px_rgba(59,130,246,0.2)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-blue-400 overflow-hidden justify-between">
                <div className="flex justify-between items-center border-b border-blue-900/40 pb-1 font-bold">
                  <span>Ping Assistant</span>
                  <span className="text-emerald-400 text-[5px]">● BOT ACTIVE</span>
                </div>
                <div className="bg-blue-950/20 border border-blue-900/30 p-1.5 rounded space-y-1.5 my-1.5">
                  <div className="text-[6px] text-zinc-400 uppercase">NEW RULE</div>
                  <div className="flex justify-between items-center bg-zinc-950 rounded p-1 text-[5px]">
                    <span>Target: Whatsapp</span>
                    <span className="text-blue-400">Trigger: "Urgent"</span>
                  </div>
                  <div className="bg-blue-900/20 p-1 rounded text-blue-200 text-[5.5px]">
                    Reply: "I'm currently driving. Will call you back soon!"
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 p-1 rounded text-center text-[5.5px] text-blue-100 font-bold uppercase mt-auto">
                  Test Auto-Reply
                </div>
              </div>
            </div>
          </div>
        );

      case 'aivio':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-sky-900 bg-[#02060a] shadow-[0_15px_30px_rgba(14,165,233,0.2)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-sky-400 overflow-hidden justify-between">
                <div className="flex justify-between items-center border-b border-sky-900/40 pb-1 font-bold">
                  <span>My Library</span>
                  <span className="text-sky-500">Aivio</span>
                </div>
                <div className="space-y-1 my-2 flex-1 overflow-y-auto pr-0.5">
                  <div className="bg-sky-950/35 border border-sky-900/30 p-1 rounded-md">
                    <div className="font-bold text-white text-[6px]">Lecture 1 Summary</div>
                    <div className="text-[5px] text-zinc-400 mt-0.5">Gemini processed, 4 key bullets</div>
                  </div>
                  <div className="bg-sky-950/35 border border-sky-900/30 p-1 rounded-md">
                    <div className="font-bold text-white text-[6px]">AI Quiz Group</div>
                    <div className="text-[5px] text-zinc-400 mt-0.5">10 questions generated</div>
                  </div>
                </div>
                <div className="bg-sky-500/15 border border-sky-500/30 p-1 rounded text-center text-[5px] text-sky-100 font-bold mt-auto">
                  Upload PDF
                </div>
              </div>
            </div>
          </div>
        );

      case 'moma':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-violet-900 bg-[#040108] shadow-[0_15px_30px_rgba(139,92,246,0.25)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-violet-400 overflow-hidden justify-between">
                <div className="flex justify-between items-center border-b border-violet-900/40 pb-1 font-bold">
                  <span>Moma Wallet</span>
                  <span className="text-zinc-500">Finance</span>
                </div>
                <div className="bg-gradient-to-r from-violet-900/60 to-purple-900/50 border border-violet-800/40 p-1.5 rounded-lg text-center my-1.5 shrink-0">
                  <div className="text-[5.5px] text-violet-300">Total Balance</div>
                  <div className="text-[9px] text-white font-extrabold mt-0.5">$118.00</div>
                </div>
                <div className="space-y-1 overflow-y-auto pr-0.5 flex-1">
                  <div className="p-1 bg-violet-950/20 border border-violet-950 rounded flex justify-between items-center">
                    <span>Salary</span>
                    <span className="text-emerald-400 font-bold">+$242.00</span>
                  </div>
                  <div className="p-1 bg-violet-950/20 border border-violet-950 rounded flex justify-between items-center">
                    <span>Groceries</span>
                    <span className="text-red-400">-$34.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'wordle98':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Retro OS Style container */}
            <div className="w-[140px] h-[210px] bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] shadow-xl p-0.5 flex flex-col text-slate-900 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              {/* Windows 98 Title bar */}
              <div className="bg-gradient-to-r from-[#000080] to-[#1080d0] text-white font-bold text-[5.5px] px-1 py-0.5 flex justify-between items-center shrink-0">
                <span className="font-mono">Wordle 98</span>
                <div className="flex gap-0.5">
                  <span className="w-2 h-2 bg-[#c0c0c0] border border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-[4.5px] text-slate-900 text-center font-bold font-mono">_</span>
                  <span className="w-2 h-2 bg-[#c0c0c0] border border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-[4.5px] text-slate-900 text-center font-bold font-mono">X</span>
                </div>
              </div>
              
              {/* Retro Workspace */}
              <div className="flex-1 bg-[#008080] p-1.5 flex flex-col justify-between overflow-hidden">
                <div className="text-center font-mono text-[6px] text-white font-bold tracking-wider mb-1">Retro Puzzle</div>
                
                {/* Wordle grid */}
                <div className="grid grid-cols-5 gap-0.5 max-w-[80px] mx-auto">
                  {['A','U','D','I','O','D','E','M','O','N'].map((char, index) => {
                    const isCorrect = index < 5 && index !== 2;
                    const isAbsent = index === 2;
                    const isPresent = index >= 5;
                    const cellBg = isCorrect ? 'bg-emerald-700 text-white' : isAbsent ? 'bg-zinc-800 text-white' : 'bg-amber-600 text-white';
                    return (
                      <div key={index} className={`w-3.5 h-3.5 border border-white/40 ${cellBg} flex items-center justify-center font-mono text-[5.5px] font-bold`}>
                        {char}
                      </div>
                    );
                  })}
                </div>

                <div className="text-center text-[4px] text-white/80 font-mono mt-1">HINT: MUSIC SOUNDS</div>
              </div>
            </div>
          </div>
        );

      case 'convo':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-cyan-900 bg-[#020609] shadow-[0_15px_30px_rgba(6,182,212,0.2)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-cyan-400 overflow-hidden justify-between">
                <div className="flex justify-between items-center border-b border-cyan-900/40 pb-1 font-bold">
                  <span>Sign Up</span>
                  <span className="text-cyan-500">Convo App</span>
                </div>
                <div className="space-y-1 my-auto px-1">
                  <div className="bg-zinc-950 border border-cyan-950 rounded p-1 text-[5px] text-cyan-200/50">Username</div>
                  <div className="bg-zinc-950 border border-cyan-950 rounded p-1 text-[5px] text-cyan-200/50">Email Address</div>
                  <div className="bg-zinc-950 border border-cyan-950 rounded p-1 text-[5px] text-cyan-200/50">Password</div>
                  <div className="w-full py-1 bg-cyan-600 text-white font-bold text-center rounded text-[5px] mt-0.5">Submit</div>
                </div>
                <div className="text-[4.5px] text-zinc-500 text-center pb-0.5">Secure peer-to-peer connection</div>
              </div>
            </div>
          </div>
        );

      case 'paloma':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-rose-950 bg-[#090302] shadow-[0_15px_30px_rgba(244,63,94,0.15)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-rose-400 overflow-hidden justify-between">
                <div className="flex justify-between items-center border-b border-rose-950/40 pb-1 font-bold">
                  <span>Paloma Feed</span>
                  <span className="text-rose-500">Social</span>
                </div>
                <div className="my-1.5 flex-1 bg-rose-950/10 border border-rose-950/30 rounded p-1 space-y-1.5 overflow-hidden">
                  <div className="flex gap-1 items-start">
                    <div className="w-4 h-4 rounded-full bg-rose-500/30 border border-rose-500/50 shrink-0" />
                    <div>
                      <div className="text-white font-bold text-[5.5px]">Awais Ahmad</div>
                      <div className="text-rose-300 text-[4.8px] leading-tight">Connecting the world with Flutter and clean code architecture! ✨</div>
                    </div>
                  </div>
                  <div className="border-t border-rose-950/40 pt-1 flex justify-between text-[4.5px] text-zinc-500 px-1">
                    <span>❤ 124 Likes</span>
                    <span>💬 12 Replies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'flappy-danganronpa':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Phone Screen Landscape or Vertical */}
            <div className="relative w-[140px] h-[240px] rounded-[1.8rem] border-[2.5px] border-rose-950 bg-[#0b0103] shadow-[0_15px_30px_rgba(225,29,72,0.3)] overflow-hidden flex flex-col p-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-3 bg-black rounded-full mx-auto mb-1 shrink-0" />
              <div className="flex-1 flex flex-col text-[7px] text-rose-400 overflow-hidden justify-between relative bg-[#050001]">
                <div className="flex justify-between items-center border-b border-rose-950/30 pb-0.5 text-[5px]">
                  <span>Score: 09</span>
                  <span className="text-rose-500">Best: 45</span>
                </div>
                
                {/* Game Canvas Graphics */}
                <div className="flex-grow relative overflow-hidden my-1 border border-rose-950/40 rounded flex items-center justify-center">
                  {/* Pipes */}
                  <div className="absolute right-[25%] top-0 w-3 h-12 bg-rose-900/50 border border-rose-800 rounded-b" />
                  <div className="absolute right-[25%] bottom-0 w-3 h-14 bg-rose-900/50 border border-rose-800 rounded-t" />

                  {/* Character Monokuma Bird */}
                  <div className="absolute left-[20%] top-[40%] w-3 h-3 bg-pink-500 rounded-full border border-white flex items-center justify-center font-bold text-[5px] text-white animate-bounce">
                    ☯
                  </div>

                  {/* Game Over Screen */}
                  <div className="absolute inset-0 bg-black/85 backdrop-blur-xs flex flex-col items-center justify-center gap-0.5 z-10">
                    <div className="text-rose-500 font-black text-[9px] uppercase tracking-wider scale-110">Game Over</div>
                    <div className="text-[4.5px] text-zinc-500">Retry? Tap to jump</div>
                  </div>
                </div>
                
                <div className="text-center text-[4px] text-zinc-600 font-mono">Unity 2D Engine</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      id="projects-gallery-page"
      className="pt-28 pb-24 bg-slate-50 dark:bg-[#030303] text-slate-800 dark:text-white min-h-screen transition-all duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Back Button & Navigation Path */}
        <div className={`mb-10 flex ${isUrdu ? 'justify-end' : 'justify-start'}`}>
          <button
            onClick={() => {
              setCurrentPage('portfolio');
              setActiveSection('home');
              window.history.pushState(null, '', '/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 text-slate-700 dark:text-zinc-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/30 transition-all font-semibold font-sans text-xs cursor-pointer shadow-sm hover:scale-102 active:scale-98"
          >
            <ArrowLeft className={`h-4 w-4 transition-transform group-hover:-translate-x-1 ${isUrdu ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
            <span>{isUrdu ? 'پورٹ فولیو پر واپس جائیں' : 'Back to Portfolio'}</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-pink-600 dark:text-pink-500 uppercase font-mono mb-2 block">
            {isUrdu ? 'میرا پروجیکٹس پورٹ فولیو' : 'PORTFOLIO'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-sans text-slate-900 dark:text-white tracking-tight leading-tight">
            Projects <span className="font-serif italic text-pink-600 dark:text-pink-500 pr-1">Gallery</span>
          </h1>
          <p className="mt-3 text-slate-600 dark:text-zinc-400 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
            {isUrdu 
              ? 'پروجیکٹس اور تجرباتی ایپلی کیشنز کا ایک جامع کلیکشن جو میں نے پورے دل اور مہارت سے بنائے ہیں۔' 
              : "A collection of projects I've built with passion and dedication."}
          </p>
        </div>

        {/* Filter Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => {
            return (
              <button
                key={cat.id}
                className="px-4 py-2 rounded-xl text-[11px] md:text-xs font-semibold font-sans transition-all border bg-pink-600 text-white border-pink-500 shadow-md shadow-pink-600/10"
              >
                {isUrdu ? cat.labelUr : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white dark:bg-zinc-950 rounded-3xl border border-slate-200 dark:border-zinc-900 shadow-sm"
            >
              <div className="text-slate-500 dark:text-zinc-500 font-mono text-sm">No projects found in this category.</div>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  whileHover="hover"
                  initial="initial"
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  onClick={() => openProject(project.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      openProject(project.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="group bg-white dark:bg-[#0c0c0e] rounded-[1.8rem] border border-slate-200 dark:border-zinc-900 p-5 md:p-6 flex flex-col justify-between h-[520px] shadow-lg dark:shadow-xl hover:border-slate-300 dark:hover:border-zinc-800 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                >
                  {/* Top Meta Details Row */}
                  <div className="flex items-center gap-3 text-[10px] font-mono tracking-wider text-slate-500 dark:text-zinc-500 uppercase shrink-0">
                    <span className="font-bold text-slate-600 dark:text-zinc-400">{project.index}</span>
                    <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800" />
                    <span className="text-slate-600 dark:text-zinc-400 font-semibold">{project.category}</span>
                    <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800" />
                    <span className="font-bold text-slate-600 dark:text-zinc-400">{project.quarter}</span>
                  </div>

                  {/* Brand Header */}
                  <div className="mt-4 flex flex-col shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 flex items-center justify-center shadow-inner">
                        {getProjectIcon(project.id)}
                      </div>
                      <div>
                        <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-2 text-xs md:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans min-h-[40px] line-clamp-2">
                      {isUrdu ? project.taglineUr : project.tagline}
                    </p>
                  </div>

                  {/* Visual Mockup Stage */}
                  <div className={`flex-1 min-h-0 bg-gradient-to-br ${project.gradient} border border-slate-200/50 dark:border-zinc-900/60 rounded-2xl overflow-hidden mt-4 relative flex items-center justify-center`}>
                    {renderVisualMockup(project.id)}
                  </div>

                  {/* Bottom Tag List & Call to Actions */}
                  <div className="mt-4 flex items-center justify-between shrink-0">
                    <div className="flex flex-wrap gap-1 md:gap-1.5 max-w-[65%]">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[9px] font-mono rounded bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="p-1.5 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                          title="View Source on GitHub"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.demo && (
                        (project.id === 'shukar-daily' || project.id === 'lumina' || project.id === 'packsavvy') ? (
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              openProject(project.id);
                            }}
                            className="py-1 px-3 rounded-lg text-[10px] md:text-xs font-sans font-semibold bg-slate-900 dark:bg-zinc-900 border border-slate-800 dark:border-zinc-800 hover:bg-slate-800 dark:hover:bg-zinc-800 text-white dark:text-zinc-200 transition-colors cursor-pointer flex items-center gap-1 hover:border-slate-700 dark:hover:border-zinc-700"
                          >
                            <span>{isUrdu ? "تفصیلات" : "Details"}</span>
                            <ExternalLink className="h-3 w-3" />
                          </button>
                        ) : (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className="py-1 px-3 rounded-lg text-[10px] md:text-xs font-sans font-semibold bg-slate-900 dark:bg-zinc-900 border border-slate-800 dark:border-zinc-800 hover:bg-slate-800 dark:hover:bg-zinc-800 text-white dark:text-zinc-200 transition-colors cursor-pointer flex items-center gap-1 hover:border-slate-700 dark:hover:border-zinc-700"
                          >
                            <span>{isUrdu ? "کھولیں" : "Open"}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )
                      )}
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
