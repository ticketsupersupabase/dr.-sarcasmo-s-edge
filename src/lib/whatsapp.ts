/**
 * =============================================================
 * WHATSAPP LINKS - DR. SARCASMO
 * =============================================================
 * EDITAR: Número de WhatsApp y mensajes prellenados aquí
 * =============================================================
 */

// EDITAR: Número de WhatsApp (formato internacional sin +)
export const WHATSAPP_NUMBER = "573052669226";

// EDITAR: Links de WhatsApp prellenados para cada ruta de conversión
export const WHATSAPP_LINKS = {
  // A) Acción inmediata (Hero / sticky)
  accionInmediata: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola Dr. Sarcasmo, quiero tomar acción.

Nombre: _____
Ciudad: _____
Interés: Libro / Mentoría 1a1 / Empresas / Otro
Mensaje: _____
¿Cuál es el siguiente paso?`
  )}`,

  // B) Libro físico firmado
  libroFisico: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quiero el LIBRO FÍSICO con dedicatoria ($89.000 envío gratis).

Nombre: _____
Dirección envío: _____
Ciudad: _____
Dedicatoria: _____
¿Medios de pago?`
  )}`,

  // C) Libro PDF
  libroPDF: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quiero el PDF del libro ($50.000).

Nombre: _____
Correo: _____
¿Medios de pago?`
  )}`,

  // D) Mentoría 1 a 1
  mentoria: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quiero agendar MENTORÍA 1a1 (hoy $150.000).

Nombre: _____
Fecha preferida: _____
Hora preferida: _____
Tema: _____
¿Me confirmas disponibilidad?`
  )}`,

  // E) Programa empresas
  empresas: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quiero cotizar PROGRAMA EMPRESAS ($2.000.000 - hasta 10 personas).

Empresa: _____
Cargo: _____
Ciudad: _____
Personas: _____
Objetivo: _____
¿Me envías propuesta?`
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
 * Genera un link de Google Calendar
 * @param title - Título del evento
 * @param date - Fecha (YYYY-MM-DD)
 * @param time - Hora (HH:MM)
 * @param description - Descripción del evento
 * @param location - Ubicación
 * @returns URL de Google Calendar
 */
export function generateGoogleCalendarLink(
  title: string,
  date: string,
  time: string,
  description: string = "",
  location: string = "Online / Por confirmar"
): string {
  // Convertir fecha y hora a formato Google Calendar (YYYYMMDDTHHMMSS)
  const dateTime = `${date.replace(/-/g, '')}T${time.replace(':', '')}00`;
  
  // Calcular fecha fin (1 hora después)
  const startHour = parseInt(time.split(':')[0]);
  const endHour = String(startHour + 1).padStart(2, '0');
  const endTime = `${endHour}:${time.split(':')[1]}`;
  const endDateTime = `${date.replace(/-/g, '')}T${endTime.replace(':', '')}00`;
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${dateTime}/${endDateTime}`,
    details: description,
    location: location,
    ctz: 'America/Bogota',
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
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
  CLICK_CALENDAR: "click_calendar",
} as const;
