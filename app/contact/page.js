"use client";

import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

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

  // =====================================================
  // HANDLE INPUT CHANGES
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setSubmitted(false);
  };

  // =====================================================
  // VALIDATE FORM
  // =====================================================

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

  // =====================================================
  // SUBMIT FORM
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

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
    <main className="relative min-h-screen overflow-hidden bg-[#050805] text-white">

      {/* =====================================================
          ANIMATED FUTURISTIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Green glow - left */}
        <div
          className="absolute -left-40 top-20 h-125 w-125 rounded-full bg-green-500/20 blur-[130px]"
          style={{
            animation: "floatOne 9s ease-in-out infinite",
          }}
        />

        {/* Green glow - right */}
        <div
          className="absolute -right-40 top-40 h-125 w-125 rounded-full bg-lime-400/15 blur-[130px]"
          style={{
            animation: "floatTwo 10s ease-in-out infinite",
          }}
        />

        {/* Soft white glow */}
        <div
          className="absolute bottom-20 left-1/3 h-87.5 w-87.5 rounded-full bg-white/5 blur-[120px]"
          style={{
            animation: "floatThree 8s ease-in-out infinite",
          }}
        />

        {/* Futuristic grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(190,242,100,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(190,242,100,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Connected futuristic lines */}

        <div className="absolute inset-0 opacity-40">

          <div className="absolute left-[5%] top-[20%] h-px w-[40%] rotate-15 bg-linear-to-r from-transparent via-lime-400/60 to-transparent" />

          <div className="absolute right-[5%] top-[32%] h-px w-[40%] rotate-[-15deg] bg-linear-to-r from-transparent via-green-400/60 to-transparent" />

          <div className="absolute left-[15%] top-[55%] h-px w-[35%] rotate-[-10deg] bg-linear-to-r from-transparent via-white/40 to-transparent" />

          <div className="absolute right-[10%] top-[70%] h-px w-[35%] rotate-12 bg-linear-to-r from-transparent via-lime-300/50 to-transparent" />

        </div>

        {/* Glowing green dots */}

        <span className="absolute left-[8%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-lime-300 shadow-[0_0_20px_#bef264]" />

        <span className="absolute left-[22%] top-[35%] h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_15px_#22c55e]" />

        <span className="absolute left-[40%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-white shadow-[0_0_20px_white]" />

        <span className="absolute right-[20%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-lime-300 shadow-[0_0_20px_#bef264]" />

        <span className="absolute right-[10%] top-[45%] h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_15px_#22c55e]" />

        <span className="absolute left-[15%] bottom-[20%] h-2 w-2 animate-pulse rounded-full bg-lime-300 shadow-[0_0_20px_#bef264]" />

        <span className="absolute right-[30%] bottom-[15%] h-2 w-2 animate-pulse rounded-full bg-white shadow-[0_0_15px_white]" />

        {/* Moving green waves */}

        <div className="absolute left-[-10%] top-[30%] h-0.5 w-[120%] rotate-[-5deg] bg-linear-to-r from-transparent via-lime-300/40 to-transparent blur-[1px] animate-wave" />

        <div className="absolute left-[-10%] top-[50%] h-0.5 w-[120%] rotate-[4deg] bg-linear-to-r from-transparent via-green-400/30 to-transparent blur-[1px] animate-wave-slow" />

        <div className="absolute left-[-10%] top-[72%] h-px w-[120%] -rotate-3 bg-linear-to-r from-transparent via-white/20 to-transparent blur-[1px] animate-wave" />

      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-6 pb-20 pt-28 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-lime-300">
            Contact Us
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">

            Let&apos;s Build Something

            <span className="block text-lime-300">
              Amazing Together
            </span>

          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Have a project idea, question, or just want to say hello?
            We&apos;d love to hear from you.
          </p>

          <a
            href="#contact-form"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-white px-7 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300/10 hover:text-lime-300 hover:shadow-[0_0_30px_rgba(190,242,100,0.25)]"
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

              <div className="mt-3 h-1 w-12 rounded-full bg-linear-to-r from-pink-500 to-purple-500" />

              <p className="mt-5 leading-7 text-slate-400">
                We&apos;re always open to discussing new projects,
                creative ideas, collaborations, or opportunities to
                create something amazing together.
              </p>

            </div>

            <div className="space-y-4">

              {/* EMAIL */}

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
                    team@gmail.com
                  </p>

                </div>

                <span className="ml-auto text-slate-600 transition group-hover:translate-x-1 group-hover:text-purple-400">
                  →
                </span>

              </a>

              {/* PHONE */}

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

              {/* LOCATION */}

              <div className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/25 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  📍
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="font-medium text-slate-200">
                    Westlands, Nairobi
                  </p>

                </div>

                <span className="ml-auto text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                  →
                </span>

              </div>

              {/* WORKING HOURS */}

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

            {/* =================================================
                SOCIAL MEDIA
            ================================================== */}

            <div className="mt-9">

              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Connect With Us
              </p>

              <div className="flex flex-wrap gap-3">

                {/* GITHUB */}

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300/10 hover:text-lime-300 hover:shadow-[0_0_20px_rgba(190,242,100,0.3)]"
                >
                  <FaGithub size={22} />
                </a>

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300/10 hover:text-lime-300 hover:shadow-[0_0_20px_rgba(190,242,100,0.3)]"
                >
                  <FaLinkedin size={22} />
                </a>

                {/* INSTAGRAM */}

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300/10 hover:text-lime-300 hover:shadow-[0_0_20px_rgba(190,242,100,0.3)]"
                >
                  <FaInstagram size={22} />
                </a>

                {/* X */}

                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300/10 hover:text-lime-300 hover:shadow-[0_0_20px_rgba(190,242,100,0.3)]"
                >
                  <FaXTwitter size={20} />
                </a>

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

            <div className="mt-3 h-1 w-12 rounded-full bg-linear-to-r from-pink-500 to-purple-500" />

            <p className="mt-5 text-slate-400">
              Fill in the form below and we&apos;ll get back to you
              as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* NAME */}

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

              {/* EMAIL */}

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

              {/* SUBJECT */}

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

              {/* MESSAGE */}

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
                  rows={6}
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

              {/* SUCCESS */}

              {submitted && (
                <div className="animate-pulse rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400">
                  🎉 Message sent successfully! We&apos;ll get
                  back to you soon.
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl bg-linear-to-r from-green-500 via-lime-500 to-green-400 px-6 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(190,242,100,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
              >

                {/* Shimmer */}

                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  {loading ? "Sending..." : "Send Message →"}
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
          PARASHOOT / PARACHUTE SECTION
      ====================================================== */}

      <section className="relative overflow-hidden px-6 pb-20 sm:px-10 lg:px-20">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-lime-300/20 bg-black/60 p-8 backdrop-blur-xl sm:p-12">

          {/* Background glow */}

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-lime-400/10 blur-[100px]" />

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-green-500/10 blur-[100px]" />

          {/* Decorative grid */}

          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(190,242,100,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(190,242,100,0.2) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative flex flex-col items-center justify-between gap-10 md:flex-row">

            {/* TEXT */}

            <div className="max-w-xl text-center md:text-left">

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
                Take The Leap
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to take your idea to the next level?
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Don&apos;t let a great idea stay just an idea.
                Let&apos;s work together and turn your vision
                into something real.
              </p>

              <a
                href="#contact-form"
                className="mt-7 inline-flex items-center gap-2 rounded-xl border border-lime-300/50 bg-lime-300/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:text-black hover:shadow-[0_0_30px_rgba(190,242,100,0.35)]"
              >
                Let&apos;s Do It
                <span>→</span>
              </a>

            </div>

            {/* PARACHUTE */}

            <div className="relative flex h-56 w-56 items-center justify-center">

              <div className="absolute top-2 text-7xl animate-bounce">
                🪂
              </div>

              <div className="absolute bottom-5 h-20 w-20 rounded-full bg-lime-400/10 blur-2xl" />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="relative px-6 pb-20 sm:px-10 lg:px-20">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-lime-300/20 bg-black/70 p-8 backdrop-blur-xl sm:p-12">

          {/* Green glow */}

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-400/10 blur-[100px]" />

          {/* White glow */}

          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-[100px]" />

          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row md:text-left">

            {/* CTA TEXT */}

            <div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
                START SOMETHING GREAT
              </p>

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to bring your ideas to life?
              </h2>

              <p className="mt-3 text-white/60">
                Let&apos;s collaborate and create something extraordinary.
              </p>

            </div>

            {/* ROCKET */}

            <div className="text-7xl animate-bounce">
              🚀
            </div>

            {/* BUTTON */}

            <a
              href="#contact-form"
              className="group shrink-0 rounded-xl border border-lime-300/50 bg-lime-300/10 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:text-black hover:shadow-[0_0_30px_rgba(190,242,100,0.35)]"
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
          CUSTOM ANIMATIONS
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

        @keyframes wave {
          0% {
            transform: translateX(-10%) rotate(-5deg);
          }

          50% {
            transform: translateX(5%) rotate(-3deg);
          }

          100% {
            transform: translateX(-10%) rotate(-5deg);
          }
        }

        @keyframes waveSlow {
          0% {
            transform: translateX(5%) rotate(4deg);
          }

          50% {
            transform: translateX(-5%) rotate(2deg);
          }

          100% {
            transform: translateX(5%) rotate(4deg);
          }
        }

        .animate-wave {
          animation: wave 8s ease-in-out infinite;
        }

        .animate-wave-slow {
          animation: waveSlow 12s ease-in-out infinite;
        }

      `}</style>

    </main>
  );
}