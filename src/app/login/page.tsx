"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Lock,
} from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
      >

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Welcome back
          </h1>

          <p className="mt-4 text-gray-400">
            Sign in to continue to FlowSync
          </p>

        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">

          {/* Email */}
          <div>

            <label className="mb-2 block text-sm text-gray-300">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">

              <Mail size={18} className="text-gray-400" />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">

              <Lock size={18} className="text-gray-400" />

              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent outline-none"
              />

            </div>

          </div>

          {/* Button */}
          <button className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 py-3 font-medium transition hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30">
            Sign In
          </button>

        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <span className="text-white">
            Sign up
          </span>
        </p>

      </motion.div>

    </main>
  );
}