/**
 * =============================================================
 * MENTORÍA SECTION - MENTORÍA 1 A 1
 * =============================================================
 * EDITAR: Precios de mentoría (actual y tachado)
 * =============================================================
 */

import { Zap, Target, ClipboardList, UserCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";

// EDITAR: Lo que incluye la mentoría
const MENTORIA_INCLUDES = [
  {
    icon: Target,
    text: "Diagnóstico del bloqueo",
  },
  {
    icon: ClipboardList,
    text: "Plan de ejecución",
  },
  {
    icon: UserCheck,
    text: "Sesión privada",
  },
];

export function MentoriaSection() {
  return (
    <section id="mentoria" className="section-padding section-alt">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="card-premium p-8 md:p-12 border-primary/20">
            <div className="text-center mb-8">
              {/* EDITAR: Título */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Mentoría 1 a 1{" "}
                <span className="text-muted-foreground font-normal">(sin rodeos)</span>
              </h2>

              {/* EDITAR: Precios */}
              <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                <span className="text-sm text-muted-foreground uppercase tracking-wide">HOY</span>
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
            </div>

            {/* What's included */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {MENTORIA_INCLUDES.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/agenda"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold bg-primary text-primary-foreground hover:brightness-110 rounded-lg transition-all duration-300 glow-gold"
              >
                Agendar mentoría
              </a>
              <WhatsAppButton
                href={WHATSAPP_LINKS.mentoria}
                variant="secondary"
                size="lg"
                eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_MENTORIA}
              >
                Consultar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
