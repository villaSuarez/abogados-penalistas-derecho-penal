import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-foreground pt-20"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium text-white/60 tracking-widest uppercase mb-4">
              Especialistas en Derecho Penal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-6 text-balance">
              Tu libertad es nuestra prioridad
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              Asesoría y defensa en Derecho Penal con resultados comprobados.
              Más de 95% de casos resueltos exitosamente para nuestros clientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="https://wa.me/+573003446228?text=Estoy%20interesado%20en%20alguno%20de%20los%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground font-medium rounded-sm hover:bg-white/90 transition-colors"
              >
                <Phone size={18} />
                Consulta Gratuita
              </Link>
              <Link
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-sm hover:bg-white/10 transition-colors"
              >
                Conocer Servicios
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-white">
                  95%
                </p>
                <p className="text-sm text-white/60 mt-1">
                  Casos exitosos
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-white">
                  15+
                </p>
                <p className="text-sm text-white/60 mt-1">
                  Años de experiencia
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-white">
                  500+
                </p>
                <p className="text-sm text-white/60 mt-1">
                  Clientes atendidos
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl" />
              <Image
                src="/perfil-diana.jpeg"
                alt="Diana Villa Suárez - Abogada Penalista"
                width={400}
                height={400}
                className="relative rounded-full object-cover border-4 border-white/20 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
