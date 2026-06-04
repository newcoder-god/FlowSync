"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight">
          FlowSync
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

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
            href="#"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            About
          </a>
<ThemeToggle />
          <button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 text-sm font-medium text-white transition hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
            Get Started
          </button>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
          >

            <div className="flex flex-col gap-6 px-6 py-8">

              <a
                href="#features"
                className="text-gray-300 transition hover:text-white"
              >
                Features
              </a>

              <a
                href="#pricing"
                className="text-gray-300 transition hover:text-white"
              >
                Pricing
              </a>

              <a
                href="#"
                className="text-gray-300 transition hover:text-white"
              >
                About
              </a>

              <button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 font-medium text-white">
                Get Started
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}