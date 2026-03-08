import { Award, Mic, Trophy, Users } from "lucide-react";
import { motion } from "motion/react";

const achievements = [
  { icon: Trophy, text: "3+ years active member" },
  { icon: Award, text: "Completed two leadership levels" },
  { icon: Mic, text: "Delivered 10+ speeches" },
  { icon: Users, text: "Mentored peers in communication" },
];

export function Leadership() {
  return (
    <section
      id="leadership"
      data-ocid="leadership.section"
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
            <p className="section-label shrink-0">Leadership</p>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Beyond the <span className="text-blue-400">keyboard.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative p-8 md:p-10 rounded-2xl bg-[#0f0f0f] card-glow overflow-hidden"
          data-ocid="leadership.card"
        >
          {/* Accent glow */}
          <div className="absolute top-0 left-1/3 w-96 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center">
                  <Mic size={22} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Toastmasters International
                  </h3>
                  <p className="text-white/40 text-sm font-body">
                    Public Speaking & Leadership
                  </p>
                </div>
              </div>
              <p className="text-white/55 text-sm font-body leading-relaxed">
                As an active Toastmasters member for over three years, I've
                developed not just public speaking skills, but the ability to
                communicate complex technical ideas clearly — a skill that
                directly improves how I collaborate with teams and articulate
                system designs.
              </p>
            </div>

            {/* Right: achievement grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-xl border border-white/8 bg-white/3 flex flex-col items-start gap-2"
                  data-ocid={`leadership.item.${i + 1}`}
                >
                  <a.icon size={16} className="text-purple-400" />
                  <span className="text-xs text-white/60 font-body leading-snug">
                    {a.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
