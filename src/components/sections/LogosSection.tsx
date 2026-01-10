/**
 * =============================================================
 * LOGOS SECTION - CARRUSEL DE INSTITUCIONES (MARQUEE)
 * =============================================================
 * REGLA: NO descargar logos de internet
 * Mostrar SOLO logos suministrados por el cliente en /public/logos/
 * 
 * EDITAR: Lista de logos autorizados
 * EDITAR: Velocidad de animación (--marquee-speed en CSS)
 * 
 * Animación: SOLO transform: translateX (sin layout shift)
 * Respeta prefers-reduced-motion
 * =============================================================
 */

// EDITAR: Agregar logos autorizados aquí (solo con permiso del cliente)
const LOGOS = [
  { src: "/logos/sena.png", alt: "Logo SENA", name: "SENA" },
  { src: "/logos/universidad-atlantico.png", alt: "Logo Universidad del Atlántico", name: "Universidad del Atlántico" },
  { src: "/logos/americana.png", alt: "Logo Americana Institución Universitaria", name: "Americana" },
  { src: "/logos/simon-bolivar.png", alt: "Logo Universidad Simón Bolívar", name: "Universidad Simón Bolívar" },
  { src: "/logos/universidad-costa.png", alt: "Logo Universidad de la Costa", name: "Universidad de la Costa" },
  { src: "/logos/unibarranquilla.png", alt: "Logo Institución Universitaria de Barranquilla", name: "IU Barranquilla" },
];

export function LogosSection() {
  // Si no hay logos, no mostrar la sección
  if (LOGOS.length === 0) {
    return null;
  }

  return (
    <section className="py-10 border-y border-border/50 bg-white">
      <div className="container-custom px-4 md:px-8 mb-6">
        <p className="text-center text-muted-foreground text-sm">
          {/* EDITAR: Título del carrusel */}
          Universidades y organizaciones donde se ha presentado
        </p>
      </div>
      
      {/* Marquee container - Animación con transform solamente */}
      <div className="marquee-container relative">
        {/* Fade edges */}
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />
        
        {/* Scrolling logos - Duplicados para loop continuo */}
        <div className="marquee-track">
          {/* Primera copia */}
          {LOGOS.map((logo, index) => (
            <div
              key={`a-${logo.name}-${index}`}
              className="flex-shrink-0 mx-10 flex items-center justify-center h-12 md:h-14"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
          {/* Segunda copia para loop continuo */}
          {LOGOS.map((logo, index) => (
            <div
              key={`b-${logo.name}-${index}`}
              className="flex-shrink-0 mx-10 flex items-center justify-center h-12 md:h-14"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Disclaimer legal */}
      <div className="container-custom px-4 md:px-8 mt-6">
        <p className="text-center text-muted-foreground/60 text-xs">
          {/* TODO: Confirmar autorización de todos los logos */}
          Logos mostrados con autorización.
        </p>
      </div>
    </section>
  );
}
