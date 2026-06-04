"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-black to-black" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >

        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
          ✨ AI-powered productivity platform
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Automate your workflow with{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          FlowSync helps teams streamline tasks, automate repetitive work,
          and boost productivity using intelligent AI tools.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 font-medium text-white transition hover:scale-105">

            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 blur-xl transition group-hover:opacity-50" />

            <span className="relative z-10">
              Start Free Trial
            </span>

            <ArrowRight
              size={18}
              className="relative z-10"
            />

          </button>

          <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium backdrop-blur-xl transition hover:bg-white/10">
            Watch Demo
          </button>

        </div>

        {/* Dashboard Image */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">

          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Dashboard Preview"
            className="rounded-2xl"
          />

        </div>

      </motion.div>

    </section>
  );
}