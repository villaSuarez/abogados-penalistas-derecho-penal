import { Users, Shield, Building2 } from "lucide-react"

const specialties = [
  {
    icon: Users,
    title: "Delitos contra las personas",
    items: [
      "Homicidios",
      "Delitos sexuales",
      "Feminicidios",
      "Violencia intrafamiliar",
      "Secuestro",
      "Trata de personas",
      "Extorsión",
    ],
  },
  {
    icon: Shield,
    title: "Delitos contra el orden público",
    items: [
      "Concierto para delinquir",
      "Hurto agravado y calificado",
      "Tráfico de estupefacientes",
      "Fraude procesal",
    ],
  },
  {
    icon: Building2,
    title: "Delitos contra la administración pública",
    items: [
      "Delitos ambientales",
      "Lavado de activos",
      "Contra la administración pública",
    ],
  },
]

export function Specialties() {
  return (
    <section id="especialidades" className="py-16 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Áreas de práctica
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Nuestras Especialidades
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Contamos con amplia experiencia en diversas áreas del derecho penal,
            brindando una defensa integral y personalizada.
          </p>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group min-w-[85%] snap-start bg-card border border-border rounded-sm p-8 hover:border-foreground/20 transition-colors md:min-w-0"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                <specialty.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {specialty.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {specialty.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
