"use client";

import { motion } from "framer-motion";
import {
  Bot,
  ShieldCheck,
  BarChart3,
  Workflow,
  Sparkles,
  Globe,
} from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="px-6 py-32"
    >

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold md:text-5xl">
            Built for modern AI-powered teams
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Powerful tools and intelligent automation
            designed to help your business scale faster.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          {/* Large Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-purple-500/20 to-white/5 p-8 backdrop-blur-xl md:col-span-2"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20">
              <Bot className="text-purple-400" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              AI Workflow Automation
            </h3>

            <p className="mt-4 max-w-xl text-gray-300">
              Automate repetitive business processes with
              intelligent AI workflows that save time and
              increase productivity across your organization.
            </p>

            {/* Fake Dashboard */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-6">

              <div className="flex h-48 items-end gap-4">

                <div className="h-20 w-full rounded-t-xl bg-purple-500/60" />
                <div className="h-36 w-full rounded-t-xl bg-purple-500/60" />
                <div className="h-28 w-full rounded-t-xl bg-purple-500/60" />
                <div className="h-44 w-full rounded-t-xl bg-purple-500/60" />
                <div className="h-32 w-full rounded-t-xl bg-purple-500/60" />

              </div>

            </div>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20">
              <ShieldCheck className="text-green-400" />
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Enterprise Security
            </h3>

            <p className="mt-4 text-gray-400">
              Advanced protection systems and encrypted workflows.
            </p>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
              <BarChart3 className="text-blue-400" />
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Real-Time Analytics
            </h3>

            <p className="mt-4 text-gray-400">
              Track performance and monitor business growth instantly.
            </p>

          </motion.div>

          {/* Large Bottom Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 backdrop-blur-xl md:col-span-2"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Workflow className="text-white" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Smart Team Collaboration
            </h3>

            <p className="mt-4 max-w-2xl text-gray-300">
              Collaborate across teams with AI-assisted workflows,
              intelligent notifications, and automated reporting.
            </p>

          </motion.div>

          {/* Card 5 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20">
              <Sparkles className="text-pink-400" />
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              AI Insights
            </h3>

            <p className="mt-4 text-gray-400">
              Generate intelligent recommendations automatically.
            </p>

          </motion.div>

          {/* Card 6 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-3"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20">
              <Globe className="text-orange-400" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Global Infrastructure
            </h3>

            <p className="mt-4 max-w-3xl text-gray-300">
              Deploy workflows globally with high availability,
              low latency, and enterprise-grade scalability.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}