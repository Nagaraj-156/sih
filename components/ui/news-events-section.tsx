import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

export function NewsEventsSection() {
  const news = [
    {
      title: "Excellence University Ranks #1 in Innovation",
      excerpt: "Our university has been recognized as the top innovative institution for the third consecutive year.",
      date: "2024-03-15",
      category: "Achievement",
    },
    {
      title: "New Research Center Opens",
      excerpt: "State-of-the-art AI and Machine Learning Research Center now open for students and faculty.",
      date: "2024-03-10",
      category: "Research",
    },
    {
      title: "Record Breaking Graduation Ceremony",
      excerpt: "Over 5,000 students graduated this year with the highest employment rate in university history.",
      date: "2024-03-05",
      category: "Graduation",
    },
  ]

  const events = [
    {
      title: "Open House 2024",
      date: "2024-04-20",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus",
      description: "Explore our campus, meet faculty, and learn about our programs.",
    },
    {
      title: "Research Symposium",
      date: "2024-04-25",
      time: "9:00 AM - 5:00 PM",
      location: "Science Building",
      description: "Annual showcase of student and faculty research projects.",
    },
    {
      title: "Career Fair",
      date: "2024-05-01",
      time: "11:00 AM - 6:00 PM",
      location: "Student Center",
      description: "Connect with top employers and explore career opportunities.",
    },
  ]

  return (
    <section id="news-events" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            <span className="text-primary">News</span> & Events
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and upcoming events happening across our vibrant campus
            community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* News Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Latest News</h3>
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty mb-4">{item.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Events Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(event.date).toLocaleDateString()} • {event.time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty mb-4">{event.description}</p>
                  <Button variant="outline" size="sm">
                    Register
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              View All News
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
