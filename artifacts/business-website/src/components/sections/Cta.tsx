import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Cta() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary/5 border-y border-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card/50 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-8">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
            1 client at a time — reach out before I start the next
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Get <br />
            <span className="text-gradient-primary">More Clients?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto">
            Stop relying only on social media. Own your platform. Grow your business.
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto">
            We build your app in days — not months. No tech skills needed on your end. Just tell us about your business and we handle the rest.
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="text-lg h-14 px-10 font-bold rounded-full bg-primary hover:bg-white hover:text-black transition-colors shadow-[0_0_40px_-10px_rgba(51,133,255,0.8)]"
          >
            Get My App Today →
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Quick to get started. No commitment required.</p>
        </motion.div>
      </div>
    </section>
  );
}
