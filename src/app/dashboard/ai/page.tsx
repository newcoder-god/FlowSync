"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { toast } from "sonner";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIPage() {

  const [messages, setMessages] =
    useState<Message[]>([]);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const bottomRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function sendMessage() {

    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    setLoading(true);

    try {

      const response = await fetch(
        "/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message: input,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        toast.error(data.error);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);

    } catch {
      toast.error(
        "Failed to contact AI"
      );
    }

    setLoading(false);
  }

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col">

      {/* Header */}
      <div className="mb-6">

        <h1 className="text-5xl font-bold">
          AI Assistant
        </h1>

        <p className="mt-3 text-gray-400">
          Ask FlowSync AI anything
        </p>

      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

        {messages.length === 0 && (
          <div className="flex h-full items-center justify-center text-gray-500">
            Start a conversation with AI
          </div>
        )}

        {messages.map((message, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className={`max-w-3xl rounded-2xl p-4 ${
              message.role === "user"
                ? "ml-auto bg-purple-600"
                : "bg-white/10"
            }`}
          >
            {message.content}
          </motion.div>
        ))}

        {loading && (
          <div className="w-fit rounded-2xl bg-white/10 p-4">
            Thinking...
          </div>
        )}

        <div ref={bottomRef} />

      </div>

      {/* Input */}
      <div className="mt-6 flex gap-4">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask AI anything..."
          className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="rounded-2xl bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-500 disabled:opacity-50"
        >
          Send
        </button>

      </div>

    </div>
  );
}