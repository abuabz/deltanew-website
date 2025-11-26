"use client"

import { useState } from "react"
import { ServicesBanner } from "@/components/services/banner"
import { ServicesGrid } from "@/components/services/grid"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <main>
      <ServicesBanner />
      <ServicesGrid onSelectService={setSelectedService} />
    </main>
  )
}
