import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Specialties } from "@/components/specialties"
import { About } from "@/components/about"
import { Hearings } from "@/components/hearings"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Hearings />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
