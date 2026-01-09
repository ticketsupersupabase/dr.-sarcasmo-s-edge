/**
 * =============================================================
 * LOGOS SECTION - CARRUSEL DE CLIENTES/INSTITUCIONES
 * =============================================================
 * REGLA: NO descargar logos de internet
 * Mostrar SOLO logos suministrados por el cliente en /public/logos/
 * TODO: Agregar logos reales (solo con autorización)
 * =============================================================
 */

// TODO: Agregar logos reales proporcionados por el cliente
// Los logos deben estar en /public/logos/ con autorización
const LOGOS = [
  // EDITAR: Agregar logos autorizados aquí
  // { src: "/logos/sena.png", alt: "SENA", name: "SENA" },
  // { src: "/logos/uninorte.png", alt: "Universidad del Norte", name: "Universidad del Norte" },
  // { src: "/logos/cliente-1.png", alt: "Cliente 1", name: "Cliente 1" },
];

export function LogosSection() {
  // Si no hay logos, mostrar placeholder
  if (LOGOS.length === 0) {
    return (
      <section className="py-12 border-y border-border/30 bg-carbon-light/50">
        <div className="container-custom px-4 md:px-8">
          <p className="text-center text-muted-foreground text-sm">
            {/* TODO: Agregar logos de clientes/instituciones */}
            Han confiado equipos de empresas e instituciones reconocidas
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 border-y border-border/30 bg-carbon-light/50 overflow-hidden">
      <div className="container-custom px-4 md:px-8 mb-6">
        <p className="text-center text-muted-foreground text-sm mb-8">
          Han confiado en Dr. Sarcasmo:
        </p>
      </div>
      
      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling logos */}
        <div className="flex marquee">
          {/* Duplicate logos for seamless loop */}
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center h-16"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Disclaimer legal */}
      <div className="container-custom px-4 md:px-8 mt-6">
        <p className="text-center text-muted-foreground/50 text-xs">
          Logos mostrados con autorización del cliente.
        </p>
      </div>
    </section>
  );
}
