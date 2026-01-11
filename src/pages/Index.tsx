/**
 * =============================================================
 * INDEX PAGE - LANDING PRINCIPAL (PREMIUM)
 * =============================================================
 * Estructura: Hero + Form arriba, secciones, cierre con form
 * =============================================================
 */

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogosSection } from "@/components/sections/LogosSection";
import { PainSection } from "@/components/sections/PainSection";
import { BookSection } from "@/components/sections/BookSection";
import { MentoriaSection } from "@/components/sections/MentoriaSection";
import { EmpresasSection } from "@/components/sections/EmpresasSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SchedulingForm } from "@/components/SchedulingForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <HeroSection />


        {/* Logos de instituciones */}
        <LogosSection />

        {/* Quién es Julián + Cierre */}
        <AboutSection />

        {/* El Dolor */}
        <PainSection />

        {/* Libro */}
        <BookSection />

        {/* Mentoría 1 a 1 */}
        <MentoriaSection />

        {/* Programa Empresas */}
        <EmpresasSection />

        

          {/* Formulario ARRIBA (debajo del hero) */}
        <section id="agendar" className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue text-center mb-4">
                Agenda / Cotiza por WhatsApp
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Completa el formulario y te contactamos por WhatsApp.
              </p>
              <SchedulingForm />
            </div>
          </div>
        </section>

        {/* Mapa + Contacto */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
