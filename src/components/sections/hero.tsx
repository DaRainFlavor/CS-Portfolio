"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex w-full flex-col overflow-hidden pt-20 lg:pt-24 pb-0 lg:pb-0 bg-background"
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center -translate-y-4 lg:-translate-y-8">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:col-span-7 justify-center pl-0 lg:pl-6 -translate-y-6 lg:-translate-y-12"
          >
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-semibold tracking-wide text-primary font-sans"
            >
              Hello I am
            </motion.p>

            {/* Name Header - Single Row */}
            <motion.h1
              variants={itemVariants}
              className="text-[2.5rem] xs:text-[3.2rem] sm:text-[4.2rem] md:text-[5.0rem] lg:text-[5.4rem] font-extrabold tracking-tighter text-[#172033] dark:text-[#f0ede9] leading-tight font-sans"
            >
              Adrian Vaflor
            </motion.h1>

            {/* Tagline Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-[420px] sm:max-w-[480px] text-[17px] sm:text-[19px] text-muted-foreground font-medium leading-relaxed"
            >
              I build software applications, AI systems, and conduct research in computational linguistics.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-2">
              <a
                href="/VAFLOR_RESUME.pdf"
                download="VAFLOR_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md shadow-primary/15"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </a>
            </motion.div>


          </motion.div>

          {/* Right Column: Visual Portrait & blobs */}
          <div className="lg:col-span-5 w-full flex justify-center relative pt-6 pb-0 select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[360px] xs:max-w-[400px] sm:max-w-[450px] lg:max-w-[480px] aspect-[3.7/5] flex items-end justify-center"
              style={{ marginBottom: '-38%' }}
            >
              {/* Slanted Thin Outline Ring Blob */}
              <div 
                className="absolute w-[125%] right-[-12%] border border-primary/20 rounded-[50%_50%_50%_50%_/_46%_46%_54%_54%] -rotate-[22deg] pointer-events-none origin-center" 
                style={{ top: '5%', height: '64.5%' }}
              />

              {/* Slanted Organic Peach Blob Background */}
              <div 
                className="absolute w-[120%] right-[-8%] bg-blob-peach rounded-[50%_50%_50%_50%_/_46%_46%_54%_54%] -rotate-[32deg] pointer-events-none origin-center" 
                style={{ bottom: '25.5%', height: '63.5%' }}
              />

              {/* Neuron Network Animation */}
              <NeuronNetwork />

              {/* Profile Image (Rendered in Full Color, Upright) */}
              <div className="absolute w-[94%] h-[99%] bottom-[9%] left-0 right-0 mx-auto z-10 flex items-end justify-center">
                 <Image
                  src="/adrian_photo2.png"
                  alt="Adrian Vaflor"
                  fill
                  className="object-contain object-bottom scale-[1.15] translate-x-[-4%] translate-y-[-20%] contrast-[1.01] brightness-[1.01] drop-shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function NeuronNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulseOffset: number;
    }> = [];

    const particleCount = 38;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 1.5,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(canvas);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // 1. Particle-Particle Repulsion (Balance distribution)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = 65;

          if (dist < minDist && dist > 0) {
            const force = (minDist - dist) * 0.008;
            const pushX = (dx / dist) * force;
            const pushY = (dy / dist) * force;
            p1.x += pushX;
            p1.y += pushY;
            p2.x -= pushX;
            p2.y -= pushY;
          }
        }
      }

      // 2. Draw connection lines between particles (Synaptic Pathways)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.75;

            // Outer soft glow line
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = 1.6;
            ctx.strokeStyle = `rgba(252, 118, 67, ${alpha * 0.15})`;
            ctx.stroke();

            // Inner sharp fiber core
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = 0.6;
            ctx.strokeStyle = `rgba(255, 225, 200, ${alpha * 0.55})`;
            ctx.stroke();

            // Traveling signals (Action potentials)
            if ((i + j) % 5 === 0) {
              const timeFactor = Date.now() / 1500;
              const t = (timeFactor + (i + j) * 0.23) % 1.0;
              const pulseX = p1.x + (p2.x - p1.x) * t;
              const pulseY = p1.y + (p2.y - p1.y) * t;

              // Pulse outer soft glow
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 3.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(252, 118, 67, ${alpha * 0.35})`;
              ctx.fill();

              // Pulse inner hot spot
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 1.2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.75})`;
              ctx.fill();
            }
          }
        }
      }

      // 3. Draw connections to mouse and apply magnetics
      if (mouse.active) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseMaxDist = 160;

          if (dist < mouseMaxDist) {
            const alpha = (1 - dist / mouseMaxDist) * 0.8;

            // Connection outer glow
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.lineWidth = 1.0;
            ctx.strokeStyle = `rgba(252, 118, 67, ${alpha * 0.25})`;
            ctx.stroke();

            // Magnetic attraction pull
            const force = dist > 0 ? (1 - dist / mouseMaxDist) * 0.4 : 0;
            if (dist > 0) {
              p.x -= (dx / dist) * force;
              p.y -= (dy / dist) * force;
            }
          }
        }
      }

      // 4. Draw neuron cell bodies (Soma)
      const time = Date.now();
      for (const p of particles) {
        const pulse = Math.sin(time * 0.003 + p.pulseOffset) * 0.2 + 1.0;
        const baseRadius = p.radius;
        const currentRadius = baseRadius * pulse;
        const glowRadius = currentRadius * 2.8;

        // Radial gradient for volumetric glow
        const grad = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, glowRadius
        );
        grad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        grad.addColorStop(0.2, "rgba(252, 118, 67, 0.75)");
        grad.addColorStop(0.5, "rgba(252, 118, 67, 0.22)");
        grad.addColorStop(0.85, "rgba(252, 118, 67, 0.03)");
        grad.addColorStop(1.0, "rgba(252, 118, 67, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Sharp membrane ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 1.05, 0, Math.PI * 2);
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = "rgba(252, 118, 67, 0.35)";
        ctx.stroke();

        // Integrate velocity
        p.x += p.vx;
        p.y += p.vy;

        // Boundary bounce check (using glowRadius to prevent clipping at canvas edges, and constraining bottom to photo level)
        const padding = glowRadius;
        const bounceMaxY = height * 0.82 - padding;

        if (p.x < padding) {
          p.x = padding;
          p.vx *= -1;
        } else if (p.x > width - padding) {
          p.x = width - padding;
          p.vx *= -1;
        }
        if (p.y < padding) {
          p.y = padding;
          p.vy *= -1;
        } else if (p.y > bounceMaxY) {
          p.y = bounceMaxY;
          p.vy *= -1;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute -inset-16 w-[calc(100%+128px)] h-[calc(100%+128px)] pointer-events-none select-none z-0"
      style={{ clipPath: 'inset(0px 0px calc(4rem + 25.5%) 0px)' }}
    />
  );
}
