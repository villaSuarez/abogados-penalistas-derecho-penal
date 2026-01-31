import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Villa Suárez Abogados | Especialistas en Derecho Penal",
  description:
    "Tu libertad es nuestra prioridad. Asesoría y defensa en Derecho Penal con resultados comprobados. 95% de casos exitosos.",
  keywords: [
    "abogado penalista",
    "derecho penal",
    "defensa penal",
    "abogados Colombia",
    "Villa Suárez Abogados",
  ],
}

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
