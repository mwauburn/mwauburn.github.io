import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  ArrowLeft, 
  RefreshCw 
} from 'lucide-react';

interface ContextMenuProps {
  language: 'en' | 'ur';
}

export default function ContextMenu({ language }: ContextMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      // Prevent default right-click menu
      e.preventDefault();
      
      const menuWidth = 240;
      const menuHeight = 360;
      let x = e.clientX;
      let y = e.clientY;

      // Boundary check to prevent menu going off-screen
      if (x + menuWidth > window.innerWidth) {
        x = window.innerWidth - menuWidth - 8;
      }
      if (y + menuHeight > window.innerHeight) {
        y = window.innerHeight - menuHeight - 8;
      }

      // Safeguard negative coords
      if (x < 8) x = 8;
      if (y < 8) y = 8;

      setPosition({ x, y });
      setIsOpen(true);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      } else {
        // Also close menu when an option is clicked
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  // Actions
  const handleDownloadResume = () => {
    // Open standard resume download link
    window.open('/resume.pdf', '_blank');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const isUrdu = language === 'ur';

  return (
    <div
      ref={menuRef}
      style={{ top: position.y, left: position.x }}
      className="fixed z-[9999] w-[250px] bg-[#0c0e12]/95 backdrop-blur-md border border-[#1f2229]/80 rounded-2xl p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] font-sans text-left overflow-hidden text-slate-200 select-none"
    >
      {/* CONNECT Section */}
      <div className="space-y-0.5">
        <div className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
          {isUrdu ? "رابطہ کریں" : "CONNECT"}
        </div>
        
        {/* Download Resume */}
        <button
          onClick={handleDownloadResume}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800/60 hover:text-white transition-all text-left text-slate-300 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Download className="h-4 w-4 text-slate-400 shrink-0" />
            <span>{isUrdu ? "ریزیومے ڈاؤن لوڈ کریں" : "Download Resume"}</span>
          </div>
          <span className="bg-pink-950/40 text-pink-500 text-[9px] font-extrabold px-1.5 py-0.5 rounded-sm font-mono tracking-wider">
            PDF
          </span>
        </button>

        {/* GitHub */}
        <a
          href="https://github.com/iawaisahmd"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800/60 hover:text-white transition-all text-left text-slate-300 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Github className="h-4 w-4 text-slate-400 shrink-0" />
            <span>GitHub</span>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/iawaisahmd"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800/60 hover:text-white transition-all text-left text-slate-300 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Linkedin className="h-4 w-4 text-slate-400 shrink-0" />
            <span>LinkedIn</span>
          </div>
        </a>

        {/* Send Email */}
        <a
          href="mailto:iawaisahmd@gmail.com"
          className="w-full flex items-center px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800/60 hover:text-white transition-all text-left text-slate-300 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-slate-400 shrink-0" />
            <span>{isUrdu ? "ای میل بھیجیں" : "Send Email"}</span>
          </div>
        </a>
      </div>

      {/* Divider */}
      <div className="my-1.5 border-t border-[#1f2229]/60" />

      {/* PAGE Section */}
      <div className="space-y-0.5">
        <div className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
          {isUrdu ? "صفحہ" : "PAGE"}
        </div>

        {/* Scroll to Top */}
        <button
          onClick={handleScrollToTop}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800/60 hover:text-white transition-all text-left text-slate-300 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <ArrowUp className="h-4 w-4 text-slate-400 shrink-0" />
            <span>{isUrdu ? "سب سے اوپر جائیں" : "Scroll to Top"}</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider">
            Home
          </span>
        </button>

        {/* Go Back */}
        <button
          onClick={handleGoBack}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800/60 hover:text-white transition-all text-left text-slate-300 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <ArrowLeft className="h-4 w-4 text-slate-400 shrink-0" />
            <span>{isUrdu ? "پیچھے جائیں" : "Go Back"}</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider">
            Alt+←
          </span>
        </button>

        {/* Refresh */}
        <button
          onClick={handleRefresh}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800/60 hover:text-white transition-all text-left text-slate-300 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <RefreshCw className="h-4 w-4 text-slate-400 shrink-0" />
            <span>{isUrdu ? "تازہ کریں" : "Refresh"}</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider">
            F5
          </span>
        </button>
      </div>
    </div>
  );
}
