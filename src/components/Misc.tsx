import { useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { TranslationDict } from '../types';

interface MiscProps {
  t: TranslationDict;
  language: 'en' | 'ur';
}

export default function Misc({ language }: MiscProps) {
  const isUrdu = language === 'ur';
  const constraintsRef = useRef<HTMLDivElement>(null);

  // Sticker assets configuration
  const stickers = [
    {
      id: 'st-calligraphy',
      content: 'س',
      isText: true,
      textClass: 'text-3xl font-extrabold text-slate-800 dark:text-slate-100 font-serif',
      label: 'Seen',
      x: '5%',
      y: '5%',
      rotate: -15,
      scale: 1,
      bg: 'bg-yellow-50 dark:bg-yellow-950/40',
    },
    {
      id: 'st-hutao',
      img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=150&auto=format&fit=crop&q=80',
      label: 'Hu Tao',
      x: '10%',
      y: '12%',
      rotate: 12,
      scale: 1.1,
    },
    {
      id: 'st-guts',
      img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=150&auto=format&fit=crop&q=80',
      label: 'Guts Sketch',
      x: '25%',
      y: '15%',
      rotate: -8,
      scale: 1.25,
    },
    {
      id: 'st-bluebird',
      img: 'https://images.unsplash.com/photo-1484712401471-05c7215834eb?w=150&auto=format&fit=crop&q=80',
      label: 'Blue Mascot',
      x: '45%',
      y: '6%',
      rotate: 5,
      scale: 1,
    },
    {
      id: 'st-gwen',
      img: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=150&auto=format&fit=crop&q=80',
      label: 'Spider Gwen',
      x: '62%',
      y: '8%',
      rotate: -12,
      scale: 1.2,
    },
    {
      id: 'st-puppet',
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=150&auto=format&fit=crop&q=80',
      label: 'Puppet',
      x: '82%',
      y: '10%',
      rotate: 18,
      scale: 1.1,
    },
    {
      id: 'st-sasuke',
      img: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=150&auto=format&fit=crop&q=80',
      label: 'Sasuke',
      x: '8%',
      y: '48%',
      rotate: -5,
      scale: 1.15,
    },
    {
      id: 'st-maki',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      label: 'Maki',
      x: '46%',
      y: '45%',
      rotate: 15,
      scale: 1.1,
    },
    {
      id: 'st-mikasa',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      label: 'Mikasa',
      x: '65%',
      y: '46%',
      rotate: -8,
      scale: 1.2,
    },
    {
      id: 'st-sadgirl',
      img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
      label: 'Blackhair Girl',
      x: '80%',
      y: '48%',
      rotate: 10,
      scale: 1.05,
    },
    {
      id: 'st-kurapika',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      label: 'Blonde Sketch',
      x: '7%',
      y: '70%',
      rotate: -15,
      scale: 1.15,
    },
    {
      id: 'st-android',
      img: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=150&auto=format&fit=crop&q=80',
      label: 'Android Robot',
      x: '26%',
      y: '72%',
      rotate: 5,
      scale: 1.2,
    },
    {
      id: 'st-mikey',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      label: 'Mikey',
      x: '48%',
      y: '70%',
      rotate: -8,
      scale: 1.1,
    },
    {
      id: 'st-slasher',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      label: 'Slasher',
      x: '70%',
      y: '72%',
      rotate: 12,
      scale: 1.25,
    },
  ];

  const handleScrollToWall = () => {
    const el = document.getElementById('the-wall');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="misc" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className={`mb-16 ${isUrdu ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {isUrdu ? "متفرق" : "Misc"}
          </h2>
          <div className="h-1.5 w-16 bg-pink-500 mt-2 rounded-full" />
        </div>

        {/* Sticker Canvas Container */}
        <div 
          ref={constraintsRef}
          className="relative h-[620px] md:h-[680px] w-full rounded-3xl bg-slate-50 dark:bg-slate-900/10 border border-slate-200/50 dark:border-slate-800/60 overflow-hidden shadow-xs cursor-grab active:cursor-grabbing select-none"
          style={{
            backgroundImage: `radial-gradient(#ec4899 0.75px, transparent 0.75px), radial-gradient(#ec4899 0.75px, #f8fafc 0.75px)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 15px 15px',
          }}
        >
          {/* Subtle instruction label */}
          <div className="absolute top-4 right-6 text-[10px] font-mono tracking-wider font-semibold text-pink-500/50 uppercase flex items-center gap-1.5 pointer-events-none">
            <Sparkles className="h-3 w-3" />
            <span>Interactive Sticker Board (Draggable)</span>
          </div>

          {/* Render scattered draggable stickers */}
          {stickers.map((sticker) => (
            <motion.div
              key={sticker.id}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.15}
              whileDrag={{ scale: 1.3, zIndex: 50, rotate: 0 }}
              initial={{ 
                x: 0, 
                y: 0, 
                left: sticker.x, 
                top: sticker.y, 
                rotate: sticker.rotate 
              }}
              className="absolute cursor-grab active:cursor-grabbing flex flex-col items-center justify-center p-1.5 bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-800 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.12)] hover:shadow-pink-500/10 hover:border-pink-500/20 transition-all duration-200"
              style={{
                width: '76px',
                height: '76px',
              }}
            >
              {sticker.isText ? (
                <div className={`w-full h-full rounded-xl flex items-center justify-center ${sticker.bg}`}>
                  <span className={sticker.textClass}>
                    {sticker.content}
                  </span>
                </div>
              ) : (
                <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-850 relative group">
                  <img
                    src={sticker.img}
                    alt={sticker.label}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </motion.div>
          ))}

          {/* Pain's Speech Bubble (As shown in the image, positioned near the middle) */}
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            whileDrag={{ scale: 1.1, zIndex: 50 }}
            initial={{ left: '22%', top: '48%', rotate: -2 }}
            className="absolute cursor-grab active:cursor-grabbing p-4 bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-800 rounded-3xl shadow-[5px_5px_15px_rgba(0,0,0,0.12)] max-w-[210px] flex flex-col gap-1 text-left"
          >
            <p className="text-[11px] leading-relaxed text-slate-800 dark:text-slate-100 font-sans font-medium">
              痛みを知らぬ者に、本当の平和は分からん
            </p>
            <span className="text-[9px] font-mono font-bold text-pink-500 block text-right mt-1">
              — Pain
            </span>
          </motion.div>

          {/* Floating Pill Button linking back to the visitor wall */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <button
              onClick={handleScrollToWall}
              className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-pink-500 hover:border-pink-500/20 shadow-lg font-sans font-semibold text-xs transition-all cursor-pointer hover:scale-103 active:scale-97"
            >
              <span>📝</span>
              <span className="font-bold">wanna leave your mark?</span>
              <span className="text-pink-500 dark:text-pink-400 group-hover:underline">pin something on the visitor wall →</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
