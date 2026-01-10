/**
 * =============================================================
 * HERO SECTION - PREMIUM (FULL BG + OVERLAY)
 * =============================================================
 * EDITAR: Textos, CTAs y imagen de fondo
 * - H1 en azul (autoridad)
 * - CTA dorado estable (sin saltos)
 * =============================================================
 */

import { MessageCircle, Calendar, CheckCircle, MapPin } from "lucide-react";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS, trackEvent } from "@/lib/whatsapp";

export function HeroSection() {
  const handleWhatsAppClick = () => {
    trackEvent(ANALYTICS_EVENTS.CLICK_WHATSAPP_HERO);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("agendar");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image - NO lazy load (above the fold) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 overlay-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-border shadow-sm mb-6">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-foreground">Barranquilla · Atención por WhatsApp</span>
          </div>

          {/* H1 - Azul profundo */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight mb-6">
            Este libro no te va a motivar… te va a despertar.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
            Para personas frustradas, estancadas o cansadas de repetir la misma vida, 
            que saben que están hechas para más.
          </p>

          {/* Bullets */}
          <ul className="space-y-3 mb-8">
            {["Para quien no quiere ser mediocre", "Para quien está cansado de fracasar en silencio", "Para quien quiere reprogramar su mente y ejecutar"].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs - Estables sin saltos */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToForm} className="btn-hero pulse-cta">
              Quiero desmotivarme para despertar
            </button>
            <a href={WHATSAPP_LINKS.accionInmediata} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="btn-secondary">
              <MessageCircle className="w-5 h-5" />
              Abrir WhatsApp
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">+20 años de experiencia · +1 millón de personas impactadas</p>
        </div>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg">
        <div className="flex items-center gap-2 p-3">
          <a href={WHATSAPP_LINKS.accionInmediata} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="flex-1 btn-primary min-w-0">
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">WhatsApp</span>
          </a>
          <button onClick={scrollToForm} className="flex-1 btn-secondary min-w-0">
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">Agendar</span>
          </button>
        </div>
      </div>
    </section>
  );
}
