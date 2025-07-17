import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern design and seamless user experience.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      image: "/api/placeholder/400/250",
      category: "Web Development",
      status: "Completed"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Node.js", "Express", "MongoDB", "JWT", "Biometric Auth"],
      image: "/api/placeholder/400/250",
      category: "Mobile Development",
      status: "Completed"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence and data visualization.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
      image: "/api/placeholder/400/250",
      category: "Web Development",
      status: "In Progress"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform for clinics and hospitals.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS", "Stripe"],
      image: "/api/placeholder/400/250",
      category: "Web Development",
      status: "Completed"
    },
    {
      title: "IoT Monitoring App",
      description: "Mobile application for monitoring and controlling IoT devices remotely.",
      technologies: ["Flutter", "Dart", "Firebase", "MQTT", "AWS IoT", "Real-time DB"],
      image: "/api/placeholder/400/250",
      category: "Mobile Development",
      status: "Completed"
    },
    {
      title: "Social Media Platform",
      description: "Modern social media platform with real-time messaging and content sharing.",
      technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Redis", "WebSocket"],
      image: "/api/placeholder/400/250",
      category: "Web Development",
      status: "In Progress"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Cloud Solutions"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-blue-600 hover:text-white transition-colors border border-gray-300"
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Like What You See?</h2>
          <p className="text-gray-600 mb-8">
            Let&apos;s work together to bring your project to life.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
