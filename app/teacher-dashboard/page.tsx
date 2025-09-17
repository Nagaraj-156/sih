"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, BookOpen, Users, Calendar, Edit, Search, GraduationCap, FileText, Clock } from "lucide-react"

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [editingGrade, setEditingGrade] = useState<string | null>(null)

  // Mock teacher data
  const teacherData = {
    name: "Dr. Sarah Johnson",
    id: "TCH2024001",
    department: "Computer Science",
    position: "Associate Professor",
    courses: 3,
    totalStudents: 85,
  }

  const courses = [
    {
      id: "CS401",
      name: "Machine Learning",
      students: 30,
      schedule: "MWF 10:00-11:00",
      semester: "Fall 2024",
    },
    {
      id: "CS301",
      name: "Data Structures",
      students: 35,
      schedule: "TTh 2:00-3:30",
      semester: "Fall 2024",
    },
    {
      id: "CS201",
      name: "Programming Fundamentals",
      students: 20,
      schedule: "MWF 1:00-2:00",
      semester: "Fall 2024",
    },
  ]

  const [students, setStudents] = useState([
    { id: "STU001", name: "John Smith", course: "CS401", midterm: 85, final: 88, assignment: 92, total: 88 },
    { id: "STU002", name: "Emily Davis", course: "CS401", midterm: 92, final: 90, assignment: 95, total: 92 },
    { id: "STU003", name: "Michael Brown", course: "CS401", midterm: 78, final: 82, assignment: 85, total: 82 },
    { id: "STU004", name: "Sarah Wilson", course: "CS301", midterm: 88, final: 85, assignment: 90, total: 88 },
    { id: "STU005", name: "David Lee", course: "CS301", midterm: 95, final: 93, assignment: 97, total: 95 },
  ])

  const [selectedCourse, setSelectedCourse] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter((student) => {
    const matchesCourse = selectedCourse === "all" || student.course === selectedCourse
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCourse && matchesSearch
  })

  const updateGrade = (studentId: string, field: string, value: number) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id === studentId) {
          const updated = { ...student, [field]: value }
          // Recalculate total (simple average for demo)
          updated.total = Math.round((updated.midterm + updated.final + updated.assignment) / 3)
          return updated
        }
        return student
      }),
    )
    setEditingGrade(null)
  }

  const upcomingTasks = [
    { title: "Grade Midterm Exams - CS401", date: "Nov 18, 2024", type: "grading" },
    { title: "Faculty Meeting", date: "Nov 20, 2024", type: "meeting" },
    { title: "Submit Final Grades", date: "Dec 15, 2024", type: "deadline" },
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
              <h1 className="text-3xl font-bold text-foreground">Welcome, {teacherData.name}!</h1>
              <p className="text-muted-foreground">
                {teacherData.position} | {teacherData.department} Department
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
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Courses</p>
                  <p className="text-2xl font-bold text-foreground">{teacherData.courses}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-foreground">{teacherData.totalStudents}</p>
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
                  <p className="text-lg font-semibold text-foreground">Fall 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="text-lg font-semibold text-foreground">Computer Science</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Student Management</TabsTrigger>
            <TabsTrigger value="grades">Grade Management</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Current Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    My Courses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="flex justify-between items-start p-3 bg-muted/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">{course.id}</h4>
                        <p className="text-sm text-foreground">{course.name}</p>
                        <p className="text-xs text-muted-foreground">{course.schedule}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{course.students} students</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingTasks.map((task, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div
                        className={`p-2 rounded-full ${
                          task.type === "grading"
                            ? "bg-secondary/10"
                            : task.type === "meeting"
                              ? "bg-primary/10"
                              : "bg-destructive/10"
                        }`}
                      >
                        {task.type === "grading" ? (
                          <Edit className="h-4 w-4 text-secondary" />
                        ) : task.type === "meeting" ? (
                          <Users className="h-4 w-4 text-primary" />
                        ) : (
                          <Clock className="h-4 w-4 text-destructive" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{task.title}</h4>
                        <p className="text-sm text-muted-foreground">{task.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Student Directory
                </CardTitle>
                <CardDescription>View and manage student information</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <Label htmlFor="search">Search Students</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="Search by name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="course-filter">Filter by Course</Label>
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Courses</SelectItem>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.id}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Student List */}
                <div className="space-y-4">
                  {filteredStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            ID: {student.id} | Course: {student.course}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Total: {student.total}%</Badge>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grades" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5 text-primary" />
                  Grade Management
                </CardTitle>
                <CardDescription>Manage student grades and assessments</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <Label htmlFor="grade-search">Search Students</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="grade-search"
                        placeholder="Search by name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="grade-course-filter">Filter by Course</Label>
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Courses</SelectItem>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.id}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Grades Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Student</th>
                        <th className="text-left p-3 font-semibold">Course</th>
                        <th className="text-center p-3 font-semibold">Midterm</th>
                        <th className="text-center p-3 font-semibold">Final</th>
                        <th className="text-center p-3 font-semibold">Assignment</th>
                        <th className="text-center p-3 font-semibold">Total</th>
                        <th className="text-center p-3 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student, index) => (
                        <tr key={index} className="border-b hover:bg-muted/30">
                          <td className="p-3">
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-sm text-muted-foreground">{student.id}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <Badge variant="outline">{student.course}</Badge>
                          </td>
                          <td className="p-3 text-center">
                            {editingGrade === `${student.id}-midterm` ? (
                              <Input
                                type="number"
                                defaultValue={student.midterm}
                                className="w-16 text-center"
                                onBlur={(e) => updateGrade(student.id, "midterm", Number.parseInt(e.target.value))}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    updateGrade(student.id, "midterm", Number.parseInt(e.currentTarget.value))
                                  }
                                }}
                                autoFocus
                              />
                            ) : (
                              <span
                                className="cursor-pointer hover:bg-muted px-2 py-1 rounded"
                                onClick={() => setEditingGrade(`${student.id}-midterm`)}
                              >
                                {student.midterm}%
                              </span>
                            )}
                          </td>
                          <td className="p-3 text-center">
                            {editingGrade === `${student.id}-final` ? (
                              <Input
                                type="number"
                                defaultValue={student.final}
                                className="w-16 text-center"
                                onBlur={(e) => updateGrade(student.id, "final", Number.parseInt(e.target.value))}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    updateGrade(student.id, "final", Number.parseInt(e.currentTarget.value))
                                  }
                                }}
                                autoFocus
                              />
                            ) : (
                              <span
                                className="cursor-pointer hover:bg-muted px-2 py-1 rounded"
                                onClick={() => setEditingGrade(`${student.id}-final`)}
                              >
                                {student.final}%
                              </span>
                            )}
                          </td>
                          <td className="p-3 text-center">
                            {editingGrade === `${student.id}-assignment` ? (
                              <Input
                                type="number"
                                defaultValue={student.assignment}
                                className="w-16 text-center"
                                onBlur={(e) => updateGrade(student.id, "assignment", Number.parseInt(e.target.value))}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    updateGrade(student.id, "assignment", Number.parseInt(e.currentTarget.value))
                                  }
                                }}
                                autoFocus
                              />
                            ) : (
                              <span
                                className="cursor-pointer hover:bg-muted px-2 py-1 rounded"
                                onClick={() => setEditingGrade(`${student.id}-assignment`)}
                              >
                                {student.assignment}%
                              </span>
                            )}
                          </td>
                          <td className="p-3 text-center">
                            <Badge
                              variant={student.total >= 90 ? "default" : student.total >= 80 ? "secondary" : "outline"}
                            >
                              {student.total}%
                            </Badge>
                          </td>
                          <td className="p-3 text-center">
                            <Button size="sm" variant="outline">
                              <FileText className="h-4 w-4 mr-1" />
                              Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
