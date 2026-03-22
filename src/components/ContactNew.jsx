import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../mock';

const ContactNew = () => {
  return (
    <section id="contact" className="relative min-h-screen py-24 px-6 bg-transparent overflow-hidden flex items-center">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-emerald-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
              Contact
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight text-center">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">Touch</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12 relative p-8 md:p-12 rounded-3xl bg-white/80 dark:bg-[#0a0a0a]/50 border border-black/5 dark:border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light text-center">
                Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: portfolioData.social.email, href: `mailto:${portfolioData.social.email}` },
                { icon: Phone, label: "Phone", value: "+91 7780485794", href: "tel:+917780485794" },
                { icon: MapPin, label: "Location", value: "Ongole, Andhra Pradesh", href: "#" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-emerald-500/10 dark:hover:bg-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 relative z-10"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 dark:bg-white/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:bg-emerald-500/20 transition-all shadow-inner">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-300 mb-1">{item.label}</h3>
                    <p className="text-slate-900 dark:text-white font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors break-all drop-shadow-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links Mini */}
            <div className="pt-6 border-t border-black/10 dark:border-white/5 relative z-10">
              <h3 className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider">Social Profiles</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  { icon: Github, label: "GitHub", href: portfolioData.social.github },
                  { icon: Linkedin, label: "LinkedIn", href: portfolioData.social.linkedin }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-white hover:bg-emerald-500/10 dark:hover:bg-white/10 hover:border-emerald-500/20 dark:hover:border-white/10 transition-all group font-medium text-sm"
                  >
                    <social.icon className="w-4 h-4" />
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactNew;