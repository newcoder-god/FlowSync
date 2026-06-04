"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Task = {
  id: number;
  title: string;
  status: string;
};

export default function TestPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function loadTasks() {
      const { data, error } = await supabase
        .from("tasks")
        .select("*");

      if (error) {
        console.error(error);
        return;
      }

      setTasks(data || []);
    }

    loadTasks();
  }, []);

  return (
    <div className="p-10">
      <h1 className="mb-6 text-4xl font-bold">
        Supabase Test
      </h1>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-xl border border-white/10 p-4"
          >
            {task.title} - {task.status}
          </div>
        ))}
      </div>
    </div>
  );
}
