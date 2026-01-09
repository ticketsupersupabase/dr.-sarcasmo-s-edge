/**
 * =============================================================
 * SCHEDULING FORM - FORMULARIO DE AGENDAMIENTO (SIN BACKEND)
 * =============================================================
 * EDITAR: Campos del formulario y mensaje de WhatsApp generado
 * Incluye: fecha/hora para mentoría + botón Google Calendar
 * =============================================================
 */

import { useState } from "react";
import { Send, BookOpen, User, Building2, Calendar, Clock, ExternalLink } from "lucide-react";
import { generateWhatsAppLink, generateGoogleCalendarLink, ANALYTICS_EVENTS, trackEvent, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type InterestType = "libro-fisico" | "libro-pdf" | "mentoria" | "empresas" | "otro";

interface FormData {
  nombre: string;
  celular: string;
  ciudad: string;
  interes: InterestType | "";
  // Libro físico
  direccionEnvio: string;
  dedicatoria: string;
  // Libro PDF
  correoPDF: string;
  // Mentoría
  fechaPreferida: string;
  horaPreferida: string;
  temaPrincipal: string;
  // Empresas
  empresa: string;
  cargo: string;
  numPersonas: string;
  objetivo: string;
  // General
  mensaje: string;
  consentimiento: boolean;
}

const initialFormData: FormData = {
  nombre: "",
  celular: "",
  ciudad: "",
  interes: "",
  direccionEnvio: "",
  dedicatoria: "",
  correoPDF: "",
  fechaPreferida: "",
  horaPreferida: "",
  temaPrincipal: "",
  empresa: "",
  cargo: "",
  numPersonas: "",
  objetivo: "",
  mensaje: "",
  consentimiento: false,
};

const HORAS_DISPONIBLES = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

export function SchedulingForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nombre.trim()) newErrors.nombre = "Requerido";
    if (!formData.celular.trim()) newErrors.celular = "Requerido";
    if (!formData.ciudad.trim()) newErrors.ciudad = "Requerido";
    if (!formData.interes) newErrors.interes = "Selecciona una opción";
    if (!formData.consentimiento) newErrors.consentimiento = "Requerido";

    if (formData.interes === "libro-fisico" && !formData.direccionEnvio.trim()) {
      newErrors.direccionEnvio = "Requerido";
    }
    if (formData.interes === "libro-pdf" && !formData.correoPDF.trim()) {
      newErrors.correoPDF = "Requerido";
    }
    if (formData.interes === "mentoria") {
      if (!formData.fechaPreferida) newErrors.fechaPreferida = "Requerido";
      if (!formData.horaPreferida) newErrors.horaPreferida = "Requerido";
    }
    if (formData.interes === "empresas" && !formData.empresa.trim()) {
      newErrors.empresa = "Requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateMessage = (): string => {
    let message = "";

    switch (formData.interes) {
      case "libro-fisico":
        message = `Hola, quiero el LIBRO FÍSICO con dedicatoria ($89.000 envío gratis).

Nombre: ${formData.nombre}
Dirección envío: ${formData.direccionEnvio}
Ciudad: ${formData.ciudad}
Dedicatoria: ${formData.dedicatoria || "Sin indicaciones"}
Celular: ${formData.celular}
¿Medios de pago?`;
        break;
      case "libro-pdf":
        message = `Hola, quiero el PDF del libro ($50.000).

Nombre: ${formData.nombre}
Correo: ${formData.correoPDF}
Ciudad: ${formData.ciudad}
Celular: ${formData.celular}
¿Medios de pago?`;
        break;
      case "mentoria":
        message = `Hola, quiero agendar MENTORÍA 1a1 (hoy $150.000).

Nombre: ${formData.nombre}
Fecha preferida: ${formData.fechaPreferida}
Hora preferida: ${formData.horaPreferida}
Tema: ${formData.temaPrincipal || "Por definir"}
Ciudad: ${formData.ciudad}
Celular: ${formData.celular}
¿Me confirmas disponibilidad?`;
        break;
      case "empresas":
        message = `Hola, quiero cotizar PROGRAMA EMPRESAS ($2.000.000 - hasta 10 personas).

Empresa: ${formData.empresa}
Cargo: ${formData.cargo || "No indicado"}
Ciudad: ${formData.ciudad}
Personas: ${formData.numPersonas || "Por definir"}
Objetivo: ${formData.objetivo || "Por definir"}
Contacto: ${formData.nombre} - ${formData.celular}
¿Me envías propuesta?`;
        break;
      default:
        message = `Hola Dr. Sarcasmo, quiero tomar acción.

Nombre: ${formData.nombre}
Ciudad: ${formData.ciudad}
Celular: ${formData.celular}
Mensaje: ${formData.mensaje || "Quiero más información"}
¿Cuál es el siguiente paso?`;
    }

    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateMessage();
    const whatsappUrl = generateWhatsAppLink(message);

    trackEvent(ANALYTICS_EVENTS.SUBMIT_FORM_TO_WHATSAPP, { interest: formData.interes });
    window.open(whatsappUrl, "_blank");
  };

  const handleAddToCalendar = () => {
    if (!formData.fechaPreferida || !formData.horaPreferida) return;

    const calendarUrl = generateGoogleCalendarLink(
      "Mentoría 1 a 1 - Dr. Sarcasmo",
      formData.fechaPreferida,
      formData.horaPreferida,
      `Confirmación por WhatsApp: +57 302 266 9226\nTema: ${formData.temaPrincipal || "Por definir"}`,
      "Online / Por confirmar"
    );

    trackEvent(ANALYTICS_EVENTS.CLICK_CALENDAR);
    window.open(calendarUrl, "_blank");
  };

  const inputClasses = "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const labelClasses = "block text-sm font-medium text-foreground mb-2";
  const errorClasses = "text-sm text-destructive mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Datos básicos */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="nombre" className={labelClasses}>Nombre *</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className={cn(inputClasses, errors.nombre && "border-destructive")} placeholder="Tu nombre" maxLength={100} />
          {errors.nombre && <p className={errorClasses}>{errors.nombre}</p>}
        </div>
        <div>
          <label htmlFor="celular" className={labelClasses}>WhatsApp *</label>
          <input type="tel" id="celular" name="celular" value={formData.celular} onChange={handleChange} className={cn(inputClasses, errors.celular && "border-destructive")} placeholder="+57 300 000 0000" maxLength={20} />
          {errors.celular && <p className={errorClasses}>{errors.celular}</p>}
        </div>
        <div>
          <label htmlFor="ciudad" className={labelClasses}>Ciudad *</label>
          <input type="text" id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleChange} className={cn(inputClasses, errors.ciudad && "border-destructive")} placeholder="Tu ciudad" maxLength={50} />
          {errors.ciudad && <p className={errorClasses}>{errors.ciudad}</p>}
        </div>
      </div>

      {/* Interés */}
      <div>
        <label htmlFor="interes" className={labelClasses}>¿Qué te interesa? *</label>
        <select id="interes" name="interes" value={formData.interes} onChange={handleChange} className={cn(inputClasses, errors.interes && "border-destructive")}>
          <option value="">Selecciona una opción</option>
          <option value="libro-fisico">Libro (Físico)</option>
          <option value="libro-pdf">Libro (PDF)</option>
          <option value="mentoria">Mentoría 1 a 1</option>
          <option value="empresas">Programa empresas</option>
          <option value="otro">Otro</option>
        </select>
        {errors.interes && <p className={errorClasses}>{errors.interes}</p>}
      </div>

      {/* Campos condicionales - Libro Físico */}
      {formData.interes === "libro-fisico" && (
        <div className="space-y-4 p-4 bg-muted/50 rounded-lg border border-border">
          <div>
            <label htmlFor="direccionEnvio" className={labelClasses}>Dirección de envío *</label>
            <input type="text" id="direccionEnvio" name="direccionEnvio" value={formData.direccionEnvio} onChange={handleChange} className={cn(inputClasses, errors.direccionEnvio && "border-destructive")} placeholder="Dirección completa" maxLength={200} />
            {errors.direccionEnvio && <p className={errorClasses}>{errors.direccionEnvio}</p>}
          </div>
          <div>
            <label htmlFor="dedicatoria" className={labelClasses}>Indicaciones dedicatoria</label>
            <input type="text" id="dedicatoria" name="dedicatoria" value={formData.dedicatoria} onChange={handleChange} className={inputClasses} placeholder="¿A nombre de quién?" maxLength={200} />
          </div>
        </div>
      )}

      {/* Campos condicionales - Libro PDF */}
      {formData.interes === "libro-pdf" && (
        <div className="p-4 bg-muted/50 rounded-lg border border-border">
          <label htmlFor="correoPDF" className={labelClasses}>Correo para enviar PDF *</label>
          <input type="email" id="correoPDF" name="correoPDF" value={formData.correoPDF} onChange={handleChange} className={cn(inputClasses, errors.correoPDF && "border-destructive")} placeholder="tu@email.com" maxLength={100} />
          {errors.correoPDF && <p className={errorClasses}>{errors.correoPDF}</p>}
        </div>
      )}

      {/* Campos condicionales - Mentoría */}
      {formData.interes === "mentoria" && (
        <div className="space-y-4 p-4 bg-muted/50 rounded-lg border border-border">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fechaPreferida" className={labelClasses}><Calendar className="w-4 h-4 inline mr-1" />Fecha preferida *</label>
              <input type="date" id="fechaPreferida" name="fechaPreferida" value={formData.fechaPreferida} onChange={handleChange} className={cn(inputClasses, errors.fechaPreferida && "border-destructive")} min={new Date().toISOString().split('T')[0]} />
              {errors.fechaPreferida && <p className={errorClasses}>{errors.fechaPreferida}</p>}
            </div>
            <div>
              <label htmlFor="horaPreferida" className={labelClasses}><Clock className="w-4 h-4 inline mr-1" />Hora preferida *</label>
              <select id="horaPreferida" name="horaPreferida" value={formData.horaPreferida} onChange={handleChange} className={cn(inputClasses, errors.horaPreferida && "border-destructive")}>
                <option value="">Selecciona hora</option>
                {HORAS_DISPONIBLES.map(hora => <option key={hora} value={hora}>{hora}</option>)}
              </select>
              {errors.horaPreferida && <p className={errorClasses}>{errors.horaPreferida}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="temaPrincipal" className={labelClasses}>Tema principal</label>
            <textarea id="temaPrincipal" name="temaPrincipal" value={formData.temaPrincipal} onChange={handleChange} className={cn(inputClasses, "min-h-[80px] resize-y")} placeholder="¿Qué situación quieres trabajar?" maxLength={300} />
          </div>
          {formData.fechaPreferida && formData.horaPreferida && (
            <button type="button" onClick={handleAddToCalendar} className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <ExternalLink className="w-4 h-4" />
              Agregar al calendario (Google Calendar)
            </button>
          )}
        </div>
      )}

      {/* Campos condicionales - Empresas */}
      {formData.interes === "empresas" && (
        <div className="space-y-4 p-4 bg-muted/50 rounded-lg border border-border">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="empresa" className={labelClasses}>Empresa *</label>
              <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} className={cn(inputClasses, errors.empresa && "border-destructive")} placeholder="Nombre de la empresa" maxLength={100} />
              {errors.empresa && <p className={errorClasses}>{errors.empresa}</p>}
            </div>
            <div>
              <label htmlFor="cargo" className={labelClasses}>Tu cargo</label>
              <input type="text" id="cargo" name="cargo" value={formData.cargo} onChange={handleChange} className={inputClasses} placeholder="Ej: Gerente" maxLength={100} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="numPersonas" className={labelClasses}>Número de personas</label>
              <input type="text" id="numPersonas" name="numPersonas" value={formData.numPersonas} onChange={handleChange} className={inputClasses} placeholder="Hasta 10 incluidas" maxLength={50} />
            </div>
            <div>
              <label htmlFor="objetivo" className={labelClasses}>Objetivo comercial</label>
              <input type="text" id="objetivo" name="objetivo" value={formData.objetivo} onChange={handleChange} className={inputClasses} placeholder="¿Qué resultados esperas?" maxLength={200} />
            </div>
          </div>
        </div>
      )}

      {/* Mensaje adicional para "otro" */}
      {formData.interes === "otro" && (
        <div>
          <label htmlFor="mensaje" className={labelClasses}>Mensaje</label>
          <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} className={cn(inputClasses, "min-h-[100px] resize-y")} placeholder="Cuéntanos qué necesitas" maxLength={500} />
        </div>
      )}

      {/* Consentimiento */}
      <div>
        <label className={cn("flex items-start gap-3 cursor-pointer", errors.consentimiento && "text-destructive")}>
          <input type="checkbox" name="consentimiento" checked={formData.consentimiento} onChange={handleChange} className="mt-1 w-5 h-5 rounded border-border" />
          <span className="text-sm text-muted-foreground">Acepto ser contactado por WhatsApp para confirmar. *</span>
        </label>
        {errors.consentimiento && <p className={errorClasses}>{errors.consentimiento}</p>}
      </div>

      {/* Submit */}
      <button type="submit" className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:brightness-110 glow-gold transition-all duration-300 focus-ring">
        <Send className="w-5 h-5" />
        Enviar y confirmar por WhatsApp
      </button>

      <p className="text-center text-sm text-muted-foreground">
        Al enviar, se abrirá WhatsApp con tu mensaje prellenado.
      </p>
    </form>
  );
}
