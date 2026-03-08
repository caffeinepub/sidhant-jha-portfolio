import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import type { Transition } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" } as Transition,
});

const socialLinks = [
  { icon: Github, href: "https://github.com/SenseiJha", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sidhant-jha-13324838a/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:sidhantjha2002@gmail.com", label: "Email" },
  { icon: Code2, href: "#", label: "LeetCode" },
];

export function Hero() {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-glow noise-overlay"
    >
      {/* Fine dot grid — very subtle */}
      <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />

      {/* Atmospheric glow orbs — stronger, positioned intentionally */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          right: "-5%",
          width: "500px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Thin horizontal beam below hero text — signature detail */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(59,130,246,0.35), transparent)",
          filter: "blur(1px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">
        {/* Status badge */}
        <motion.div {...fadeUp(0.05)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/50 font-body backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <MapPin size={11} className="text-blue-400" />
            Bangalore, India &nbsp;·&nbsp; Open to opportunities
          </span>
        </motion.div>

        {/* Name — single unified block, full visual weight */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-display font-black leading-[0.92] tracking-[-0.03em] mb-7"
          style={{ fontSize: "clamp(4rem, 13vw, 10rem)" }}
        >
          <span className="gradient-text">Sidhant Jha</span>
        </motion.h1>

        {/* Role pills row — more editorial than plain text */}
        <motion.div
          {...fadeUp(0.28)}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {["Backend Engineer", "Mobile Builder", "Applied AI Explorer"].map(
            (role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-full text-sm font-body text-white/60 border border-white/[0.08] bg-white/[0.03]"
              >
                {role}
              </span>
            ),
          )}
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.38)}
          className="text-white/45 text-base sm:text-lg max-w-xl leading-relaxed font-body mb-3"
        >
          Working on run-of-the-mill ideas while staying curious about
          aerospace.
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.46)}
          className="text-white/30 text-sm max-w-md leading-relaxed font-body mb-10"
        >
          CS graduate focused on backend systems, scalable APIs, mobile
          platforms, and applied AI. Passionate about building reliable
          production-grade systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.54)}
          className="flex flex-col sm:flex-row gap-3 mb-12"
        >
          <Button
            onClick={handleScrollToProjects}
            className="relative bg-blue-600 hover:bg-blue-500 text-white px-10 py-6 text-sm rounded-xl font-body font-semibold transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(59,130,246,0.5), 0 4px 24px rgba(59,130,246,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
            data-ocid="hero.primary_button"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-white/12 text-white/65 hover:text-white hover:border-white/25 hover:bg-white/[0.04] px-10 py-6 text-sm rounded-xl font-body font-semibold transition-all duration-200 hover:-translate-y-0.5 bg-transparent"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
            data-ocid="hero.secondary_button"
          >
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.62)} className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={social.label}
              className="flex items-center justify-center w-10 h-10 rounded-xl text-white/40 transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
              whileHover={{
                scale: 1.1,
                y: -2,
                color: "#60a5fa",
              }}
              whileTap={{ scale: 0.95 }}
              data-ocid="hero.link"
            >
              <social.icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-1.5 text-white/18"
          >
            <span className="text-[10px] font-body tracking-[0.3em] uppercase">
              Scroll
            </span>
            <ArrowDown size={12} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
