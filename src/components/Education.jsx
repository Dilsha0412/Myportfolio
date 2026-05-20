import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-black text-gray-600 dark:text-gray-300 relative font-sans transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-normal text-gray-900 dark:text-white mb-4 transition-colors uppercase tracking-tight"
          >
            {educationData.title}
          </motion.h2>
        </div>

        <div className="space-y-0 border-l border-r border-t border-white/10">
          {educationData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row p-8 md:p-12 border-b border-white/10 hover:bg-white/[0.04] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:-translate-y-2 transition-all duration-500 relative"
            >
              <div className="absolute inset-0 border border-transparent group-hover:border-white/60 pointer-events-none transition-colors duration-500 z-10"></div>
              {/* Left Side: Icon & Date */}
              <div className="flex flex-col items-start md:items-center w-full md:w-1/4 mb-6 md:mb-0 md:pr-8">
                <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg overflow-hidden">
                  {edu.image ? (
                    <img src={edu.image} alt={edu.institution} className="w-full h-full object-contain p-2" />
                  ) : edu.icon === 'UOK' ? (
                    <FaUniversity className="text-5xl text-gray-800" />
                  ) : (
                    <FaGraduationCap className="text-5xl text-gray-800" />
                  )}
                </div>
                <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide mt-2">{edu.date}</p>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-3/4 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-normal text-white mb-3 md:mb-4">{edu.degree}</h3>
                <p className="text-lg md:text-xl text-gray-400 mb-5">{edu.institution}</p>
                <ul className="space-y-2">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-400 text-sm md:text-base">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
