"use client";

import { useEffect, useState } from "react";

const words = ["convert faster", "feel memorable", "ship cleaner"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (event, selector) => {
    event.preventDefault();
    const section = document.querySelector(selector);
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });

    window.history.pushState(null, "", selector);
  };

  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden px-6 py-20 sm:px-10 sm:py-24 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-20 h-72 w-72 rounded-full bg-[#1ca49f]/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-[#ff8a4c]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[78svh] w-full flex-col justify-center">
        <p className="reveal mb-8 inline-flex w-fit rounded-full border border-[#10242b]/20 bg-white/70 px-7 py-3 text-base font-semibold tracking-[0.14em] text-[#10242b]/80 shadow-[0_12px_26px_-22px_rgba(16,36,43,0.9)] backdrop-blur sm:text-lg">
          Digital Studio For Bold Brands
        </p>

        <h1 className="reveal max-w-6xl text-6xl font-bold leading-[1.02] text-[#0f2027] sm:text-7xl lg:text-8xl">
          Prince Agency crafts websites that look sharp and{" "}
          <span className="dynamic-word" key={words[wordIndex]}>
            {words[wordIndex]}
          </span>
          .
        </h1>

        <p className="reveal mt-8 max-w-5xl text-2xl leading-relaxed text-[#10242b]/78 lg:text-3xl">
          From brand strategy to launch-ready products, we design, build, and
          grow digital experiences with clear business impact.
        </p>

        <div className="reveal mt-12 flex flex-wrap gap-6">
          <a
            href="#portfolio"
            onClick={(event) => scrollToSection(event, "#portfolio")}
            className="rounded-full bg-[#10242b] px-12 py-5 text-xl font-semibold text-white shadow-[0_14px_30px_-18px_rgba(16,36,43,0.9)] transition hover:-translate-y-0.5 hover:bg-[#0c1a20] sm:text-2xl"
          >
            View Work
          </a>
          <a
            href="#contact"
            onClick={(event) => scrollToSection(event, "#contact")}
            className="rounded-full border border-[#10242b]/25 bg-white/75 px-12 py-5 text-xl font-semibold text-[#10242b] shadow-[0_12px_24px_-20px_rgba(16,36,43,0.85)] transition hover:-translate-y-0.5 hover:border-[#10242b]/40 sm:text-2xl"
          >
            Start a Project
          </a>
        </div>

        <div className="reveal mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          <div className="kpi-card">
            <p className="kpi-value">120+</p>
            <p className="kpi-label">Projects launched</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-value">4.9/5</p>
            <p className="kpi-label">Average client rating</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-value">32%</p>
            <p className="kpi-label">Typical conversion lift</p>
          </div>
        </div>
      </div>
    </section>
  );
}
