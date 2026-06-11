"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Activity = {
  type: "Internship" | "Hackathon" | "Training";
  organization: string;
  role: string;
  year: string;
  description: string;
  certificateUrl?: string;
};

const typeColors: Record<Activity["type"], string> = {
  Internship: "bg-primary/10 text-primary border-primary/20",
  Hackathon:  "bg-blue-500/10 text-blue-500 border-blue-500/20 dark:text-blue-400",
  Training:   "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
};

export function Extracurricular() {
  const activities: Activity[] = [
    {
      type: "Internship",
      organization: "Lexmark-Xerox Global Services Support",
      role: "Asset Management Intern",
      year: "2025",
      description: "Processed and managed large-scale enterprise asset datasets within the Lexmark-Xerox global services infrastructure, collaborating across teams to ensure operational data integrity.",
      certificateUrl: "/internship_certificate.pdf",
    },
    {
      type: "Hackathon",
      organization: "Team Kawayanan",
      role: "CEB-I Hacks Finalist",
      year: "2025 — 2026",
      description: "Hackathon finalist — designed and developed an innovative solution as part of a competitive multi-round hackathon.",
    },
    {
      type: "Hackathon",
      organization: "UP Computer Science Guild",
      role: "UPCSG Hackathon",
      year: "2025",
      description: "Competed in the university-wide hackathon, building a working prototype under time constraints.",
    },
    {
      type: "Training",
      organization: "DICT",
      role: "Principles of Design Course",
      year: "2024",
      description: "Completed a structured design course covering UI/UX principles, visual hierarchy, and modern design thinking.",
    },
  ];

  return (
    <section id="extracurricular" className="w-full bg-background border-t-2 border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-16 max-w-2xl">
          <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">
            05. Extra-Curricular
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
            Beyond the Classroom
          </h2>
        </div>

        {/* Activity List */}
        <div className="space-y-0 divide-y divide-border/60">
          {activities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="group grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-4 lg:gap-10 py-10 items-start hover:bg-secondary/30 transition-colors duration-200 px-4 -mx-4 rounded-xl"
            >
              {/* Left: year + type */}
              <div className="flex lg:flex-col items-center lg:items-start gap-3 lg:gap-2 pt-0.5">
                <span className={`text-[10px] font-bold font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${typeColors[item.type]}`}>
                  {item.type}
                </span>
                <span className="font-mono text-sm text-muted-foreground">{item.year}</span>
              </div>

              {/* Right: org + role + description */}
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight tracking-tight group-hover:text-primary transition-colors duration-200">
                  {item.organization}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">{item.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed pt-2 max-w-4xl">{item.description}</p>
                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold font-mono text-primary uppercase tracking-widest hover:opacity-70 transition-opacity"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
