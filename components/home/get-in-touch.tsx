"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  })

  const businessTypes = ["Rental", "Wholesale", "Manufacturing", "Product", "Service", "Others"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", businessType: "", message: "" })
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance" style={{ color: "#1a1a1a" }}>
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <div className="space-y-8">
              {/* Social */}
              <div>
                <h3 className="text-lg font-bold mb-4" style={{ color: "#1a1a1a" }}>
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: "#E5E5E5", color: "#DC9D14" }}
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <Mail size={24} style={{ color: "#6F6F71", marginTop: "4px", flexShrink: 0 }} />
                <div>
                  <p className="font-semibold" style={{ color: "#1a1a1a" }}>
                    Email
                  </p>
                  <a
                    href="mailto:info@delta.com"
                    className="transition-colors hover:text-amber-600"
                    style={{ color: "#6F6F71" }}
                  >
                    info@delta.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <Phone size={24} style={{ color: "#6F6F71", marginTop: "4px", flexShrink: 0 }} />
                <div>
                  <p className="font-semibold" style={{ color: "#1a1a1a" }}>
                    Phone
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="transition-colors hover:text-amber-600"
                    style={{ color: "#6F6F71" }}
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <MapPin size={24} style={{ color: "#6F6F71", marginTop: "4px", flexShrink: 0 }} />
                <div>
                  <p className="font-semibold" style={{ color: "#1a1a1a" }}>
                    Location
                  </p>
                  <p style={{ color: "#6F6F71" }}>
                    123 Business Ave, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md border-2 focus:outline-none transition-colors"
                style={{
                  borderColor: "#E5E5E5",
                  backgroundColor: "#ffffff",
                  color: "#1a1a1a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#DC9D14")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E5E5")}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md border-2 focus:outline-none transition-colors"
                style={{
                  borderColor: "#E5E5E5",
                  backgroundColor: "#ffffff",
                  color: "#1a1a1a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#DC9D14")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E5E5")}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>
                Business Type
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-4 py-3 rounded-md border-2 focus:outline-none transition-colors"
                style={{
                  borderColor: "#E5E5E5",
                  backgroundColor: "#ffffff",
                  color: "#1a1a1a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#DC9D14")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E5E5")}
                required
              >
                <option value="">Select Business Type</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-md border-2 focus:outline-none transition-colors resize-none"
                style={{
                  borderColor: "#E5E5E5",
                  backgroundColor: "#ffffff",
                  color: "#1a1a1a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#DC9D14")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E5E5")}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold transition-all hover:shadow-lg"
              style={{ backgroundColor: "#DC9D14" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
