"use client";

import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 19000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 24000 },
  { month: "May", revenue: 21000 },
  { month: "Jun", revenue: 32000 },
];

export default function AnalyticsPage() {
  return (
    <div>

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Analytics
        </h1>

        <p className="mt-4 text-gray-400">
          Monitor platform performance and growth metrics.
        </p>

      </div>

      {/* Top Cards */}
      <div className="grid gap-6 md:grid-cols-4">

        {/* Revenue */}
        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-400">
                Revenue
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                $84.2K
              </h3>
            </div>

            <div className="rounded-2xl bg-green-500/20 p-3">
              <DollarSign className="text-green-400" />
            </div>

          </div>

          <p className="mt-6 text-sm text-green-400">
            +18% this month
          </p>

        </motion.div>

        {/* Users */}
        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-400">
                Users
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                24.8K
              </h3>
            </div>

            <div className="rounded-2xl bg-blue-500/20 p-3">
              <Users className="text-blue-400" />
            </div>

          </div>

          <p className="mt-6 text-sm text-blue-400">
            +9% growth
          </p>

        </motion.div>

        {/* Activity */}
        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-400">
                Activity
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                98%
              </h3>
            </div>

            <div className="rounded-2xl bg-purple-500/20 p-3">
              <Activity className="text-purple-400" />
            </div>

          </div>

          <p className="mt-6 text-sm text-purple-400">
            Excellent performance
          </p>

        </motion.div>

        {/* Growth */}
        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-400">
                Growth
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                +42%
              </h3>
            </div>

            <div className="rounded-2xl bg-pink-500/20 p-3">
              <TrendingUp className="text-pink-400" />
            </div>

          </div>

          <p className="mt-6 text-sm text-pink-400">
            Fastest growth yet
          </p>

        </motion.div>

      </div>

      {/* Charts Section */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {/* Large Chart */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:col-span-2">

          <h2 className="text-2xl font-bold">
            Revenue Overview
          </h2>

          {/* REAL CHART */}
          <div className="mt-10 h-80">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={revenueData}>

                <XAxis
                  dataKey="month"
                  stroke="#888888"
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111111",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                  }}
                />

                <Bar
                  dataKey="revenue"
                  radius={[12, 12, 0, 0]}
                  fill="url(#gradient)"
                />

                <defs>

                  <linearGradient
                    id="gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#a855f7"
                    />

                    <stop
                      offset="100%"
                      stopColor="#3b82f6"
                    />

                  </linearGradient>

                </defs>

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Performance */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <h2 className="text-2xl font-bold">
            Performance
          </h2>

          <div className="mt-8 space-y-6">

            {/* Metric */}
            <div>

              <div className="mb-2 flex justify-between">

                <p className="text-sm text-gray-400">
                  AI Automation
                </p>

                <p className="text-sm">
                  92%
                </p>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[92%] rounded-full bg-purple-500" />

              </div>

            </div>

            {/* Metric */}
            <div>

              <div className="mb-2 flex justify-between">

                <p className="text-sm text-gray-400">
                  Team Productivity
                </p>

                <p className="text-sm">
                  87%
                </p>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[87%] rounded-full bg-blue-500" />

              </div>

            </div>

            {/* Metric */}
            <div>

              <div className="mb-2 flex justify-between">

                <p className="text-sm text-gray-400">
                  Server Uptime
                </p>

                <p className="text-sm">
                  99%
                </p>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[99%] rounded-full bg-green-500" />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Table */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

        <h2 className="text-2xl font-bold">
          Recent Reports
        </h2>

        <div className="mt-8 overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-white/10 text-left text-gray-400">

                <th className="pb-4">Report</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">Growth</th>

              </tr>

            </thead>

            <tbody className="divide-y divide-white/10">

              <tr>
                <td className="py-4">Revenue Report</td>
                <td className="py-4 text-green-400">Completed</td>
                <td className="py-4">Today</td>
                <td className="py-4">+18%</td>
              </tr>

              <tr>
                <td className="py-4">Marketing Analytics</td>
                <td className="py-4 text-blue-400">Processing</td>
                <td className="py-4">Yesterday</td>
                <td className="py-4">+9%</td>
              </tr>

              <tr>
                <td className="py-4">AI Workflow Stats</td>
                <td className="py-4 text-purple-400">Generated</td>
                <td className="py-4">2 days ago</td>
                <td className="py-4">+24%</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}