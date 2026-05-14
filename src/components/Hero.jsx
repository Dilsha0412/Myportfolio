import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { heroData } from '../data/portfolioData';
import heroImage from '../assets/Untitled.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent relative font-sans transition-colors overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-left pr-0 md:pr-10 z-10 -mt-8 md:-mt-16">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-normal text-gray-900 dark:text-white mb-6 tracking-tight transition-colors uppercase leading-tight"
          >
            Hi, I'm <span className="text-gray-900 dark:text-white">{heroData.firstName}</span> <br/>
            <span className="text-gray-900 dark:text-white">{heroData.lastName}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 dark:text-white mb-8 transition-colors uppercase"
          >
            I am {' '}
            <span className="text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-none">
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
              download="Dilsha_Jayasekara_CV.pdf"
              className="px-8 py-3.5 bg-transparent border border-white text-white hover:bg-white hover:text-black font-medium rounded-none transition-all duration-300 uppercase tracking-wider text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105"
            >
              {heroData.secondaryCtaText}
            </a>
            <a
              href={heroData.primaryCtaLink}
              className="px-8 py-3.5 bg-transparent border border-white text-white hover:bg-white hover:text-black font-medium rounded-none transition-all duration-300 uppercase tracking-wider text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105"
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
            <a href={heroData.socialLinks[0].url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href={heroData.socialLinks[1].url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href={heroData.socialLinks[2].url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300">
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
