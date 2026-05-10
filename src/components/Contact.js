import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const email = 'enceptojomari.pdm@gmail.com';
  const phone = '09126739541';
  const githubUrl = 'https://github.com/jomariencepto';
  const linkedinUrl = 'https://www.linkedin.com/search/results/all/?keywords=Jomari%20Encepto';

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    });

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = `${darkMode ? 'bg-slate-700 text-white placeholder:text-slate-400' : 'bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300'} w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`;
  const labelClass = `${darkMode ? 'text-white' : 'text-slate-900'} block font-semibold mb-2`;

  return (
    <section id="contact" className={`${darkMode ? 'bg-slate-900' : 'bg-slate-50'} py-20 px-4 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`${darkMode ? 'text-white' : 'text-slate-950'} section-title`}>Let's Connect</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`${darkMode ? 'text-white' : 'text-slate-950'} text-2xl font-bold mb-8`}>Get In Touch</h3>

            <div className="space-y-6 mb-12">
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

            <h4 className={`${darkMode ? 'text-white' : 'text-slate-950'} text-xl font-bold mb-6`}>Follow Me</h4>
            <div className="flex space-x-4 mb-8">
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

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6">
              <p className="text-white mb-2">
                <span className="font-bold text-2xl">Available</span> for entry-level opportunities
              </p>
              <p className="text-blue-100">Open to full-stack, frontend, backend, and junior developer roles.</p>
            </div>
          </div>

          <div className={darkMode ? 'card' : 'card-light'}>
            {submitted && (
              <div className="mb-6 p-4 bg-green-600 text-white rounded-lg">
                Thank you. Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />

              <div className="mb-6">
                <label className={labelClass}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label className={labelClass}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="How can I help?"
                />
              </div>

              <div className="mb-6">
                <label className={labelClass}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={inputClass}
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
