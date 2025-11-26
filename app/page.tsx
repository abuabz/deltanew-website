import { Home } from "@/components/home/hero"
import { AboutSection } from "@/components/home/about-section"
import { WhyChooseDelta } from "@/components/home/why-choose-delta"
import { GetInTouch } from "@/components/home/get-in-touch"

export default function HomePage() {
  return (
    <main>
      <Home />
      <AboutSection />
      <WhyChooseDelta />
      <GetInTouch />
    </main>
  )
}
