import React from 'react';
import { footerData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {footerData.year} {footerData.name}. All rights reserved.
        </p>
        
        <div className="flex space-x-6">
          {footerData.links.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
