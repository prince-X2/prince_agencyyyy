"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 850));

    setSuccess(true);
    setErrors({});
    setIsSubmitting(false);
    setForm({ name: "", email: "", message: "" });
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    if (success) setSuccess(false);
  };

  return (
    <section
      id="contact"
      className="flex min-h-[94svh] items-center px-6 py-4 sm:px-10 sm:py-6 lg:px-14"
    >
      <div className="mx-auto grid w-full gap-12 rounded-3xl border border-[#10242b]/10 bg-white/75 p-10 shadow-[0_28px_56px_-35px_rgba(16,36,43,0.85)] backdrop-blur md:grid-cols-2 md:p-14">
        <div>
          <p className="reveal text-base font-semibold uppercase tracking-[0.16em] text-[#1b7d79] sm:text-lg">
            Contact
          </p>
          <h2 className="reveal mt-3 text-5xl font-bold leading-tight text-[#0f2027] sm:text-6xl lg:text-7xl">
            Tell us what you are building.
          </h2>
          <p className="reveal mt-5 text-xl leading-relaxed text-[#10242b]/75 lg:text-2xl">
            Share your goals and timeline. We will respond with a clear next
            step and project estimate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="reveal space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-[#10242b]/15 bg-white/90 px-5 py-4 text-xl text-[#10242b] placeholder:text-[#10242b]/45 focus:border-[#1b7d79] focus:outline-none focus:ring-2 focus:ring-[#1b7d79]/20"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name && <p className="text-base text-[#b14545]">{errors.name}</p>}

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-[#10242b]/15 bg-white/90 px-5 py-4 text-xl text-[#10242b] placeholder:text-[#10242b]/45 focus:border-[#1b7d79] focus:outline-none focus:ring-2 focus:ring-[#1b7d79]/20"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && <p className="text-base text-[#b14545]">{errors.email}</p>}

          <textarea
            placeholder="Your Message"
            className="w-full resize-none rounded-xl border border-[#10242b]/15 bg-white/90 px-5 py-4 text-xl text-[#10242b] placeholder:text-[#10242b]/45 focus:border-[#1b7d79] focus:outline-none focus:ring-2 focus:ring-[#1b7d79]/20"
            rows="6"
            maxLength={500}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          {errors.message && <p className="text-base text-[#b14545]">{errors.message}</p>}
          <p className="text-sm text-[#10242b]/50">{form.message.length}/500 characters</p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-[#10242b] py-4 text-xl font-semibold text-white transition hover:bg-[#0c1a20] disabled:cursor-not-allowed disabled:bg-[#10242b]/60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
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
