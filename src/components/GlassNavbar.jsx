import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GlassNavbar() {
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return '☀️ Good Morning';
    if (hour < 18) return '🌤️ Good Afternoon';
    return '🌙 Good Evening';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 z-50 w-full backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled ? 'bg-obsidian/80 border-white/10 py-3' : 'bg-obsidian/40 border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Left side: Greeting (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-1 text-sm font-mono text-textSecondary w-1/3">
          <span className="mr-3">{getGreeting()}</span>
        </div>

        {/* Center: Logo & Name */}
        <Link to="/" className="flex items-center justify-center space-x-2 w-1/3">
             <span className="text-2xl text-amber leading-none">♌</span>
             <span className="font-display text-xl text-textPrimary">Awais Ahmad</span>
        </Link>

        {/* Right side: Nav Links */}
        <div className="hidden md:flex items-center justify-end space-x-1 w-1/3">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`px-3 py-1.5 rounded-full transition-all text-sm font-mono ${
                location.pathname === link.path 
                  ? 'bg-white/5 text-amber' 
                  : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
