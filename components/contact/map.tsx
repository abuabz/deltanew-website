export function ContactMap() {
  return (
    <section className="relative h-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl mx-4 md:mx-10 my-10 md:my-20">
      {/* Google Maps Embed - Now visible on ALL devices */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7782408871135!2d75.97551467544262!3d11.055246089110954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64da0250d0735%3A0x572d1ba6ae04c71e!2sDelta%20Business%20Solutions!5e0!3m2!1sen!2sin!4v1764156122274!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Delta Business Solutions - Kozhikode Office"
        className="absolute inset-0 w-full h-full"
      />

      {/* Optional: Beautiful overlay card (mobile-friendly) */}
      <div className="absolute bottom-4 left-4 hidden sm:block right-4 md:bottom-8 md:left-12 md:right-auto md:max-w-sm">
        <div className="p-5 md:p-7 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/30"
             style={{ backgroundColor: "rgba(255, 255, 255, 0.97)" }}>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                 style={{ backgroundColor: "#DC9D14" }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold" style={{ color: "#1a1a1a" }}>
                Delta Business Solutions
              </h3>
              <p className="text-sm md:text-base mt-1" style={{ color: "#6F6F71" }}>
                Malappuram, Kerala<br />India
              </p>
              <a
                href="https://maps.google.com/?q=Delta+Business+Solutions+Kozhikode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-sm font-semibold hover:underline"
                style={{ color: "#DC9D14" }}
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}