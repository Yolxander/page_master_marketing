import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#FFB347] rounded-full flex items-center justify-center">
          <BookOpen className="w-4 h-4 text-[#2C2C2C]" />
        </div>
        <span className="text-xl font-bold text-gray-900 font-serif">PageMaster</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
          Features
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
          Pricing
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
          Testimonials
        </a>
      </nav>

      <Button className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-6 py-2 rounded-[20px] shadow-md">Sign in</Button>
    </header>
  )
}
