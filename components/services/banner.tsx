export function ServicesBanner() {
  return (
    <section className="relative w-full h-96 flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          background: "url(/group-people-working-out-business-plan-office.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "bottom",
          filter: "grayscale(1)",
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
        <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">Our Services</h1>
        <p className="text-white text-lg mt-4 text-balance">Comprehensive solutions tailored to your business needs</p>
      </div>
    </section>
  )
}
