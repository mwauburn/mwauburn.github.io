import { Trophy, Lightbulb, Rocket, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { TranslationDict } from '../types';

interface AchievementsProps {
  t: TranslationDict;
  language: 'en' | 'ur';
}

export default function Achievements({ language }: AchievementsProps) {
  const isUrdu = language === 'ur';

  const achievements = [
    {
      id: 'hackathon-1',
      title: isUrdu ? "پہلا مقام — انٹیلیجنٹ پلینٹ ہیکاتھون" : "1st Place — Intelligent Planet Hackathon",
      subtitle: isUrdu ? "KFUPM اور گوگل کلاؤڈ · فروری 2026" : "KFUPM & Google Cloud · Feb 2026",
      desc: isUrdu 
        ? "60 سے زائد ممالک کے 500 سے زائد ٹیموں میں پہلا مقام حاصل کیا۔ منارہ بنایا — ایک ذاتی گارڈین ایپ جس میں اے آر نیویگیشن اور ریئل ٹائم رسک الرٹس شامل ہیں۔" 
        : "Achieved 1st place among 500+ teams from 60+ countries. Built Manara — a personal guardian app with AR navigation and real-time risk alerts.",
      icon: Trophy,
      iconColor: 'text-amber-500 dark:text-amber-400',
      bgColor: 'bg-amber-500/10 dark:bg-amber-500/20',
      borderColor: 'border-amber-200 dark:border-amber-900/30',
      accentColor: 'from-amber-400 to-yellow-500',
      sparkles: true,
    },
    {
      id: 'hackathon-2',
      title: isUrdu ? "بہترین اے آئی سلوشن — انوویشن ہیکاتھون" : "Best AI Solution — Innovation Hackathon",
      subtitle: isUrdu ? "مڈل ایسٹ کالج اور KEF · اپریل 2026" : "Middle East College & KEF · Apr 2026",
      desc: isUrdu 
        ? "KEF انوویشن ہیکاتھون 2026 میں ایک شاندار اے آئی پر مبنی جدت تیار کرنے پر ایوارڈ حاصل کیا۔" 
        : "Awarded for developing an outstanding AI-driven innovation at the KEF Innovation Hackathon 2026.",
      icon: Lightbulb,
      iconColor: 'text-sky-500 dark:text-sky-400',
      bgColor: 'bg-sky-500/10 dark:bg-sky-500/20',
      borderColor: 'border-sky-200 dark:border-sky-900/30',
      accentColor: 'from-sky-400 to-indigo-500',
      sparkles: false,
    },
    {
      id: 'hackathon-3',
      title: isUrdu ? "بہترین ٹیم — ناسا اسپیس ایپس ہیکاتھون" : "Best Team — NASA Space Apps Hackathon",
      subtitle: isUrdu ? "ناسا · آرٹ اور ٹیکنالوجی · اکتوبر 2025" : "NASA · Art & Technology · Oct 2025",
      desc: isUrdu 
        ? "آرٹ اور ٹیکنالوجی کے زمرے میں بہترین ٹیم کا ایوارڈ حاصل کیا۔ صحار یونیورسٹی، ناسا اور UTAS کی طرف سے تسلیم کیا گیا۔" 
        : "Awarded Best Team in the Art & Technology category. Recognized by Sohar University, NASA, and UTAS.",
      icon: Rocket,
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      bgColor: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      borderColor: 'border-emerald-200 dark:border-emerald-900/30',
      accentColor: 'from-emerald-400 to-teal-500',
      sparkles: false,
    },
    {
      id: 'hackathon-4',
      title: isUrdu ? "دوسرا مقام — آئی سی پی سی عمان (OCPC)" : "2nd Place — ICPC Oman (OCPC)",
      subtitle: isUrdu ? "ICPC · اپریل 2026" : "ICPC · Apr 2026",
      desc: isUrdu 
        ? "عمان کولیگیٹ پروگرامنگ کانٹسٹ 2025 میں دوسرا مقام حاصل کیا۔" 
        : "Secured second place in the Oman Collegiate Programming Contest 2025.",
      icon: Award,
      iconColor: 'text-purple-500 dark:text-purple-400',
      bgColor: 'bg-purple-500/10 dark:bg-purple-500/20',
      borderColor: 'border-purple-200 dark:border-purple-900/30',
      accentColor: 'from-purple-400 to-fuchsia-500',
      sparkles: false,
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className={`mb-16 ${isUrdu ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {isUrdu ? "کامیابیاں" : "Achievements"}
          </h2>
          <div className="h-1.5 w-16 bg-pink-500 mt-2 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-3xl border border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-900/40 hover:shadow-lg dark:hover:shadow-pink-950/5 transition-all duration-300 relative overflow-hidden flex gap-5 ${isUrdu ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                {/* Sparkle details for 1st Place */}
                {item.sparkles && (
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <span className="absolute top-4 right-12 text-yellow-400 text-xs animate-pulse opacity-40">✦</span>
                    <span className="absolute bottom-6 right-24 text-yellow-400 text-sm animate-pulse opacity-30">✦</span>
                    <span className="absolute top-1/2 left-28 text-yellow-400 text-xs animate-pulse opacity-30">✦</span>
                  </div>
                )}

                {/* Left Side: Icon wrapper */}
                <div className="flex-shrink-0 relative z-10">
                  <div className={`h-12 w-12 rounded-2xl ${item.bgColor} flex items-center justify-center transition-transform hover:scale-110 duration-300`}>
                    <Icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex-grow space-y-2 relative z-10">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-pink-500 dark:text-pink-400">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
