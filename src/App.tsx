import { useState, useEffect } from 'react';
import { translations } from './data/portfolioData';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import BlogPostPage from './components/BlogPostPage';
import ProjectsGallery from './components/ProjectsGallery';
import TheWall from './components/TheWall';
import Achievements from './components/Achievements';
import Contributions from './components/Contributions';
import Misc from './components/Misc';
import Connect from './components/Connect';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ContextMenu from './components/ContextMenu';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import ShukarDailyDetail from './components/ShukarDailyDetail';
import LuminaDetail from './components/LuminaDetail';
import PacksavvyDetail from './components/PacksavvyDetail';

const PAGE_PATHS: Record<string, string> = {
  blog: '/blog',
  projects: '/projects',
  contact: '/contact',
  terms: '/terms',
  privacy: '/privacy',
  'shukar-daily': '/apps/shukar-daily',
  lumina: '/apps/lumina',
  packsavvy: '/apps/packsavvy',
  'flutter-state-management': '/blog/flutter-state-management-2026',
  'flutter-clean-architecture': '/blog/flutter-clean-architecture-2026',
  'add-ai-flutter-app': '/blog/add-ai-flutter-app-2026',
  'build-ai-agent-flutter-app': '/blog/build-ai-agent-flutter-app-2026',
  'flutter-mcp-server': '/blog/flutter-mcp-server-2026'
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default dark theme
  });
  const [activeSection, setActiveSection] = useState<string>('home');
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'blog' | 'projects' | 'contact' | 'terms' | 'privacy' | 'shukar-daily' | 'lumina' | 'packsavvy' | 'flutter-state-management' | 'flutter-clean-architecture' | 'add-ai-flutter-app' | 'build-ai-agent-flutter-app' | 'flutter-mcp-server'>('portfolio');

  // Apply dark class to <html> element whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Sync state on hash/popstate and URL pathname
  useEffect(() => {
    const handleUrlChange = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;
      const urlParams = new URLSearchParams(window.location.search);
      const langQuery = urlParams.get('lang');

      // 1. Detect language from URL
      let detectedLang: 'en' | 'ur' = 'en';
      if (langQuery === 'ur') {
        detectedLang = 'ur';
      } else if (pathname.includes('/ur')) {
        detectedLang = 'ur';
      } else if (langQuery === 'en') {
        detectedLang = 'en';
      } else if (pathname.includes('/en')) {
        detectedLang = 'en';
      } else {
        detectedLang = language;
      }
      setLanguage(detectedLang);

      // 2. Detect page from URL
      if (pathname.endsWith('/terms') || pathname.includes('/terms') || hash === '#terms') {
        setCurrentPage('terms');
        setActiveSection('terms');
        window.scrollTo(0, 0);
      } else if (pathname.endsWith('/privacy') || pathname.includes('/privacy') || hash === '#privacy') {
        setCurrentPage('privacy');
        setActiveSection('privacy');
        window.scrollTo(0, 0);
      } else if (pathname.includes('/blog/flutter-state-management-2026') || hash === '#flutter-state-management-2026') {
        setCurrentPage('flutter-state-management');
        setActiveSection('blog');
        window.scrollTo(0, 0);
      } else if (pathname.includes('/blog/flutter-clean-architecture-2026') || hash === '#flutter-clean-architecture-2026') {
        setCurrentPage('flutter-clean-architecture');
        setActiveSection('blog');
        window.scrollTo(0, 0);
      } else if (pathname.includes('/blog/add-ai-flutter-app-2026') || hash === '#add-ai-flutter-app-2026') {
        setCurrentPage('add-ai-flutter-app');
        setActiveSection('blog');
        window.scrollTo(0, 0);
      } else if (pathname.includes('/blog/build-ai-agent-flutter-app-2026') || hash === '#build-ai-agent-flutter-app-2026') {
        setCurrentPage('build-ai-agent-flutter-app');
        setActiveSection('blog');
        window.scrollTo(0, 0);
      } else if (pathname.includes('/blog/flutter-mcp-server-2026') || hash === '#flutter-mcp-server-2026') {
        setCurrentPage('flutter-mcp-server');
        setActiveSection('blog');
        window.scrollTo(0, 0);
      } else if (hash === '#blog' || pathname === '/blog' || pathname.endsWith('/blog')) {
        setCurrentPage('blog');
        setActiveSection('blog');
        window.scrollTo(0, 0);
      } else if (hash === '#projects' || pathname === '/projects' || pathname.endsWith('/projects')) {
        setCurrentPage('projects');
        setActiveSection('projects');
        window.scrollTo(0, 0);
      } else if (hash === '#shukar-daily' || pathname === '/shukar-daily' || pathname.endsWith('/apps/shukar-daily') || pathname.endsWith('/shukar-daily')) {
        setCurrentPage('shukar-daily');
        setActiveSection('shukar-daily');
        window.scrollTo(0, 0);
      } else if (hash === '#lumina' || pathname === '/lumina' || pathname.endsWith('/apps/lumina') || pathname.endsWith('/lumina')) {
        setCurrentPage('lumina');
        setActiveSection('lumina');
        window.scrollTo(0, 0);
      } else if (hash === '#packsavvy' || pathname === '/packsavvy' || pathname.endsWith('/apps/packsavvy') || pathname.endsWith('/packsavvy')) {
        setCurrentPage('packsavvy');
        setActiveSection('packsavvy');
        window.scrollTo(0, 0);
      } else if (hash === '#contact' || pathname === '/contact' || pathname.endsWith('/contact')) {
        setCurrentPage('contact');
        setActiveSection('contact');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('portfolio');
        const sectionId = hash.replace('#', '') || 'home';
        setActiveSection(sectionId);
        if (sectionId !== 'home') {
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, [language]);

  // Sync URL when page changes (for clean shareable URLs)
  useEffect(() => {
    const targetPath = PAGE_PATHS[currentPage];
    if (targetPath && window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  }, [currentPage]);

  // Sync dark class on document root
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Section tracker on scroll
  useEffect(() => {
    if (currentPage === 'blog') {
      setActiveSection('blog');
      return;
    }
    if (currentPage === 'flutter-state-management') {
      setActiveSection('blog');
      return;
    }
    if (currentPage === 'flutter-clean-architecture') {
      setActiveSection('blog');
      return;
    }
    if (currentPage === 'add-ai-flutter-app') {
      setActiveSection('blog');
      return;
    }
    if (currentPage === 'build-ai-agent-flutter-app') {
      setActiveSection('blog');
      return;
    }
    if (currentPage === 'flutter-mcp-server') {
      setActiveSection('blog');
      return;
    }
    if (currentPage === 'projects') {
      setActiveSection('projects');
      return;
    }
    if (currentPage === 'shukar-daily') {
      setActiveSection('projects');
      return;
    }
    if (currentPage === 'lumina') {
      setActiveSection('projects');
      return;
    }
    if (currentPage === 'packsavvy') {
      setActiveSection('projects');
      return;
    }
    if (currentPage === 'contact') {
      setActiveSection('contact');
      return;
    }
    if (currentPage === 'terms') {
      setActiveSection('terms');
      return;
    }
    if (currentPage === 'privacy') {
      setActiveSection('privacy');
      return;
    }
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'the-wall', 'achievements', 'code-and-contributions', 'misc', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased font-sans flex flex-col justify-between">
      {/* Dynamic Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        t={t}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {currentPage === 'portfolio' ? (
          <>
            {/* Hero Banner Section */}
            <Hero t={t} language={language} />

            {/* Interactive Bento About Me Section */}
            <About t={t} language={language} />

            {/* Professional Experience Section */}
            <Experience t={t} language={language} />

            {/* Technical Skills Meters Section */}
            <Skills t={t} language={language} />

            {/* Projects Grid Section */}
            <Projects t={t} language={language} setCurrentPage={setCurrentPage} />

            {/* Interactive Guestbook Wall Section */}
            <TheWall t={t} language={language} />

            {/* Achievements Section */}
            <Achievements t={t} language={language} />

            {/* GitHub Heatmap and Metrics Section */}
            <Contributions t={t} language={language} />

            {/* Draggable Sticker Board Section */}
            <Misc t={t} language={language} />

            {/* Ready to Connect & Contact overlay Section */}
            <Connect t={t} language={language} setCurrentPage={setCurrentPage} />
          </>
        ) : currentPage === 'blog' ? (
          <Blog
            t={t}
            language={language}
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'flutter-state-management' ? (
          <BlogPostPage
            t={t}
            language={language}
            slug="flutter-state-management-2026"
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'flutter-clean-architecture' ? (
          <BlogPostPage
            t={t}
            language={language}
            slug="flutter-clean-architecture-2026"
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'add-ai-flutter-app' ? (
          <BlogPostPage
            t={t}
            language={language}
            slug="add-ai-flutter-app-2026"
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'build-ai-agent-flutter-app' ? (
          <BlogPostPage
            t={t}
            language={language}
            slug="build-ai-agent-flutter-app-2026"
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'flutter-mcp-server' ? (
          <BlogPostPage
            t={t}
            language={language}
            slug="flutter-mcp-server-2026"
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'projects' ? (
          <ProjectsGallery
            t={t}
            language={language}
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'shukar-daily' ? (
          <ShukarDailyDetail
            t={t}
            language={language}
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'lumina' ? (
          <LuminaDetail
            t={t}
            language={language}
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'packsavvy' ? (
          <PacksavvyDetail
            t={t}
            language={language}
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'terms' ? (
          <TermsOfUse
            t={t}
            language={language}
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : currentPage === 'privacy' ? (
          <PrivacyPolicy
            t={t}
            language={language}
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        ) : (
          <ContactPage
            t={t}
            language={language}
            setCurrentPage={setCurrentPage}
            setActiveSection={setActiveSection}
          />
        )}
      </main>

      {/* Footer Branding and Social panel */}
      <Footer 
        t={t} 
        language={language} 
        setCurrentPage={setCurrentPage}
        setActiveSection={setActiveSection}
      />

      {/* Global custom context menu */}
      <ContextMenu language={language} />
    </div>
  );
}
