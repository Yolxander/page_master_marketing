"use client"

import { useInView } from "@/hooks/useInView"

export default function PricingSection() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.1 })
  const { ref: tableRef, isInView: tableInView } = useInView({ threshold: 0.1 })
  const { ref: ctaRef, isInView: ctaInView } = useInView({ threshold: 0.1 })
  const { ref: ctaTitleRef, isInView: ctaTitleInView } = useInView({ threshold: 0.1 })
  const { ref: ctaDescRef, isInView: ctaDescInView } = useInView({ threshold: 0.1 })
  const { ref: ctaButtonsRef, isInView: ctaButtonsInView } = useInView({ threshold: 0.1 })
  const { ref: phoneRef, isInView: phoneInView } = useInView({ threshold: 0.1 })

  return (
    <section id="pricing" className="bg-white rounded-3xl mx-6 mt-16 overflow-hidden shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
        {/* Pricing Table */}
        <div className="mb-20">
          <h2 ref={titleRef} className={`text-4xl lg:text-5xl font-light text-gray-900 mb-12 text-center text-balance font-serif animate-fade-in-up ${titleInView ? 'in-view' : ''}`}>
            Invest in Your Transformation
          </h2>

          <div ref={tableRef} className={`overflow-x-auto animate-fade-in-up ${tableInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <table className="w-full text-gray-900">
              <thead>
                <tr>
                  <th className="text-left py-4 pr-8 text-lg font-semibold text-gray-600">Features</th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
                      Free
                      <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-[#FFB347] text-[#2C2C2C] px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
                      Premium
                      <div className="w-5 h-5 text-[#2C2C2C]">👑</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className={`animate-fade-in-up ${tableInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
                  <td className="py-6 pr-8 text-lg font-medium">Books per Month</td>
                  <td className="text-center py-6 px-4 text-lg">1</td>
                  <td className="text-center py-6 px-4 text-lg">Unlimited</td>
                </tr>
                <tr className={`animate-fade-in-up ${tableInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
                  <td className="py-6 pr-8 text-lg font-medium">AI-Generated Stages</td>
                  <td className="text-center py-6 px-4 text-lg">✓</td>
                  <td className="text-center py-6 px-4 text-lg">✓</td>
                </tr>
                <tr className={`animate-fade-in-up ${tableInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>
                  <td className="py-6 pr-8 text-lg font-medium">Achievement Badges</td>
                  <td className="text-center py-6 px-4 text-lg">Basic (5)</td>
                  <td className="text-center py-6 px-4 text-lg">All 25+</td>
                </tr>
                <tr className={`animate-fade-in-up ${tableInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.5s' }}>
                  <td className="py-6 pr-8 text-lg font-medium">Reflection & Journaling</td>
                  <td className="text-center py-6 px-4 text-lg">-</td>
                  <td className="text-center py-6 px-4 text-lg">✓</td>
                </tr>
                <tr className={`animate-fade-in-up ${tableInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.6s' }}>
                  <td className="py-6 pr-8 text-lg font-medium">Quote Collection</td>
                  <td className="text-center py-6 px-4 text-lg">-</td>
                  <td className="text-center py-6 px-4 text-lg">✓</td>
                </tr>
                <tr className={`animate-fade-in-up ${tableInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.7s' }}>
                  <td className="py-6 pr-8 text-lg font-medium">Monthly Cost</td>
                  <td className="text-center py-6 px-4 text-2xl font-bold">Free</td>
                  <td className="text-center py-6 px-4 text-2xl font-bold">$4.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-in-left ${ctaInView ? 'in-view' : ''}`}>
          {/* Left - CTA Content */}
          <div className="text-gray-900 space-y-8">
            <h3 ref={ctaTitleRef} className={`text-4xl lg:text-5xl font-light leading-tight text-balance font-serif animate-fade-in-up ${ctaTitleInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.8s' }}>From Knowledge to Transformation</h3>

            <p ref={ctaDescRef} className={`text-lg text-gray-600 leading-relaxed animate-fade-in-up ${ctaDescInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.9s' }}>
              Join thousands of users who are finally seeing real results from their self-care, entrepreneurship, and improvement books. 
              Download Page Master and transform your reading into measurable life changes and business growth.
            </p>

            <div ref={ctaButtonsRef} className={`flex flex-col sm:flex-row gap-4 animate-fade-in-up ${ctaButtonsInView ? 'in-view' : ''}`} style={{ transitionDelay: '1.0s' }}>
              <button className="group bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>

              <button className="group bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div ref={phoneRef} className={`flex justify-center lg:justify-end animate-fade-in-right ${phoneInView ? 'in-view' : ''}`} style={{ transitionDelay: '1.1s' }}>
            <div className="relative animate-float">
            <img
              src="/images/app-screenshots/stage-details-page.png"
              alt="PageMaster stage details page interface"
              className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
