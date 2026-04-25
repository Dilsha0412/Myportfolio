import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

const About = () => {

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0b1120] text-gray-600 dark:text-gray-300 relative font-sans transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="flex flex-col items-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors"
          >
            {aboutData.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          ></motion.div>
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
              <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl transform -translate-x-4 -translate-y-4"></div>
              {/* Photo card */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl z-10 border border-gray-200 dark:border-gray-700 transition-colors">
                <img
                  src={profileImg}
                  alt="Dilsha Jayasekara"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/70 dark:from-[#0b1120]/70 to-transparent transition-colors"></div>
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
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
              {aboutData.subtitle}
            </h3>

            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-10 transition-colors">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="bg-gray-50 dark:bg-[#161d2d] border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center shadow-lg hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
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
