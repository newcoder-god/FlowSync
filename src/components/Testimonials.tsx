"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <motion.section
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
            Loved by modern teams
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Thousands of companies use FlowSync to automate
            workflows and boost productivity.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <p className="text-gray-300">
              “FlowSync completely transformed the way our
              team handles repetitive tasks. Productivity
              increased dramatically.”
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-lg font-bold">
                S
              </div>

              <div>
                <h4 className="font-semibold">
                  Sarah Johnson
                </h4>

                <p className="text-sm text-gray-400">
                  Product Designer
                </p>
              </div>

            </div>

          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <p className="text-gray-300">
              “The AI automation tools saved us countless
              hours every week. It feels like having an
              extra team member.”
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold">
                M
              </div>

              <div>
                <h4 className="font-semibold">
                  Michael Chen
                </h4>

                <p className="text-sm text-gray-400">
                  Startup Founder
                </p>
              </div>

            </div>

          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <p className="text-gray-300">
              “FlowSync gives our company enterprise-level
              productivity tools with an incredibly clean
              and intuitive interface.”
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-lg font-bold">
                D
              </div>

              <div>
                <h4 className="font-semibold">
                  Daniel Rivera
                </h4>

                <p className="text-sm text-gray-400">
                  Engineering Manager
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}