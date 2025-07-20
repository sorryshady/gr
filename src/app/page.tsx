import AboutSection from '@/components/sections/about-section'
import HeroSection from '@/components/sections/hero-section'
import ServicesSection from '@/components/sections/services-section'

export default function Home() {
  return (
    <main id="home">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  )
}
