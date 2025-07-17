import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Partners = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-grid-pattern" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Sharp geometric shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-black opacity-5 transform rotate-45 translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-600 opacity-10 transform -rotate-12 -translate-x-32 translate-y-32"></div>
      
      <div className="relative z-10 px-6 sm:px-12 md:px-16 lg:px-20 py-16">
        {/* Header with animated underline */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-wider mb-6 relative">
            <span className="relative z-10">Our Partners</span>
           
          </h1>
          <div className="w-24 h-1 bg-black mx-auto mt-8"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image Section */}
            <div className="relative group">
              <div className="bg-black p-8 sm:p-12 transform hover:scale-105 transition-transform duration-300 relative">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 bg-white"></div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-white"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-white"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-white"></div>
                
                <img
                  src="https://i.postimg.cc/q7Wqj6sG/ABC-logo.png"
                  alt="Agricultural Bank of China Logo"
                  className="w-full h-auto max-h-80 object-contain filter brightness-110 contrast-110"
                />
              </div>
              
              {/* Shadow effect */}
              <div className="absolute inset-0 bg-black opacity-20 transform translate-x-4 translate-y-4 -z-10"></div>
            </div>

            {/* Right: Content Section */}
            <div className="space-y-8">
              <div className="border-l-4 border-black pl-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wide mb-6 leading-tight">
                  Agricultural Bank
                  <br />
                  <span className="text-gray-600">of China</span>
                </h2>
                
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    The Agricultural Bank of China (ABC), one of the world's largest financial institutions, proudly partners with us to promote global cultural exchange through music and the arts.
                  </p>
                  <p>
                    As a strategic sponsor, ABC supports our mission to bring world-class concerts to life with unmatched passion and professionalism.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <a
                  href="https://www.abchina.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block"
                >
                  <div className="bg-black flex gap-4 justify-center items-center align-middle text-white px-10 py-4 font-black uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors duration-200 relative z-10">
                    Visit   Website <FaLongArrowAltRight />

                  </div>
                  <div className="absolute inset-0 bg-gray-900 transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Partners;