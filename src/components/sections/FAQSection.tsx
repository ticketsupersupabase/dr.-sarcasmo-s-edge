/**
 * =============================================================
 * FAQ SECTION - PREGUNTAS FRECUENTES
 * =============================================================
 * EDITAR: Preguntas y respuestas
 * =============================================================
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// EDITAR: Preguntas frecuentes
const FAQS = [
  {
    question: "¿Cómo puedo pagar el libro o la mentoría?",
    answer:
      "Los pagos se coordinan directamente por WhatsApp. Aceptamos transferencias bancarias y otros métodos de pago. Una vez confirmes tu pedido, te enviamos los datos de pago.",
  },
  {
    question: "¿Cuánto tarda en llegar el libro físico?",
    answer:
      "El envío es gratis a nivel nacional (Colombia). El tiempo de entrega depende de tu ciudad, pero generalmente es de 3 a 7 días hábiles después de confirmado el pago.",
  },
  {
    question: "¿Cómo funciona la mentoría 1 a 1?",
    answer:
      "Es una sesión privada donde trabajamos directamente tu bloqueo principal. Coordinamos fecha y hora por WhatsApp. La sesión es virtual, cómoda y sin rodeos.",
  },
  {
    question: "¿Qué incluye el programa para empresas?",
    answer:
      "Incluye 4 formaciones de alto impacto para hasta 10 personas, más un año de mentorías grupales virtuales (1 al mes). Ideal para equipos de ventas y líderes.",
  },
  {
    question: "¿Puedo agendar una llamada antes de comprar?",
    answer:
      "Claro. Escríbenos por WhatsApp con tu duda específica y coordinamos una breve llamada si es necesario. Sin presión, sin llamadas raras.",
  },
  {
    question: "¿Ofrecen factura o comprobante de pago?",
    answer:
      "Sí, una vez confirmado el pago enviamos el comprobante correspondiente por WhatsApp o correo electrónico.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-carbon-light/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Preguntas <span className="text-primary">frecuentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Lo que más nos preguntan antes de tomar acción
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium px-6 border-border/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
