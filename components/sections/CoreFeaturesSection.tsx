"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/useInView"

export default function CoreFeaturesSection() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 })
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.1 })
  const { ref: descRef, isInView: descInView } = useInView({ threshold: 0.1 })
  const { ref: linkRef, isInView: linkInView } = useInView({ threshold: 0.1 })
  const { ref: card1Ref, isInView: card1InView } = useInView({ threshold: 0.1 })
  const { ref: card2Ref, isInView: card2InView } = useInView({ threshold: 0.1 })
  const { ref: card3Ref, isInView: card3InView } = useInView({ threshold: 0.1 })
  const { ref: ctaRef, isInView: ctaInView } = useInView({ threshold: 0.1 })

  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div ref={headerRef} className={`text-center mb-16 animate-fade-in-up ${headerInView ? 'in-view' : ''}`}>
        <h2 ref={titleRef} className={`text-4xl lg:text-5xl font-light text-gray-900 mb-6 text-balance font-serif animate-fade-in-up ${titleInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>Why Most Books Don't Change Lives</h2>
        <div ref={descRef} className={`max-w-4xl mx-auto space-y-4 animate-fade-in-up ${descInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-lg text-gray-600 leading-relaxed">
            Studies show that 95% of people who read self-improvement books see no significant life changes. The problem isn't the books – 
            it's the lack of structured practice and implementation. Page Master fixes this by turning every book into an actionable journey.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From "Atomic Habits" to "The Lean Startup," transform knowledge into lasting habits and real business results.
          </p>
        </div>
        <div ref={linkRef} className={`flex justify-end mt-8 animate-fade-in-up ${linkInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <a href="#" className="group text-gray-900 font-semibold flex items-center gap-2 hover:text-gray-700 transition-all duration-300 hover:scale-105">
            Explore all features
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Core Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* AI-Generated Stages Card */}
        <div ref={card1Ref} className={`space-y-6 animate-fade-in-up ${card1InView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <div className="relative group overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/two-professional-men-collaborating-at-computer-in-.jpg"
              alt="AI-powered stage generation"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-6 left-6">
              <Button className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-6 py-2 rounded-[20px] shadow-md font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
                Try It Now
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-3 font-serif">Structured Implementation</h3>
            <p className="text-gray-600 leading-relaxed">
              Break any self-care, entrepreneurship, or improvement book into 6 actionable stages: Foundations, Action, Courage, Growth, Momentum, and Mastery. 
              Each stage includes real-world challenges, specific action items, and reflection prompts that ensure you actually apply what you learn.
            </p>
          </div>
        </div>

        {/* Interactive Practice Card */}
        <div ref={card2Ref} className={`space-y-6 animate-fade-in-up ${card2InView ? 'in-view' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <div className="relative group overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/young-woman-with-glasses-writing-and-studying-at-d.jpg"
              alt="Interactive practice and challenges"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-6 left-6">
              <Button className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-6 py-2 rounded-[20px] shadow-md font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
                Try It Now
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-3 font-serif">Real-World Application</h3>
            <p className="text-gray-600 leading-relaxed">
              Turn book concepts into daily practice through bite-sized challenges (15-90 minutes) designed for immediate implementation. 
              Whether it's building morning routines from "The Miracle Morning" or applying lean startup principles from "The Lean Startup," 
              you'll complete specific tasks that create measurable change in your life and business.
            </p>
          </div>
        </div>

        {/* Gamification Card */}
        <div ref={card3Ref} className={`space-y-6 animate-fade-in-up ${card3InView ? 'in-view' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <div className="relative group overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/woman-writer-reading-book-in-cozy-cafe-setting-wit.jpg"
              alt="Gamified progress tracking"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-6 left-6">
              <Button className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-6 py-2 rounded-[20px] shadow-md font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
                Try It Now
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-3 font-serif">Measurable Progress</h3>
            <p className="text-gray-600 leading-relaxed">
              Track your transformation with concrete metrics that prove your growth. Earn badges for completing real challenges, 
              building consistent habits, and achieving life milestones. See your progress through detailed analytics that show 
              exactly how your reading is translating into actual life improvements, business results, and personal development.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div ref={ctaRef} className={`text-center animate-fade-in-up ${ctaInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.7s' }}>
        <Button className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-6 py-2 rounded-[20px] shadow-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
          Start Your Transformation
        </Button>
      </div>
    </section>
  )
}
