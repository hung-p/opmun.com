"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, Cpu } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navLinks = [
    { name: "Core Protocol", href: "#" },
    { name: "Governance", href: "#" },
    { name: "Documentation", href: "#" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111317]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-3.5 flex justify-between items-center relative">
        {/* Brand logo container */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group cursor-pointer shrink-0"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div
            whileHover={{ rotate: 180, scale: 1.15 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.4)]"
          >
            <div className="w-full h-full bg-[#111317] rounded-full flex items-center justify-center">
              <svg aria-hidden="true" className="text-primary group-hover:text-white transition-colors duration-300" fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
                <rect fill="currentColor" height="2.5" width="20" x="2" y="11" />
              </svg>
            </div>
          </motion.div>
          
          <span className="text-2xl font-black tracking-tighter text-white font-headline group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all duration-300 leading-none">
            Opmun
          </span>

          <span className="hidden sm:inline-block font-label text-[9px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 ml-2 group-hover:bg-primary/25 group-hover:shadow-[0_0_8px_rgba(0,229,255,0.25)] transition-all duration-300">v0.1</span>
        </Link>

        {/* Desktop navigation links */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors duration-300 font-semibold"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="navHover"
                  className="absolute inset-0 bg-primary/10 rounded-full border border-primary/10 -z-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Status / Indicator */}
        <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/5 rounded-full py-1.5 px-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
          <span className="font-label text-[9px] uppercase tracking-widest text-[#bac9cc] flex items-center gap-1.5 font-bold">
            <Cpu className="w-3 h-3 text-primary" />
            CORE ACTIVE
          </span>
        </div>

        {/* Mobile menu trigger */}
        <button 
          className="md:hidden text-white hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#111317]/95 backdrop-blur-2xl border-b border-white/5 py-6 px-4 sm:px-8 flex flex-col gap-4 md:hidden shadow-2xl z-40"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                className="font-label text-sm uppercase tracking-widest text-[#bac9cc] hover:text-[#00e5ff] transition-colors py-2.5 border-b border-white/5 flex items-center justify-between" 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <Globe className="w-4 h-4 opacity-35" />
              </Link>
            ))}
            <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/5 rounded-full py-2.5 px-4 mt-2">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                OPMUN CORE PROTOCOL SECURED
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
