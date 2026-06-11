"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FlaskConical, BookOpen } from "lucide-react";
import { ImageLightbox } from "@/components/image-lightbox";

export function Research() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <section id="research" className="w-full bg-secondary py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-14">
          <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">
            05. Research
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
            Current Research
          </h2>
        </div>

        {/* Paper Header (Full-width Title & Badges) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-10 max-w-5xl"
        >
          {/* Venue & Role Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold font-mono text-primary uppercase tracking-widest">
              <FlaskConical className="w-3 h-3" />
              Under Review
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/5 border border-border px-3 py-1 text-xs font-bold font-mono text-foreground uppercase tracking-widest">
              <BookOpen className="w-3 h-3" />
              EMNLP 2026 — Budapest, Hungary
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 border border-primary/20 px-3 py-1 text-xs font-bold font-mono text-primary/80 uppercase tracking-widest">
              Role: Lead Author & Sole Developer
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight tracking-tight font-sans">
            CebIDN: A Computational Framework for Cebuano Idiom Identification, Disambiguation, and Normalization
          </h3>
        </motion.div>

        {/* Paper Card 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Paper Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Description */}
            <p className="text-base sm:text-[17px] text-muted-foreground leading-relaxed">
              A two-stage NLP pipeline that processes raw Cebuano text to detect figurative idioms, disambiguate their usage, and normalize them into literal equivalents. Stage 1 fine-tunes CebBERT for BIO-tagged idiom detection. Stage 2 leverages Qwen LLM with context-aware prompting for high-quality normalization. The framework directly benefits downstream Cebuano NLP tasks such as machine translation, sentiment analysis, and information extraction — where unresolved idioms routinely degrade model performance.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {["CebBERT", "Qwen LLM", "Python", "NLP", "Fine-tuning", "BIO Tagging", "BLEU / ROUGE / BERTScore"].map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-background border border-border px-3 py-1 text-xs font-medium text-foreground font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Availability note */}
            <p className="text-xs text-muted-foreground font-mono italic border-l-2 border-primary/30 pl-3 mt-2">
              Paper available upon request. Full details pending EMNLP 2026 review outcome.
            </p>
          </motion.div>

          {/* Right: Pipeline Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative w-full overflow-hidden rounded-2xl border border-border/40 shadow-lg bg-white cursor-zoom-in px-8 py-10"
            onClick={() => setLightboxOpen(true)}
          >
            <Image
              src="/cebidn_pipeline.png"
              alt="CebIDN Pipeline — Two-stage Cebuano idiom processing framework"
              width={2658}
              height={1152}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

        </div>

        <ImageLightbox
          src="/cebidn_pipeline.png"
          alt="CebIDN Pipeline — Two-stage Cebuano idiom processing framework"
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />

      </div>
    </section>
  );
}
