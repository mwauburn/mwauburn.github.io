import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, CheckCircle2, Trash2, Clock, Sparkles } from 'lucide-react';
import { TranslationDict, WallPost } from '../types';

interface TheWallProps {
  t: TranslationDict;
  language: 'en' | 'ur';
}

const COLORS = [
  {
    id: 'indigo',
    name: 'Indigo Velvet',
    classes: 'bg-indigo-50/70 dark:bg-indigo-950/20 text-indigo-900 dark:text-indigo-100 border-indigo-200/60 dark:border-indigo-900/30 shadow-indigo-100/10',
    dot: 'bg-indigo-500'
  },
  {
    id: 'rose',
    name: 'Rose Quartz',
    classes: 'bg-rose-50/70 dark:bg-rose-950/20 text-rose-900 dark:text-rose-100 border-rose-200/60 dark:border-rose-900/30 shadow-rose-100/10',
    dot: 'bg-rose-500'
  },
  {
    id: 'amber',
    name: 'Amber Honey',
    classes: 'bg-amber-50/70 dark:bg-amber-950/20 text-amber-900 dark:text-amber-100 border-amber-200/60 dark:border-amber-900/30 shadow-amber-100/10',
    dot: 'bg-amber-500'
  },
  {
    id: 'emerald',
    name: 'Emerald Sea',
    classes: 'bg-emerald-50/70 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-100 border-emerald-200/60 dark:border-emerald-900/30 shadow-emerald-100/10',
    dot: 'bg-emerald-500'
  },
  {
    id: 'sky',
    name: 'Sky Azure',
    classes: 'bg-sky-50/70 dark:bg-sky-950/20 text-sky-900 dark:text-sky-100 border-sky-200/60 dark:border-sky-900/30 shadow-sky-100/10',
    dot: 'bg-sky-500'
  },
  {
    id: 'violet',
    name: 'Violet Dream',
    classes: 'bg-violet-50/70 dark:bg-violet-950/20 text-violet-900 dark:text-violet-100 border-violet-200/60 dark:border-violet-900/30 shadow-violet-100/10',
    dot: 'bg-violet-500'
  }
];

const EMOJIS = ['🚀', '🔥', '💻', '🎨', '✍️', '❤️', '🎉', '🌟', '💡', '💯', '🍕', '☕', '⭐'];

export default function TheWall({ t, language }: TheWallProps) {
  const isUrdu = language === 'ur';
  const [posts, setPosts] = useState<WallPost[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedColor, setSelectedColor] = useState(COLORS[0].classes);
  const [selectedEmoji, setSelectedEmoji] = useState('🚀');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isAdmin, setIsAdmin] = useState(false);

  // Fetch wall posts
  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/wall');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (error) {
      console.error('Error fetching wall posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();

    // Check admin authentication in localStorage
    const checkAdmin = () => {
      const auth = localStorage.getItem('isAdminAuthenticated');
      setIsAdmin(auth === 'true');
    };

    checkAdmin();
    window.addEventListener('storage', checkAdmin);
    // Interval check to react to logins immediately
    const interval = setInterval(checkAdmin, 1000);

    return () => {
      window.removeEventListener('storage', checkAdmin);
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/wall', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          message,
          color: selectedColor,
          emoji: selectedEmoji
        })
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setMessage('');
        fetchPosts();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting wall post:', error);
      setStatus('error');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm(isUrdu ? 'کیا آپ اس پوسٹ کو حذف کرنا چاہتے ہیں؟' : 'Are you sure you want to delete this post?')) return;

    try {
      const res = await fetch(`/api/wall/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Error deleting wall post:', error);
    }
  };

  // Helper to format date
  const formatDateString = (isoString: string) => {
    try {
      const date = new Date(isoString);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleDateString(language === 'ur' ? 'ur-PK' : 'en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (e) {
      return '';
    }
  };

  return (
    <section id="the-wall" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-pink-100/30 dark:bg-pink-950/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full bg-indigo-100/30 dark:bg-indigo-950/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 dark:bg-pink-950/30 border border-pink-100 dark:border-pink-900/40 text-pink-600 dark:text-pink-400 text-xs font-mono mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>GUESTBOOK CANVAS</span>
          </div>
          <h2 className={`text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 ${isUrdu ? 'font-sans' : ''}`}>
            {t.wallTitle}
          </h2>
          <p className={`text-slate-600 dark:text-slate-400 text-lg ${isUrdu ? 'font-sans' : ''}`}>
            {t.wallSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Side - 4 Columns */}
          <div className="lg:col-span-5 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm">
            <h3 className={`text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2 ${isUrdu ? 'font-sans' : ''}`}>
              <MessageSquare className="h-5 w-5 text-pink-500" />
              <span>{isUrdu ? 'دیوار پر لکھیں' : 'Sign the Wall'}</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 ${isUrdu ? 'font-sans text-right' : ''}`}>
                  {isUrdu ? 'آپ کا نام' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  maxLength={50}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isUrdu ? 'جیسے: علی رضا' : 'e.g. Ali Raza'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 text-sm transition-all"
                />
              </div>

              <div>
                <label className={`block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 ${isUrdu ? 'font-sans text-right' : ''}`}>
                  {isUrdu ? 'آپ کا پیغام' : 'Your Message'}
                </label>
                <textarea
                  required
                  rows={4}
                  maxLength={300}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={isUrdu ? 'دیوار پر چھوڑنے کے لیے کچھ پیارا لکھیں...' : 'Write something beautiful to leave on the wall...'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 text-sm transition-all resize-none"
                />
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] font-mono text-slate-400">
                    {message.length}/300
                  </span>
                </div>
              </div>

              {/* Emoji Selector */}
              <div>
                <label className={`block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 ${isUrdu ? 'font-sans text-right' : ''}`}>
                  {isUrdu ? 'اسٹیکر / ایموجی' : 'Pick an Emoji'}
                </label>
                <div className="flex flex-wrap gap-2 p-2 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                  {EMOJIS.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`text-xl p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer ${
                        selectedEmoji === emoji ? 'bg-pink-50 dark:bg-pink-950 border border-pink-200 dark:border-pink-850 scale-110' : 'border border-transparent'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Color Selector */}
              <div>
                <label className={`block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 ${isUrdu ? 'font-sans text-right' : ''}`}>
                  {isUrdu ? 'کارڈ کا رنگ' : 'Select Card Color'}
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {COLORS.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => setSelectedColor(color.classes)}
                      className={`h-8 rounded-lg border flex items-center justify-center cursor-pointer relative overflow-hidden transition-transform hover:scale-105 ${
                        selectedColor === color.classes ? 'border-slate-900 dark:border-white ring-2 ring-pink-500/30' : 'border-slate-200 dark:border-slate-800'
                      }`}
                      title={color.name}
                    >
                      <div className={`w-full h-full ${color.classes.split(' ')[0]} flex items-center justify-center`}>
                        <div className={`h-2.5 w-2.5 rounded-full ${color.dot}`} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 px-4 rounded-xl bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white font-sans font-semibold text-sm shadow-md shadow-pink-200 dark:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>{isUrdu ? 'بھیجا جا رہا ہے...' : 'Posting...'}</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>{t.wallSubmit}</span>
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-200 flex items-center gap-2 text-xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className={isUrdu ? 'font-sans' : ''}>{t.wallSuccess}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Wall Showcase - 7 Columns */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                {isUrdu ? `دیوار پر کل پیغامات: ${posts.length}` : `TOTAL INSCRIPTIONS: ${posts.length}`}
              </span>
              {isAdmin && (
                <span className="text-[10px] bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 px-2.5 py-1 rounded-full font-mono uppercase tracking-wider font-semibold">
                  Moderator Mode
                </span>
              )}
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-16 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/10">
                <p className="text-sm text-slate-400 font-mono mb-2">
                  {isUrdu ? 'دیوار ابھی خالی ہے' : 'The wall is completely bare.'}
                </p>
                <p className="text-xs text-slate-400">
                  {isUrdu ? 'پہلا خوبصورت پیغام لکھ کر دستخط کریں!' : 'Be the very first to sign this wall!'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                  {posts.map((post, idx) => (
                    <motion.div
                      key={post.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
                      className={`p-5 rounded-2xl border flex flex-col justify-between shadow-sm relative group overflow-hidden ${post.color}`}
                    >
                      {/* Emoji Badge background details */}
                      <span className="absolute -right-2 -bottom-2 text-6xl opacity-10 pointer-events-none select-none group-hover:scale-110 transition-transform duration-300">
                        {post.emoji}
                      </span>

                      <div>
                        <div className="flex justify-between items-start gap-2 mb-3">
                          <div className="flex items-center gap-1.5">
                            <span className="text-lg">{post.emoji}</span>
                            <span className="font-sans font-bold text-sm tracking-tight">
                              {post.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono opacity-50 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatDateString(post.date)}
                          </span>
                        </div>
                        <p className="text-xs font-sans leading-relaxed break-words relative z-10 whitespace-pre-line opacity-95">
                          {post.message}
                        </p>
                      </div>

                      {/* Deletion control for Moderator */}
                      {isAdmin && (
                        <div className="mt-4 flex justify-end">
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="p-1.5 rounded-lg bg-red-100 dark:bg-red-950 hover:bg-red-200 dark:hover:bg-red-900 text-red-600 dark:text-red-400 transition-colors cursor-pointer"
                            title="Delete inscription"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
