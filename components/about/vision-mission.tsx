import { Eye, Target } from "lucide-react"

export function VisionMission() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="p-8 rounded-lg" style={{ backgroundColor: "#ffffff", border: "2px solid #E5E5E5" }}>
            <div className="flex items-center gap-4 mb-6">
              <Eye size={32} style={{ color: "#DC9D14" }} />
              <h3 className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>
                Our Vision
              </h3>
            </div>
            <p className="text-lg leading-relaxed" style={{ color: "#6F6F71" }}>
              To be the most trusted and innovative corporate solutions provider, recognized globally for our
              excellence, integrity, and positive impact on businesses worldwide.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-lg" style={{ backgroundColor: "#ffffff", border: "2px solid #E5E5E5" }}>
            <div className="flex items-center gap-4 mb-6">
              <Target size={32} style={{ color: "#DC9D14" }} />
              <h3 className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>
                Our Mission
              </h3>
            </div>
            <p className="text-lg leading-relaxed" style={{ color: "#6F6F71" }}>
              To deliver comprehensive corporate solutions that empower businesses to achieve their goals through
              innovation, expertise, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
