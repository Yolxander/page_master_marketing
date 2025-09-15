import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CoreFeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance font-serif">How PageMaster Works</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg text-gray-600 leading-relaxed">
            Transform any personal development book into a structured practice system with AI-generated challenges, 
            progressive stages, and gamified progress tracking.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From Atomic Habits to Million Dollar Weekend, turn passive reading into active daily practice.
          </p>
        </div>
        <div className="flex justify-end mt-8">
          <a href="#" className="text-gray-900 font-semibold flex items-center gap-2 hover:text-gray-700">
            Explore all features
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Core Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* AI-Generated Stages Card */}
        <div className="space-y-6">
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src="/two-professional-men-collaborating-at-computer-in-.jpg"
              alt="AI-powered stage generation"
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-6 left-6">
              <Button className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-6 py-2 rounded-[20px] shadow-md font-semibold">
                Try It Now
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">AI-Generated Stages</h3>
            <p className="text-gray-600 leading-relaxed">
              Transform any book into 6 progressive stages: Foundations, Action, Courage, Growth, Momentum, and Mastery. 
              Each stage includes custom challenges, action items, and mindset prompts.
            </p>
          </div>
        </div>

        {/* Interactive Practice Card */}
        <div className="space-y-6">
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src="/young-woman-with-glasses-writing-and-studying-at-d.jpg"
              alt="Interactive practice and challenges"
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-6 left-6">
              <Button className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-6 py-2 rounded-[20px] shadow-md font-semibold">
                Try It Now
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Interactive Practice</h3>
            <p className="text-gray-600 leading-relaxed">
              Complete focused challenges (30 min - 2 hours), track micro-tasks, and build habits through 
              writing prompts, planning exercises, and reflection questions.
            </p>
          </div>
        </div>

        {/* Gamification Card */}
        <div className="space-y-6">
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src="/woman-writer-reading-book-in-cozy-cafe-setting-wit.jpg"
              alt="Gamified progress tracking"
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-6 left-6">
              <Button className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-6 py-2 rounded-[20px] shadow-md font-semibold">
                Try It Now
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Gamified Progress</h3>
            <p className="text-gray-600 leading-relaxed">
              Earn XP, unlock 25+ achievement badges, build streaks, and level up through consistent practice. 
              Track your growth journey with visual progress indicators.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <Button className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-12 py-4 rounded-[20px] shadow-md text-lg font-semibold">
          Start Your First Book
        </Button>
      </div>
    </section>
  )
}
