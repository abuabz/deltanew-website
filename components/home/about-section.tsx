import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold mb-4 tracking-wide" style={{ color: "#DC9D14" }}>
            ABOUT US
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance" style={{ color: "#1a1a1a" }}>
            Your Trusted Business Partner
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#6F6F71" }}>
            With years of expertise in corporate solutions, DELTA is committed to delivering premium services that drive
            your business forward. We understand the challenges you face and provide tailored solutions that work.
          </p>
          <Link href="/about">
            <button
              className="px-6 py-3 rounded-md text-white font-medium transition-all hover:shadow-lg cursor-pointer"
              style={{ backgroundColor: "#DC9D14" }}
            >
              View More
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/modern-office-team-collaboration.jpg" alt="DELTA Team" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
