import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../mock';

const Education = () => {
  const educationList = portfolioData.education || [];

  return (
    <section id="education" className="relative min-h-screen py-24 px-6 bg-transparent overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative mx-auto max-w-5xl z-10">
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
              Education
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">Education</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            A history of my formal academic qualifications and technical foundation.
          </p>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative flex flex-col h-full rounded-3xl bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-emerald-500/[0.03] dark:hover:bg-white/[0.05] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl dark:backdrop-blur-sm p-8"
            >
              {/* Card Corner Glows */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Card Header */}
              <header className="flex items-start justify-between gap-4 mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {edu.major}
                    </p>
                  </div>
                </div>
              </header>

              {/* Institution Details */}
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium mb-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-semibold">{edu.school}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                    <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Grade Badge */}
                <div className="pt-4 border-t border-black/5 dark:border-white/10 mt-6 flex justify-start">
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-700 dark:text-emerald-400 tracking-wide uppercase shadow-sm">
                    <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{edu.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
