"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiKotlin,
} from "react-icons/si";

// 18 Professional Full-Stack + Flutter Mobile Skills - Retaining original brand color hashes
const skills = [
  // Web & UI Tier
  { name: "React", icon: FaReact, color: "#61DBFB", tier: "outer" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", tier: "outer" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", tier: "outer" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    tier: "outer",
  },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098", tier: "outer" },
  { name: "Git", icon: FaGitAlt, color: "#F05032", tier: "outer" },

  // Backend & Cloud/Data Tier
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A", tier: "middle" },
  { name: "Express", icon: SiExpress, color: "#9ca3af", tier: "middle" },
  { name: "Python", icon: FaPython, color: "#3776AB", tier: "middle" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D", tier: "middle" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", tier: "middle" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", tier: "middle" },
  { name: "AWS", icon: FaAws, color: "#FF9900", tier: "middle" },
  { name: "Docker", icon: FaDocker, color: "#0EA5E9", tier: "middle" },

  // Mobile App (Flutter Ecosystem) Tier
  { name: "Flutter", icon: SiFlutter, color: "#02569B", tier: "inner" },
  { name: "Dart", icon: SiDart, color: "#0175C2", tier: "inner" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", tier: "inner" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF", tier: "inner" },
];

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
  speed: number;
}

export default function Skills() {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [activeInnerNode, setActiveInnerNode] = useState<number | null>(null);

  const rotation = useMotionValue(0);
  const currentSpeedRef = useRef(0.22);
  const rotationAnimRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particleIdCounter = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const updateRotation = () => {
      const targetSpeed = isHovered ? 0.04 : 0.22;
      currentSpeedRef.current =
        currentSpeedRef.current + (targetSpeed - currentSpeedRef.current) * 0.1;
      rotation.set(rotation.get() + currentSpeedRef.current);
      rotationAnimRef.current = requestAnimationFrame(updateRotation);
    };
    rotationAnimRef.current = requestAnimationFrame(updateRotation);
    return () => {
      if (rotationAnimRef.current)
        cancelAnimationFrame(rotationAnimRef.current);
    };
  }, [isHovered, rotation]);

  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            return {
              ...p,
              x: p.x + Math.cos(rad) * p.speed,
              y: p.y + Math.sin(rad) * p.speed,
              speed: p.speed * 0.92,
            };
          })
          .filter((p) => p.speed > 0.3),
      );
    }, 16);
    return () => clearInterval(interval);
  }, [particles]);

  const triggerSparks = (
    e: React.MouseEvent<HTMLDivElement>,
    color: string,
  ) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;

    const newParticles: Particle[] = Array.from({ length: 16 }).map(() => {
      particleIdCounter.current += 1;
      return {
        id: particleIdCounter.current,
        x: startX,
        y: startY,
        color,
        angle: Math.random() * 360,
        speed: Math.random() * 8 + 4,
      };
    });

    setParticles((prev) => [...prev, ...newParticles]);
  };

  const outerSkills = skills.filter((s) => s.tier === "outer");
  const middleSkills = skills.filter((s) => s.tier === "middle");
  const innerSkills = skills.filter((s) => s.tier === "inner");

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;

  const tracks = {
    outer: dimensions.width < 500 ? 0.44 : 0.45,
    middle: dimensions.width < 500 ? 0.31 : 0.32,
    inner: dimensions.width < 500 ? 0.19 : 0.19,
  };

  return (
    <section
      id="skills"
      className="relative py-28 px-4 overflow-hidden md:px-10 max-w-7xl mx-auto flex flex-col items-center justify-center select-none"
    >
      {/* Background Deep Crimson/Ruby Ambient Setup */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[750px] h-[350px] sm:h-[750px] bg-red-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-rose-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Header Info Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 md:mb-24 relative z-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Technical Expertise
        </h2>
        <p className="mt-4 text-sm md:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
          An enterprise-grade Full-Stack & Cross-Platform Mobile architecture
          optimized for performance, scale, and clean interfaces.
        </p>
      </motion.div>

      {/* Main Interactive Orbit Ring Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full aspect-square max-w-[350px] sm:max-w-[580px] md:max-w-[700px] lg:max-w-[800px] flex items-center justify-center rounded-full"
      >
        {/* Central Crimson Hub Structure */}
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute w-28 h-28 sm:w-40 sm:h-40 border border-red-500/15 bg-neutral-950/80 backdrop-blur-3xl rounded-full flex flex-col items-center justify-center z-50 shadow-2xl shadow-red-950/40 text-center px-2 group"
        >
          <span className="text-[11px] font-extrabold tracking-widest text-red-400/80 uppercase">
            Expertise
          </span>
          <span className="text-sm sm:text-base font-bold text-white mt-1 leading-tight tracking-wide">
            Full Stack
            <br />
            Developer
          </span>
          <div className="absolute inset-0 rounded-full bg-red-500/10 blur-xl group-hover:opacity-100 opacity-50 transition-opacity duration-300" />
        </motion.div>

        {/* Live Spark Simulation Layer */}
        <div className="absolute inset-0 pointer-events-none z-50">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full"
              style={{
                left: p.x,
                top: p.y,
                backgroundColor: p.color,
                boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
              }}
            />
          ))}
        </div>

        {/* Visual Background Guide Rings using micro Crimson lines */}
        <div className="absolute border border-dashed border-red-500/5 rounded-full w-[90%] h-[90%] pointer-events-none animate-[spin_180s_linear_infinite]" />
        <div className="absolute border border-dashed border-red-500/5 rounded-full w-[64%] h-[64%] pointer-events-none animate-[spin_120s_linear_infinite_reverse]" />
        <div className="absolute border border-dashed border-red-500/5 rounded-full w-[38%] h-[38%] pointer-events-none" />

        {/* Data lines updated to blend with deep red system track accents */}
        {innerSkills.map((skill, index) => {
          const totalAngle = (index / innerSkills.length) * 360;
          const opacity = activeInnerNode === index ? 0.25 : 0.04;

          return (
            <motion.div
              key={`line-${skill.name}`}
              className="absolute top-0 left-0 h-0.5 border-t border-dashed border-red-500 origin-left pointer-events-none z-20 transition-opacity duration-300"
              style={{
                width:
                  dimensions.width * tracks.inner -
                  (dimensions.width < 500 ? 14 : 20),
                top: centerY,
                left: centerX,
                opacity: opacity,
                borderColor: "rgba(239, 68, 68, 0.4)", 
                rotate: `${totalAngle}deg`,
              }}
            />
          );
        })}

        {/* Render Outer Ring (Web Stack) */}
        {outerSkills.map((skill, index) => (
          <OrbitalNode
            key={skill.name}
            skill={skill}
            centerX={centerX}
            centerY={centerY}
            radius={dimensions.width * tracks.outer}
            baseAngle={(index / outerSkills.length) * 360}
            rotationValue={rotation}
            onNodeHover={(e) => triggerSparks(e, skill.color)}
            tier="outer"
          />
        ))}

        {/* Render Middle Ring (Backend) */}
        {middleSkills.map((skill, index) => (
          <OrbitalNode
            key={skill.name}
            skill={skill}
            centerX={centerX}
            centerY={centerY}
            radius={dimensions.width * tracks.middle}
            baseAngle={(index / middleSkills.length) * 360}
            rotationValue={rotation}
            onNodeHover={(e) => triggerSparks(e, skill.color)}
            tier="middle"
          />
        ))}

        {/* Render Inner Ring (Mobile/Flutter) */}
        {innerSkills.map((skill, index) => (
          <OrbitalNode
            key={skill.name}
            skill={skill}
            centerX={centerX}
            centerY={centerY}
            radius={dimensions.width * tracks.inner}
            baseAngle={(index / innerSkills.length) * 360}
            rotationValue={rotation}
            onNodeHover={(e) => triggerSparks(e, skill.color)}
            onSetActive={() => setActiveInnerNode(index)}
            onSetInactive={() => setActiveInnerNode(null)}
            tier="inner"
          />
        ))}
      </div>
    </section>
  );
}

interface OrbitalNodeProps {
  skill: (typeof skills)[0];
  centerX: number;
  centerY: number;
  radius: number;
  baseAngle: number;
  rotationValue: any;
  onNodeHover: (e: React.MouseEvent<HTMLDivElement>) => void;
  onSetActive?: () => void;
  onSetInactive?: () => void;
  tier: "inner" | "middle" | "outer";
}

function OrbitalNode({
  skill,
  centerX,
  centerY,
  radius,
  baseAngle,
  rotationValue,
  onNodeHover,
  onSetActive,
  onSetInactive,
  tier,
}: OrbitalNodeProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const Icon = skill.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 400, damping: 25 };
  const magneticX = useSpring(
    useTransform(mouseX, [-25, 25], [-5, 5]),
    springConfig,
  );
  const magneticY = useSpring(
    useTransform(mouseY, [-25, 25], [-5, 5]),
    springConfig,
  );

  const handleMouseMoveNode = (e: React.MouseEvent<HTMLDivElement>) => {
    onNodeHover(e);
    if (!nodeRef.current) return;
    const rect = nodeRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeaveNode = () => {
    setIsHovered(false);
    onSetInactive?.();
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnterNode = () => {
    setIsHovered(true);
    onSetActive?.();
  };

  useEffect(() => {
    const updatePosition = () => {
      const currentRotation = rotationValue.get();
      const totalAngle = baseAngle + currentRotation;
      const radians = (totalAngle * Math.PI) / 180;

      const nodeSize = window.innerWidth < 640 ? 48 : 56;
      const nodeOffset = nodeSize / 2;

      setCoords({
        x: centerX + radius * Math.cos(radians) - nodeOffset,
        y: centerY + radius * Math.sin(radians) - nodeOffset,
      });
    };

    updatePosition();
    const unsubscribe = rotationValue.on("change", updatePosition);
    return () => unsubscribe();
  }, [centerX, centerY, radius, baseAngle, rotationValue]);

  if (centerX === 0) return null;

  // Dark ruby/crimson container variants replacing previous absolute white borders
  const tierStyles = {
    inner: {
      bgColor: "bg-neutral-950/90",
      blur: "backdrop-blur-sm",
      borderColor: "border-red-500/25",
    },
    middle: {
      bgColor: "bg-neutral-950/80",
      blur: "backdrop-blur-md",
      borderColor: "border-red-950/40",
    },
    outer: {
      bgColor: "bg-neutral-950/60",
      blur: "backdrop-blur-xl",
      borderColor: "border-red-950/20",
    },
  }[tier];

  return (
    <motion.div
      ref={nodeRef}
      className="absolute w-12 h-12 sm:w-14 sm:h-14 z-30 group cursor-pointer"
      style={{ left: coords.x, top: coords.y }}
      whileHover={{ scale: 1.25, zIndex: 45 }}
      onMouseMove={handleMouseMoveNode}
      onMouseEnter={handleMouseEnterNode}
      onMouseLeave={handleMouseLeaveNode}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
    >
      {/* Dynamic Pulse Glowing background effect when active */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl blur-xl"
          style={{ backgroundColor: skill.color, opacity: 0.2 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* The visible shell component configured to Crimson guidelines */}
      <div
        className={`w-full h-full rounded-xl border ${tierStyles.borderColor} ${tierStyles.bgColor} ${tierStyles.blur} flex items-center justify-center relative transition-colors duration-300 group-hover:border-red-500/40 group-hover:shadow-[0_0_20px_${skill.color}25]`}
      >
        <div
          className="absolute w-4 h-4 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ backgroundColor: skill.color }}
        />

        {/* Magnetic Icon Container */}
        <motion.div
          className="relative flex items-center justify-center"
          style={{ x: magneticX, y: magneticY }}
        >
          <Icon
            size={22}
            style={{ color: skill.color }}
            className="transition-transform duration-300 group-hover:scale-110 sm:text-[24px]"
          />
        </motion.div>

        {/* Aesthetic Tooltip */}
        <div className="absolute -bottom-8 bg-neutral-950/95 border border-red-950/50 text-[10px] text-white font-semibold px-2.5 py-1 rounded opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 pointer-events-none transition-all duration-300 tracking-wide whitespace-nowrap shadow-xl z-50">
          {skill.name}
        </div>
      </div>
    </motion.div>
  );
}