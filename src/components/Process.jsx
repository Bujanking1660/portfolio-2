import { process } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section
      className="mx-auto max-w-[var(--maxw)] px-[var(--pad)] py-24 md:py-32"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <Reveal className="mb-14 md:mb-20">
        <h2
          className="text-reveal text-[clamp(2.2rem,6vw,4.5rem)] leading-none uppercase"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
        >
          How I work
        </h2>
        <p
          className="mt-4 max-w-md text-[1.05rem]"
          style={{ color: "var(--ink-soft)" }}
        >
          A repeatable process from discovery to delivery.
        </p>
      </Reveal>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line — desktop only */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: "var(--line)" }}
        />

        {process.map((p, i) => {
          const isLeft = i % 2 === 0;
          return (
            <Reveal key={p.step} delay={i * 150}>
              <div
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 mb-16 last:mb-0 items-center`}
              >
                {/* Dot on timeline — desktop */}
                <div
                  className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-10"
                  style={{
                    borderColor: "var(--accent)",
                    background: "var(--canvas)",
                  }}
                />

                {/* Content side */}
                <div
                  className={`${
                    isLeft ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <span
                    className="block text-[clamp(3rem,6vw,5rem)] leading-none uppercase opacity-10"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.step}
                  </span>
                  <h3
                    className="text-2xl mt-1 mb-3 uppercase"
                    style={{
                      fontFamily: "var(--font-display)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[0.95rem] leading-relaxed max-w-md"
                    style={{
                      color: "var(--ink-soft)",
                      marginLeft: isLeft ? "auto" : undefined,
                    }}
                  >
                    {p.description}
                  </p>
                </div>

                {/* Empty space for alternation — desktop */}
                {isLeft && <div className="hidden md:block" />}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
