export function ContactMap() {
  return (
    <section className="w-full h-96 overflow-hidden">
      {/* Placeholder Map - Replace with actual Google Maps embed if needed */}
      <div
        className="w-full h-full flex items-center justify-center text-center"
        style={{
          background: "url(/placeholder.svg?height=600&width=1920&query=world-map-with-location-pins)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
          <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
            123 Business Avenue, New York, NY 10001
          </h3>
          <p style={{ color: "#6F6F71" }}>United States</p>
        </div>
      </div>
    </section>
  )
}
