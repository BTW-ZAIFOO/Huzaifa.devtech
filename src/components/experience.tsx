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
    role: "AI Intern",
    company: "FlyRank AI",
    duration: "June 2026 - Present",
    icon: <FaCode />,
    description:
      "Focusing on Front-end AI Engineering and the development of AI-powered web applications to create intuitive user experiences.",
    achievements: [
      "Working as an AI Intern at FlyRank AI, focusing on Front-end AI Engineering and AI-powered web applications.",
      "Contributing to the development of responsive and user-friendly interfaces using modern web technologies.",
      "Collaborating with team members to integrate AI solutions into real-world applications.",
      "Gaining hands-on experience in AI workflows, prompt engineering, and frontend development.",
      "Participating in remote agile development processes and project discussions.",
      "Continuously learning and applying AI tools and technologies to improve user experiences.",
    ],
    tags: [
      "Artificial Intelligence (AI)",
      "Front-End Development",
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS",
      "Prompt Engineering",
      "Generative AI Tools",
      "Web Development",
      "Git",
      "GitHub",
    ],
  },
  {
    role: "Chief Marketing Officer & Senior Software Engineer",
    company: "Nexgenztech",
    duration: "Feb 2026 - Present",
    icon: <FaCode />,
    description:
      "Driving business growth and building scalable digital solutions by combining software engineering, AI innovation, and strategic marketing leadership.",
    achievements: [
      "Led the development of full-stack web applications and AI-powered business solutions.",
      "Built and delivered scalable MERN stack applications with a strong focus on performance and user experience.",
      "Developed AI chatbots, automation systems, and business-focused digital products.",
      "Mentored and trained interns in React.js, Node.js, MongoDB, API integration, and software development best practices.",
      "Contributed to company growth through lead generation strategies, brand positioning, and digital marketing initiatives.",
      "Improved team productivity and project execution through structured collaboration and workflow optimization.",
    ],
    tags: [
      "Full Stack Development",
      "MERN Stack",
      "AI Solutions & Automation",
      "Product Development",
      "Technical Leadership",
      "Digital Marketing Strategy",
      "Team Mentorship",
      "Business Growth & Lead Generation",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Invextech",
    duration: "Oct 2024 - Jul 2025",
    icon: <FaCode />,
    description:
      "Built scalable MERN stack applications and modern web solutions while contributing to client projects, team collaboration, and intern mentorship.",
    achievements: [
      "Developed multiple production-ready MERN stack applications.",
      "Built responsive UIs using Tailwind CSS, ShadCN UI, and Aceternity UI.",
      "Integrated APIs and implemented dynamic application features.",
      "Created dashboards and data visualizations using React ApexCharts.",
      "Worked on client-based projects to solve real business challenges.",
      "Mentored interns in React.js and MERN stack development.",
    ],
    tags: [
      "MERN Stack",
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "API Integration",
      "Tailwind CSS",
      "Software Engineering",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Mindgigs, Peshawar",
    duration: "Feb 2024 - Oct 2024",
    icon: <FaCode />,
    description:
      "Progressed from Junior React Developer to Frontend Developer while building responsive web applications and strengthening expertise in modern frontend technologies.",
    achievements: [
      "Advanced from Junior React Developer to Frontend Developer.",
      "Built reusable React.js components and responsive user interfaces.",
      "Developed optimized web pages focused on performance and user experience.",
      "Worked with Bootstrap and Tailwind CSS for scalable frontend development.",
      "Contributed to company projects and team-based development workflows.",
      "Developed the company's certificate page using React.js.",
    ],
    tags: [
      "React.js",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "Frontend Development",
      "UI Development",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Codevenator Software Solutions",
    duration: "Jan 2023 - Mar 2023",
    icon: <FaCode />,
    description:
      "Built a strong foundation in web development through hands-on experience with frontend technologies and real-world project work during a software house internship.",
    achievements: [
      "Learned core web development concepts using HTML, CSS, and JavaScript.",
      "Built and completed an internship project applying practical development skills.",
      "Developed responsive web pages and basic user interfaces.",
      "Improved problem-solving and debugging abilities.",
      "Gained experience working in a professional software development environment.",
      "Strengthened understanding of frontend development best practices.",
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend Development",
      "Web Development",
      "Debugging",
      "Problem Solving",
    ],
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
      className="relative overflow-hidden py-24 sm:py-32 bg-linear-to-b from-neutral-950 via-red-950/10 to-neutral-950"
    >
      {/* High-End Ambient Lighting Backdrops elevated for stronger contrast */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[-10%] right-[-10%] h-150 w-[600px] rounded-full bg-red-600/15 blur-[150px]" />
        <div className="absolute bottom-[5%] left-[-10%] h-[600px] w-[600px] rounded-full bg-rose-600/10 blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[200px]" />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3.5 py-1 text-xs font-semibold tracking-widest uppercase text-red-400 shadow-inner">
            <FaBriefcase className="text-xs" /> Timeline
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight text-white">
            Professional{" "}
            <span className="bg-linear-to-r from-red-400 via-rose-400 to-red-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400/80 leading-relaxed text-sm sm:text-base font-light">
            From initial concept and interactive UI layout to deployment-ready
            code, I build the full-stack architecture that modern web
            applications run on.
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
          {/* Centralized Timeline Axis Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-linear-to-b from-red-500 via-rose-500/40 to-transparent -translate-x-1/2" />

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
                  <div className="absolute left-4 md:left-1/2 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-red-500/60 bg-[#0d1224] text-red-400 text-xs shadow-[0_0_12px_rgba(239,68,68,0.4)] -translate-x-1/2 z-20" />

                  {/* Empty space counterpart block */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Block Container updated to blend clean crimson-glass elements */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-7">
                    <div className="group relative overflow-hidden rounded-xl border border-red-500/10 bg-red-950/5 backdrop-blur-xl p-6 sm:p-7 transition-all duration-500 hover:border-red-500/30 hover:bg-red-950/10 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
                      {/* Interactive Background Gradient Flare on Hover */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none">
                        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-500/5 blur-3xl" />
                      </div>

                      {/* Header Layout */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4.5">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/10 bg-red-500/5 text-lg text-red-400">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-red-400 transition-colors duration-300">
                              {item.role}
                            </h3>
                            <p className="text-sm font-medium text-gray-400 mt-0.5">
                              {item.company}
                            </p>
                          </div>
                        </div>

                        {/* Duration Badge */}
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
                            <FaCheckCircle className="mt-1 text-xs text-rose-400/80 shrink-0" />
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
                            className="rounded-md border border-red-500/10 bg-red-950/10 px-2.5 py-1 text-xs font-medium text-gray-400 transition-colors duration-300 hover:border-red-500/30 hover:text-red-300"
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
