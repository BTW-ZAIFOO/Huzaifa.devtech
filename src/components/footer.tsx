"use client";

import { useState, useEffect } from "react";
import { Mail, ArrowUpRight, ArrowUp, ShieldAlert } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPopup, setShowPopup] = useState(false);

  // Automatically close the privacy popup after 4 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsappClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Intercept navigation completely
    e.preventDefault();
    setShowPopup(true);
  };

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#hero" },
      { name: "About Me", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
    showcase: [
      {
        name: "Student Sphere",
        href: "https://student-task-management-website.vercel.app/",
      },
      {
        name: "Chat Moderation System",
        href: "https://huzaifa-devv.vercel.app/",
      },
      { name: "Hawkrix Corporate Site", href: "https://hawkrix.vercel.app/" },
      {
        name: "Invextech Site",
        href: "https://invextech-site.vercel.app/Home",
      },
    ],
    socials: [
      {
        icon: <FaGithub size={18} />,
        href: "https://github.com/BTW-ZAIFOO",
        label: "GitHub",
        isProtected: false,
      },
      {
        icon: <FaLinkedin size={18} />,
        href: "https://www.linkedin.com/in/huzaifa-bin-afzal-880a37398?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        label: "LinkedIn",
        isProtected: false,
      },
      {
        icon: <Mail size={18} />,
        href: "mailto:huzaifazaifi25@gmail.com",
        label: "Email",
        isProtected: false,
      },
      {
        icon: <FaWhatsapp size={18} />,
        href: "#", // Changed link to an empty fragment hash to completely hide your number
        label: "WhatsApp",
        isProtected: true,
      },
    ],
  };

  return (
    <footer className="relative bg-linear-to-b from-neutral-950 via-red-950/10 to-neutral-950 border-t border-red-950/30 overflow-hidden pt-24 pb-12 text-white">
      {/* High-End Ambient Neon Lighting updated to reds and roses */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute bottom-[-30%] left-1/3 h-[600px] w-[900px] rounded-full bg-red-500/10 blur-[180px]" />
        <div className="absolute top-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-rose-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-red-950/20">
          {/* Brand Identity Pillar */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(239,68,68,0.8)] animate-pulse" />
              <span className="text-xl font-black tracking-wider uppercase text-zinc-100">
                Huzaifa
                <span className="bg-linear-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                  .devtech
                </span>
              </span>
            </div>
            <p className="text-sm text-zinc-400/90 leading-relaxed max-w-md font-light">
              Building reliable full-stack applications, modern mobile apps, and
              intelligent AI integrations. Combining clean code with strategic
              growth to create exceptional user experiences.
            </p>

            {/* Live Operations Badge */}
            <div className="inline-flex items-center gap-2 w-fit rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1 text-xs font-medium text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.03)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Available For Freelance & Full-Time Roles
            </div>
          </div>

          {/* Nav Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-4">
            <div className="flex flex-col space-y-4.5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Links
              </h4>
              <ul className="space-y-3 text-sm font-light text-zinc-400">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full hover:text-zinc-100 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4.5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Live Projects
              </h4>
              <ul className="space-y-3 text-sm font-light text-zinc-400">
                {footerLinks.showcase.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 group hover:text-zinc-100 transition-colors duration-200"
                    >
                      <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-rose-400 after:transition-all after:duration-300 hover:after:w-full">
                        {link.name}
                      </span>
                      <ArrowUpRight
                        size={13}
                        className="text-zinc-600 group-hover:text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Glowing Glassmorphic CTA Module */}
            <div className="col-span-2 sm:col-span-1 flex flex-col justify-start pt-2 sm:pt-0">
              <div className="group relative rounded-2xl p-px overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                <div className="absolute inset-0 bg-linear-to-r from-red-500/50 via-rose-500/20 to-red-600/50 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <a
                  href="#contact"
                  className="relative flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-zinc-200 bg-zinc-950/80 backdrop-blur-xl rounded-[15px] transition-all duration-300 group-hover:bg-zinc-900/40 group-hover:text-white"
                >
                  <Mail
                    size={13}
                    className="text-red-400 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Metadata Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-zinc-500/80 font-light tracking-wide text-center sm:text-left">
            <p>© {currentYear} Huzaifa.devtech. All rights reserved.</p>
          </div>

          {/* Social Array & Escape Anchor */}
          <div className="flex items-center gap-3">
            {footerLinks.socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.isProtected ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                onClick={social.isProtected ? handleWhatsappClick : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-950/40 text-zinc-400/90 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/5 hover:text-red-400 hover:-translate-y-0.5 shadow-xs"
              >
                {social.icon}
              </a>
            ))}

            <div className="h-4 w-px bg-zinc-800/80 mx-1" />

            {/* Micro-Glow Scroll Launcher */}
            <button
              onClick={handleScrollToTop}
              aria-label="Scroll to top"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-950/40 text-zinc-500 transition-all duration-300 hover:border-rose-500/40 hover:bg-rose-500/5 hover:text-rose-400 cursor-pointer group shadow-xs"
            >
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER PRIVACY DIALOG NOTIFICATION */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 px-5 py-4 rounded-2xl border border-red-500/20 bg-neutral-900/85 backdrop-blur-xl shadow-2xl shadow-red-950/40 max-w-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shrink-0">
              <ShieldAlert size={18} className="animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                Direct Contact Restricted
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-normal">
                To protect privacy, direct WhatsApp routing is hidden. Please
                use the **Contact Me** form or email instead.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
