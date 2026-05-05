import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { heroData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent relative font-sans transition-colors">
      {/* Subtle background glow effect */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 pt-20">
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
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors"
        >
          Hi, I'm <span className="text-[#60a5fa]">{heroData.firstName}</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c084fc]">{heroData.lastName}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-8 transition-colors"
        >
          I am {' '}
          <span className="text-[#3b82f6]">
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
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-colors"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={heroData.secondaryCtaLink}
            download="My_CV.pdf"
            className="px-8 py-3.5 bg-transparent border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white font-medium rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/5"
          >
            {heroData.secondaryCtaText}
          </a>
          <a
            href={heroData.primaryCtaLink}
            className="px-8 py-3.5 bg-[#0ea5e9] text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:-translate-y-0.5"
          >
            {heroData.primaryCtaText}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-6"
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
    </section>
  );
};

export default Hero;
