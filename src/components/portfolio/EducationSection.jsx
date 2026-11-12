import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { educationData } from "@/data/portfolioData";

export default function EducationSection({ id }) {
  return (
    <section
      id={id || "education"}
      className="py-16 md:py-24 bg-[#07090e] relative overflow-hidden border-t border-white/[0.06] scroll-mt-14"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
          >
            Education & Qualifications
          </motion.h2>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="rounded-2xl border border-white/[0.08] bg-[#0c101d]/90 p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-purple-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-3">
                  {edu.institution}
                </p>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>{edu.grade}</span>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] mt-4 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Osmania University Affiliated</span>
                <span className="text-slate-400">Hyderabad, India</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
