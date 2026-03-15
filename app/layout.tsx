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
  generator: "Delta Business Solutions",

  icons: {
    icon: [
      { url: "/assets/favicon.ico" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      { url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },

  manifest: "/assets/site.webmanifest",
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
