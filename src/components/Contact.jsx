import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { contactData } from '../data/portfolioData';

const EMAILJS_SERVICE_ID  = 'service_b2nngmh';
const EMAILJS_TEMPLATE_ID = 'template_swru8yl';
const EMAILJS_PUBLIC_KEY  = 'xJWKsokX8ULcjj9HH';

const iconMap = {
  FaGithub: <FaGithub size={20} />,
  FaLinkedin: <FaLinkedin size={20} />,
  FaTwitter: <FaTwitter size={20} />,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name:  formData.name,
      from_email: formData.email,
      email:      formData.email,
      name:       formData.name,
      subject:    formData.subject,
      message:    formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Oops! Something went wrong while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-white dark:bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-normal text-gray-900 dark:text-white mb-4 transition-colors uppercase tracking-tight"
          >
            {contactData.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors"
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
            className="bg-gray-50 dark:bg-[#050505] rounded-none p-8 border border-gray-200 dark:border-white/10 lg:col-span-1 transition-colors"
          >
            <h3 className="text-2xl font-normal text-gray-900 dark:text-white mb-8 transition-colors">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 group/item cursor-default">
                <div className="p-4 dark:bg-white/10 bg-gray-900/10 rounded-none dark:text-white text-gray-900 group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wider mb-1 uppercase transition-colors">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium break-all transition-colors">{contactData.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group/item cursor-default">
                <div className="p-4 dark:bg-white/10 bg-gray-900/10 rounded-none dark:text-white text-gray-900 group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wider mb-1 uppercase transition-colors">Phone</p>
                  <p className="text-gray-900 dark:text-white font-medium transition-colors">{contactData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item cursor-default">
                <div className="p-4 dark:bg-white/10 bg-gray-900/10 rounded-none dark:text-white text-gray-900 group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wider mb-1 uppercase transition-colors">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium transition-colors">{contactData.location}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wider mb-4 uppercase transition-colors">Follow Me</p>
              <div className="flex gap-4">
                {contactData.socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-gray-200 dark:bg-[#111] rounded-none text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-300 dark:hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.1)] transition-all duration-300"
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
            className="bg-gray-50 dark:bg-[#050505] rounded-none p-8 border border-gray-200 dark:border-white/10 lg:col-span-2 transition-colors relative overflow-hidden"
          >
            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-0 left-0 right-0 bg-green-500/10 border-b border-green-500/20 p-4 flex items-center justify-center gap-3 text-green-600 dark:text-green-400"
                >
                  <FaCheckCircle size={20} />
                  <span className="font-medium">Message sent successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form className={`space-y-6 ${showSuccess ? 'mt-12' : ''} transition-all duration-300`} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 transition-colors">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white dark:bg-[#111]/50 border border-gray-300 dark:border-white/10 rounded-none px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 transition-colors">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white dark:bg-[#111]/50 border border-gray-300 dark:border-white/10 rounded-none px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 transition-colors">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-white dark:bg-[#111]/50 border border-gray-300 dark:border-white/10 rounded-none px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 transition-colors">Message</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full bg-white dark:bg-[#111]/50 border border-gray-300 dark:border-white/10 rounded-none px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-transparent border border-white/30 text-white font-medium py-4 rounded-none hover:bg-white/5 hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

