import { useState, useEffect, SVGProps } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Globe, Menu, X, Command, Eye, FolderCode, ArrowRight, CornerDownLeft, Briefcase, Cpu } from 'lucide-react';
import { Language, TranslationDict } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  currentPage: 'portfolio' | 'blog' | 'projects' | 'contact' | 'terms' | 'privacy';
  setCurrentPage: (page: 'portfolio' | 'blog' | 'projects' | 'contact' | 'terms' | 'privacy') => void;
  t: TranslationDict;
}

export default function Header({
  language,
  setLanguage,
  darkMode,
  setDarkMode,
  activeSection,
  setActiveSection,
  currentPage,
  setCurrentPage,
  t
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Track scrolling to add solid styling if needed
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for keyboard shortcut (CMD+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'projects', label: t.navProjects },
    { id: 'blog', label: t.navBlog },
    { id: 'the-wall', label: t.navWall },
    { id: 'contact', label: t.navContact }
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setCommandPaletteOpen(false);
    
    if (id === 'blog') {
      setCurrentPage('blog');
      setActiveSection('blog');
      window.history.pushState(null, '', '#blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'projects') {
      setCurrentPage('projects');
      setActiveSection('projects');
      window.history.pushState(null, '', '#projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'contact') {
      setCurrentPage('contact');
      setActiveSection('contact');
      window.history.pushState(null, '', '#contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentPage !== 'portfolio') {
        setCurrentPage('portfolio');
        setActiveSection(id);
        window.history.pushState(null, '', `#${id}`);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 80);
      } else {
        setActiveSection(id);
        window.history.pushState(null, '', `#${id}`);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const commandItems = [
    { id: 'toggle-lang', name: language === 'en' ? 'Switch to Urdu (اردو)' : 'انگریزی میں تبدیل کریں (English)', icon: Globe, action: () => { setLanguage(language === 'en' ? 'ur' : 'en'); setCommandPaletteOpen(false); } },
    { id: 'toggle-dark', name: darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode', icon: darkMode ? Sun : Moon, action: () => { setDarkMode(!darkMode); setCommandPaletteOpen(false); } },
    { id: 'home', name: 'Go to Home Section', icon: Eye, action: () => handleNavClick('home') },
    { id: 'about', name: 'Go to About Me Section', icon: Eye, action: () => handleNavClick('about') },
    { id: 'experience', name: 'Go to Professional Experience Section', icon: Briefcase, action: () => handleNavClick('experience') },
    { id: 'skills', name: 'Go to Technical Skills Section', icon: Cpu, action: () => handleNavClick('skills') },
    { id: 'projects', name: 'View My Projects', icon: FolderCode, action: () => handleNavClick('projects') },
    { id: 'blog', name: 'Read My Technical Blog', icon: MessageSquareIcon, action: () => handleNavClick('blog') },
    { id: 'the-wall', name: 'Write on Guestbook (The Wall)', icon: MessageSquareIcon, action: () => handleNavClick('the-wall') },
    { id: 'contact', name: 'Get in Touch (Contact Form)', icon: ArrowRight, action: () => handleNavClick('contact') }
  ];

  const filteredCommands = commandItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header
        id="navbar-header"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none py-5"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo / Monogram (Squiggle) */}
          <button
            id="logo-brand"
            onClick={() => handleNavClick('home')}
            className="group pointer-events-auto flex items-center gap-1.5 cursor-pointer bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/30 dark:border-slate-800/30 px-3.5 py-2.5 rounded-2xl shadow-sm hover:scale-105 active:scale-95 transition-all"
            title="Awais Ahmad portfolio"
          >
            {/* Elegant aw Squiggle Monogram */}
            <svg
              viewBox="0 0 42 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-9 text-slate-850 dark:text-white group-hover:text-pink-500 transition-colors"
            >
              <path
                d="M4 13C6.5 6.5 11 3.5 14.5 9.5C17.5 14.5 20.5 15.5 23 9.5C25.2 4.5 28.5 5.8 32.5 13"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="34" cy="13" r="1.5" fill="currentColor" />
            </svg>
          </button>

          {/* Desktop Floating Pill Navigation Bar */}
          <nav
            id="desktop-nav"
            className="hidden md:flex pointer-events-auto items-center bg-white/80 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/60 px-5 py-1.5 rounded-full shadow-md shadow-slate-100/5 transition-colors"
          >
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="relative">
                    <button
                      id={`nav-item-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-4 py-2 font-sans text-sm tracking-wide transition-all cursor-pointer ${
                        isActive
                          ? 'text-slate-900 dark:text-white font-semibold scale-105'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
                      }`}
                    >
                      {item.label}

                      {/* Glowing pink dot/line at the top, perfectly matching the awrs.me design */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicatorBar"
                          className="absolute -top-[14px] left-1/2 -translate-x-1/2 h-1 w-6 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Controls: Language Switcher, Theme Toggle & ⌘ Command Palette */}
          <div className="flex pointer-events-auto items-center gap-2 md:gap-3">
            {/* Desktop Language Switcher Button */}
            <button
              id="desktop-lang-toggle-btn"
              onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
              className="hidden md:flex h-11 px-3.5 items-center justify-center gap-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/60 shadow-md shadow-slate-100/5 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-pink-500 hover:border-pink-500/50 cursor-pointer transition-all hover:scale-105 active:scale-95"
              title={language === 'en' ? 'Switch to Urdu (اردو)' : 'Switch to English'}
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'UR' : 'EN'}</span>
            </button>

            {/* Desktop Light/Dark Mode Toggle Button */}
            <button
              id="desktop-theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/60 shadow-md shadow-slate-100/5 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/50 cursor-pointer transition-all hover:scale-105 active:scale-95"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="h-4.5 w-4.5 text-amber-400" /> : <Moon className="h-4.5 w-4.5 text-indigo-500" />}
            </button>

            {/* Desktop Command Palette Button */}
            <button
              id="cmd-palette-trigger"
              onClick={() => setCommandPaletteOpen(true)}
              className="hidden md:flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/60 shadow-md shadow-slate-100/5 text-slate-700 dark:text-slate-300 hover:text-pink-500 hover:border-pink-500/50 cursor-pointer transition-all hover:scale-105 active:scale-95"
              title="Command Palette (⌘K)"
            >
              <Command className="h-4.5 w-4.5" />
            </button>

            {/* Mobile Nav Drawer toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden h-11 w-11 items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/60 shadow-sm text-slate-700 dark:text-slate-300 cursor-pointer"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu-drawer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden pointer-events-auto mx-4 mt-3 border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl"
            >
              <ul className="px-5 py-5 space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      id={`mobile-nav-item-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        activeSection === item.id
                          ? 'bg-pink-500 text-white shadow-md shadow-pink-200/50'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/60'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="pt-3 border-t border-slate-150 dark:border-slate-850 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                    className="flex-1 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-xs font-mono font-bold flex items-center justify-center gap-1.5 cursor-pointer text-slate-650 dark:text-slate-300"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>{language === 'en' ? 'URDU (اردو)' : 'ENGLISH'}</span>
                  </button>

                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-xs flex items-center justify-center cursor-pointer text-slate-650 dark:text-slate-300"
                  >
                    {darkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4 text-indigo-500" />}
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Command Palette Modal overlay */}
      <AnimatePresence>
        {commandPaletteOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCommandPaletteOpen(false)}
              className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.23, ease: 'easeOut' }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-slate-200/50 dark:border-slate-800/50">
                <Command className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Type a command or query..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-sm bg-transparent border-none text-slate-950 dark:text-white focus:outline-none placeholder-slate-400 font-sans"
                  autoFocus
                />
                <kbd className="hidden sm:inline-flex px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-[10px] text-slate-400 font-mono">
                  ESC
                </kbd>
              </div>

              <div className="flex-1 max-h-[320px] overflow-y-auto py-2">
                {filteredCommands.length === 0 ? (
                  <div className="text-center py-8 text-xs text-slate-400 font-mono">
                    No commands matched your query.
                  </div>
                ) : (
                  <ul className="px-2 space-y-0.5">
                    {filteredCommands.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={item.action}
                            className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-pink-500 hover:text-white flex items-center justify-between group transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <IconComponent className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                              <span className="font-sans font-semibold text-sm tracking-tight">{item.name}</span>
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 text-[10px] font-mono">
                              EXECUTE <CornerDownLeft className="h-3 w-3 inline" />
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

// Small icon helper
function MessageSquareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
