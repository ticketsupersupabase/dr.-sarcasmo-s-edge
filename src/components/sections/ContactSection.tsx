/**
 * =============================================================
 * CONTACT SECTION - MAPA + WHATSAPP
 * =============================================================
 * EDITAR: Dirección física y link de Google Maps
 * =============================================================
 */

import { MapPin, Navigation, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_LINKS, ADDRESS, ANALYTICS_EVENTS, trackEvent } from "@/lib/whatsapp";

export function ContactSection() {
  const handleMapsClick = () => {
    trackEvent(ANALYTICS_EVENTS.CLICK_MAPS);
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ¿Dónde encontrarnos?
            </h2>
            <p className="text-lg text-muted-foreground">
              Visítanos en Barranquilla o contáctanos por WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mapa */}
            <div className="card-premium overflow-hidden">
              {/* Iframe de Google Maps */}
              <div className="aspect-video bg-carbon-light">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d-74.8!3d10.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ2FsbGUgM0IsIENhcnJlcmEgMjUsIEJhcnJhbnF1aWxsYQ!5e0!3m2!1ses!2sco!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Dr. Sarcasmo"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="p-6">
                {/* EDITAR: Dirección */}
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {ADDRESS.street}
                    </p>
                    <p className="text-muted-foreground">
                      {ADDRESS.city}, {ADDRESS.country}
                    </p>
                  </div>
                </div>

                <a
                  href={ADDRESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMapsClick}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Cómo llegar
                </a>
              </div>
            </div>

            {/* Contact Card */}
            <div className="card-premium p-8 flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  ¿Listo para la acción?
                </h3>
                <p className="text-muted-foreground">
                  La conversación que puede cambiar tu negocio está a un clic.
                </p>
              </div>

              <WhatsAppButton
                href={WHATSAPP_LINKS.accionInmediata}
                variant="hero"
                size="lg"
                eventName={ANALYTICS_EVENTS.CLICK_WHATSAPP_HERO}
                className="w-full"
              >
                Escribir por WhatsApp
              </WhatsAppButton>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Respuesta en menos de 24 horas hábiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
