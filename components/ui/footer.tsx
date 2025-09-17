import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Research", href: "/research" },
    { name: "Campus Life", href: "/campus-life" },
  ]

  const studentResources = [
    { name: "Student Portal", href: "/login" },
    { name: "Library", href: "/library" },
    { name: "Career Services", href: "/careers" },
    { name: "Academic Calendar", href: "/calendar" },
    { name: "Support Center", href: "/support" },
  ]

  const contactInfo = [
    { icon: MapPin, text: "123 University Ave, Education City, EC 12345" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: Mail, text: "info@excellence.edu" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">Excellence University</span>
            </div>
            <p className="text-primary-foreground/80 text-pretty">
              Empowering students to build their futures through world-class education, innovative research, and vibrant
              campus life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Student Resources</h3>
            <ul className="space-y-2">
              {studentResources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <contact.icon className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                  <span className="text-primary-foreground/80 text-sm">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">© 2024 Excellence University. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
