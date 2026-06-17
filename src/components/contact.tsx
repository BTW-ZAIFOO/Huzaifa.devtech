"use client";

import { useState } from "react";
import { easeOut, motion, Variants, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, X, ShieldCheck, Loader2 } from "lucide-react";

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
  // Standard Contact Form States
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  // WhatsApp Access Request Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestData, setRequestData] = useState({ name: "", email: "", reason: "" });
  const [requestStatus, setRequestStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRequestData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // 1. Regular Contact Form Submission
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  // 2. WhatsApp Permission Email Request Submission
  const handleWhatsappRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRequestStatus("loading");

    try {
      // Changed endpoint layout here from /api/whatsapp-request to /api/contact
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        setRequestStatus("success");
        setRequestData({ name: "", email: "", reason: "" });
        // Auto close modal after a short delay
        setTimeout(() => {
          setIsModalOpen(false);
          setRequestStatus("idle");
        }, 3000);
      } else {
        setRequestStatus("error");
      }
    } catch (error) {
      setRequestStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-red-500/15 blur-[100px] sm:blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-rose-500/10 blur-[100px] sm:blur-[150px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 backdrop-blur-md bg-red-950/10 border border-red-500/10 rounded-3xl p-6 sm:p-10 lg:p-16 shadow-2xl"
      >
        {/* Left Column: Heading & Context */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <motion.div variants={itemVariants}>
            <span className="text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 px-3 py-1.5 rounded-full border border-red-500/20">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
              Let’s Build Something{" "}
              <span className="bg-linear-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                Exceptional
              </span>
            </h2>
            <p className="text-white/60 mt-4 text-base sm:text-lg leading-relaxed max-w-md">
              Have an exciting idea or a complex problem to solve? Drop a message, or submit an access request to connect directly on WhatsApp.
            </p>
          </motion.div>

          <div className="hidden lg:block text-sm text-white/40">
            <p>Typically responds within 24 hours.</p>
          </div>
        </div>

        {/* Right Column: Standard Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5 sm:space-y-6">
          <motion.div variants={itemVariants} className="relative group">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full px-5 pt-6 pb-3 rounded-xl bg-red-950/10 border border-red-500/10 outline-none text-white text-base transition-all duration-300 focus:border-red-500/40 focus:bg-red-950/20"
              required
            />
            <label htmlFor="name" className="absolute left-5 top-4 text-white/40 text-base pointer-events-none transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-400 not-placeholder-shown:top-2 not-placeholder-shown:text-xs not-placeholder-shown:text-red-400">
              Your Name
            </label>
          </motion.div>

          <motion.div variants={itemVariants} className="relative group">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full px-5 pt-6 pb-3 rounded-xl bg-red-950/10 border border-red-500/10 outline-none text-white text-base transition-all duration-300 focus:border-red-500/40 focus:bg-red-950/20"
              required
            />
            <label htmlFor="email" className="absolute left-5 top-4 text-white/40 text-base pointer-events-none transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-400 not-placeholder-shown:top-2 not-placeholder-shown:text-xs not-placeholder-shown:text-red-400">
              Email Address
            </label>
          </motion.div>

          <motion.div variants={itemVariants} className="relative group">
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full px-5 pt-6 pb-3 rounded-xl bg-red-950/10 border border-red-500/10 outline-none text-white text-base transition-all duration-300 focus:border-red-500/40 focus:bg-red-950/20 resize-none"
              required
            />
            <label htmlFor="message" className="absolute left-5 top-4 text-white/40 text-base pointer-events-none transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-400 not-placeholder-shown:top-2 not-placeholder-shown:text-xs not-placeholder-shown:text-red-400">
              Tell me about your project...
            </label>
          </motion.div>

          {status === "success" && (
            <p className="text-emerald-400 text-sm font-medium">✨ Message sent successfully! I will get back to you shortly.</p>
          )}
          {status === "error" && (
            <p className="text-rose-400 text-sm font-medium">❌ Failed to send message. Please try again.</p>
          )}

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-white bg-linear-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Intercepting Button: Opens Custom Request Gateway Overlay */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-emerald-400 text-center border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-300 cursor-pointer"
            >
              Request WhatsApp Chat
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* SECURE HIGH-END MODAL GATEWAY OVERLAY */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
            />

            {/* Modal Body Box Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 sm:p-8 text-white shadow-2xl"
            >
              {/* Close Icon Toggle */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-wide">WhatsApp Access Request</h3>
                  <p className="text-xs text-zinc-400">Submit info to request direct secure routing.</p>
                </div>
              </div>

              {requestStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center space-y-3"
                >
                  <div className="text-emerald-400 bg-emerald-500/10 p-3 rounded-full animate-pulse">
                    <ShieldCheck size={40} />
                  </div>
                  <h4 className="text-base font-bold text-white">Request Dispatched!</h4>
                  <p className="text-sm text-zinc-400 max-w-xs">
                    Huzaifa has been notified via email. If approved, he will reach out to you directly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleWhatsappRequestSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={requestData.name}
                      onChange={handleRequestChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 outline-none text-white text-sm focus:border-emerald-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Your Contact Number / Email</label>
                    <input
                      type="text"
                      id="email"
                      placeholder="e.g. +1 234 567 890 or email"
                      value={requestData.email}
                      onChange={handleRequestChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 outline-none text-white text-sm focus:border-emerald-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Purpose of Chat</label>
                    <textarea
                      id="reason"
                      rows={3}
                      placeholder="Brief details about your project or inquiry..."
                      value={requestData.reason}
                      onChange={handleRequestChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 outline-none text-white text-sm focus:border-emerald-500/30 transition-all resize-none"
                    />
                  </div>

                  {requestStatus === "error" && (
                    <p className="text-rose-400 text-xs font-medium">❌ System connection error. Please try again later.</p>
                  )}

                  <button
                    type="submit"
                    disabled={requestStatus === "loading"}
                    className="w-full mt-2 py-3.5 rounded-xl font-semibold text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {requestStatus === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Security Request...
                      </>
                    ) : (
                      "Send Request to Owner"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}