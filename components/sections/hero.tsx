"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Copy, Check } from "lucide-react";
import { ParticleNetwork } from "@/components/shared/particle-network";
import { MotionDiv } from "@/components/shared/animation-wrappers";

export function Hero() {
  const [englishText, setEnglishText] = useState("I went to the global meeting yesterday");
  const [opmunText, setOpmunText] = useState("");
  const [copied, setCopied] = useState(false);

  const presets = [
    { text: "I went to the global meeting yesterday", label: "Meeting" },
    { text: "We will eat dinner at the hotel", label: "Travel" },
    { text: "They spoke about the complex exceptions", label: "Grammar" }
  ];

  const translate = (text: string): string => {
    let lower = text.toLowerCase().trim();
    if (!lower) return "";

    // Simple rule-based Opmun translator mapper
    // 1. Map irregular verbs / tenses
    lower = lower.replace(/\bwent to\b/g, '<span class="text-primary font-bold">past</span> go');
    lower = lower.replace(/\bwent\b/g, '<span class="text-primary font-bold">past</span> go');
    lower = lower.replace(/\bate\b/g, '<span class="text-primary font-bold">past</span> eat');
    lower = lower.replace(/\bspoke\b/g, '<span class="text-primary font-bold">past</span> speak');
    lower = lower.replace(/\bwill go\b/g, '<span class="text-primary font-bold">future</span> go');
    lower = lower.replace(/\bwill eat\b/g, '<span class="text-primary font-bold">future</span> eat');
    lower = lower.replace(/\bwill speak\b/g, '<span class="text-primary font-bold">future</span> speak');
    
    // 2. Map nouns / adjectives simplification
    lower = lower.replace(/\bmeetings\b/g, "meeting");
    lower = lower.replace(/\blanguages\b/g, "language");
    lower = lower.replace(/\bexceptions\b/g, "rule");
    lower = lower.replace(/\bcomplex\b/g, "heavy");
    lower = lower.replace(/\bdinner\b/g, "food");
    lower = lower.replace(/\bhotel\b/g, "stay");

    // Clean up particles
    lower = lower.replace(/\bto the\b/g, "");
    lower = lower.replace(/\bthe\b/g, "");
    lower = lower.replace(/\bat the\b/g, "");
    lower = lower.replace(/\bto\b/g, "");
    lower = lower.replace(/\bat\b/g, "");
    lower = lower.replace(/\babout\b/g, "");

    return lower;
  };

  useEffect(() => {
    setOpmunText(translate(englishText));
  }, [englishText]);

  const handleCopy = () => {
    // Strip HTML tags for clipboard
    const textToCopy = opmunText.replace(/<[^>]*>/g, "");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen py-32 flex flex-col items-center justify-center px-4 sm:px-8 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container/20 via-transparent to-transparent z-10"></div>
        <ParticleNetwork />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Text */}
        <MotionDiv 
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full border border-outline-variant/20 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              SYSTEM INITIALIZATION v0.1
            </span>
          </div>

          <h1 className="relative font-headline text-5xl sm:text-6xl md:text-[6.5rem] font-black tracking-tighter text-white mb-4 leading-none uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
            OPMUN
            <span className="font-label text-xs sm:text-sm uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20 sm:mt-4">v0.1-alpha</span>
          </h1>

          <h2 className="relative font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-6">
            The Communication <span className="text-gradient">Highway</span>
          </h2>

          <p className="text-on-surface-variant text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-light">
            A predictable global communication layer optimized for low cognitive load and fast learning. Designed for real-world travel, global meetings, and international teams. Not replacing your native language—just saving you time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <Link href="#" className="inline-flex items-center justify-center btn-primary-gradient text-on-primary-fixed font-label font-bold text-xs uppercase px-8 py-3.5 rounded-sm tracking-wider w-full sm:w-auto text-center">
              EXPLORE PROTOCOL
            </Link>
            <Link href="#" className="group btn-glass flex items-center justify-center gap-2 text-on-surface font-label font-bold text-xs uppercase px-8 py-3.5 rounded-sm w-full sm:w-auto tracking-wider">
              CORE SPECIFICATION
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-primary transition-transform duration-300" />
            </Link>
          </div>
        </MotionDiv>

        {/* Right Column: Live Interactive Translator Widget */}
        <MotionDiv 
          className="lg:col-span-6 w-full max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden">
            {/* Glossy top edge border */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

            {/* Terminal Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-label text-xs uppercase tracking-widest text-[#bac9cc] font-bold">OPMUN INTERACTIVE REPL</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-error/40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-container/40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-primary/40"></span>
              </div>
            </div>

            {/* Presets Row */}
            <div className="flex flex-wrap gap-2 mb-4">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => setEnglishText(preset.text)}
                  className={`font-label text-[10px] uppercase tracking-wider px-3 py-1.5 rounded border transition-all duration-300 cursor-pointer active:scale-95 ${
                    englishText === preset.text
                      ? "bg-primary/10 border-primary text-primary font-bold shadow-[0_0_12px_rgba(0,229,255,0.2)]"
                      : "bg-white/5 border-white/5 text-[#bac9cc] hover:bg-primary/5 hover:border-primary/30 hover:text-primary hover:scale-[1.03]"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* English input segment */}
            <div className="mb-4">
              <label className="font-label text-[10px] uppercase tracking-widest text-[#849396] block mb-2 font-bold">English Input Source</label>
              <textarea
                value={englishText}
                onChange={(e) => setEnglishText(e.target.value)}
                className="w-full bg-[#1c1d22]/50 border border-white/5 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors font-sans resize-none h-20"
                placeholder="Type English sentence here..."
              />
            </div>

            {/* Opmun output segment */}
            <div className="relative bg-[#1c1d22]/70 border border-white/5 rounded-lg p-4 h-24 flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-50 hover:opacity-100 transition-opacity">
                <button 
                  onClick={handleCopy}
                  className="text-[#bac9cc] hover:text-white p-1.5 rounded hover:bg-white/5 transition-colors"
                  title="Copy Translation"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div>
                <label className="font-label text-[10px] uppercase tracking-widest text-[#849396] block mb-1 font-bold">Opmun L-Protocol Code</label>
                <div 
                  className="text-sm font-mono text-white/90 selection:bg-primary/20 selection:text-white leading-relaxed mt-1"
                  dangerouslySetInnerHTML={{ __html: opmunText || '<span class="text-white/30 italic">No output</span>' }}
                />
              </div>

              <div className="flex justify-between items-center text-[9px] font-label uppercase tracking-widest text-primary/60 border-t border-white/5 pt-2 mt-1">
                <span>Predictable Tense Mapping</span>
                <span>Optimized Syllables</span>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
