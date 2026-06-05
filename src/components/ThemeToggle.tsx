"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

export default function ThemeToggle() {

  const [mounted, setMounted] =
    useState(false);

  const { theme, setTheme } =
    useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="cursor-pointer rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
    >

      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}

    </button>
  );
}