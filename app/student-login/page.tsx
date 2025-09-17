import { StudentLoginForm } from "@/components/ui/student-login-form"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function StudentLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Excellence University</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Portal</h1>
          <p className="text-muted-foreground">Access your academic dashboard</p>
        </div>

        {/* Login Form */}
        <StudentLoginForm />

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Need help?{" "}
            <Link href="/support" className="text-primary hover:underline">
              Contact Support
            </Link>
          </p>
          <p className="text-sm text-muted-foreground">
            Faculty member?{" "}
            <Link href="/teacher-login" className="text-primary hover:underline">
              Teacher Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
