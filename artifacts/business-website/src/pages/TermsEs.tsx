import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";

const sections = [
  {
    title: "Descripción del Servicio",
    content: `Real App Solutions diseña y desarrolla aplicaciones móviles personalizadas para negocios locales. Cada app que construimos está diseñada específicamente para tu negocio — no vendemos plantillas ni software genérico. Los detalles de lo que construimos, el tiempo y lo que se incluye se acuerdan antes de comenzar cualquier trabajo.`,
  },
  {
    title: "Sin Garantía de Resultados Específicos",
    content: `Construimos herramientas para ayudar a que tu negocio se vea más profesional y sea más fácil de contactar para tus clientes. Sin embargo, no podemos garantizar resultados específicos como un número determinado de clientes nuevos, reservas o aumento de ingresos. Los resultados dependen de muchos factores fuera de nuestro control, incluido cómo utilizas la app y cómo opera tu negocio.`,
  },
  {
    title: "Responsabilidad del Cliente",
    content: `Eres responsable de proporcionar información precisa sobre tu negocio, incluyendo cualquier contenido, imágenes o datos que desees incluir en tu app. También eres responsable de cómo utilizas la app una vez entregada — incluyendo cómo te comunicas con tus clientes y cómo gestionas las solicitudes. No somos responsables de los resultados derivados del uso de la app después de la entrega.`,
  },
  {
    title: "Términos de Pago",
    content: `Nuestras apps tienen un precio de pago único por el desarrollo — no hay cargos mensuales recurrentes de nuestra parte por construir tu app. Por lo general, se requiere un depósito antes de comenzar el trabajo, con el saldo restante a pagar al momento de la entrega. Los términos de pago se confirman por escrito antes de que comience cualquier proyecto. Una vez completada una fase del trabajo, los pagos realizados por esa fase no son reembolsables.`,
  },
  {
    title: "Información de Contacto",
    content: `Si tienes preguntas sobre estos términos o sobre tu proyecto, puedes contactarnos a través del formulario de contacto de nuestro sitio web o por WhatsApp. Somos un equipo pequeño y estamos disponibles para hablar directamente contigo.`,
  },
];

export default function TermsEs() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="mb-12">
          <Link href="/es" className="text-sm text-primary hover:underline mb-6 inline-block">
            ← Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Términos de Servicio
          </h1>
          <p className="text-muted-foreground text-sm">Última actualización: Marzo 2026</p>
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <div key={i} className="border-t border-white/5 pt-8">
              <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
