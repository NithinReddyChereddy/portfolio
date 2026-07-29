import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Bot, Sparkles, Cpu, Zap, CheckCircle2 } from 'lucide-react';

const workflowCards = [
  {
    title: "Cursor",
    role: "AI-Assisted Coding & Generation",
    description: "I write code interactively using context-aware code generation in Cursor. By prompting the model with workspace context, I accelerate writing FastAPI endpoints, cleaning dataset scripts, and integrating analytical logic.",
    icon: Terminal,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30",
    glow: "bg-blue-500/20"
  },
  {
    title: "Claude Code",
    role: "Agentic Engineering & Planning",
    description: "I use Claude Code CLI to run diagnostics, execute codebase refactors, and review system designs. It assists me in tracking down complex bugs, planning project structures, and testing logic directly from the terminal.",
    icon: Bot,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-400/30",
    glow: "bg-rose-500/20"
  },
  {
    title: "AntiGravity",
    role: "Rapid Prototyping & UI Design",
    description: "I leverage AntiGravity to iterate on frontend structures, generate premium UI layers, and prototype web workflows. It helps translate data-driven insights into interactive layouts and speeds up design validation.",
    icon: Sparkles,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-400/30",
    glow: "bg-emerald-500/20"
  }
];

const accelerations = [
  "Rapid prototyping",
  "AI-assisted coding",
  "Debugging",
  "Refactoring",
  "API integration",
  "Workflow automation",
  "Faster experimentation"
];

const AIDevelopmentWorkflow = () => {
  return (
    <section id="workflow" className="relative min-h-screen py-24 px-6 bg-transparent overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

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
              Workflow
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            AI Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">Workflow</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            I integrate AI-native environments into my development lifecycle to plan architectures, write boilerplate, and test user experiences at speed, allowing me to focus my efforts on data modeling, API design, and analytical problem-solving.
          </p>
        </motion.div>

        {/* 3 Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {workflowCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative flex flex-col h-full rounded-3xl bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-emerald-500/[0.03] dark:hover:bg-white/[0.05] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl dark:backdrop-blur-sm p-8"
              >
                {/* Glow Backgrounds */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 ${card.glow} rounded-full blur-[60px] opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className={`absolute -bottom-24 -left-24 w-48 h-48 ${card.glow} rounded-full blur-[60px] opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Card Header (Icon and Title) */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`p-3 rounded-2xl ${card.bgColor} border ${card.borderColor} backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {card.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light relative z-10 flex-1">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Accelerations Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center gap-8"
        >
          {/* Subtle side indicator */}
          <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-b from-emerald-500 to-cyan-500" />
          
          <div className="lg:w-1/3 flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 rounded-2xl">
              <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Accelerated Engineering</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light">Rapid execution from design to deployment.</p>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-wrap gap-2.5">
            {accelerations.map((item, idx) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group/pill flex items-center gap-2 px-4 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 cursor-default"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400/80 group-hover/pill:scale-110 transition-transform" />
                <span className="text-xs font-bold tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AIDevelopmentWorkflow;
