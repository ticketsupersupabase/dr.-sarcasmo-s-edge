/**
 * =============================================================
 * EMPRESAS SECTION - PROGRAMA LÍDERES INSACIABLES
 * =============================================================
 * EDITAR: Precios del programa y módulos
 * =============================================================
 */

import { Building2, Users, Award, Calendar, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";

// EDITAR: Módulos del programa
const MODULOS = [
  "Reprogramación mentalidad de escasez",
  "PNL para cierres letales",
  "Liderazgo con carácter y autoridad",
  "Cultura de ejecución y hábitos de éxito",
];

export function EmpresasSection() {
  return (
    <section id="empresas" className="section-padding">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            {/* EDITAR: Título */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Programa:{" "}
              <span className="text-primary">Líderes Insaciables</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              PNL para ganar. Sin excusas. Sin medias tintas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Detalles del programa */}
            <div className="card-premium p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                Detalles del programa
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      4 formaciones de alto impacto
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Hasta 10 personas por programa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Bonus: 1 año de mentorías grupales
                    </p>
                    <p className="text-muted-foreground text-sm">
                      1 sesión virtual al mes
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  {/* EDITAR: Precio empresas */}
                  <p className="text-muted-foreground mb-1">Inversión:</p>
                  <p className="text-3xl font-bold text-gold-gradient">
                    $2.000.000
                  </p>
                </div>
              </div>
            </div>

            {/* Módulos */}
            <div className="card-premium p-8 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Módulos incluidos
              </h3>

              <ul className="space-y-4">
                {MODULOS.map((modulo, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{modulo}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <WhatsAppButton
                  href={WHATSAPP_LINKS.empresas}
                  variant="primary"
                  size="lg"
                  eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_EMPRESAS}
                  className="w-full"
                >
                  Cotizar para mi empresa
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
