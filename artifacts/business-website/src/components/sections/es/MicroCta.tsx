import { motion } from "framer-motion";

const reasons = [
  { emoji: "🚫", text: "Dejar de perder clientes que no pueden contactarte" },
  { emoji: "✨", text: "Lucir más profesional que tu competencia" },
  { emoji: "📈", text: "Hacer crecer tu negocio sin trabajar más duro" },
];

export default function MicroCtaEs() {
  return (
    <section className="py-16 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              Esto Es Para Ti Si Quieres:
            </h2>
            <p className="text-muted-foreground text-sm">¿Te suena familiar? Estás en el lugar correcto.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 max-w-xs mx-auto sm:mx-0 flex flex-col items-center gap-3 bg-card border border-white/8 rounded-2xl p-6 hover:border-primary/20 transition-colors"
              >
                <span className="text-3xl">{item.emoji}</span>
                <p className="text-white font-semibold text-sm text-center leading-snug">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
