import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  Code2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sidhantjha2002@gmail.com",
    href: "mailto:sidhantjha2002@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-6360054316",
    href: "tel:+916360054316",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/SenseiJha",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sidhant-jha-13324838a/",
  },
  {
    icon: Code2,
    label: "LeetCode",
    href: "#",
  },
];

export function Contact() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsPending(true);
    setSubmitStatus("idle");

    try {
      await actor?.submitMessage(name.trim(), email.trim(), message.trim());
      setSubmitStatus("success");
      toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitStatus("error");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="relative py-40 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-rule">
            <p className="section-label shrink-0">Get In Touch</p>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-2xl">
            Let's build something{" "}
            <span className="text-blue-400">meaningful.</span>
          </h2>
          <p className="text-white/45 text-base font-body mt-4 max-w-md">
            Interested in building something meaningful together?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Contact items */}
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 group"
                data-ocid="contact.link"
              >
                <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-blue-400/30 group-hover:bg-blue-400/10 transition-all">
                  <item.icon
                    size={16}
                    className="text-white/50 group-hover:text-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs text-white/35 font-body">
                    {item.label}
                  </p>
                  <p className="text-sm text-white/70 group-hover:text-white font-body transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social row */}
            <div className="pt-4 border-t border-white/8">
              <p className="text-xs text-white/30 font-body mb-4 uppercase tracking-widest">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={s.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all"
                    data-ocid="contact.link"
                  >
                    <s.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/40 font-body">
                Open to new opportunities
              </span>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl border border-white/8 bg-[#111] space-y-4"
            >
              <div className="space-y-2">
                <Label
                  htmlFor="contact-name"
                  className="text-xs text-white/40 font-body"
                >
                  Name
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isPending}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl font-body text-sm"
                  data-ocid="contact.input"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="contact-email"
                  className="text-xs text-white/40 font-body"
                >
                  Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isPending}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl font-body text-sm"
                  data-ocid="contact.input"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="contact-message"
                  className="text-xs text-white/40 font-body"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="What are you working on?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={isPending}
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl font-body text-sm resize-none"
                  data-ocid="contact.textarea"
                />
              </div>

              {/* Status states */}
              {submitStatus === "success" && (
                <div
                  className="text-xs text-green-400 font-body py-2"
                  data-ocid="contact.success_state"
                >
                  ✓ Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div
                  className="text-xs text-red-400 font-body py-2"
                  data-ocid="contact.error_state"
                >
                  ✕ Something went wrong. Please try again.
                </div>
              )}

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-body font-semibold transition-all hover:-translate-y-0.5"
                data-ocid="contact.submit_button"
              >
                {isPending ? (
                  <>
                    <Loader2
                      size={16}
                      className="mr-2 animate-spin"
                      data-ocid="contact.loading_state"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
