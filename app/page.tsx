import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { ROI } from "@/components/roi";
import { Charter } from "@/components/charter";
import { UseCases } from "@/components/usecases";
import { Governance } from "@/components/governance";
import { Roadmap } from "@/components/roadmap";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="pt-24">
      <Navbar />
      <Hero />
      <Problem />
      <ROI />
      <Charter />
      <UseCases />
      <Governance />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  );
}
