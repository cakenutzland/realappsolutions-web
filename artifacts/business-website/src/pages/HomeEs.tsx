import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroEs from "@/components/sections/es/Hero";
import ProblemEs from "@/components/sections/es/Problem";
import SolutionEs from "@/components/sections/es/Solution";
import TrustEs from "@/components/sections/es/Trust";
import ProcessEs from "@/components/sections/es/Process";
import ServicesEs from "@/components/sections/es/Services";
import DemoEs from "@/components/sections/es/Demo";
import MicroCtaEs from "@/components/sections/es/MicroCta";
import CtaEs from "@/components/sections/es/Cta";
import ContactEs from "@/components/sections/es/Contact";

export default function HomeEs() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />

      <main>
        <HeroEs />
        <ProblemEs />
        <SolutionEs />
        <TrustEs />
        <ProcessEs />
        <ServicesEs />
        <DemoEs />
        <MicroCtaEs />
        <CtaEs />
        <ContactEs />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
