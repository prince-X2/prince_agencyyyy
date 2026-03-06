"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ProjectCard({ title, image }) {
  const cardRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const animate = () => {
      const card = cardRef.current;
      if (card) {
        const target = targetRef.current;
        const current = currentRef.current;

        current.x += (target.x - current.x) * 0.1;
        current.y += (target.y - current.y) * 0.1;

        card.style.setProperty("--mx", `${current.x.toFixed(2)}px`);
        card.style.setProperty("--my", `${current.y.toFixed(2)}px`);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    targetRef.current.x = ((x / rect.width) - 0.5) * 18;
    targetRef.current.y = ((y / rect.height) - 0.5) * 18;
  };

  const handleLeave = () => {
    targetRef.current.x = 0;
    targetRef.current.y = 0;
  };

  return (
    <div
      ref={cardRef}
      className="group reveal project-card relative h-full overflow-hidden rounded-2xl border border-[#10242b]/15 bg-white/75 shadow-[0_22px_42px_-30px_rgba(16,36,43,0.75)] backdrop-blur"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="h-80 w-full object-cover lg:h-[22rem]"
      />
      <div className="absolute inset-x-4 bottom-4 rounded-xl bg-[#10242b]/82 px-5 py-4 text-left text-white shadow-[0_12px_24px_-16px_rgba(0,0,0,0.85)] backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-wider text-[#f3f1ea]/70">
          Case Study
        </p>
        <h3 className="mt-2 text-2xl font-semibold lg:text-3xl">{title}</h3>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),transparent_56%)] opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}
