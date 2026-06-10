import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParticleNetwork } from "@/components/shared/particle-network";
import { MotionDiv } from "@/components/shared/animation-wrappers";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] py-24 flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container/20 via-transparent to-transparent z-10"></div>
        <ParticleNetwork />
      </div>
      <MotionDiv 
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">System Initialization v0.1</span>
        </div>
        <div className="flex flex-col items-center mb-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
          <h1 className="relative font-headline text-5xl md:text-[8rem] font-black tracking-tighter text-white mb-2 leading-none uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-start justify-center gap-4">
            OPMUN
            <span className="font-label text-sm md:text-xl uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20 mt-2 md:mt-6">v0.1-alpha</span>
          </h1>
          <h2 className="relative font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-surface">
            The Communication <span className="text-gradient">Highway</span>
          </h2>
        </div>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          A predictable global communication layer optimized for low cognitive load and fast learning. Designed for real-world travel, global meetings, and international teams. Not replacing your native language—just saving you time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/playground" className="btn-primary-gradient text-on-primary-fixed font-label font-bold text-sm uppercase px-10 py-4 rounded-sm w-full sm:w-auto inline-block">
            TRY THE OPMUN CORE SYSTEM
          </Link>
          <Link href="#" className="group btn-glass flex items-center justify-center gap-2 text-on-surface font-label font-bold text-sm uppercase px-10 py-4 rounded-sm w-full sm:w-auto">
            Explore the Core Language
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-primary transition-transform duration-300" />
          </Link>
        </div>
      </MotionDiv>
    </section>
  );
}
