import { motion } from "framer-motion";
import { Scissors, Palette, CakeSlice, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const apps = [
  {
    name: "Barber Master Suite",
    desc: "Complete barbershop management \u2014 appointments, clients, services, revenue tracking, and more. Offline-first, bilingual EN/ES.",
    icon: <Scissors className="w-7 h-7 text-blue-400" />,
    color: "blue",
    status: "Live on Google Play",
    statusColor: "text-green-400",
    features: ["Appointment management", "Client profiles", "Revenue reports", "Offline-first"],
    url: "https://barbersuite.realappsolutions.com",
  },
  {
    name: "Barber Desk",
    desc: "Multi-barber shop management with individual barber profiles, client booking system, and detailed analytics per barber.",
    icon: <Scissors className="w-7 h-7 text-indigo-400" />,
    color: "indigo",
    status: "Coming Soon",
    statusColor: "text-amber-400",
    features: ["Multi-barber support", "Client booking", "Per-barber analytics", "PRO subscriptions"],
    url: "https://barberdesk.realappsolutions.com",
  },
  {
    name: "Tattoo Master",
    desc: "Studio management for tattoo artists \u2014 appointments with reference images, consent forms, aftercare instructions, and commission tracking.",
    icon: <Palette className="w-7 h-7 text-rose-400" />,
    color: "rose",
    status: "Coming Soon",
    statusColor: "text-amber-400",
    features: ["Reference image uploads", "Digital consent forms", "Aftercare system", "Commission tracking"],
    url: "https://tattoomaster.realappsolutions.com",
  },
  {
    name: "CakeNutz Calculator",
    desc: "Free bakery cost calculator \u2014 calculate ingredient costs, pricing, and profit margins for cakes and baked goods. 100% offline.",
    icon: <CakeSlice className="w-7 h-7 text-amber-400" />,
    color: "amber",
    status: "Coming Soon",
    statusColor: "text-amber-400",
    features: ["Ingredient cost calculator", "Profit margin analysis", "100% free", "Works offline"],
    url: null,
  },
];

export default function OurApps() {
  return (
    <section id="apps" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-5"
          >
            Our Apps
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
          >
            Apps Built for{" "}
            <span className="text-gradient-primary">Real Businesses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-lg text-muted-foreground"
          >
            Every app in our portfolio was designed to solve a specific problem for a specific type of business. No generic templates.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{app.name}</h3>
                    <span className={`text-xs font-semibold ${app.statusColor}`}>
                      {app.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {app.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {app.features.map((feat, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {app.url && (
                <a
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Visit App <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
