import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Server,
  Copy,
  Check
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function HeroSection({ id }) {
  const [copied, setCopied] = useState(false);

  const scrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 70;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id={id || "home"}
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#07090e]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-medium text-slate-300 mb-6 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-mono text-[11px] uppercase tracking-wider">
              Status
            </span>
            <span className="text-slate-300 font-normal">
              {personalInfo.availabilityStatus}
            </span>
          </motion.div>

          {/* Small Introduction */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400 font-mono mb-2"
          >
            HELLO, I'M
          </motion.span>

          {/* Main Name Heading (Centered, with Panuganti block below) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-5 leading-[1.1] text-center"
          >
            <span className="block">Bharath Kumar</span>
            <span className="block bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Panuganti
            </span>
          </motion.h1>

          {/* Professional Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 text-xl sm:text-2xl font-semibold text-slate-200 mb-5"
          >
            <Server className="w-5 h-5 text-purple-400 shrink-0" />
            <span>{personalInfo.headline}</span>
            <span className="text-xs font-normal px-2.5 py-0.5 rounded border border-purple-500/30 bg-purple-500/10 text-purple-300">
              MERN & Cloud
            </span>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 text-center"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Technology Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto"
          >
            <span className="text-xs font-mono text-slate-500 mr-1 uppercase tracking-wider">
              Core Stack:
            </span>
            {personalInfo.techHighlights.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#111726] border border-white/[0.08] text-slate-300 hover:border-purple-500/40 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10 w-full"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:via-indigo-500 hover:to-sky-500 text-white font-medium text-sm shadow-lg shadow-purple-900/30 transition-all duration-300 hover:shadow-purple-600/40"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeDownloadName}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111726] hover:bg-[#161f33] border border-white/[0.1] hover:border-purple-500/40 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 shadow-sm"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.16] text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </button>
          </motion.div>

          {/* Social Links & Direct Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-white/[0.06] w-full max-w-xl mx-auto"
          >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Connect:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1322] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] text-xs font-mono transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1322] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] text-xs font-mono transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <button
                onClick={copyEmail}
                title="Copy email to clipboard"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1322] border border-white/[0.08] text-slate-400 hover:text-purple-300 hover:border-purple-500/30 text-xs font-mono transition-all"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
