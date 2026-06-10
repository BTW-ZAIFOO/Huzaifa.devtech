import React from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

interface EducationItem {
  type: "University" | "College" | "School";
  institution: string;
  degree: string;
  duration: string;
  location: string;
  highlights: string[];
}

const educationData: EducationItem[] = [
  {
    type: "University",
    institution: "Northern University, Nowshera - Pakistan",
    degree: "Bachelor of Science in Computer Science",
    duration: "2019 — 2023",
    location: "Nowshera, Pakistan",
    highlights: [
      "Specialized in Software Engineering and Different AI solutions",
      "Maintained a strong focus on full-stack development methodologies",
      "Developed multiple production-grade SaaS and analytics platforms",
    ],
  },
  {
    type: "College",
    institution: "Nisar Shaheed Degree College, Risalpur - Pakistan",
    degree: "FSc. Pre-Engineering",
    duration: "2017 — 2019",
    location: "Nowshera, Pakistan",
    highlights: [
      "Graduated with distinction in Mathematics and English",
      "Active participant in class co-curricular activities",
    ],
  },
  {
    type: "School",
    institution: "FG Sapper School For Boys, Risalpur - Pakistan",
    degree: "Matriculation",
    duration: "2016 — 2017",
    location: "Nowshera, Pakistan",
    highlights: [
      "Secured top grades in Science electives",
      "Developed early foundations in analytical problem-solving",
    ],
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section className="text-zinc-100 py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 text-red-400 text-sm mb-4">
            <GraduationCap size={16} />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Education <span className="text-red-600">History</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-md mx-auto">
            A timeline of my academic background and foundational training in engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-zinc-800/60">
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={`${edu.type}-${index}`}
                className={`relative flex w-full justify-start sm:justify-between items-start group ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline Center Dot */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-red-600 z-10 group-hover:bg-red-600 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />

                {/* Main Card Wrapper */}
                {/* On mobile, it pushes right to make room for the line. On desktop, it takes exactly 46% width */}
                <div className="w-full pl-12 sm:pl-0 sm:w-[46%]">
                  <EducationCard edu={edu} />
                </div>

                {/* Structural Spacer */}
                {/* This occupies the opposite side on desktop layouts to keep everything aligned perfectly */}
                <div className="hidden sm:block w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Extracted Card Subcomponent
const EducationCard: React.FC<{ edu: EducationItem }> = ({ edu }) => (
  <div className="bg-[#121214] border border-zinc-800/80 rounded-xl p-6 hover:border-red-900/60 transition-all duration-300 shadow-sm relative overflow-hidden backdrop-blur-sm hover:shadow-[0_4px_25px_rgba(153,27,27,0.12)] group">
    {/* Crimson Ambient Glow Effect */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-2xl pointer-events-none" />

    {/* Badge */}
    <span className="inline-block text-xs font-semibold tracking-wider uppercase text-red-500 mb-3 px-2 py-0.5 rounded bg-red-950/30 border border-red-900/40">
      {edu.type}
    </span>

    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-red-500 transition-colors duration-200">
      {edu.institution}
    </h3>

    <p className="text-zinc-300 font-medium mt-1 text-sm flex items-center gap-1.5">
      <BookOpen size={14} className="text-zinc-500" />
      {edu.degree}
    </p>

    {/* Meta Info */}
    <div className="flex flex-wrap gap-4 mt-4 text-xs text-zinc-400 border-t border-zinc-800/60 pt-4">
      <span className="flex items-center gap-1">
        <Calendar size={12} className="text-red-600/80" />
        {edu.duration}
      </span>
      <span className="flex items-center gap-1">
        <MapPin size={12} className="text-red-600/80" />
        {edu.location}
      </span>
    </div>

    {/* Highlights */}
    <ul className="mt-4 space-y-2 text-sm text-zinc-400">
      {edu.highlights.map((highlight, i) => (
        <li key={i} className="flex items-start gap-2">
          <Award size={14} className="text-red-600/70 mt-0.5 shrink-0" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  </div>
);