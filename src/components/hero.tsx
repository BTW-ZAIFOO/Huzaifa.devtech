"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const techStack = ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"];

const stats = [
  { value: "10", label: "Projects Delivered" },
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Happy Clients" },
];

interface HeroProps {
  projectsSectionId?: string;
  contactSectionId?: string;
}

export default function Hero({
  projectsSectionId = "projects",
  contactSectionId = "contact",
}: HeroProps) {
  // Smooth scroll handler for standard section targets
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: If section isn't on the current page, try native anchor navigation
      window.location.hash = id;
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-linear-to-b from-neutral-950 via-red-950/10 to-neutral-950 border-b border-red-950/10 pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Ambient Crimson Background Backdrops */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-600/10 blur-[160px] rounded-full animate-pulse duration-6000" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-rose-600/10 blur-[160px] rounded-full animate-pulse duration-8000" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT CONTENT BLOCK */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Tagline Badge stylized in red */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-inner shadow-red-500/5 tracking-wide">
                👋 Welcome To My Portfolio
              </span>
            </motion.div>

            {/* Main Headline with Red to Rose Typography Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.15]"
            >
              Huzaifa
              <span className="block mt-1 bg-linear-to-r from-red-400 via-rose-400 to-red-600 bg-clip-text text-transparent filter drop-shadow-sm">
                Khan
              </span>
            </motion.h1>

            {/* Sub-Headline Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 flex flex-wrap justify-center lg:justify-start items-center gap-2"
            >
              <p className="text-base sm:text-lg text-slate-300 font-medium tracking-normal">
                Software Engineer{" "}
                <span className="text-red-500/60 mx-1">•</span> Full Stack
                Developer <span className="text-red-500/60 mx-1">•</span>{" "}
                <span> Mobile App Developer</span>
              </p>
            </motion.div>

            {/* Availability Indicator remains green for functional status consistency */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="py-5 flex items-center justify-center lg:justify-start gap-2.5"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <span className="text-emerald-400 text-xs sm:text-sm font-medium tracking-wide">
                Available For Freelance & Full-Time Roles
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal opacity-95"
            >
              Building scalable web and mobile applications, SaaS platforms,
              enterprise software, AI-powered products, and digital experiences
              with modern technologies and exceptional user experiences.
            </motion.p>

            {/* Action Buttons refactored to Crimson theme */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8"
            >
              <button
                onClick={() => handleScroll(projectsSectionId)}
                className="group flex items-center justify-center gap-2 rounded-xl px-6.5 py-3.5 text-sm font-semibold bg-linear-to-r from-red-600 via-rose-500 to-red-600 text-white shadow-lg shadow-red-600/10 hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                View Projects
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScroll(contactSectionId)}
                className="rounded-xl px-6.5 py-3.5 text-sm font-semibold border border-red-500/10 bg-red-950/10 backdrop-blur-md text-slate-200 hover:bg-red-950/30 hover:text-white transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Matrix Actions updated with red hover states */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-3 mt-8"
            >
              {[
                { Icon: FaGithub, link: "https://github.com/BTW-ZAIFOO" },
                {
                  Icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/huzaifa-bin-afzal-880a37398?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                },
                { Icon: FaEnvelope, link: "mailto:huzaifazaifi25@gmail.com" },
                { Icon: FaWhatsapp, link: "https://wa.me/923105456889" },
              ].map(({ Icon, link }, index) => (
                <a
                  href={link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10.5 h-10.5 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-linear-to-br hover:from-red-600 hover:to-rose-500 hover:border-transparent hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>

            {/* Grid Metrics / Stats Component bordered with matching red nuances */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-3.5 mt-11 max-w-sm mx-auto lg:mx-0 border-t border-red-950/20 pt-7"
            >
              {stats.map((item, index) => (
                <motion.div
                  whileHover={{ y: -3.5 }}
                  key={index}
                  className="p-3.5 rounded-xl bg-red-950/5 border border-red-500/5 backdrop-blur-md hover:border-red-500/20 transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </h3>
                  <p className="text-slate-400 text-[10px] sm:text-xs mt-0.5 font-medium tracking-wide uppercase">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT MEDIA FRAME */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[270px] sm:max-w-[310px] md:max-w-[350px] lg:max-w-full aspect-4/5 px-4"
            >
              {/* Outer Core Glow Layer shifted to Deep Red and Rose */}
              <div className="absolute inset-0 bg-linear-to-tr from-red-500/10 via-rose-500/5 to-red-600/10 blur-[120px] rounded-full pointer-events-none" />

              {/* Tech Stack Matrix Pill Labels */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1 z-20 w-full px-2 max-w-[90%]">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md bg-slate-900/80 border border-red-500/10 backdrop-blur-md text-[10px] font-medium text-slate-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Styled Crimson-Glass Backdrop Canvas Container */}
              <div className="absolute -inset-1 rounded-[2.3rem] bg-linear-to-tr from-red-500/20 via-rose-400/20 to-red-600/20 blur-md pointer-events-none opacity-80" />

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full overflow-hidden rounded-[2.1rem] border border-white/10 bg-linear-to-b from-white/5 to-transparent backdrop-blur-xl shadow-2xl group"
              >
                <Image
                  src="/huzaifa.jpeg"
                  alt="Huzaifa Khan"
                  fill
                  priority
                  sizes="(max-width: 640px) 270px, (max-width: 768px) 310px, (max-width: 1024px) 350px, 420px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 via-transparent to-transparent" />
              </motion.div>

              {/* Embedded Metrics Float-Card Footer */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 px-4.5 py-2 rounded-xl border border-red-500/10 bg-slate-900/80 backdrop-blur-md shadow-xl whitespace-nowrap z-20"
              >
                <p className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  💼 3+ Years Experience
                </p>
              </motion.div>

              {/* Floating Orbiting Mini Badges stylized in Crimson */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="hidden md:block absolute -left-7 top-1/4 px-3.5 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-red-500/10 text-xs text-slate-200 font-medium shadow-lg"
              >
                🍎 MERN Stack Expert
              </motion.div>

              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="hidden md:block absolute -right-7 bottom-1/4 px-3.5 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-red-500/10 text-xs text-slate-200 font-medium shadow-lg"
              >
                💥 Full Stack Developer <br />
                💥 Software Engineer
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
