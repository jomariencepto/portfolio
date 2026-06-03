import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'text-slate-100' : 'text-slate-900'} galaxy-shell min-h-screen transition-colors duration-300`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={true} />
      <About darkMode={true} />
      <Skills darkMode={true} />
      <Projects darkMode={true} />
      <Contact darkMode={true} />
      <Footer darkMode={true} />
    </div>
  );
}

export default App;
