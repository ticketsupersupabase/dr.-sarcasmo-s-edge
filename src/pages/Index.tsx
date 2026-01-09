/**
 * =============================================================
 * INDEX PAGE - LANDING PRINCIPAL
 * =============================================================
 * Página principal de alta conversión para Dr. Sarcasmo
 * EDITAR: Orden de secciones y contenido en cada componente
 * =============================================================
 */

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/ui/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogosSection } from "@/components/sections/LogosSection";
import { PainSection } from "@/components/sections/PainSection";
import { BookSection } from "@/components/sections/BookSection";
import { MentoriaSection } from "@/components/sections/MentoriaSection";
import { EmpresasSection } from "@/components/sections/EmpresasSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header sticky */}
      <Header />

      {/* Main content */}
      <main>
        {/* Hero - El Filtro */}
        <HeroSection />

        {/* Logos de clientes/instituciones */}
        <LogosSection />

        {/* El Dolor - Realidad */}
        <PainSection />

        {/* Libro "Desmotívame si puedes" */}
        <BookSection />

        {/* Mentoría 1 a 1 - Oferta Flash */}
        <MentoriaSection />

        {/* Programa Empresas */}
        <EmpresasSection />

        {/* Quién es Julián + Cierre */}
        <AboutSection />

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

export default Index;
