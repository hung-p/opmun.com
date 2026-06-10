"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 max-w-full bg-[#111317]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
      <Link href="/" className="flex items-center gap-3 group cursor-pointer">
        <motion.div
          whileHover={{ rotate: 90, scale: 1.1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <svg aria-hidden="true" className="text-white group-hover:text-primary transition-colors duration-300" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <motion.circle 
              cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"
              initial={{ pathLength: 1 }}
              whileHover={{ pathLength: 0.8, strokeDasharray: "4 4" }}
              transition={{ duration: 0.5 }}
            />
            <motion.rect 
              fill="currentColor" height="2" width="20" x="2" y="11"
              whileHover={{ scaleX: 0.8 }}
            />
          </svg>
        </motion.div>
        <span className="text-xl font-black tracking-tighter text-white font-headline group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all duration-300">Opmun</span>
        <span className="font-label text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 ml-2 group-hover:bg-primary/20 group-hover:shadow-[0_0_8px_rgba(0,229,255,0.3)] transition-all duration-300">v0.1-alpha</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link className="font-label text-sm uppercase tracking-widest text-[#00e5ff] font-bold border-b-2 border-[#00e5ff] pb-1 transition-colors duration-300" href="#">Core Protocol</Link>
        <Link className="font-label text-sm uppercase tracking-widest text-[#bac9cc] hover:text-[#00e5ff] transition-all duration-300 hover:scale-105" href="#">Documentation</Link>
      </nav>
      <Link href="/playground" className="btn-primary-gradient text-on-primary-fixed font-label font-bold text-xs uppercase px-6 py-2.5 rounded-sm inline-block tracking-wider">
        TRY OPMUN API (v0.1)
      </Link>
    </header>
  );
}
