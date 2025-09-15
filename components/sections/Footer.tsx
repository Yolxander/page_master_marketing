import { BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12">
      <div className="border-t border-gray-200 pt-12">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFB347] rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#2C2C2C]" />
            </div>
            <span className="text-xl font-bold text-gray-900 font-serif">PageMaster</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Testimonials
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Twitter
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Copyright © 2024 PageMaster</p>
          <a href="#" className="hover:text-gray-700">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
