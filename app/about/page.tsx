import { AboutBanner } from "@/components/about/banner"
import { OurStory } from "@/components/about/our-story"
import { VisionMission } from "@/components/about/vision-mission"
import { Milestones } from "@/components/about/milestones"
import { MeetTeam } from "@/components/about/meet-team"

export default function AboutPage() {
  return (
    <main>
      <AboutBanner />
      <OurStory />
      <VisionMission />
      <Milestones />
      <MeetTeam />
    </main>
  )
}
