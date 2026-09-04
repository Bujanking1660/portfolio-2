import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import OptionWheel from "./ui/OptionWheel";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Get in touch", href: "#contact" },
];

export default function Nav() {
  const [active, setActive] = useState("#top");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = document.querySelectorAll("section[id], footer[id]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSelect = useCallback(
    (_index, label) => {
      const navItem = navItems.find((n) => n.label === label);
      if (navItem) {
        setMenuOpen(false);
        requestAnimationFrame(() => {
          document
            .querySelector(navItem.href)
            ?.scrollIntoView({ behavior: "smooth" });
        });
      }
    },
    []
  );

  const activeIndex = navItems.findIndex((n) => n.href === active);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className="mx-auto max-w-[var(--maxw)] flex items-center justify-end px-[var(--pad)] py-4"
      >
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            opacity: menuOpen ? 0 : 1,
            pointerEvents: menuOpen ? "none" : "auto",
            background: scrolled ? "color-mix(in srgb, var(--canvas) 75%, transparent)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
            borderRadius: 999,
            padding: "8px",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav-overlay ${menuOpen ? "open" : ""}`}>
        <div
          className="nav-overlay-backdrop"
          onClick={() => setMenuOpen(false)}
        />
        <div className="nav-overlay-content">
          <button
            className="nav-overlay-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
          <div className="nav-overlay-wheel">
            <OptionWheel
              items={navItems.map((n) => n.label)}
              defaultSelected={activeIndex >= 0 ? activeIndex : 0}
              textColor="#6b6860"
              activeColor="#1a1a1a"
              side="left"
              fontSize={4}
              spacing={1.6}
              curve={1}
              tilt={6}
              blur={2}
              fade={0.25}
              smoothing={200}
              inset={80}
              loop={false}
              draggable
              onSelect={handleSelect}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
