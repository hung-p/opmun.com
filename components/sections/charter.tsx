import Image from "next/image";
import { Zap, Volume2, Gauge, Heart } from "lucide-react";
import { StaggerWrapper, FadeUpWrapper, MotionDiv } from "@/components/shared/animation-wrappers";

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
          className="lg:col-span-6 aspect-square max-w-md md:max-w-xl lg:max-w-none mx-auto w-full bg-surface-container-low relative overflow-hidden group rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            alt="high-tech satellite view of earth at night showing interconnected glowing city lights and digital data stream overlays in bright cyan" 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="/images/home/earth_night.jpg"
            fill
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border border-primary/20 flex items-center justify-center rounded-full animate-[spin_20s_linear_infinite]">
              <div className="w-48 h-48 border border-secondary/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
                <svg aria-hidden="true" className="text-primary-container" fill="none" height="40" viewBox="0 0 24 24" width="40">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                  <rect fill="currentColor" height="2" width="20" x="2" y="11"></rect>
                </svg>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
