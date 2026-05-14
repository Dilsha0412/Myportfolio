import React from 'react';

const Navbar = () => {

  return (
    <nav className="w-full fixed top-0 z-50 px-8 py-6 flex items-center justify-between bg-white/80 dark:bg-[#0b1120]/80 backdrop-blur-md transition-colors border-b border-gray-200 dark:border-transparent">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-gray-900 dark:text-white transition-colors">Dilsha</span>
        <span className="text-blue-600 dark:text-blue-500 transition-colors">Jayasekara</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors">
        <a href="#home" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
        <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
        <a href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a>
        <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
