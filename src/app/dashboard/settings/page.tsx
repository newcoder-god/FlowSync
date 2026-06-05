"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import { toast } from "sonner";

import ReactMarkdown from "react-markdown";

import { supabase } from "@/lib/supabase";

type Message = {
  role: "user" | "assistant";
  content: string;
  created_at?: string;
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
    fetchMessages();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function fetchMessages() {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } =
      await supabase
        .from("messages")
        .select("*")
        .eq("user_id", user?.id)
        .order("id");

    if (error) {
      toast.error(
        "Failed to load messages"
      );
      return;
    }

    setMessages(data || []);
  }

  async function saveMessage(
    role: string,
    content: string
  ) {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    await supabase
      .from("messages")
      .insert([
        {
          role,
          content,
          user_id: user?.id,
        },
      ]);
  }

  async function sendMessage() {

    if (!input.trim()) return;

    const userMessage = {
      role: "user" as const,
      content: input,
      created_at:
        new Date().toISOString(),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    await saveMessage(
      "user",
      input
    );

    const currentInput = input;

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
            message: currentInput,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        toast.error(data.error);
        return;
      }

      const aiMessage = {
        role:
          "assistant" as const,
        content: data.response,
        created_at:
          new Date().toISOString(),
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

      await saveMessage(
        "assistant",
        data.response
      );

    } catch {
      toast.error(
        "Failed to contact AI"
      );
    }

    setLoading(false);
  }

  function formatTime(
    timestamp?: string
  ) {

    if (!timestamp) return "";

    return new Date(
      timestamp
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col">

      {/* Header */}
      <div className="mb-6">

        <h1 className="text-5xl font-bold">
          AI Assistant
        </h1>

        <p className="mt-3 text-gray-400">
          Your AI workspace assistant
        </p>

      </div>

      {/* Chat */}
      <div className="flex-1 space-y-6 overflow-y-auto rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-6 backdrop-blur-xl">

        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center text-center">

            <h2 className="text-3xl font-bold">
              Welcome to FlowSync AI
            </h2>

            <p className="mt-4 max-w-md text-gray-400">
              Ask questions, brainstorm ideas,
              automate workflows, or get
              productivity help instantly.
            </p>

          </div>
        )}

        {messages.map(
          (message, index) => (

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
              className={`max-w-3xl rounded-3xl p-5 ${
                message.role === "user"
                  ? "ml-auto bg-purple-600"
                  : "border border-white/10 bg-white/10"
              }`}
            >

              <div className="mb-2 flex items-center justify-between">

                <span className="text-sm font-semibold text-gray-300">

                  {message.role ===
                  "user"
                    ? "You"
                    : "FlowSync AI"}

                </span>

                <span className="text-xs text-gray-400">

                  {formatTime(
                    message.created_at
                  )}

                </span>

              </div>

              <div className="prose prose-invert max-w-none">

                <ReactMarkdown>
                  {message.content}
                </ReactMarkdown>

              </div>

            </motion.div>
          )
        )}

        {/* Typing */}
        {loading && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="w-fit rounded-3xl border border-white/10 bg-white/10 p-5"
          >

            <div className="flex gap-2">

              <div className="h-3 w-3 animate-bounce rounded-full bg-white" />

              <div className="h-3 w-3 animate-bounce rounded-full bg-white delay-100" />

              <div className="h-3 w-3 animate-bounce rounded-full bg-white delay-200" />

            </div>

          </motion.div>
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
            if (
              e.key === "Enter" &&
              !loading
            ) {
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