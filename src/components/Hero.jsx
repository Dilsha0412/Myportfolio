import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { heroData } from '../data/portfolioData';
import heroImage from '../assets/Untitled.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent relative font-sans transition-colors overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-left pr-0 md:pr-10 z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#3b82f6] font-bold tracking-[0.2em] text-xs md:text-sm mb-6 uppercase"
          >
            {heroData.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors"
          >
            Hi, I'm <span className="text-[#60a5fa]">{heroData.firstName}</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c084fc]">{heroData.lastName}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors"
          >
            I am {' '}
            <span className="text-[#3b82f6] bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-md">
              <Typewriter
                words={heroData.roles}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light transition-colors max-w-xl"
          >
            {heroData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 mb-12"
          >
            <a
              href={heroData.secondaryCtaLink}
              download="My_CV.pdf"
              className="px-8 py-3.5 bg-transparent border border-[#3b82f6] text-gray-900 dark:text-white hover:bg-[#3b82f6] hover:border-[#3b82f6] hover:text-white font-medium rounded-sm transition-all duration-300 uppercase tracking-wider text-sm"
            >
              {heroData.secondaryCtaText}
            </a>
            <a
              href={heroData.primaryCtaLink}
              className="px-8 py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium rounded-sm transition-all duration-300 uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            >
              {heroData.primaryCtaText}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-start gap-6"
          >
            <a href={heroData.socialLinks[0].url} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href={heroData.socialLinks[1].url} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href={heroData.socialLinks[2].url} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full md:w-3/5 mt-12 md:mt-0 flex justify-center md:justify-end absolute right-0 top-0 bottom-0 pointer-events-none md:relative"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, transparent 15%, black 30%)',
            maskImage: 'linear-gradient(to top, transparent 15%, black 30%)'
          }}
        >
          <img 
            src={heroImage} 
            alt="Hero Portrait" 
            className="h-full w-full object-cover object-top md:object-right-top dark:mix-blend-lighten scale-110 md:scale-125 transform origin-top-right -translate-y-8 md:-translate-y-16 translate-x-8 md:translate-x-20 opacity-80 md:opacity-90"
            style={{ 
              maxHeight: '100vh',
              maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
