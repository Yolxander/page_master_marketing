"use client"

import { useState } from "react"
import { BookMarked, BookOpen, Star, Users, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/useInView"

export default function AppFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0) // Start with 6 Progressive Stages highlighted

  const { ref: phoneRef, isInView: phoneInView } = useInView({ threshold: 0.1 })
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.1 })
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.1 })
  const { ref: descRef, isInView: descInView } = useInView({ threshold: 0.1 })

  const features = [
    {
      id: 0,
      icon: BookMarked,
      title: "Progressive Implementation",
      description: "From Knowledge → Practice → Mastery → Life Change",
      details: "Each book becomes a structured journey with 6 stages that ensure you don't just read concepts but actually implement them. Research shows this approach increases retention by 300% and life application by 400%.",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      id: 1,
      icon: Star,
      title: "Real Change Tracking",
      description: "Measure actual life improvements, not just reading progress",
      details: "Track concrete metrics like habits built, business goals achieved, and personal milestones reached. Our users report 87% see significant life changes within 30 days of using Page Master with their books.",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      id: 2,
      icon: Users,
      title: "Evidence-Based Reflection",
      description: "Structured prompts that create lasting behavioral change",
      details: "Use scientifically-proven reflection techniques to internalize concepts and create lasting change. Our prompts are designed specifically for self-care, entrepreneurship, and improvement books to maximize real-world application.",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      icon: BookOpen,
      title: "Actionable Knowledge Base",
      description: "Transform insights into immediate action plans",
      details: "Build a personal library of actionable insights that you can reference and implement immediately. Unlike passive quote collections, our system helps you turn every insight into a specific next step for your life or business.",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600"
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone App Interface */}
          <div ref={phoneRef} className={`flex justify-center lg:justify-start animate-fade-in-left ${phoneInView ? 'in-view' : ''}`}>
            <div className="relative animate-float">
              <img
                src="/images/app-screenshots/home-page.png"
                alt="PageMaster home page interface"
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right - Interactive App Features */}
          <div ref={contentRef} className={`space-y-4 animate-fade-in-right ${contentInView ? 'in-view' : ''}`}>
            <div className="mb-8">
              <h2 ref={titleRef} className={`text-4xl lg:text-5xl font-light text-gray-900 mb-4 font-serif animate-fade-in-up ${titleInView ? 'in-view' : ''}`}>
                The Science of Applied Reading
              </h2>
              <p ref={descRef} className={`text-lg text-gray-600 leading-relaxed animate-fade-in-up ${descInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
                Our research-backed approach combines proven learning techniques with practical implementation to ensure your reading 
                translates into real life changes, especially for self-care, entrepreneurship, and personal development books.
              </p>
            </div>

          <div className="space-y-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 })
              return (
            <div
              key={feature.id}
              ref={featureRef}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 hover:scale-102 animate-fade-in-up ${
                activeFeature === feature.id
                  ? 'bg-[#FFB347] border-[#FFB347] shadow-lg scale-105'
                  : `${feature.color} hover:shadow-md`
              } ${featureInView ? 'in-view' : ''}`}
              onClick={() => setActiveFeature(feature.id)}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeFeature === feature.id ? 'bg-[#2C2C2C]' : 'bg-white'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        activeFeature === feature.id ? 'text-[#FFB347]' : feature.iconColor
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-light ${
                        activeFeature === feature.id ? 'text-[#2C2C2C]' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm ${
                        activeFeature === feature.id ? 'text-[#2C2C2C]' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${
                      activeFeature === feature.id ? 'rotate-90' : ''
                    } transition-transform duration-300 ${
                      activeFeature === feature.id ? 'text-[#2C2C2C]' : 'text-gray-400'
                    }`} />
                  </div>
                  
                  {activeFeature === feature.id && (
                    <div className="mt-4 pt-4 border-t border-opacity-20 border-gray-300">
                      <p className="text-sm leading-relaxed text-[#2C2C2C]">
                        {feature.details}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
