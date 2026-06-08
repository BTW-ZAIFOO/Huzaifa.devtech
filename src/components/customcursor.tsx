"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  // Use refs instead of state for the position to prevent constant React re-renders
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const trailingRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Check if device is mobile/touch-based
    const checkDevice = () => {
      const mobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    // 2. Track mouse position
    const moveCursor = (e: MouseEvent) => {
      positionRef.current.x = e.clientX;
      positionRef.current.y = e.clientY;
    };

    // 3. Smooth animation loop (Lerp effect)
    let animationFrameId: number;
    
    const render = () => {
      // Linear interpolation for that premium "heavy/lagging" lag effect
      trailingRef.current.x += (positionRef.current.x - trailingRef.current.x) * 0.15;
      trailingRef.current.y += (positionRef.current.y - trailingRef.current.y) * 0.15;

      if (cursorRef.current) {
        // Use translate3d for hardware acceleration (smooth rendering)
        cursorRef.current.style.transform = `translate3d(${trailingRef.current.x}px, ${trailingRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // 4. Hover detection for interactive elements (Buttons, Links)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  // Completely remove from DOM on mobile to save memory and avoid layout shifts
  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-9999 will-change-transform mix-blend-difference hidden md:block"
      style={{
        // Centers the cursor element exactly on the pointer tip
        marginLeft: "-16px",
        marginTop: "-16px",
      }}
    >
      {/* Outer Aesthetic Ring */}
      <div
        className={`w-8 h-8 rounded-full border border-white bg-white/5 transition-all duration-300 ease-out flex items-center justify-center
          ${isHovering ? "scale-150 bg-white/20 border-transparent" : "scale-100"}
        `}
      >
        {/* Inner Precision Dot */}
        <div 
          className={`rounded-full bg-white transition-all duration-200
            ${isHovering ? "w-1 h-1 bg-transparent" : "w-1.5 h-1.5"}
          `} 
        />
      </div>
    </div>
  );
}