import { useState, useEffect, useRef } from "react";
import { profile, socials, contactCtaLabel } from "../data/portfolioData";
import Reveal from "./Reveal";

const footerMenu = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

function Typewriter({ texts, typingSpeed = 90, deletingSpeed = 50, pause = 2200 }) {
  const [displayText, setDisplayText] = useState("");
  const indexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let timeout;

    const tick = () => {
      const current = texts[indexRef.current % texts.length];

      if (!isDeletingRef.current) {
        setDisplayText(current.slice(0, (displayText.length || 0) + 1));
        if ((displayText.length || 0) + 1 === current.length) {
          timeout = setTimeout(() => {
            isDeletingRef.current = true;
            tick();
          }, pause);
          return;
        }
      } else {
        const len = displayText.length - 1;
        setDisplayText(current.slice(0, len));
        if (len === 0) {
          isDeletingRef.current = false;
          indexRef.current += 1;
        }
      }
    };

    const speed = isDeletingRef.current ? deletingSpeed : typingSpeed;
    timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [displayText, texts, typingSpeed, deletingSpeed, pause]);

  return (
    <span>
      {displayText}
      <span
        className="inline-block w-[3px] ml-1"
        style={{
          height: "inherit",
          background: "var(--canvas)",
          verticalAlign: "middle",
          animation: "blink 0.8s step-end infinite",
        }}
      />
    </span>
  );
}

export default function Contact() {
  return (
    <footer id="contact">
      {/* Big CTA block — colored background like MAGZY subscribe */}
      <div
        className="relative px-[var(--pad)] py-20 md:py-28 overflow-hidden"
        style={{ background: "var(--accent)" }}
      >
        <div className="mx-auto max-w-[var(--maxw)]">
          <Reveal>
            <p
              className="font-mono text-xs uppercase tracking-[0.12em] mb-5"
              style={{ color: "var(--canvas)", opacity: 0.7 }}
            >
              {contactCtaLabel}
            </p>
            <h2
              className="uppercase leading-[0.88] max-w-4xl"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 10vw, 8rem)",
                letterSpacing: "0.01em",
                color: "var(--canvas)",
              }}
            >
              <Typewriter
                texts={["Let's build", "Let's ship", "Let's create"]}
              />
              <span className="block">something</span>
              <span className="block" style={{ opacity: 0.6 }}>
                worth shipping.
              </span>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Footer content — magazine grid */}
      <div className="px-[var(--pad)] py-16 md:py-20" style={{ background: "var(--canvas-2)" }}>
        <div className="mx-auto max-w-[var(--maxw)]">
          <div className="grid md:grid-cols-12 gap-12 md:gap-8">
            {/* Left — brand */}
            <div className="md:col-span-5">
              <Reveal>
                <h3
                  className="leading-none uppercase mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3rem, 8vw, 6rem)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {profile.firstName}
                </h3>
              </Reveal>
              <Reveal delay={60}>
                <p
                  className="text-[0.9rem] leading-relaxed max-w-xs"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--ink-soft)",
                  }}
                >
                  Frontend engineer and creative UI designer. Building interfaces
                  that feel intentional, not decorative.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-block mt-6 text-[0.85rem] font-semibold no-underline"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--ink)",
                    borderBottom: "1.5px solid var(--ink)",
                    paddingBottom: 2,
                  }}
                >
                  {profile.email}
                </a>
              </Reveal>
            </div>

            {/* Right — menu / contact / follow */}
            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              <Reveal delay={80}>
                <div>
                  <p
                    className="font-mono text-[0.65rem] uppercase tracking-[0.12em] mb-5"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    Menu
                  </p>
                  <ul className="space-y-2.5">
                    {footerMenu.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-[0.85rem] no-underline uppercase tracking-wider transition-colors hover:text-[var(--accent)]"
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "var(--ink)",
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div>
                  <p
                    className="font-mono text-[0.65rem] uppercase tracking-[0.12em] mb-5"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    Contact
                  </p>
                  <div className="space-y-2.5">
                    <p
                      className="text-[0.85rem]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {profile.name}
                    </p>
                    <p
                      className="text-[0.85rem]"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--ink-soft)",
                      }}
                    >
                      {profile.location}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div>
                  <p
                    className="font-mono text-[0.65rem] uppercase tracking-[0.12em] mb-5"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    Follow
                  </p>
                  <ul className="space-y-2.5">
                    {socials.map((s) => (
                      <li key={s.name}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[0.85rem] no-underline uppercase tracking-wider transition-colors hover:text-[var(--accent)]"
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "var(--ink)",
                          }}
                        >
                          {s.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-[var(--pad)] py-6" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="mx-auto max-w-[var(--maxw)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="font-mono text-[0.7rem]"
            style={{ color: "var(--ink-soft)" }}
          >
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <p
            className="font-mono text-[0.7rem]"
            style={{ color: "var(--ink-soft)" }}
          >
            Built with React &amp; a lot of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
