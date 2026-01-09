/**
 * =============================================================
 * HEADER COMPONENT - STICKY NAVIGATION
 * =============================================================
 * EDITAR: Logo, menú de navegación y CTA
 * =============================================================
 */

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

// EDITAR: Links de navegación (anclas)
const NAV_LINKS = [
  { label: "Libro", href: "#libro" },
  { label: "Mentoría", href: "#mentoria" },
  { label: "Empresas", href: "#empresas" },
  { label: "Agenda", href: "/agenda" },
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom px-4 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a 
            href="/" 
            className="flex items-center gap-3"
          >
            {/* Logo image if exists, otherwise wordmark */}
            <img 
              src="/brand/logo.png" 
              alt="Montagut Consulting" 
              className="h-10 md:h-12 w-auto"
              onError={(e) => {
                // Fallback to wordmark if logo doesn't load
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) (fallback as HTMLElement).style.display = 'flex';
              }}
            />
            <span 
              className="hidden items-center gap-2 text-xl md:text-2xl font-bold"
              style={{ display: 'none' }}
            >
              <span className={cn(
                "transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>Dr.</span>
              <span className={cn(
                "transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}>Sarcasmo</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors",
                  isScrolled 
                    ? "text-muted-foreground hover:text-foreground" 
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <WhatsAppButton
              href={WHATSAPP_LINKS.accionInmediata}
              variant="hero"
              size="sm"
              eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_HERO}
            >
              WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
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
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <WhatsAppButton
                href={WHATSAPP_LINKS.accionInmediata}
                variant="hero"
                size="md"
                eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_HERO}
                className="mt-4"
              >
                WhatsApp ahora
              </WhatsAppButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
