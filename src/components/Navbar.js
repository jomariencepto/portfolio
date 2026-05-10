import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const githubUrl = 'https://github.com/jomariencepto';
  const linkedinUrl = 'https://www.linkedin.com/search/results/all/?keywords=Jomari%20Encepto';

  return (
    <nav className={`${darkMode ? 'bg-slate-900/95 text-white border-slate-800' : 'bg-white/95 text-slate-900 border-slate-200'} shadow-lg sticky top-0 z-50 border-b backdrop-blur transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link 
              to="home" 
              smooth={true} 
              duration={500}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent cursor-pointer"
            >
              My  Portfolio
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors cursor-pointer font-medium`}
                >
                  {link}
                </Link>
              ))}
              <div className="flex space-x-4">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`} aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`} aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`${darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'} p-2 rounded-lg transition-colors`}
                aria-label="Toggle color mode"
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`${darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'} p-2 rounded-lg transition-colors`}
              aria-label="Toggle color mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${darkMode ? 'text-white' : 'text-slate-900'}`}
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className={`${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'} md:hidden px-4 pb-4 transition-colors duration-300`}>
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className={`block ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors cursor-pointer font-medium`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
            <div className="flex space-x-4 pt-4">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
