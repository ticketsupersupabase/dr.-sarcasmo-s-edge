/**
 * =============================================================
 * HERO SECTION - FULL BLEED IMAGE + GRADIENT OVERLAY
 * =============================================================
 * EDITAR: Textos del hero, imagen de fondo
 * TODO: Reemplazar /public/images/hero.jpg por foto real
 * =============================================================
 */

import { ArrowRight, Calendar, MapPin, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Full Bleed */}
      {/* TODO: Reemplazar por /public/images/hero.jpg cuando esté disponible */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/hero.jpg")',
        }}
      />
      
      {/* Overlay gradient - Left to right (dark to transparent) */}
      <div className="absolute inset-0 overlay-hero" />
      
      <div className="container-custom px-4 md:px-8 relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <MapPin className="w-4 h-4" />
            Barranquilla | Atención por WhatsApp
          </div>

          {/* EDITAR: H1 principal */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 text-shadow">
            PNL para ventas y liderazgo.{" "}
            <span className="text-primary">Sin anestesia.</span>
          </h1>

          {/* EDITAR: Subtítulo */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-shadow">
            No vengo a motivarte. Vengo a que ejecutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <WhatsAppButton
              href={WHATSAPP_LINKS.accionInmediata}
              variant="hero"
              size="lg"
              eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_HERO}
            >
              <MessageCircle className="w-5 h-5" />
              Tomar acción por WhatsApp
            </WhatsAppButton>

            <a
              href="/agenda"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30 rounded-lg transition-all duration-300 focus-ring"
            >
              <Calendar className="w-5 h-5" />
              Agendar mentoría
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg p-3">
        <div className="flex gap-2">
          <WhatsAppButton
            href={WHATSAPP_LINKS.accionInmediata}
            variant="hero"
            size="md"
            eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_HERO}
            className="flex-1"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </WhatsAppButton>
          <a
            href="/agenda"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 font-semibold bg-secondary text-foreground hover:bg-secondary/80 border border-border rounded-lg transition-all"
          >
            <Calendar className="w-4 h-4" />
            Agendar
          </a>
        </div>
      </div>
    </section>
  );
}
