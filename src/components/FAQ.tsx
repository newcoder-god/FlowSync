const faqs = [
  {
    question:
      "What is FlowSync?",
    answer:
      "FlowSync is an AI-powered SaaS platform for workflow management.",
  },
  {
    question:
      "Does FlowSync support AI automation?",
    answer:
      "Yes. FlowSync includes AI-powered productivity tools.",
  },
  {
    question:
      "Can I use FlowSync for teams?",
    answer:
      "Absolutely. FlowSync is built for collaborative teams.",
  },
];

export default function FAQ() {

  return (
    <section
      id="faq"
      className="px-6 py-28"
    >

      <div className="mx-auto max-w-4xl">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-8 backdrop-blur-xl"
            >

              <h3 className="text-2xl font-bold">
                {faq.question}
              </h3>

              <p className="mt-4 text-gray-400">
                {faq.answer}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}"use client";

import { useEffect, useState } from "react";

import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";

import { motion } from "framer-motion";

import { toast } from "sonner";

import { Trash2 } from "lucide-react";

import { supabase } from "@/lib/supabase";

import Skeleton from "@/components/Skeleton";

import { useSearch } from "@/context/SearchContext";

type Task = {
  id: number;
  title: string;
  status: string;
};

function DraggableTask({
  task,
  deleteTask,
}: {
  task: Task;
  deleteTask: (id: number) => void;
}) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: task.id.toString(),
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-black/40 p-5"
    >

      <div className="flex items-start justify-between gap-4">

        <p className="font-medium">
          {task.title}
        </p>

        <button
          aria-label="Delete Task"
          onClick={() =>
            deleteTask(task.id)
          }
          className="rounded-lg bg-red-500/20 p-2 transition hover:bg-red-500/30"
        >
          <Trash2 size={16} />
        </button>

      </div>

    </motion.div>
  );
}

function Column({
  id,
  title,
  tasks,
  color,
  deleteTask,
  loading,
}: {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
  deleteTask: (id: number) => void;
  loading: boolean;
}) {

  const { setNodeRef } =
    useDroppable({
      id,
    });

  return (
    <div
      ref={setNodeRef}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-6 backdrop-blur-xl"
    >

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-sm ${color}`}
        >
          {tasks.length}
        </span>

      </div>

      <div className="space-y-4">

        {loading ? (
          <>
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </>
        ) : tasks.length === 0 ? (
          <p className="text-gray-400">
            No tasks here.
          </p>
        ) : (
          tasks.map((task) => (
            <DraggableTask
              key={task.id}
              task={task}
              deleteTask={deleteTask}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default function TasksPage() {

  const [tasks, setTasks] =
    useState<Task[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [newTask, setNewTask] =
    useState("");

  const { search } = useSearch();

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
        "Failed to load tasks"
      );

      setLoading(false);

      return;
    }

    setTasks(data || []);

    setLoading(false);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function addTask() {

    if (!newTask.trim()) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("tasks")
      .insert([
        {
          title: newTask,
          status: "todo",
          user_id: user?.id,
        },
      ]);

    if (error) {
      toast.error(
        "Failed to create task"
      );

      return;
    }

    toast.success("Task created!");

    setNewTask("");

    fetchTasks();
  }

  async function deleteTask(
    id: number
  ) {

    const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error(
        "Failed to delete task"
      );

      return;
    }

    toast.success("Task deleted!");

    fetchTasks();
  }

  async function handleDragEnd(
    event: DragEndEvent
  ) {

    const { active, over } = event;

    if (!over) return;

    const newStatus = over.id;

    const taskId = Number(active.id);

    const { error } = await supabase
      .from("tasks")
      .update({
        status: newStatus,
      })
      .eq("id", taskId);

    if (error) {
      toast.error(
        "Failed to update task"
      );

      return;
    }

    toast.success("Task moved!");

    fetchTasks();
  }

  const filteredTasks =
    tasks.filter((task) =>
      task.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const todoTasks =
    filteredTasks.filter(
      (task) =>
        task.status === "todo"
    );

  const progressTasks =
    filteredTasks.filter(
      (task) =>
        task.status ===
        "progress"
    );

  const completedTasks =
    filteredTasks.filter(
      (task) =>
        task.status ===
        "completed"
    );

  return (
    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Task Board
        </h1>

        <p className="mt-4 text-gray-400">
          Drag tasks between columns
        </p>

      </div>

      <div className="mb-8 flex gap-4">

        <input
          value={newTask}
          onChange={(e) =>
            setNewTask(
              e.target.value
            )
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

      <DndContext
        onDragEnd={handleDragEnd}
      >

        <div className="grid gap-6 lg:grid-cols-3">

          <Column
            id="todo"
            title="To Do"
            tasks={todoTasks}
            color="bg-purple-500/20 text-purple-300"
            deleteTask={deleteTask}
            loading={loading}
          />

          <Column
            id="progress"
            title="In Progress"
            tasks={progressTasks}
            color="bg-blue-500/20 text-blue-300"
            deleteTask={deleteTask}
            loading={loading}
          />

          <Column
            id="completed"
            title="Completed"
            tasks={completedTasks}
            color="bg-green-500/20 text-green-300"
            deleteTask={deleteTask}
            loading={loading}
          />

        </div>

      </DndContext>

    </div>
  );
}