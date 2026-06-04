"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-6 py-32"
    >

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-4xl font-bold md:text-5xl">
            Simple pricing for every team
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Choose the perfect plan to automate your workflow
            and scale your productivity.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {/* Starter */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="text-2xl font-semibold">
              Starter
            </h3>

            <p className="mt-4 text-gray-400">
              Perfect for individuals getting started.
            </p>

            <div className="mt-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-gray-400">/month</span>
            </div>

            <button className="mt-8 w-full rounded-full border border-white/10 bg-white/5 py-3 font-medium transition hover:bg-white/10">
              Get Started
            </button>

            <ul className="mt-8 space-y-4">

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                3 AI workflows
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                Basic analytics
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                Community support
              </li>

            </ul>

          </div>

          {/* Pro Plan */}
          <div className="relative rounded-3xl border border-purple-500/50 bg-gradient-to-b from-purple-500/20 to-white/5 p-8 backdrop-blur-xl">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-500 px-4 py-1 text-sm font-medium">
              Most Popular
            </div>

            <h3 className="text-2xl font-semibold">
              Pro
            </h3>

            <p className="mt-4 text-gray-300">
              Best for growing startups and teams.
            </p>

            <div className="mt-8">
              <span className="text-5xl font-bold">$19</span>
              <span className="text-gray-300">/month</span>
            </div>

            <button className="mt-8 w-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 font-medium text-white transition hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
              Start Free Trial
            </button>

            <ul className="mt-8 space-y-4">

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                Unlimited AI workflows
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                Advanced analytics
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                Team collaboration
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                Priority support
              </li>

            </ul>

          </div>

          {/* Enterprise */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="text-2xl font-semibold">
              Enterprise
            </h3>

            <p className="mt-4 text-gray-400">
              Advanced solutions for large organizations.
            </p>

            <div className="mt-8">
              <span className="text-5xl font-bold">Custom</span>
            </div>

            <button className="mt-8 w-full rounded-full border border-white/10 bg-white/5 py-3 font-medium transition hover:bg-white/10">
              Contact Sales
            </button>

            <ul className="mt-8 space-y-4">

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                Dedicated infrastructure
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                Enterprise security
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                Dedicated account manager
              </li>

            </ul>

          </div>

        </div>

      </div>

    </motion.section>
  );
}