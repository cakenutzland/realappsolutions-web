import { motion } from "framer-motion";
import { Code2, Palette, Store, Globe2 } from "lucide-react";

const highlights = [
  {
    icon: <Store className="w-5 h-5 text-primary" />,
    text: "A\u00f1os de experiencia pr\u00e1ctica en negocios peque\u00f1os",
  },
  {
    icon: <Palette className="w-5 h-5 text-primary" />,
    text: "Cada logo e identidad de marca dise\u00f1ado internamente",
  },
  {
    icon: <Code2 className="w-5 h-5 text-primary" />,
    text: "Portafolio creciente en Google Play Store",
  },
  {
    icon: <Globe2 className="w-5 h-5 text-primary" />,
    text: "Biling\u00fce: Ingl\u00e9s y Espa\u00f1ol",
  },
];

export default function AboutEs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest w-fit">
              Sobre Nosotros
            </div>

            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">
              Creado por Alguien Que Sabe{" "}
              <span className="text-gradient-primary">Lo Que Se Necesita</span>
            </h2>

            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Real App Solutions fue fundada por Leo, un emprendedor radicado en
                Naples, Florida, con a\u00f1os de experiencia en la trinchera de los
                negocios peque\u00f1os \u2014 desde operar una panader\u00eda profesional hasta
                dise\u00f1ar marcas desde cero.
              </p>
              <p>
                Esa experiencia real es lo que impulsa todo lo que construimos. Sin
                relleno corporativo. Sin tecnolog\u00eda innecesariamente complicada. Solo
                productos digitales pr\u00e1cticos que resuelven problemas reales para
                negocios reales.
              </p>
              <p>
                Hoy, NutzLabs \u2014 nuestro estudio indie de apps \u2014 tiene un portafolio
                creciente de aplicaciones publicadas en Google Play Store, sirviendo a
                barber\u00edas, estudios de tatuaje, panader\u00edas, talleres mec\u00e1nicos y otros
                negocios de servicios. Cada logo, identidad de marca y concepto de
                producto es dise\u00f1ado y dirigido internamente.
              </p>
              <p className="text-white font-semibold text-lg">
                No tercerizamos tu visi\u00f3n. La construimos contigo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 bg-card rounded-2xl p-5 border border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  {item.icon}
                </div>
                <span className="text-white/90 font-medium">{item.text}</span>
              </motion.div>
            ))}

            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-indigo-500/10 border border-primary/20">
              <p className="text-sm text-white/70 leading-relaxed">
                <span className="text-primary font-bold">Basados en el Suroeste de Florida</span>
                {" "}\u2014 Un cliente a la vez, dedicaci\u00f3n total a cada proyecto.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
