import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL;

const screenshots = [
  {
    src: `${BASE}images/screenshots/home-dashboard.jpeg`,
    caption: "Panel de ingresos en tiempo real",
    sub: "Ingresos del día, citas y quién sigue en turno",
  },
  {
    src: `${BASE}images/screenshots/schedule-screen.jpeg`,
    caption: "Vista diaria del horario",
    sub: "Cronograma completo con pago de un toque",
  },
  {
    src: `${BASE}images/screenshots/booking-modal.jpeg`,
    caption: "Sistema de reservas en línea",
    sub: "Los clientes pueden solicitar citas 24/7 — sin llamadas",
  },
  {
    src: `${BASE}images/screenshots/clients-list.jpeg`,
    caption: "Base de datos de clientes",
    sub: "Cada cliente, visitas y contacto en un lugar",
  },
  {
    src: `${BASE}images/screenshots/client-detail.jpeg`,
    caption: "Perfiles completos de clientes",
    sub: "Preferencias, notas del barbero e historial",
  },
  {
    src: `${BASE}images/screenshots/services-menu.jpeg`,
    caption: "Control de servicios y precios",
    sub: "Actualiza tu menú y tarifas cuando quieras",
  },
  {
    src: `${BASE}images/screenshots/reports-analytics.jpeg`,
    caption: "Reportes y análisis de rendimiento",
    sub: "Ingresos, citas y ticket promedio de un vistazo",
  },
  {
    src: `${BASE}images/screenshots/splash-screen.jpeg`,
    caption: "Pantalla de inicio personalizada",
    sub: "Tu logo, tus colores, tu identidad",
  },
];

export default function DemoEs() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="demo" className="py-28 relative overflow-hidden bg-[#050508]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c9a84c]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            App Real. Negocio Real. Resultados Reales.
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-5"
          >
            Mira La App{" "}
            <span className="text-gradient-primary">En Acción</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-4"
          >
            Esta es una app real que creamos para{" "}
            <span className="text-white font-semibold">Richard Too Cool</span>, un Master Barber.
            Cada pantalla que ves a continuación está activa y en uso hoy.
          </motion.p>
        </div>

        {/* Screenshot Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-20">
          {screenshots.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="relative w-full rounded-[1.6rem] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] group-hover:shadow-[0_12px_40px_rgba(201,168,76,0.18)] group-hover:border-[#c9a84c]/30 transition-all duration-300 group-hover:scale-[1.025]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-10 opacity-80" />
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-auto object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="text-center px-1">
                <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-wide leading-tight">
                  {item.caption}
                </p>
                <p className="text-white/50 text-xs mt-0.5 leading-snug hidden sm:block">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 bg-card/60 backdrop-blur-xl border border-[#c9a84c]/20 rounded-[2rem] px-10 py-10 shadow-2xl max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center">
              <span className="text-2xl">✂️</span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                Obtén Tu Propia App Como Esta
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                Podemos construir lo mismo para tu barbería, panadería o negocio de servicios — con tu marca, lista para usar.
              </p>
            </div>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="h-13 px-10 text-base font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_-8px_rgba(51,133,255,0.7)] hover:-translate-y-0.5 transition-all"
            >
              Convierte Tu Negocio en una App →
            </Button>
            <p className="text-xs text-muted-foreground/70">Rápido de comenzar. Sin conocimientos técnicos.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
