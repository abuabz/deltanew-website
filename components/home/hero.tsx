"use client"

import { useState, useEffect } from "react"
import Aurora from "../herobg"
import BlurText from "../blurText"
import { CheckCircle, LockKeyhole, Clock, User } from "lucide-react"
import Image from "next/image"

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
    "100% Data Secure",
    "24/7 Global Support",
    "CA/CMA Experts",
    "Zero Error Guarantee",
  ]
  const trustbadgesIcons = [
    <LockKeyhole className="w-4 h-4" style={{ color: "#DC9D14" }} />,
    <Clock className="w-4 h-4" style={{ color: "#DC9D14" }} />,
    <User className="w-4 h-4" style={{ color: "#DC9D14" }} />,
    <CheckCircle className="w-4 h-4" style={{ color: "#DC9D14" }} />,
  ]

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center  overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #000000 100%)",
      }}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.png"
          alt="Corporate Background"
          fill
          priority
          className="object-cover opacity-60 grayscale"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-10 mix-blend-screen opacity-70">
        <Aurora
          colorStops={["", "#ffffff",]}
          blend={1}
          amplitude={1.0}
          speed={0.35}
        />
      </div>

      {/* Content with Counter-Parallax */}
      <div
        className="absolute z-10 text-center px-6 max-w-4xl"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
        }}
      >
        <div className="flex gap-0 justify-center flex-col md:flex-row md:gap-2 whitespace-normal md:whitespace-nowrap items-center text-center">
          <BlurText
            text="A Firm Built on"
            delay={300}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-6xl font-bold leading-tight mb-2 md:mb-6 text-balance text-white font-robotoslab"
          />
          <BlurText
            text="TRUST"
            delay={300}
            animateBy="letters"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-2 md:mb-6 text-balance text-[#ffaf00] font-robotoslab"
          />
        </div>

        {/* <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance" style={{ color: "#ffffff" }}>
          <span style={{ color: "#ffaf00" }}>TRUST</span>
        </h1> */}
        <p className=" mt-2 md:-mt-2 text-sm md:text-xl md:block hidden  text-balance" style={{ color: "#DC9D14", fontFamily: 'monospace' }}>
          Reliable book Keeping Solutions Engineered for your piece of mind
        </p>
        <p className=" mt-2 md:-mt-2 text-sm md:text-xl md:hidden block  text-balance" style={{ color: "#DC9D14", fontFamily: 'monospace' }}>
          World-Class Accounting,Tailored for you
        </p>
        {/* <button
          className="px-8 py-3 rounded-md text-white font-semibold transition-all hover:shadow-lg hover:scale-105 md:text-lg"
          style={{ backgroundColor: "#DC9D14" }}
        >
          Get Started
        </button> */}
      </div>
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 grid grid-cols-2 md:flex md:flex-nowrap justify-center items-center gap-2 md:gap-5 z-20 w-max max-w-[95vw]">
        {trustBadges.map((badge, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 md:gap-2 text-white/80 text-[11px] md:text-sm font-medium bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-white/20 whitespace-nowrap"
            style={{

              transitionDelay: `${i * 80}ms`,
            }}
          >
            {trustbadgesIcons[i]}
            {badge}
          </div>
        ))}
      </div>
    </section>
  )
}
