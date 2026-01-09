/**
 * =============================================================
 * MENTORÍA SECTION - OFERTA FLASH 1 A 1
 * =============================================================
 * EDITAR: Precios de mentoría (actual y tachado)
 * TODO: Confirmar duración y si incluye seguimiento
 * =============================================================
 */

import { Zap, Target, ClipboardList, UserCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";

// EDITAR: Lo que incluye la mentoría
const MENTORIA_INCLUDES = [
  {
    icon: Target,
    text: "Diagnóstico del bloqueo principal",
  },
  {
    icon: ClipboardList,
    text: "Plan de ejecución (acciones concretas)",
  },
  {
    icon: UserCheck,
    // TODO: Confirmar duración y si incluye seguimiento
    text: "Seguimiento: Por confirmar (si aplica)",
  },
];

export function MentoriaSection() {
  return (
    <section id="mentoria" className="section-padding bg-carbon-light/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Flash Sale Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold text-sm animate-pulse">
              <Zap className="w-4 h-4" />
              OFERTA FLASH - Solo por hoy
            </div>
          </div>

          {/* Main Card */}
          <div className="card-premium p-8 md:p-12 border-primary/30 glow-red">
            <div className="text-center mb-8">
              {/* EDITAR: Título */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Tú y yo, de frente.{" "}
                <span className="text-primary">Sin rodeos.</span>
              </h2>

              {/* EDITAR: Precios */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-3xl md:text-4xl font-bold text-gold-gradient">
                  $150.000
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  $300.000
                </span>
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  50% OFF
                </span>
              </div>

              {/* EDITAR: Descripción */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sesión privada de PNL para descuartizar bloqueos.{" "}
                <span className="text-foreground font-medium">
                  Si te ofende la verdad, no compres. Si quieres resultados, hablemos.
                </span>
              </p>
            </div>

            {/* What's included */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {MENTORIA_INCLUDES.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-carbon/50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/90 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <WhatsAppButton
                href={WHATSAPP_LINKS.mentoria}
                variant="hero"
                size="lg"
                eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_MENTORIA}
              >
                Reservar sesión (50% OFF)
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
