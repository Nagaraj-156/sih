import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-primary">Empowering Students,</span>
                <br />
                <span className="text-foreground">Building Futures</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground text-pretty max-w-2xl">
                Join thousands of students who have transformed their lives through our world-class education,
                innovative research opportunities, and vibrant campus community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply">
                <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="group bg-transparent">
                  Student Login
                  <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">25,000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Job Placement</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
              <img
                src="/university-campus-with-students-studying-outdoors-.jpg"
                alt="University campus with students"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Top Ranked University
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Excellence in Education
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
