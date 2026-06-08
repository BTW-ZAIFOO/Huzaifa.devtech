"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

const expertise = [
  {
    icon: <FaCode className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Frontend Engineering",
    description:
      "Developing high-performance web applications using React, Next.js, and TypeScript with a strong focus on scalable UI architectures.",
  },
  {
    icon: <FaMobileAlt className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Mobile Development",
    description:
      "Building native-quality cross-platform mobile applications for iOS and Android environments using React Native and Flutter.",
  },
  {
    icon: <FaServer className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Backend Development",
    description:
      "Designing secure, high-throughput REST/GraphQL APIs, distributed microservices, robust auth workflows, and cloud architecture.",
  },
  {
    icon: <FaBrain className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "AI & Automation",
    description:
      "Integrating production-ready AI systems, automated LLM pipelines, specialized autonomous workflows, and smart tools.",
  },
  {
    icon: <FaRocket className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Product Engineering",
    description:
      "Transforming complex early-stage concepts into fully scalable, production-grade SaaS platforms with exceptional user experiences.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Decorative Grid & Ellipses */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] lg:w-[800px] lg:h-[800px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left Side: Content & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:sticky lg:top-24"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs text-blue-400 font-medium uppercase tracking-widest">
                About Me
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-white">
              Building{" "}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent block sm:inline lg:block">
                Exceptional Digital
              </span>{" "}
              Experiences
            </h2>

            {/* Description Blocks */}
            <div className="mt-6 space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md lg:max-w-none">
              <p>
                I am a Senior Software Engineer with over 4 years of
                professional experience architecting reliable full-stack web
                platforms, custom mobile ecosystems, and intelligent machine
                learning integrations.
              </p>
              <p>
                I actively manage the comprehensive development
                lifecycle—ranging from baseline system engineering and crisp
                design patterns to robust cloud optimizations and automated
                deployments.
              </p>
            </div>

            {/* Professional Highlights Tags */}
            <div className="mt-6 flex flex-wrap gap-2 max-w-md lg:max-w-none">
              {[
                "React & Next.js",
                "React Native",
                "Node.js",
                "TypeScript",
                "AI Integration",
                "Cloud Solutions",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full border border-neutral-900 bg-neutral-900/30 text-xs text-neutral-400 hover:border-blue-500/30 hover:text-white transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Expertise Cards Grid */}
          <div className="grid gap-4 mt-8 lg:mt-0">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden rounded-xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-xl p-5 sm:p-6 transition-all duration-200 hover:border-neutral-800/80 hover:bg-neutral-900/20 shadow-xs"
              >
                {/* Subtle Card Micro-Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/3 via-transparent to-transparent" />
                </div>

                <div className="relative flex items-start gap-4">
                  {/* Icon Wrapper */}
                  <div className="shrink-0 p-2.5 sm:p-3 rounded-lg bg-neutral-900 border border-neutral-800/60 text-blue-400 group-hover:text-cyan-400 group-hover:border-blue-500/20 transition-all duration-200 shadow-xs">
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors duration-150">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-150">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
