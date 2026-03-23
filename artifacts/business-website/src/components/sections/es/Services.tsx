import { motion } from "framer-motion";
import { Check, Smartphone, Globe, Calculator, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    icon: <Smartphone className="w-7 h-7 text-primary" />,
    name: "Apps Móviles",
    desc: "Apps instalables para pequeños negocios — para que los clientes puedan reservar, pedir y contactarte desde su teléfono.",
    examples: ["Barberías y Salones", "Lavados de Autos", "Panaderías y Reposterías", "Técnicas de Uñas y Estética"],
    color: "primary",
  },
  {
    icon: <Globe className="w-7 h-7 text-indigo-400" />,
    name: "Sitios Web Profesionales",
    desc: "Sitios web de alto impacto, diseñados para lucir confiables, cargar rápido y convertir visitantes en clientes.",
    examples: ["Landing pages para servicios", "Sitios de portafolio y citas", "Presencia web para negocios locales", "Sitios web multi-página"],
    color: "indigo",
  },
  {
    icon: <Calculator className="w-7 h-7 text-emerald-400" />,
    name: "Calculadoras y Herramientas",
    desc: "Herramientas interactivas que ayudan a tu negocio a generar leads, cotizar precios y cerrar clientes automáticamente.",
    examples: ["Calculadoras de precio y cotización", "Herramientas de generación de leads", "Configuradores de productos", "Estimadores de costo"],
    color: "emerald",
  },
  {
    icon: <Layers className="w-7 h-7 text-violet-400" />,
    name: "Productos SaaS",
    desc: "Plataformas de software completas para tu industria — por suscripción, multi-usuario y escalables.",
    examples: ["Plataformas web por suscripción", "Sistemas de gestión de clientes", "Software para industrias específicas", "Herramientas de flujo de trabajo"],
    color: "violet",
  },
];

const pricingModels = [
  {
    name: "Pago Único por Desarrollo",
    badge: null,
    price: "$259",
    priceSuffix: "básico / $499 negocio",
    desc: "Pagas una vez, es tuya para siempre. Sin costos recurrentes por el desarrollo.",
    note: "Trabajo con un cliente a la vez para garantizar calidad y dedicación total.",
    urgency: true,
    features: [
      "App o sitio web completo para tu negocio",
      "Tu marca, colores y contenido",
      "Instalable en cualquier teléfono",
      "Entregado y listo para usar",
    ],
    popular: true,
    ctaLabel: "Iniciar Mi Desarrollo",
  },
  {
    name: "Mantenimiento Mensual",
    badge: "Complemento",
    price: "Desde $49",
    priceSuffix: "/ mes",
    desc: "Mantén tu producto actualizado, en línea y funcionando bien cada mes.",
    note: "Se agrega a cualquier desarrollo único.",
    urgency: false,
    features: [
      "Hosting y monitoreo de funcionamiento",
      "Actualizaciones de contenido y menú",
      "Corrección de errores y mejoras menores",
      "Soporte prioritario por correo",
    ],
    popular: false,
    ctaLabel: "Preguntar por Mantenimiento",
  },
  {
    name: "Suscripción de App",
    badge: "Todo Incluido",
    price: "Desde $99",
    priceSuffix: "/ mes",
    desc: "Obtén tu app desarrollada y mantenida bajo un plan mensual sin costo inicial elevado.",
    note: "Ideal si prefieres distribuir los costos en el tiempo.",
    urgency: false,
    features: [
      "App desarrollada y entregada",
      "Hosting y mantenimiento incluidos",
      "Actualizaciones de funciones mensuales",
      "Soporte continuo",
    ],
    popular: false,
    ctaLabel: "Preguntar por Suscripción",
  },
  {
    name: "Paquete Combinado",
    badge: "Personalizado",
    price: "Hablemos",
    priceSuffix: "",
    desc: "Un paquete a medida de desarrollo + mantenimiento + funciones para proyectos más grandes.",
    note: "Para negocios con necesidades específicas o en crecimiento.",
    urgency: false,
    features: [
      "Todo lo del Plan de Negocio",
      "Desarrollo de funciones a medida",
      "Entrega en múltiples plataformas",
      "Soporte dedicado y reportes",
    ],
    popular: false,
    ctaLabel: "Obtener Cotización",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 border-primary/20",
  indigo: "bg-indigo-500/10 border-indigo-500/20",
  emerald: "bg-emerald-500/10 border-emerald-500/20",
  violet: "bg-violet-500/10 border-violet-500/20",
};

export default function ServicesEs() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── QUÉ CONSTRUIMOS ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-5"
          >
            Qué Construimos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Cuatro Tipos de Productos Digitales,{" "}
            <span className="text-gradient-primary">Un Solo Equipo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Ya sea una app, un sitio web, una herramienta o una plataforma completa — lo construimos bien.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {serviceCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="bg-card rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all flex flex-col gap-4 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${colorMap[cat.color]} group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cat.desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {cat.examples.map((ex, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-white/50">
                      <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CÓMO COBRAMOS ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/8 border border-primary/15 text-white/80 text-sm font-medium mb-6"
          >
            <span className="text-primary text-lg">💡</span>
            En vez de pagar mensualidades para siempre — sé dueño de tu producto con un solo pago único.
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Precios Flexibles,{" "}
            <span className="text-gradient-primary">Resultados Reales</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-6"
          >
            Elige el modelo que mejor se adapte a cómo quieres trabajar con nosotros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            ⚡ Un cliente a la vez — dedicación total a cada proyecto
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {pricingModels.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative bg-card rounded-3xl p-7 flex flex-col h-full border ${
                plan.popular
                  ? "border-primary shadow-2xl shadow-primary/10 lg:-translate-y-3"
                  : "border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  Más Popular
                </div>
              )}
              {plan.badge && !plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-white/20 text-white/70 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-3xl font-display font-bold text-white">{plan.price}</span>
                  {plan.priceSuffix && (
                    <span className="text-muted-foreground text-xs font-medium">{plan.priceSuffix}</span>
                  )}
                </div>
                <p className={`mt-2 text-xs font-medium ${plan.popular ? "text-primary" : "text-muted-foreground"}`}>
                  {plan.note}
                </p>
                {plan.urgency && (
                  <p className="mt-1.5 text-xs text-amber-400/80 font-medium">⚡ Un proyecto a la vez — calidad garantizada</p>
                )}
              </div>

              <div className="flex-grow space-y-3 mb-6">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-xs leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToContact}
                variant={plan.popular ? "default" : "outline"}
                className={`w-full py-5 rounded-xl font-semibold text-sm ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "border-white/10 hover:bg-white/5 text-white"
                }`}
              >
                {plan.ctaLabel}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">Sin compromiso requerido.</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
