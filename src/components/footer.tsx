"use client"; // <--- Add this at the absolute top

import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-32 border-t border-white/5 bg-black text-gray-400 overflow-hidden">
      {/* Premium ambient glow */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-xl font-bold tracking-wider text-white antialiased">
              HUZAIFA<span className="text-blue-500">.DEVTECH</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Next-generation digital solutions. We engineer high-performance
              web applications, AI automations, and scalable SaaS platforms with
              absolute precision.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 transition-all duration-200"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 transition-all duration-200"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 transition-all duration-200"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1: Agency Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  AI Automations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  SaaS Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Web & App Dev
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Studio */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Build in Public
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Status */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              Agency Status
            </h3>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Accepting New Projects
            </div>
            <p className="text-xs text-gray-500 leading-relaxed pt-1">
              Have an idea? Let's turn it into a market-ready product.
            </p>
          </div>
        </div>

        {/* Bottom Utility Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} HUZAIFA.DEVTECH. All rights reserved.
            </p>
            <span className="hidden sm:inline text-white/10">|</span>
            <div className="flex gap-3 mt-1 sm:mt-0">
              <a href="#" className="hover:text-gray-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <span className="tracking-wider uppercase text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Back to top
            </span>
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/10 transition">
              <FaArrowUp
                size={12}
                className="group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
