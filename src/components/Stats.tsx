"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-10 backdrop-blur-xl md:grid-cols-4"
        >

          {/* Stat 1 */}
          <div className="text-center">

            <h3 className="text-5xl font-bold text-purple-400">
              10K+
            </h3>

            <p className="mt-3 text-gray-400">
              Active Users
            </p>

          </div>

          {/* Stat 2 */}
          <div className="text-center">

            <h3 className="text-5xl font-bold text-blue-400">
              98%
            </h3>

            <p className="mt-3 text-gray-400">
              Automation Success
            </p>

          </div>

          {/* Stat 3 */}
          <div className="text-center">

            <h3 className="text-5xl font-bold text-green-400">
              250M+
            </h3>

            <p className="mt-3 text-gray-400">
              Tasks Automated
            </p>

          </div>

          {/* Stat 4 */}
          <div className="text-center">

            <h3 className="text-5xl font-bold text-pink-400">
              24/7
            </h3>

            <p className="mt-3 text-gray-400">
              AI Monitoring
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}