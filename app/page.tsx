import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { ROI } from "@/components/sections/roi";
import { Charter } from "@/components/sections/charter";
import { UseCases } from "@/components/sections/usecases";
import { Governance } from "@/components/sections/governance";
import { Roadmap } from "@/components/sections/roadmap";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";

export default function Page() {
  return (
    <main>
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
