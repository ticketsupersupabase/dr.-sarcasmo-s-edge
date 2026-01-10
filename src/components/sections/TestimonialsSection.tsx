/**
 * =============================================================
 * TESTIMONIALS SECTION - TESTIMONIOS
 * =============================================================
 * EDITAR: Lista de testimonios (solo reales)
 * =============================================================
 */

import { Quote } from "lucide-react";

// EDITAR: Testimonios reales del cliente
const TESTIMONIOS = [
  {
    name: "María López",
    role: "Gerente Comercial",
    image: "/images/capacitacion.jpg",
    text: "Después de la mentoría con el Dr. Sarcasmo, mi equipo duplicó sus ventas en 3 meses. Sin excusas, solo resultados.",
  },
  {
    name: "Carlos Mendoza",
    role: "Emprendedor",
    image: "/images/profile.jpg",
    text: "El libro me abrió los ojos. Por primera vez entendí por qué llevaba años estancado. Ahora facturo el triple.",
  },
  {
    name: "Ana Rodríguez",
    role: "Directora de Ventas",
    image: "/images/capacitacion.jpg",
    text: "La PNL aplicada que enseña Julián no se parece a nada que haya visto. Es directa, sin adornos, y funciona.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
            Personas reales. Procesos reales.
          </h2>
          <p className="text-xl text-gray-600">
            Lo que dicen quienes dejaron de quejarse
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIOS.map((testimonio, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-gold/30 mb-4" />

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonio.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={testimonio.image}
                    alt={testimonio.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonio.name}</p>
                  <p className="text-sm text-gray-500">{testimonio.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
