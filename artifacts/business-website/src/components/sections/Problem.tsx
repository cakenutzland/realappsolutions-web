import { motion } from "framer-motion";
import { PhoneMissed, BrainCircuit, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: <PhoneMissed className="w-8 h-8 text-rose-400" />,
    title: "Clients Can't Reach You Easily",
    desc: "When someone wants to book or order, they want to do it now — from their phone. If you're hard to reach, they move on to someone else.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-amber-400" />,
    title: "No System, Everything's Scattered",
    desc: "Juggling appointments, orders, and client info across calls, texts, and notes is exhausting. Things fall through the cracks — and it costs you.",
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-slate-400" />,
    title: "Your Business Looks Behind",
    desc: "People judge businesses by how easy they are to use. No app, no online booking, no organized system — clients quietly go to competitors who have it together.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-background border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Stop Losing Clients Because{" "}
            <span className="text-rose-500">You Don't Have an App</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every day, people search, compare, and book online. If your business isn't easy to reach from a phone, you're losing customers to businesses that are. We fix that.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
