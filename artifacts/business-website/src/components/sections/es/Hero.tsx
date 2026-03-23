import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroEs() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToDemo = () => {
    document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Apps · Sitios Web · Herramientas · SaaS</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">⚡ Un cliente a la vez — dedicación total a tu proyecto</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-display font-extrabold">
              Creamos Productos Digitales Que{" "}
              <span className="text-gradient-primary">Hacen Crecer Tu Negocio</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Desde apps móviles y sitios web profesionales hasta calculadoras, herramientas digitales y productos SaaS — construimos exactamente lo que tu negocio necesita para atraer más clientes y operar con más inteligencia.
            </p>

            <ul className="flex flex-col gap-3 text-left mx-auto lg:mx-0">
              {[
                "Apps móviles — para que los clientes reserven, pidan o te contacten 24/7",
                "Sitios web profesionales — diseñados para convertir visitantes en clientes",
                "Calculadoras, herramientas y SaaS — productos digitales para cualquier necesidad",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust micro-block */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 py-1">
              {[
                "Sin conocimientos técnicos necesarios",
                "Te guiamos paso a paso",
                "Configuración simple y rápida",
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 text-sm text-white/60">
                  <span className="text-green-400 font-bold">✔</span>
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full sm:w-auto text-base font-semibold rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_-10px_rgba(51,133,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(51,133,255,0.7)] transition-all hover:-translate-y-0.5"
              >
                Comenzar Mi Proyecto
              </Button>
              <Button
                onClick={scrollToDemo}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base font-semibold rounded-full px-8 border-white/10 hover:bg-white/5 text-white"
              >
                Ver Nuestro Trabajo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative z-10 w-full max-w-[400px] mx-auto animate-[float_6s_ease-in-out_infinite]">
              <img
                src={`${import.meta.env.BASE_URL}images/hero-app-mockup.png`}
                alt="Mockup de Producto Digital"
                className="w-full h-auto drop-shadow-[0_0_50px_rgba(51,133,255,0.3)] rounded-[2rem]"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[80px] -z-10"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-1/4 -right-4 md:right-4 glass-panel p-4 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Nueva Cita</p>
                <p className="text-sm font-bold text-white">Corte — 2:00 PM</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-1/4 -left-4 md:left-4 glass-panel p-4 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Proyecto Entregado</p>
                <p className="text-sm font-bold text-white">Calculadora CakeNutz ✓</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
