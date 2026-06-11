"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, ArrowUpRight, Download } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ImageLightbox } from "@/components/image-lightbox";
import { QuoteBanner } from "@/components/quote-banner";

type Project = {
  title: string;
  description: string;
  image: string;
  role: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
};

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "CHR Case Management & Monitoring System",
      description: "Designed and built a secure, full-stack case-management platform for the Commission on Human Rights Region VII. Coordinated requirements with stakeholders to engineer a complex 6-role workflow tracking dashboard.",
      image: "/CHR-CMMS.png",
      role: "Full Stack Developer",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
      liveUrl: "https://chr-cmms-ecru.vercel.app",
    },
    {
      title: "Philippine Labor Market Polarization Dashboard",
      description: "An interactive Streamlit data visualization dashboard analyzing whether the Philippine labor market has polarized into an 'hourglass' structure. Features K-Means occupational clustering, regression projections through 2030, and a fully customized styling system.",
      image: "/ph-labor-market.png",
      role: "Project Lead & Lead Developer",
      technologies: ["Python", "Streamlit", "Scikit-Learn", "K-Means Clustering", "Regression Modeling"],
      githubUrl: "https://github.com/DaRainFlavor/CMSC-178DA-Project",
      liveUrl: "https://ph-labor-market-dashboard.streamlit.app",
    },
    {
      title: "Compiley Studio IDE",
      description: "A standalone desktop IDE running a custom-designed programming language called 'Brainrot'. Features a custom-built compiler and an AI coding assistant capable of text-and-speech interaction.",
      image: "/Compiley-Studio.png",
      role: "Project Manager & Full Stack",
      technologies: ["Python", "Tkinter", "MIPS Assembly", "Mars.jar"],
      githubUrl: "https://github.com/DaRainFlavor/CMSC-124-PL-Project",
    },
    {
      title: "Inspectify",
      description: "Mobile application using AI and Gemini's spatial understanding API to assess structural housing damage via photos. Includes localized maps for evacuation centers and hardware stores.",
      image: "/Inspectify.png",
      role: "Full Stack Developer",
      technologies: ["Expo / React Native", "Flask", "MySQL", "Gemini API", "Cloudinary"],
      githubUrl: "https://github.com/J-RuriAugusto/INSPECTIFY",
    },
    {
      title: "MBTI Personality Type Classification",
      description: "A machine learning research project containing a custom personality test that classifies answers into MBTI categories using XGBoost, Random Forest, Logistic Regression, and LDA. Built with a full web testing interface.",
      image: "/MBTI.png",
      role: "Lead Researcher & Developer",
      technologies: ["Next.js", "Python", "XGBoost", "Scikit-Learn", "Vercel"],
      githubUrl: "https://github.com/DaRainFlavor/Multi-Class-Personality-Type-Classification-Using-Machine-Learning",
      liveUrl: "https://mbti-synthetic.vercel.app",
    },
    {
      title: "Color Rush",
      description: "A desktop Flood Fill game built using C++ and SFML. Integrates an automated AI algorithm solver that thinks n-moves ahead, letting users compete and compare metrics against the AI solver.",
      image: "/Color-Rush.png",
      role: "Solo Developer",
      technologies: ["C++", "SFML", "Algorithm Design", "AI Solver"],
      githubUrl: "https://github.com/DaRainFlavor/Color-Rush",
    },
    {
      title: "Kaizen",
      description: "A premium, minimalist habit-tracking mobile application inspired by the Japanese philosophy of continuous daily improvement. Helps users track positive daily habits while monitoring and reducing distractions.",
      image: "/Kaizen.png",
      role: "Solo Developer",
      technologies: ["React Native", "Expo", "TypeScript", "Zustand"],
      githubUrl: "https://github.com/DaRainFlavor/Kaizen",
      downloadUrl: "https://drive.google.com/file/d/1irW49HOtuHUNPLcs5ske38Ky7W6_MTrb/view?usp=drivesdk",
    },
  ];

  const paginate = useCallback((newDir: number) => {
    setDirection(newDir);
    setCurrent((prev) => (prev + newDir + projects.length) % projects.length);
  }, [projects.length]);

  const project = projects[current];

  return (
    <section id="projects" className="w-full bg-secondary py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Quote Banner inside Projects Section */}
        <QuoteBanner />

        {/* Section Heading */}
        <div className="flex items-end justify-between mb-14 mt-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">
              04. Projects
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
              Selected Projects
            </h2>
          </div>

          {/* Counter */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="text-foreground font-bold text-lg">{String(current + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative h-[820px] xs:h-[740px] sm:h-[620px] lg:h-[420px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 bottom-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Left: Info */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">

                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest">
                    {project.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-background border border-border px-3 py-1 text-xs font-medium text-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" />
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-70 transition-opacity"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-70 transition-opacity"
                    >
                      Download APK
                      <Download className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right: Image */}
              <div className="order-1 lg:order-2 w-fit mx-auto rounded-2xl border border-border/40 shadow-lg overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={900}
                  unoptimized
                  className="w-auto h-auto max-w-full max-h-[55vh] object-contain cursor-zoom-in block"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={current === 0}
                  onClick={() => setLightboxOpen(true)}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <ImageLightbox
            src={project.image}
            alt={project.title}
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
          />

          {/* Navigation */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "bg-primary w-6 h-2"
                      : "bg-border hover:bg-muted-foreground/40 w-2 h-2"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => paginate(-1)}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-all duration-200"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-all duration-200"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
