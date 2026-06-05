import Link from "next/link";

export default function Hero() {

  return (
    <section className="relative overflow-hidden px-6 py-32">

      <div className="mx-auto max-w-5xl text-center">

        <div className="mb-6 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-400">

          AI Powered Workflow Platform

        </div>

        <h1 className="text-6xl font-black leading-tight tracking-tight md:text-7xl">

          Automate Your Team&apos;s Workflow With AI

        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-500 dark:text-gray-400">

          FlowSync helps teams automate repetitive work,
          manage projects, and scale productivity using AI.

        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >

            Start Free Trial

          </Link>

          <Link
            href="/dashboard"
            className="rounded-full border border-[var(--border)] px-8 py-4 font-semibold transition hover:bg-[var(--card)]"
          >

            View Dashboard

          </Link>

        </div>

      </div>

    </section>
  );
}