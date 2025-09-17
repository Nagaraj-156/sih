import { Header } from "@/components/ui/header"
import { HeroSection } from "@/components/ui/hero-section"
import { AboutSection } from "@/components/ui/about-section"
import { AcademicsSection } from "@/components/ui/academics-section"
import { StudentServicesSection } from "@/components/ui/student-services-section"
import { NewsEventsSection } from "@/components/ui/news-events-section"
import { TestimonialsSection } from "@/components/ui/testimonials-section"
import { Footer } from "@/components/ui/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <StudentServicesSection />
        <NewsEventsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
