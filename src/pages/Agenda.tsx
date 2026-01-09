/**
 * =============================================================
 * AGENDA PAGE - FORMULARIO DE AGENDAMIENTO + FAQ + MAPA
 * =============================================================
 * Página dedicada para agendamiento completo
 * EDITAR: Contenido y campos del formulario
 * =============================================================
 */

import { ArrowLeft, Calendar } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/ui/WhatsAppButton";
import { SchedulingForm } from "@/components/SchedulingForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";

const Agenda = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header sticky */}
      <Header />

      {/* Main content */}
      <main className="pt-24">
        {/* Back link */}
        <div className="container-custom px-4 md:px-8 py-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </a>
        </div>

        {/* Form Section */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-6">
                  <Calendar className="w-4 h-4" />
                  Agendamiento directo
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Agenda tu{" "}
                  <span className="text-primary">próximo paso</span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Completa el formulario y te contactamos por WhatsApp para
                  confirmar. Sin intermediarios, sin llamadas sorpresa.
                </p>
              </div>

              {/* Form Card */}
              <div className="card-premium p-8 md:p-10">
                <SchedulingForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Mapa + Contacto */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button (mobile) */}
      <FloatingWhatsApp href={WHATSAPP_LINKS.accionInmediata} />
    </div>
  );
};

export default Agenda;
