"use client";

import { motion, Variants } from "framer-motion";
import { GitBranch, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  sourceUrl: string;
  liveUrl: string;
  imageUrl: string; // Added image URL tracking
}

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A high-performance digital showroom built with a focus on core web vitals, fluent motion design, and responsive breakpoint architectures.",
    tech: [
      "Next.js",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "React Icons",
    ],
    sourceUrl: "https://github.com/BTW-ZAIFOO/Huzaifa.devtech.git",
    liveUrl: "https://huzaifa-devtech.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Student Task Management Platform",
    description:
      "A production-ready SaaS client utility designed to streamline academic workflows, offering dynamic scheduling, real-time data persistence, and sub-atomic component structures.",
    tech: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons",
    ],
    sourceUrl:
      "https://github.com/BTW-ZAIFOO/Student-Task-Management-Website.git",
    liveUrl: "https://student-task-management-website.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dynamic Resume Builder",
    description:
      "An intuitive client-side document compiler enabling structural styling, interactive font syncing, and real-time template switching workflows.",
    tech: ["Next.js", "Tailwind CSS", "Google Fonts", "React Icons"],
    sourceUrl: "https://github.com/BTW-ZAIFOO/Resume-builder.git",
    liveUrl: "https://resume-builder-flame-theta.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hawkrix Corporate Platform",
    description:
      "A secure, scalable enterprise landing framework optimized for discoverability, asset caching, and modern commercial design guidelines.",
    tech: [
      "Next.js",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "React Icons",
    ],
    sourceUrl: "https://github.com/BTW-ZAIFOO/Hawkrix.git",
    liveUrl: "https://hawkrix.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Astro Zen Minimal Portfolio",
    description:
      "An ultra-lightweight portfolio site built on a static-first framework to achieve near-instantaneous page paint scores and clean design paths.",
    tech: ["Astro", "Tailwind CSS", "Framer Motion"],
    sourceUrl: "https://github.com/BTW-ZAIFOO/Personal-Portfolio.git",
    liveUrl: "https://personal-portfolio-huzaifa-khan.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "TradesPeople Platform",
    description:
      "A conceptual dynamic directory structure featuring advanced filtration UI states, highly customizable theme context, and structured data layouts.",
    tech: ["Next.js", "Tailwind CSS", "Google Fonts", "React Icons"],
    sourceUrl: "https://github.com/BTW-ZAIFOO/tradespeople.git",
    liveUrl: "https://tradespeople.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Invextech Corporate Node",
    description:
      "A business-centric application displaying deep structural component architecture, performance-optimized media distribution, and global asset management.",
    tech: ["Next.js", "Tailwind CSS", "Google Fonts", "React Icons"],
    sourceUrl: "https://github.com/BTW-ZAIFOO/Invextech-Site.git",
    liveUrl: "https://invextech-site.vercel.app/Home",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real-time Chat Moderation Ecosystem",
    description:
      "An intricate full-stack communication infrastructure featuring persistent WebSockets connections, secure isolated OTP authentication, and automated moderation layers.",
    tech: [
      "Next.js",
      "Web-Sockets",
      "OTP Verification",
      "Tailwind CSS",
      "Google Fonts",
      "React Icons",
    ],
    sourceUrl: "https://github.com/BTW-ZAIFOO/huzaifa-devv.git",
    liveUrl: "https://huzaifa-devv.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
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
              {/* Dynamic Project Image Header with Fallback Pattern */}
              <div className="h-44 sm:h-48 bg-zinc-900 border-b border-zinc-900 relative overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} abstract visual preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[16px_16px]" />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
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
