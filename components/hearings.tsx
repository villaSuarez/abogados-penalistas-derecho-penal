import { Search, Settings, FileText, Landmark } from "lucide-react"

const hearings = [
  {
    icon: Search,
    title: "Preliminares",
    items: [
      "Legalización de captura",
      "Imputación de cargos",
      "Medida de aseguramiento",
    ],
  },
  {
    icon: Settings,
    title: "Dentro del proceso",
    items: ["Formulación de acusación", "Preparatoria", "Juicio oral"],
  },
  {
    icon: FileText,
    title: "Otras audiencias",
    items: [
      "Vencimiento de términos",
      "Revocatoria de medida",
      "Sustitución de medida",
    ],
  },
  {
    icon: Landmark,
    title: "Otros trámites",
    items: ["Preclusión", "Principios de oportunidad", "Preacuerdos"],
  },
]

export function Hearings() {
  return (
    <section id="audiencias" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-background/60 tracking-widest uppercase mb-4">
            Procedimientos legales
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
            Audiencias y Trámites
          </h2>
          <p className="text-background/70 leading-relaxed">
            Te acompañamos en cada etapa del proceso penal, desde las audiencias
            preliminares hasta la resolución final de tu caso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hearings.map((hearing, index) => (
            <div
              key={index}
              className="border border-background/20 rounded-sm p-6 hover:border-background/40 transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-background/30 rounded-sm mb-5">
                <hearing.icon size={20} className="text-background/80" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-4">
                {hearing.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {hearing.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-background/70 text-sm"
                  >
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
