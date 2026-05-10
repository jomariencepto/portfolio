import React from 'react';

export default function About({ darkMode }) {
  return (
    <section id="about" className={`${darkMode ? 'bg-slate-800' : 'bg-white'} py-20 px-4 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`${darkMode ? 'text-white' : 'text-slate-950'} section-title`}>About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} text-lg mb-6 leading-relaxed`}>
              I'm a newly graduated developer with knowledge in full-stack development.
              I focus on practical web applications that solve real workflow problems,
              especially ordering, billing, and academic support systems.
            </p>

            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} text-lg mb-6 leading-relaxed`}>
              My recent projects include Sweet Scoop Order and Billing, Jerry's Grill
              Order and Billing, and an AI-Assisted Exam Generator using term frequency
              and inverse document frequency.
            </p>

            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} text-lg mb-6 leading-relaxed`}>
              I have intermediate skills in HTML, CSS, JavaScript, and Python, with
              beginner-level experience in React and Vue. I'm continuing to improve
              through project-based learning and hands-on development.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-blue-600 rounded-lg">
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-blue-100">Recent Projects</p>
              </div>
              <div className="px-6 py-3 bg-blue-600 rounded-lg">
                <p className="text-2xl font-bold text-white">2026</p>
                <p className="text-blue-100">New Graduate</p>
              </div>
              <div className="px-6 py-3 bg-blue-600 rounded-lg">
                <p className="text-2xl font-bold text-white">Full</p>
                <p className="text-blue-100">Stack Knowledge</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className={`${darkMode ? 'card' : 'card-light'}`}>
              <h3 className={`${darkMode ? 'text-white' : 'text-slate-950'} text-xl font-bold mb-4`}>Frontend Development</h3>
              <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                Intermediate in HTML, CSS, and JavaScript, with beginner experience in
                React and Vue. I build responsive interfaces and continue strengthening
                component-based frontend development.
              </p>
            </div>

            <div className={`${darkMode ? 'card' : 'card-light'}`}>
              <h3 className={`${darkMode ? 'text-white' : 'text-slate-950'} text-xl font-bold mb-4`}>Backend Development</h3>
              <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                Intermediate in Python, with experience applying backend logic to
                ordering, billing, data processing, and AI-assisted academic tools.
              </p>
            </div>

            <div className={`${darkMode ? 'card' : 'card-light'}`}>
              <h3 className={`${darkMode ? 'text-white' : 'text-slate-950'} text-xl font-bold mb-4`}>Project Focus</h3>
              <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                I enjoy building systems for real users, from point-of-sale style
                billing workflows to TF-IDF based tools that help generate exam content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
