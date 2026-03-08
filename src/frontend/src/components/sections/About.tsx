import { motion } from "motion/react";

const highlights = [
  "Backend Systems Engineering",
  "Mobile Development",
  "AI Integrations",
  "Strong CS Fundamentals",
  "Fast Learner",
  "Toastmasters Leadership",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function About() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="relative py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="section-rule">
            <p className="section-label shrink-0">About</p>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-2xl">
            Building systems that <span className="text-blue-400">matter.</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: storytelling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-white/70 text-lg leading-relaxed font-body">
              I'm a Computer Science engineer with hands-on experience in
              backend systems, mobile platforms, and applied AI. I enjoy working
              at the intersection of reliability and intelligence — building
              APIs that scale, mobile apps that feel native, and AI integrations
              that actually work in production.
            </p>
            <p className="text-white/55 text-base leading-relaxed font-body">
              Whether it's designing a PostgreSQL schema for a fintech platform,
              integrating Gemini LLM APIs with proper retry and rate-limiting
              logic, or architecting a clean REST service — I approach every
              problem with a systems mindset first.
            </p>
            <p className="text-white/55 text-base leading-relaxed font-body">
              Beyond tech, I'm an active Toastmasters member — which means I
              bring the same clarity I apply to codebases to how I communicate
              ideas across teams.
            </p>

            {/* Philosophy quote */}
            <div className="relative mt-8 pl-5 border-l-2 border-blue-500/60">
              <p className="text-white/80 text-base italic leading-relaxed font-body">
                "I enjoy building systems that are simple on the surface but
                powerful underneath — from scalable APIs to intelligent
                applications."
              </p>
            </div>
          </motion.div>

          {/* Right: highlight pills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-xs tracking-widest uppercase text-white/30 font-body mb-6">
              Core Strengths
            </p>
            <div className="flex flex-wrap gap-3">
              {highlights.map((h, i) => (
                <motion.span
                  key={h}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  className="px-4 py-2 rounded-xl text-sm font-body font-medium border border-white/10 bg-white/5 text-white/70 hover:border-blue-400/40 hover:text-blue-300 hover:bg-blue-400/5 transition-all cursor-default"
                >
                  {h}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Users served" },
                { value: "99.5%", label: "API success rate" },
                { value: "~20%", label: "Response time saved" },
                { value: "3+", label: "Years Toastmasters" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-xl bg-[#0f0f0f] card-glow"
                >
                  <div className="font-display font-black text-2xl text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 font-body mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
