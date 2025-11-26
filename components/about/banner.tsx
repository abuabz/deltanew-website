export function AboutBanner() {
  return (
    <section className="relative w-full h-96 flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          background: "url(/placeholder.svg?height=600&width=1920&query=corporate-office)",
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
        <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">About DELTA</h1>
      </div>
    </section>
  )
}
