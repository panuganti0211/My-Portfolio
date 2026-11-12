import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#05070c] border-t border-white/[0.08] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-sky-500/20 border border-purple-500/30 flex items-center justify-center font-bold text-white text-xs">
                {personalInfo.initials}
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-500">
              Backend Software Engineer · Node.js & Full-Stack MERN
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium">
            <button
              onClick={() => scrollTo("home")}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="text-slate-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("skills")}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#0e1322] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#0e1322] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Bharath"
              className="p-2 rounded-lg bg-[#0e1322] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 font-mono gap-3">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-slate-500">
            <span>Built with React 18, Tailwind CSS & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
