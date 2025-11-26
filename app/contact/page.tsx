import { ContactBanner } from "@/components/contact/banner"
import { ContactForm } from "@/components/contact/form"
import { ContactMap } from "@/components/contact/map"

export default function ContactPage() {
  return (
    <main>
      <ContactBanner />
      <ContactForm />
      <ContactMap />
    </main>
  )
}
