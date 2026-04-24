import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { contactData } from '../data/portfolioData';

const iconMap = {
  FaGithub: <FaGithub size={20} />,
  FaLinkedin: <FaLinkedin size={20} />,
  FaTwitter: <FaTwitter size={20} />,
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {contactData.title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {contactData.subtitle}
          </motion.p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0f172a] rounded-2xl p-8 border border-gray-800/50 lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-blue-500/10 rounded-xl text-blue-500">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium tracking-wider mb-1 uppercase">Email</p>
                  <p className="text-white font-medium break-all">{contactData.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-purple-500/10 rounded-xl text-purple-500">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium tracking-wider mb-1 uppercase">Phone</p>
                  <p className="text-white font-medium">{contactData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-blue-500/10 rounded-xl text-blue-500">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium tracking-wider mb-1 uppercase">Location</p>
                  <p className="text-white font-medium">{contactData.location}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 font-medium tracking-wider mb-4 uppercase">Follow Me</p>
              <div className="flex gap-4">
                {contactData.socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-slate-800 rounded-xl text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    {iconMap[social.icon]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0f172a] rounded-2xl p-8 border border-gray-800/50 lg:col-span-2"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full bg-slate-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can I help you?"
                  className="w-full bg-slate-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full bg-slate-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="bg-blue-500 text-white font-medium px-8 py-3 rounded-xl hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
