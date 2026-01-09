/**
 * =============================================================
 * HERO SECTION - "EL FILTRO"
 * =============================================================
 * EDITAR: Textos del cliente (tono sarcástico), imagen y CTAs
 * TODO: Reemplazar placeholder de imagen por foto real de Julián
 * =============================================================
 */

import { ArrowRight, Calendar } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-carbon-light" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            {/* EDITAR: Subtítulo provocador */}
            <p className="text-sm md:text-base text-primary font-semibold uppercase tracking-wider mb-4">
              ¿Quieres dejar atrás la mediocridad en tu vida?<br />
              ¿Cansado de no lograr tus metas?<br />
              <span className="text-muted-foreground">Si buscas motivación… vete. Esta web no es para ti.</span>
            </p>

            {/* EDITAR: H1 principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              ¿Vas a seguir de brazos cruzados mientras tu equipo se divierte{" "}
              <span className="text-primary">perdiendo plata?</span>
            </h1>

            {/* EDITAR: Body text */}
            <div className="space-y-4 text-lg md:text-xl text-muted-foreground mb-8">
              <p>
                La motivación dura una hora; la{" "}
                <span className="text-foreground font-medium">PNL aplicada</span>{" "}
                dura toda la vida.
              </p>
              <p>
                20 años reprogramando cerebros que llevan décadas funcionando mal.
              </p>
              <p className="text-foreground font-semibold">
                No busco caerte bien. Busco que factures.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <WhatsAppButton
                href={WHATSAPP_LINKS.accionInmediata}
                variant="hero"
                size="lg"
                eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_HERO}
              >
                ¡Quiero tomar acción ya!
                <ArrowRight className="w-5 h-5" />
              </WhatsAppButton>

              <a
                href="/agenda"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border rounded-lg transition-all duration-300 focus-ring"
              >
                <Calendar className="w-5 h-5" />
                Agendar sesión
              </a>
            </div>

            {/* Microcopy de confianza */}
            <p className="text-sm text-muted-foreground">
              Respuesta por WhatsApp. Sin spam. Sin llamadas raras.
            </p>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl transform scale-95" />
              
              {/* TODO: Reemplazar placeholder por foto real de Julián "arremangándose" */}
              <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 bg-carbon-light">
                {/* Placeholder image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-carbon-light to-carbon">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">JV</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {/* TODO: Agregar imagen real */}
                      Julián Vargas Montagut
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-2">
                      Dr. Sarcasmo
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge decorativo */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-lg glow-red">
                +20 años de experiencia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
