import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { JourneySection } from '@/components/sections/journey-section'
import { PerspectiveSection } from '@/components/sections/perspective-section'
import { HobbiesSection } from '@/components/sections/hobbies-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { Footer } from '@/components/footer'
import { GameEntryProvider, MuteToggle } from '@/components/game-entry-overlay'

export default function Home() {
  return (
    <GameEntryProvider>
      <main className="min-h-screen bg-background text-foreground">
        <MuteToggle />
        <Navigation />
        <HeroSection />
        <JourneySection />
        <PerspectiveSection />
        <HobbiesSection />
        <SkillsSection />
        <Footer />
      </main>
    </GameEntryProvider>
  )
}
