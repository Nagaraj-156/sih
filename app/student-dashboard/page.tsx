"use client"

import { useState } from "react"
import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { User, BookOpen, Download, Calendar, Trophy, Clock, FileText, GraduationCap, Star } from "lucide-react"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock student data
  const studentData = {
    name: "John Smith",
    id: "STU2024001",
    program: "Computer Science",
    year: "3rd Year",
    semester: "Fall 2024",
    gpa: 3.75,
    totalCredits: 90,
    completedCredits: 75,
  }

  const results = [
    { subject: "Data Structures", grade: "A", credits: 3, semester: "Fall 2024" },
    { subject: "Database Systems", grade: "A-", credits: 3, semester: "Fall 2024" },
    { subject: "Web Development", grade: "B+", credits: 3, semester: "Fall 2024" },
    { subject: "Software Engineering", grade: "A", credits: 4, semester: "Spring 2024" },
    { subject: "Computer Networks", grade: "B", credits: 3, semester: "Spring 2024" },
  ]

  const currentCourses = [
    { code: "CS401", name: "Machine Learning", instructor: "Dr. Johnson", schedule: "MWF 10:00-11:00" },
    { code: "CS402", name: "Mobile App Development", instructor: "Prof. Davis", schedule: "TTh 2:00-3:30" },
    { code: "CS403", name: "Cybersecurity", instructor: "Dr. Wilson", schedule: "MWF 1:00-2:00" },
  ]

  const upcomingEvents = [
    { title: "Midterm Exam - Machine Learning", date: "Nov 15, 2024", type: "exam" },
    { title: "Project Submission - Mobile App", date: "Nov 20, 2024", type: "assignment" },
    { title: "Career Fair", date: "Nov 25, 2024", type: "event" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, {studentData.name}!</h1>
              <p className="text-muted-foreground">
                Student ID: {studentData.id} | {studentData.program}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current GPA</p>
                  <p className="text-2xl font-bold text-foreground">{studentData.gpa}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Credits Completed</p>
                  <p className="text-2xl font-bold text-foreground">
                    {studentData.completedCredits}/{studentData.totalCredits}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Semester</p>
                  <p className="text-lg font-semibold text-foreground">{studentData.semester}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Trophy className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Academic Year</p>
                  <p className="text-lg font-semibold text-foreground">{studentData.year}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="results">Results & Marks</TabsTrigger>
            <TabsTrigger value="academics">Academic Details</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Current Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Current Courses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentCourses.map((course, index) => (
                    <div key={index} className="flex justify-between items-start p-3 bg-muted/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">{course.code}</h4>
                        <p className="text-sm text-foreground">{course.name}</p>
                        <p className="text-xs text-muted-foreground">{course.instructor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{course.schedule}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div
                        className={`p-2 rounded-full ${
                          event.type === "exam"
                            ? "bg-destructive/10"
                            : event.type === "assignment"
                              ? "bg-secondary/10"
                              : "bg-primary/10"
                        }`}
                      >
                        {event.type === "exam" ? (
                          <Clock className="h-4 w-4 text-destructive" />
                        ) : event.type === "assignment" ? (
                          <FileText className="h-4 w-4 text-secondary" />
                        ) : (
                          <Calendar className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Progress</CardTitle>
                <CardDescription>Your progress towards graduation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Credits Completed</span>
                      <span>
                        {studentData.completedCredits}/{studentData.totalCredits}
                      </span>
                    </div>
                    <Progress value={(studentData.completedCredits / studentData.totalCredits) * 100} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Academic Results
                </CardTitle>
                <CardDescription>Your grades and academic performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{result.subject}</h4>
                        <p className="text-sm text-muted-foreground">
                          {result.semester} • {result.credits} Credits
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge
                          variant={
                            result.grade.startsWith("A")
                              ? "default"
                              : result.grade.startsWith("B")
                                ? "secondary"
                                : "outline"
                          }
                          className="text-sm font-semibold"
                        >
                          {result.grade}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Student ID</p>
                      <p className="font-semibold">{studentData.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Program</p>
                      <p className="font-semibold">{studentData.program}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Academic Year</p>
                      <p className="font-semibold">{studentData.year}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Semester</p>
                      <p className="font-semibold">{studentData.semester}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Cumulative GPA</p>
                      <p className="font-semibold">{studentData.gpa}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Credits Completed</p>
                      <p className="font-semibold">
                        {studentData.completedCredits}/{studentData.totalCredits}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Standing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-secondary" />
                      <div>
                        <p className="font-semibold">Dean's List</p>
                        <p className="text-sm text-muted-foreground">Spring 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trophy className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Academic Excellence Award</p>
                        <p className="text-sm text-muted-foreground">Fall 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="downloads" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Available Downloads
                </CardTitle>
                <CardDescription>Download your academic documents and transcripts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Official Transcript</h4>
                        <p className="text-sm text-muted-foreground">Complete academic record</p>
                      </div>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Grade Report</h4>
                        <p className="text-sm text-muted-foreground">Current semester grades</p>
                      </div>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Enrollment Certificate</h4>
                        <p className="text-sm text-muted-foreground">Proof of enrollment</p>
                      </div>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Course Schedule</h4>
                        <p className="text-sm text-muted-foreground">Current semester schedule</p>
                      </div>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
