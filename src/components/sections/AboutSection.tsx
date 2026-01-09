/**
 * =============================================================
 * ABOUT SECTION - ¿QUIÉN ES JULIÁN VARGAS?
 * =============================================================
 * EDITAR: Biografía del cliente (sin inventar datos adicionales)
 * NOTA: Solo mencionar instituciones con logos/evidencia autorizada
 * =============================================================
 */

import { ArrowRight, MapPin, Award } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-carbon-light/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Avatar */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform scale-90" />
              
              {/* Avatar placeholder */}
              {/* TODO: Reemplazar por foto real */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 bg-carbon-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">JV</div>
                  <div className="text-sm text-muted-foreground">Dr. Sarcasmo</div>
                </div>
              </div>

              {/* Stats badges */}
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                +20 años
              </div>
              <div className="absolute -bottom-2 -left-2 bg-card border border-border px-4 py-2 rounded-lg font-medium text-sm shadow-lg flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Barranquilla
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
                <span className="text-foreground">Más de 20 años de experiencia</span>{" "}
                en PNL aplicada a ventas y liderazgo empresarial.
              </p>
              <p>
                Ha vivido 25 años en Barranquilla y nació en Cúcuta.
              </p>
              <p>
                Ha formado equipos en múltiples empresas e instituciones.
              </p>
              {/* 
                NOTA: Estas menciones (SENA, Universidad del Norte, etc.) 
                deben mostrarse SOLO si el cliente entrega logos o evidencia escrita.
                Por ahora mantenemos texto genérico.
              */}
            </div>

            {/* Closing statement */}
            <div className="card-premium p-6 mb-8 border-l-4 border-primary">
              <p className="text-foreground font-medium italic text-lg">
                "Puedes cerrar esta página y seguir esperando un milagro…{" "}
                <span className="text-primary">
                  o puedes arremangarte conmigo ahora mismo.
                </span>"
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
