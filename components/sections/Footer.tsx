"use client"

import { BookOpen } from "lucide-react"
import { useInView } from "@/hooks/useInView"

export default function Footer() {
  const { ref: logoRef, isInView: logoInView } = useInView({ threshold: 0.1 })
  const { ref: navRef, isInView: navInView } = useInView({ threshold: 0.1 })
  const { ref: socialRef, isInView: socialInView } = useInView({ threshold: 0.1 })
  const { ref: bottomRef, isInView: bottomInView } = useInView({ threshold: 0.1 })

  return (
    <footer className="max-w-7xl mx-auto px-6 py-12">
      <div className="border-t border-gray-200 pt-12">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo */}
          <div ref={logoRef} className={`flex items-center gap-2 animate-fade-in-up ${logoInView ? 'in-view' : ''}`}>
            <div className="w-8 h-8 bg-[#FFB347] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <BookOpen className="w-4 h-4 text-[#2C2C2C]" />
            </div>
            <span className="text-xl font-bold text-gray-900 font-serif">PageMaster</span>
          </div>

          {/* Navigation Links */}
          <nav ref={navRef} className={`flex items-center gap-8 animate-fade-in-up ${navInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105">
              Testimonials
            </a>
          </nav>

          {/* Social Links */}
          <div ref={socialRef} className={`flex items-center gap-6 animate-fade-in-up ${socialInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105">
              Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105">
              Twitter
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div ref={bottomRef} className={`flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 animate-fade-in-up ${bottomInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <p>Copyright © 2024 PageMaster</p>
          <a href="#" className="hover:text-gray-700 transition-all duration-300 hover:scale-105">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
