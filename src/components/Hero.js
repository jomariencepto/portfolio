import React from 'react';
import { FaArrowDown, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`${darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-white to-slate-100'} min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-60 h-60 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
            
            <div className={`${darkMode ? 'bg-slate-900' : 'bg-white'} w-full h-full rounded-full flex items-center justify-center overflow-hidden`}>
              <img
                src="/profile.jpg"
                alt="Profile"
                  className="w-full h-full object-cover object-[center_15%] rounded-full"
              />
            </div>

          </div>
        </div>

        {/* Heading */}
        <h1 className={`${darkMode ? 'text-white' : 'text-slate-950'} text-5xl md:text-7xl font-bold mb-6`}>
          Hi, I'm Jomari Encepto, a{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Beginner Full-Stack Developer
          </span>
        </h1>

        {/* Description */}
        <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} text-xl md:text-2xl mb-8 leading-relaxed`}>
          A newly graduated developer from Pambayang Dalubhasaan ng Marilao with
          full-stack development knowledge, hands-on order and billing system projects,
          and experience building an AI-assisted exam generator using TF-IDF.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/Encepto%20Jomari%20A.%20Resume.pdf"
            download="Encepto_Jomari_Resume.pdf"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <FaDownload size={16} />
            <span>Download CV</span>
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="btn-secondary inline-block cursor-pointer"
          >
            View My Work
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-950'} px-6 py-3 font-semibold transition-colors cursor-pointer`}
          >
            Get In Touch
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <FaArrowDown
              className="mx-auto text-blue-400"
              size={28}
            />
          </Link>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
}
