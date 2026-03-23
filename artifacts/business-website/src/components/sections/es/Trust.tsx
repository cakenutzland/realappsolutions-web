import { motion } from "framer-motion";
import { Scissors, Cake, Briefcase, Store, Sparkles, Heart } from "lucide-react";

const businessTypes = [
  { icon: <Scissors className="w-6 h-6 text-primary" />, label: "Barberías y Salones" },
  { icon: <Sparkles className="w-6 h-6 text-primary" />, label: "Técnicas de Uñas" },
  { icon: <Cake className="w-6 h-6 text-primary" />, label: "Panaderías y Repostería" },
  { icon: <Heart className="w-6 h-6 text-primary" />, label: "Belleza y Spa" },
  { icon: <Briefcase className="w-6 h-6 text-primary" />, label: "Servicios Personales" },
  { icon: <Store className="w-6 h-6 text-primary" />, label: "Cualquier Negocio Local" },
];

const useCases = [
  {
    icon: <Scissors className="w-6 h-6 text-primary" />,
    label: "Barbería",
    title: "Barbería o Salón",
    desc: "Los clientes envían solicitudes de cita sin llamar. Tú revisas y confirmas cuando estás listo — tu día se mantiene organizado sin interrupciones.",
  },
  {
    icon: <Cake className="w-6 h-6 text-primary" />,
    label: "Panadería",
    title: "Panadería o Repostería",
    desc: "Los clientes exploran tu menú y hacen pedidos personalizados con detalles y hora de recogida. Todo llega claro, sin llamadas de último momento.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    label: "Belleza y Uñas",
    title: "Técnica de Uñas o Esteticista",
    desc: "Los clientes eligen un servicio, envían una solicitud y tú respondes cuando estás lista. Agenda simple que funciona como tú trabajas.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    label: "Servicios",
    title: "Cualquier Negocio de Servicios",
    desc: "Deja que los clientes te contacten, soliciten servicios y compartan detalles en un solo lugar — en vez de mensajes y llamadas dispersas.",
  },
];

export default function TrustEs() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white"
          >
            Diseñada Para Dueños de Negocios{" "}
            <span className="text-gradient-primary">Como Tú</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            Si tienes un negocio local y quieres que los clientes puedan encontrarte, contactarte y reservar más fácilmente — esto está hecho para ti.
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

        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
            Así Funciona Para{" "}
            <span className="text-gradient-primary">Tu Tipo de Negocio</span>
          </h3>
          <p className="text-muted-foreground">Escenarios reales, resultados reales.</p>
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
