import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Server, Cloud } from "lucide-react";
import TechOrbit from "./TechOrbit";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    gradient: "from-sky-500 to-blue-600",
    glow: "rgba(14,165,233,0.25)",
    border: "hover:border-sky-500/40",
    skills: [
      { name: "React.js", level: 92 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.25)",
    border: "hover:border-violet-500/40",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "RESTful APIs", level: 92 },
      { name: "JWT Auth", level: 85 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.25)",
    border: "hover:border-emerald-500/40",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 78 },
      { name: "SQLite", level: 75 },
      { name: "Query Optimization", level: 82 },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.25)",
    border: "hover:border-amber-500/40",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 72 },
      { name: "CI/CD", level: 70 },
      { name: "Postman", level: 88 },
    ],
  },
];

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-[#c9d1d9]">{name}</span>
        <span className="text-[#484f58]">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#21262d] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color.from}, ${color.to})` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

const colorMap = {
  "from-sky-500 to-blue-600": { from: "#0ea5e9", to: "#2563eb" },
  "from-violet-500 to-purple-600": { from: "#8b5cf6", to: "#9333ea" },
  "from-emerald-500 to-teal-600": { from: "#10b981", to: "#0d9488" },
  "from-amber-500 to-orange-600": { from: "#f59e0b", to: "#ea580c" },
};

export default function SkillsSection({ id }) {
  const [inView, setInView] = useState(false);
  return (
    <section id={id || "skills"} className="py-16 md:py-20 bg-[#0d1117] relative overflow-hidden scroll-mt-14">
      {/* background glow pulse */}
      <motion.div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(88,28,135,0.08) 0%, transparent 70%)" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
          transition={{ duration: 0.6 }}>
          <motion.span
            className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block"
            initial={{ letterSpacing: "0.1em" }}
            whileInView={{ letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Technical Skills</h2>
        </motion.div>

        {/* 3D Tech Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <TechOrbit />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            const color = colorMap[group.gradient];
            return (
              <motion.div key={group.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6, boxShadow: `0 20px 60px ${group.glow}` }}
                className={`relative group rounded-2xl border border-[#21262d] bg-[#161b22] backdrop-blur-sm p-6 ${group.border} transition-all duration-400 cursor-default overflow-hidden`}>
                {/* card shine on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${group.glow} 0%, transparent 60%)` }} />

                <motion.div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${group.gradient} mb-4`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}>
                  <Icon className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-3">{group.title}</h3>
                <div>
                  {group.skills.map((sk) => (
                    <SkillBar key={sk.name} name={sk.name} level={sk.level} color={color} inView={inView} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}