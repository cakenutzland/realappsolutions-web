import { motion } from "framer-motion";
import { PhoneMissed, BrainCircuit, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: <PhoneMissed className="w-8 h-8 text-rose-400" />,
    title: "Los Clientes No Te Pueden Contactar Fácilmente",
    desc: "Cuando alguien quiere reservar o hacer un pedido, lo quiere hacer ahora — desde su teléfono. Si es difícil contactarte, se van con otra persona.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-amber-400" />,
    title: "Sin Sistema, Todo Está Disperso",
    desc: "Manejar citas, pedidos e información de clientes entre llamadas, mensajes y notas es agotador. Las cosas se pierden — y eso te cuesta dinero.",
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-slate-400" />,
    title: "Tu Negocio Se Ve Atrasado",
    desc: "La gente juzga los negocios por lo fácil que son de usar. Sin app, sin reservas en línea, sin sistema organizado — los clientes se van a la competencia.",
  },
];

export default function ProblemEs() {
  return (
    <section id="problem" className="py-24 bg-background border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Deja de Perder Clientes Porque{" "}
            <span className="text-rose-500">No Tienes una App</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada día, las personas buscan, comparan y reservan en línea. Si tu negocio no es fácil de alcanzar desde un teléfono, estás perdiendo clientes ante negocios que sí lo son. Nosotros lo solucionamos.
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
