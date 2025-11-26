"use client"

import { useState, useEffect } from "react"
import Aurora from "../herobg"
import BlurText from "../blurText"
import { CheckCircle } from "lucide-react"

export function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const trustBadges = [
    "ISO Certified",
    "Fortune 500 Partners",
    "Award-Winning Firm",
    "Global Operations",
  ]

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center  overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #000000 100%)",
      }}
    >
      {/* Background with Parallax Effect */}
      <Aurora
        colorStops={["#DC9D14", "#ffffff", "#DC9D14"]}
        blend={1}
        amplitude={1.0}
        speed={0.7}
      />

      {/* Dark Overlay with Parallax */}
      <div
        className="absolute inset-0"

      />

      {/* Content with Counter-Parallax */}
      <div
        className="absolute z-10 text-center px-6 max-w-4xl"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
        }}
      >
        <BlurText
          text="A firm built on TRUST"
          delay={300}
          animateBy="words"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance text-white" 
        />
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance" style={{ color: "#ffffff" }}>
          {/* <span style={{ color: "#ffaf00" }}>TRUST</span> */}
        </h1>
        <p className="text-lg md:text-xl mb-8 text-balance" style={{ color: "#DC9D14", fontFamily: 'fantasy' }}>
          Premium corporate solutions tailored for your business needs
        </p>
        <button
          className="px-8 py-3 rounded-md text-white font-semibold transition-all hover:shadow-lg hover:scale-105 md:text-lg"
          style={{ backgroundColor: "#DC9D14" }}
        >
          Get Started
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-5 z-20">
        {trustBadges.map((badge, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-white/80 text-sm font-medium bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20"
            style={{
              
              transitionDelay: `${i * 80}ms`,
            }}
          >
            <CheckCircle className="w-4 h-4" style={{ color: "#DC9D14" }} />
            {badge}
          </div>
        ))}
      </div>
    </section>
  )
}
