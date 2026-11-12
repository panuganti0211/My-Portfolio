import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { projects } from "@/data/portfolioData";

export default function ProjectsSection({ id }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "backend", label: "Backend & APIs" },
    { id: "fullstack", label: "Full-Stack MERN" }
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "backend") {
      return (
        project.category.toLowerCase().includes("backend") ||
        project.category.toLowerCase().includes("api")
      );
    }
    if (activeFilter === "fullstack") {
      return (
        project.category.toLowerCase().includes("full-stack") ||
        project.category.toLowerCase().includes("mern") ||
        project.category.toLowerCase().includes("web")
      );
    }
    return true;
  });

  return (
    <section
      id={id || "projects"}
      className="py-20 md:py-28 bg-[#090d16] relative overflow-hidden border-t border-white/[0.06] scroll-mt-14"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            Production web platforms, scalable RESTful APIs, and fintech integrations designed for performance, security, and real-world utility.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === tab.id
                  ? "bg-purple-600 text-white shadow-sm shadow-purple-600/30 border border-purple-400/40"
                  : "bg-[#111726] text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/[0.15]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isFirstFeatured = filteredProjects.length % 2 !== 0 && idx === 0 && activeFilter === "all";
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`rounded-2xl border border-white/[0.08] bg-[#0c101d]/90 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 group shadow-sm ${
                    isFirstFeatured ? "lg:col-span-2 bg-gradient-to-br from-[#0e1424] via-[#0c101d] to-[#0c101d] border-purple-500/20" : ""
                  }`}
                >
                  <div>
                    {/* Top Tag & Category */}
                    <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {project.category}
                      </span>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
                            title="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit live demo for ${project.title}`}
                            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-purple-300 border border-white/[0.08] transition-colors"
                            title="Live Demo / Details"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 font-mono text-xs mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Features Bullet Points */}
                    <div className="mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                        Key Features & Architecture:
                      </span>
                      <ul className="space-y-2">
                        {project.highlights.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technology Badges & Action Row */}
                  <div className="pt-5 border-t border-white/[0.06] mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-[#131929] border border-white/[0.06] text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github || personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-purple-200 transition-colors shrink-0 group/link"
                    >
                      <span>Explore Repository</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
