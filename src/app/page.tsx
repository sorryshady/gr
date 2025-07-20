import HeroSection from '@/components/sections/hero-section'

export default function Home() {
  return (
    <main id="home">
      <HeroSection />
      <div
        className="h-screen w-full bg-red-100"
        id="about"
      />
    </main>
  )
}
