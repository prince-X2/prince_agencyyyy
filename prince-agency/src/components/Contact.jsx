"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required");
      return;
    }

    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="flex min-h-[94svh] items-center px-6 py-4 sm:px-10 sm:py-6 lg:px-14"
    >
      <div className="mx-auto grid w-full gap-12 rounded-3xl border border-[#10242b]/10 bg-white/70 p-10 shadow-[0_24px_50px_-35px_rgba(16,36,43,0.85)] backdrop-blur md:grid-cols-2 md:p-14">
        <div>
          <p className="text-base font-semibold uppercase tracking-[0.16em] text-[#1b7d79] sm:text-lg">
            Contact
          </p>
          <h2 className="mt-3 text-5xl font-bold leading-tight text-[#0f2027] sm:text-6xl lg:text-7xl">
            Tell us what you are building.
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-[#10242b]/75 lg:text-2xl">
            Share your goals and timeline. We will respond with a clear next
            step and project estimate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-[#10242b]/15 bg-white px-5 py-4 text-xl text-[#10242b] placeholder:text-[#10242b]/45 focus:border-[#1b7d79] focus:outline-none focus:ring-2 focus:ring-[#1b7d79]/20"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-[#10242b]/15 bg-white px-5 py-4 text-xl text-[#10242b] placeholder:text-[#10242b]/45 focus:border-[#1b7d79] focus:outline-none focus:ring-2 focus:ring-[#1b7d79]/20"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

            <textarea
            placeholder="Your Message"
            className="w-full resize-none rounded-xl border border-[#10242b]/15 bg-white px-5 py-4 text-xl text-[#10242b] placeholder:text-[#10242b]/45 focus:border-[#1b7d79] focus:outline-none focus:ring-2 focus:ring-[#1b7d79]/20"
            rows="6"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#10242b] py-4 text-xl font-semibold text-white transition hover:bg-[#0c1a20]"
          >
            Send Message
          </button>

          {success && (
            <p className="text-lg font-medium text-[#1b7d79]">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
