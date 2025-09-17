import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Graduate",
      company: "Google",
      image: "/professional-headshot-of-young-asian-woman.jpg",
      content:
        "Excellence University provided me with not just technical knowledge, but the critical thinking skills that helped me land my dream job at Google. The professors are world-class and truly care about student success.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Business Administration Graduate",
      company: "McKinsey & Company",
      image: "/professional-headshot-of-young-hispanic-man.jpg",
      content:
        "The business program here is exceptional. The case study approach and real-world projects prepared me perfectly for consulting. I'm now working at McKinsey thanks to the strong foundation I built here.",
      rating: 5,
    },
    {
      name: "Dr. Emily Watson",
      role: "Medical Graduate",
      company: "Johns Hopkins Hospital",
      image: "/professional-headshot-of-young-woman-doctor.jpg",
      content:
        "The medical program's emphasis on both clinical excellence and compassionate care shaped me into the physician I am today. The hands-on experience and mentorship were invaluable.",
      rating: 5,
    },
    {
      name: "James Park",
      role: "Engineering Graduate",
      company: "Tesla",
      image: "/professional-headshot-of-young-asian-man-engineer.jpg",
      content:
        "The engineering curriculum here is cutting-edge. Working on real projects with industry partners gave me the experience I needed to contribute immediately at Tesla. Highly recommend!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            What Our <span className="text-primary">Students</span> Say
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Hear from our graduates who are now making their mark in leading companies and organizations around the
            world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground text-pretty pl-6">{testimonial.content}</p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alumni Success Stats */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Alumni Success</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Employment Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$85K</div>
                <div className="text-sm text-muted-foreground">Average Starting Salary</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150K+</div>
                <div className="text-sm text-muted-foreground">Global Alumni</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
