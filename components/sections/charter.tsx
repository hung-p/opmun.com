import { Zap, Volume2, Gauge, Heart } from "lucide-react";
import { StaggerWrapper, FadeUpWrapper, MotionDiv } from "@/components/shared/animation-wrappers";
import Logo from "@/components/shared/logo";

export function Charter() {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <StaggerWrapper className="lg:col-span-6">
          <FadeUpWrapper className="font-headline text-3xl md:text-4xl font-bold mb-8">The Core Specifications</FadeUpWrapper>
          <ul className="space-y-10">
            <FadeUpWrapper className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Zap className="text-primary w-6 h-6" />
              </div>
              <div>
                <h5 className="font-headline text-lg font-bold mb-2">Reduced Cognitive Overhead</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">No verb conjugations or complex inflections. Tense and state are handled by simple, logical markers, drastically reducing memorization time.</p>
              </div>
            </FadeUpWrapper>
            <FadeUpWrapper className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Volume2 className="text-primary w-6 h-6" />
              </div>
              <div>
                <h5 className="font-headline text-lg font-bold mb-2">Standardized Phonetics</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">Consistent spelling-to-sound rules. Reduced ambiguity means you can confidently pronounce any word you read.</p>
              </div>
            </FadeUpWrapper>
            <FadeUpWrapper className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Gauge className="text-primary w-6 h-6" />
              </div>
              <div>
                <h5 className="font-headline text-lg font-bold mb-2">Syllabic Efficiency</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">The highest frequency words and numbers are optimized into short syllables to increase information density and throughput.</p>
              </div>
            </FadeUpWrapper>
            <FadeUpWrapper className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Heart className="text-primary w-6 h-6" />
              </div>
              <div>
                <h5 className="font-headline text-lg font-bold mb-2">Human Centric</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">Engineered for logic, but built for people. Important concepts get dedicated words, avoiding overly robotic compound structures.</p>
              </div>
            </FadeUpWrapper>
          </ul>
        </StaggerWrapper>
        <MotionDiv 
          className="lg:col-span-6 aspect-square max-w-md md:max-w-xl lg:max-w-none mx-auto w-full bg-[#111317] border border-outline-variant/30 relative overflow-hidden group rounded-2xl p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Tech Grid Background Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.02)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(0,229,255,0.02)_1px,_transparent_1px)] bg-[size:30px_30px] opacity-60 pointer-events-none" />
          
          {/* Radar Sweep Line */}
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent top-0 animate-[radar-sweep_4s_ease-in-out_infinite] pointer-events-none" />

          {/* Glowing background circles */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary-container/5 rounded-full blur-[80px] opacity-60 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none" />

          {/* Corner Indicators */}
          <div className="absolute top-3 left-3 text-[9px] font-mono text-outline/30 select-none">+</div>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-outline/30 select-none">+</div>
          <div className="absolute bottom-3 left-3 text-[9px] font-mono text-outline/30 select-none">+</div>
          <div className="absolute bottom-3 right-3 text-[9px] font-mono text-outline/30 select-none">+</div>

          {/* Top Panel - Status bar */}
          <div className="flex justify-between items-center border-b border-outline-variant/10 pb-4 relative z-10 font-label select-none w-full">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-[10px] text-[#bac9cc] tracking-widest uppercase font-bold">OPMUN.SPEC.ENGINE</span>
            </div>
            <div className="text-[9px] text-[#849396] tracking-widest uppercase font-semibold">
              SYS_L_SEC: 0x94F2
            </div>
          </div>

          {/* Left Tech Metadata */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-[8px] font-mono text-outline/35 tracking-widest uppercase z-10 hidden sm:flex select-none">
            <div className="flex flex-col gap-1">
              <span>[CORE.INIT]</span>
              <span className="text-primary-container font-bold">ACTIVE</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>[COGN.SIZE]</span>
              <span>300 WORDS</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>[CORE.CLOCK]</span>
              <span>1.02GHZ</span>
            </div>
          </div>

          {/* Right Tech Metadata */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-[8px] font-mono text-outline/35 tracking-widest uppercase z-10 hidden sm:flex select-none text-right">
            <div className="flex flex-col gap-1">
              <span>[COMP.RATE]</span>
              <span className="text-primary-container font-bold">98.5%</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>[TENSE.CONG]</span>
              <span>0% ERROR</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>[STATUS]</span>
              <span className="text-primary animate-pulse font-bold">LOCKED</span>
            </div>
          </div>

          {/* Central Logo and Orbiting Assembly */}
          <div className="relative flex items-center justify-center my-6 flex-grow z-10">
            {/* Outer dotted ring */}
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 border border-dashed border-primary/20 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite]" />
            
            {/* Middle solid ring with tiny notches */}
            <div className="absolute w-52 h-52 sm:w-56 sm:h-56 border border-outline-variant/30 rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite_reverse]">
              <div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
              <div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#c3c0ff]" />
            </div>
            
            {/* Inner Core Container */}
            <div className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#1e2024]/60 border border-primary/20 flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,229,255,0.15)] backdrop-blur-md relative overflow-hidden group-hover:border-primary/40 transition-colors duration-500">
              {/* Inner ambient scanning shadow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,229,255,0.15)_0%,_transparent_70%)] animate-pulse" />
              
              {/* The Correct Opmun Logo */}
              <Logo className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-[0_0_20px_rgba(0,229,255,0.35)] transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-180 relative z-10" />
            </div>
          </div>

          {/* Bottom Panels */}
          <div className="grid grid-cols-2 gap-4 relative z-10 w-full mt-4 select-none">
            {/* Efficiency Indicator */}
            <div className="bg-[#1c1d22]/40 border border-outline-variant/15 p-3 rounded-lg flex flex-col justify-between gap-1 w-full backdrop-blur-xs">
              <div className="flex justify-between text-[9px] font-label font-bold text-[#849396] tracking-wider uppercase">
                <span>COGNITIVE SAVINGS</span>
                <span className="text-primary font-bold">+94%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-gradient-to-r from-[#00e5ff] to-[#00b3cc] h-full rounded-full w-[94%]" />
              </div>
            </div>

            {/* Grammar consistency Indicator */}
            <div className="bg-[#1c1d22]/40 border border-outline-variant/15 p-3 rounded-lg flex flex-col justify-between gap-1 w-full backdrop-blur-xs">
              <div className="flex justify-between text-[9px] font-label font-bold text-[#849396] tracking-wider uppercase">
                <span>GRAMMAR STABILITY</span>
                <span className="text-primary-container font-bold">100%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-gradient-to-r from-[#c3c0ff] to-[#3626ce] h-full rounded-full w-[100%]" />
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
