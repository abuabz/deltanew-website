import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/deltabusinesssolutions?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/share/1CJMRcQuqi/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/delta_solutions_/", label: "Instagram" },
  ]

  return (
    <footer style={{ backgroundColor: "#303030" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/iconnameonly.png"
                alt="DELTA Logo"
                width={180}
                height={180}
                className="brightness-0 invert -ml-1"
              />
            </div>
            <p className="text-gray-200">
              DELTA BUSINESS SOLUTION<br />
              A firm built on TRUST, delivering premium corporate solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white  mb-4">Quick Links</h4>
            <ul className="space-y-2 ">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-200 transition-colors hover:text-amber-400"
                    style={{ color: "#E0E0E0" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-200">
              <a href="mailto:info@deltabusinesssolution.com" className="block hover:text-amber-400 transition-colors">
                info@deltabusinesssolution.com
              </a>
              <a href="mailto:dbsin2021@gmail.com" className="block hover:text-amber-400 transition-colors">
                dbsin2021@gmail.com
              </a>
              <a href="tel:+917012828331" className="block hover:text-amber-400 transition-colors">
                +91 70128 28331
              </a>
              <a href="https://maps.app.goo.gl/5CUhd9U9c86DbiLE8" target="_blank" rel="noopener noreferrer">
                <p>
                  9/475/Z 2nd Floor <br />
                  VPC Mall, Vengara<br />
                  Malappuram, Kerala, India
                </p>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-200 transition-colors hover:text-amber-400 p-2"
                    aria-label={social.label}
                    style={{ color: "#E0E0E0" }}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-200 text-sm">&copy; {currentYear} DELTA BUSINESS SOLUTION. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-200 transition-colors hover:text-amber-400">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-200 transition-colors hover:text-amber-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
