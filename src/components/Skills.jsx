import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../mock';
import { Code2, Layout, Server, Database, BrainCircuit, Cloud, Wrench, Terminal } from 'lucide-react';

const categoryConfig = {
  "Languages": {
    icon: Code2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30",
    hoverBorder: "hover:border-blue-400/60",
    glow: "bg-blue-500/20"
  },
  "Frontend": {
    icon: Layout,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-400/30",
    hoverBorder: "hover:border-cyan-400/60",
    glow: "bg-cyan-500/20"
  },
  "Backend": {
    icon: Server,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30",
    hoverBorder: "hover:border-purple-400/60",
    glow: "bg-purple-500/20"
  },
  "Databases": {
    icon: Database,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-400/30",
    hoverBorder: "hover:border-emerald-400/60",
    glow: "bg-emerald-500/20"
  },
  "Generative AI": {
    icon: BrainCircuit,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-400/30",
    hoverBorder: "hover:border-rose-400/60",
    glow: "bg-rose-500/20"
  },
  "Cloud": {
    icon: Cloud,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-400/30",
    hoverBorder: "hover:border-amber-400/60",
    glow: "bg-amber-500/20"
  },
  "Tools": {
    icon: Wrench,
    color: "text-slate-400",
    bgColor: "bg-slate-500/10",
    borderColor: "border-slate-400/30",
    hoverBorder: "hover:border-slate-400/60",
    glow: "bg-slate-500/20"
  }
};

const defaultTheme = {
  icon: Terminal,
  color: "text-emerald-400",
  bgColor: "bg-emerald-500/10",
  borderColor: "border-emerald-400/30",
  hoverBorder: "hover:border-emerald-400/60",
  glow: "bg-emerald-500/20"
};

const Skills = () => {
  const skills = portfolioData.skills || {};

  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 bg-transparent overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
              Skills
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">Stack</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A curated set of languages, frameworks, and tools I use to build
            data‑driven and developer‑friendly experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], categoryIndex) => {
            const theme = categoryConfig[category] || defaultTheme;
            const IconObject = theme.icon;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.05, duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative group rounded-3xl bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/[0.05] p-7 hover:border-emerald-500/30 dark:hover:border-white/[0.1] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl"
              >
                {/* Intense corner glows on hover */}
                <div className={`absolute -top-12 -right-12 w-56 h-56 ${theme.glow} rounded-full blur-[50px] opacity-[0.2] dark:opacity-[0.35] group-hover:opacity-100 transition-all duration-700`} />
                <div className={`absolute -bottom-12 -left-12 w-56 h-56 ${theme.glow} rounded-full blur-[50px] opacity-[0.1] dark:opacity-[0.25] group-hover:opacity-60 transition-all duration-700 delay-100`} />

                <header className="flex items-center gap-3.5 mb-6 relative z-10">
                  <div className={`p-2.5 rounded-xl ${theme.bgColor} border ${theme.borderColor} shadow-sm dark:backdrop-blur-sm`}>
                    <IconObject className={`w-5 h-5 ${theme.color.replace('400', '600')} dark:${theme.color}`} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-wide">
                    {category}
                  </h3>
                </header>

                <div className="flex flex-wrap gap-2.5 relative z-10">
                  {items.map((item, index) => {
                    const name = typeof item === 'string' ? item : item.name;
                    return (
                      <motion.div
                        key={`${name}-${index}`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group/item relative flex items-center gap-2 rounded-lg bg-black/[0.05] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 px-3.5 py-1.5 transition-all cursor-default overflow-hidden dark:hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]"
                      >
                        <div className={`absolute inset-0 opacity-0 group-hover/item:opacity-40 transition-opacity duration-300 ${theme.bgColor}`} />
                        <span className="relative z-10 text-[0.85rem] font-bold text-slate-700 dark:text-slate-300 group-hover/item:text-emerald-800 dark:group-hover/item:text-white transition-colors dark:group-hover/item:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                          {name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;