"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Purple Orb */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl"
      />

      {/* Blue Orb */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-20 top-96 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
      />

      {/* Pink Orb */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl"
      />

    </div>
  );
}