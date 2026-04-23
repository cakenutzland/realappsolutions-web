import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Trust from "@/components/sections/Trust";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import OurApps from "@/components/sections/OurApps";
import Demo from "@/components/sections/Demo";
import About from "@/components/sections/About";
import MicroCta from "@/components/sections/MicroCta";
import Cta from "@/components/sections/Cta";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Trust />
        <Process />
        <Services />
        <OurApps />
        <Demo />
        <About />
        <MicroCta />
        <Cta />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
