"use client";

import { useEffect, useRef } from "react";

export default function ServiceCard({ title, description }) {
  const cardRef = useRef(null);
  const rafRef = useRef(0);
  const hoverRef = useRef(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const animate = () => {
      const card = cardRef.current;
      if (card) {
        const target = targetRef.current;
        const current = currentRef.current;

        current.x += (target.x - current.x) * 0.12;
        current.y += (target.y - current.y) * 0.12;

        const lift = hoverRef.current ? -8 : 0;
        card.style.transform = `perspective(900px) rotateX(${current.y}deg) rotateY(${current.x}deg) translateY(${lift}px)`;
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

    targetRef.current.x = ((x / rect.width) - 0.5) * 10;
    targetRef.current.y = (0.5 - (y / rect.height)) * 10;
  };

  const handleEnter = () => {
    hoverRef.current = true;
  };

  const handleLeave = () => {
    hoverRef.current = false;
    targetRef.current.x = 0;
    targetRef.current.y = 0;
  };

  return (
    <div
      ref={cardRef}
      className="group reveal card-float h-full rounded-2xl border border-[#10242b]/10 bg-white/85 p-5 text-left shadow-[0_18px_44px_-26px_rgba(16,36,43,0.58)] backdrop-blur transition duration-300 hover:border-[#1b7d79]/45 sm:p-8"
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="mb-5 h-2 w-16 rounded-full bg-[#ff8a4c] transition group-hover:w-24 group-hover:bg-[#1ca49f]" />
      <h3 className="text-2xl font-bold text-[#0f2027] sm:text-3xl lg:text-4xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-[#10242b]/75 sm:text-xl">{description}</p>
    </div>
  );
}
