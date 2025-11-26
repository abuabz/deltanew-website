"use client"

import type React from "react"
import { Briefcase, PieChart, Users, Zap, Shield, TrendingUp } from "lucide-react"

interface Service {
  id: string
  icon: React.ReactNode
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
}

export function ServicesGrid({ onSelectService }: { onSelectService?: (id: string) => void }) {
  const services: Service[] = [
    {
      id: "consulting",
      icon: <Briefcase size={32} style={{ color: "#DC9D14" }} />,
      title: "Strategic Consulting",
      shortDescription: "Expert guidance for business growth and transformation",
      fullDescription:
        "Our strategic consulting services help organizations navigate complex business challenges and identify new growth opportunities.",
      features: ["Market Analysis", "Business Strategy", "Growth Planning", "Risk Assessment"],
    },
    {
      id: "analytics",
      icon: <PieChart size={32} style={{ color: "#DC9D14" }} />,
      title: "Data Analytics",
      shortDescription: "Transform data into actionable business insights",
      fullDescription:
        "Leverage advanced analytics to understand customer behavior, optimize operations, and make data-driven decisions.",
      features: ["Business Intelligence", "Predictive Analytics", "KPI Tracking", "Custom Reports"],
    },
    {
      id: "talent",
      icon: <Users size={32} style={{ color: "#DC9D14" }} />,
      title: "Talent Management",
      shortDescription: "Build and optimize your workforce",
      fullDescription:
        "From recruitment to development, we help you build a high-performing team aligned with your organizational goals.",
      features: ["Recruitment", "Training Programs", "Performance Management", "Succession Planning"],
    },
    {
      id: "digital",
      icon: <Zap size={32} style={{ color: "#DC9D14" }} />,
      title: "Digital Transformation",
      shortDescription: "Modernize your operations with technology",
      fullDescription:
        "Streamline processes and enhance efficiency through strategic implementation of cutting-edge digital solutions.",
      features: ["Systems Integration", "Automation", "Cloud Migration", "Digital Strategy"],
    },
    {
      id: "compliance",
      icon: <Shield size={32} style={{ color: "#DC9D14" }} />,
      title: "Risk & Compliance",
      shortDescription: "Protect your business with comprehensive compliance solutions",
      fullDescription:
        "Ensure regulatory compliance and mitigate risks with our comprehensive risk management and compliance services.",
      features: ["Compliance Audit", "Risk Management", "Policy Development", "Training"],
    },
    {
      id: "growth",
      icon: <TrendingUp size={32} style={{ color: "#DC9D14" }} />,
      title: "Growth Acceleration",
      shortDescription: "Scale your business rapidly and sustainably",
      fullDescription:
        "Develop and execute growth strategies that drive revenue, market share, and competitive advantage.",
      features: ["Market Expansion", "Product Development", "Sales Strategy", "Partnership Building"],
    },
  ]

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold mb-4 tracking-wide" style={{ color: "#DC9D14" }}>
          WHAT WE OFFER
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a1a1a" }}>
          Professional Services
        </h2>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "#DC9D14" }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => onSelectService?.(service.id)}
            className="p-8 rounded-lg border-2 transition-all cursor-pointer hover:shadow-lg bg-white"
            style={{ borderColor: "#E5E5E5" }}
          >
            <div className="mb-4">{service.icon}</div>

            <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>
              {service.title}
            </h3>

            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#6F6F71" }}>
              {service.shortDescription}
            </p>

            {/* Always Expanded Content */}
            <div className="mt-6 pt-6 border-t-2" style={{ borderColor: "#E5E5E5" }}>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6F6F71" }}>
                {service.fullDescription}
              </p>
              <div className="space-y-2">
                <p className="text-xs font-semibold" style={{ color: "#DC9D14" }}>
                  Key Features:
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm" style={{ color: "#6F6F71" }}>
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <button
                onClick={(e) => {
                  e.stopPropagation() // prevent triggering parent onClick if needed
                  onSelectService?.(service.id)
                }}
                className="w-full mt-4 py-2 rounded-md text-white text-sm font-medium transition-all hover:shadow-lg"
                style={{ backgroundColor: "#DC9D14" }}
              >
                Learn More
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}