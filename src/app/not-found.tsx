import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Space Background */}
      <div className="fixed inset-0 z-0">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-black"></div>

        {/* Moving stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>

        {/* Floating asteroids */}
        <div className="absolute inset-0 opacity-60">
          <div
            className="absolute top-20 left-10 w-8 h-8 bg-gray-600 rounded-full animate-float"
            style={{ animationDelay: "0s" }}></div>
          <div
            className="absolute top-40 right-20 w-6 h-6 bg-gray-500 rounded-full animate-float"
            style={{ animationDelay: "1s" }}></div>
          <div
            className="absolute bottom-60 left-1/4 w-10 h-10 bg-gray-700 rounded-full animate-float"
            style={{ animationDelay: "2s" }}></div>
          <div
            className="absolute top-1/3 right-1/3 w-4 h-4 bg-gray-600 rounded-full animate-float"
            style={{ animationDelay: "1.5s" }}></div>
          <div
            className="absolute bottom-40 right-10 w-7 h-7 bg-gray-500 rounded-full animate-float"
            style={{ animationDelay: "0.5s" }}></div>
        </div>

        {/* Nebula clouds */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 rounded-full filter blur-3xl animate-gradient-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-cyan-500/20 via-blue-500/30 to-purple-500/20 rounded-full filter blur-3xl animate-gradient-shift delay-1000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* UFO Animation */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="relative">
            {/* UFO Body */}
            <div className="w-32 h-16 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full relative shadow-2xl">
              {/* UFO Top */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              {/* UFO Lights */}
              <div className="absolute bottom-1 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-1 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
            </div>
            {/* UFO Beam */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-24 h-40 bg-gradient-to-b from-cyan-400/30 to-transparent rounded-b-full animate-pulse"></div>
          </div>
        </div>

        {/* 404 Text */}
        <div className="text-center mb-8 animate-fadeInUp">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 animate-pulse">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lost in Space
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for has drifted into the cosmic void.
            Let&apos;s help you navigate back to safety.
          </p>
        </div>

        {/* Astronaut Character */}
        <div className="relative mb-8 animate-slideInUp">
          <div
            className="relative w-24 h-32 mx-auto animate-float"
            style={{ animationDelay: "1s" }}>
            {/* Astronaut Body */}
            <div className="w-16 h-24 bg-gradient-to-b from-gray-200 to-gray-400 rounded-2xl mx-auto relative shadow-lg">
              {/* Helmet */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-18 h-18 bg-gradient-to-b from-blue-100 to-blue-200 rounded-full border-2 border-gray-300">
                {/* Helmet reflection */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-white/60 rounded-full"></div>
                {/* Face */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-1 h-1 bg-black rounded-full mx-1 inline-block"></div>
                  <div className="w-1 h-1 bg-black rounded-full mx-1 inline-block"></div>
                </div>
              </div>
              {/* Chest controls */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-blue-400/80 rounded flex items-center justify-center">
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              {/* Arms */}
              <div className="absolute top-4 -left-4 w-6 h-12 bg-gradient-to-b from-gray-200 to-gray-400 rounded-full transform rotate-12"></div>
              <div className="absolute top-4 -right-4 w-6 h-12 bg-gradient-to-b from-gray-200 to-gray-400 rounded-full transform -rotate-12"></div>
            </div>
            {/* Floating tools */}
            <div
              className="absolute -top-2 -right-8 w-4 h-4 bg-yellow-400 rounded transform rotate-45 animate-bounce"
              style={{ animationDelay: "2s" }}></div>
            <div
              className="absolute top-8 -left-6 w-3 h-3 bg-red-400 rounded-full animate-bounce"
              style={{ animationDelay: "2.5s" }}></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp mb-12"
          style={{ animationDelay: "0.4s" }}>
          <Link
            href="/"
            className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-cyan-500/50">
            <span className="flex items-center justify-center">
              🚀 Return to Earth
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
          </Link>
          <Link
            href="/contact"
            className="group border-2 border-purple-500/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <span className="flex items-center justify-center">
              📡 Send Signal
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Bottom message */}
        <div
          className="text-center animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}>
          <p className="text-gray-400 text-sm">
            Houston, we have a problem... but we&apos;ll get you back on track!
            🛰️
          </p>
        </div>

        {/* Floating particles around the scene */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}></div>
          <div
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s" }}></div>
          <div
            className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping"
            style={{ animationDelay: "2.5s" }}></div>
        </div>
      </div>
    </div>
  );
}
