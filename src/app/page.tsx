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
import ScrollProgress from "@/components/scrollprogress";
import Loader from "@/components/loader";
import EducationSection from "@/components/education";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    /* Shifted baseline layout from cold blue-black to an ultra-premium dark ruby/crimson foundation */
    <main className="bg-[#0a0304] text-white overflow-hidden min-h-screen">
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
            <Navbar />
            <Hero />
            <About />
            <EducationSection/>
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