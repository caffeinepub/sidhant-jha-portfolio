import { GraduationCap, Star } from "lucide-react";
import { motion } from "motion/react";

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "DBMS",
  "Computer Networks",
  "OOP",
  "Software Engineering",
];

export function Education() {
  return (
    <section
      id="education"
      data-ocid="education.section"
      className="relative py-32 px-6"
    >
      <div className="absolute inset-0 bg-[#0d0d0d] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-rule">
            <p className="section-label shrink-0">Education</p>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Where I <span className="text-blue-400">learned.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative p-8 md:p-10 rounded-2xl bg-[#0f0f0f] card-glow overflow-hidden"
          data-ocid="education.card"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative">
            {/* Header */}
            <div className="flex items-start gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                <GraduationCap size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-1">
                  B.Tech — Computer Science & Engineering
                </h3>
                <p className="text-white/50 font-body text-sm">
                  ITER, SOA University
                </p>
                <p className="text-white/35 font-body text-xs mt-0.5">
                  2020 – 2024
                </p>
              </div>
            </div>

            {/* CGPA */}
            <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-white/3 border border-white/8 w-fit">
              <Star size={16} className="text-yellow-400" />
              <div>
                <span className="font-display font-black text-2xl text-white">
                  7.74
                </span>
                <span className="text-white/40 font-body text-sm ml-1">
                  / 10 CGPA
                </span>
              </div>
            </div>

            {/* Coursework */}
            <div>
              <p className="text-xs uppercase tracking-widest font-body text-white/30 mb-4">
                Key Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-body font-medium text-white/60 border border-white/10 bg-white/3 hover:border-blue-400/30 hover:text-blue-300 transition-colors cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
