import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { heroData } from '../data/portfolioData';

const Navbar = () => {

  return (
    <nav className="w-full fixed top-0 z-50 px-8 py-6 flex items-center justify-center bg-black transition-colors">
      
      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-base md:text-lg font-normal text-gray-400 transition-colors">
        <a href="#home" className="relative hover:text-white transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Home</a>
        <a href="#about" className="relative hover:text-white transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a>
        <a href="#skills" className="relative hover:text-white transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Skills</a>
        <a href="#projects" className="relative hover:text-white transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Projects</a>
        <a href="#blog" className="relative hover:text-white transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Blog</a>
        <a href="#contact" className="relative hover:text-white transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a>
      </div>

      {/* CV Download Button */}
      <div className="absolute right-8">
        <a
          href={heroData.secondaryCtaLink}
          download="Dilsha_Jayasekara_CV.pdf"
          className="flex items-center gap-1.5 px-4 py-1.5 bg-transparent border border-white/30 hover:border-white text-white hover:bg-white hover:text-black font-normal rounded-none transition-all duration-300 tracking-wider text-xs hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105 cursor-pointer"
        >
          <FiDownload className="text-base" />
          <span>CV</span>
        </a>
      </div>
      
    </nav>
  );
};

export default Navbar;
