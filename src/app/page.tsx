import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background - Full Screen including navbar area */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

        {/* Moving Gradients */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 rounded-full filter blur-3xl animate-gradient-shift"></div>
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-500/25 via-cyan-500/25 to-purple-500/25 rounded-full filter blur-3xl animate-gradient-float transform -translate-x-20"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-pink-500/30 via-red-500/30 to-orange-500/30 rounded-full filter blur-3xl animate-gradient-pulse transform translate-y-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-cyan-400/25 via-blue-400/25 to-purple-400/25 rounded-full filter blur-3xl animate-gradient-shift delay-1000"></div>
          <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-gradient-to-tr from-green-400/20 via-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl animate-gradient-float delay-700"></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-radial from-purple-500/40 to-transparent rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-radial from-blue-500/40 to-transparent rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-gradient-radial from-pink-500/40 to-transparent rounded-full animate-ping delay-1500"></div>
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-1500"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">Innovative </span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Software
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Solutions
                </span>
                <span className="text-white"> for Modern</span>
                <br />
                <span className="text-white">Businesses</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                Our technology performing fast software development and it has
                guaranteed AI-based solutions. Our comprehensive algorithm
                enables unlimited possibilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-500/50">
                  <span className="flex items-center">
                    Get started
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="group border-2 border-purple-500/50 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
                  <span className="flex items-center">
                    Services
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Side - Animation */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="flex justify-center items-end space-x-6">
                  {/* Left Robot */}
                  <div className="relative">
                    <div className="w-28 h-36 bg-gradient-to-b from-blue-400 to-purple-500 rounded-3xl relative overflow-hidden shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                      <div className="absolute inset-2 bg-gradient-to-b from-blue-300 to-purple-400 rounded-2xl"></div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                        <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-18 h-5 bg-white/80 rounded-full flex items-center justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    {/* Robot Arms */}
                    <div className="absolute -top-3 -left-5 w-7 h-18 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full transform rotate-45 shadow-lg"></div>
                    <div className="absolute -top-3 -right-5 w-7 h-18 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full transform -rotate-45 shadow-lg"></div>
                  </div>

                  {/* Center Infinity Symbol */}
                  <div className="relative z-10">
                    <div className="w-40 h-20 relative">
                      <svg viewBox="0 0 200 100" className="w-full h-full">
                        <path
                          d="M20 50 C20 20, 60 20, 100 50 C140 80, 180 80, 180 50 C180 20, 140 20, 100 50 C60 80, 20 80, 20 50 Z"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="8"
                          className="animate-pulse"
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Right Robot */}
                  <div className="relative">
                    <div className="w-28 h-36 bg-gradient-to-b from-purple-400 to-pink-500 rounded-3xl relative overflow-hidden shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                      <div className="absolute inset-2 bg-gradient-to-b from-purple-300 to-pink-400 rounded-2xl"></div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                        <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-18 h-5 bg-white/80 rounded-full flex items-center justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      </div>
                    </div>
                    {/* Robot Arms */}
                    <div className="absolute -top-3 -left-5 w-7 h-18 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full transform rotate-45 shadow-lg"></div>
                    <div className="absolute -top-3 -right-5 w-7 h-18 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full transform -rotate-45 shadow-lg"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-0 left-1/4 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"></div>
                <div className="absolute top-10 right-1/4 w-7 h-7 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce delay-500"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-gradient-to-r from-pink-400 to-blue-500 rounded-full animate-bounce delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-gray-900 border-t border-purple-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that speak for themselves in the digital realm
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "100+",
                label: "Projects Completed",
                description:
                  "Successfully delivered solutions across various industries",
                gradient: "from-pink-400 to-purple-400",
              },
              {
                number: "50+",
                label: "Happy Clients",
                description: "Trusted by businesses worldwide",
                gradient: "from-blue-400 to-cyan-400",
              },
              {
                number: "5+",
                label: "Years Experience",
                description: "Proven track record in software development",
                gradient: "from-purple-400 to-pink-400",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                description: "Delivering excellence in every project",
                gradient: "from-cyan-400 to-blue-400",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col min-h-[280px]">
                  <div
                    className={`text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`}>
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 leading-tight min-h-[3rem] flex items-center justify-center">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-20 bg-black border-t border-purple-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Clients
              </span>{" "}
              Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied
              clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "RewindLoop transformed our entire digital infrastructure. Their expertise and dedication resulted in a 300% increase in our online efficiency.",
                name: "Sarah Johnson",
                title: "CEO, TechStart Inc.",
                avatar: "SJ",
              },
              {
                quote:
                  "The team's attention to detail and innovative approach helped us launch our product 2 months ahead of schedule with exceptional quality.",
                name: "Michael Chen",
                title: "CTO, InnovateLab",
                avatar: "MC",
              },
              {
                quote:
                  "Working with RewindLoop was a game-changer. They didn't just deliver a product, they delivered a complete solution that exceeded our expectations.",
                name: "Emily Rodriguez",
                title: "Founder, NextGen Solutions",
                avatar: "ER",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900 border-t border-purple-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to elevate your
              business in the digital realm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "AI Development",
                description:
                  "Advanced AI solutions and machine learning models for intelligent automation.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                gradient: "from-blue-500 to-cyan-400",
              },
              {
                title: "Blockchain Solutions",
                description:
                  "Secure and scalable blockchain applications with smart contract integration.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                ),
                gradient: "from-purple-500 to-pink-400",
              },
              {
                title: "Web3 Development",
                description:
                  "Next-generation decentralized applications and DeFi platforms.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
                gradient: "from-pink-500 to-purple-400",
              },
              {
                title: "Mobile AI Apps",
                description:
                  "Intelligent mobile applications with AI-powered features and analytics.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
                    />
                  </svg>
                ),
                gradient: "from-cyan-500 to-blue-400",
              },
              {
                title: "Cloud Infrastructure",
                description:
                  "Scalable cloud solutions with automated deployment and monitoring.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                ),
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Digital Transformation",
                description:
                  "Complete business transformation with cutting-edge technology integration.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                gradient: "from-blue-500 to-purple-500",
              },
            ].map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col min-h-[320px]">
                  <div
                    className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2 flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 py-4 rounded-full hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105 border border-purple-500/50">
              Explore All Services
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-purple-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-300">
                Join hundreds of successful companies who have chosen RewindLoop
                to accelerate their digital journey with AI and blockchain
                technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-105 border border-purple-500/50">
                  <span className="flex items-center justify-center">
                    Get Free Consultation
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/portfolio"
                  className="group border-2 border-purple-500/50 text-white px-10 py-4 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 text-lg">
                  <span className="flex items-center justify-center">
                    View Case Studies
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
