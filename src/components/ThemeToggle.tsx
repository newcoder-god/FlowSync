"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "next-themes";

export default function ThemeToggle() {

  const [mounted, setMounted] =
    useState(false);

  const {
    theme,
    setTheme,
  } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="rounded-full border border-[var(--border)] bg-[var(--card)] p-3 transition hover:scale-105 hover:opacity-90"
    >

      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}

    </button>
  );
}