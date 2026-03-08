import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        data-ocid="navbar.panel"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 border border-white/10 shadow-lg shadow-black/40"
            : "bg-[#0a0a0a]/70 border border-white/5"
        } backdrop-blur-md w-[calc(100%-2rem)] max-w-4xl`}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-black text-lg text-white tracking-tight hover:text-blue-400 transition-colors"
          data-ocid="navbar.link"
        >
          SJ
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              data-ocid="navbar.link"
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5 font-body"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button
            size="sm"
            onClick={() => handleNavClick("#contact")}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-4 rounded-xl font-body"
            data-ocid="navbar.primary_button"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-1.5 text-white/60 hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="navbar.toggle"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-[#111]/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl"
            data-ocid="navbar.panel"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-body"
                  data-ocid="navbar.link"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-white/10 mt-2">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-xl font-body"
                  onClick={() => handleNavClick("#contact")}
                  data-ocid="navbar.primary_button"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
