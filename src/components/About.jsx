import { profile, skills, stats } from "../data/portfolioData";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import Reveal from "./Reveal";

export default function About() {
  const imgRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    mouseX.set(dx * 20);
    mouseY.set(dy * 15);
  };

  return (
    <section id="about">
      <div className="relative mx-auto max-w-[var(--maxw)] px-[var(--pad)] pt-28 md:pt-36 pb-0">
        {/* Profile image with asymmetric radius */}
        <Reveal>
          <div className="relative overflow-visible">
            <motion.div
              ref={imgRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
              style={{
                borderRadius: "40px 40px 120px 40px",
                maxHeight: "65vh",
                overflow: "hidden",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="w-full"
            >
              <motion.img
                src={profile.photo}
                alt={`${profile.name} — profile`}
                className="w-full h-full object-cover block"
                style={{
                  minHeight: 400,
                  x: springX,
                  y: springY,
                  scale: 1.15,
                }}
              />
            </motion.div>

            {/* Floating stats card — right side */}
            <div
              className="hidden md:flex absolute right-0 bottom-8 flex-col items-end gap-1 px-8 py-6"
              style={{
                background: "var(--canvas)",
                borderRadius: "24px 24px 24px 0",
                boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-baseline gap-2">
                <span
                  className="text-[2.5rem] font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--accent)",
                  }}
                >
                  {stats[0].num}{stats[0].suffix}
                </span>
                <span
                  className="text-sm uppercase tracking-wider font-semibold"
                  style={{ fontFamily: "var(--font-body)", color: "var(--ink)" }}
                >
                  {stats[0].label}
                </span>
              </div>
              <span
                className="text-[0.8rem]"
                style={{ fontFamily: "var(--font-body)", color: "var(--ink-soft)" }}
              >
                {stats[3].num} {stats[3].label}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Stats bar — below image */}
        <Reveal delay={80}>
          <div
            className="flex flex-wrap items-center gap-4 md:gap-6 py-6"
            style={{ borderBottom: "1px solid var(--line)" }}
          >
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-sm font-bold"
                style={{ fontFamily: "var(--font-body)", color: "var(--accent)" }}
              >
                {stats[1].num}{stats[1].suffix}
              </span>
              <span
                className="text-sm"
                style={{ fontFamily: "var(--font-body)", color: "var(--ink-soft)" }}
              >
                {stats[1].label}
              </span>
            </div>
            <span className="text-[var(--line)]">|</span>
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-sm font-bold"
                style={{ fontFamily: "var(--font-body)", color: "var(--accent)" }}
              >
                {stats[2].num}{stats[2].suffix}
              </span>
              <span
                className="text-sm"
                style={{ fontFamily: "var(--font-body)", color: "var(--ink-soft)" }}
              >
                {stats[2].label}
              </span>
            </div>
            <span className="text-[var(--line)]">|</span>
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-sm font-bold"
                style={{ fontFamily: "var(--font-body)", color: "var(--accent)" }}
              >
                {stats[3].num}{stats[3].suffix}
              </span>
              <span
                className="text-sm"
                style={{ fontFamily: "var(--font-body)", color: "var(--ink-soft)" }}
              >
                {stats[3].label}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Headline + name row */}
        <div className="grid md:grid-cols-12 gap-8 items-start py-10 md:py-14">
          <div className="md:col-span-8">
            <Reveal delay={100}>
              <h2
                className="leading-[0.95]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                Building Software That{" "}
                <span style={{ color: "var(--accent)" }}>Solves Real Problems.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:text-right md:pt-4">
            <Reveal delay={140}>
              <p
                className="text-lg font-bold uppercase tracking-wider"
                style={{ fontFamily: "var(--font-body)", color: "var(--accent)" }}
              >
                {profile.firstName}
              </p>
              <p
                className="text-sm mt-1"
                style={{ fontFamily: "var(--font-body)", color: "var(--ink-soft)" }}
              >
                {profile.role}
              </p>
              <p
                className="text-sm mt-1"
                style={{ fontFamily: "var(--font-body)", color: "var(--ink-soft)" }}
              >
                {profile.location}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Body text + capabilities */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 pb-28 md:pb-36">
          <div className="md:col-span-7">
            <Reveal delay={160}>
              <p
                className="leading-[1.75] mb-6"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--ink)",
                }}
              >
                I'm a software engineer based in Bandung, Indonesia, with a passion
                for building full-stack applications and AI-powered tools. My work
                spans from crafting responsive frontends with{" "}
                <strong>React</strong> and{" "}
                <strong>Next.js</strong> to designing robust APIs with{" "}
                <strong>FastAPI</strong> and{" "}
                <strong>Express.js</strong>. I thrive at the intersection of
                software engineering and data science.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p
                className="leading-[1.75]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--ink-soft)",
                }}
              >
                From satellite-based slum detection using XGBoost and SHAP
                to multi-agent AI planners powered by Google Gemini, I enjoy
                tackling complex problems that combine{" "}
                <strong>machine learning</strong> with{" "}
                <strong>real-world impact</strong>. Whether it's a restaurant
                management system with real-time updates or a mental health
                tracking platform with OAuth authentication — I build
                products that are functional, scalable, and meaningful.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={180}>
              <p
                className="font-mono text-[0.65rem] uppercase tracking-[0.12em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-[0.8rem] rounded-full"
                    style={{
                      border: "1px solid var(--line)",
                      color: "var(--ink)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="#work"
                  className="btn btn--ghost text-sm"
                >
                  View work
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn--primary text-sm"
                >
                  Get in touch
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
