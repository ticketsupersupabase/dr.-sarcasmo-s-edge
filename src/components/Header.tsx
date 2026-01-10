/**
 * =============================================================
 * HEADER COMPONENT - STICKY NAVIGATION (PREMIUM)
 * =============================================================
 * EDITAR: Logo wordmark, menú de navegación y CTA
 * - Sin logo imagen, solo wordmark "Dr. Sarcasmo"
 * - Botones estables sin layout shift
 * =============================================================
 */

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Calendar } from "lucide-react";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS, trackEvent } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

// EDITAR: Links de navegación (anclas)
const NAV_LINKS = [
  { label: "Libro", href: "#libro" },
  { label: "Mentoría", href: "#mentoria" },
  { label: "Empresas", href: "#empresas" },
  { label: "Agenda", href: "#agendar" },
  { label: "Ubicación", href: "#contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackEvent(ANALYTICS_EVENTS.CLICK_WHATSAPP_HERO);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <div className="container-custom px-4 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Wordmark - No logo image */}
          <a 
            href="/" 
            className="flex items-center gap-1 text-xl md:text-2xl font-bold"
          >
            {/* EDITAR: Wordmark tipográfico (azul) */}
            <span className="text-brand-blue">Dr.</span>
            <span className="text-foreground">Sarcasmo</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-muted-foreground hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA - Botón estable sin saltos */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_LINKS.accionInmediata}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="btn-primary"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg animate-fade-in">
            <div className="container-custom px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-brand-blue transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINKS.accionInmediata}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="btn-primary mt-4"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
