"use client";
import { useState, useEffect } from "react";

interface Service {
  title: string;
  description: string;
  detailedDescription?: string;
  features?: string[];
  technologies?: string[];
  icon: React.ReactElement;
  gradient: string;
  hoverDirection?: string;
}

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({
  service,
  isOpen,
  onClose,
}: ServiceModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isVisible || !service) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleBackdropClick}></div>

      {/* Modal Content */}
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={handleBackdropClick}>
        <div
          className={`relative bg-gray-900/95 backdrop-blur-lg rounded-3xl border border-purple-500/30 max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
          }`}
          onClick={(e) => e.stopPropagation()}>
          {/* Animated Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-gradient-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-blue-500/15 via-cyan-500/15 to-purple-500/15 rounded-full filter blur-3xl animate-gradient-shift"></div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 bg-gray-800/50 hover:bg-gray-700/70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 group">
            <svg
              className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Content with Custom Scrollbar */}
          <div className="relative z-10 p-8 overflow-y-auto max-h-[90vh] custom-scrollbar">
            {/* Header */}
            <div className="text-center mb-8">
              <div
                className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${service?.gradient} rounded-3xl flex items-center justify-center animate-float shadow-2xl`}>
                <div className="text-white scale-125">{service?.icon}</div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service?.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {service?.detailedDescription}
              </p>
            </div>

            {/* Features Section */}
            {service?.features && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Key Features
                  </span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Section */}
            {service?.technologies && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                    Technologies We Use
                  </span>
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {service.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 text-white font-medium hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="text-center pt-8 border-t border-gray-700/30">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-400 mb-6">
                Let&apos;s discuss how we can help transform your business with{" "}
                {service?.title?.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-500/50">
                  Start Your Project
                </button>
                <button className="border-2 border-purple-500/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-50"
              style={{ animationDelay: "1s" }}></div>
            <div
              className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60"
              style={{ animationDelay: "2s" }}></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-40"
              style={{ animationDelay: "1.5s" }}></div>
            <div
              className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50"
              style={{ animationDelay: "2.5s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
