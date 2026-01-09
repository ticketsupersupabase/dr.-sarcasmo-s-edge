/**
 * =============================================================
 * WHATSAPP BUTTON COMPONENT
 * =============================================================
 * Botón reutilizable para links de WhatsApp con tracking
 * EDITAR: Estilos y variantes aquí
 * =============================================================
 */

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "hero" | "floating";
  eventName?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export function WhatsAppButton({
  href,
  children,
  variant = "primary",
  eventName,
  className,
  size = "md",
  showIcon = true,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    if (eventName) {
      trackEvent(eventName);
    }
  };

  // Clases base compartidas
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-ring rounded-lg";
  
  // Variantes de estilo
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:brightness-110 glow-red",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    hero: "bg-primary text-primary-foreground hover:brightness-110 glow-red pulse-cta",
    floating: "bg-primary text-primary-foreground hover:brightness-110 glow-red shadow-2xl",
  };

  // Tamaños
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {showIcon && <MessageCircle className="w-5 h-5" />}
      {children}
    </a>
  );
}

/**
 * Botón flotante sticky para WhatsApp (mobile-first)
 */
export function FloatingWhatsApp({ href }: { href: string }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_whatsapp_floating")}
        className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-2xl glow-red pulse-cta"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
