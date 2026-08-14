"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setSubmitted(false);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Your message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Temporary submission simulation.
    // Replace this with your API/database/email endpoint later.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030014] text-white">

      {/* =====================================================
          ANIMATED FUTURISTIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Purple glow */}
        <div
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[120px]"
          style={{
            animation: "floatOne 9s ease-in-out infinite",
          }}
        />

        {/* Blue glow */}
        <div
          className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"
          style={{
            animation: "floatTwo 10s ease-in-out infinite",
          }}
        />

        {/* Pink glow */}
        <div
          className="absolute bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-pink-600/10 blur-[110px]"
          style={{
            animation: "floatThree 8s ease-in-out infinite",
          }}
        />

        {/* Animated network lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[5%] top-[20%] h-px w-[45%] rotate-[25deg] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

          <div className="absolute right-[0%] top-[35%] h-px w-[45%] -rotate-[25deg] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          <div className="absolute left-[10%] top-[55%] h-px w-[40%] -rotate-[15deg] bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

          <div className="absolute right-[5%] top-[65%] h-px w-[40%] rotate-[15deg] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </div>

        {/* Floating particles */}
        <span className="absolute left-[8%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />

        <span className="absolute left-[20%] top-[38%] h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400 shadow-[0_0_15px_#ec4899]" />

        <span className="absolute left-[35%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_#3b82f6]" />

        <span className="absolute right-[20%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

        <span className="absolute right-[10%] top-[45%] h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7]" />

        <span className="absolute left-[15%] bottom-[20%] h-2 w-2 animate-pulse rounded-full bg-pink-400 shadow-[0_0_20px_#ec4899]" />

        <span className="absolute right-[30%] bottom-[15%] h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_#3b82f6]" />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-6 pb-20 pt-28 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-blue-400">
            Contact Us
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s Build Something
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Have a project idea, question, or just want to say hello?
            We&apos;d love to hear from you.
          </p>

          <a
            href="#contact-form"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-purple-400/60 bg-purple-500/10 px-7 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            Let&apos;s Talk
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}

      <section
        id="contact-form"
        className="relative px-6 pb-20 sm:px-10 lg:px-20"
      >

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

          {/* =================================================
              LEFT - CONTACT INFORMATION
          ================================================== */}

          <div className="rounded-3xl border border-purple-500/30 bg-slate-950/60 p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-purple-400/60 hover:shadow-[0_0_50px_rgba(168,85,247,0.12)] sm:p-9">

            <div className="mb-8">

              <h2 className="text-3xl font-bold">
                Get In Touch
              </h2>

              <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />

              <p className="mt-5 leading-7 text-slate-400">
                We&apos;re always open to discussing new projects,
                creative ideas, collaborations, or opportunities to
                create something amazing together.
              </p>

            </div>

            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/70 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/25 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  ✉️
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="truncate font-medium text-slate-200">
                    hello@example.com
                  </p>
                </div>

                <span className="ml-auto text-slate-600 transition group-hover:translate-x-1 group-hover:text-purple-400">
                  →
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+254700000000"
                className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/70 hover:bg-pink-500/10 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/15 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-pink-500/25 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                  📞
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <p className="font-medium text-slate-200">
                    +254 700 000 000
                  </p>
                </div>

                <span className="ml-auto text-slate-600 transition group-hover:translate-x-1 group-hover:text-pink-400">
                  →
                </span>
              </a>

              {/* Location */}
              <div className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/25 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  📍
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="font-medium text-slate-200">
                    Nairobi, Kenya
                  </p>
                </div>

                <span className="ml-auto text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                  →
                </span>
              </div>

              {/* Working Hours */}
              <div className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/70 hover:bg-cyan-500/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/25">
                  🕐
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Working Hours
                  </p>

                  <p className="font-medium text-slate-200">
                    Mon - Fri · 9AM - 5PM
                  </p>
                </div>
              </div>

            </div>

            {/* Social Media */}
            <div className="mt-9">

              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Connect With Us
              </p>

              <div className="flex flex-wrap gap-3">

                <Link
                  href="#"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  GH
                </Link>

                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-lg font-bold transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  in
                </Link>

                <Link
                  href="#"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-pink-500/10 hover:text-pink-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                >
                  IG
                </Link>

                <Link
                  href="#"
                  aria-label="Twitter"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  X
                </Link>

              </div>
            </div>

          </div>

          {/* =================================================
              RIGHT - CONTACT FORM
          ================================================== */}

          <div className="rounded-3xl border border-purple-500/30 bg-slate-950/60 p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-pink-500/40 hover:shadow-[0_0_50px_rgba(236,72,153,0.1)] sm:p-9">

            <h2 className="text-3xl font-bold">
              Send Us a Message
            </h2>

            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />

            <p className="mt-5 text-slate-400">
              Fill in the form below and we&apos;ll get back to you
              as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-600 ${
                    errors.name
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  }`}
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-600 ${
                    errors.email
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  }`}
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-600 ${
                    errors.subject
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  }`}
                />

                {errors.subject && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`w-full resize-none rounded-xl border bg-slate-900/70 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-600 ${
                    errors.message
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Success */}
              {submitted && (
                <div className="animate-pulse rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400">
                  🎉 Message sent successfully! We&apos;ll get
                  back to you soon.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
              >

                {/* Shimmer */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  {loading ? "Sending..." : "Send Message  →"}
                </span>

              </button>

              <p className="text-center text-xs text-slate-500">
                🔒 Your information is safe and will not be shared.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="relative px-6 pb-20 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-blue-900/30 p-8 backdrop-blur-xl sm:p-12">

          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-purple-400">
                Start Something Great
              </p>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Ready to bring your ideas to life? 🚀
              </h2>

              <p className="mt-3 text-slate-400">
                Let&apos;s collaborate and create something extraordinary.
              </p>
            </div>

            <a
              href="#contact-form"
              className="group shrink-0 rounded-xl border border-purple-400/60 bg-purple-500/10 px-7 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
            >
              Start a Project
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-slate-900 px-6 py-8 text-center text-sm text-slate-600">
        © 2026 Your Project. All rights reserved.
        <span className="mx-2">•</span>
        Built with ❤️ by the team.
      </footer>

      {/* =====================================================
          CUSTOM ANIMATION
      ====================================================== */}

      <style jsx>{`
        @keyframes floatOne {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(100px, 60px) scale(1.15);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-100px, 80px) scale(1.2);
          }
        }

        @keyframes floatThree {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(60px, -60px);
          }
        }
      `}</style>

    </main>
  );
}