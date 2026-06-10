import Link from "next/link";
import { ArrowRight, Layers, FileCode2, TestTube2, GitBranch, Globe2 } from "lucide-react";
import { StaggerWrapper, FadeUpWrapper } from "@/components/shared/animation-wrappers";

export function Governance() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
      <StaggerWrapper className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <FadeUpWrapper className="font-headline text-3xl md:text-4xl font-bold mb-6">System Architecture & Governance</FadeUpWrapper>
            <FadeUpWrapper className="text-on-surface-variant text-lg leading-relaxed">
              OPMUN operates on a structured engineering model. The core syntax is managed via a BDFL (Benevolent Dictator for Life) model to prevent feature creep, while expansions are community-driven.
            </FadeUpWrapper>
          </div>
          <FadeUpWrapper>
            <Link href="#" className="group btn-glass flex items-center justify-center gap-2 text-on-surface font-label font-bold text-xs uppercase px-6 py-3 rounded-sm transition-all duration-300">
              VIEW GITHUB REPOSITORY
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-primary transition-all" />
            </Link>
          </FadeUpWrapper>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <FadeUpWrapper className="glass-card p-10 rounded-2xl border border-primary/20 bg-primary/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Layers className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-2xl font-bold">The Core System</h3>
            </div>
            <p className="text-on-surface-variant mb-6">Strictly limited to <strong className="text-primary font-bold">300–500 words</strong>.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-on-surface-variant"><span className="text-primary">✓</span> Survival and basic communication</li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant"><span className="text-primary">✓</span> Travel logistics and daily interaction</li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant"><span className="text-primary">✓</span> Global meetings overhead</li>
            </ul>
          </FadeUpWrapper>

          <FadeUpWrapper className="glass-card p-10 rounded-2xl border border-secondary/20 bg-secondary/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <FileCode2 className="text-secondary w-6 h-6" />
              </div>
              <h3 className="font-headline text-2xl font-bold">The Expansion Packs</h3>
            </div>
            <p className="text-on-surface-variant mb-6">Uncapped capacity (<strong className="text-secondary font-bold">700+ words</strong>), community proposed.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-on-surface-variant"><span className="text-secondary">✓</span> Domain-specific vocabulary (medical, engineering)</li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant"><span className="text-secondary">✓</span> Cultural variation and localized slang</li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant"><span className="text-secondary">✓</span> Advanced technical usage</li>
            </ul>
          </FadeUpWrapper>
        </div>

        <h4 className="font-headline text-2xl font-bold mb-8 text-center pt-8 border-t border-outline-variant/10">Contribution Requirements</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeUpWrapper className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10">
            <TestTube2 className="text-primary w-6 h-6 mb-4" />
            <h6 className="font-bold text-lg mb-2">Clarity & Simplicity Tests</h6>
            <p className="text-on-surface-variant text-sm leading-relaxed">Proposed changes must be measurably simpler to learn and parse than their English equivalents.</p>
          </FadeUpWrapper>
          <FadeUpWrapper className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10">
            <Globe2 className="text-primary w-6 h-6 mb-4" />
            <h6 className="font-bold text-lg mb-2">Cross-Language Usability</h6>
            <p className="text-on-surface-variant text-sm leading-relaxed">Pronunciation and grammar must remain accessible regardless of the speaker&apos;s native language background.</p>
          </FadeUpWrapper>
          <FadeUpWrapper className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10">
            <GitBranch className="text-primary w-6 h-6 mb-4" />
            <h6 className="font-bold text-lg mb-2">Strict Versioning (SemVer)</h6>
            <p className="text-on-surface-variant text-sm leading-relaxed">The language is versioned like software (v0, v1, v2) to ensure backward compatibility and predictable upgrades.</p>
          </FadeUpWrapper>
        </div>
      </StaggerWrapper>
    </section>
  );
}
