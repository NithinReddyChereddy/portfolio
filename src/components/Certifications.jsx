import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, ExternalLink, Calendar, Medal, FileText, X } from 'lucide-react';
import { portfolioData } from '../mock';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    // Lock scroll when modal is open
    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedCert]);

    return (
        <section id="certifications" className="relative min-h-screen py-24 px-6 bg-transparent overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-1/3 right-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/3 left-0 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

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
                            Certifications
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">Certifications</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Validating technical expertise and commitment to continuous learning through recognized industry programs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="group relative flex flex-col h-full rounded-3xl bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-emerald-500/[0.06] dark:hover:bg-white/[0.05] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl dark:backdrop-blur-sm"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] opacity-40 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Header Image Area */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#030303] to-transparent z-10 opacity-60" />
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/40 backdrop-blur-md">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">Active</span>
                                </div>

                                {/* Issuer Logo/Icon */}
                                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-white/20 dark:bg-white/10 border border-black/10 dark:border-white/20 backdrop-blur-md shadow-lg">
                                        <Medal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">{cert.issuer}</p>
                                        <h3 className="text-slate-900 dark:text-white font-bold leading-tight drop-shadow-md">{cert.title}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-1 relative z-10">
                                {/* Meta details */}
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs">
                                        <Calendar className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400/70" />
                                        <span>{cert.date}</span>
                                    </div>
                                </div>

                                {/* Skills Section */}
                                <div className="mb-8">
                                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Skills Validated</p>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-emerald-500/5 dark:bg-emerald-500/5 border border-emerald-500/10 dark:border-emerald-500/10 text-emerald-700 dark:text-emerald-400/80 group-hover:bg-emerald-500/10 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Verify Button */}
                                <div className="mt-auto">
                                    <button
                                        onClick={() => {
                                            if (cert.isPdf) {
                                                setSelectedCert(cert);
                                            } else {
                                                window.open(cert.link, '_blank');
                                            }
                                        }}
                                        className="group/btn relative flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 dark:from-emerald-500/10 dark:to-cyan-500/10 border border-black/5 dark:border-white/10 text-slate-800 dark:text-white text-sm font-bold hover:from-emerald-500 hover:to-cyan-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 active:scale-95 overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {cert.isPdf ? <FileText className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                                            {cert.isPdf ? 'View Certificate' : 'Verify Credential'}
                                            <ExternalLink className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 group-hover/btn:translate-x-0 transition-all" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal overlay */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/40 dark:bg-black/80"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden bg-white dark:bg-[#050505] border-black/10 dark:border-white/20 dark:shadow-[0_0_100px_rgba(52,211,153,0.25)]"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-5 md:px-8 border-b backdrop-blur-md border-black/5 bg-slate-50/80 dark:border-white/10 dark:bg-white/5">
                                <h3 className="font-semibold text-lg flex items-center gap-3 text-slate-900 dark:text-white">
                                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                                        {selectedCert.isPdf ? <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> : <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
                                    </div>
                                    <span className="truncate max-w-[200px] md:max-w-md">{selectedCert.title}</span>
                                </h3>
                                <div className="flex gap-4 items-center">
                                    <a
                                        href={selectedCert.link}
                                        download
                                        target={selectedCert.isPdf ? undefined : "_blank"}
                                        rel="noopener noreferrer"
                                        className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40"
                                    >
                                        {selectedCert.isPdf ? "Download" : "Open Link"}
                                    </a>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 rounded-full transition-all shadow-sm bg-black/5 hover:bg-black/10 text-slate-600 hover:text-slate-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-slate-300 dark:hover:text-white"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body / PDF Iframe */}
                            <div className="flex-1 w-full relative bg-slate-200 dark:bg-[#1a1a1a]">
                                {/* Fallback pattern if iframe is loading or empty */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 space-y-4 -z-10">
                                    {selectedCert.isPdf ? <FileText className="w-16 h-16 opacity-30" /> : <ShieldCheck className="w-16 h-16 opacity-30" />}
                                    <p className="font-medium">Loading document...</p>
                                </div>

                                <iframe
                                    src={selectedCert.link}
                                    className="w-full h-full border-none z-10 relative"
                                    title="Certificate Document"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
