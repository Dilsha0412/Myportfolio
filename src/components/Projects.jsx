import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projectsData.projects.filter(project => 
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-20 relative bg-gray-50 dark:bg-transparent transition-colors">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-normal text-gray-900 dark:text-white mb-8 transition-colors uppercase tracking-tight"
          >
            {projectsData.title}
          </motion.h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectsData.categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-none text-sm font-medium transition-all duration-300 border ${
                filter === cat 
                  ? 'border-white text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                  : 'border-white/10 bg-transparent text-gray-500 hover:text-white hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-white dark:bg-[#050505] rounded-none overflow-hidden border border-gray-200 dark:border-white/10 hover:border-white/30 group transition-all duration-500 hover:shadow-[0_8px_30px_rgba(255,255,255,0.06)] hover:-translate-y-2 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-[#111] transition-colors">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  
                  {/* Links (Hover) */}
                  <div className="absolute bottom-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-md rounded-none text-white hover:bg-white/20 transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-md rounded-none text-white hover:bg-white/20 transition-colors"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="dark:text-white text-gray-900 text-sm font-normal tracking-wider mb-2 uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-normal text-gray-900 dark:text-white mb-4 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-1 transition-colors">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-[#111]/50 text-gray-600 dark:text-gray-300 rounded-none transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
