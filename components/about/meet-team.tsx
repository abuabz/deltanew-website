export function MeetTeam() {
  const team = [
    { name: "John Smith", position: "Chief Executive Officer", image: "/professional-ceo-portrait.jpg" },
    { name: "Sarah Johnson", position: "Chief Operations Officer", image: "/professional-woman-portrait.jpg" },
    { name: "Michael Chen", position: "Chief Technology Officer", image: "/professional-man-tech.jpg" },
    { name: "Emily Williams", position: "Director of Strategy", image: "/professional-woman-strategy.jpg" },
  ]

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#1a1a1a" }}>
            Meet Our Team
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "#DC9D14" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-4 rounded-lg overflow-hidden">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
              </div>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#1a1a1a" }}>
                {member.name}
              </h3>
              <p className="text-sm" style={{ color: "#6F6F71" }}>
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
