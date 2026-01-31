"use client"

import { Star, Quote, ExternalLink } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    name: "Carlos M.",
    role: "Cliente satisfecho",
    content:
      "Excelente profesional. La Dra. Diana Villa me ayudó en un momento muy difícil de mi vida. Su conocimiento del derecho penal y su dedicación fueron fundamentales para resolver mi caso favorablemente.",
    rating: 5,
  },
  {
    name: "María L.",
    role: "Cliente satisfecho",
    content:
      "Muy recomendada. Desde el primer momento me sentí en confianza. Explicó cada paso del proceso de manera clara y siempre estuvo disponible para resolver mis dudas. Resultados excepcionales.",
    rating: 5,
  },
  {
    name: "Andrés R.",
    role: "Cliente satisfecho",
    content:
      "Profesionalismo y compromiso total. Gracias a su experiencia y estrategia legal, logramos el mejor resultado posible. Eternamente agradecido con todo el equipo.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Testimonios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La confianza de nuestros clientes es nuestro mayor logro. Conoce las
            experiencias de quienes han confiado en nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-sm p-8 relative group hover:border-foreground/20 transition-colors"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                  <Quote size={14} className="text-background" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {'"'}{testimonial.content}{'"'}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-background border border-border rounded-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="font-semibold text-foreground">5.0</span>
              <span className="text-muted-foreground">en Google</span>
            </div>
            <Link
              href="https://maps.app.goo.gl/D45LnV8LvV6s65vMA?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors underline underline-offset-4"
            >
              Ver todas las reseñas en Google Maps
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
