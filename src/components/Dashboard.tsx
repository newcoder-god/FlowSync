"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Activity,
  ArrowUpRight,
} from "lucide-react";

export default function Dashboard() {
  return (
    <section className="px-6 py-32">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold md:text-5xl">
            Everything in one powerful dashboard
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Monitor workflows, track analytics,
            and manage your team with real-time insights.
          </p>

        </div>

        {/* Dashboard UI */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
        >

          {/* Top Stats */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-400">
                    Revenue
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    $48.2K
                  </h3>
                </div>

                <div className="rounded-xl bg-green-500/20 p-3">
                  <ArrowUpRight className="text-green-400" />
                </div>

              </div>

              <p className="mt-4 text-sm text-green-400">
                +12.5% this month
              </p>

            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-400">
                    Active Users
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    12,430
                  </h3>
                </div>

                <div className="rounded-xl bg-blue-500/20 p-3">
                  <Users className="text-blue-400" />
                </div>

              </div>

              <p className="mt-4 text-sm text-blue-400">
                +8.2% growth
              </p>

            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-400">
                    Workflows
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    1,245
                  </h3>
                </div>

                <div className="rounded-xl bg-purple-500/20 p-3">
                  <Activity className="text-purple-400" />
                </div>

              </div>

              <p className="mt-4 text-sm text-purple-400">
                98% automation success
              </p>

            </div>

          </div>

          {/* Bottom Chart Area */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {/* Analytics */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

              <div className="flex items-center gap-3">
                <BarChart3 className="text-purple-400" />

                <h3 className="text-xl font-semibold">
                  Analytics Overview
                </h3>
              </div>

              {/* Fake Chart */}
              <div className="mt-8 flex h-64 items-end gap-4">

                <div className="h-24 w-full rounded-t-xl bg-purple-500/60" />
                <div className="h-40 w-full rounded-t-xl bg-purple-500/60" />
                <div className="h-52 w-full rounded-t-xl bg-purple-500/60" />
                <div className="h-32 w-full rounded-t-xl bg-purple-500/60" />
                <div className="h-60 w-full rounded-t-xl bg-purple-500/60" />
                <div className="h-44 w-full rounded-t-xl bg-purple-500/60" />

              </div>

            </div>

            {/* Activity Feed */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

              <h3 className="text-xl font-semibold">
                Recent Activity
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      AI workflow completed
                    </p>

                    <p className="text-sm text-gray-400">
                      Marketing automation
                    </p>
                  </div>

                  <span className="text-sm text-green-400">
                    Success
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      New user onboarded
                    </p>

                    <p className="text-sm text-gray-400">
                      Team invitation accepted
                    </p>
                  </div>

                  <span className="text-sm text-blue-400">
                    New
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      Analytics report generated
                    </p>

                    <p className="text-sm text-gray-400">
                      Weekly productivity report
                    </p>
                  </div>

                  <span className="text-sm text-purple-400">
                    Ready
                  </span>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}