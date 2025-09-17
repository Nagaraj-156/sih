import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BookOpen, Globe } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Recognized globally for our commitment to educational quality and innovation.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry leaders and renowned researchers in their fields.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Programs",
      description: "Over 200 undergraduate and graduate programs across diverse disciplines.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with alumni and partners worldwide for endless opportunities.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            About <span className="text-primary">Excellence University</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            For over 50 years, we have been at the forefront of higher education, fostering innovation, critical
            thinking, and leadership in our students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
            <blockquote className="text-xl lg:text-2xl font-medium text-balance mb-6">
              "Our mission is to provide transformative education that empowers students to become leaders, innovators,
              and global citizens who make a positive impact on the world."
            </blockquote>
            <cite className="text-muted-foreground">— Dr. Sarah Johnson, University President</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
