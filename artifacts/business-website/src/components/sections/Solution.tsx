import { motion } from "framer-motion";
import { CalendarCheck, CreditCard, Users, Star, Clock } from "lucide-react";

const benefits = [
  {
    icon: <CalendarCheck className="w-6 h-6 text-primary" />,
    title: "Get More Bookings — Without Answering Calls",
    desc: "Clients send appointment or order requests directly through your app. You review and confirm when you're ready. No back-and-forth, no missed calls.",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Let Clients Reach You 24/7",
    desc: "Your app works around the clock. Clients can browse your services and send requests at any hour — even when you're busy or closed.",
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "Look Professional and Modern",
    desc: "Your own branded app instantly signals that you're a serious, established business — not just a social media page.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Keep Everything in One Place",
    desc: "Client info, requests, and service details — all organized. No more sticky notes, scattered DMs, or forgotten orders.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: "Share Your Preferred Payment Method",
    desc: "Let clients know how to pay you — Zelle, Cash App, Venmo, or in person. You pick what works. No complicated payment setup required.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:sticky lg:top-28"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              What Your App <br/><span className="text-gradient-primary">Will Do For You</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We don't just build pretty apps. We build tools that help your business get more clients, stay organized, and look professional — starting day one.
            </p>
            <div className="mt-2 p-4 rounded-2xl bg-white/3 border border-white/8 text-sm text-muted-foreground leading-relaxed">
              <span className="text-white/60 font-medium">Note on payments:</span> We set up your app to display your preferred payment method (Zelle, CashApp, Venmo, etc.) so clients know how to pay. Full in-app payment processing can be added later if needed.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex gap-4 bg-card rounded-2xl p-6 border border-white/5 hover:border-primary/20 hover:bg-primary/3 transition-all group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
