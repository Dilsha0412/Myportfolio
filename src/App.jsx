import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="antialiased bg-gray-50 dark:bg-black transition-colors min-h-screen text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <hr className="border-t border-white/20 mx-auto max-w-6xl" />
      <About />
      <hr className="border-t border-white/20 mx-auto max-w-6xl" />
      <Skills />
      <hr className="border-t border-white/20 mx-auto max-w-6xl" />
      <Projects />
      <hr className="border-t border-white/20 mx-auto max-w-6xl" />
      <Blog />
      <hr className="border-t border-white/20 mx-auto max-w-6xl" />
      <Contact />
      <hr className="border-t border-white/20 mx-auto max-w-6xl" />
      <Footer />
    </div>
  );
}

export default App;
