"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  CheckSquare,
  BarChart3,
  Sparkles,
  Settings,
  LogOut,
} from "lucide-react";

import Notifications from "@/components/Notifications";

import ThemeToggle from "@/components/ThemeToggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="min-h-screen bg-(--background) text-(--foreground) transition-colors duration-300">

      <div className="flex">

        <aside className="hidden w-72 border-r border-white/10 bg-black/20 p-6 backdrop-blur-xl lg:block">

          <Link
            href="/"
            className="text-3xl font-bold"
          >
            FlowSync
          </Link>

          <nav className="mt-12 space-y-3">

            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-white/10"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>

            <Link
              href="/dashboard/tasks"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-white/10"
            >
              <CheckSquare size={20} />
              Tasks
            </Link>

            <Link
              href="/dashboard/analytics"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-white/10"
            >
              <BarChart3 size={20} />
              Analytics
            </Link>

            <Link
              href="/dashboard/ai"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-white/10"
            >
              <Sparkles size={20} />
              AI Assistant
            </Link>

            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-white/10"
            >
              <Settings size={20} />
              Settings
            </Link>

          </nav>

        </aside>

        <div className="flex-1">

          <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">

            <h1 className="text-2xl font-bold">
              Dashboard
            </h1>

            <div className="flex items-center gap-4">

              <Notifications />

              <ThemeToggle />

              <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">

                <LogOut size={18} />

                Logout

              </button>

            </div>

          </header>

          <div className="p-6">
            {children}
          </div>

        </div>

      </div>

    </main>
  );
}