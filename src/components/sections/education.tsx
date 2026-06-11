"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";

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

export function Education() {
  return (
    <section id="education" className="w-full border-t border-border/40 bg-background py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
            Academic Foundation
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">

          {/* Left Side: Cropped Campus Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full aspect-[4/4] overflow-hidden rounded-2xl border border-border/40 shadow-sm group bg-secondary"
          >
            <Image
              src="/up_cebu.png"
              alt="University of the Philippines Cebu Campus"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </motion.div>

          {/* Right Side: Short, Punchy, Personal Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground font-sans">
                University of the Philippines Cebu
              </h3>
              <div className="flex flex-wrap items-center gap-2.5 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5 text-primary">
                  <GraduationCap className="w-4 h-4" />
                  B.S. in Computer Science
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                <span>Expected 2026</span>
              </div>
            </div>

            <div className="text-base text-muted-foreground leading-relaxed font-normal">
              <p>
                Home to one of the country&apos;s strongest Computer Science programs, UP Cebu challenged me with a rigorous curriculum spanning algorithms, systems architecture, software engineering, and artificial intelligence. It was here that I built the foundational knowledge that continues to shape my work as an engineer and researcher.
              </p>
            </div>

            {/* MY CORE LEARNINGS */}
            <div className="mt-6 pt-6 border-t border-border/40 space-y-5">
              <h4 className="text-xs font-bold font-mono text-primary uppercase tracking-wider">
                My Core Learnings
              </h4>

              {/* Takeaway 1 */}
              <div className="flex items-start gap-4 group">
                <span className="text-3xl font-black font-mono text-primary/30 group-hover:text-primary transition-colors duration-300 leading-none select-none">01</span>
                <p className="text-lg sm:text-xl font-semibold text-foreground leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                  Focus on solving problems, not mastering a single tool.
                </p>
              </div>

              <div className="h-px bg-border/40" />

              {/* Takeaway 2 */}
              <div className="flex items-start gap-4 group">
                <span className="text-3xl font-black font-mono text-primary/30 group-hover:text-primary transition-colors duration-300 leading-none select-none">02</span>
                <p className="text-lg sm:text-xl font-semibold text-foreground leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                  Successful projects begin with successful collaboration.
                </p>
              </div>

              <div className="h-px bg-border/40" />

              {/* Takeaway 3 */}
              <div className="flex items-start gap-4 group">
                <span className="text-3xl font-black font-mono text-primary/30 group-hover:text-primary transition-colors duration-300 leading-none select-none">03</span>
                <p className="text-lg sm:text-xl font-semibold text-foreground leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                  Create solutions with meaningful societal impact.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Stats Strip: GWA + TOPCIT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16"
        >
          {/* Subtitle */}
          <div className="mb-6 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Hard work has a number.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/30 rounded-2xl overflow-hidden">

            {/* GWA Stat */}
            <div className="bg-[#e35624] px-8 py-6 flex flex-col gap-1.5 hover:bg-[#c94d1f] transition-colors duration-300">
              <span className="text-xs font-bold font-mono text-white/70 uppercase tracking-widest">Academic Standing</span>
              <div className="flex items-end gap-3 mt-1">
                <span className="text-6xl sm:text-7xl font-black text-white leading-none tracking-tight">
                  <AnimatedCounter from={5} to={1.55} decimals={2} />
                </span>
                <span className="text-sm text-white/60 font-medium pb-2">GWA</span>
              </div>
              <p className="text-xl font-bold text-white">Cum Laude Standing.</p>
            </div>

            {/* TOPCIT Stat */}
            <div className="bg-[#e35624] px-8 py-6 flex flex-col gap-1.5 hover:bg-[#c94d1f] transition-colors duration-300">
              <span className="text-xs font-bold font-mono text-white/70 uppercase tracking-widest">TOPCIT</span>
              <div className="flex items-end gap-3 mt-1">
                <span className="text-6xl sm:text-7xl font-black text-white leading-none tracking-tight">
                  <AnimatedCounter from={0} to={411} decimals={0} />
                </span>
                <span className="text-sm text-white/60 font-medium pb-2">/ 1000</span>
              </div>
              <p className="text-xl font-bold text-white">Level 3.</p>
              <p className="text-sm text-white/80">
                <span className="text-white font-semibold">~76% above</span> the Philippine national average of 233.6 &mdash; Top <span className="text-white font-semibold">~30%</span> of all examinees.
              </p>
              <a
                href="/topcit_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold font-mono text-white uppercase tracking-widest hover:opacity-70 transition-opacity w-fit"
              >
                View Certificate <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
