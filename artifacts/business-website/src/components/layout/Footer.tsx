import { Smartphone } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Footer() {
  const [location] = useLocation();
  const isEs = location.startsWith("/es");

  return (
    <footer className="bg-background border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href={isEs ? "/es" : "/"} className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-lg">Real App Solutions</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            {isEs ? "Apps que trabajan tan duro como tú." : "Apps that work as hard as you do."}
          </p>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground">
          {isEs ? (
            <>
              <Link href="/es/privacy" className="hover:text-white transition-colors">Política de Privacidad</Link>
              <Link href="/es/terms" className="hover:text-white transition-colors">Términos de Servicio</Link>
            </>
          ) : (
            <>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </>
          )}
        </div>

        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Real App Solutions.{" "}
          {isEs ? "Todos los derechos reservados." : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
