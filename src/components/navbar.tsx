"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const links = ["About", "Experience", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const isClickScrolling = useRef(false);

  // Optimized scroll handler using Framer Motion's useMotionValueEvent
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);

    if (isClickScrolling.current) return;

    // Active section detection with fallback logic
    const scrollPosition = latest + 160;
    let currentSection = "About";

    for (const item of links) {
      const el = document.getElementById(item.toLowerCase());
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSection = item;
          break;
        }
      }
    }
    setActive(currentSection);
  });

  // Handle smooth locking when user clicks a link directly
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: string,
  ) => {
    e.preventDefault();
    setActive(item);
    setIsOpen(false);

    const target = document.getElementById(item.toLowerCase());
    if (target) {
      isClickScrolling.current = true;
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
      // Release the lock after animation finishes
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative flex items-center justify-between rounded-2xl border transition-all duration-500 overflow-hidden ${
              scrolled
                ? "bg-neutral-950/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
                : "bg-transparent border-transparent"
            }`}
          >
            {/* Subtle premium mesh background gradient visible only on scroll */}
            <div
              className={`absolute inset-0 bg-linear-to-r from-blue-500/5 via-violet-500/5 to-cyan-500/5 pointer-events-none transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="relative w-full flex items-center justify-between px-5 py-3.5 md:px-6 md:py-4">
              {/* Logo */}
              <motion.a
                href="#about"
                onClick={(e) => handleLinkClick(e, "About")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-1.5 focus:outline-none"
              >
                <h1 className="text-base md:text-lg font-black tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-neutral-200">
                  HUZAIFA
                  <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    .DEVTECH
                  </span>
                </h1>
              </motion.a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {links.map((item) => {
                  const isLinkActive = active === item;
                  return (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleLinkClick(e, item)}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg focus:outline-none ${
                        isLinkActive
                          ? "text-white"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{item}</span>
                      {isLinkActive && (
                        <motion.span
                          layoutId="desktop-active-pill"
                          className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Desktop CTA Button */}
              <div className="hidden lg:flex items-center">
                <motion.a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "Contact")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative group overflow-hidden rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/10 shadow-lg"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-600" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-600" />
                  <span className="relative z-10 flex items-center gap-1">
                    Let's Talk
                  </span>
                </motion.a>
              </div>

              {/* Mobile Menu Toggle Button */}
              <motion.button
                aria-label="Toggle Menu"
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative z-50 p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer Layout */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-neutral-950/60 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Premium Mobile Menu Slide Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[360px] bg-neutral-950/95 backdrop-blur-2xl border-l border-white/10 z-40 flex flex-col justify-between p-6 pt-28 pb-10 lg:hidden"
            >
              {/* Menu items navigation list */}
              <div className="flex flex-col gap-1.5">
                {links.map((item, index) => {
                  const isLinkActive = active === item;
                  return (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ delay: index * 0.05, ease: "easeOut" }}
                      onClick={(e) => handleLinkClick(e, item)}
                      className={`relative px-4 py-4 text-base font-semibold rounded-2xl flex items-center justify-between border transition-all ${
                        isLinkActive
                          ? "text-blue-400 bg-white/5 border-white/10"
                          : "text-neutral-400 border-transparent hover:text-white"
                      }`}
                    >
                      <span>{item}</span>
                      {isLinkActive && (
                        <motion.span
                          layoutId="mobile-active-indicator"
                          className="h-2 w-2 rounded-full bg-blue-400"
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>

              {/* Footer CTA in Mobile Drawer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: links.length * 0.05 }}
                className="w-full"
              >
                <motion.a
                  href="mailto:huzaifazaifi25@gmail.com"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  className="w-full block text-center rounded-2xl bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-600 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/10"
                >
                  Let's Talk
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}