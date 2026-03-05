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
      className="flex min-h-[94svh] items-center px-6 py-4 sm:px-10 sm:py-6 lg:px-14"
    >
      <div className="mx-auto w-full">
        <p className="text-base font-semibold uppercase tracking-[0.16em] text-[#1b7d79] sm:text-lg">
          What We Do
        </p>
        <h2 className="mt-3 max-w-4xl text-5xl font-bold leading-tight text-[#0f2027] sm:text-6xl lg:text-7xl">
          Focused services built to move your business forward.
        </h2>
        <p className="mt-5 max-w-4xl text-xl leading-relaxed text-[#10242b]/75 lg:text-2xl">
          We combine strategy, design, and engineering to deliver clear,
          measurable results across your digital presence.
        </p>

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
