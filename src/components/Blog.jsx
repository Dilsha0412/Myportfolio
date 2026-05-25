import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { blogData } from '../data/portfolioData';

const Blog = () => {
  return (
    <section id="blog" className="py-20 relative bg-gray-50 dark:bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-normal text-gray-900 dark:text-white mb-4 transition-colors uppercase tracking-tight"
          >
            {blogData.title}
          </motion.h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogData.articles.map((article, index) => (
            <motion.a
              href={article.link}
              target={article.link.startsWith('http') ? "_blank" : "_self"}
              rel={article.link.startsWith('http') ? "noopener noreferrer" : ""}
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#050505] rounded-none border border-gray-200 dark:border-white/10 p-6 flex flex-col group hover:border-white/30 dark:hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/5 dark:hover:shadow-white/5 cursor-pointer block"
            >
              {/* Date and Read Time */}
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 font-mono">
                <span>{article.date}</span>
                <span className="mx-3 flex items-center">
                  <FiClock className="mr-1.5" size={14} />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-normal text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {article.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-transparent text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/20 rounded-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Link */}
              <span className="mt-auto inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                Read more <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
