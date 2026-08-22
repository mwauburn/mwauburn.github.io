import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Code2, Download, Sparkles, Clock, Globe, Quote, ArrowRight } from 'lucide-react';
import { TranslationDict } from '../types';

interface AboutProps {
  t: TranslationDict;
  language: 'en' | 'ur';
}

export default function About({ t, language }: AboutProps) {
  const isUrdu = language === 'ur';
  const [karachiTime, setKarachiTime] = useState<Date>(getKarachiTimeDate());

  // Function to calculate Karachi Time (UTC+5)
  function getKarachiTimeDate() {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * 5); // UTC+5
  }

  // Update Karachi clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setKarachiTime(getKarachiTimeDate());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hand rotations
  const hours = karachiTime.getHours();
  const minutes = karachiTime.getMinutes();
  const seconds = karachiTime.getSeconds();

  const secDeg = seconds * 6;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hrDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-[#fafbfc] dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-900"
    >
      {/* Subtle decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-indigo-50/20 dark:bg-indigo-950/2 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-pink-50/20 dark:bg-pink-950/2 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className={`text-left mb-16 ${isUrdu ? 'text-right' : ''}`}>
          <h2 className={`text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2 ${isUrdu ? 'font-sans' : ''}`}>
            {t.aboutTitle}
          </h2>
          <div className={`h-1.5 w-16 bg-pink-500 rounded-full ${isUrdu ? 'ml-auto' : ''}`} />
        </div>

        {/* Bento Grid Wrapper */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* CARD 1: Profile (col-span-4) */}
            <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:border-pink-500/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full border border-pink-500/80 flex items-center justify-center bg-pink-50 dark:bg-pink-950/20 text-pink-600 dark:text-pink-400 font-sans font-bold text-xl select-none group-hover:scale-105 transition-transform">
                  AW
                </div>
                <div>
                  <h3 className="font-sans font-black text-2xl tracking-tight text-pink-600 dark:text-pink-400">
                    {isUrdu ? "اویس احمد" : "Awais Ahmad"}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-slate-450 dark:text-slate-500 uppercase tracking-wider">
                    {isUrdu ? "سافٹ ویئر انجینئر" : "Software Engineer & Full-Stack Developer"}
                  </p>
                </div>
              </div>
              <p className={`text-slate-600 dark:text-slate-300 text-sm leading-relaxed ${isUrdu ? 'font-sans text-right' : ''}`}>
                {isUrdu ? (
                  "میں خوبصورت اور اعلیٰ کارکردگی والی موبائل اور ویب ایپلی کیشنز بنانے کے جذبے کے ساتھ ایک سافٹ ویئر انجینئر ہوں۔ میں فلٹر ڈویلپمنٹ اور فل اسٹیک سلوشنز میں مہارت رکھتا ہوں، جس میں تکنیکی مہارت کو تخلیقی مسائل کے حل کے ساتھ ملایا گیا ہے۔"
                ) : (
                  "I'm a Software Engineer with a passion for building beautiful, functional mobile and web applications. I specialize in Flutter development and full-stack solutions, combining technical expertise with creative problem-solving."
                )}
              </p>
            </div>

            {/* CARD 2: Globe Timezone (col-span-4) */}
            <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between overflow-hidden relative group">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-1">
                  {isUrdu ? "ٹائم زونز کے ساتھ لچک" : "FLEXIBLE WITH TIMEZONES"}
                </span>
                <h4 className="font-sans font-extrabold text-xl text-slate-900 dark:text-white leading-tight">
                  {isUrdu ? "پاکستان میں مقیم، دنیا بھر میں دستیاب" : "Based in Pakistan, available globally"}
                </h4>
              </div>

              {/* Dotted Wireframe SVG Globe */}
              <div className="relative h-44 flex items-center justify-center mt-4">
                <svg
                  viewBox="0 0 200 200"
                  className="w-40 h-40 text-slate-200 dark:text-slate-800 animate-[spin_120s_linear_infinite]"
                >
                  <defs>
                    <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="90" fill="url(#globe-glow)" />
                  <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
                  
                  {/* Grid Lines */}
                  <ellipse cx="100" cy="100" rx="85" ry="30" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 3" />
                  <ellipse cx="100" cy="100" rx="30" ry="85" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 3" />
                  <ellipse cx="100" cy="100" rx="85" ry="55" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  <ellipse cx="100" cy="100" rx="55" ry="85" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  <line x1="15" y1="100" x2="185" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
                  <line x1="100" y1="15" x2="100" y2="185" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />

                  {/* Dot constellations to simulate continents */}
                  <circle cx="60" cy="80" r="2.5" fill="currentColor" className="text-pink-500/80 animate-pulse" />
                  <circle cx="75" cy="65" r="1.5" fill="currentColor" />
                  <circle cx="95" cy="70" r="2" fill="currentColor" className="text-pink-500/80" />
                  <circle cx="110" cy="95" r="2" fill="currentColor" />
                  <circle cx="130" cy="110" r="2.5" fill="currentColor" />
                  <circle cx="140" cy="85" r="1.5" fill="currentColor" />
                  <circle cx="85" cy="120" r="2" fill="currentColor" />
                  <circle cx="105" cy="130" r="1.5" fill="currentColor" />
                </svg>
                {/* Core floating node */}
                <div className="absolute h-3 w-3 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)] animate-ping" />
                <div className="absolute h-2 w-2 rounded-full bg-pink-500" />
              </div>
            </div>

            {/* CARD 3: Craft (col-span-4) */}
            <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:border-pink-500/30 transition-all duration-300">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 dark:bg-pink-950/20 border border-pink-100/50 dark:border-pink-900/30 text-pink-600 dark:text-pink-400 text-[10px] font-bold font-mono tracking-wider w-max mb-6">
                <Code2 className="h-3.5 w-3.5" />
                <span>CRAFT</span>
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="font-sans font-black text-xl text-slate-900 dark:text-white tracking-tight">
                    {isUrdu ? "پروڈکٹ انجینئرنگ" : "Product Engineering"}
                  </h4>
                  <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-mono font-bold uppercase">
                    {isUrdu ? "فعال" : "Active"}
                  </span>
                </div>
                <p className="text-sm font-sans font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  {isUrdu ? "موبائل، ویب، بیک اینڈ اور ریلیز ورک فلو" : "Mobile, web, backend, and release workflows"}
                </p>
                <p className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                  FLUTTER / REACT / NODE
                </p>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-850/60 pt-4 mt-6">
                <p className="text-xs font-sans text-slate-400 leading-relaxed italic">
                  {isUrdu ? "خیال سے لانچ تک صاف، تیز اور قابل اعتماد ایپس بنانے پر فوکس۔" : "Focused on taking ideas from rough concept to polished, reliable app releases."}
                </p>
              </div>
            </div>

            {/* CARD 4: Available for Work - Green Card (col-span-6) */}
            <div className="lg:col-span-6 bg-[#04b071] text-white rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group">
              {/* Green Glow decoration */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[10px] font-bold tracking-widest uppercase mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span>{isUrdu ? "کام کے لیے دستیاب" : "AVAILABLE FOR WORK"}</span>
                </div>

                <h3 className="font-sans font-black text-3xl md:text-4xl tracking-tight leading-tight max-w-md">
                  {isUrdu ? "کوئی خواب ہے؟ آئیے مل کر حقیقت بنائیں!" : "HAVE A VISION?"}
                  <span className="block text-rose-100 font-sans font-extrabold tracking-wide mt-1.5 mb-2 filter drop-shadow-sm select-none animate-pulse">
                    LET'S BUILD IT
                  </span>
                  <span className="font-serif italic font-normal text-teal-100 lowercase">
                    together.
                  </span>
                </h3>
              </div>

              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 text-sm font-sans font-bold shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Download className="h-4.5 w-4.5 text-emerald-600" />
                  <span>{isUrdu ? "سوانح عمری (Resume)" : "Resume"}</span>
                </a>
              </div>
            </div>

            {/* CARD 5: Quotes Card (col-span-6) */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between relative group overflow-hidden">
              <Quote className="absolute top-6 right-6 h-16 w-16 text-pink-500/5 dark:text-pink-500/10 select-none pointer-events-none group-hover:scale-110 transition-transform" />

              <div className="pt-6">
                <blockquote className="text-2xl md:text-3xl font-serif italic font-extrabold text-pink-600 dark:text-pink-400 tracking-tight leading-snug">
                  "Real artists ship."
                </blockquote>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-850/60 pt-4 mt-8 flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                  STEVE JOBS
                </span>
                <span className="text-[10px] font-mono text-slate-350 dark:text-slate-600">
                  APPLE INC.
                </span>
              </div>
            </div>

          </div>

          {/* OVERLAPPING ANALOG CLOCK: Absolute Positioned right in the middle */}
          {/* Sits right over the gap lines on desktop, and turns into a custom section block on mobile */}
          <div className="lg:absolute lg:top-[43%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 mt-8 lg:mt-0 flex justify-center">
            <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-full bg-white dark:bg-slate-900 border-[7px] border-slate-100 dark:border-slate-950 shadow-2xl flex items-center justify-center group overflow-hidden select-none">
              
              {/* Outer dial ticks */}
              <svg className="absolute inset-0 h-full w-full text-slate-300 dark:text-slate-750" viewBox="0 0 200 200">
                {/* 12 Hour Notches */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 100 + 78 * Math.sin(angle);
                  const y1 = 100 - 78 * Math.cos(angle);
                  const x2 = 100 + 85 * Math.sin(angle);
                  const y2 = 100 - 85 * Math.cos(angle);
                  const isMain = i % 3 === 0;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth={isMain ? "2.5" : "1"}
                    />
                  );
                })}

                {/* Sub-notches for minutes */}
                {[...Array(60)].map((_, i) => {
                  if (i % 5 === 0) return null;
                  const angle = (i * 6 * Math.PI) / 180;
                  const x1 = 100 + 81 * Math.sin(angle);
                  const y1 = 100 - 81 * Math.cos(angle);
                  const x2 = 100 + 85 * Math.sin(angle);
                  const y2 = 100 - 85 * Math.cos(angle);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.6"
                    />
                  );
                })}
              </svg>

              {/* MOON Indicator Widget (Left) */}
              <div className="absolute left-[24%] top-[45%] -translate-y-1/2 text-center flex flex-col items-center">
                <span className="text-[7px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase scale-90">
                  MOON
                </span>
                <div className="h-5 w-5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-center overflow-hidden mt-0.5 relative">
                  {/* Styled crescent shadow representing Moon phase */}
                  <div className="h-4.5 w-4.5 rounded-full bg-slate-800 dark:bg-slate-400" />
                  <div className="absolute top-0 right-0.5 h-4.5 w-4.5 rounded-full bg-slate-50 dark:bg-slate-950 scale-105" />
                </div>
              </div>

              {/* SUN Indicator Widget (Right) */}
              <div className="absolute right-[24%] top-[45%] -translate-y-1/2 text-center flex flex-col items-center">
                <span className="text-[7px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase scale-90">
                  SUN
                </span>
                {/* Date Aperture Box (Says "5" in screenshot) */}
                <div className="h-5 w-6 rounded border border-slate-250 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-center font-mono text-[9px] font-bold text-slate-800 dark:text-slate-200 shadow-inner mt-0.5">
                  {karachiTime.getDate()}
                </div>
              </div>

              {/* "KARACHI" City branding */}
              <div className="absolute bottom-[23%] text-center">
                <span className="text-[8px] font-mono font-bold tracking-[0.2em] text-slate-450 dark:text-slate-500 uppercase">
                  KARACHI
                </span>
              </div>

              {/* Hour hand */}
              <div
                className="absolute w-1.5 h-16 bg-slate-950 dark:bg-slate-200 rounded-full origin-bottom"
                style={{
                  transform: `rotate(${hrDeg}deg)`,
                  top: '23%',
                  left: 'calc(50% - 3px)',
                  transition: 'transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 1.2)'
                }}
              />

              {/* Minute hand */}
              <div
                className="absolute w-1 h-24 bg-slate-900 dark:bg-slate-300 rounded-full origin-bottom"
                style={{
                  transform: `rotate(${minDeg}deg)`,
                  top: '12%',
                  left: 'calc(50% - 2px)',
                  transition: 'transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 1.2)'
                }}
              />

              {/* Second hand */}
              <div
                className="absolute w-0.5 h-26 bg-pink-500 rounded-full origin-bottom flex items-end justify-center"
                style={{
                  transform: `rotate(${secDeg}deg)`,
                  top: '11%',
                  left: 'calc(50% - 1px)',
                  transition: 'transform 0.1s linear'
                }}
              >
                {/* Balancing circle dot at the rear of second hand */}
                <div className="h-2.5 w-2.5 rounded-full bg-pink-500 -mb-4 border border-white dark:border-slate-900" />
              </div>

              {/* Core Pin Center */}
              <div className="absolute h-3 w-3 rounded-full bg-slate-950 dark:bg-white border-2 border-slate-100 dark:border-slate-900 z-30 shadow-md" />
              <div className="absolute h-1 w-1 rounded-full bg-pink-500 z-45" />

            </div>
          </div>
        </div>

        {/* BOTTOM STATS ROW: 4 Bento Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
          
          {/* STAT 1: Projects */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              {/* Spinning dashed circle */}
              <div className="absolute inset-0 border-[3px] border-dashed border-pink-500/40 rounded-full animate-[spin_40s_linear_infinite]" />
              <span className="absolute font-sans font-black text-3xl text-slate-900 dark:text-white select-none">
                20+
              </span>
            </div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {isUrdu ? "پروجیکٹس" : "Projects"}
            </p>
          </div>

          {/* STAT 2: Years of Experience */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              {/* Spinning dashed circle */}
              <div className="absolute inset-0 border-[3px] border-dashed border-sky-500/40 rounded-full animate-[spin_45s_linear_infinite]" />
              <span className="absolute font-sans font-black text-3xl text-slate-900 dark:text-white select-none">
                3+
              </span>
            </div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {isUrdu ? "سال کا تجربہ" : "Years of Experience"}
            </p>
          </div>

          {/* STAT 3: Published Platforms */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              {/* Spinning dashed circle */}
              <div className="absolute inset-0 border-[3px] border-dashed border-emerald-500/40 rounded-full animate-[spin_35s_linear_infinite]" />
              <span className="absolute font-sans font-black text-3xl text-slate-900 dark:text-white select-none">
                5+
              </span>
            </div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {isUrdu ? "پبلشڈ پلیٹ فارمز" : "Published Platforms"}
            </p>
          </div>

          {/* STAT 4: Technical Skills */}
          <div className="text-center group">
            <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              {/* Spinning dashed circle */}
              <div className="absolute inset-0 border-[3px] border-dashed border-amber-500/40 rounded-full animate-[spin_50s_linear_infinite]" />
              <span className="absolute font-sans font-black text-3xl text-slate-900 dark:text-white select-none">
                15+
              </span>
            </div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {isUrdu ? "ٹیکنیکل اسکلز" : "Technical Skills"}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
