import { Globe2, Users2, PlaneTakeoff, MessageSquare } from "lucide-react";
import { StaggerWrapper, FadeUpWrapper } from "@/components/animation-wrappers";

export function UseCases() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <StaggerWrapper className="max-w-7xl mx-auto px-8">
        <FadeUpWrapper className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-4">Designed for the Real World</h2>
          <p className="text-on-surface-variant text-lg">
            OPMUN is a lightweight infrastructure layer, built for environments where clarity and speed matter more than cultural nuance.
          </p>
        </FadeUpWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeUpWrapper className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users2 className="text-primary w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg mb-2">International Teams</h4>
            <p className="text-on-surface-variant text-sm">Level the playing field for distributed teams, reducing miscommunications and translation lag in async work.</p>
          </FadeUpWrapper>

          <FadeUpWrapper className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe2 className="text-primary w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg mb-2">Conference Speaking</h4>
            <p className="text-on-surface-variant text-sm">Present complex technical ideas to global audiences without worrying about idiomatic misunderstandings.</p>
          </FadeUpWrapper>

          <FadeUpWrapper className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PlaneTakeoff className="text-primary w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg mb-2">Global Travel</h4>
            <p className="text-on-surface-variant text-sm">A dependable fallback layer for navigation, logistics, and basic survival communication anywhere.</p>
          </FadeUpWrapper>

          <FadeUpWrapper className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="text-primary w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg mb-2">Quick Explanations</h4>
            <p className="text-on-surface-variant text-sm">Bypass complex grammatical structures to transmit core intent instantly during critical situations.</p>
          </FadeUpWrapper>
        </div>
      </StaggerWrapper>
    </section>
  );
}
