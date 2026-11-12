import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Database,
  Layout,
  Cpu,
  Sparkles,
  Terminal,
  Layers,
  CheckCircle2
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

const categoryIconMap = {
  Server,
  Database,
  Layout,
  Cpu,
  Sparkles
};

export default function SkillsSection({ id }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All Skills" },
    { id: "Backend", label: "Backend" },
    { id: "Frontend", label: "Frontend" },
    { id: "Databases & Caching", label: "Databases & Caching" },
    { id: "Tools & Platforms", label: "Tools & Platforms" },
    { id: "Additional Technologies", label: "Additional" }
  ];

  const filteredCategories = activeFilter === "all"
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeFilter);

  return (
    <section
      id={id || "skills"}
      className="py-20 md:py-28 bg-[#090d16] relative overflow-hidden border-t border-white/[0.06] scroll-mt-14"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Skills & Technology Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            Production-tested technologies across server-side development, database optimization, cloud workflows, and modern web applications.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === opt.id
                  ? "bg-purple-600 text-white shadow-sm shadow-purple-600/30 border border-purple-400/40"
                  : "bg-[#111726] text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/[0.15]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group, groupIdx) => {
              const Icon = categoryIconMap[group.icon] || Server;
              return (
                <motion.div
                  layout
                  key={group.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: groupIdx * 0.05 }}
                  className="rounded-2xl border border-white/[0.08] bg-[#0c101d]/80 p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {group.category}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-slate-400">
                        {group.skills.length} tools
                      </span>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mb-5">
                      {group.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b2c] border border-white/[0.07] hover:border-purple-500/40 text-slate-200 hover:text-white transition-all text-xs font-mono"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span>{skill.name}</span>
                          {skill.badge && (
                            <span className="text-[10px] text-slate-500 border-l border-white/[0.08] pl-1.5 ml-0.5">
                              {skill.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card bottom indicator */}
                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Production Ready</span>
                    </span>
                    <span className="text-slate-600">Verified</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Backend Highlights Architecture Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl border border-white/[0.08] bg-[#0a0f1c] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-0.5">
                Backend Architecture Philosophy
              </h4>
              <p className="text-slate-400 text-xs">
                Favoring clean separation of concerns, robust type safety, dependency injection, and comprehensive API documentation.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2.5 py-1 text-[11px] font-mono rounded bg-white/[0.05] border border-white/[0.08] text-slate-300">
              Clean Architecture
            </span>
            <span className="px-2.5 py-1 text-[11px] font-mono rounded bg-white/[0.05] border border-white/[0.08] text-slate-300">
              SOLID Principles
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
