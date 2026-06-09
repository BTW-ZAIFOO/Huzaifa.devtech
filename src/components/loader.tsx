"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ finishLoading }: { finishLoading: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [currentFile, setCurrentFile] = useState("");

  const [successSteps, setSuccessSteps] = useState({
    env: false,
    components: false,
    assets: false,
  });

  const command = "npm run dev --turbo";

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

    const triggerLogs = (index: number) => {
      if (index < bootSequence.length) {
        const activeLine = bootSequence[index];
        setLogs((prev) => [...prev, activeLine]);

        if (activeLine.includes("security parameters")) {
          setSuccessSteps((prev) => ({ ...prev, env: true }));
        }
        if (activeLine.includes("rendering clusters")) {
          setSuccessSteps((prev) => ({ ...prev, components: true }));
        }

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

            if (progressVal >= 60) {
              setSuccessSteps((prev) => ({ ...prev, assets: true }));
            }
          } else {
            clearInterval(progressInterval);
            clearInterval(fileInterval);
            setCurrentFile("Compilation safe. Launching portfolio view...");
            
            setTimeout(() => {
              setIsDone(true);
              setTimeout(() => {
                finishLoading();
                document.body.style.overflow = "unset";
              }, 700);
            }, 800);
          }
        }, 110);
      }
    };

    return () => {
      clearInterval(typingInterval);
      clearTimeout(logTimeout);
      clearInterval(progressInterval);
      clearInterval(fileInterval);
      document.body.style.overflow = "unset";
    };
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-99999 flex items-center justify-center bg-[#03050c] p-4 select-none font-mono text-[11px] sm:text-xs md:text-sm"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          {/* Aesthetic High-End Backlighting/Mesh Gradients */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-linear-to-br from-violet-600/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-linear-to-tl from-indigo-600/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/3 rounded-full blur-[100px] pointer-events-none" />

          {/* Master Cyberpunk Glassmorphic Panel Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl bg-[#070b19]/40 backdrop-blur-xl border border-white/6 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col"
          >
            {/* Top Navigation Console Window Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-white/2 border-b border-white/5">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40 border border-rose-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40 border border-amber-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/20" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold bg-white/4 px-2.5 py-0.5 rounded-full border border-white/3">
                System Initialization
              </span>
              <div className="hidden sm:flex items-center space-x-2 text-[10px] text-emerald-400/60 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                <span className="font-semibold text-[9px] uppercase">Online</span>
              </div>
            </div>

            {/* Terminal Screen Interface Layout */}
            <div className="p-6 min-h-[460px] max-h-[560px] overflow-y-auto flex flex-col justify-start text-left relative">
              
              {/* Command Input Sequence Layout */}
              <div className="flex items-center text-white/80 mb-5 text-[12px] sm:text-xs">
                <span className="bg-linear-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text font-bold mr-2">guest@huzaifa.devtech</span>
                <span className="text-white/20 mr-2">❯</span>
                <span className="text-white font-medium tracking-wide">{input}</span>
                
                {logs.length === 0 && (
                  <motion.span 
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="ml-1.5 w-[6px] h-[13px] bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,1)] inline-block"
                  />
                )}
              </div>

              {/* Streaming Output Blocks */}
              <div className="space-y-[3px] font-mono whitespace-pre mb-6 grow">
                {logs.map((log, index) => {
                  let colorClass = "text-white/40 font-light";
                  
                  if (index < asciiLogo.length && !log.includes("==")) {
                    return (
                      <div
                        key={index}
                        className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                      >
                        {log}
                      </div>
                    );
                  } else if (log.startsWith("✓")) {
                    colorClass = "text-emerald-400/80 font-medium drop-shadow-[0_0_6px_rgba(52,211,153,0.1)]";
                  } else if (log.startsWith("►")) {
                    colorClass = "text-indigo-400 font-semibold";
                  }

                  return (
                    <div key={index} className={`${colorClass} text-[11px] sm:text-xs`}>
                      {log}
                    </div>
                  );
                })}
              </div>

              {/* Step-by-Step Aesthetic Success Popups */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 border-t border-b border-white/4 py-4 bg-white/1 px-4 rounded-xl backdrop-blur-sm">
                
                {/* Step 1 Component Badge */}
                <div className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300 ${successSteps.env ? 'bg-emerald-500/4 border Richmond border-emerald-500/20' : 'bg-white/1 border border-white/3'}`}>
                  <span className={`text-[9px] tracking-widest uppercase transition-colors duration-300 ${successSteps.env ? "text-emerald-400 font-semibold" : "text-white/20"}`}>
                    1. Env Safe
                  </span>
                  <AnimatePresence mode="wait">
                    {successSteps.env ? (
                      <motion.span key="check" initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} className="text-emerald-400 font-bold text-xs">✓</motion.span>
                    ) : (
                      <motion.span key="dot" className="w-1.5 h-1.5 rounded-full bg-violet-500/40 animate-ping" />
                    )}
                  </AnimatePresence>
                </div>

                {/* Step 2 Component Badge */}
                <div className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300 ${successSteps.components ? 'bg-emerald-500/4 border border-emerald-500/20' : 'bg-white/1 border border-white/3'}`}>
                  <span className={`text-[9px] tracking-widest uppercase transition-colors duration-300 ${successSteps.components ? "text-emerald-400 font-semibold" : "text-white/20"}`}>
                    2. Modules Live
                  </span>
                  <AnimatePresence mode="wait">
                    {successSteps.components ? (
                      <motion.span key="check" initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} className="text-emerald-400 font-bold text-xs">✓</motion.span>
                    ) : (
                      <motion.span key="dot" className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    )}
                  </AnimatePresence>
                </div>

                {/* Step 3 Component Badge */}
                <div className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300 ${successSteps.assets ? 'bg-emerald-500/4 border border-emerald-500/20' : 'bg-white/1 border border-white/3'}`}>
                  <span className={`text-[9px] tracking-widest uppercase transition-colors duration-300 ${successSteps.assets ? "text-emerald-400 font-semibold" : "text-white/20"}`}>
                    3. UI Rendered
                  </span>
                  <AnimatePresence mode="wait">
                    {successSteps.assets ? (
                      <motion.span key="check" initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} className="text-emerald-400 font-bold text-xs">✓</motion.span>
                    ) : (
                      <motion.span key="dot" className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Aesthetic Progress Bar & Pipeline Tracker */}
              {showProgress && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col gap-2 font-mono"
                >
                  <div className="flex justify-between items-center text-white/30 text-[9px] uppercase tracking-[0.15em]">
                    <span className="font-medium">Synchronizing UI Viewport</span>
                    <span className="text-violet-400 font-extrabold font-mono bg-violet-500/10 px-2 py-0.5 rounded-md border border-violet-500/20">{progress}%</span>
                  </div>

                  {/* Modern Ultra-Thin Sleek Glowing Progress Bar */}
                  <div className="w-full h-[3px] bg-white/3 rounded-full overflow-hidden border border-white/2 p-px">
                    <motion.div 
                      className="h-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "easeInOut" }}
                    />
                  </div>

                  {/* Minimalist Sub-file Pipeline Tracker Line */}
                  <div className="text-[10px] text-white/20 truncate font-light flex items-center mt-1">
                    <span className="text-indigo-400/40 font-bold tracking-widest text-[9px] uppercase mr-2 bg-white/2 px-1.5 py-0.5 rounded border border-white/2">Pipeline</span>
                    <span className="italic truncate">{currentFile}</span>
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