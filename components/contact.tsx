import { Phone, Instagram, Facebook, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 (300) 344-6228",
    href: "tel:+573003446228",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@villasuarezabogados",
    href: "https://instagram.com/villasuarezabogados",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "@villasuarezabogados",
    href: "https://facebook.com/villasuarezabogados",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Cra.13 #48-26",
    href: "https://maps.google.com/?q=Cra.13+48-26",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
              Contacto
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
              Hablemos de tu caso
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              No esperes más. Cada momento cuenta cuando se trata de tu libertad.
              Contáctanos ahora para una consulta gratuita y confidencial.
            </p>

            <Link
              href="https://wa.me/+573003446228?text=Estoy%20interesado%20en%20alguno%20de%20los%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-sm hover:bg-foreground/90 transition-colors"
            >
              Escribir por WhatsApp
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="bg-card border border-border rounded-sm p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Información de contacto
            </h3>
            <div className="flex flex-col gap-6">
              {contactInfo.map((info, index) => (
                <Link
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm group-hover:bg-foreground group-hover:text-background transition-colors">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium group-hover:text-muted-foreground transition-colors">
                      {info.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
