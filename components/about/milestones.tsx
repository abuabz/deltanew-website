export function Milestones() {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Established DELTA with a vision to revolutionize corporate solutions",
    },
    { year: "2021", title: "First Major Client", description: "Partnered with leading Fortune 500 company" },
    { year: "2022", title: "Team Expansion", description: "Grew to 50+ industry experts" },
    { year: "2023", title: "Award Recognition", description: "Received Best Corporate Solutions Provider award" },
    { year: "2024", title: "International Expansion", description: "Opened offices in 5 new countries" },
    { year: "2025", title: "Innovation Hub", description: "Launched AI-powered solutions platform" },
  ]

  return (
    <section className="py-20 px-3 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a1a1a" }}>
          Our Milestones
        </h2>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "#DC9D14" }} />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
          style={{ backgroundColor: "#E5E5E5" }}
        />

        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((milestone, idx) => (
            <div key={idx} className={`flex ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8 items-center`}>
              {/* Content */}
              <div className="w-full md:w-1/2">
                <div
                  className={`p-6 rounded-lg ${idx % 2 === 0 ? "md:ml-auto md:mr-0" : "md:ml-0 md:mr-auto"}`}
                  style={{ backgroundColor: "#f9f9f9", border: "2px solid #E5E5E5" }}
                >
                  <p className="text-sm font-bold tracking-wide mb-2" style={{ color: "#DC9D14" }}>
                    {milestone.year}
                  </p>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
                    {milestone.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#6F6F71" }}>
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Timeline dot */}
              <div
                className="hidden  z-50 md:flex w-12 h-12 rounded-full border-4 items-center justify-center"
                style={{
                  borderColor: "#DC9D14",
                  backgroundColor: "#ffffff",
                  flexShrink: 0,
                }}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#DC9D14" }} />
              </div>

              <div className="w-full md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
