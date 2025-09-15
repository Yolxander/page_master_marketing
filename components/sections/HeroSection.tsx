import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-white rounded-3xl mx-6 mt-8 overflow-hidden shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-gray-900 space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance font-serif">
              Turn Books Into Daily Habits
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
              PageMaster transforms any personal development book into a structured, actionable practice system. 
              Instead of passively reading, unlock progressive stages where you complete challenges, track progress, 
              and build lasting habits that actually stick.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-8 py-3 rounded-[20px] shadow-md text-lg font-semibold flex items-center gap-2">
                Start Practicing
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 text-lg font-semibold">
                See How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-4xl font-bold text-gray-900">4.9</div>
                <div className="text-gray-500">Rating on AppStore</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">25+</div>
                <div className="text-gray-500">Achievement Badges</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[600px] w-[800px]">
              <img
                src="/images/app-screenshots/landing-page.png"
                alt="PageMaster mobile app interface showing reading progress"
                className="w-full h-[95%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
