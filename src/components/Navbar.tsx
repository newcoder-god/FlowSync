"use client";

import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-3xl font-bold"
        >
          FlowSync
        </Link>

        <nav className="hidden items-center gap-10 md:flex">

          <a href="#features">
            Features
          </a>

          <a href="#pricing">
            Pricing
          </a>

          <a href="#faq">
            FAQ
          </a>

        </nav>

        <div className="flex items-center gap-4">

          <ThemeToggle />

          <Link
            href="/login"
            className="text-sm font-medium"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-2 text-sm font-medium text-white"
          >
            Get Started
          </Link>

        </div>

      </div>

    </header>
  );
}