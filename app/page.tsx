import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Specialties } from "@/components/specialties"
import { About } from "@/components/about"
import { Hearings } from "@/components/hearings"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Hearings />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
