"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

type Task = {
  id: number;
  title: string;
  status: string;
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase
        .from("tasks")
        .select("*");

      if (error) {
        console.error(error);
        return;
      }

      setTasks(data || []);
    }

    fetchTasks();
  }, []);

  const todoTasks = tasks.filter(
    (task) => task.status === "todo"
  );

  const progressTasks = tasks.filter(
    (task) => task.status === "progress"
  );

  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  );

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Task Board
        </h1>

        <p className="mt-4 text-gray-400">
          Tasks loaded from Supabase
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            To Do
          </h2>

          <div className="space-y-4">
            {todoTasks.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                {task.title}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            In Progress
          </h2>

          <div className="space-y-4">
            {progressTasks.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                {task.title}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            Completed
          </h2>

          <div className="space-y-4">
            {completedTasks.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                {task.title}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}