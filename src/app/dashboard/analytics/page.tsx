"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { toast } from "sonner";

import { supabase } from "@/lib/supabase";

type Task = {
  id: number;
  status: string;
};

export default function AnalyticsPage() {

  const [tasks, setTasks] =
    useState<Task[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {

    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } =
      await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", user?.id);

    if (error) {
      toast.error(
        "Failed to load analytics"
      );

      setLoading(false);

      return;
    }

    setTasks(data || []);

    setLoading(false);
  }

  const todo =
    tasks.filter(
      (task) =>
        task.status === "todo"
    ).length;

  const progress =
    tasks.filter(
      (task) =>
        task.status === "progress"
    ).length;

  const completed =
    tasks.filter(
      (task) =>
        task.status === "completed"
    ).length;

  const totalTasks = tasks.length;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round(
          (completed / totalTasks) *
            100
        );

  const barData = [
    {
      name: "To Do",
      tasks: todo,
    },
    {
      name: "In Progress",
      tasks: progress,
    },
    {
      name: "Completed",
      tasks: completed,
    },
  ];

  const pieData = [
    {
      name: "To Do",
      value: todo,
    },
    {
      name: "Progress",
      value: progress,
    },
    {
      name: "Completed",
      value: completed,
    },
  ];

  const COLORS = [
    "#a855f7",
    "#3b82f6",
    "#22c55e",
  ];

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Loading analytics...
      </div>
    );
  }

  return (
    <div>

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Analytics
        </h1>

        <p className="mt-4 text-gray-400">
          Real-time workflow insights
        </p>

      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-8 backdrop-blur-xl">

          <p className="text-gray-400">
            Total Tasks
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            {totalTasks}
          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-8 backdrop-blur-xl">

          <p className="text-gray-400">
            Completed
          </p>

          <h2 className="mt-4 text-5xl font-bold text-green-400">
            {completed}
          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-8 backdrop-blur-xl">

          <p className="text-gray-400">
            Completion Rate
          </p>

          <h2 className="mt-4 text-5xl font-bold text-purple-400">
            {completionRate}%
          </h2>

        </div>

      </div>

      {/* Charts */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">

        {/* Bar Chart */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-8 backdrop-blur-xl">

          <h2 className="mb-6 text-2xl font-bold">
            Task Distribution
          </h2>

          <div className="h-80">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart data={barData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="tasks"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Pie Chart */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-8 backdrop-blur-xl">

          <h2 className="mb-6 text-2xl font-bold">
            Workflow Overview
          </h2>

          <div className="h-80">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={110}
                  label
                >

                  {pieData.map(
                    (_, index) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[index]
                        }
                      />
                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}