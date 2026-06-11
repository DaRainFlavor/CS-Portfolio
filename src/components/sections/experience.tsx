"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Award } from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements?: string[];
};

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Lexmark-Xerox Global Services Support",
      role: "Asset Management Intern",
      duration: "2025",
      description: "Handled data administration and system analytics inside the Customer Data Management team.",
      achievements: [
        "Processed and updated large-scale enterprise assets, guaranteeing operational accuracy across global services databases.",
        "Validated 250+ hours worth of sensitive system telemetry, resolving schema anomalies and pipeline bottlenecks.",
        "Managed database access requests and CDM operational logs under compliance protocols."
      ]
    },
    {
      company: "CEB-I Hacks (Team Kawayanan)",
      role: "Hackathon Finalist",
      duration: "2025 — 2026",
      description: "Co-designed and developed an agricultural sustainability app in Cebu's major innovation competition.",
      achievements: [
        "Built a working prototype showcasing offline synchronization and user telemetry charts.",
        "Pitched the final product architecture to a panel of engineering lead judges."
      ]
    },
    {
      company: "UP Computer Science Guild",
      role: "UPCSG Hackathon Competitor",
      duration: "2025",
      description: "Competed in the annual 24-hour fast prototyping competition.",
      achievements: [
        "Integrated third-party APIs for map routing and notification dispatches under a strict time limit."
      ]
    },
    {
      company: "DICT (Department of Information and Communications Technology)",
      role: "Principles of Design Scholar",
      duration: "2024",
      description: "Completed structured visual design programs covering UI/UX methodologies, accessibility criteria, and modern typography hierarchy."
    }
  ];

  return (
    <section id="experience" className="w-full border-t-2 border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 max-w-2xl">
          <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">
            03. Experience
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
            My Journey & Track Record
          </h2>
        </div>

        {/* Timeline Line */}
        <div className="relative border-l border-border/60 pl-6 sm:pl-8 ml-3 space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative"
            >
              {/* Point Node */}
              <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm">
                <Briefcase className="h-3 w-3" />
              </span>

              {/* Card */}
              <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-primary/20 hover:shadow-md">
                
                {/* Heading */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-[15px] font-semibold text-foreground font-sans">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-muted-foreground font-medium font-sans">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-mono bg-secondary px-2.5 py-1 rounded-md self-start sm:self-center">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.duration}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="space-y-2 text-xs text-muted-foreground/90 pl-4 list-disc marker:text-primary/50 leading-relaxed font-normal">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
