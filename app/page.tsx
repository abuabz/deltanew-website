import { Home } from "@/components/home/hero"
import { AboutSection } from "@/components/home/about-section"
import { WhatWeDo } from "@/components/home/what-we-do"
import { WhyChooseDelta } from "@/components/home/why-choose-delta"
import { GetInTouch } from "@/components/home/get-in-touch"

export default function HomePage() {
  return (
    <main>
      <Home />
      <AboutSection />
      <WhatWeDo />
      <WhyChooseDelta />
      <GetInTouch />
    </main>
  )
}
