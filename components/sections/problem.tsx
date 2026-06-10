import { AlertCircle, BookX, Brain } from "lucide-react";
import { StaggerWrapper, FadeUpWrapper } from "@/components/shared/animation-wrappers";

export function Problem() {
  return (
    <section className="py-24 bg-surface-container-lowest relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,229,255,0.02),transparent)] pointer-events-none"></div>
      <StaggerWrapper className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <FadeUpWrapper className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-label text-xs text-primary uppercase tracking-widest mb-6 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              The Problem
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6">The &quot;Spaghetti Code&quot; of Natural Languages</h2>
            <p className="text-on-surface-variant text-lg">English is the global default, but it&apos;s full of legacy exceptions and irregular verbs that cost time and mental energy to master.</p>
          </div>
        </FadeUpWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Phonetics */}
          <FadeUpWrapper className="glass-card p-8 rounded-2xl relative overflow-hidden group flex flex-col justify-between min-h-[380px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <AlertCircle className="text-primary w-7 h-7" strokeWidth={1.5} />
              </div>
              <h4 className="font-headline text-xl font-bold mb-3">Phonetic Inconsistency</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Spelling-to-sound mappings in English are unpredictable, forcing learners into constant memorization.</p>
            </div>
            
            <div className="mt-6 p-4 bg-[#111317]/80 border border-white/5 rounded-xl font-mono text-[11px] leading-relaxed text-[#bac9cc] flex flex-col gap-1.5 shadow-inner">
              <div className="flex justify-between border-b border-white/5 pb-1 text-[9px] uppercase tracking-widest text-[#849396] font-bold font-label">
                <span>English Exceptions</span>
                <span>Opmun 1:1 Mapping</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-error/80">though / through / tough</span>
                <span className="text-primary font-bold">to / tru / taf</span>
              </div>
            </div>
          </FadeUpWrapper>

          {/* Card 2: Structure */}
          <FadeUpWrapper className="glass-card p-8 rounded-2xl relative overflow-hidden group flex flex-col justify-between min-h-[380px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <BookX className="text-primary w-7 h-7" strokeWidth={1.5} />
              </div>
              <h4 className="font-headline text-xl font-bold mb-3">Structural Irregularity</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Irregular verbs and legacy exceptions add unnecessary cognitive load to simple communication tasks.</p>
            </div>
            
            <div className="mt-6 p-4 bg-[#111317]/80 border border-white/5 rounded-xl font-mono text-[11px] leading-relaxed text-[#bac9cc] flex flex-col gap-1.5 shadow-inner">
              <div className="flex justify-between border-b border-white/5 pb-1 text-[9px] uppercase tracking-widest text-[#849396] font-bold font-label">
                <span>Irregular Conjugations</span>
                <span>Standardized Tenses</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-error/80">catch → caught / buy → bought</span>
                <span className="text-primary font-bold">past catch / past buy</span>
              </div>
            </div>
          </FadeUpWrapper>

          {/* Card 3: Load */}
          <FadeUpWrapper className="glass-card p-8 rounded-2xl relative overflow-hidden group flex flex-col justify-between min-h-[380px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Brain className="text-primary w-7 h-7" strokeWidth={1.5} />
              </div>
              <h4 className="font-headline text-xl font-bold mb-3">High Cognitive Load</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Constant anxiety over grammar errors decreases speaking confidence and slows down global teams.</p>
            </div>
            
            <div className="mt-6 p-4 bg-[#111317]/80 border border-white/5 rounded-xl font-mono text-[11px] leading-relaxed text-[#bac9cc] flex flex-col gap-1.5 shadow-inner">
              <div className="flex justify-between border-b border-white/5 pb-1 text-[9px] uppercase tracking-widest text-[#849396] font-bold font-label">
                <span>Subject Agreement</span>
                <span>Zero Verb Changes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-error/80">he eats / I eat / they eat</span>
                <span className="text-primary font-bold">he eat / I eat / they eat</span>
              </div>
            </div>
          </FadeUpWrapper>
        </div>
      </StaggerWrapper>
    </section>
  );
}
