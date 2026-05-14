import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { blogData } from '../data/portfolioData';

const Blog = () => {
  return (
    <section id="blog" className="py-20 relative bg-gray-50 dark:bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors uppercase"
          >
            {blogData.title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[1px] w-full bg-gray-200 dark:bg-gray-800"
          ></motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="bg-white dark:bg-[#0b101e] rounded-xl border border-gray-200 dark:border-gray-800/60 p-6 flex flex-col group hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 cursor-pointer block"
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
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
                    className="px-3 py-1 text-xs font-medium bg-purple-50/50 dark:bg-transparent text-purple-600 dark:text-[#9e82ff] border border-purple-200 dark:border-[#382a5c] rounded-full"
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
