import { motion } from "framer-motion";
import { Code2, Palette, Store, Globe2 } from "lucide-react";

const highlights = [
  {
    icon: <Store className="w-5 h-5 text-primary" />,
    text: "Years of hands-on small business experience",
  },
  {
    icon: <Palette className="w-5 h-5 text-primary" />,
    text: "Every logo & brand identity designed in-house",
  },
  {
    icon: <Code2 className="w-5 h-5 text-primary" />,
    text: "Growing portfolio on Google Play Store",
  },
  {
    icon: <Globe2 className="w-5 h-5 text-primary" />,
    text: "Bilingual: English & Spanish",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest w-fit">
              About Us
            </div>

            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">
              Built by Someone Who Knows{" "}
              <span className="text-gradient-primary">What It Takes</span>
            </h2>

            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Real App Solutions was founded by Leo, a Naples-based entrepreneur
                who\u2019s spent years in the trenches of small business \u2014 from running
                a professional bakery to designing brands from scratch.
              </p>
              <p>
                That real-world experience is what drives everything we build. No
                corporate fluff. No overcomplicated tech. Just practical digital
                products that solve real problems for real businesses.
              </p>
              <p>
                Today, NutzLabs \u2014 our indie app studio \u2014 has a growing portfolio
                of published apps on Google Play Store, serving barbershops, tattoo
                studios, bakeries, auto shops, and other service businesses. Every
                logo, brand identity, and product concept is designed and directed
                in-house.
              </p>
              <p className="text-white font-semibold text-lg">
                We don\u2019t outsource your vision. We build it with you.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 bg-card rounded-2xl p-5 border border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  {item.icon}
                </div>
                <span className="text-white/90 font-medium">{item.text}</span>
              </motion.div>
            ))}

            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-indigo-500/10 border border-primary/20">
              <p className="text-sm text-white/70 leading-relaxed">
                <span className="text-primary font-bold">Based in Southwest Florida</span>
                {" "}\u2014 One client at a time, full dedication to every project.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
