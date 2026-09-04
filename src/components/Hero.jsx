import { useEffect, useRef, useState } from "react";
import { profile, contactCtaLabel, heroImages } from "../data/portfolioData";

function LetterReveal({ text, baseDelay = 0 }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="hero-letter"
          style={{ "--ld": `${baseDelay + i * 55}ms` }}
        >
          {ch}
        </span>
      ))}
    </>
  );
}

function Poster({ img, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`poster ${inView ? "is-visible" : ""} ${
        img.parallax === "slow"
          ? "parallax-up-1"
          : img.parallax === "medium"
          ? "parallax-up-2"
          : "parallax-up-3"
      }`}
      style={{
        left: `${img.x}%`,
        top: `${img.y}%`,
        width: img.w,
        height: img.w * 1.25,
        "--r": `${img.rotate}deg`,
        "--pd": `${200 + index * 140}ms`,
        zIndex: img.z,
      }}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading={index < 3 ? "eager" : "lazy"}
      />
    </div>
  );
}

export default function Hero() {
  const { firstName, lastName } = profile;

  return (
    <section
      id="top"
      className="relative mx-auto max-w-[var(--maxw)] px-[var(--pad)] pt-32 pb-12 md:pt-40 md:pb-20"
      style={{ minHeight: "min(100dvh, 900px)" }}
    >
      {/* Scattered poster images */}
      <div className="absolute inset-0 pointer-events-none">
        {heroImages.map((img, i) => (
          <div key={i} className="pointer-events-auto">
            <Poster img={img} index={i} />
          </div>
        ))}
      </div>

      {/* Eyebrow — blended with images */}
      <p
        className="relative z-10 font-mono text-xs uppercase tracking-[0.2em] mb-8"
        style={{
          color: "var(--ink)",
          textShadow:
            "0 0 25px var(--canvas), 0 0 50px var(--canvas), 0 0 80px color-mix(in srgb, var(--canvas) 60%, transparent)",
          opacity: 0.8,
        }}
      >
        {profile.role}
      </p>

      {/* Massive display type */}
      <div className="relative z-10">
        <h1 className="hero-title" aria-label={profile.name}>
          <span className="block">
            <LetterReveal text={firstName} baseDelay={100} />
          </span>
          <span className="block" style={{ color: "var(--accent)" }}>
            <LetterReveal
              text={lastName}
              baseDelay={100 + firstName.length * 55 + 80}
            />
          </span>
        </h1>
      </div>

      {/* CTA buttons */}
      <div className="relative z-20 mt-10 md:mt-14">
        <div className="flex flex-wrap gap-4">
          <a href="#work" className="btn btn--primary">
            View work
          </a>
          <a href="#contact" className="btn btn--ghost">
            {contactCtaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
