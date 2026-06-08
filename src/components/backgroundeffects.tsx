"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    // The container is fixed, spans the full viewport, and hides overflow to prevent unwanted scrollbars
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none" aria-hidden="true">
      {/* Ambient Master Glow - Soft warm center to give depth to the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-indigo-500/5 blur-[180px] rounded-full mix-blend-screen" />

      {/* Top Left / Blue-Indigo Blobs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 60, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        // Using responsive Tailwind classes: smaller sizes on mobile (w-64), scaling up to desktop (md:w-[600px])
        className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 md:w-[600px] md:h-[600px] bg-linear-to-br from-blue-600/10 to-indigo-500/15 rounded-full blur-[60px] sm:blur-[100px] md:blur-[140px] mix-blend-screen will-change-transform"
      />

      {/* Bottom Right / Purple-Pink Blobs */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, -40, -70, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2, // Desynchronizes the two animations for a more natural feel
        }}
        className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 md:w-[600px] md:h-[600px] bg-linear-to-tr from-purple-600/10 to-pink-500/10 rounded-full blur-[60px] sm:blur-[100px] md:blur-[140px] mix-blend-screen will-change-transform"
      />
    </div>
  );
}