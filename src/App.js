import React, { useState, useEffect } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, X } from "lucide-react";
import Navbar from "./components/Navbar";
import HeroNew from "./components/HeroNew";
import AboutNew from "./components/AboutNew";
import ExperienceNew from "./components/ExperienceNew";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ProjectsNew from "./components/ProjectsNew";
import ContactNew from "./components/ContactNew";

function App() {
  const [showResume, setShowResume] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load theme from preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
    }
  }, []);

  // Sync theme to localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Lock scroll when modal is open
  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showResume]);

  return (
    <div className={`App ${isDarkMode ? "dark" : ""} relative min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500 selection:bg-emerald-500/30 overflow-x-hidden`}>
      {/* Global Background Ecosystem */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Ambient glows */}
        <div className={`absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-500/${isDarkMode ? "10" : "15"} rounded-full blur-[120px] ${isDarkMode ? "mix-blend-screen" : "mix-blend-normal opacity-[0.1]"}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-500/${isDarkMode ? "10" : "15"} rounded-full blur-[120px] ${isDarkMode ? "mix-blend-screen" : "mix-blend-normal opacity-[0.1]"}`} />
        <div className={`absolute top-[40%] right-[20%] w-[30rem] h-[30rem] bg-purple-500/${isDarkMode ? "10" : "15"} rounded-full blur-[120px] ${isDarkMode ? "mix-blend-screen" : "mix-blend-normal opacity-[0.05]"}`} />

        {/* Grid pattern overlay */}
        <div className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] ${isDarkMode ? "opacity-20 mix-blend-overlay" : "opacity-[0.02]"}`} />
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#8080802e_1px,transparent_1px),linear-gradient(to_bottom,#8080802e_1px,transparent_1px)] bg-[size:64px_64px] ${isDarkMode ? "opacity-100" : "opacity-50"}`} />
      </div>

      {/* Main Content (placed above background) */}
      <div className="relative z-10 w-full flex flex-col">
        <Navbar onOpenResume={() => setShowResume(true)} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <HeroNew onOpenResume={() => setShowResume(true)} />
        <AboutNew />
        <ExperienceNew />
        <ProjectsNew />
        <Skills />
        <Certifications />
        <ContactNew />

        {/* Footer - Added extra bottom padding so navbar doesn't overlap text */}
        <footer className="bg-transparent border-t border-black/5 dark:border-white/5 pt-12 pb-32 px-6 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-center text-slate-500 dark:text-slate-500 text-sm font-light">
                © {new Date().getFullYear()} {" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Nithin Reddy Chereddy</span>.
                Built with React, Framer Motion & Tailwind.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Resume Modal overlay mapped over entire page */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: isDarkMode ? "blur(20px)" : "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 ${isDarkMode ? "bg-black/80" : "bg-black/40"}`}
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-5xl h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden ${isDarkMode
                ? "bg-[#050505] border-white/20 shadow-[0_0_100px_rgba(52,211,153,0.25)]"
                : "bg-white border-black/10 shadow-2xl"}`}
            >
              {/* Modal Header */}
              <div className={`flex justify-between items-center p-5 md:px-8 border-b backdrop-blur-md ${isDarkMode
                ? "border-white/10 bg-white/5"
                : "border-black/5 bg-slate-50/80"}`}>
                <h3 className={`font-semibold text-lg flex items-center gap-3 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  Nithin's Resume
                </h3>
                <div className="flex gap-4 items-center">
                  <a
                    href="/resume.pdf"
                    download
                    className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => setShowResume(false)}
                    className={`p-2 rounded-full transition-all shadow-sm ${isDarkMode
                      ? "bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white"
                      : "bg-black/5 hover:bg-black/10 text-slate-600 hover:text-slate-900"}`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / PDF Iframe */}
              <div className={`flex-1 w-full relative ${isDarkMode ? "bg-[#1a1a1a]" : "bg-slate-200"}`}>
                {/* Fallback pattern if iframe is loading or empty */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 space-y-4 -z-10">
                  <FileText className="w-16 h-16 opacity-30" />
                  <p className="font-medium">Loading document...</p>
                </div>

                <iframe
                  src="/resume.pdf"
                  className="w-full h-full border-none z-10 relative"
                  title="Resume Document"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
