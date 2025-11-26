import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Delta Business Solutions - Premium Corporate Solutions",
  description: "A firm built on TRUST. Premium corporate and business solutions.",
  generator: "abu",
  icons: {
    icon: [
      {
        url: "/assets/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/icon.png",
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
      <body className={`font-sans antialiased`}>
        <Navbar/>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
