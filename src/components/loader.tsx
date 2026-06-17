"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({
  finishLoading,
}: {
  finishLoading: () => void;
}) {
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [currentFile, setCurrentFile] = useState("");

  // System State Management: "compiling" | "welcome" | "exiting"
  const [loaderStage, setLoaderStage] = useState<
    "compiling" | "welcome" | "exiting"
  >("compiling");
  const [welcomeText, setWelcomeText] = useState("");

  const [successSteps, setSuccessSteps] = useState({
    env: false,
    components: false,
    assets: false,
  });

  const command = "npm run dev --turbo";
  const welcomeMessage = "Welcome to Huzaifa.devtech Portfolio";

  const asciiLogo = [
    "  _  _ _  _ ___  _ ____ _ ____ ___ ",
    "  |__| |  |  /__/  |__| | |___  |  ",
    "  |  | |__| /__\\_  |  | | |     |  ",
    "===================================",
    "  CREATIVE CORE ENGINE v4.2.0-2026 ",
  ];

  const bootSequence = [
    "► initializing local environment variables...",
    "✓ core security parameters authenticated safely.",
    "○ mounting creative visual matrix layers...",
    "✓ loaded interactive rendering clusters successfully.",
    "○ mapping local engineering assets and pipelines...",
    "✓ systems stable. launching localized sandbox structure...",
  ];

  const streamingFiles = [
    "src/components/hero/matrix-effect.tsx",
    "src/components/skills/orbit-canvas.tsx",
    "src/styles/shaders/glassmorphism.css",
    "src/components/experience/timeline.tsx",
    "src/components/contact/secure-mail.ts",
    "public/manifest.json",
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let charIndex = 0;
    let currentInput = "";
    let typingInterval: NodeJS.Timeout;
    let logTimeout: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;
    let fileInterval: NodeJS.Timeout;
    let welcomeInterval: NodeJS.Timeout;

    // Stage 1: Typing Command
    typingInterval = setInterval(() => {
      if (charIndex < command.length) {
        currentInput += command[charIndex];
        setInput(currentInput);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setLogs(asciiLogo);
          setTimeout(() => triggerLogs(0), 500);
        }, 400);
      }
    }, 120);

    // Stage 2: Log Output Stream
    const triggerLogs = (index: number) => {
      if (index < bootSequence.length) {
        const activeLine = bootSequence[index];
        setLogs((prev) => [...prev, activeLine]);

        if (activeLine.includes("security parameters"))
          setSuccessSteps((prev) => ({ ...prev, env: true }));
        if (activeLine.includes("rendering clusters"))
          setSuccessSteps((prev) => ({ ...prev, components: true }));

        const delay = activeLine.startsWith("✓") ? 300 : 500;
        logTimeout = setTimeout(() => triggerLogs(index + 1), delay);
      } else {
        setShowProgress(true);

        let fileIndex = 0;
        fileInterval = setInterval(() => {
          setCurrentFile(streamingFiles[fileIndex % streamingFiles.length]);
          fileIndex++;
        }, 90);

        let progressVal = 0;
        progressInterval = setInterval(() => {
          if (progressVal < 100) {
            progressVal += Math.floor(Math.random() * 5) + 3;
            setProgress(Math.min(progressVal, 100));
            if (progressVal >= 60)
              setSuccessSteps((prev) => ({ ...prev, assets: true }));
          } else {
            clearInterval(progressInterval);
            clearInterval(fileInterval);

            // Switch current view container to the custom welcome presentation sub-loader
            setTimeout(() => {
              setLoaderStage("welcome");
              triggerWelcomeTyping();
            }, 600);
          }
        }, 110);
      }
    };

    // Stage 3: Secondary Welcome Text Sequence
    const triggerWelcomeTyping = () => {
      let welcomeIndex = 0;
      let currentWelcome = "";

      welcomeInterval = setInterval(() => {
        if (welcomeIndex < welcomeMessage.length) {
          currentWelcome += welcomeMessage[welcomeIndex];
          setWelcomeText(currentWelcome);
          welcomeIndex++;
        } else {
          clearInterval(welcomeInterval);

          // Smooth Master Dismissal After Reading Timeout Delay Ends
          setTimeout(() => {
            setLoaderStage("exiting");
            setTimeout(() => {
              finishLoading();
              document.body.style.overflow = "unset";
            }, 800);
          }, 1800);
        }
      }, 60);
    };

    return () => {
      clearInterval(typingInterval);
      clearTimeout(logTimeout);
      clearInterval(progressInterval);
      clearInterval(fileInterval);
      clearInterval(welcomeInterval);
      document.body.style.overflow = "unset";
    };
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {loaderStage !== "exiting" && (
        <motion.div
          /* Shifted background layout from blue-black to matching dark ruby state */
          className="fixed inset-0 z-99999 flex items-center justify-center bg-[#0a0304] p-4 select-none font-mono text-[11px] sm:text-xs md:text-sm"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Backlighting/Mesh Gradients migrated to Premium Crimson/Rose variables */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-linear-to-br from-red-600/15 to-transparent rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-linear-to-tl from-rose-600/15 to-transparent rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-500/5 rounded-full blur-[100px]" />

          {/* Master Glassmorphic Box Panel - Swapped blue tint for clear dark ruby blend */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl bg-[#120507]/40 backdrop-blur-xl border border-white/6 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col"
          >
            {/* Top Windows Navigation Frame */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-white/2 border-b border-white/5">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40 border border-rose-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40 border border-amber-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/20" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold bg-white/4 px-2.5 py-0.5 rounded-full border border-white/3">
                {loaderStage === "compiling"
                  ? "System Initialization"
                  : "Authorization Success"}
              </span>
              <div className="hidden sm:flex items-center space-x-2 text-[10px]">
                <span
                  className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px_#ef4444] ${loaderStage === "welcome" ? "bg-red-400" : "bg-red-500 animate-pulse"}`}
                />
                <span className="text-[9px] uppercase text-white/40 tracking-wider">
                  {loaderStage === "compiling" ? "Online" : "Secure"}
                </span>
              </div>
            </div>

            {/* Core Terminal Switch Monitor Workspace */}
            <div className="p-6 min-h-[440px] max-h-[540px] flex flex-col relative transition-all duration-500 ease-in-out">
              <AnimatePresence mode="wait">
                {loaderStage === "compiling" ? (
                  /* Stage A: Main Compilation Viewport */
                  <motion.div
                    key="compiling-stage"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col grow text-left"
                  >
                    {/* Command Line Input row layout */}
                    <div className="flex items-center text-white/80 mb-5 text-[12px] sm:text-xs">
                      <span className="bg-linear-to-r from-red-400 to-rose-400 text-transparent bg-clip-text font-bold mr-2">
                        guest@huzaifa.devtech
                      </span>
                      <span className="text-white/20 mr-2">❯</span>
                      <span className="text-white font-medium tracking-wide">
                        {input}
                      </span>
                    </div>

                    {/* Sequential Log Terminal List */}
                    <div className="space-y-[3px] font-mono whitespace-pre mb-6 grow">
                      {logs.map((log, index) => {
                        let colorClass = "text-white/40 font-light";
                        if (index < asciiLogo.length && !log.includes("==")) {
                          return (
                            <div
                              key={index}
                              className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-rose-400 to-red-500 font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                            >
                              {log}
                            </div>
                          );
                        } else if (log.startsWith("✓")) {
                          colorClass =
                            "text-emerald-400/80 font-medium drop-shadow-[0_0_6px_rgba(52,211,153,0.1)]";
                        } else if (log.startsWith("►")) {
                          colorClass = "text-rose-400 font-semibold";
                        }
                        return (
                          <div
                            key={index}
                            className={`${colorClass} text-[11px] sm:text-xs`}
                          >
                            {log}
                          </div>
                        );
                      })}
                    </div>

                    {/* Step Checklist Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 border-t border-b border-white/4 py-4 bg-white/1 px-4 rounded-xl backdrop-blur-sm">
                      {["Env Safe", "Modules Live", "UI Rendered"].map(
                        (step, idx) => {
                          const states = [
                            successSteps.env,
                            successSteps.components,
                            successSteps.assets,
                          ];
                          const isActive = states[idx];
                          return (
                            <div
                              key={idx}
                              className={`flex items-center justify-between px-3 py-2 rounded-lg border transition-all duration-300 ${isActive ? "bg-emerald-500/4 border-emerald-500/20" : "bg-white/1 border-white/3"}`}
                            >
                              <span
                                className={`text-[9px] tracking-widest uppercase ${isActive ? "text-emerald-400 font-semibold" : "text-white/20"}`}
                              >
                                {idx + 1}. {step}
                              </span>
                              {isActive ? (
                                <span className="text-emerald-400 font-bold text-xs">
                                  ✓
                                </span>
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                              )}
                            </div>
                          );
                        },
                      )}
                    </div>

                    {/* Progress Slider Stream Panel */}
                    {showProgress && (
                      <div className="flex flex-col gap-2 font-mono">
                        <div className="flex justify-between items-center text-white/30 text-[9px] uppercase tracking-[0.15em]">
                          <span>Synchronizing UI Viewport</span>
                          <span className="text-red-400 font-extrabold bg-red-500/10 px-2 py-0.5 rounded-md border border-red-500/20">
                            {progress}%
                          </span>
                        </div>
                        <div className="w-full h-[3px] bg-white/3 rounded-full overflow-hidden border border-white/2 p-px">
                          <div
                            className="h-full bg-linear-to-r from-red-500 via-rose-500 to-crimson-600 rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <div className="text-[10px] text-white/20 truncate font-light flex items-center mt-1">
                          <span className="text-rose-400/40 font-bold tracking-widest text-[9px] uppercase mr-2 bg-white/2 px-1.5 py-0.5 rounded border border-white/2">
                            Pipeline
                          </span>
                          <span className="italic truncate">{currentFile}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  /* Stage B: Secondary Premium Welcome Dashboard Loader Viewport */
                  <motion.div
                    key="welcome-stage"
                    initial={{
                      opacity: 0,
                      scale: 0.97,
                      y: 15,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col grow items-center justify-center text-center relative py-12 px-4"
                  >
                    {/* Animated Cybernetic Outer Radar Rings adjusted to Crimson */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: [0, 0.15, 0],
                          scale: [0.8, 1.4, 1.6],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "linear",
                        }}
                        className="w-64 h-64 border border-red-500/10 rounded-full absolute"
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                          opacity: [0, 0.1, 0],
                          scale: [0.9, 1.3, 1.5],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          delay: 1.5,
                          ease: "linear",
                        }}
                        className="w-80 h-80 border border-rose-500/5 rounded-full absolute"
                      />
                    </div>

                    {/* Premium Pulsing Decorative Branding Icon Token */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(220,38,38,0.1)",
                          "0 0 40px rgba(220,38,38,0.25)",
                          "0 0 20px rgba(220,38,38,0.1)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-14 h-14 rounded-2xl bg-linear-to-tr from-red-600 to-rose-600 flex items-center justify-center border border-white/20 mb-8 z-30"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </motion.div>

                    {/* Dynamic Typed Main Header Title */}
                    <h2 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-wide min-h-[28px] max-w-md z-30 leading-relaxed">
                      {welcomeText}
                      <motion.span
                        animate={{ opacity: [1, 1, 0, 0] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="inline-block w-1.5 h-4 ml-1 bg-rose-400 align-middle"
                      />
                    </h2>

                    {/* Minor Subtext Description Label Badge */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-white/30 text-[10px] uppercase tracking-[0.3em] mt-3 z-30"
                    >
                      Establishing Direct Encrypted Connection
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
