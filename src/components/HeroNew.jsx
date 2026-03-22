import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, FileText, X } from 'lucide-react';
import { portfolioData } from '../mock';

const HeroNew = ({ onOpenResume }) => {
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
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-transparent overflow-hidden">
        <div className="container relative mx-auto max-w-5xl z-10 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 flex flex-col items-center"
          >
            {/* Greeting Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.15)]"
            >
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />
              <span className="text-sm font-black tracking-widest uppercase text-slate-800 dark:text-white">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tight leading-[1.05] drop-shadow-2xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-400">
                {portfolioData.name.split(' ')[0]}
              </span>
              <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-cyan-400 md:ml-6 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                {portfolioData.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              {portfolioData.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-white text-lg font-bold transition-all duration-300 w-full sm:w-auto overflow-hidden hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(16,185,129,0.8)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,1)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="group flex flex-1 w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-emerald-400/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-50 text-lg font-bold hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95"
              >
                <FileText className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center gap-6 pt-12"
            >
              {[
                { icon: Github, href: portfolioData.social.github },
                { icon: Linkedin, href: portfolioData.social.linkedin },
                { icon: Mail, href: `mailto:${portfolioData.social.email}` }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20 hover:border-emerald-500/30 dark:hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>

            {/* Scroll indicator - Moved inside the container flow so it never overlaps */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: 1.2, duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="pt-16 flex flex-col items-center gap-3 text-slate-400"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Scroll</span>
              <div className="w-[2px] h-10 bg-gradient-to-b from-emerald-400 to-transparent rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroNew;