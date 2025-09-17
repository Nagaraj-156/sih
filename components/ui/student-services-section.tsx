import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Heart, Briefcase, Home, Utensils, Dumbbell, GraduationCap } from "lucide-react"

export function StudentServicesSection() {
  const services = [
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Access to over 1 million books, journals, and digital resources 24/7.",
    },
    {
      icon: Users,
      title: "Academic Support",
      description: "Tutoring, study groups, and academic counseling to ensure your success.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive healthcare services and mental health support programs.",
    },
    {
      icon: Briefcase,
      title: "Career Services",
      description: "Job placement assistance, internships, and career development workshops.",
    },
    {
      icon: Home,
      title: "Housing",
      description: "Modern dormitories and apartment-style living options on campus.",
    },
    {
      icon: Utensils,
      title: "Dining Services",
      description: "Multiple dining halls with diverse, healthy meal options for all dietary needs.",
    },
    {
      icon: Dumbbell,
      title: "Recreation Center",
      description: "State-of-the-art fitness facilities, sports courts, and wellness programs.",
    },
    {
      icon: GraduationCap,
      title: "Student Organizations",
      description: "Over 300 clubs and organizations to explore your interests and build connections.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            <span className="text-primary">Student</span> Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            We provide comprehensive support services to ensure your academic success and personal growth throughout
            your university journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Hours */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">24/7 Student Support</h3>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our dedicated support team is available around the clock to assist you with any questions, concerns, or
              emergencies. Your success and well-being are our top priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <div className="text-center">
                <div className="font-semibold text-primary">Emergency Hotline</div>
                <div className="text-sm text-muted-foreground">1-800-UNI-HELP</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="font-semibold text-primary">Online Support</div>
                <div className="text-sm text-muted-foreground">support@excellence.edu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
