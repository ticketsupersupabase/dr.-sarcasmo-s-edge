/**
 * =============================================================
 * PAIN SECTION - "EL DOLOR" (REALIDAD)
 * =============================================================
 * EDITAR: Textos provocadores del cliente (tono sarcástico)
 * =============================================================
 */

import { AlertTriangle, Users, Crown, TrendingDown } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";

// EDITAR: Puntos de dolor
const PAIN_POINTS = [
  {
    icon: TrendingDown,
    text: "30 años de mediocridad no se borran con una charla de una hora.",
  },
  {
    icon: Users,
    text: 'Vendedores "mendigos": si piden por favor que les compren, están programados para perder.',
  },
  {
    icon: Crown,
    text: "Liderazgo de papel: si el jefe teme dar órdenes, no hay resultados.",
  },
];

export function PainSection() {
  return (
    <section id="dolor" className="section-padding bg-carbon-light/30">
      <div className="container-custom">
        {/* EDITAR: Título de sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            ¿Tienes vendedores o un{" "}
            <span className="text-primary">club de lectura de excusas</span>?
          </h2>
        </div>

        {/* Pain points cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {PAIN_POINTS.map((point, index) => (
            <div
              key={index}
              className="card-premium p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground/90 text-lg leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* EDITAR: Cierre de sección */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            La mediocridad es opcional.{" "}
            <span className="text-foreground font-semibold">
              Y sale más cara que cualquier capacitación.
            </span>
          </p>

          <WhatsAppButton
            href={WHATSAPP_LINKS.accionInmediata}
            variant="primary"
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
