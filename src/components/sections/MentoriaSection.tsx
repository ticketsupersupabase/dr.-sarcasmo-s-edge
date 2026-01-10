/**
 * =============================================================
 * MENTORIA SECTION - MENTORÍA 1 A 1
 * =============================================================
 * EDITAR: Precios de mentoría, descripción, bullets
 * =============================================================
 */

import { Brain, Target, ClipboardList, Calendar } from "lucide-react";
import { WHATSAPP_LINKS, trackEvent, ANALYTICS_EVENTS } from "@/lib/whatsapp";

// EDITAR: Lo que incluye la mentoría
const MENTORIA_INCLUDES = [
  {
    icon: Brain,
    text: "Diagnóstico del bloqueo principal",
  },
  {
    icon: ClipboardList,
    text: "Plan de ejecución personalizado",
  },
  {
    icon: Target,
    text: "Sesión privada de PNL",
  },
];

export function MentoriaSection() {
  const scrollToForm = (preselect: string) => {
    // Scroll to form and preselect mentoring
    const formSection = document.getElementById("agendar");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
      // Try to preselect mentoring in form
      setTimeout(() => {
        const select = document.querySelector('select[name="interes"]') as HTMLSelectElement;
        if (select) {
          select.value = preselect;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 500);
    }
  };

  return (
    <section id="mentoria" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/profile.jpg"
                alt="Julián Vargas - Dr. Sarcasmo en sesión de mentoría"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -z-10 top-8 -left-8 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 font-semibold text-sm rounded-full mb-4">
              50% OFF - Solo por hoy
            </span>

            {/* EDITAR: Título */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
              Mentoría 1 a 1
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Tú y yo, de frente, sin rodeos. 🧠⚡
            </p>

            {/* EDITAR: Precios */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-brand-gold">$150.000</span>
              <span className="text-xl text-gray-400 line-through">$300.000</span>
              <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-bold rounded-full">
                -50%
              </span>
            </div>

            {/* EDITAR: Descripción */}
            <p className="text-gray-600 leading-relaxed mb-8">
              Una sesión privada de PNL para descuartizar tus bloqueos. 
              Si te ofende la verdad, no compres. Si quieres resultados, hablemos.
            </p>

            {/* What's included */}
            <div className="space-y-4 mb-8">
              {MENTORIA_INCLUDES.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollToForm("mentoria")}
              className="w-full sm:w-auto btn-primary btn-lg"
            >
              <Calendar className="w-5 h-5" />
              RESERVAR SESIÓN (50% OFF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
