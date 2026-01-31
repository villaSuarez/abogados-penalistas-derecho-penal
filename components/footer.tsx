import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <Link
              href="#inicio"
              className="font-serif text-lg font-semibold"
            >
              Villa Suárez Abogados
            </Link>
            <span className="hidden md:inline text-background/40">|</span>
            <p className="text-sm text-background/60">
              Copyright 2024 - Todos los derechos reservados
            </p>
          </div>
          <p className="text-sm text-background/60">
            Cra.13 #48-26 - Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
