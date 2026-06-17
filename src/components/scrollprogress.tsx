"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      /* Shifted indicator accent background class to deep crimson/red guidelines */
      className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-9999"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
}
