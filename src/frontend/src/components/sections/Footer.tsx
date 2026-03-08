import { Code2, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/SenseiJha",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sidhant-jha-13324838a/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:sidhantjha2002@gmail.com",
    label: "Email",
  },
  {
    icon: Code2,
    href: "#",
    label: "LeetCode",
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      data-ocid="footer.section"
      className="relative border-t border-white/8 py-12 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & copyright */}
        <div className="text-center md:text-left">
          <div className="font-display font-black text-lg text-white mb-1">
            Sidhant Jha
          </div>
          <p className="text-xs text-white/30 font-body">
            © {year} Sidhant Jha. All rights reserved.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={
                s.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              aria-label={s.label}
              className="w-9 h-9 rounded-lg border border-white/10 bg-white/3 flex items-center justify-center text-white/40 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/8 transition-all"
              data-ocid="footer.link"
            >
              <s.icon size={14} />
            </a>
          ))}
        </div>

        {/* Attribution */}
        <p className="text-xs text-white/25 font-body">
          Built with ❤️ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-blue-400 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
