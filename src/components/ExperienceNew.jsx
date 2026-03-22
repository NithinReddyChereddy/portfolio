import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Award, BarChart3, Layers, Briefcase } from 'lucide-react';
import { portfolioData } from '../mock';

const ExperienceNew = () => {
  const achievements = portfolioData.achievements || [];

  return (
    <section id="experience" className="relative min-h-screen py-24 px-6 bg-transparent overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl z-10">
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
              Experience
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">Achievements</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-light">
            A snapshot of my journey so far – from hands‑on projects to measurable outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Experience timeline */}
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-6 lg:left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 dark:via-emerald-500/10 to-transparent" />

            <div className="relative space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative pl-16 lg:pl-20 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 lg:left-8 top-2 -translate-x-[49%]">
                    <div className="relative w-4 h-4">
                      <div className="absolute inset-0 bg-emerald-500 rounded-full blur-sm opacity-30 dark:opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-full h-full rounded-full border-[3px] border-white dark:border-[#030303] bg-emerald-500" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl p-6 md:p-8 hover:bg-emerald-500/[0.02] dark:hover:bg-white/10 hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-[50px] opacity-10 group-hover:opacity-100 transition-opacity duration-500" />

                    <header className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-xs text-slate-700 dark:text-white shrink-0 shadow-inner">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </header>

                    <ul className="space-y-3 relative z-10">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <Target className="w-4 h-4 text-emerald-500 mt-1 shrink-0 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors" />
                          <span className="text-[0.95rem] text-slate-700 dark:text-slate-200 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-black/5 dark:border-white/10 relative z-10">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-semibold rounded-md bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right: Key Achievements bento grid */}
          <div className="space-y-4">
            {/* Small intro box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent border border-emerald-500/30 backdrop-blur-xl mb-6 shadow-lg shadow-emerald-500/5"
            >
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Metrics</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                A quick overview of the impact behind the work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {achievements.map((item, index) => {
                const Icon = index === 0 ? Target : index === 1 ? Award : index === 2 ? BarChart3 : Layers;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl p-6 hover:bg-emerald-500/[0.02] dark:hover:bg-white/10 hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Icon className="w-16 h-16 text-emerald-500 dark:text-emerald-400" />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                      <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.value}
                      </p>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">{item.label}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-auto">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNew;