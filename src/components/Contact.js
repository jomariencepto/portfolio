import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

export default function Contact({ darkMode }) {
  const email = 'enceptojomari.pdm@gmail.com';
  const phone = '09126739541';
  const githubUrl = 'https://github.com/jomariencepto';
  const linkedinUrl = 'https://www.linkedin.com/search/results/all/?keywords=Jomari%20Encepto';

  return (
    <section id="contact" className="py-20 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className={`${darkMode ? 'text-white' : 'text-slate-950'} section-title`}>Let's Connect</h2>

        <div className={`${darkMode ? 'bg-slate-900/70 border-slate-700' : 'bg-white/85 border-slate-200'} contact-panel border`}>
          <div className="contact-panel__content">
            <h3 className={`${darkMode ? 'text-white' : 'text-slate-950'} text-2xl font-bold mb-8`}>Get In Touch</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-4 rounded-lg">
                  <FaEnvelope className="text-white" size={24} />
                </div>
                <div>
                  <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} font-semibold`}>Email</p>
                  <a href={`mailto:${email}`} className={`${darkMode ? 'text-white' : 'text-slate-900'} hover:text-blue-400 transition-colors`}>
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-4 rounded-lg">
                  <FaPhone className="text-white" size={24} />
                </div>
                <div>
                  <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} font-semibold`}>Phone</p>
                  <a href="tel:+639126739541" className={`${darkMode ? 'text-white' : 'text-slate-900'} hover:text-blue-400 transition-colors`}>
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <h4 className={`${darkMode ? 'text-white' : 'text-slate-950'} text-xl font-bold mb-6`}>Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${darkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900 border border-slate-200'} hover:bg-blue-600 hover:text-white p-4 rounded-lg transition-colors`}
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${darkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900 border border-slate-200'} hover:bg-blue-600 hover:text-white p-4 rounded-lg transition-colors`}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 max-w-md">
                <p className="text-white mb-2">
                  <span className="font-bold text-2xl">Available</span> for entry-level opportunities
                </p>
                <p className="text-blue-100">Open to UI/UX-focused frontend, full-stack, backend, and junior developer roles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
