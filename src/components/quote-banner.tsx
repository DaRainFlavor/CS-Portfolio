"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function QuoteBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full relative py-12 sm:py-16 z-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="mx-auto max-w-5xl">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full flex flex-col items-center justify-center text-center select-none"
        >
          {/* Staggered Quote Layout with Interesting Typography */}
          <div className="flex flex-col gap-3.5 max-w-4xl">
            <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] text-[#5e6e85] dark:text-[#8ea1bc] uppercase font-sans opacity-85">
              I don't learn first and build later.
            </p>
            
            <p className="text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[4.2rem] font-black tracking-tighter text-[#172033] dark:text-white leading-[1.1] font-sans">
              I learn by{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="bg-gradient-to-r from-[#e35624] to-[#fc7643] dark:from-[#ff9c75] dark:to-[#fc7643] bg-clip-text text-transparent font-black pr-0.5">
                  building.
                </span>
                <motion.span 
                  className="absolute bottom-2.5 left-0 w-full h-[6px] bg-[#e35624]/12 dark:bg-primary/20 rounded-full -z-10"
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: isHovered ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                />
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
