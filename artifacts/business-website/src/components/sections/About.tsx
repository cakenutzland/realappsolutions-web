import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Award-winning industry experts",
  "Tailored strategies for your niche",
  "Commitment to sustainable growth",
  "24/7 dedicated support team"
];

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">About Apex</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              We Don't Just Adapt to Change. We Drive It.
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded on the principles of innovation and integrity, Apex Solutions has grown from a boutique consultancy into a global leader in business transformation.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to empower organizations with the tools, strategies, and insights they need to not just survive, but dominate in their respective markets.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="px-8 shadow-md" asChild>
              <a href="#contact">Learn More About Us</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image Wrapper */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-team.png`} 
                alt="Our professional team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-card p-6 rounded-2xl shadow-xl border border-border/50 hidden sm:block">
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-primary">{stat.value}</span>
                    <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Mobile Stats (visible when absolute stats are hidden) */}
          <div className="grid grid-cols-3 gap-4 sm:hidden pt-8 border-t border-border">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-center">
                <span className="text-2xl font-display font-bold text-primary">{stat.value}</span>
                <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
