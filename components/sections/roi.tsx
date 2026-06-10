import { CheckCircle2, Award, Clock, HelpCircle, ShieldAlert } from "lucide-react";
import { StaggerWrapper, FadeUpWrapper } from "@/components/shared/animation-wrappers";

export function ROI() {
  const metrics = [
    {
      title: "Learning curve",
      icon: <Clock className="w-5 h-5 text-primary" />,
      english: "~1,500 Hours",
      opmun: "~80 Hours",
      highlight: "94% faster",
    },
    {
      title: "Irregular verbs",
      icon: <ShieldAlert className="w-5 h-5 text-[#ffb4ab]" />,
      english: "200+ Exceptions",
      opmun: "0 (None)",
      highlight: "Standardized",
    },
    {
      title: "Vocabulary scope",
      icon: <Award className="w-5 h-5 text-secondary" />,
      english: "3,000+ Words",
      opmun: "300–500 Words",
      highlight: "Optimized",
    },
    {
      title: "Phonetic rules",
      icon: <HelpCircle className="w-5 h-5 text-[#9cf0ff]" />,
      english: "80% Irregular",
      opmun: "100% Consistent",
      highlight: "1:1 Mapping",
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
      <StaggerWrapper className="max-w-7xl mx-auto px-4 sm:px-8">
        <FadeUpWrapper className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block font-label text-xs text-secondary uppercase tracking-widest mb-4 bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
            Practical ROI
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6">Why OPMUN Exists</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            OPMUN isn&apos;t about replacing your culture. It&apos;s about reducing the cognitive tax of global communication. We eliminate the memorization traps so you can focus on the message, not the medium.
          </p>
        </FadeUpWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Text and Comparison Cases */}
          <FadeUpWrapper className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-primary w-6 h-6" />
                Cognitive Load Reduction
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                By standardizing patterns, OPMUN dramatically reduces the time spent learning exceptions. Fewer grammatical rules mean faster fluency and higher confidence for non-native speakers in high-stakes environments.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-high/50 border border-outline-variant/20 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-error font-bold text-lg">×</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm mb-1">The English Way (High Overhead)</h4>
                  <p className="text-on-surface-variant text-xs font-mono opacity-80 bg-black/20 px-2 py-1 rounded inline-block">go → went → gone</p>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">Requires memorizing three entirely different phonetic structures for a single concept.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm mb-1">The OPMUN Way (Standardized)</h4>
                  <p className="text-primary text-xs font-mono opacity-90 bg-primary/10 px-2 py-1 rounded inline-block border border-primary/20">I go store → I <span className="font-bold underline">past</span> go store</p>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">Base verbs never change. Tense is handled by a simple, optional marker. Zero conjugation memorization.</p>
                </div>
              </div>
            </div>
          </FadeUpWrapper>

          {/* Right Side: High Fidelity Comparison Dashboard Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-secondary/5 blur-3xl rounded-full pointer-events-none"></div>
            
            {metrics.map((metric) => (
              <FadeUpWrapper 
                key={metric.title}
                className="relative glass-card p-6 rounded-2xl border border-white/5 bg-[#1e2024]/40 flex flex-col justify-between group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/[0.01] rounded-bl-full group-hover:bg-primary/5 transition-colors duration-300"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                    {metric.icon}
                  </div>
                  <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-[#bac9cc]">{metric.title}</h4>
                </div>

                <div className="space-y-3 mb-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#849396]">Legacy Standard:</span>
                    <span className="text-error/80 font-mono font-bold">{metric.english}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                    <span className="text-on-surface-variant font-bold">Opmun protocol:</span>
                    <span className="text-primary font-mono font-bold text-sm drop-shadow-[0_0_8px_rgba(0,229,255,0.2)]">{metric.opmun}</span>
                  </div>
                </div>

                <div className="mt-2 text-center">
                  <span className="inline-block font-label text-[9px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 font-bold group-hover:bg-primary/20 transition-all duration-300">
                    {metric.highlight}
                  </span>
                </div>
              </FadeUpWrapper>
            ))}
          </div>
        </div>
      </StaggerWrapper>
    </section>
  );
}
