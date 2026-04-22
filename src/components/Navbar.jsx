import React from 'react';
import { FiSun } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 px-8 py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-white">Dilsha</span>
        <span className="text-blue-500">Jayasekara</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
        <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
        <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>

        {/* Theme Toggle Button */}
        <button className="ml-4 p-2 rounded-full bg-[#1e2336] text-yellow-500 hover:bg-[#2a3044] transition-colors border border-gray-700">
          <FiSun size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
