"use client"

import { useInView } from "@/hooks/useInView"

export default function TestimonialsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 })
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.1 })
  const { ref: descRef, isInView: descInView } = useInView({ threshold: 0.1 })
  const { ref: testimonial1Ref, isInView: testimonial1InView } = useInView({ threshold: 0.1 })
  const { ref: testimonial2Ref, isInView: testimonial2InView } = useInView({ threshold: 0.1 })
  const { ref: testimonial3Ref, isInView: testimonial3InView } = useInView({ threshold: 0.1 })

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div ref={headerRef} className={`grid lg:grid-cols-3 gap-16 items-start mb-16 animate-fade-in-up ${headerInView ? 'in-view' : ''}`}>
        {/* Left - Heading (1/3 width) */}
        <div>
          <h2 ref={titleRef} className={`text-4xl lg:text-5xl font-light text-gray-900 text-balance font-serif animate-fade-in-up ${titleInView ? 'in-view' : ''}`}>Testimonials</h2>
        </div>

        {/* Right - Description (2/3 width) */}
        <div ref={descRef} className={`lg:col-span-2 space-y-4 animate-fade-in-up ${descInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <p className="text-lg text-gray-600 leading-relaxed">
            Real stories from users who finally saw their self-care, entrepreneurship, and improvement books create actual change in their lives.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            These aren't just reading success stories – they're life transformation stories powered by Page Master's practical application system.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Sarah Chen Testimonial */}
        <div ref={testimonial1Ref} className={`bg-orange-100 p-8 rounded-3xl animate-fade-in-up transition-all duration-500 hover:scale-105 hover:shadow-lg ${testimonial1InView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <blockquote className="text-gray-900 text-lg leading-relaxed mb-6">
            "I'd read 'Atomic Habits' three times but never saw real change. Page Master's structured challenges made me actually implement the concepts. 
            I've built 5 lasting habits and lost 15 pounds in 2 months - finally, a book that changed my life!"
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src="/professional-man-with-short-hair-smiling.jpg"
              alt="Sarah Chen"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-gray-700">Marketing Director, TechCorp</div>
            </div>
          </div>
        </div>

        {/* Michael Rodriguez Testimonial */}
        <div ref={testimonial2Ref} className={`bg-blue-100 p-8 rounded-3xl animate-fade-in-up transition-all duration-500 hover:scale-105 hover:shadow-lg ${testimonial2InView ? 'in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <blockquote className="text-gray-900 text-lg leading-relaxed mb-6">
            "I read 'The Lean Startup' but never applied it. Page Master's practical challenges made me actually test my business ideas. 
            I launched 3 MVPs and got my first paying customer within 6 weeks. This is what reading should be!"
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src="/middle-aged-professional-man-with-glasses.jpg"
              alt="Michael Rodriguez"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-gray-900">Michael Rodriguez</div>
              <div className="text-gray-700">Software Engineer, StartupCo</div>
            </div>
          </div>
        </div>

        {/* Emma Thompson Testimonial */}
        <div ref={testimonial3Ref} className={`bg-green-100 p-8 rounded-3xl animate-fade-in-up transition-all duration-500 hover:scale-105 hover:shadow-lg ${testimonial3InView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <blockquote className="text-gray-900 text-lg leading-relaxed mb-6">
            "I'd read dozens of self-care books but felt more stressed than ever. Page Master's practical implementation 
            helped me turn 'The Miracle Morning' into a real routine. I'm now 3 months into my morning practice and feel 
            more energized and focused than I have in years!"
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src="/professional-blonde-woman-smiling.png"
              alt="Emma Thompson"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-gray-900">Emma Thompson</div>
              <div className="text-gray-700">Product Manager, InnovateLab</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
