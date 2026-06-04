"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";
import { supabase } from "@/lib/supabase";

import {
  Home,
  BarChart3,
  CheckSquare,
  Sparkles,
  Settings,
  Bell,
  Search,
} from "lucide-react";
async function logout() {
  await supabase.auth.signOut();
  window.location.href = "/login";
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  return (
  <AuthGuard>
    <main className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <aside className="hidden w-72 border-r border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:block">

        {/* Logo */}
        <h1 className="text-3xl font-bold">
          FlowSync
        </h1>

        {/* Navigation */}
        <nav className="mt-12 space-y-3">

          {/* Dashboard */}
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
              pathname === "/dashboard"
                ? "bg-purple-500/20 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Home size={20} />
            Dashboard
          </Link>

          {/* Analytics */}
          <Link
            href="/dashboard/analytics"
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
              pathname === "/dashboard/analytics"
                ? "bg-purple-500/20 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <BarChart3 size={20} />
            Analytics
          </Link>

          {/* Tasks */}
          <Link
            href="/dashboard/tasks"
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
              pathname === "/dashboard/tasks"
                ? "bg-purple-500/20 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <CheckSquare size={20} />
            Tasks
          </Link>

          {/* AI Assistant */}
          <Link
            href="/dashboard/ai"
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
              pathname === "/dashboard/ai"
                ? "bg-purple-500/20 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Sparkles size={20} />
            AI Assistant
          </Link>

          {/* Settings */}
          <Link
            href="#"
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            <Settings size={20} />
            Settings
          </Link>

        </nav>

      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">

        {/* Top Navbar */}
        <header className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

          {/* Search */}
          <div className="flex w-full max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">

            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none"
            />

          </div>

          {/* Right Side */}
          <div className="ml-6 flex items-center gap-4">

            <button className="rounded-full border border-white/10 bg-white/5 p-3">
              <Bell size={18} />
            </button>

            <button
  onClick={logout}
  className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium"
>
  Logout
</button>

          </div>

        </header>

        {/* Page Content */}
        <div className="flex-1 p-6">
          {children}
        </div>

      </div>

    </main>
  </AuthGuard>
  );
}