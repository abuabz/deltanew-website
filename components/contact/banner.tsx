export function ContactBanner() {
  return (
    <section className="relative w-full h-80 flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          background: "url(/placeholder.svg?height=600&width=1920&query=contact-us-business)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(111, 111, 113, 0.4)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">Contact Us</h1>
        <p className="text-white text-lg mt-4 text-balance">Get in touch with our team. We're here to help.</p>
      </div>
    </section>
  )
}
