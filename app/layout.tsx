import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Roboto_Slab } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import "./globals.css"
import { NavbarNew } from "@/components/navbarNew"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-robotoslab",
  weight: "variable", // Default, but explicit
})

export const metadata: Metadata = {
  title: "Delta Business Solutions - Premium Corporate Solutions",
  description: "A firm built on TRUST. Premium corporate and business solutions.",
  generator: "abu",
  icons: {
    icon: [
      {
        url: "/assets/icononly.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/icononly.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/icononly.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/assets/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${robotoSlab.variable}`}>
        <NavbarNew />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
