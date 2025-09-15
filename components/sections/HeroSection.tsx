"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import ResearchModal from "@/components/ResearchModal"

export default function HeroSection() {
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false)
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 })
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.1 })
  const { ref: descRef, isInView: descInView } = useInView({ threshold: 0.1 })
  const { ref: buttonsRef, isInView: buttonsInView } = useInView({ threshold: 0.1 })
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.1 })
  const { ref: phoneRef, isInView: phoneInView } = useInView({ threshold: 0.1 })

  return (
    <section id="home" className="bg-white rounded-3xl mx-6 mt-8 overflow-hidden shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={heroRef} className={`text-gray-900 space-y-8 animate-fade-in-up ${heroInView ? 'in-view' : ''}`}>
            <h1 ref={titleRef} className={`text-4xl lg:text-6xl font-light leading-tight text-balance font-serif animate-fade-in-up ${titleInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
              Your Reading Companion for Real Change
            </h1>

            <p ref={descRef} className={`text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg animate-fade-in-up ${descInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
              Research shows that simply reading self-care, entrepreneurship, and improvement books rarely leads to lasting change. 
              Page Master bridges this gap by transforming your reading into actionable practice. Turn knowledge into real results 
              with structured challenges, progress tracking, and habit-building that actually works.
            </p>

            <div ref={buttonsRef} className={`flex flex-col sm:flex-row gap-4 animate-fade-in-up ${buttonsInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <Button className="group bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-6 py-2 rounded-[20px] shadow-md font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                Transform Your Reading
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setIsResearchModalOpen(true)}
              >
                How It Works
              </Button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className={`flex gap-12 pt-8 animate-fade-in-up ${statsInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">87%</div>
                <div className="text-gray-500">Report Real Life Changes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">3x</div>
                <div className="text-gray-500">More Effective Than Reading Alone</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div ref={phoneRef} className={`flex justify-center lg:justify-end animate-fade-in-right ${phoneInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.5s' }}>
            <div className="relative h-[600px] w-[800px] animate-float">
              <img
                src="/images/app-screenshots/landing-page.png"
                alt="PageMaster mobile app interface showing reading progress"
                className="w-full h-[95%] object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Research Modal */}
      <ResearchModal 
        isOpen={isResearchModalOpen} 
        onClose={() => setIsResearchModalOpen(false)} 
      />
    </section>
  )
}
