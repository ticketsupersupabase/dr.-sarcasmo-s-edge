/**
 * =============================================================
 * WHATSAPP LINKS - DR. SARCASMO
 * =============================================================
 * EDITAR: Número de WhatsApp y mensajes prellenados aquí
 * =============================================================
 */

// EDITAR: Número de WhatsApp (formato internacional sin +)
export const WHATSAPP_NUMBER = "573022669226";

// EDITAR: Links de WhatsApp prellenados para cada ruta de conversión
export const WHATSAPP_LINKS = {
  // A) Acción inmediata (hero)
  accionInmediata: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola Dr. Sarcasmo, quiero tomar acción ya.

Nombre: _____
Ciudad: _____
Estoy interesado en: (1) Libro (2) Mentoría 1 a 1 (3) Programa Empresas
Contexto rápido: _____
¿Cuál es el siguiente paso?`
  )}`,

  // B) Libro físico firmado
  libroFisico: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola Dr. Sarcasmo, quiero el libro físico con dedicatoria ($89.000 envío gratis).

Nombre: _____
Cédula: _____
Dirección de envío: _____
Ciudad: _____
Indicaciones dedicatoria: _____
¿Cómo hacemos el pago?`
  )}`,

  // C) PDF
  libroPDF: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola Dr. Sarcasmo, quiero la versión PDF del libro ($50.000).

Nombre: _____
Correo para enviar PDF: _____
¿Cómo hacemos el pago?`
  )}`,

  // D) Mentoría 1 a 1 (oferta flash)
  mentoria: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola Dr. Sarcasmo, quiero reservar mentoría 1 a 1 (hoy $150.000, antes $300.000).

Nombre: _____
Zona horaria: _____
Disponibilidad: (Días/horas) _____
Tema principal: _____
¿Cómo se confirma la reserva?`
  )}`,

  // E) Empresas
  empresas: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola Dr. Sarcasmo, quiero cotizar el programa para empresas ($2.000.000, hasta 10 personas, 4 formaciones+ bonus 1 año mentorías).

Empresa: _____
Ciudad: _____
Cantidad personas: _____
Objetivo comercial: _____
¿Me compartes agenda y alcance?`
  )}`,
} as const;

// EDITAR: Dirección física
export const ADDRESS = {
  street: "Calle 3B, Carrera 25",
  city: "Barranquilla",
  country: "Colombia",
  mapsUrl: "https://www.google.com/maps?q=Calle%203B%20Carrera%2025%20Barranquilla",
} as const;

/**
 * Genera un link de WhatsApp dinámico con mensaje personalizado
 * @param message - Mensaje a enviar
 * @returns URL de WhatsApp con mensaje prellenado
 */
export function generateWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Tracking de eventos de analytics (sin backend)
 * EDITAR: Conectar con Google Analytics, Meta Pixel, etc.
 */
export function trackEvent(eventName: string, params?: Record<string, string>) {
  // Verificar si Google Analytics está disponible
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }
  
  // Log en desarrollo
  console.log(`[Analytics] ${eventName}`, params);
}

// Eventos predefinidos para tracking
export const ANALYTICS_EVENTS = {
  CLICK_WHATSAPP_HERO: "click_whatsapp_hero",
  CLICK_WHATSAPP_LIBRO_FISICO: "click_whatsapp_libro_fisico",
  CLICK_WHATSAPP_PDF: "click_whatsapp_pdf",
  CLICK_WHATSAPP_MENTORIA: "click_whatsapp_mentoria",
  CLICK_WHATSAPP_EMPRESAS: "click_whatsapp_empresas",
  SUBMIT_FORM_TO_WHATSAPP: "submit_form_to_whatsapp",
  CLICK_MAPS: "click_maps",
} as const;
