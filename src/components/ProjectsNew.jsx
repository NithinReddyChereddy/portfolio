import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';
import { portfolioData } from '../mock';

const ProjectsNew = () => {
  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 bg-transparent overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
              Projects
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">Projects</span>
          </h2>
        </motion.div>

        {/* Wide Format Alternating Cards */}
        <div className="flex flex-col gap-y-24 lg:gap-y-32">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative"
              >
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                  }`}>
                  {/* Image Container */}
                  <div className="w-full lg:w-3/5 relative rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] backdrop-blur-sm">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10 pointer-events-none" />

                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent dark:from-[#030303]/60 dark:via-[#030303]/10 dark:to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                      {/* Floating overlay chip */}
                      <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md border border-black/10 dark:border-white/10 z-20 pointer-events-none shadow-xl">
                        <MonitorPlay className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-xs font-black text-slate-900 dark:text-white tracking-[0.2em] uppercase">Project 0{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 text-[0.7rem] font-black tracking-widest uppercase rounded-lg bg-black/[0.05] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 pt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 text-white font-black hover:bg-emerald-600 shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.8)] transition-all duration-300 text-sm active:scale-95"
                      >
                        Launch App
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-900 dark:text-white font-black hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 text-sm backdrop-blur-md active:scale-95"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsNew;