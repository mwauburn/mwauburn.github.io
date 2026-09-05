import type { MouseEvent as ReactMouseEvent } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { TranslationDict } from '../types';

// Tracks whether preferredSource.init() has been called (call once).
let preferredSourceInitialized = false;

interface FooterProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage?: (page: 'portfolio' | 'blog' | 'projects' | 'contact' | 'terms' | 'privacy') => void;
  setActiveSection?: (sec: string) => void;
}

export default function Footer({ language, setCurrentPage, setActiveSection }: FooterProps) {
  const isUrdu = language === 'ur';

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (id: string) => {
    if (setCurrentPage) {
      setCurrentPage('portfolio');
    }
    window.history.pushState(null, '', id === 'home' ? '/' : `/#${id}`);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  };

  const handleNavToPage = (page: 'blog' | 'projects' | 'contact') => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    if (setActiveSection) {
      setActiveSection(page);
    }
    window.history.pushState(null, '', `/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavToLegal = (page: 'privacy' | 'terms') => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    if (setActiveSection) {
      setActiveSection(page);
    }
    window.history.pushState(null, '', `/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Google Preferred Sources (advanced JS integration).
  // Opens Google's native "Add as Preferred Source" dialog for this domain.
  // Falls back to the ?q= deeplink if the publisher.js library hasn't loaded.
  const handlePreferredSourceClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    const w = window as unknown as {
      PREFERRED_SOURCE?: {
        api?: {
          init?: (options: { theme?: string; lang?: string }) => void;
          addPreferredSource?: () => void;
        };
      };
    };
    const api = w.PREFERRED_SOURCE?.api;
    if (api?.addPreferredSource) {
      e.preventDefault();
      if (!preferredSourceInitialized && api.init) {
        api.init({ theme: 'dark' });
        preferredSourceInitialized = true;
      }
      api.addPreferredSource();
    }
    // Otherwise let the browser follow the deeplink href as fallback.
  };

  return (
    <footer
      id="footer-section"
      className="bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300 pt-16 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200/40 dark:border-slate-800/60">
          
          {/* Left: Islamic Quote (5 columns) */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans italic">
              {isUrdu 
                ? "{ اور کہو کہ عمل کرو، عنقریب اللہ تمہارے عمل کو دیکھے گا اور اس کا رسول اور مومنین بھی۔ }"
                : "{ Work, for Allah will observe your deeds, and so will His Messenger and the believers. }"
              }
            </p>
            <a
              href="https://www.google.com/preferences/source?q=awaisahmd.me"
              target="_blank"
              rel="noreferrer noopener"
              title="Add Awais Ahmad as a Preferred Source on Google"
              onClick={handlePreferredSourceClick}
              className="group inline-flex px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-850 text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-500/30 items-center gap-1.5 transition-all cursor-pointer text-[10px] font-mono tracking-wider font-semibold uppercase"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.98 11.98 0 0 0 12 0 11.99 11.99 0 0 0 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
                />
              </svg>
              <span>Make me preferred on Google</span>
            </a>
          </div>

          {/* Empty column spacer (1 column) */}
          <div className="hidden md:block md:col-span-1" />

          {/* Right: Links grids (6 columns total) */}
          <div className="md:col-span-6 grid grid-cols-3 gap-6">
            
            {/* Links Block */}
            <div className="space-y-3.5">
              <h4 className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-400">
                Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleScrollTo('home')}
                    className="text-xs font-sans font-semibold text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavToPage('projects')}
                    className="text-xs font-sans font-semibold text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavToPage('blog')}
                    className="text-xs font-sans font-semibold text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollTo('the-wall')}
                    className="text-xs font-sans font-semibold text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    The Wall
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Block */}
            <div className="space-y-3.5">
              <h4 className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-400">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavToLegal('privacy');
                    }}
                    className="text-xs font-sans font-semibold text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavToLegal('terms');
                    }}
                    className="text-xs font-sans font-semibold text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Block */}
            <div className="space-y-3.5">
              <h4 className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-400">
                Social
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/iawaisahmd"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                  title="GitHub"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/iawaisahmd"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
                <a
                  href="mailto:iawaisahmd@gmail.com"
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                  title="Mail"
                >
                  <Mail className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-slate-400 dark:text-slate-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {isUrdu ? 'اویس احمد۔' : 'Awais Ahmad.'} All rights reserved.
          </p>

          <button
            onClick={handleScrollToTop}
            className="group px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-850 text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 flex items-center gap-1 transition-all cursor-pointer text-[10px] font-mono tracking-wider font-semibold uppercase"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
