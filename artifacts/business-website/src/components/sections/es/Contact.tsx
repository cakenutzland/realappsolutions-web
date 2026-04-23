import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageCircle, Mail, CheckCircle2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Por favor ingresa tu nombre"),
  businessType: z.string().min(1, "Por favor selecciona el tipo de negocio"),
  phone: z.string().min(5, "Por favor ingresa un número de teléfono válido"),
  message: z.string().min(10, "Cuéntanos un poco más sobre tu negocio"),
});

const WA_NUMBER = "12397370365";

export default function ContactEs() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", businessType: "", phone: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const text = `¡Hola! Estoy interesado en obtener una app para mi negocio.\n\nNombre: ${values.name}\nTipo de negocio: ${values.businessType}\nTeléfono: ${values.phone}\nMensaje: ${values.message}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Contáctanos
              </h2>
              <p className="text-lg text-muted-foreground">
                Respondemos dentro de 24 horas. Sin discurso de ventas — solo una conversación real sobre cómo una app puede ayudarte.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%20estoy%20interesado%20en%20obtener%20una%20app%20para%20mi%20negocio`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 p-5 rounded-2xl hover:bg-[#25D366]/20 transition-colors group w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm text-[#25D366] font-medium">Respuesta más rápida</p>
                  <p className="text-lg font-bold text-white">Chatea con nosotros en WhatsApp</p>
                </div>
              </a>

              <a
                href="mailto:realappsolutions@gmail.com"
                className="flex items-center gap-4 bg-card border border-white/10 p-5 rounded-2xl hover:bg-white/5 transition-colors w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Escríbenos</p>
                  <p className="text-lg font-bold text-white">realappsolutions@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
                <p className="text-muted-foreground">¡Gracias! Nos pondremos en contacto dentro de 24 horas para hablar sobre tu app.</p>
                <Button variant="outline" className="mt-4 border-white/10 text-white hover:bg-white/5" onClick={() => { setSubmitted(false); form.reset(); }}>
                  Enviar Otro Mensaje
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Tu Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="ej. Carlos Rodríguez" className="bg-background/50 border-white/10 focus-visible:ring-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="businessType" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Tipo de Negocio</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-white/10 focus-visible:ring-primary h-12">
                            <SelectValue placeholder="¿Qué tipo de negocio tienes?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-white/10 text-white">
                          <SelectItem value="barbershop">Barbería / Salón</SelectItem>
                          <SelectItem value="bakery">Panadería / Café</SelectItem>
                          <SelectItem value="beauty">Belleza / Spa</SelectItem>
                          <SelectItem value="service">Negocio de Servicios</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Número de Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" className="bg-background/50 border-white/10 focus-visible:ring-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Cuéntanos sobre tu negocio</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿Cuál es tu mayor desafío ahora mismo? ¿Qué quieres que haga tu app?" className="bg-background/50 border-white/10 focus-visible:ring-primary min-h-[120px] resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button type="submit" size="lg" className="w-full h-14 text-base font-bold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20">
                    Enviar Mensaje →
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
