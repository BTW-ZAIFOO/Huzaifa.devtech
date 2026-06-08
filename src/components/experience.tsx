"use client";

import { motion, Variants } from "framer-motion";
import { FaCode, FaRocket, FaCheckCircle, FaBriefcase } from "react-icons/fa";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  icon: React.ReactNode;
  description: string;
  achievements: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Tech Company",
    duration: "Mar 2022 - Present",
    icon: <FaRocket />,
    description:
      "Leading the design and development of enterprise-grade platforms, SaaS ecosystems, and high-performance cloud-native applications serving thousands of users globally.",
    achievements: [
      "Architected enterprise-scale SaaS infrastructure using modern paradigms.",
      "Boosted core application performance metrics by 60% system-wide.",
      "Led cross-functional engineering teams using agile methodologies.",
      "Integrated secure, AI-powered automation workflows to streamline core processes.",
    ],
    tags: ["Enterprise Systems", "Cloud Architecture", "Performance Optimization", "Team Leadership"],
  },
  {
    role: "Full Stack Developer",
    company: "Software House",
    duration: "Jan 2020 - Feb 2022",
    icon: <FaCode />,
    description:
      "Delivered scalable full-stack solutions across fintech, e-commerce, healthcare, and SaaS industries while ensuring performance, security, and maintainability.",
    achievements: [
      "Successfully built and deployed 25+ production-ready custom software applications.",
      "Designed and documented highly flexible REST & GraphQL architectures.",
      "Implemented ironclad security layers featuring state-of-the-art JWT/OAuth systems.",
      "Optimized complex database relations and significantly reduced API query latency.",
    ],
    tags: ["Full Stack", "GraphQL / REST", "Next.js", "Database Tuning"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#030712]"
    >
      {/* High-End Ambient Lighting Backdrops */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-[5%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3.5 py-1 text-xs font-semibold tracking-widest uppercase text-blue-400 shadow-inner">
            <FaBriefcase className="text-xs" /> Timeline
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight text-white">
            Professional{" "}
            <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400/80 leading-relaxed text-sm sm:text-base font-light">
            A proven trajectory of building scalable architectures, guiding high-velocity teams, and shipping impactful software products.
          </p>
        </motion.div>

        {/* Timeline Wrap */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Centralized Line For Desktop / Left Aligned For Mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-linear-to-b from-blue-500 via-indigo-500/40 to-transparent -translate-x-1/2" />

          <div className="space-y-16 md:space-y-20">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.role}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Central Icon Node */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-500/60 bg-[#0d1224] text-indigo-400 text-xs shadow-[0_0_12px_rgba(99,102,241,0.4)] -translate-x-1/2 z-20" />

                  {/* Empty space counterpart block for structure stability */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Block Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-7">
                    <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/1 backdrop-blur-xl p-6 sm:p-7 transition-all duration-500 hover:border-indigo-500/30 hover:bg-white/2 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
                      
                      {/* Interactive Background Gradient Flare on Hover */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none">
                        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
                      </div>

                      {/* Header Layout */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4.5">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-lg text-blue-400">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                              {item.role}
                            </h3>
                            <p className="text-sm font-medium text-gray-400 mt-0.5">
                              {item.company}
                            </p>
                          </div>
                        </div>

                        <div className="w-fit shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          {item.duration}
                        </div>
                      </div>

                      {/* Core description text component */}
                      <p className="mt-4 text-sm text-gray-400 leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Targeted Bullet List Structure */}
                      <div className="mt-5 space-y-3">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <FaCheckCircle className="mt-1 text-xs text-indigo-400/80 shrink-0" />
                            <span className="text-sm text-gray-300/90 leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Flexible Dynamic Pill Matrix Layout */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/6 bg-white/2 px-2.5 py-1 text-xs font-medium text-gray-400 transition-colors duration-300 hover:border-blue-500/20 hover:text-blue-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}