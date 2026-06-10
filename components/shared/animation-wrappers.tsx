"use client";

import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 }
};

export function FadeUpWrapper({ children, className, delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      transition={{ ...fadeUp.transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerWrapper({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionDiv({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function MotionSection({ children, className, ...props }: HTMLMotionProps<"section">) {
  return (
    <motion.section className={className} {...props}>
      {children}
    </motion.section>
  );
}

export function MotionH2({ children, className, ...props }: HTMLMotionProps<"h2">) {
  return (
    <motion.h2 className={className} {...props}>
      {children}
    </motion.h2>
  );
}

export function MotionP({ children, className, ...props }: HTMLMotionProps<"p">) {
  return (
    <motion.p className={className} {...props}>
      {children}
    </motion.p>
  );
}

export function MotionLi({ children, className, ...props }: HTMLMotionProps<"li">) {
  return (
    <motion.li className={className} {...props}>
      {children}
    </motion.li>
  );
}
