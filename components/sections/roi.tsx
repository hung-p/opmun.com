import { ArrowRight, CheckCircle2 } from "lucide-react";
import { StaggerWrapper, FadeUpWrapper } from "@/components/shared/animation-wrappers";

export function ROI() {
  return (
    <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
      <StaggerWrapper className="max-w-7xl mx-auto px-8">
        <FadeUpWrapper className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block font-label text-xs text-secondary uppercase tracking-widest mb-4 bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
            Practical ROI
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6">Why OPMUN Exists</h2>
          <p className="text-on-surface-variant text-lg">
            OPMUN isn&apos;t about replacing your culture. It&apos;s about reducing the cognitive tax of global communication. We eliminate the memorization traps so you can focus on the message, not the medium.
          </p>
        </FadeUpWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeUpWrapper className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-primary w-6 h-6" />
                Cognitive Load Reduction
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                By standardizing patterns, OPMUN dramatically reduces the time spent learning exceptions. Fewer grammatical rules mean faster fluency and higher confidence for non-native speakers in high-stakes environments.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-high border border-outline-variant/20">
                <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-error font-bold text-lg">×</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-1">The English Way (High Overhead)</h4>
                  <p className="text-on-surface-variant text-sm font-mono opacity-80">go → went → gone</p>
                  <p className="text-xs text-on-surface-variant mt-2">Requires memorizing three entirely different phonetic structures for a single concept.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-1">The OPMUN Way (Standardized)</h4>
                  <p className="text-on-surface-variant text-sm font-mono opacity-80">I go store → I <span className="text-primary font-bold">past</span> go store</p>
                  <p className="text-xs text-on-surface-variant mt-2">Base verbs never change. Tense is handled by a simple, optional marker. Zero conjugation memorization.</p>
                </div>
              </div>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
            <div className="relative glass-card p-8 rounded-2xl border border-outline-variant/20">
              <h4 className="font-headline text-xl font-bold mb-6 text-center">The Standardization Yield</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-on-surface-variant">Zero irregular verbs to memorize</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-on-surface-variant">Consistent spelling-to-sound rules</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-on-surface-variant">Predictable word order</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-on-surface-variant">Reduced anxiety in professional settings</span>
                </li>
              </ul>
            </div>
          </FadeUpWrapper>
        </div>
      </StaggerWrapper>
    </section>
  );
}
