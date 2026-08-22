import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { TranslationDict } from '../types';

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavToLegal = (page: 'privacy' | 'terms') => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    if (setActiveSection) {
      setActiveSection(page);
    }
    window.history.pushState(null, '', `/${language}/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    onClick={() => handleScrollTo('projects')}
                    className="text-xs font-sans font-semibold text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollTo('blog')}
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
                    href={`/${language}/privacy`}
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
                    href={`/${language}/terms`}
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
