"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackgroundEffects from "@/components/backgroundeffects";
import ScrollProgress from "@/components/scrollprogress";
import CustomCursor from "@/components/customcursor";
import Loader from "@/components/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-[#050816] text-white overflow-hidden min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 1, 0.5, 1] // Fast start, silky smooth landing
            }}
          >
            <ScrollProgress />
            <CustomCursor />
            <BackgroundEffects />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}