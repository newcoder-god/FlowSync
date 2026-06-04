"use client";

import { motion } from "framer-motion";

const todoTasks = [
  "Design landing page",
  "Fix dashboard analytics",
  "Create onboarding flow",
];

const progressTasks = [
  "Build AI workflow system",
  "Improve mobile responsiveness",
];

const completedTasks = [
  "Setup authentication",
  "Deploy to Vercel",
];

export default function TasksPage() {
  return (
    <div>

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Task Board
        </h1>

        <p className="mt-4 text-gray-400">
          Manage workflows and track project progress.
        </p>

      </div>

      {/* Kanban Grid */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* TODO */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              To Do
            </h2>

            <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300">
              {todoTasks.length}
            </span>

          </div>

          <div className="space-y-4">

            {todoTasks.map((task, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >

                <p className="font-medium">
                  {task}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

        {/* IN PROGRESS */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              In Progress
            </h2>

            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">
              {progressTasks.length}
            </span>

          </div>

          <div className="space-y-4">

            {progressTasks.map((task, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >

                <p className="font-medium">
                  {task}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

        {/* COMPLETED */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Completed
            </h2>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
              {completedTasks.length}
            </span>

          </div>

          <div className="space-y-4">

            {completedTasks.map((task, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >

                <p className="font-medium">
                  {task}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}