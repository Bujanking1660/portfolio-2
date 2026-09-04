import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { projects } from "../data/portfolioData";

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      className="relative py-24 md:py-32"
      style={{ background: "var(--canvas)" }}
    >
      <div className="max-w-[var(--maxw)] mx-auto px-[var(--pad)]">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-mono text-xs uppercase tracking-[0.12em] mb-4"
            style={{ color: "var(--accent)" }}
          >
            Selected work
          </p>
          <h2
            className="leading-none uppercase mb-4"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "0.02em",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              color: "var(--ink)",
            }}
          >
            Projects
          </h2>
          <p
            className="max-w-lg"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "var(--ink-soft)",
              lineHeight: 1.6,
            }}
          >
            A selection of builds across AI, full-stack, and product systems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div ref={ref} className="bento-grid">
          {projects.map((project, i) => (
            <BentoCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 md:mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://github.com/Bujanking1660?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            View all on GitHub
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: 6 }}
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 16px;
        }
        .bento-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          min-height: 280px;
        }
        .bento-card--hero {
          grid-column: 1 / -1;
          min-height: 420px;
        }
        .bento-card__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bento-card:hover .bento-card__img {
          transform: scale(1.04);
          filter: brightness(0.4);
        }
        .bento-card__overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bento-card:hover .bento-card__overlay {
          opacity: 1;
        }
        .bento-card__gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.15) 50%,
            transparent 100%
          );
          z-index: 1;
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bento-card:hover .bento-card__gradient {
          opacity: 1;
        }
        .bento-card__tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono, "DM Mono", monospace);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin-bottom: 8px;
        }
        .bento-card__tag svg {
          width: 12px;
          height: 12px;
        }
        .bento-card__title {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          color: #fff;
          line-height: 1.1;
          margin-bottom: 6px;
        }
        .bento-card--hero .bento-card__title {
          font-size: clamp(2rem, 5vw, 3.2rem);
        }
        .bento-card__cat {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 12px;
        }
        .bento-card__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .bento-card__tech span {
          font-family: var(--font-mono, "DM Mono", monospace);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
        }
        .bento-card__badge {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 3;
          font-family: var(--font-mono, "DM Mono", monospace);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 5px 12px;
          border-radius: 999px;
          background: var(--accent);
          color: #fff;
          opacity: 0;
          transform: translateY(-4px);
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bento-card:hover .bento-card__badge {
          opacity: 1;
          transform: translateY(0);
        }
        .bento-card__arrow {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 3;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translate(-8px, 8px);
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bento-card:hover .bento-card__arrow {
          opacity: 1;
          transform: translate(0, 0);
        }
        .bento-card__arrow svg {
          width: 16px;
          height: 16px;
          color: #fff;
        }

        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .bento-card--hero {
            grid-column: 1 / 3;
            grid-row: 1 / 3;
            min-height: 520px;
          }
          .bento-card:not(.bento-card--hero) {
            min-height: 250px;
          }
        }

        @media (min-width: 1024px) {
          .bento-card__overlay {
            padding: 36px;
          }
          .bento-card--hero .bento-card__title {
            font-size: clamp(2.5rem, 4vw, 3.5rem);
          }
        }
      `}</style>
    </section>
  );
}

function BentoCard({ project, index, inView }) {
  const isHero = index === 0;

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className={`bento-card ${isHero ? "bento-card--hero" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="bento-card__img"
        loading="lazy"
      />

      <div className="bento-card__gradient" />

      {/* Top-left arrow */}
      <div className="bento-card__arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>

      {/* Top-right badge */}
      {project.collaborative && (
        <div className="bento-card__badge">Collaborative</div>
      )}

      {/* Bottom overlay */}
      <div className="bento-card__overlay">
        <div className="bento-card__tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          {project.category}
        </div>
        <h3 className="bento-card__title">{project.title}</h3>
        <p className="bento-card__cat">{project.description.slice(0, isHero ? 120 : 80)}...</p>
        <div className="bento-card__tech">
          {project.tech.slice(0, isHero ? 6 : 4).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
