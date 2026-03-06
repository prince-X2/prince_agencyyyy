import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const projects = [
    { title: "Landing Website", image: "/images/project-1.png" },
    { title: "E-commercial Website", image: "/images/project-2.png" },
    { title: "Tic-Tac-Toe Game", image: "/images/project-3.png" },
  ];

  return (
    <section
      id="portfolio"
      className="flex min-h-[94svh] items-center px-4 py-14 sm:px-10 sm:py-6 lg:px-14"
    >
      <div className="mx-auto w-full">
        <p className="reveal text-base font-semibold uppercase tracking-[0.16em] text-[#1b7d79] sm:text-lg">
          Portfolio
        </p>
        <h2 className="reveal mt-3 max-w-5xl text-3xl font-bold leading-tight text-[#0f2027] sm:text-6xl lg:text-7xl">
          Selected projects that turned ideas into outcomes.
        </h2>
        <p className="reveal mt-5 max-w-4xl text-base leading-relaxed text-[#10242b]/75 sm:text-xl lg:text-2xl">
          Every build blends strategy, visual direction, and implementation depth to deliver measurable growth.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
