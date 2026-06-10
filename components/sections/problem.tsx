import { AlertCircle, BookX, Brain } from "lucide-react";
import { StaggerWrapper, FadeUpWrapper } from "@/components/shared/animation-wrappers";

export function Problem() {
  return (
    <section className="py-24 bg-surface-container-lowest relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,229,255,0.02),transparent)] pointer-events-none"></div>
      <StaggerWrapper className="max-w-7xl mx-auto px-8 relative z-10">
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
          <FadeUpWrapper className="glass-card p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
              <AlertCircle className="text-primary w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">Phonetic Inconsistency</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">Spelling-to-sound mappings in English are unpredictable, forcing learners into constant memorization.</p>
          </FadeUpWrapper>
          <FadeUpWrapper className="glass-card p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
              <BookX className="text-primary w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">Structural Irregularity</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">Irregular verbs and legacy exceptions add unnecessary cognitive load to simple communication tasks.</p>
          </FadeUpWrapper>
          <FadeUpWrapper className="glass-card p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
              <Brain className="text-primary w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">High Cognitive Load</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">Constant anxiety over grammar errors decreases speaking confidence and slows down global teams.</p>
          </FadeUpWrapper>
        </div>
      </StaggerWrapper>
    </section>
  );
}
