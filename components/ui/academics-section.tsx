import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, Star } from "lucide-react"

export function AcademicsSection() {
  const programs = [
    {
      title: "Computer Science & Engineering",
      duration: "4 Years",
      students: "2,500+",
      rating: "4.9",
      description: "Cutting-edge curriculum covering AI, machine learning, cybersecurity, and software development.",
      specializations: ["Artificial Intelligence", "Data Science", "Cybersecurity", "Software Engineering"],
    },
    {
      title: "Business Administration",
      duration: "4 Years",
      students: "3,200+",
      rating: "4.8",
      description: "Comprehensive business education with focus on leadership, strategy, and entrepreneurship.",
      specializations: ["Finance", "Marketing", "Operations", "Entrepreneurship"],
    },
    {
      title: "Medical Sciences",
      duration: "6 Years",
      students: "1,800+",
      rating: "4.9",
      description: "World-class medical education with state-of-the-art facilities and clinical training.",
      specializations: ["General Medicine", "Surgery", "Pediatrics", "Cardiology"],
    },
    {
      title: "Engineering",
      duration: "4 Years",
      students: "4,100+",
      rating: "4.7",
      description: "Innovative engineering programs preparing students for tomorrow's challenges.",
      specializations: ["Mechanical", "Electrical", "Civil", "Chemical"],
    },
  ]

  return (
    <section id="academics" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            <span className="text-primary">Academics</span> & Courses
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Discover our comprehensive range of undergraduate and graduate programs designed to prepare you for success
            in your chosen field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{program.title}</CardTitle>
                  <div className="flex items-center space-x-1 text-sm text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <span>{program.rating}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{program.students}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{program.description}</p>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.specializations.map((spec, specIndex) => (
                      <Badge key={specIndex} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Programs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
