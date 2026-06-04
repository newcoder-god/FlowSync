"use client";

import {
  Sparkles,
  Send,
} from "lucide-react";

import { motion } from "framer-motion";

export default function AIPage() {
  return (
    <div className="flex flex-col h-full">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          AI Assistant
        </h1>

        <p className="mt-4 text-gray-400">
          Interact with FlowSync AI.
        </p>

      </div>

      {/* Chat Messages */}
      <div className="flex-1 space-y-8 overflow-y-auto">

        {/* AI Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-4"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-bold">
            AI
          </div>

          <div className="max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <p className="leading-relaxed text-gray-300">
              Hello! I’m your AI productivity assistant.
            </p>

          </div>

        </motion.div>

        {/* User Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-end"
        >

          <div className="max-w-2xl rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 p-6">

            <p>
              Generate ideas to improve team efficiency.
            </p>

          </div>

        </motion.div>

      </div>

      {/* Input */}
      <div className="mt-8 flex items-center gap-4 rounded-3xl border border-white/10 bg-black/40 p-4">

        <input
          type="text"
          placeholder="Ask FlowSync AI anything..."
          className="flex-1 bg-transparent outline-none"
        />

        <button className="rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 p-3 transition hover:scale-105">

          <Send size={18} />

        </button>

      </div>

    </div>
  );
}