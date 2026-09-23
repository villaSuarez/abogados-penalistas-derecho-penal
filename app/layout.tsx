import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import Script from "next/script"
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
        <Script
          id="google-ads-gtag"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11344927723"
          strategy="beforeInteractive"
        />
        <Script id="google-ads-config" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-11344927723');
gtag('event', 'conversion', {
  'send_to': 'AW-11344927723/iAM_CIeyhOMZEOu316Eq',
  'value': 1.0,
  'currency': 'COP'
});`}
        </Script>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQNKXBP2');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQNKXBP2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
