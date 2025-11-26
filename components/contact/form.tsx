"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you! We will get back to you soon.")
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Details */}
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold mb-4 tracking-wide" style={{ color: "#DC9D14" }}>
                OUR LOCATION
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance" style={{ color: "#1a1a1a" }}>
                Get In Touch
              </h2>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <MapPin size={24} style={{ color: "#DC9D14", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: "#1a1a1a" }}>
                    Address
                  </p>
                  <p style={{ color: "#6F6F71" }}>
                    123 Business Avenue
                    <br />
                    Suite 100, New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <Mail size={24} style={{ color: "#DC9D14", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: "#1a1a1a" }}>
                    Email
                  </p>
                  <a
                    href="mailto:info@delta.com"
                    className="transition-colors hover:opacity-80"
                    style={{ color: "#6F6F71" }}
                  >
                    info@delta.com
                  </a>
                  <br />
                  <a
                    href="mailto:support@delta.com"
                    className="transition-colors hover:opacity-80"
                    style={{ color: "#6F6F71" }}
                  >
                    support@delta.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <Phone size={24} style={{ color: "#DC9D14", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: "#1a1a1a" }}>
                    Phone
                  </p>
                  <a
                    href="tel:+12125551234"
                    className="transition-colors hover:opacity-80"
                    style={{ color: "#6F6F71" }}
                  >
                    +1 (212) 555-1234
                  </a>
                  <br />
                  <a
                    href="tel:+12125555678"
                    className="transition-colors hover:opacity-80"
                    style={{ color: "#6F6F71" }}
                  >
                    +1 (212) 555-5678
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 items-start">
                <Clock size={24} style={{ color: "#DC9D14", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: "#1a1a1a" }}>
                    Business Hours
                  </p>
                  <p style={{ color: "#6F6F71" }}>
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                Full Name *
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
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                Email Address *
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
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-md border-2 focus:outline-none transition-colors"
                style={{
                  borderColor: "#E5E5E5",
                  backgroundColor: "#ffffff",
                  color: "#1a1a1a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#DC9D14")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E5E5")}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                Subject *
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
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
