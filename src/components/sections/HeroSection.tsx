"use client";

/**
 * =============================================================
 * HERO SECTION - PREMIUM (FULL BG + DARK OVERLAY) ✅
 * =============================================================
 * Mantiene:
 * - container-custom
 * - btn-hero / btn-secondary / btn-primary
 * Cambia:
 * - overlay-hero -> overlay-hero-dark (solo para este hero)
 * Fix:
 * - "use client" (document + onClick) [web:403]
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
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image - NO lazy load (above the fold) */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_30%]"

        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        aria-hidden="true"
      >
        {/* Overlay oscuro SOLO para el hero */}
        <div className="absolute inset-0 overlay-hero-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm shadow-sm mb-6">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-white/90">
              Barranquilla · Atención por WhatsApp
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-5 text-shadow">
            PNL para ventas y liderazgo.{" "}
            <span className="text-brand-gold">Sin anestesia.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
            No vengo a motivarte. Vengo a que ejecutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Principal: WhatsApp */}
            <a
              href={WHATSAPP_LINKS.accionInmediata}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="btn-hero"
            >
              <MessageCircle className="w-5 h-5" />
              Tomar acción por WhatsApp
            </a>

            {/* Secundario: agendar (scroll) */}
            <button onClick={scrollToForm} className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/15">
              <Calendar className="w-5 h-5" />
              Agendar mentoría
            </button>
          </div>

          {/* Bullets (compactos) */}
          <ul className="space-y-3 mt-8">
            {[
              "Para quien no quiere ser mediocre",
              "Para quien está cansado de fracasar en silencio",
              "Para quien quiere reprogramar su mente y ejecutar",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-white/90">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-white/70">
            +20 años de experiencia · +1 millón de personas impactadas
          </p>
        </div>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-border shadow-lg">
        <div className="flex items-center gap-2 p-3">
          <a
            href={WHATSAPP_LINKS.accionInmediata}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex-1 btn-primary min-w-0"
          >
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
