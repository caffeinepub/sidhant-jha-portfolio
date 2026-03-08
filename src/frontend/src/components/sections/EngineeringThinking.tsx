import { BookOpen, Layers, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const cards = [
  {
    icon: Layers,
    title: "Systems First",
    body: "Designing modular architecture and clear API contracts for long-term maintainability. Every component should have one responsibility and a clear interface.",
    accent: "#3b82f6",
  },
  {
    icon: Zap,
    title: "Performance & Reliability",
    body: "Latency optimization, exponential backoff retries, and fault-tolerant design. Systems should degrade gracefully under load and recover automatically.",
    accent: "#f59e0b",
  },
  {
    icon: BookOpen,
    title: "Learning New Systems Quickly",
    body: "Comfortable integrating unfamiliar technologies rapidly in production environments. Curiosity is the best debugging tool.",
    accent: "#10b981",
  },
  {
    icon: Users,
    title: "Communication & Leadership",
    body: "Public speaking and peer mentoring through Toastmasters International. Great code deserves great communication.",
    accent: "#8b5cf6",
  },
];

export function EngineeringThinking() {
  return (
    <section
      id="thinking"
      data-ocid="thinking.section"
      className="relative py-32 px-6"
    >
      <div className="absolute inset-0 bg-[#0d0d0d] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <div className="section-rule">
            <p className="section-label shrink-0">Engineering Thinking</p>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-3xl">
            How I approach <span className="text-blue-400">hard problems.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/45 text-base font-body mb-16 max-w-xl"
        >
          I focus on designing systems that are reliable, scalable, and simple
          to understand.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-[#0f0f0f] card-glow"
              data-ocid={`thinking.card.${i + 1}`}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                style={{
                  background: `${card.accent}18`,
                  border: `1px solid ${card.accent}30`,
                }}
              >
                <card.icon size={18} style={{ color: card.accent }} />
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-white/55 font-body leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
