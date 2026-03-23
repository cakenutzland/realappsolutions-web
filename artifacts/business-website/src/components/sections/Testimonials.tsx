import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    quote: "Partnering with Apex Solutions was a turning point for our company. Their strategic insights helped us increase our revenue by 150% in just one year.",
    /* customer portrait professional woman */
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    name: "Marcus Chen",
    role: "Director of Operations, Nexus",
    quote: "The digital transformation they orchestrated was flawless. Our team is more productive than ever, and our infrastructure is finally scalable.",
    /* customer portrait professional man */
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Bloom Retail",
    quote: "I was blown away by their dedication. They didn't just give us advice; they worked alongside us to implement every single recommendation.",
    /* customer portrait creative woman */
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Client Success</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about the impact we've made.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 italic leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                </CardHeader>
                <CardContent className="flex items-center gap-4 mt-auto">
                  <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
