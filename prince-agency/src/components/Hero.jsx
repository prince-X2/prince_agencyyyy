export default function Hero() {
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
        <p className="mb-8 inline-flex w-fit rounded-full border border-[#10242b]/20 bg-white/60 px-7 py-3 text-base font-semibold tracking-[0.12em] text-[#10242b]/80 backdrop-blur sm:text-lg">
          Digital Studio For Bold Brands
        </p>

        <h1 className="max-w-6xl text-6xl font-bold leading-[1.05] text-[#0f2027] sm:text-7xl lg:text-8xl">
          Prince Agency crafts websites that look sharp and convert faster.
        </h1>

        <p className="mt-8 max-w-5xl text-2xl leading-relaxed text-[#10242b]/75 lg:text-3xl">
          From brand strategy to launch-ready products, we design, build, and
          grow digital experiences with clear business impact.
        </p>

        <div className="mt-12 flex flex-wrap gap-6">
          <a
            href="#portfolio"
            className="rounded-full bg-[#10242b] px-12 py-5 text-xl font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0c1a20] sm:text-2xl"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[#10242b]/25 bg-white/70 px-12 py-5 text-xl font-semibold text-[#10242b] transition hover:-translate-y-0.5 hover:border-[#10242b]/40 sm:text-2xl"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
