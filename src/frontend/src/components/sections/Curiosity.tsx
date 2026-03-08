import { Cpu, Globe, Telescope } from "lucide-react";
import { motion } from "motion/react";

const ideas = [
  {
    icon: Globe,
    title: "Complex Systems",
    body: "Fascinating parallels between distributed systems and orbital mechanics — both require precision, fault tolerance, and elegant coordination.",
    accent: "#3b82f6",
  },
  {
    icon: Cpu,
    title: "Precision Engineering",
    body: "Applying aerospace-grade precision to backend reliability — where failure is measured in milliseconds and correctness is non-negotiable.",
    accent: "#10b981",
  },
  {
    icon: Telescope,
    title: "Continuous Learning",
    body: "Staying current with advances in AI and aerospace technologies. The two fields are converging in remarkable ways.",
    accent: "#f59e0b",
  },
];

export function Curiosity() {
  return (
    <section
      id="curiosity"
      data-ocid="curiosity.section"
      className="relative py-32 px-6"
    >
      <div className="absolute inset-0 bg-[#0d0d0d] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="section-rule">
            <p className="section-label shrink-0">Curiosity</p>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-2xl">
            What keeps me <span className="text-blue-400">up at night.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/50 text-base font-body leading-relaxed max-w-2xl mb-16"
        >
          Beyond software engineering, Sidhant is deeply curious about aerospace
          systems — machines designed to operate in extreme environments with
          precision and reliability.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {ideas.map((idea, i) => (
            <motion.div
              key={idea.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-6 rounded-2xl bg-[#0f0f0f] card-glow"
              data-ocid={`curiosity.card.${i + 1}`}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: `${idea.accent}15`,
                  border: `1px solid ${idea.accent}25`,
                }}
              >
                <idea.icon size={20} style={{ color: idea.accent }} />
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-2">
                {idea.title}
              </h3>
              <p className="text-sm text-white/50 font-body leading-relaxed">
                {idea.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
