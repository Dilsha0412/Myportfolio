import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';
import profileImg from '../assets/gemisaver_Gemini_Generated_Image_7wb3oy7wb3oy7wb3 (1).png';

const About = () => {

  return (
    <section id="about" className="py-24 bg-white dark:bg-black text-gray-600 dark:text-gray-300 relative font-sans transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="flex flex-col items-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-normal text-gray-900 dark:text-white mb-4 transition-colors uppercase tracking-tight"
          >
            {aboutData.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Column: Avatar/Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 md:w-72" style={{ height: '420px' }}>
              {/* Decorative back border */}
              <div className="absolute inset-0 border-2 border-white/30 rounded-none transform -translate-x-4 -translate-y-4"></div>
              {/* Photo card */}
              <div className="absolute inset-0 rounded-none overflow-hidden shadow-2xl z-10 border border-gray-200 dark:border-white/10 transition-colors bg-black">
                <img
                  src={profileImg}
                  alt="Dilsha Jayasekara"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-normal text-gray-900 dark:text-white mb-6 transition-colors">
              {aboutData.subtitle}
            </h3>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-10 transition-colors">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-none px-6 py-4 md:px-8 md:py-5 min-w-[180px] text-center shadow-lg hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="text-3xl md:text-4xl font-normal dark:text-white text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
