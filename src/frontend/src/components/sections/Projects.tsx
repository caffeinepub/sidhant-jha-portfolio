import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "RESET",
    subtitle: "On-Demand Cleaning Services Platform",
    description:
      "Booking and scheduling system for on-demand cleaning services with real-time availability, dynamic scheduling, and provider matching built for scale.",
    tech: ["React Native", "Flutter", "REST APIs", "Node.js"],
    github: "#",
    demo: "#",
    accent: "#3b82f6",
    index: "01",
  },
  {
    title: "Geo Viral Tweet Predictor",
    subtitle: "ML-Powered Social Media Analytics",
    description:
      "ML pipeline using geographic and contextual features to predict tweet virality. Includes feature engineering, data preprocessing, and predictive modeling at scale.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "#",
    demo: "#",
    accent: "#8b5cf6",
    index: "02",
  },
  {
    title: "AI Career Guide",
    subtitle: "Intelligent Career Guidance Platform",
    description:
      "Career guidance platform powered by Gemini API serving 500+ users with 200ms average latency, 99.5% success rate, and personalized AI-driven recommendations.",
    tech: ["Next.js", "PostgreSQL", "Gemini API", "TypeScript"],
    github: "#",
    demo: "#",
    accent: "#10b981",
    index: "03",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      data-ocid="projects.section"
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
          {/* Editorial section header with rule */}
          <div className="section-rule">
            <p className="section-label shrink-0">Projects</p>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Things I've <span className="text-blue-400">built.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              data-ocid={`projects.card.${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl bg-[#0f0f0f] overflow-hidden card-glow"
            >
              {/* Project thumbnail — richer visual */}
              <div
                className="relative aspect-video overflow-hidden"
                style={{ background: "#111" }}
              >
                {/* Grid pattern */}
                <div className="absolute inset-0 grid-pattern" />
                {/* Color wash */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 80% 80% at 40% 55%, ${project.accent}28 0%, transparent 70%)`,
                  }}
                />
                {/* Abstract geometry */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-20 h-20">
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        border: `1px solid ${project.accent}35`,
                        background: `${project.accent}0d`,
                      }}
                    />
                    <div
                      className="absolute inset-3 rounded-xl rotate-12"
                      style={{
                        border: `1px solid ${project.accent}20`,
                        background: `${project.accent}08`,
                      }}
                    />
                    <div
                      className="absolute inset-6 rounded-lg -rotate-6"
                      style={{
                        background: `${project.accent}18`,
                      }}
                    />
                  </div>
                </div>
                {/* Project number — top-right */}
                <span className="absolute top-3 right-3 font-mono text-[10px] text-white/20 tracking-widest">
                  {project.index}
                </span>
                {/* Primary tech tag */}
                <div className="absolute bottom-3 left-3">
                  <span
                    className="text-[10px] font-body font-semibold px-2 py-1 rounded-md tracking-wide"
                    style={{
                      color: project.accent,
                      background: `${project.accent}14`,
                      border: `1px solid ${project.accent}25`,
                    }}
                  >
                    {project.tech[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 pt-4">
                <div className="flex-1">
                  {/* Title + subtitle */}
                  <h3 className="font-display font-bold text-xl text-white mb-0.5 group-hover:text-blue-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-white/35 font-body mb-3 tracking-wide uppercase">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-white/55 font-body leading-[1.7] mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-[11px] font-body bg-white/[0.04] text-white/45 border border-white/[0.07] hover:border-blue-400/30 hover:text-blue-300 transition-colors px-2.5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-1 border-t border-white/[0.06]">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-white/45 hover:text-white/80 hover:bg-white/[0.05] text-xs rounded-lg mt-3"
                    asChild
                    data-ocid="projects.secondary_button"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={12} className="mr-1.5" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 text-xs rounded-lg mt-3 font-body font-medium"
                    style={{
                      background: `${project.accent}18`,
                      color: project.accent,
                      border: `1px solid ${project.accent}28`,
                    }}
                    asChild
                    data-ocid="projects.primary_button"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={12} className="mr-1.5" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
