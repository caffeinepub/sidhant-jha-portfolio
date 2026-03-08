import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    title: "AI Intern",
    company: "Placify Technologies",
    location: "Bangalore",
    duration: "Mar 2024 – May 2024",
    type: "Internship",
    highlights: [
      "Built backend and full-stack features using Next.js APIs and PostgreSQL",
      "Reduced manual workflows by ~30% through automation",
      "Integrated Gemini LLM APIs with authentication, retries, and rate limiting",
      "Maintained 99%+ system uptime throughout the engagement",
      "Implemented TDD unit testing across critical service modules",
      "Improved API response times by ~20% through query and caching optimizations",
    ],
    color: "blue",
  },
  {
    title: "Graduate Engineer Trainee (Mobile)",
    company: "Floatr Wealth",
    location: "Bangalore",
    duration: "Nov 2025 – Present",
    type: "Full-Time",
    highlights: [
      "Designed mobile wireframes for a fintech wealth management platform",
      "Collaborated closely with product and engineering teams on feature roadmap",
      "Converted complex business requirements into structured, developer-ready UI flows",
      "Designed UX flows including edge cases, error states, and empty states",
    ],
    color: "cyan",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      data-ocid="experience.section"
      className="relative py-32 px-6"
    >
      {/* Subtle background */}
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
            <p className="section-label shrink-0">Experience</p>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Where I've <span className="text-blue-400">shipped.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
                data-ocid={`experience.item.${i + 1}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-5.5 top-4 w-5 h-5 rounded-full border-2 border-blue-500 bg-[#0a0a0a] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl bg-[#0f0f0f] card-glow">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-blue-400" />
                        <span className="text-xs font-body text-blue-400 font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {exp.title}
                      </h3>
                      <p className="text-white/50 text-sm font-body mt-0.5">
                        {exp.company} — {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-white/35 font-body shrink-0">
                      <Calendar size={12} />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-sm text-white/60 font-body"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
