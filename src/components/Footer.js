import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();
  const githubUrl = 'https://github.com/jomariencepto';
  const linkedinUrl = 'https://www.linkedin.com/in/jomari-encepto-759b071a1/';

  return (
    <footer className={`${darkMode ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-white text-slate-600 border-slate-200'} py-12 px-4 border-t transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className={`${darkMode ? 'text-white' : 'text-slate-950'} font-bold text-xl mb-4`}>Jomari Encepto</h3>
            <p className="text-sm">
              Newly graduated full-stack developer focused on practical web systems, billing workflows, and AI-assisted tools.
            </p>
          </div>

          <div>
            <h4 className={`${darkMode ? 'text-white' : 'text-slate-950'} font-semibold mb-4`}>Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`${darkMode ? 'text-white' : 'text-slate-950'} font-semibold mb-4`}>Skills</h4>
            <ul className="space-y-2 text-sm">
              <li>HTML, CSS, JavaScript</li>
              <li>Python</li>
              <li>React and Vue basics</li>
              <li>TF-IDF</li>
            </ul>
          </div>

          <div>
            <h4 className={`${darkMode ? 'text-white' : 'text-slate-950'} font-semibold mb-4`}>Connect</h4>
            <div className="flex space-x-4">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

                <div className={`${darkMode ? 'border-slate-800' : 'border-slate-200'} border-t py-8`}>
          <div className="flex flex-col md:flex-row justify-center items-center text-sm gap-4 text-center">
            <p>Copyright {currentYear} Jomari Encepto. All rights reserved.</p>
                    
          </div>
        </div>
      </div>
    </footer>
  );
}
