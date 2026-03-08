import { motion } from "motion/react";

const skillCategories = [
  {
    label: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "C#", "C", "Dart", "SQL"],
    accent: "#3b82f6",
  },
  {
    label: "Backend",
    skills: ["Spring Boot", "Node.js", "Flask", "Django", "ASP.NET"],
    accent: "#10b981",
  },
  {
    label: "Mobile",
    skills: ["React Native", "Flutter"],
    accent: "#8b5cf6",
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
    accent: "#f59e0b",
  },
  {
    label: "AI & Data",
    skills: ["EDA", "ML Fundamentals", "Feature Engineering", "LLM APIs"],
    accent: "#ec4899",
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "Firebase", "Neon", "Render"],
    accent: "#14b8a6",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      data-ocid="skills.section"
      className="relative py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-rule">
            <p className="section-label shrink-0">Skills</p>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Tools of the <span className="text-blue-400">trade.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="p-5 rounded-2xl bg-[#0f0f0f] card-glow"
              data-ocid={`skills.card.${ci + 1}`}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: category.accent }}
                />
                <span className="text-xs font-body font-semibold text-white/40 uppercase tracking-widest">
                  {category.label}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08 + si * 0.04 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-body font-medium text-white/65 border border-white/8 bg-white/3 hover:text-white/90 transition-colors cursor-default"
                    style={
                      {
                        /* subtle accent tint on hover via inline style isn't usable but border works */
                      }
                    }
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
