import { testimonials } from "../data/portfolioData";
import Reveal from "./Reveal";
import TestimonialsColumn from "./ui/TestimonialsColumn";

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);

export default function Testimonials() {
  return (
    <section
      className="mx-auto max-w-[var(--maxw)] px-[var(--pad)] py-24 md:py-32"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <Reveal className="mb-14 md:mb-20 text-center">
        <h2
          className="text-reveal text-[clamp(2.2rem,6vw,4.5rem)] leading-none uppercase"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "0.02em",
          }}
        >
          Kind words
        </h2>
      </Reveal>

      <div
        className="flex justify-center gap-6 mt-10 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          maxHeight: "740px",
        }}
      >
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:block"
          duration={19}
        />
      </div>
    </section>
  );
}
