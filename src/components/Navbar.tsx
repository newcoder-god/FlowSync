"use client";

import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold transition hover:opacity-80"
        >
          FlowSync
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">

          <a
            href="#features"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            FAQ
          </a>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <ThemeToggle />

          <Link
            href="/login"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
          >
            Get Started
          </Link>

        </div>

      </div>

    </header>
  );
}