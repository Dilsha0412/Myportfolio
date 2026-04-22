import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="antialiased bg-[#0b1120] min-h-screen text-gray-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
