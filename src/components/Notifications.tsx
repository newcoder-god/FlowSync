"use client";

import { useState } from "react";

import {
  Bell,
  CheckCircle2,
  Sparkles,
  CheckSquare,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: CheckSquare,
    title: "New task created",
    description:
      "Task successfully added to workflow.",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "AI assistant updated",
    description:
      "AI workspace is ready to use.",
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: "Workflow completed",
    description:
      "A task was marked as completed.",
  },
];

export default function Notifications() {

  const [open, setOpen] =
    useState(false);

  return (
    <div className="relative">

      {/* Bell */}
      <button
        aria-label="Notifications"
        onClick={() =>
          setOpen(!open)
        }
        className="relative rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >

        <Bell size={18} />

        {/* Dot */}
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-purple-500" />

      </button>

      {/* Dropdown */}
      {open && (

        <div className="absolute right-0 top-16 z-50 w-96 rounded-3xl border border-white/10 bg-black/95 p-6 shadow-2xl backdrop-blur-xl">

          {/* Header */}
          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-xl font-bold">
              Notifications
            </h2>

            <button
              onClick={() =>
                setOpen(false)
              }
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Close
            </button>

          </div>

          {/* Items */}
          <div className="space-y-4">

            {notifications.map(
              (notification) => {

                const Icon =
                  notification.icon;

                return (

                  <div
                    key={
                      notification.id
                    }
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >

                    <div className="h-fit rounded-xl bg-purple-500/20 p-3 text-purple-300">

                      <Icon size={18} />

                    </div>

                    <div>

                      <h3 className="font-semibold">
                        {
                          notification.title
                        }
                      </h3>

                      <p className="mt-1 text-sm text-gray-400">
                        {
                          notification.description
                        }
                      </p>

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>
      )}

    </div>
  );
}