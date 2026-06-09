"use client";

import { useState } from "react";
import { easeOut, motion, Variants } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export default function Contact() {
  // 1. Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // WhatsApp Configuration (Replace with your actual number, including country code, no symbols)
  const WHATSAPP_NUMBER = "1234567890";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I just came across your portfolio and would love to chat about a project.",
  )}`;

  // 2. Handle Inputs change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // 3. Handle Email Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/10 blur-[100px] sm:blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-indigo-500/10 blur-[100px] sm:blur-[150px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 backdrop-blur-md bg-white/2 border border-white/8 rounded-3xl p-6 sm:p-10 lg:p-16 shadow-2xl"
      >
        {/* Left Column: Heading & Context */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <motion.div variants={itemVariants}>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
              Let’s Build Something{" "}
              <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Exceptional
              </span>
            </h2>
            <p className="text-white/60 mt-4 text-base sm:text-lg leading-relaxed max-w-md">
              Have an exciting idea or a complex problem to solve? Drop a
              message, or hit me up directly on WhatsApp. Let's craft a
              solution.
            </p>
          </motion.div>

          {/* Quick Contact Footer / Micro details */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block text-sm text-white/40"
          >
            <p>Typically responds within 24 hours.</p>
          </motion.div>
        </div>

        {/* Right Column: Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 space-y-5 sm:space-y-6"
        >
          {/* Name Input */}
          <motion.div variants={itemVariants} className="relative group">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full px-5 pt-6 pb-3 rounded-xl bg-white/3 border border-white/8 outline-none text-white text-base transition-all duration-300 focus:border-blue-500/50 focus:bg-white/5"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-5 top-4 text-white/40 text-base pointer-events-none transition-all duration-300 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400
              not-placeholder-shown:top-2 not-placeholder-shown:text-xs not-placeholder-shown:text-blue-400"
            >
              Your Name
            </label>
          </motion.div>

          {/* Email Input */}
          <motion.div variants={itemVariants} className="relative group">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full px-5 pt-6 pb-3 rounded-xl bg-white/3 border border-white/8 outline-none text-white text-base transition-all duration-300 focus:border-blue-500/50 focus:bg-white/5"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-5 top-4 text-white/40 text-base pointer-events-none transition-all duration-300 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400
              not-placeholder-shown:top-2 not-placeholder-shown:text-xs not-placeholder-shown:text-blue-400"
            >
              Email Address
            </label>
          </motion.div>

          {/* Message Input */}
          <motion.div variants={itemVariants} className="relative group">
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full px-5 pt-6 pb-3 rounded-xl bg-white/3 border border-white/8 outline-none text-white text-base transition-all duration-300 focus:border-blue-500/50 focus:bg-white/5 resize-none"
              required
            />
            <label
              htmlFor="message"
              className="absolute left-5 top-4 text-white/40 text-base pointer-events-none transition-all duration-300 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400
              not-placeholder-shown:top-2 not-placeholder-shown:text-xs not-placeholder-shown:text-blue-400"
            >
              Tell me about your project...
            </label>
          </motion.div>

          {/* Response Messages */}
          {status === "success" && (
            <p className="text-emerald-400 text-sm font-medium">
              ✨ Message sent successfully! I will get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-rose-400 text-sm font-medium">
              ❌ Failed to send message. Please try again or use WhatsApp.
            </p>
          )}

          {/* Actions Container */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-white
              bg-linear-to-r from-blue-600 to-indigo-600
              hover:from-blue-500 hover:to-indigo-500
              shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20
              transition-all duration-300 cursor-pointer disabled:opacity-50
              hover:scale-[1.01] active:scale-[0.99]"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* WhatsApp Link Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-emerald-400 text-center
              border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10
              transition-all duration-300 cursor-pointer
              hover:scale-[1.01] active:scale-[0.99]"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
