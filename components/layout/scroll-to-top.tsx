"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circular progress calculations
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer focus:outline-none group bg-surface-container/70 backdrop-blur-md border border-outline-variant/30 hover:border-primary-container/50 transition-colors duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          {/* Scroll progress circle */}
          <svg className="absolute w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
            {/* Background circle track */}
            <circle
              className="text-outline-variant/20"
              strokeWidth="2"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="22"
              cy="22"
            />
            {/* Foreground progress path */}
            <motion.circle
              className="text-primary-container"
              strokeWidth="2"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ ease: "easeOut", duration: 0.1 }}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="22"
              cy="22"
            />
          </svg>

          {/* Up arrow icon */}
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-on-surface-variant group-hover:text-primary-container transition-colors duration-300 relative z-10 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
