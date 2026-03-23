import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "We Design Your App",
    desc: "Tell us about your business and what you need. We handle everything — design, setup, and branding — based on your business.",
    detail: "No forms to fill out, no tech decisions to make. Just a conversation.",
  },
  {
    number: "02",
    title: "You Review and Approve",
    desc: "We show you your app before it goes live. You give feedback, we make adjustments, and you approve when you're happy.",
    detail: "You stay in control without needing to touch a single line of code.",
  },
  {
    number: "03",
    title: "You Start Getting Clients",
    desc: "Your app goes live and clients can start booking, ordering, or reaching out right away — directly through your app.",
    detail: "Ready to use from day one. No complicated onboarding.",
  },
];

export default function Process() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-5"
          >
            Simple Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Get Your App in{" "}
            <span className="text-gradient-primary">3 Simple Steps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From first conversation to live app — we keep it simple, fast, and stress-free.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative flex flex-col gap-5"
            >
              {/* Connector line between steps (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-primary/30 to-primary/10 -translate-y-1/2" style={{ width: "calc(100% - 2rem)", left: "calc(100% + 1rem)" }} />
              )}

              <div className="bg-card rounded-3xl p-8 border border-white/8 hover:border-primary/20 transition-all h-full flex flex-col gap-5">
                {/* Number badge */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-display font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                </div>

                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  <p className="text-sm text-white/40 italic mt-auto">{step.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="h-14 px-10 text-base font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_-10px_rgba(51,133,255,0.6)] hover:-translate-y-0.5 transition-all"
          >
            Claim Your Spot →
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">One project at a time. Full dedication to yours.</p>
        </motion.div>

      </div>
    </section>
  );
}
