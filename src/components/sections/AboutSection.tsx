/**
 * =============================================================
 * ABOUT SECTION - ¿QUIÉN ES JULIÁN VARGAS?
 * =============================================================
 * EDITAR: Biografía del cliente (sin inventar datos adicionales)
 * TODO: Reemplazar placeholder por /public/images/profile.jpg
 * =============================================================
 */

import { ArrowRight, MapPin } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";

export function AboutSection() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Avatar */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Profile photo */}
              {/* TODO: Verificar que la imagen se carga correctamente */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border shadow-xl">
                <img 
                  src="/images/profile.jpg" 
                  alt="Julián Vargas Montagut - Dr. Sarcasmo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback placeholder
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary flex-col items-center justify-center hidden"
                >
                  <div className="text-5xl font-bold text-white mb-2">JV</div>
                  <div className="text-sm text-white/80">Dr. Sarcasmo</div>
                </div>
              </div>

              {/* Stats badge */}
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                +20 años de experiencia
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              ¿Quién es{" "}
              <span className="text-primary">Julián Vargas Montagut</span>?
            </h2>

            {/* EDITAR: Biografía (mantener intención, sin inventar) */}
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                <span className="text-foreground font-semibold">
                  Julián Vargas Montagut
                </span>{" "}
                (Dr. Sarcasmo).
              </p>
              <p>
                <span className="text-foreground">+20 años de experiencia</span>{" "}
                en PNL aplicada a ventas y liderazgo empresarial.
              </p>
              <p>
                Nacido en Cúcuta, radicado en Barranquilla.
              </p>
              <p className="text-sm italic">
                Experiencia en empresas e instituciones: Por confirmar logos/evidencia.
              </p>
            </div>

            {/* Final CTA */}
            <WhatsAppButton
              href={WHATSAPP_LINKS.accionInmediata}
              variant="hero"
              size="lg"
              eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_HERO}
            >
              Hablar por WhatsApp
              <ArrowRight className="w-5 h-5" />
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
