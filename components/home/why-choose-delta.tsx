import { Award, Zap, Users, TrendingUp, Shield, Target } from "lucide-react"

export function WhyChooseDelta() {
  const reasons = [
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Recognized for delivering premium solutions",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick deployment with minimal disruption",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with deep expertise",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Solutions designed to scale with your business",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focused on measurable business outcomes",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a1a1a" }}>
            Why Choose  
            <span className="font-bold text-[#DC9D14]"> Delta</span>
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "#DC9D14" }} />
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105"
                style={{ borderColor: "#E5E5E5" }}
              >
                <Icon size={32} className="mb-4" style={{ color: "#DC9D14" }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6F6F71" }}>
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
