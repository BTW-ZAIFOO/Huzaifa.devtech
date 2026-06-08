"use client";

import { motion, Variants } from "framer-motion";
import { GitBranch, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  sourceUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "Edge Observability Engine",
    description:
      "Distributed telemetry platform capturing eBPF network metrics and system vitals at the edge with <2ms analytical query times.",
    tech: ["Go", "ClickHouse", "Next.js", "GraphQL"],
    sourceUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Decentralized Event Ledger",
    description:
      "High-throughput, fault-tolerant event streaming platform implementing Raft consensus for real-time distributed data validation.",
    tech: ["Rust", "TypeScript", "gRPC", "WebSockets"],
    sourceUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Autonomous CI/CD Pipeline",
    description:
      "Cloud-native orchestration engine that automatically builds, tests, and optimizes multi-architecture container configurations using WASM-based sandboxing.",
    tech: ["Next.js", "Kubernetes", "Redis", "Docker"],
    sourceUrl: "#",
    liveUrl: "#",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 md:py-32 md:px-12 max-w-7xl mx-auto overflow-hidden text-white"
    >
      {/* Premium Ambient Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-blue-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-12 right-10 w-[280px] sm:w-[450px] h-[280px] sm:h-[440px] bg-purple-500/10 blur-[130px] rounded-full" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20"
        >
          System Implementations
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-4xl sm:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white to-zinc-400"
        >
          Featured Infrastructures
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Production-grade applications and scalable systems engineered for
          extreme performance, security, and intuitive UX.
        </motion.p>
      </div>

      {/* Bento-Inspired Responsive Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col h-full"
          >
            {/* Hover Glow Ring */}
            <div className="absolute -inset-px rounded-[24px] bg-linear-to-br from-blue-500/30 via-zinc-800 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />

            {/* Main Interactive Card Structure */}
            <div className="relative flex flex-col h-full rounded-[24px] border border-zinc-800 bg-zinc-950/40 backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-zinc-700/80">
              {/* Card Geometric Banner / Grid Texture */}
              <div className="h-32 sm:h-36 bg-linear-to-br from-blue-950/20 via-zinc-950 to-purple-950/20 border-b border-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[16px_16px]" />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent" />
              </div>

              {/* Core Content Area */}
              <div className="p-6 sm:p-8 flex flex-col grow">
                <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed grow">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-6 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-300 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Structural Action Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-900 mt-auto">
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
                  >
                    <GitBranch
                      size={15}
                      className="text-zinc-600 group-hover:text-blue-400 transition-colors duration-300"
                    />
                    <span>Source</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full bg-zinc-100 text-zinc-950 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-[1.02]"
                  >
                    <span>Deployment</span>
                    <ArrowUpRight size={14} className="stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
