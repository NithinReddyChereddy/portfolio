import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { portfolioData } from '../mock';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = ({ onOpenResume, isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setIsScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className={`fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500`}
    >
      <div className={`pointer-events-auto flex items-center gap-6 px-6 py-3 rounded-full transition-all duration-500 ${isDarkMode
        ? (isScrolled ? 'bg-[#030303]/45 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-2xl' : 'bg-white/5 border border-white/5 shadow-lg backdrop-blur-xl')
        : (isScrolled ? 'bg-white/50 border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md' : 'bg-white/30 border border-black/5 shadow-md backdrop-blur-sm')
        }`}>
        {/* Logo/Name */}
        <button
          onClick={() => scrollToSection('hero')}
          className={`font-black text-xl transition-all tracking-tighter flex items-center gap-1 ${isDarkMode ? 'text-white hover:text-emerald-400' : 'text-slate-900 hover:text-emerald-600'}`}
        >
          <span className="text-emerald-400">&lt;</span>
          NRC
          <span className="text-cyan-400">/&gt;</span>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5 relative">
          {sections.slice(1).map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                  ? (isDarkMode ? 'text-emerald-50' : 'text-emerald-600')
                  : (isDarkMode ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600')
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </button>
            )
          })}

          {/* Divider */}
          <div className={`w-px h-4 mx-1 ${isDarkMode ? 'bg-white/20' : 'bg-black/10'}`} />

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isDarkMode
              ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]'
              : 'text-emerald-700 bg-emerald-600/10 border border-emerald-600/20 hover:bg-emerald-600/20 hover:text-emerald-800 hover:shadow-lg'}`}
          >
            Resume
          </button>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${isDarkMode
              ? 'bg-white/10 text-yellow-400 hover:bg-white/20 hover:scale-110'
              : 'bg-black/10 text-purple-600 hover:bg-black/20 hover:scale-110'}`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;