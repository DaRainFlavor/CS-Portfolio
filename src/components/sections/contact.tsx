"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";

export function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/DaRainFlavor",
      icon: <GithubIcon className="h-7 w-7 sm:h-8 sm:w-8" />,
      ariaLabel: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/AdrianVaflor",
      icon: <LinkedinIcon className="h-7 w-7 sm:h-8 sm:w-8" />,
      ariaLabel: "LinkedIn Profile",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/AdrianVaflor",
      icon: <FacebookIcon className="h-7 w-7 sm:h-8 sm:w-8" />,
      ariaLabel: "Facebook Profile",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/AdrianVaflor",
      icon: <InstagramIcon className="h-7 w-7 sm:h-8 sm:w-8" />,
      ariaLabel: "Instagram Profile",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@DaRainFlavor",
      icon: <YoutubeIcon className="h-7 w-7 sm:h-8 sm:w-8" />,
      ariaLabel: "YouTube Channel",
    },
    {
      name: "Email",
      href: "mailto:adrianvaflor9@gmail.com",
      icon: <Mail className="h-7 w-7 sm:h-8 sm:w-8" />,
      ariaLabel: "Send Email",
    },
  ];

  return (
    <section id="contact" className="w-full bg-background border-t border-border/40 py-24 sm:py-32 relative overflow-hidden flex items-center justify-center">
      {/* Decorative light grid background */}
      <div className="absolute inset-0 dot-matrix opacity-[0.2] dark:opacity-[0.1] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Paragraph text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-2xl text-muted-foreground leading-relaxed text-center font-normal max-w-3xl"
        >
          I pride myself on adaptability and continuous learning. I focus on core computer science foundations rather than a single technology stack, adapting quickly to teach, research, and build with whatever tools are needed to make a meaningful impact.
        </motion.p>

        {/* Big heading text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#172033] dark:text-[#f0ede9] text-center mt-12 mb-16 leading-[1.1] font-sans"
        >
          Let's connect and <br className="sm:hidden" />
          <span className="text-primary bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">collaborate!</span>
        </motion.h2>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6 sm:gap-8"
        >
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={link.ariaLabel}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300 shadow-md shadow-black/[0.03] dark:shadow-none hover:shadow-lg hover:shadow-primary/10"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
