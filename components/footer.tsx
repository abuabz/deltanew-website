import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer style={{ backgroundColor: "#303030" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">DELTA</h3>
            <p className="text-gray-200">A firm built on TRUST, delivering premium corporate solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-200 transition-colors hover:text-amber-400"
                    style={{ color: "#E0E0E0" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <p className="text-gray-200 mb-2">info@delta.com</p>
            <p className="text-gray-200 mb-2">+1 (212) 555-1234</p>
            <p className="text-gray-200">123 Business Ave, NY 10001</p>
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
          <p className="text-gray-200 text-sm">&copy; {currentYear} DELTA. All rights reserved.</p>
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
