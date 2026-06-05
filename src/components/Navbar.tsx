"use client";

import Link from "next/link";

export default function Navbar() {

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-bold text-white transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          FlowSync
        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#features"
            className="text-sm text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="text-sm text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="text-sm text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            FAQ
          </a>

        </nav>

        <div className="flex items-center gap-4">

          <Link
            href="/login"
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 text-sm font-medium text-white transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Get Started
          </Link>

        </div>

      </div>

    </header>
  );
}