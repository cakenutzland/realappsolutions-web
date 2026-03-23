import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Diseñamos Tu App",
    desc: "Cuéntanos sobre tu negocio y lo que necesitas. Nosotros nos encargamos de todo — diseño, configuración y marca — basándonos en tu negocio.",
    detail: "Sin formularios complicados, sin decisiones técnicas. Solo una conversación.",
  },
  {
    number: "02",
    title: "Tú La Revisas y Apruebas",
    desc: "Te mostramos tu app antes de publicarla. Nos das retroalimentación, hacemos los ajustes, y la apruebas cuando estés satisfecho.",
    detail: "Tú tienes el control sin necesidad de tocar una sola línea de código.",
  },
  {
    number: "03",
    title: "Empiezas a Recibir Clientes",
    desc: "Tu app se publica y los clientes pueden empezar a reservar, hacer pedidos o contactarte de inmediato — directamente desde la app.",
    detail: "Lista para usar desde el primer día. Sin onboarding complicado.",
  },
];

export default function ProcessEs() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-5"
          >
            Proceso Simple
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Obtén Tu App en{" "}
            <span className="text-gradient-primary">3 Simples Pasos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Desde la primera conversación hasta la app en vivo — lo hacemos simple, rápido y sin estrés.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative flex flex-col gap-5"
            >
              <div className="bg-card rounded-3xl p-8 border border-white/8 hover:border-primary/20 transition-all h-full flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-display font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                </div>

                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  <p className="text-sm text-white/40 italic mt-auto">{step.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="h-14 px-10 text-base font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_-10px_rgba(51,133,255,0.6)] hover:-translate-y-0.5 transition-all"
          >
            Reserva Tu Lugar →
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">Un proyecto a la vez. Dedicación total al tuyo.</p>
        </motion.div>

      </div>
    </section>
  );
}
