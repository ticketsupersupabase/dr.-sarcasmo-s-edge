/**
 * =============================================================
 * BOOK SECTION - "DESMOTÍVAME SI PUEDES"
 * =============================================================
 * EDITAR: Precios del libro (físico y PDF)
 * TODO: Reemplazar placeholder de portada por imagen real
 * =============================================================
 */

import { Book, Download, Truck, Pen } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ANALYTICS_EVENTS } from "@/lib/whatsapp";

export function BookSection() {
  return (
    <section id="libro" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Book Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow behind book */}
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl transform scale-90" />
              
              {/* TODO: Reemplazar placeholder por portada real del libro */}
              <div className="relative w-72 md:w-80 aspect-[2/3] rounded-xl overflow-hidden border-2 border-accent/30 shadow-2xl glow-gold transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-carbon to-carbon-light flex flex-col items-center justify-center p-8">
                  <Book className="w-16 h-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                    Desmotívame
                  </h3>
                  <p className="text-lg text-accent font-semibold text-center">
                    si puedes
                  </p>
                  <div className="mt-6 text-sm text-muted-foreground text-center">
                    Dr. Sarcasmo
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 bg-accent text-background px-3 py-1.5 rounded-lg font-bold text-sm shadow-lg">
                Bestseller
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div>
            {/* EDITAR: Título y descripción del libro */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              El espejo que no quieres ver,{" "}
              <span className="text-accent">pero que necesitas.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Historias reales de gente que dejó de quejarse y empezó a cerrar.
            </p>

            {/* Pricing Cards */}
            <div className="space-y-4 mb-8">
              {/* Libro Físico */}
              <div className="card-premium p-6 border-accent/30 hover:border-accent/50 transition-colors">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Pen className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        Libro físico + dedicatoria
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                        <Truck className="w-4 h-4" />
                        <span>Envío gratis nacional</span>
                      </div>
                    </div>
                  </div>
                  {/* EDITAR: Precio libro físico */}
                  <div className="text-2xl font-bold text-gold-gradient">
                    $89.000
                  </div>
                </div>
                <div className="mt-4">
                  <WhatsAppButton
                    href={WHATSAPP_LINKS.libroFisico}
                    variant="primary"
                    size="md"
                    eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_LIBRO_FISICO}
                    className="w-full sm:w-auto"
                  >
                    Quiero mi libro firmado
                  </WhatsAppButton>
                </div>
              </div>

              {/* PDF */}
              <div className="card-premium p-6 hover:border-accent/30 transition-colors">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Download className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        Versión PDF
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Descarga inmediata
                      </p>
                    </div>
                  </div>
                  {/* EDITAR: Precio PDF */}
                  <div className="text-2xl font-bold text-gold-gradient">
                    $50.000
                  </div>
                </div>
                <div className="mt-4">
                  <WhatsAppButton
                    href={WHATSAPP_LINKS.libroPDF}
                    variant="secondary"
                    size="md"
                    eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_PDF}
                    className="w-full sm:w-auto"
                  >
                    Quiero el PDF
                  </WhatsAppButton>
                </div>
              </div>
            </div>

            {/* Microcopy */}
            <p className="text-sm text-muted-foreground">
              Pagos y envío se confirman por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
