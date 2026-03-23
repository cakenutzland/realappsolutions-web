import { motion } from "framer-motion";
import { CalendarCheck, CreditCard, Users, Star, Clock } from "lucide-react";

const benefits = [
  {
    icon: <CalendarCheck className="w-6 h-6 text-primary" />,
    title: "Consigue Más Citas — Sin Contestar Llamadas",
    desc: "Los clientes envían solicitudes de cita u orden directamente desde tu app. Tú revisas y confirmas cuando estás listo. Sin idas y venidas, sin llamadas perdidas.",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Recibe Clientes las 24 Horas",
    desc: "Tu app funciona todo el tiempo. Los clientes pueden ver tus servicios y enviar solicitudes a cualquier hora — incluso cuando estás ocupado o cerrado.",
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "Luce Profesional y Moderno",
    desc: "Tu propia app con tu marca te posiciona como un negocio serio y establecido — no solo una página de redes sociales.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Mantén Todo Organizado en un Solo Lugar",
    desc: "Información de clientes, solicitudes y detalles de servicio — todo ordenado. Sin notas dispersas, mensajes perdidos u órdenes olvidadas.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: "Comparte Tu Método de Pago Preferido",
    desc: "Dile a los clientes cómo pagarte — Zelle, Cash App, Venmo o en persona. Tú decides. Sin configuraciones complicadas de pagos.",
  },
];

export default function SolutionEs() {
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
              Lo Que Tu App{" "}
              <br /><span className="text-gradient-primary">Hará Por Ti</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              No solo construimos apps bonitas. Construimos herramientas que ayudan a tu negocio a conseguir más clientes, mantenerse organizado y lucir profesional — desde el primer día.
            </p>
            <div className="mt-2 p-4 rounded-2xl bg-white/3 border border-white/8 text-sm text-muted-foreground leading-relaxed">
              <span className="text-white/60 font-medium">Nota sobre pagos:</span> Configuramos tu app para mostrar tu método de pago preferido (Zelle, CashApp, Venmo, etc.) para que los clientes sepan cómo pagarte. Integraciones de pago avanzadas se pueden agregar más adelante si las necesitas.
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
