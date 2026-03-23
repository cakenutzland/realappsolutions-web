import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";

const sections = [
  {
    title: "Introducción",
    content: `En Real App Solutions, nos tomamos en serio tu privacidad. Esta página explica qué información recopilamos cuando nos contactas, cómo la usamos y cómo la protegemos. Todo está explicado de forma sencilla — sin lenguaje legal complicado.`,
  },
  {
    title: "Información que Recopilamos",
    content: `Cuando nos contactas a través de nuestro formulario o directamente, podemos recopilar tu nombre, dirección de correo electrónico y número de teléfono. Solo recopilamos lo necesario para responder a tu consulta y entender mejor las necesidades de tu negocio.`,
  },
  {
    title: "Cómo Usamos Tu Información",
    content: `Usamos tu información para responder a tu consulta, hablar sobre tu proyecto y dar seguimiento si es necesario. No usamos tu información para campañas de marketing, y nunca la vendemos ni la compartimos con terceros fuera de Real App Solutions.`,
  },
  {
    title: "Protección de Datos",
    content: `Guardamos tu información de contacto de forma segura y solo la conservamos mientras sea relevante para nuestra conversación o relación de trabajo. Si en cualquier momento deseas que eliminemos tu información, solo avísanos y lo haremos.`,
  },
  {
    title: "Servicios de Terceros",
    content: `Podemos comunicarnos contigo a través de WhatsApp o correo electrónico para dar seguimiento a tu consulta. Estas son herramientas de comunicación estándar — no compartimos tu información con estas plataformas más allá de lo necesario para enviar y recibir mensajes. Nuestro sitio también puede usar herramientas de analítica básica para entender el comportamiento general de los visitantes (como páginas vistas), pero esto no te identifica personalmente.`,
  },
  {
    title: "Información de Contacto",
    content: `Si tienes preguntas sobre esta Política de Privacidad o deseas que actualicemos o eliminemos tu información, puedes contactarnos directamente a través del formulario de contacto de nuestro sitio web o por WhatsApp. Con gusto te atendemos.`,
  },
];

export default function PrivacyEs() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="mb-12">
          <Link href="/es" className="text-sm text-primary hover:underline mb-6 inline-block">
            ← Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Política de Privacidad
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
