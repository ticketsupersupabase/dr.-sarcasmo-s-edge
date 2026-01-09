/**
 * =============================================================
 * PAIN SECTION - "EL DOLOR" (REALIDAD)
 * =============================================================
 * EDITAR: Textos provocadores del cliente (tono sarcástico)
 * =============================================================
 */

import { TrendingDown, Users, Crown } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";

// EDITAR: Puntos de dolor
const PAIN_POINTS = [
  {
    icon: TrendingDown,
    title: "Mediocridad repetida",
    text: "= resultados repetidos.",
  },
  {
    icon: Users,
    title: "Si piden permiso para vender",
    text: "están programados para perder.",
  },
  {
    icon: Crown,
    title: "Si el líder no manda",
    text: "el equipo manda… y pierde.",
  },
];

export function PainSection() {
  return (
    <section id="dolor" className="section-padding section-alt">
      <div className="container-custom">
        {/* EDITAR: Título de sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            ¿Tienes vendedores… o un{" "}
            <span className="text-primary">museo de excusas</span>?
          </h2>
        </div>

        {/* Pain points cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {PAIN_POINTS.map((point, index) => (
            <div
              key={index}
              className="card-premium p-6 hover:border-primary/30 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-foreground font-semibold text-lg mb-1">
                {point.title}
              </p>
              <p className="text-muted-foreground">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* EDITAR: Cierre de sección */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            La mediocridad cuesta más que cualquier entrenamiento.
          </p>

          <WhatsAppButton
            href={WHATSAPP_LINKS.accionInmediata}
            variant="hero"
            size="lg"
            eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_HERO}
          >
            Quiero romper el ciclo
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
