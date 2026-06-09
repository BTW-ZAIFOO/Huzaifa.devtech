"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      { name: "Student Sphere", href: "https://student-task-management-website.vercel.app/" },
      { name: "Chat Moderation System", href: "https://huzaifa-devv.vercel.app/" },
      { name: "Hawkrix Corporate Site", href: "https://hawkrix.vercel.app/" },
      { name: "Invextech Site", href: "https://invextech-site.vercel.app/Home" },
    ],
    socials: [
      { icon: <FaGithub size={18} />, href: "https://github.com/BTW-ZAIFOO", label: "GitHub" },
      { icon: <FaLinkedin size={18} />, href: "#", label: "LinkedIn" },
      { icon: <Mail size={18} />, href: "mailto:your.email@example.com", label: "Email" },
      { icon: <FaWhatsapp size={18} />, href: "https://wa.me/1234567890", label: "WhatsApp" },
    ],
  };

  return (
    <footer className="relative bg-[#030712] border-t border-zinc-900/80 overflow-hidden pt-24 pb-12 text-white">
      {/* High-End Ambient Neon Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-[-30%] left-1/3 h-[600px] w-[900px] rounded-full bg-indigo-500/10 blur-[180px]" />
        <div className="absolute top-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-zinc-900/60">
          
          {/* Brand Identity Pillar */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)] animate-pulse" />
              <span className="text-xl font-black tracking-wider uppercase text-zinc-100">
                Huzaifa<span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">.devtech</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400/90 leading-relaxed max-w-md font-light">
              Building reliable full-stack applications, modern mobile apps, and intelligent AI integrations. Combining clean code with strategic growth to create exceptional user experiences.
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
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Links</h4>
              <ul className="space-y-3 text-sm font-light text-zinc-400">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:text-zinc-100 transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4.5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Live Projects</h4>
              <ul className="space-y-3 text-sm font-light text-zinc-400">
                {footerLinks.showcase.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 group hover:text-zinc-100 transition-colors duration-200">
                      <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full">{link.name}</span>
                      <ArrowUpRight size={13} className="text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Glowing Glassmorphic CTA Module */}
            <div className="col-span-2 sm:col-span-1 flex flex-col justify-start pt-2 sm:pt-0">
              <div className="group relative rounded-2xl p-px overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                {/* Animated Border Ring */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/50 via-indigo-500/20 to-cyan-500/50 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                
                <a 
                  href="#contact" 
                  className="relative flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-zinc-200 bg-zinc-950/80 backdrop-blur-xl rounded-[15px] transition-all duration-300 group-hover:bg-zinc-900/40 group-hover:text-white"
                >
                  <Mail size={13} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
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
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-950/40 text-zinc-400/90 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-blue-400 hover:-translate-y-0.5 shadow-xs"
              >
                {social.icon}
              </a>
            ))}

            <div className="h-4 w-px bg-zinc-800/80 mx-1" />

            {/* Micro-Glow Scroll Launcher */}
            <button
              onClick={handleScrollToTop}
              aria-label="Scroll to top"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-950/40 text-zinc-500 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:text-indigo-400 cursor-pointer group shadow-xs"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}