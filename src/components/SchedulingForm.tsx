/**
 * =============================================================
 * SCHEDULING FORM - FORMULARIO DE AGENDAMIENTO (SIN BACKEND)
 * =============================================================
 * EDITAR: Campos del formulario y mensaje de WhatsApp generado
 * Objetivo: Capturar datos y abrir WhatsApp con mensaje completo
 * =============================================================
 */

import { useState } from "react";
import { Send, BookOpen, User, Building2 } from "lucide-react";
import { generateWhatsAppLink, ANALYTICS_EVENTS, trackEvent } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type InterestType = "libro" | "mentoria" | "empresas";

interface FormData {
  nombre: string;
  celular: string;
  ciudad: string;
  interes: InterestType | "";
  // Libro
  formatoLibro: "fisico" | "pdf" | "";
  direccionEnvio: string;
  indicacionesDedicatoria: string;
  correoPDF: string;
  // Mentoría
  disponibilidad: string;
  temaPrincipal: string;
  // Empresas
  empresa: string;
  cargo: string;
  numPersonas: string;
  objetivoComercial: string;
  // General
  observaciones: string;
  consentimiento: boolean;
}

const initialFormData: FormData = {
  nombre: "",
  celular: "",
  ciudad: "",
  interes: "",
  formatoLibro: "",
  direccionEnvio: "",
  indicacionesDedicatoria: "",
  correoPDF: "",
  disponibilidad: "",
  temaPrincipal: "",
  empresa: "",
  cargo: "",
  numPersonas: "",
  objetivoComercial: "",
  observaciones: "",
  consentimiento: false,
};

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

    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }
    if (!formData.celular.trim()) {
      newErrors.celular = "El celular es requerido";
    }
    if (!formData.ciudad.trim()) {
      newErrors.ciudad = "La ciudad es requerida";
    }
    if (!formData.interes) {
      newErrors.interes = "Selecciona un interés";
    }
    if (!formData.consentimiento) {
      newErrors.consentimiento = "Debes aceptar ser contactado";
    }

    // Validaciones condicionales
    if (formData.interes === "libro") {
      if (!formData.formatoLibro) {
        newErrors.formatoLibro = "Selecciona el formato";
      }
      if (formData.formatoLibro === "fisico" && !formData.direccionEnvio.trim()) {
        newErrors.direccionEnvio = "La dirección es requerida";
      }
      if (formData.formatoLibro === "pdf" && !formData.correoPDF.trim()) {
        newErrors.correoPDF = "El correo es requerido";
      }
    }

    if (formData.interes === "empresas") {
      if (!formData.empresa.trim()) {
        newErrors.empresa = "El nombre de la empresa es requerido";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateMessage = (): string => {
    let message = `Hola Dr. Sarcasmo, quiero ${
      formData.interes === "libro"
        ? "el libro"
        : formData.interes === "mentoria"
        ? "mentoría 1 a 1"
        : "el programa para empresas"
    }.\n\n`;

    message += `Nombre: ${formData.nombre}\n`;
    message += `Celular: ${formData.celular}\n`;
    message += `Ciudad: ${formData.ciudad}\n`;

    if (formData.interes === "libro") {
      message += `\nFormato: ${formData.formatoLibro === "fisico" ? "Físico con dedicatoria ($89.000)" : "PDF ($50.000)"}\n`;
      if (formData.formatoLibro === "fisico") {
        message += `Dirección de envío: ${formData.direccionEnvio}\n`;
        if (formData.indicacionesDedicatoria) {
          message += `Indicaciones dedicatoria: ${formData.indicacionesDedicatoria}\n`;
        }
      } else {
        message += `Correo para PDF: ${formData.correoPDF}\n`;
      }
    }

    if (formData.interes === "mentoria") {
      if (formData.disponibilidad) {
        message += `\nDisponibilidad: ${formData.disponibilidad}\n`;
      }
      if (formData.temaPrincipal) {
        message += `Tema principal: ${formData.temaPrincipal}\n`;
      }
    }

    if (formData.interes === "empresas") {
      message += `\nEmpresa: ${formData.empresa}\n`;
      if (formData.cargo) message += `Cargo: ${formData.cargo}\n`;
      if (formData.numPersonas) message += `Número de personas: ${formData.numPersonas}\n`;
      if (formData.objetivoComercial) message += `Objetivo comercial: ${formData.objetivoComercial}\n`;
    }

    if (formData.observaciones) {
      message += `\nObservaciones: ${formData.observaciones}\n`;
    }

    message += "\n¿Me confirmas el siguiente paso?";

    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const message = generateMessage();
    const whatsappUrl = generateWhatsAppLink(message);

    trackEvent(ANALYTICS_EVENTS.SUBMIT_FORM_TO_WHATSAPP, {
      interest: formData.interes,
    });

    window.open(whatsappUrl, "_blank");
  };

  const inputClasses =
    "w-full px-4 py-3 bg-carbon-light border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const labelClasses = "block text-sm font-medium text-foreground mb-2";
  const errorClasses = "text-sm text-destructive mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Datos básicos */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className={labelClasses}>
            Nombre completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={cn(inputClasses, errors.nombre && "border-destructive")}
            placeholder="Tu nombre"
            maxLength={100}
          />
          {errors.nombre && <p className={errorClasses}>{errors.nombre}</p>}
        </div>

        <div>
          <label htmlFor="celular" className={labelClasses}>
            Celular / WhatsApp *
          </label>
          <input
            type="tel"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            className={cn(inputClasses, errors.celular && "border-destructive")}
            placeholder="+57 300 000 0000"
            maxLength={20}
          />
          {errors.celular && <p className={errorClasses}>{errors.celular}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="ciudad" className={labelClasses}>
          Ciudad *
        </label>
        <input
          type="text"
          id="ciudad"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          className={cn(inputClasses, errors.ciudad && "border-destructive")}
          placeholder="Tu ciudad"
          maxLength={50}
        />
        {errors.ciudad && <p className={errorClasses}>{errors.ciudad}</p>}
      </div>

      {/* Interés principal */}
      <div>
        <label className={labelClasses}>Interés principal *</label>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { value: "libro", label: "Quiero el libro", icon: BookOpen },
            { value: "mentoria", label: "Quiero mentoría 1 a 1", icon: User },
            { value: "empresas", label: "Programa empresas", icon: Building2 },
          ].map((option) => (
            <label
              key={option.value}
              className={cn(
                "flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all",
                formData.interes === option.value
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              )}
            >
              <input
                type="radio"
                name="interes"
                value={option.value}
                checked={formData.interes === option.value}
                onChange={handleChange}
                className="sr-only"
              />
              <option.icon
                className={cn(
                  "w-5 h-5",
                  formData.interes === option.value
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              />
              <span
                className={cn(
                  formData.interes === option.value
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {option.label}
              </span>
            </label>
          ))}
        </div>
        {errors.interes && <p className={errorClasses}>{errors.interes}</p>}
      </div>

      {/* Campos condicionales - Libro */}
      {formData.interes === "libro" && (
        <div className="space-y-6 p-6 bg-carbon-light/50 rounded-lg border border-border">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" />
            Detalles del libro
          </h4>

          <div>
            <label className={labelClasses}>Formato *</label>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { value: "fisico", label: "Físico ($89.000, envío gratis)" },
                { value: "pdf", label: "PDF ($50.000)" },
              ].map((option) => (
                <label
                  key={option.value}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all",
                    formData.formatoLibro === option.value
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/50"
                  )}
                >
                  <input
                    type="radio"
                    name="formatoLibro"
                    value={option.value}
                    checked={formData.formatoLibro === option.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span
                    className={cn(
                      formData.formatoLibro === option.value
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
            {errors.formatoLibro && (
              <p className={errorClasses}>{errors.formatoLibro}</p>
            )}
          </div>

          {formData.formatoLibro === "fisico" && (
            <>
              <div>
                <label htmlFor="direccionEnvio" className={labelClasses}>
                  Dirección de envío *
                </label>
                <input
                  type="text"
                  id="direccionEnvio"
                  name="direccionEnvio"
                  value={formData.direccionEnvio}
                  onChange={handleChange}
                  className={cn(
                    inputClasses,
                    errors.direccionEnvio && "border-destructive"
                  )}
                  placeholder="Dirección completa"
                  maxLength={200}
                />
                {errors.direccionEnvio && (
                  <p className={errorClasses}>{errors.direccionEnvio}</p>
                )}
              </div>
              <div>
                <label htmlFor="indicacionesDedicatoria" className={labelClasses}>
                  Indicaciones para la dedicatoria
                </label>
                <input
                  type="text"
                  id="indicacionesDedicatoria"
                  name="indicacionesDedicatoria"
                  value={formData.indicacionesDedicatoria}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="¿A nombre de quién? ¿Mensaje especial?"
                  maxLength={200}
                />
              </div>
            </>
          )}

          {formData.formatoLibro === "pdf" && (
            <div>
              <label htmlFor="correoPDF" className={labelClasses}>
                Correo para enviar PDF *
              </label>
              <input
                type="email"
                id="correoPDF"
                name="correoPDF"
                value={formData.correoPDF}
                onChange={handleChange}
                className={cn(
                  inputClasses,
                  errors.correoPDF && "border-destructive"
                )}
                placeholder="tu@email.com"
                maxLength={100}
              />
              {errors.correoPDF && (
                <p className={errorClasses}>{errors.correoPDF}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Campos condicionales - Mentoría */}
      {formData.interes === "mentoria" && (
        <div className="space-y-6 p-6 bg-carbon-light/50 rounded-lg border border-border">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Detalles de mentoría
          </h4>

          <div>
            <label htmlFor="disponibilidad" className={labelClasses}>
              Disponibilidad (días/horas)
            </label>
            <input
              type="text"
              id="disponibilidad"
              name="disponibilidad"
              value={formData.disponibilidad}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Ej: Lunes a viernes 6pm-8pm"
              maxLength={100}
            />
          </div>

          <div>
            <label htmlFor="temaPrincipal" className={labelClasses}>
              Tema principal / bloqueo
            </label>
            <textarea
              id="temaPrincipal"
              name="temaPrincipal"
              value={formData.temaPrincipal}
              onChange={handleChange}
              className={cn(inputClasses, "min-h-[100px] resize-y")}
              placeholder="¿Qué situación quieres trabajar?"
              maxLength={500}
            />
          </div>
        </div>
      )}

      {/* Campos condicionales - Empresas */}
      {formData.interes === "empresas" && (
        <div className="space-y-6 p-6 bg-carbon-light/50 rounded-lg border border-border">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <Building2 className="w-5 h-5 text-accent" />
            Detalles empresariales
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="empresa" className={labelClasses}>
                Nombre de la empresa *
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className={cn(
                  inputClasses,
                  errors.empresa && "border-destructive"
                )}
                placeholder="Nombre de tu empresa"
                maxLength={100}
              />
              {errors.empresa && (
                <p className={errorClasses}>{errors.empresa}</p>
              )}
            </div>

            <div>
              <label htmlFor="cargo" className={labelClasses}>
                Tu cargo
              </label>
              <input
                type="text"
                id="cargo"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Ej: Gerente de ventas"
                maxLength={100}
              />
            </div>
          </div>

          <div>
            <label htmlFor="numPersonas" className={labelClasses}>
              Número de personas
            </label>
            <input
              type="text"
              id="numPersonas"
              name="numPersonas"
              value={formData.numPersonas}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Hasta 10 personas incluidas"
              maxLength={50}
            />
          </div>

          <div>
            <label htmlFor="objetivoComercial" className={labelClasses}>
              Objetivo comercial
            </label>
            <textarea
              id="objetivoComercial"
              name="objetivoComercial"
              value={formData.objetivoComercial}
              onChange={handleChange}
              className={cn(inputClasses, "min-h-[100px] resize-y")}
              placeholder="¿Qué resultados esperas del programa?"
              maxLength={500}
            />
          </div>
        </div>
      )}

      {/* Observaciones */}
      <div>
        <label htmlFor="observaciones" className={labelClasses}>
          Observaciones adicionales
        </label>
        <textarea
          id="observaciones"
          name="observaciones"
          value={formData.observaciones}
          onChange={handleChange}
          className={cn(inputClasses, "min-h-[100px] resize-y")}
          placeholder="¿Algo más que debamos saber?"
          maxLength={500}
        />
      </div>

      {/* Consentimiento */}
      <div>
        <label
          className={cn(
            "flex items-start gap-3 cursor-pointer",
            errors.consentimiento && "text-destructive"
          )}
        >
          <input
            type="checkbox"
            name="consentimiento"
            checked={formData.consentimiento}
            onChange={handleChange}
            className="mt-1 w-5 h-5 rounded border-border bg-carbon-light text-primary focus:ring-primary"
          />
          <span className="text-sm text-muted-foreground">
            Acepto ser contactado por WhatsApp para confirmar. *
          </span>
        </label>
        {errors.consentimiento && (
          <p className={errorClasses}>{errors.consentimiento}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:brightness-110 glow-red transition-all duration-300 focus-ring"
      >
        <Send className="w-5 h-5" />
        Enviar y confirmar por WhatsApp
      </button>

      <p className="text-center text-sm text-muted-foreground">
        Al enviar, se abrirá WhatsApp con tu mensaje prellenado.
      </p>
    </form>
  );
}
