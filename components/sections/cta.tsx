import Link from "next/link";
import { ParticleNetwork } from "@/components/shared/particle-network";
import { MotionDiv } from "@/components/shared/animation-wrappers";

export function CTA() {
  return (
    <section className="py-40 px-4 sm:px-8 text-center bg-background relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container/20 via-transparent to-transparent z-10"></div>
        <ParticleNetwork />
      </div>
      <MotionDiv 
        className="relative z-10 max-w-4xl mx-auto glass-card p-6 sm:p-12 md:p-20 rounded-3xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <h2 className="font-headline text-5xl md:text-6xl font-black mb-8 leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          Start using a faster <span className="text-gradient">communication layer</span>
        </h2>
        <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-xl mx-auto font-light">
          Experience low-cognitive-load communication built for global workflows.
        </p>
        <Link href="#" className="inline-flex items-center justify-center btn-primary-gradient text-on-primary-fixed font-label font-bold text-lg uppercase px-12 py-5 rounded-sm">
          TRY THE OPMUN CORE SYSTEM
        </Link>
      </MotionDiv>
    </section>
  );
}
