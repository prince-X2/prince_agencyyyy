export default function ServiceCard({ title, description }) {
  return (
    <div className="group h-full rounded-2xl border border-[#10242b]/10 bg-white/80 p-8 text-left shadow-[0_14px_40px_-24px_rgba(16,36,43,0.55)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#1b7d79]/40">
      <div className="mb-5 h-2 w-16 rounded-full bg-[#ff8a4c] transition group-hover:w-20" />
      <h3 className="text-3xl font-bold text-[#0f2027] lg:text-4xl">{title}</h3>
      <p className="mt-3 text-xl leading-relaxed text-[#10242b]/75">{description}</p>
    </div>
  );
}
