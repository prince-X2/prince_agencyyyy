"use client";

import { useEffect, useRef } from "react";

export default function InteractiveEffects() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!glow || !supportsFinePointer || reduceMotion) {
      if (glow) glow.style.display = "none";
      return;
    }

    const onPointerMove = (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    };

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    window.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}