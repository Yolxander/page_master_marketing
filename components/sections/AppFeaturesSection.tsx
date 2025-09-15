"use client"

import { useState } from "react"
import { BookMarked, BookOpen, Star, Users, ChevronRight } from "lucide-react"

export default function AppFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0) // Start with 6 Progressive Stages highlighted

  const features = [
    {
      id: 0,
      icon: BookMarked,
      title: "6 Progressive Stages",
      description: "Foundations → Action → Courage → Growth → Momentum → Mastery",
      details: "Each book is broken down into 6 carefully designed stages that build upon each other, ensuring you develop skills progressively and unlock new content as you complete previous stages.",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      id: 1,
      icon: Star,
      title: "25+ Achievement Badges",
      description: "Gamified progress tracking with meaningful rewards",
      details: "Earn badges for daily practice, completing stages, building streaks, and achieving personal milestones. Track your growth journey with visual progress indicators and level up through consistent practice.",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      id: 2,
      icon: Users,
      title: "Reflection & Journaling",
      description: "Structured reflection prompts for deeper learning",
      details: "Capture insights, track progress, and build self-awareness through guided reflection exercises. Organize your thoughts by book and stage, and search through your personal development journey.",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      icon: BookOpen,
      title: "Quote Collection & Library",
      description: "Save and organize inspirational quotes from your books",
      details: "Build your personal library of wisdom, search by topic, and revisit key insights whenever you need motivation. Pin important quotes for quick access and organize them by book or stage.",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600"
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Phone App Interface */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <img
              src="/images/app-screenshots/home-page.png"
              alt="PageMaster home page interface"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right - Interactive App Features */}
        <div className="space-y-4">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience the full power of PageMaster with our comprehensive suite of learning tools and features.
            </p>
          </div>

          <div className="space-y-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={feature.id}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    activeFeature === feature.id
                      ? 'bg-[#FFB347] border-[#FFB347] shadow-lg scale-105'
                      : `${feature.color} hover:shadow-md`
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
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
                      <h3 className={`text-lg font-bold ${
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
