/**
 * =============================================================
 * FOOTER COMPONENT
 * =============================================================
 * EDITAR: Links, copyright y información adicional
 * =============================================================
 */

import { MessageCircle, MapPin } from "lucide-react";
import { ADDRESS, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-carbon-light/50">
      <div className="container-custom px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-1 text-xl font-bold mb-4">
              <span className="text-brand-blue">Dr.</span>
              <span className="text-foreground">Sarcasmo</span>
            </a>
            <p className="text-muted-foreground text-sm">
              PNL para ventas y liderazgo sin anestesia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  +57 302 266 9226
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5" />
                <span>
                  {ADDRESS.street}<br />
                  {ADDRESS.city}, {ADDRESS.country}
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#libro" className="text-muted-foreground hover:text-foreground transition-colors">
                  Libro
                </a>
              </li>
              <li>
                <a href="#mentoria" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mentoría
                </a>
              </li>
              <li>
                <a href="#empresas" className="text-muted-foreground hover:text-foreground transition-colors">
                  Empresas
                </a>
              </li>
              <li>
                <a href="#agendar" className="text-muted-foreground hover:text-foreground transition-colors">
                  Agendar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Julián Vargas Montagut (Dr. Sarcasmo). Todos los derechos reservados.
          </p>
          {/* EDITAR: Créditos */}
          <p className="text-xs text-muted-foreground/60 mt-2">
            Hecho por Brothers Tic S.A.S.
          </p>
        </div>
      </div>
    </footer>
  );
}
