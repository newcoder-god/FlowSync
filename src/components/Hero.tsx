"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40">

      <div className="mx-auto max-w-7xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
        >
          AI Powered Workflow Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-5xl text-6xl font-bold leading-tight md:text-7xl"
        >
          Automate Your Team’s Workflow With AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-400"
        >
          FlowSync helps teams automate repetitive work,
          manage projects, and scale productivity using AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >

          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 font-medium text-white transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Start Free Trial
          </Link>

          <Link
            href="/dashboard"
            className="rounded-full border border-white/10 px-8 py-4 font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            View Dashboard
          </Link>

        </motion.div>

      </div>

    </section>
  );
}