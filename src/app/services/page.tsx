import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Modern Frameworks"],
      icon: "🌐"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      features: ["AWS/Azure/GCP", "DevOps", "CI/CD Pipelines", "Monitoring & Analytics"],
      icon: "☁️"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates engaging and intuitive experiences.",
      features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
      icon: "🎨"
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting to help your business grow.",
      features: ["Technology Strategy", "Digital Transformation", "Code Review", "Architecture Planning"],
      icon: "💡"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance for your digital products.",
      features: ["24/7 Support", "Performance Monitoring", "Security Updates", "Feature Enhancements"],
      icon: "🔧"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}
