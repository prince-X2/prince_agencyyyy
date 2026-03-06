import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences.",
    },
    {
      title: "Web Development",
      description: "Building fast and scalable web applications.",
    },
    {
      title: "Branding",
      description: "Designing powerful brand identities.",
    },
    {
      title: "Digital Marketing",
      description: "Helping businesses grow online presence.",
    },
  ];

  return (
    <section
      id="services"
      className="flex items-center px-4 py-14 sm:min-h-[94svh] sm:px-10 sm:py-6 lg:px-14"
    >
      <div className="mx-auto w-full">
        <p className="reveal text-base font-semibold uppercase tracking-[0.16em] text-[#1b7d79] sm:text-lg">
          What We Do
        </p>
        <h2 className="reveal mt-3 max-w-4xl text-3xl font-bold leading-tight text-[#0f2027] sm:text-6xl lg:text-7xl">
          Focused services built to move your business forward.
        </h2>
        <p className="reveal mt-5 max-w-4xl text-base leading-relaxed text-[#10242b]/75 sm:text-xl lg:text-2xl">
          We combine strategy, design, and engineering to deliver clear,
          measurable results across your digital presence.
        </p>

        <div className="reveal mt-6 flex flex-wrap gap-2 text-xs font-medium text-[#10242b]/70 sm:gap-3 sm:text-base">
          <span className="rounded-full border border-[#10242b]/15 bg-white/80 px-4 py-2">Fast delivery cycles</span>
          <span className="rounded-full border border-[#10242b]/15 bg-white/80 px-4 py-2">Performance-first engineering</span>
          <span className="rounded-full border border-[#10242b]/15 bg-white/80 px-4 py-2">Conversion-centered UX</span>
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
