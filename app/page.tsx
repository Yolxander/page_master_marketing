import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import CoreFeaturesSection from "@/components/sections/CoreFeaturesSection"
import AppFeaturesSection from "@/components/sections/AppFeaturesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import PricingSection from "@/components/sections/PricingSection"
import Footer from "@/components/sections/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F5ED]">
      <Header />
      <HeroSection />
      <CoreFeaturesSection />
      <AppFeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  )
}
