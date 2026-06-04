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
  const [newTask, setNewTask] = useState("");

  async function fetchTasks() {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("id");

    if (error) {
      console.error(error);
      return;
    }

    setTasks(data || []);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function addTask() {
    if (!newTask.trim()) return;

    const { error } = await supabase
      .from("tasks")
      .insert([
        {
          title: newTask,
          status: "todo",
        },
      ]);

    if (error) {
      console.error(error);
      return;
    }

    setNewTask("");

    fetchTasks();
  }

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
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Task Board
        </h1>

        <p className="mt-4 text-gray-400">
          Tasks powered by Supabase
        </p>
      </div>

      {/* Create Task */}
      <div className="mb-8 flex gap-4">
        <input
          value={newTask}
          onChange={(e) =>
            setNewTask(e.target.value)
          }
          placeholder="Create new task..."
          className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
        />

        <button
          onClick={addTask}
          className="rounded-2xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
        >
          Add Task
        </button>
      </div>

      {/* Kanban Board */}
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
            {todoTasks.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <p className="font-medium">
                  {task.title}
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
            {progressTasks.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <p className="font-medium">
                  {task.title}
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
            {completedTasks.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <p className="font-medium">
                  {task.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}