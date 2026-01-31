import { CheckCircle, Scale, Shield, Users, Award } from "lucide-react"

const values = [
  {
    icon: Scale,
    title: "Compromiso",
    description: "Dedicación total a cada caso, tratando cada situación como si fuera propia.",
  },
  {
    icon: Award,
    title: "Experiencia",
    description: "Años de práctica en el sistema penal colombiano nos respaldan.",
  },
  {
    icon: Shield,
    title: "Confidencialidad",
    description: "Absoluta discreción en el manejo de la información de nuestros clientes.",
  },
  {
    icon: Users,
    title: "Resultados",
    description: "Enfoque estratégico orientado a obtener los mejores resultados posibles.",
  },
]

export function About() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
              Sobre nosotros
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
              Defensa legal con compromiso y excelencia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En Villa Suárez Abogados entendemos que enfrentar un proceso penal es una 
              de las situaciones más difíciles que puede atravesar una persona. Por eso, 
              nos dedicamos a brindar una defensa integral, humana y efectiva.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestro equipo está comprometido con la justicia y la protección de los 
              derechos de nuestros clientes, utilizando todas las herramientas legales 
              disponibles para garantizar el mejor resultado posible en cada caso.
            </p>

            <div className="flex flex-col gap-4">
              {["Atención personalizada 24/7", "Primera consulta gratuita", "Estrategias de defensa efectivas"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-foreground" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-muted/50 border border-border rounded-sm p-6 hover:border-foreground/20 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-foreground/10 rounded-sm mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <value.icon size={20} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
