import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  Bug,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { aboutHighlights } from "@/data/portfolioData";

const iconMap = {
  Server,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  Bug
};

export default function AboutSection({ id }) {
  const scrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 70;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <section
      id={id || "about"}
      className="py-20 md:py-28 bg-[#07090e] relative overflow-hidden border-t border-white/[0.06] scroll-mt-14"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Engineering scalable backends with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
              clean architecture & reliability
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            I am a Software Engineer with 3+ years of experience focused on architecting resilient backend systems, RESTful APIs, and full-stack web applications. I specialize in Node.js, Express.js, NestJS, and TypeScript on the server, paired with PostgreSQL, MongoDB, Redis, and Supabase for structured data management.
          </motion.p>
        </div>

        {/* Highlight Grid: 6 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aboutHighlights.map((item, index) => {
            const Icon = iconMap[item.icon] || Server;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl bg-[#0d1220]/70 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm shadow-sm"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-4 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner: Recruiter-Friendly Fast Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#0d1322] via-[#10172a] to-[#0d1322] p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block uppercase">Experience</span>
                <span className="text-white font-semibold text-sm">3+ Years Building Production Apps</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block uppercase">Location</span>
                <span className="text-white font-semibold text-sm">Hyderabad, India</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block uppercase">Education</span>
                <span className="text-white font-semibold text-sm">MCA (First Division, 2024)</span>
              </div>
            </div>

            <div className="flex justify-start md:justify-end">
              <button
                onClick={() => scrollTo("experience")}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-slate-200 hover:text-white transition-all group"
              >
                <span>View Career History</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
