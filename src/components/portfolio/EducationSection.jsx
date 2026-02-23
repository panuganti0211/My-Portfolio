import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Manpower Development College (Osmania University)",
    period: "August 2022 — October 2024",
    grade: "CGPA: 7.65",
  },
  {
    degree: "Bachelor of Science (MPCS)",
    institution: "Vivekananda Govt Degree College (Osmania University)",
    period: "June 2019 — November 2021",
    grade: "Percentage: 74.40%",
  },
];

export default function EducationSection({ id }) {
  return (
    <section id={id || "education"} className="py-16 md:py-20 bg-[#010409] relative scroll-mt-14">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Academics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-sky-500/20 transition-all duration-500"
            >
              <div className="p-3 rounded-xl bg-purple-500/10 w-fit mb-4">
                <GraduationCap className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-slate-400 text-sm mb-3">{edu.institution}</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs">{edu.period}</span>
                <span className="text-purple-400 text-sm font-semibold">{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}