import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About RewindLoop</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              At RewindLoop, we're passionate about creating innovative solutions that transform how businesses operate in the digital age.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver cutting-edge technology solutions that empower businesses to achieve their goals efficiently and effectively.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading technology partner for businesses seeking innovation and digital transformation.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded with a vision to bridge the gap between technology and business success, RewindLoop has been at the forefront of digital innovation. Our team of experts combines technical expertise with business acumen to deliver solutions that make a real difference.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Innovation: We constantly push the boundaries of what's possible</li>
              <li>Quality: We deliver excellence in everything we do</li>
              <li>Partnership: We work closely with our clients as trusted advisors</li>
              <li>Integrity: We conduct business with the highest ethical standards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
