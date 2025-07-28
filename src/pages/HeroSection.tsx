import { User, MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import React, { useEffect, useState } from "react";

// Hero Section Component
const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className={`text-center z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Amol Gupta
          </h1>
          <p className="text-2xl text-gray-300 mb-6">Senior Software Engineer</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate backend developer with expertise in Java Spring Boot, AWS, and distributed systems. 
            Building scalable solutions that drive millions in revenue savings.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <div className="flex items-center space-x-2 text-gray-300">
            <MapPin className="w-5 h-5" />
            <span>Leander, TX</span>
          </div>
          <a href="mailto:amol.g98@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span>amol.g98@gmail.com</span>
          </a>
          <a href="tel:352-745-9752" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
            <span>352-745-9752</span>
          </a>
        </div>

        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/amol-gupta" target="_blank" rel="noopener noreferrer" 
             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.github.com/amolg98" target="_blank" rel="noopener noreferrer"
             className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
