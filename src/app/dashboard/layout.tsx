"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState } from "react";

import {
  Home,
  BarChart3,
  CheckSquare,
  Sparkles,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";

import AuthGuard from "@/components/AuthGuard";

import { supabase } from "@/lib/supabase";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  async function logout() {

    await supabase.auth.signOut();

    window.location.href = "/login";
  }

  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      href: "/dashboard/analytics",
      label: "Analytics",
      icon: BarChart3,
    },
    {
      href: "/dashboard/tasks",
      label: "Tasks",
      icon: CheckSquare,
    },
    {
      href: "/dashboard/ai",
      label: "AI Assistant",
      icon: Sparkles,
    },
  ];

  return (
    <AuthGuard>

      <main className="flex min-h-screen bg-black text-white">

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            onClick={() =>
              setSidebarOpen(false)
            }
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 z-50 h-screen w-72 border-r border-white/10 bg-black/95 p-6 backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0 ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >

          {/* Top */}
          <div className="flex items-center justify-between">

            <Link
              href="/"
              className="text-3xl font-bold transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              FlowSync
            </Link>

            {/* Close Mobile */}
            <button
              aria-label="Close sidebar"
              onClick={() =>
                setSidebarOpen(false)
              }
              className="rounded-lg p-2 transition hover:bg-white/10 lg:hidden"
            >
              <X size={22} />
            </button>

          </div>

          {/* Navigation */}
          <nav
            aria-label="Dashboard Navigation"
            className="mt-12 space-y-3"
          >

            {navItems.map((item) => {

              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setSidebarOpen(false)
                  }
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    pathname === item.href
                      ? "bg-purple-500/20 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >

                  <Icon size={20} />

                  {item.label}

                </Link>
              );
            })}

          </nav>

        </aside>

        {/* Main */}
        <div className="flex flex-1 flex-col">

          {/* Topbar */}
          <header className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl lg:px-6">

            {/* Left */}
            <div className="flex items-center gap-4">

              {/* Mobile Menu */}
              <button
                aria-label="Open sidebar"
                onClick={() =>
                  setSidebarOpen(true)
                }
                className="rounded-lg p-2 transition hover:bg-white/10 lg:hidden"
              >
                <Menu size={22} />
              </button>

              {/* Search */}
              <div className="hidden w-full max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 md:flex">

                <Search
                  size={18}
                  className="text-gray-400"
                />

                <input
                  aria-label="Search"
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent outline-none"
                />

              </div>

            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

              {/* Notifications */}
              <button
                aria-label="Notifications"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <Bell size={18} />
              </button>

              {/* Logout */}
              <button
                onClick={logout}
                className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium transition hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Logout
              </button>

            </div>

          </header>

          {/* Content */}
          <div className="flex-1 p-4 lg:p-6">
            {children}
          </div>

        </div>

      </main>

    </AuthGuard>
  );
}