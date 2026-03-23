import { motion } from "framer-motion";
import { Scissors, Cake, Briefcase, Store, Sparkles, Heart } from "lucide-react";

const businessTypes = [
  { icon: <Scissors className="w-6 h-6 text-primary" />, label: "Barbers & Stylists" },
  { icon: <Sparkles className="w-6 h-6 text-primary" />, label: "Nail Techs" },
  { icon: <Cake className="w-6 h-6 text-primary" />, label: "Bakeries & Cake Businesses" },
  { icon: <Heart className="w-6 h-6 text-primary" />, label: "Beauty & Spa Services" },
  { icon: <Briefcase className="w-6 h-6 text-primary" />, label: "Personal Service Providers" },
  { icon: <Store className="w-6 h-6 text-primary" />, label: "Any Local Business" },
];

const useCases = [
  {
    icon: <Scissors className="w-6 h-6 text-primary" />,
    label: "Barbershop",
    title: "Barbershop or Salon",
    desc: "Clients send appointment requests instead of calling. You review and confirm when you're ready — your day stays organized without interruptions.",
  },
  {
    icon: <Cake className="w-6 h-6 text-primary" />,
    label: "Bakery",
    title: "Bakery or Cake Business",
    desc: "Customers browse your menu and submit custom orders with details and pickup time. Everything comes in clean — no messy last-minute calls.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    label: "Beauty & Nails",
    title: "Nail Tech or Beauty Professional",
    desc: "Clients pick a service, send a request, and you respond when ready. Simple scheduling that works the way you actually work.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    label: "Services",
    title: "Any Service Business",
    desc: "Let clients reach you, request services, and share details in one place — instead of scattered texts and phone tags.",
  },
];

export default function Trust() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white"
          >
            Built For Small Business Owners{" "}
            <span className="text-gradient-primary">Like You</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            If you run a local business and want clients to be able to find, reach, and book you easier — this is made for you.
          </p>
        </div>

        {/* Business type pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {businessTypes.map((type, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-card border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              {type.icon}
              <span className="text-sm font-semibold text-white">{type.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Use case cards */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
            See How It Works For{" "}
            <span className="text-gradient-primary">Your Type of Business</span>
          </h3>
          <p className="text-muted-foreground">Real scenarios, real results.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card rounded-2xl p-6 border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-1">{item.label}</p>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
