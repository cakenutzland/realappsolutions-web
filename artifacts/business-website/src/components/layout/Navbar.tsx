import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isEs = location.startsWith("/es");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = isEs
    ? [
        { name: "Problema", href: "#problem" },
        { name: "Solución", href: "#solution" },
        { name: "Servicios", href: "#services" },
        { name: "Demo", href: "#demo" },
      ]
    : [
        { name: "Problem", href: "#problem" },
        { name: "Solution", href: "#solution" },
        { name: "Services", href: "#services" },
        { name: "Demo", href: "#demo" },
      ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const ctaLabel = isEs ? "Obtén Tu App" : "Get Your App";

  const getCounterpartPath = () => {
    if (isEs) {
      if (location === "/es/privacy") return "/privacy";
      if (location === "/es/terms") return "/terms";
      return "/";
    } else {
      if (location === "/privacy") return "/es/privacy";
      if (location === "/terms") return "/es/terms";
      return "/es";
    }
  };

  const enPath = isEs ? getCounterpartPath() : "/";
  const esPath = isEs ? "/es" : getCounterpartPath();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-2 shadow-md"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={isEs ? "/es" : "/"} className="flex items-center group mr-8">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="RealApp Solutions"
              className="h-[42px] md:h-[54px] w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-1 text-sm font-semibold border border-white/10 rounded-full px-3 py-1.5 bg-white/5">
              <Link
                href={enPath}
                className={`transition-colors ${!isEs ? "text-white" : "text-muted-foreground hover:text-white"}`}
              >
                EN
              </Link>
              <span className="text-white/20 select-none">|</span>
              <Link
                href={esPath}
                className={`transition-colors ${isEs ? "text-white" : "text-muted-foreground hover:text-white"}`}
              >
                ES
              </Link>
            </div>

            <Button
              onClick={(e) => {
                const event = e as unknown as React.MouseEvent<HTMLAnchorElement>;
                scrollToSection(event, "#contact");
              }}
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 shadow-lg shadow-primary/20"
            >
              {ctaLabel}
            </Button>
          </div>

          {/* Mobile right side: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-semibold border border-white/10 rounded-full px-2.5 py-1 bg-white/5">
              <Link href={enPath} className={`transition-colors ${!isEs ? "text-white" : "text-muted-foreground"}`}>
                EN
              </Link>
              <span className="text-white/20 select-none">|</span>
              <Link href={esPath} className={`transition-colors ${isEs ? "text-white" : "text-muted-foreground"}`}>
                ES
              </Link>
            </div>
            <button
              className="p-2 text-muted-foreground hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-white/10 shadow-2xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium text-muted-foreground hover:text-white py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={(e) => {
              const event = e as unknown as React.MouseEvent<HTMLAnchorElement>;
              scrollToSection(event, "#contact");
            }}
            className="w-full mt-2 bg-primary hover:bg-primary/90 text-white"
          >
            {ctaLabel}
          </Button>
        </div>
      )}
    </nav>
  );
}
