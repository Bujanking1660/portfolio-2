import { stats } from "../data/portfolioData";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function Stats() {
  return (
    <section
      className="relative mx-auto max-w-[var(--maxw)] px-[var(--pad)] py-20 md:py-28"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="text-center">
              <p
                className="scroll-number text-[clamp(2.8rem,7vw,5rem)] leading-none uppercase"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
              >
                <CountUp target={s.num} suffix={s.suffix} />
              </p>
              <p
                className="mt-3 text-sm font-mono uppercase tracking-[0.1em]"
                style={{ color: "var(--ink-soft)" }}
              >
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
