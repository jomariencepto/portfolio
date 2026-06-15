import React from 'react';
import { FaArrowDown, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 pt-20 relative overflow-hidden transition-colors duration-300"
    >
      <div className="hero-pattern"></div>

      <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-[1fr_0.92fr] gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className={`${darkMode ? 'border-slate-700 bg-slate-900/70 text-cyan-200' : 'border-slate-200 bg-white text-slate-700'} inline-flex items-center gap-3 rounded-full border px-4 py-2 mb-6 shadow-sm`}>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-semibold">UI/UX-minded full-stack portfolio</span>
          </div>

          {/* Profile Image */}
          <div className="mb-7 lg:hidden relative z-20">
            <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 p-1 shadow-2xl shadow-slate-950/20">
              <div className={`${darkMode ? 'bg-slate-900' : 'bg-white'} w-full h-full rounded-full flex items-center justify-center overflow-hidden`}>
                <img
                  src="/profile.jpg"
                  alt="Jomari Encepto"
                  className="w-full h-full object-cover object-[center_14%] rounded-full"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className={`${darkMode ? 'text-white' : 'text-slate-950'} text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight`}>
            Hi, I'm Jomari Encepto.
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              I design clean interfaces and build the logic behind them.
            </span>
          </h1>

          {/* Description */}
          <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0`}>
            Newly graduated developer from Pambayang Dalubhasaan ng Marilao, focused on
            responsive UI, practical user workflows, and full-stack systems for ordering,
            billing, and AI-assisted academic tools.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            {['UX flows', 'Responsive UI', 'React', 'Python', 'Billing systems'].map((item) => (
              <span
                key={item}
                className={`${darkMode ? 'bg-slate-900 text-slate-200 border-slate-700' : 'bg-white text-slate-700 border-slate-200'} rounded-full border px-4 py-2 text-sm font-semibold shadow-sm`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
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
              className="btn-secondary inline-flex items-center justify-center cursor-pointer"
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
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -top-8 right-2 z-30 w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400/70 shadow-2xl shadow-slate-950/30 bg-slate-200 ring-4 ring-cyan-400/20">
            <img
              src="/profile.jpg"
              alt="Jomari Encepto"
              className="w-full h-full object-cover object-[center_14%]"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="design-lab">
            <div className={`${darkMode ? 'border-slate-700' : 'border-slate-300 bg-white/75'} design-lab__canvas`}>
              <div className="design-lab__topbar">
                <span className="bg-rose-400"></span>
                <span className="bg-amber-400"></span>
                <span className="bg-emerald-400"></span>
              </div>
              <div className="design-lab__grid">
                <div className={`${darkMode ? 'design-lab__pane' : 'design-lab__pane bg-slate-50/90'} rounded-xl`}>
                  <span className={`${darkMode ? 'bg-cyan-400 text-slate-950' : 'bg-cyan-100 text-cyan-700'} design-lab__chip`}>Design</span>
                  <div className="wire-card"></div>
                  <div className="wire-row">
                    <span></span>
                    <span></span>
                  </div>
                  <div className="wire-row wire-row--short">
                    <span></span>
                    <span></span>
                  </div>
                  <button type="button" className="wire-button">Build UI</button>
                </div>
                <div className={`${darkMode ? 'design-lab__pane' : 'design-lab__pane bg-slate-50/90'} rounded-xl`}>
                  <span className={`${darkMode ? 'bg-violet-400 text-white' : 'bg-violet-100 text-violet-700'} design-lab__chip`}>Code</span>
                  <div className="code-line code-line--one"></div>
                  <div className="code-line code-line--two"></div>
                  <div className="code-line code-line--three"></div>
                  <div className={`${darkMode ? 'data-node--frontend' : 'data-node--frontend'} data-node`}>FE</div>
                  <div className={`${darkMode ? 'data-node--api' : 'data-node--api'} data-node`}>API</div>
                  <div className={`${darkMode ? 'data-node--db' : 'data-node--db'} data-node`}>DB</div>
                  <div className="data-link data-link--one"></div>
                  <div className="data-link data-link--two"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          aria-label="Scroll to about section"
        >
          <FaArrowDown
            className="mx-auto text-cyan-400"
            size={28}
          />
        </Link>
      </div>
    </section>
  );
}
