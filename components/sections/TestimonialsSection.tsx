export default function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid lg:grid-cols-3 gap-16 items-start mb-16">
        {/* Left - Heading (1/3 width) */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance font-serif">Testimonials</h2>
        </div>

        {/* Right - Description (2/3 width) */}
        <div className="lg:col-span-2 space-y-4">
          <p className="text-lg text-gray-600 leading-relaxed">
            Don't just take our word for it – hear from our satisfied users who have transformed their personal development 
            journey with PageMaster.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Learn how our AI-powered practice system has helped them turn books into lasting habits and achieve their goals.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Sarah Chen Testimonial */}
        <div className="bg-orange-100 p-8 rounded-3xl">
          <blockquote className="text-gray-900 text-lg leading-relaxed mb-6">
            "PageMaster completely transformed how I approach personal development books. The AI-generated challenges 
            made Atomic Habits actually stick - I've built 5 new habits this month alone!"
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
        <div className="bg-blue-100 p-8 rounded-3xl">
          <blockquote className="text-gray-900 text-lg leading-relaxed mb-6">
            "The gamification keeps me motivated. I love earning badges and unlocking new stages. It's like turning 
            personal development into a game I actually want to play!"
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
        <div className="bg-green-100 p-8 rounded-3xl">
          <blockquote className="text-gray-900 text-lg leading-relaxed mb-6">
            "As a busy professional, I struggled to implement what I learned from books. PageMaster's structured stages 
            helped me turn Million Dollar Weekend into actual business actions. I launched my side project!"
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
