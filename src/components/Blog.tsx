import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  X,
  BookOpen,
  ArrowLeft,
  Rss,
  Check,
  Bot,
  Cpu,
  Layers,
  Server
} from 'lucide-react';
import { BlogPost, TranslationDict } from '../types';
import { blogPostsData } from '../data/portfolioData';

interface BlogProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage: (page: any) => void;
  setActiveSection: (sec: string) => void;
}

const articleVisuals = {
  'flutter-mcp-server-2026': {
    icon: Server,
    gradient: 'from-emerald-950 via-slate-950 to-cyan-950',
    accent: 'text-emerald-300',
    label: 'MCP + AI Tools'
  },
  'flutter-clean-architecture-2026': {
    icon: Layers,
    gradient: 'from-blue-950 via-slate-950 to-cyan-950',
    accent: 'text-cyan-300',
    label: 'Clean Architecture'
  },
  'add-ai-flutter-app-2026': {
    icon: Bot,
    gradient: 'from-amber-950 via-zinc-950 to-fuchsia-950',
    accent: 'text-amber-300',
    label: 'AI Integration'
  },
  'flutter-state-management-2026': {
    icon: Layers,
    gradient: 'from-emerald-950 via-slate-950 to-teal-950',
    accent: 'text-emerald-300',
    label: 'State Management'
  },
  'build-ai-agent-flutter-app-2026': {
    icon: Cpu,
    gradient: 'from-violet-950 via-slate-950 to-cyan-950',
    accent: 'text-violet-300',
    label: 'AI Agents'
  }
};

export default function Blog({ t, setCurrentPage, setActiveSection }: BlogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = ['All', ...Array.from(new Set(blogPostsData.flatMap((post) => [post.category, ...post.tags])))]
    .slice(0, 10);

  const filteredPosts = blogPostsData.filter((post) => {
    const haystack = `${post.title} ${post.summary} ${post.category} ${post.tags.join(' ')}`.toLowerCase();
    const matchesSearch = haystack.includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory || post.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const dedicatedPages: Record<string, { page: string; path: string }> = {
    'flutter-mcp-server-2026': {
      page: 'flutter-mcp-server',
      path: '/blog/flutter-mcp-server-2026'
    },
    'flutter-state-management-2026': {
      page: 'flutter-state-management',
      path: '/blog/flutter-state-management-2026'
    },
    'flutter-clean-architecture-2026': {
      page: 'flutter-clean-architecture',
      path: '/blog/flutter-clean-architecture-2026'
    },
    'add-ai-flutter-app-2026': {
      page: 'add-ai-flutter-app',
      path: '/blog/add-ai-flutter-app-2026'
    },
    'build-ai-agent-flutter-app-2026': {
      page: 'build-ai-agent-flutter-app',
      path: '/blog/build-ai-agent-flutter-app-2026'
    }
  };

  const openPost = (post: BlogPost) => {
    const target = dedicatedPages[post.id];
    if (target) {
      setCurrentPage(target.page);
      setActiveSection('blog');
      window.history.pushState(null, '', target.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setActivePost(post);
  };

  const renderBlogContent = (content: string) => {
    return content.split('\n\n').map((sec, idx) => {
      if (sec.startsWith('## ')) {
        return <h3 key={idx} className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mt-8 mb-4">{sec.replace('## ', '')}</h3>;
      }
      if (sec.startsWith('### ')) {
        return <h4 key={idx} className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-6 mb-3">{sec.replace('### ', '')}</h4>;
      }
      if (sec.startsWith('```')) {
        const lines = sec.split('\n');
        const lang = lines[0].replace('```', '');
        const code = lines.slice(1, -1).join('\n');
        return (
          <div key={idx} className="relative group my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="bg-slate-100 dark:bg-slate-950 px-4 py-2 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{lang || 'code'}</span>
              <button onClick={() => handleCopyCode(code)} className="text-[10px] font-mono font-bold text-pink-600 dark:text-pink-400 hover:underline cursor-pointer flex items-center gap-1">
                {copiedCode ? <Check className="h-3 w-3 text-emerald-500" /> : null}
                <span>{copiedCode ? 'COPIED!' : 'COPY'}</span>
              </button>
            </div>
            <pre className="p-4 bg-slate-50 dark:bg-slate-950/40 font-mono text-xs text-slate-700 dark:text-slate-300 overflow-x-auto leading-relaxed">
              <code>{code}</code>
            </pre>
          </div>
        );
      }
      if (sec.startsWith('* ')) {
        return (
          <ul key={idx} className="space-y-2.5 my-4 pl-6 list-disc text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {sec.split('\n').map((item, itemIdx) => <li key={itemIdx}>{item.replace('* ', '')}</li>)}
          </ul>
        );
      }
      return <p key={idx} className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{sec}</p>;
    });
  };

  const goBack = () => {
    setCurrentPage('portfolio');
    setActiveSection('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ArticleVisual = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => {
    const [coverFailed, setCoverFailed] = useState(false);
    const visual = articleVisuals[post.id as keyof typeof articleVisuals] ?? Object.values(articleVisuals)[0];
    const Icon = visual.icon;

    if (!coverFailed) {
      return (
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={`/assets/blog-${post.id}.png`}
            alt={post.title}
            loading="lazy"
            onError={() => setCoverFailed(true)}
            className="h-auto w-full object-contain"
          />
        </div>
      );
    }

    return (
      <div className={`relative overflow-hidden bg-gradient-to-br ${visual.gradient} ${featured ? 'min-h-[320px] lg:min-h-[390px]' : 'h-48'} flex items-center justify-center`}>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.35),transparent_35%),radial-gradient(circle_at_75%_70%,rgba(34,211,238,0.26),transparent_36%)]" />
        <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent rotate-[-12deg]" />
        <div className="relative rounded-2xl bg-black/45 border border-white/10 shadow-2xl p-5 text-center backdrop-blur">
          <Icon className={`h-12 w-12 mx-auto mb-4 ${visual.accent}`} />
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 mb-2">{visual.label}</div>
          <div className="text-sm font-black text-white max-w-[210px] leading-tight">{post.title}</div>
        </div>
      </div>
    );
  };

  const PostMeta = ({ post }: { post: BlogPost }) => (
    <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-500 dark:text-zinc-500 font-semibold">
      <span className="px-2 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">{post.category}</span>
      <span>{post.date}</span>
      <span>{post.readTime}</span>
    </div>
  );

  return (
    <div id="blog" className="pt-28 pb-24 bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white min-h-screen overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <button onClick={goBack} className="group inline-flex items-center gap-2 text-slate-500 dark:text-zinc-500 hover:text-pink-500 dark:hover:text-pink-400 text-xs font-mono mb-16 transition-colors cursor-pointer">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </button>

        <section className="text-center mb-14">
          <p className="text-[10px] font-mono uppercase tracking-[0.45em] text-pink-500 mb-5">The Journal</p>
          <h1 className="font-serif text-5xl md:text-7xl font-black tracking-tight">
            Thoughts & <span className="italic text-pink-500">Ideas</span>
          </h1>
        </section>

        <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-pink-500 text-white border-pink-500'
                    : 'bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-zinc-700'
                }`}
              >
                {cat === 'All' ? `All Posts (${blogPostsData.length})` : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-zinc-500" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search"
                className="w-40 md:w-56 pl-9 pr-3 py-2 rounded-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-pink-500"
              />
            </div>
            <button className="h-9 w-9 rounded-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 flex items-center justify-center">
              <Rss className="h-4 w-4" />
            </button>
          </div>
        </section>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 border border-slate-200 dark:border-zinc-900 rounded-3xl">
            <BookOpen className="h-10 w-10 text-slate-300 dark:text-zinc-700 mx-auto mb-3" />
            <p className="text-slate-500 dark:text-zinc-500 text-sm">No articles match your search or filters.</p>
          </div>
        )}

        {featuredPost && (
          <motion.article
            whileHover={{ y: -4 }}
            onClick={() => openPost(featuredPost)}
            className="grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-900 bg-white dark:bg-black hover:border-slate-300 dark:hover:border-zinc-800 transition-all cursor-pointer mb-10 shadow-lg dark:shadow-none"
          >
            <ArticleVisual post={featuredPost} featured />
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <PostMeta post={featuredPost} />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mt-5 mb-5 group-hover:text-pink-400">
                {featuredPost.title}
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                {featuredPost.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {featuredPost.tags.slice(0, 6).map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-[10px] text-slate-500 dark:text-zinc-400 font-mono">{tag}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-pink-400">
                Read article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </motion.article>
        )}

        <div className="grid md:grid-cols-2 gap-7 max-w-4xl">
          {otherPosts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -4 }}
              onClick={() => openPost(post)}
              className="overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-900 bg-white dark:bg-black hover:border-slate-300 dark:hover:border-zinc-800 transition-all cursor-pointer shadow-lg dark:shadow-none"
            >
              <ArticleVisual post={post} />
              <div className="p-6">
                <PostMeta post={post} />
                <h3 className="text-xl font-black leading-tight mt-4 mb-3 text-slate-900 dark:text-white">{post.title}</h3>
                <p className="text-sm text-slate-500 dark:text-zinc-500 leading-relaxed line-clamp-2 mb-5">{post.summary}</p>
                <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500">{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {activePost && (
            <div className="fixed inset-0 z-50 flex items-center justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActivePost(null)}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                className="relative bg-white dark:bg-slate-900 w-full max-w-2xl h-full shadow-2xl flex flex-col z-10 border-l border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
              >
                <div className="sticky top-0 p-4 border-b border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setActivePost(null)} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                      <X className="h-4 w-4" />
                    </button>
                    <span className="text-xs font-semibold text-slate-400">Technical Post</span>
                  </div>
                  <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-wider rounded-full bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 uppercase">
                    {activePost.category}
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto p-6 md:p-10">
                  <div className="space-y-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 font-semibold">
                      <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-pink-500" /> {activePost.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-pink-500" /> {activePost.readTime}</span>
                      <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5 text-emerald-500" /> {activePost.views} views</span>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">{activePost.title}</h1>
                  </div>
                  <div>{renderBlogContent(activePost.content)}</div>
                </div>

                <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 text-xs font-mono text-slate-400 flex items-center justify-between px-6">
                  <span>Written by <span className="font-semibold text-slate-600 dark:text-slate-300">Awais Ahmad</span></span>
                  <span>{activePost.category}</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
