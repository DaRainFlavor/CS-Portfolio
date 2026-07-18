"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { BookOpen, GraduationCap, Trophy, Cpu } from "lucide-react";

function AnimatedCounter({ 
  from, 
  to, 
  decimals = 0, 
  duration = 2.5 
}: { 
  from: number; 
  to: number; 
  decimals?: number; 
  duration?: number;
}) {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setValue(from + (to - from) * progress);
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}

export function About() {
  const skills = [
    { category: "Languages", items: ["Python", "SQL", "C/C++", "TypeScript", "JavaScript"] },
    { category: "Frameworks / Libraries", items: ["Next.js", "React Native (Expo)", "Flask", "React", "Tailwind CSS"] },
    { category: "Tools & Cloud", items: ["Vercel", "Supabase", "MySQL", "Cloudinary", "Git"] },
    { category: "Core Concepts", items: ["GenAI Integration", "Database Architecture", "UI/UX Design", "Computational Linguistics"] }
  ];

  return (
    <section id="about" className="w-full bg-secondary py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 max-w-2xl">
          <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">
            02. Background
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
            Who I Am & What I Do
          </h2>
        </div>

        {/* Column Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left: Philosophy & Summary */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <h3 className="text-lg font-semibold text-foreground font-sans">My Approach to Technology</h3>
            <div className="space-y-4 text-sm sm:text-[15px] text-muted-foreground leading-relaxed font-normal">
              <p>
                I see computing not just as pure logic, but as my favorite creative medium. It is the space where my diverse interests — problem-solving, psychology, gaming, arts, music, and business — can seamlessly converge into practical, user-centric solutions.
              </p>
              <p>
                During my studies at the <strong>University of the Philippines Cebu</strong>, I maintained a strong academic standing, graduating <strong>Cum Laude</strong>, while focusing my energy on project-based development. I like to build systems from scratch, coordinate requirements with real-world users, and integrate artificial intelligence capabilities to solve concrete problems.
              </p>
              <p>
                As I step into the industry, I am eager to expand my boundaries, tackle complex computational challenges, and collaborate with teams building the next generation of web and mobile software.
              </p>
            </div>

            {/* Education Info Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/40">
              <div className="flex gap-3 items-start">
                <span className="rounded-lg bg-secondary p-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">UP Cebu</span>
                  <span className="text-xs text-muted-foreground">BS Computer Science • Class of 2026</span>
                  <span className="text-xs text-primary font-medium mt-0.5">
                    GWA: <AnimatedCounter from={5} to={1.55} decimals={2} /> (Cum Laude)
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="rounded-lg bg-secondary p-2 text-primary">
                  <Trophy className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">TOPCIT Level 3</span>
                  <span className="text-xs text-muted-foreground">National Telemetry Assessment</span>
                  <span className="text-xs text-primary font-medium mt-0.5">
                    Score: <AnimatedCounter from={0} to={411} decimals={0} /> (National Avg: 233.6)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Custom Skills Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-mono mb-1">
              Technical Stack
            </h3>
            
            <div className="space-y-4">
              {skills.map((skillGroup, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/20 hover:shadow-sm transition-all duration-200"
                >
                  <h4 className="text-xs font-bold font-mono text-primary uppercase tracking-wider mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="rounded-lg bg-secondary/80 px-2.5 py-1 font-sans text-xs font-medium text-foreground tracking-normal"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
