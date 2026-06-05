"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase";

import { toast } from "sonner";

export default function SignupPage() {

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function signUp() {

    setLoading(true);

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success(
      "Account created successfully!"
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-8 backdrop-blur-xl">

        <h1 className="mb-8 text-center text-4xl font-bold">
          Create Account
        </h1>

        <div className="space-y-4">

          <input
            aria-label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-black/40 p-3 outline-none transition focus:ring-2 focus:ring-purple-500"
          />

          <input
            aria-label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-black/40 p-3 outline-none transition focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={signUp}
            disabled={loading}
            className="w-full rounded-xl bg-purple-600 p-3 font-semibold transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
          >
            {loading
              ? "Creating Account..."
              : "Sign Up"}
          </button>

        </div>

      </div>

    </main>
  );
}