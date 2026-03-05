import Image from "next/image";

export default function ProjectCard({ title, image }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-[#10242b]/15 bg-white/70 shadow-[0_18px_40px_-30px_rgba(16,36,43,0.75)] backdrop-blur">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-[22rem]"
      />
      <div className="absolute inset-x-4 bottom-4 rounded-xl bg-[#10242b]/82 px-5 py-4 text-left text-white backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-wider text-[#f3f1ea]/70">
          Case Study
        </p>
        <h3 className="mt-2 text-2xl font-semibold lg:text-3xl">{title}</h3>
      </div>
    </div>
  );
}
