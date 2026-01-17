"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export function ContactBanner() {
  return (
    <section className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with subtle zoom effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/contact-banner.png"
          alt="Contact DELTA"
          fill
          priority
          className="object-cover scale-105 animate-subtle-zoom"
        />
        {/* Advanced Layered Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* Decorative Golden Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#DC9D14] to-transparent opacity-50 shadow-[0_0_15px_rgba(220,157,20,0.5)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center justify-center gap-2 mb-6 text-white/60 text-sm font-medium uppercase tracking-widest animate-fade-in-up">
          <Link href="/" className="hover:text-[#DC9D14] transition-colors flex items-center gap-1">
            <Home size={14} />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="opacity-40" />
          <span className="text-[#DC9D14]">Contact</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl tracking-tight">
          Let&apos;s <span className="text-[#DC9D14]">Connect</span>
        </h1>

        <div className="w-24 h-1 bg-[#DC9D14] mx-auto mb-8 rounded-full" />

        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed text-balance">
          Our team of experts is ready to help you navigate your corporate challenges with premium, tailored solutions.
        </p>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
