import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  Building2,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { experiences } from "@/data/portfolioData";

export default function ExperienceSection({ id }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? -1 : idx);
  };

  return (
    <section
      id={id || "experience"}
      className="py-20 md:py-28 bg-[#07090e] relative overflow-hidden border-t border-white/[0.06] scroll-mt-14"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-sky-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Professional Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            Hands-on software development across enterprise construction management, high-volume Web3 backend services, and automated data operations.
          </motion.p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/[0.1] pl-6 md:pl-8 ml-2 md:ml-6 space-y-8">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[39px] top-6 w-4 h-4 rounded-full bg-[#07090e] border-2 border-purple-500 group-hover:scale-125 group-hover:bg-purple-500 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.4)]" />

                <div className="rounded-2xl border border-white/[0.08] bg-[#0c101d]/90 backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:border-purple-500/30 shadow-sm">
                  {/* Card Header (Clickable) */}
                  <div
                    onClick={() => toggleExpand(idx)}
                    className="p-6 md:p-7 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {exp.role}
                          </span>
                          {exp.project && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                              Project: {exp.project}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 font-medium text-slate-300">
                            <Building2 className="w-3.5 h-3.5 text-purple-400" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            {exp.location}
                          </span>
                          {exp.roleSubtitle && (
                            <span className="text-slate-500 font-mono">
                              ({exp.roleSubtitle})
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-start sm:self-center shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.05] border border-white/[0.08] text-purple-300">
                          <Calendar className="w-3 h-3 text-purple-400" />
                          {exp.period}
                        </span>
                        <div className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 group-hover:text-white transition-colors">
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Expandable Detailed Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 md:px-7 md:pb-7 border-t border-white/[0.06] pt-5"
                      >
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                          <Sparkles className="w-3 h-3 text-purple-400" />
                          <span>Key Responsibilities & Deliverables:</span>
                        </h4>

                        <ul className="space-y-2.5 mb-6">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Badges */}
                        <div>
                          <span className="text-[11px] font-mono uppercase text-slate-500 block mb-2">
                            Technologies & Tools Used:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#141b2c] border border-white/[0.08] text-slate-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
