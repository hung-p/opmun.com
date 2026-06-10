import { Hexagon, Database, Rocket } from "lucide-react";
import { MotionH2, MotionDiv } from "@/components/shared/animation-wrappers";

export function Roadmap() {
  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_top,transparent,rgba(0,229,255,0.02),transparent)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <MotionH2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-headline text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Deployment Schedule
        </MotionH2>
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-0 left-[20px] md:left-1/2 w-[2px] h-full bg-gradient-to-b from-primary/50 via-outline-variant/30 to-transparent -translate-x-1/2"></div>
          
          <div className="space-y-24">
            {/* Q1 2026 */}
            <MotionDiv 
              className="relative flex flex-col md:flex-row items-center justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:w-5/12 ml-10 md:ml-0 md:text-right">
                <span className="font-label text-primary text-xl font-bold block mb-2 drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">Q1 2026</span>
                <h4 className="font-headline text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Core System v0.1</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Establishment of the Core Vocabulary (300 words) and strict grammar patterns. Initial API release for translation testing.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background z-10 shadow-[0_0_20px_rgba(0,229,255,0.6)] group-hover:scale-110 transition-transform duration-500">
                <Hexagon className="text-background w-5 h-5" fill="currentColor" />
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </MotionDiv>

            {/* Q3 2026 */}
            <MotionDiv 
              className="relative flex flex-col md:flex-row items-center justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="hidden md:block md:w-5/12"></div>
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-surface-container-high border-2 border-outline rounded-full flex items-center justify-center z-10 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-500">
                <Database className="text-outline w-5 h-5 group-hover:text-primary transition-colors" />
              </div>
              <div className="md:w-5/12 ml-10 md:ml-0">
                <span className="font-label text-outline text-xl font-bold block mb-2 group-hover:text-primary/80 transition-colors">Q3 2026</span>
                <h4 className="font-headline text-2xl font-bold mb-3 group-hover:text-on-surface transition-colors">Expansion Packs</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Community-driven additions for technical, medical, and business domain vocabulary.</p>
              </div>
            </MotionDiv>

            {/* 2027 */}
            <MotionDiv 
              className="relative flex flex-col md:flex-row items-center justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="md:w-5/12 ml-10 md:ml-0 md:text-right">
                <span className="font-label text-outline text-xl font-bold block mb-2 group-hover:text-primary/80 transition-colors">2027</span>
                <h4 className="font-headline text-2xl font-bold mb-3 group-hover:text-on-surface transition-colors">Production Release v1.0</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Stable core vocabulary locked. Public enterprise APIs and mobile translation clients ready for real-world usage.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-surface-container-high border-2 border-outline rounded-full flex items-center justify-center z-10 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-500">
                <Rocket className="text-outline w-5 h-5 group-hover:text-primary transition-colors" />
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
