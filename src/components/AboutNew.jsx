import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, BarChart, Layers } from 'lucide-react';
import { portfolioData } from '../mock';

const AboutNew = () => {
  const icons = [Code2, Briefcase, BarChart, Layers];
  const stats = portfolioData.achievements.map((ach, i) => ({
    value: ach.value,
    label: ach.label,
    icon: icons[i % icons.length]
  }));

  return (
    <section id="about" className="relative min-h-screen py-24 px-6 bg-transparent overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center lg:items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
              About
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">Me</span>
          </h2>
        </motion.div>

        {/* 60/40 Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left: Bio (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-light">
              <p className="text-xl text-slate-900 dark:text-white font-medium">
                {portfolioData.about.bio}
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                {portfolioData.about.extendedBio}
              </p>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-black/10 dark:border-white/10 mt-8">
              {stats.map((stat, i) => (
                <div key={i} className="group p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-emerald-500/10 dark:hover:bg-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/30 transition-all opacity-40 group-hover:opacity-100" />
                  <stat.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all relative z-10" />
                  <h3 className="text-3xl font-bold leading-none mb-2 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 dark:group-hover:from-emerald-400 dark:group-hover:to-cyan-400 transition-all">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Circular Headshot (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Outer rotating gradient ring */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-20 dark:opacity-20 group-hover:opacity-50 blur-lg transition-opacity duration-500 animate-spin-slow" />

              <div className="relative w-80 h-80 rounded-full bg-white/50 dark:bg-white/5 p-2 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white/40 dark:bg-[#0a0a0a]/50 p-2 backdrop-blur-md border border-black/10 dark:border-white/10">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <img
                      src={portfolioData.about.image}
                      alt="Profile"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center grayscale hover:grayscale-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;