"use client"

import { useState, useEffect } from "react"
import Aurora from "../herobg"
import BlurText from "../blurText"

export function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          delay={150}
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
    </section>
  )
}
