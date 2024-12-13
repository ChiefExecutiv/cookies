import { AnnouncementBar } from "./components/announcement-bar"
import { HeroSection } from "./components/hero-section"
import { ProductGrid } from "./components/productgrid"
import { Navigation } from "./components/navigation"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <AnnouncementBar />
      <main>
        <HeroSection />
        <ProductGrid />
      </main>
    </div>
  )
}

