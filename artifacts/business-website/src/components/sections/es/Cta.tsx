import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CtaEs() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary/5 border-y border-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card/50 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-8">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
            Un cliente a la vez — escríbeme antes del siguiente proyecto
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            ¿Listo Para Conseguir <br />
            <span className="text-gradient-primary">Más Clientes?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto">
            Deja de depender solo de las redes sociales. Tén tu propia plataforma. Crece tu negocio.
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto">
            Construimos tu app en días — no meses. Sin conocimientos técnicos de tu parte. Solo cuéntanos sobre tu negocio y nosotros nos encargamos del resto.
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="text-lg h-14 px-10 font-bold rounded-full bg-primary hover:bg-white hover:text-black transition-colors shadow-[0_0_40px_-10px_rgba(51,133,255,0.8)]"
          >
            Obtener Mi App Hoy →
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Rápido de comenzar. Sin compromiso.</p>
        </motion.div>
      </div>
    </section>
  );
}
