import { motion } from "framer-motion";
import { Check, Smartphone, Globe, Calculator, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    icon: <Smartphone className="w-7 h-7 text-primary" />,
    name: "Mobile Apps",
    desc: "Custom installable apps for small businesses — so your clients can book, order, and reach you from their phone.",
    examples: ["Barbershops & Salons", "Car Washes", "Bakeries & Cake Businesses", "Nail Techs & Beauty Services"],
    color: "primary",
  },
  {
    icon: <Globe className="w-7 h-7 text-indigo-400" />,
    name: "Professional Websites",
    desc: "High-converting business websites built to look credible, load fast, and turn visitors into paying clients.",
    examples: ["Service business landing pages", "Portfolio & booking sites", "Local business web presence", "Multi-page business sites"],
    color: "indigo",
  },
  {
    icon: <Calculator className="w-7 h-7 text-emerald-400" />,
    name: "Calculators & Digital Tools",
    desc: "Interactive tools that help your business generate leads, quote prices, and close clients automatically.",
    examples: ["Price & quote calculators", "Lead generation tools", "Product configurators", "Booking cost estimators"],
    color: "emerald",
  },
  {
    icon: <Layers className="w-7 h-7 text-violet-400" />,
    name: "SaaS Products",
    desc: "Full software platforms built for your specific industry — subscription-based, multi-user, and scalable.",
    examples: ["Subscription web platforms", "Client management systems", "Industry-specific software", "Custom workflow tools"],
    color: "violet",
  },
];

const pricingModels = [
  {
    name: "One-Time Build",
    badge: null,
    price: "$259",
    priceSuffix: "starter / $499 business",
    desc: "Pay once, own it forever. No recurring fees for the build itself.",
    note: "I work with one client at a time to guarantee quality and full dedication.",
    urgency: true,
    features: [
      "Full app or website built for your business",
      "Your branding, colors, and content",
      "Installable on any phone (no app store needed)",
      "Delivered and ready to use",
    ],
    popular: true,
    ctaLabel: "Start My Build",
  },
  {
    name: "Monthly Maintenance",
    badge: "Add-On",
    price: "From $49",
    priceSuffix: "/ month",
    desc: "Keep your product updated, live, and running smoothly every month.",
    note: "Add to any one-time build.",
    urgency: false,
    features: [
      "Hosting & uptime monitoring",
      "Content & menu updates",
      "Bug fixes and small improvements",
      "Priority email support",
    ],
    popular: false,
    ctaLabel: "Ask About Maintenance",
  },
  {
    name: "App Subscription",
    badge: "All-Inclusive",
    price: "From $99",
    priceSuffix: "/ month",
    desc: "Get your app built and maintained under one ongoing monthly plan — no large upfront cost.",
    note: "Great if you prefer spreading costs over time.",
    urgency: false,
    features: [
      "App built and delivered",
      "Hosting & maintenance included",
      "Monthly feature updates",
      "Ongoing support",
    ],
    popular: false,
    ctaLabel: "Ask About Subscription",
  },
  {
    name: "Combined Package",
    badge: "Custom",
    price: "Let's Talk",
    priceSuffix: "",
    desc: "A tailored bundle of build + maintenance + features for larger or more complex projects.",
    note: "For businesses with specific or growing needs.",
    urgency: false,
    features: [
      "Everything in Business Build",
      "Custom feature development",
      "Multi-platform delivery",
      "Dedicated support & reporting",
    ],
    popular: false,
    ctaLabel: "Get a Custom Quote",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 border-primary/20",
  indigo: "bg-indigo-500/10 border-indigo-500/20",
  emerald: "bg-emerald-500/10 border-emerald-500/20",
  violet: "bg-violet-500/10 border-violet-500/20",
};

export default function Services() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── WHAT WE BUILD ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-5"
          >
            What We Build
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Four Types of Digital Products,{" "}
            <span className="text-gradient-primary">One Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Whether you need an app, a website, a tool, or a full platform — we build it right.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {serviceCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="bg-card rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all flex flex-col gap-4 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${colorMap[cat.color]} group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cat.desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {cat.examples.map((ex, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-white/50">
                      <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── HOW WE PRICE IT ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/8 border border-primary/15 text-white/80 text-sm font-medium mb-6"
          >
            <span className="text-primary text-lg">💡</span>
            Instead of paying monthly subscription fees forever — own your product with a single one-time payment.
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Flexible Pricing,{" "}
            <span className="text-gradient-primary">Real Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-6"
          >
            Pick the model that fits how you want to work with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            ⚡ 1 client at a time — full dedication to every project
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {pricingModels.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative bg-card rounded-3xl p-7 flex flex-col h-full border ${
                plan.popular
                  ? "border-primary shadow-2xl shadow-primary/10 lg:-translate-y-3"
                  : "border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </div>
              )}
              {plan.badge && !plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-white/20 text-white/70 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-3xl font-display font-bold text-white">{plan.price}</span>
                  {plan.priceSuffix && (
                    <span className="text-muted-foreground text-xs font-medium">{plan.priceSuffix}</span>
                  )}
                </div>
                <p className={`mt-2 text-xs font-medium ${plan.popular ? "text-primary" : "text-muted-foreground"}`}>
                  {plan.note}
                </p>
                {plan.urgency && (
                  <p className="mt-1.5 text-xs text-amber-400/80 font-medium">⚡ One project at a time — quality guaranteed</p>
                )}
              </div>

              <div className="flex-grow space-y-3 mb-6">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-xs leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToContact}
                variant={plan.popular ? "default" : "outline"}
                className={`w-full py-5 rounded-xl font-semibold text-sm ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "border-white/10 hover:bg-white/5 text-white"
                }`}
              >
                {plan.ctaLabel}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">No commitment required.</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
