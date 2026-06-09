"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ finishLoading }: { finishLoading: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const command = "npm run dev --turbo";

  // Explicit HUZAIFA ASCII Grid Layout
  const asciiLogo = [
    "  _  _ _  _ ___  _ ____ _ ____ ___ ",
    "  |__| |  |  /__/  |__| | |___  |  ",
    "  |  | |__| /__\\_  |  | | |     |  ",
    "===================================",
    "  CREATIVE CORE ENGINE v4.2.0-2026 ",
  ];

  const bootSequence = [
    "► initializing local environment variables...",
    "✓ core systems authenticated safely.",
    "○ mounting visual matrix elements...",
    "✓ loaded next-generation rendering cluster.",
    "○ compiling tailwind utility pipelines...",
    "✓ processed 1,420 production utility nodes.",
    "○ injection mapping active portfolio components...",
    "✓ hero section: fully buffered.",
    "✓ project grid: optimization engine online.",
    "✓ interactive canvas elements loaded.",
    "► system ready. launching localized sandbox structure...",
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let charIndex = 0;
    let currentInput = "";
    let typingInterval: NodeJS.Timeout;
    let logTimeout: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    // Phase 1: Slowed down command line typing input (140ms per letter)
    typingInterval = setInterval(() => {
      if (charIndex < command.length) {
        currentInput += command[charIndex];
        setInput(currentInput);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Phase 2: Inject ASCII branding after typing finishes
        setTimeout(() => {
          setLogs(asciiLogo);
          // Phase 3: Trigger full verbose boot log sequence with a heavier pause
          setTimeout(() => triggerLogs(0), 600);
        }, 500);
      }
    }, 140);

    // Logs sequencing: Slowed down to simulate higher system calculation overhead
    const triggerLogs = (index: number) => {
      if (index < bootSequence.length) {
        setLogs((prev) => [...prev, bootSequence[index]]);
        
        // Increased intervals (minimum 250ms, maximum 550ms for major operations)
        const delay = bootSequence[index].startsWith("✓") ? 250 : 550;
        logTimeout = setTimeout(() => triggerLogs(index + 1), delay);
      } else {
        // Phase 4: Trigger the step progress bar simulation
        setShowProgress(true);
        let progressVal = 0;
        
        // Increments progress blocks in smaller chunks to drag out duration visually
        progressInterval = setInterval(() => {
          if (progressVal < 100) {
            progressVal += Math.floor(Math.random() * 5) + 3; // Smaller step jumps
            setProgress(Math.min(progressVal, 100));
          } else {
            clearInterval(progressInterval);
            // Phase 5: Smooth exit sequence
            setTimeout(() => {
              setIsDone(true);
              setTimeout(() => {
                finishLoading();
                document.body.style.overflow = "unset";
              }, 600);
            }, 700); // Lingers on 100% complete for dramatic effect
          }
        }, 120); // Steady execution cadence
      }
    };

    return () => {
      clearInterval(typingInterval);
      clearTimeout(logTimeout);
      clearInterval(progressInterval);
      document.body.style.overflow = "unset";
    };
  }, [finishLoading]);

  // Generate progress layout hashes [██████░░░░]
  const getProgressBar = () => {
    const totalBlocks = 20;
    const filledBlocks = Math.round((progress / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return "[" + "█".repeat(filledBlocks) + "░".repeat(emptyBlocks) + "]";
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-99999 flex items-center justify-center bg-[#02040a] p-3 select-none font-mono text-[11px] sm:text-xs md:text-sm"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Ambient Screen Textures */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000000_100%)] z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px]" />

          {/* Terminal Shell */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl bg-[#070a14]/90 backdrop-blur-xl border border-white/8 rounded-xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Header Control Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f20] border-b border-white/5">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Mainframe Environment Setup</span>
              <div className="w-12" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 min-h-[400px] max-h-[500px] overflow-y-auto flex flex-col justify-start text-left leading-relaxed">
              
              {/* Input Command Line */}
              <div className="flex items-center text-emerald-400 mb-3">
                <span className="text-violet-400 mr-2">guest@huzaifa.devtech</span>
                <span className="text-white/40 mr-2">❯</span>
                <span className="text-white font-medium">{input}</span>
                
                {logs.length === 0 && (
                  <motion.span 
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="ml-1 w-[7px] h-[14px] bg-violet-400 inline-block"
                  />
                )}
              </div>

              {/* Cascade Output Logs */}
              <div className="space-y-[2px] font-mono whitespace-pre">
                {logs.map((log, index) => {
                  let colorClass = "text-white/60";
                  
                  if (index < asciiLogo.length && !log.includes("==")) {
                    colorClass = "text-violet-400 font-bold tracking-tight";
                  } else if (log.startsWith("✓")) {
                    colorClass = "text-emerald-400/90";
                  } else if (log.startsWith("►")) {
                    colorClass = "text-indigo-400 font-medium";
                  }

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.05 }}
                      className={colorClass}
                    >
                      {log}
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Tracker */}
              {showProgress && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 pt-4 border-t border-white/5 flex flex-col gap-1 font-mono"
                >
                  <div className="flex justify-between text-white/40 text-[10px] uppercase tracking-wider">
                    <span>Streaming Assets to Viewport</span>
                    <span className="text-violet-400 font-bold">{progress}%</span>
                  </div>
                  <div className="text-emerald-400 tracking-normal break-all font-bold">
                    {getProgressBar()}
                  </div>
                </motion.div>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}