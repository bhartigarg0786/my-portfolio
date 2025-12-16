import RotatingText from "@/components/RotatingText";

import { FaBars, FaTimes } from "react-icons/fa";


import { useState } from "react";
import SimpleDock from "./Docks";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-[#060010] text-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          
          {/* Brand - Improved sizing and responsive */}
          <div className="flex items-center text-base sm:text-lg font-extrabold text-blue-400 p-2">
            <span className="hidden sm:inline">Welcome to My Portfolio — Showcasing</span>
            <span className="sm:hidden">Portfolio —</span>
            <RotatingText 
              texts={[' Design', ' Development', ' Innovation']} 
              mainClassName="ml-2 px-2 sm:px-2 md:px-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg text-white overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg shadow-md"
            />
          </div>

          {/* Desktop Links - Improved hierarchy and colors */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-base text-gray-300 hover:text-blue-400 transition duration-300 font-medium">Home</a>
            <a href="#Skill" className="text-base text-gray-300 hover:text-blue-400 transition duration-300 font-medium">Skill</a>
            <a href="#Experince" className="text-base text-gray-300 hover:text-blue-400 transition duration-300 font-medium">Experience</a>
            <a href="#projects" className="text-base text-gray-300 hover:text-blue-400 transition duration-300 font-medium">Projects</a>
            <a href="#contact" className="text-base text-gray-300 hover:text-blue-400 transition duration-300 font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none transition duration-300"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

        </div>

        {/* Mobile Menu - Improved contrast and colors */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-gray-700">
            <div className="px-4 py-2 space-y-2">
              <a 
                href="#home" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
              >
                Home
              </a>
              <a 
                href="#Skill" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
              >
                Skill
              </a>
              <a 
                href="#Experince" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Dock - Outside navbar */}
      <SimpleDock />
    </>
  );
}

export default Navbar;